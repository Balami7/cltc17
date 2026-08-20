"use client"

import { useEffect, useRef, useState } from "react"

type School = {
  id?: string
  name: string
  location?: string
  photo_urls?: string[]
  school_email?: string
}

export default function SchoolsListClient({ apiBase }: { apiBase: string }) {
  const [loading, setLoading] = useState(true)
  const [schools, setSchools] = useState<School[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [columns, setColumns] = useState(1)
  const gridRef = useRef<HTMLDivElement | null>(null)
  const itemsPerPage = 10 * columns

  useEffect(() => {
    let mounted = true
    setLoading(true)
    setError(null)
    setSchools(null)

    fetch(`${apiBase.replace(/\/+$/, "")}/public/schools`)
      .then((res) => {
        if (!res.ok) throw new Error(`status ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (!mounted) return
        const items = Array.isArray(data) ? data : data?.schools ?? []
        setSchools(items)
      })
      .catch((err) => {
        if (!mounted) return
        setError(String(err))
        setSchools([])
      })
      .finally(() => {
        if (!mounted) return
        setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [apiBase])

  useEffect(() => {
    const updateColumns = () => {
      if (!gridRef.current) return
      const style = window.getComputedStyle(gridRef.current)
      const count = style.gridTemplateColumns.trim().split(/\s+/).filter(Boolean).length
      setColumns(count || 1)
    }

    updateColumns()
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [])

  useEffect(() => {
    const totalPages = schools ? Math.ceil(schools.length / itemsPerPage) : 1
    if (currentPage > totalPages) setCurrentPage(totalPages || 1)
  }, [currentPage, itemsPerPage, schools])

  if (loading) return <div className="news-loading">Loading schools...</div>
  if (error) return <div className="no-news">No schools found</div>
  if (!schools || schools.length === 0) return <div className="no-news">No schools found</div>

  const totalPages = Math.ceil(schools.length / itemsPerPage)
  const displayed = schools.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <>
      <div ref={gridRef} className="schools-grid">
        {displayed.map((s, idx) => {
          const identifier = s.school_email || s.id || s.name || `school-${(currentPage - 1) * itemsPerPage + idx}`
          return (
            <a
              key={`${identifier}-${(currentPage - 1) * itemsPerPage + idx}`}
              href={`/school-detail.html?id=${encodeURIComponent(identifier)}`}
              className="school-card"
            >
              <div className="school-card-image">
                <img src={s.photo_urls?.[0] || '/gal.jpg'} alt={s.name} />
              </div>
              <div className="school-card-body">
                <h3>{s.name}</h3>
                <p>{s.location}</p>
              </div>
            </a>
          )
        })}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, idx) => {
            const page = idx + 1
            return (
              <button
                key={page}
                type="button"
                className={page === currentPage ? 'active' : ''}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            )
          })}
        </div>
      )}
    </>
  )
}
