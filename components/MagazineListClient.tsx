"use client"

import { useEffect, useRef, useState } from "react"

type Magazine = {
  id: string
  title: string
  main_image_uri?: string
  published_at?: string
}

export default function MagazineListClient({ apiBase, limit }: { apiBase: string; limit?: number }) {
  const [loading, setLoading] = useState(true)
  const [magazines, setMagazines] = useState<Magazine[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [columns, setColumns] = useState(1)
  const gridRef = useRef<HTMLDivElement | null>(null)
  const itemsPerPage = 10 * columns

  useEffect(() => {
    let mounted = true
    setLoading(true)
    setError(null)

    fetch(`${apiBase.replace(/\/+$/, "")}/magazines`)
      .then((res) => {
        if (!res.ok) throw new Error(`status ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (!mounted) return
        const items = Array.isArray(data) ? data : data?.magazines ?? []
        setMagazines(items)
      })
      .catch((err) => {
        if (!mounted) return
        setError(String(err))
        setMagazines([])
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
    const totalPages = magazines ? Math.ceil(magazines.length / itemsPerPage) : 1
    if (currentPage > totalPages) setCurrentPage(totalPages || 1)
  }, [currentPage, itemsPerPage, magazines])

  if (loading) return <div className="news-loading">Loading magazines...</div>
  if (error) return <div className="no-news">No Magazines</div>
  if (!magazines || magazines.length === 0) return <div className="no-news">No Magazines</div>

  const totalPages = Math.ceil(magazines.length / itemsPerPage)
  const displayed = limit
    ? magazines.slice(0, limit)
    : magazines.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <>
      <div ref={gridRef} className="news-grid">
        {displayed.map((m) => (
          <div key={m.id} className="news-card">
            {m.main_image_uri ? (
              <div className="news-image-container">
                <img src={m.main_image_uri} alt={m.title} />
                <span className="news-badge">MAGAZINE</span>
              </div>
            ) : (
              <div className="news-image-container no-image">
                <span className="news-badge">MAGAZINE</span>
              </div>
            )}
            <div className="news-date">{m.published_at?.split('T')[0] || ''}</div>
            <div className="news-content">
              <h3 className="news-title">{m.title}</h3>
              <a href={`/magazine-detail?id=${m.id}`} className="news-readmore">Read Issue</a>
            </div>
          </div>
        ))}
      </div>

      {!limit && totalPages > 1 && (
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
