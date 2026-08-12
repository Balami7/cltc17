"use client"

import { useEffect, useState } from "react"

type School = {
  id: string
  name: string
  location?: string
  photo_urls?: string[]
}

export default function SchoolsListClient({ apiBase }: { apiBase?: string }) {
  const [loading, setLoading] = useState(true)
  const [schools, setSchools] = useState<School[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    setError(null)
    setSchools(null)

    fetch('/api/public/schools')
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

  if (loading) return <div className="news-loading">Loading schools...</div>
  if (error) return <div className="no-news">No schools found</div>
  if (!schools || schools.length === 0) return <div className="no-news">No schools found</div>

  return (
    <div className="schools-grid">
      {schools.map((s) => (
        <a key={s.id} href={`/school/${s.id}`} className="school-card">
          <div className="school-card-image">
            <img src={s.photo_urls?.[0] || '/gal.jpg'} alt={s.name} />
          </div>
          <div className="school-card-body">
            <h3>{s.name}</h3>
            <p>{s.location}</p>
          </div>
        </a>
      ))}
    </div>
  )
}
