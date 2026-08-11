"use client"

import { useEffect, useState } from "react"

type Magazine = {
  id: string
  title: string
  published_at?: string
}

export default function MagazineListClient({ apiBase, limit }: { apiBase: string; limit?: number }) {
  const [loading, setLoading] = useState(true)
  const [magazines, setMagazines] = useState<Magazine[] | null>(null)
  const [error, setError] = useState<string | null>(null)

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

  if (loading) return <div className="news-loading">Loading magazines...</div>
  if (error) return <div className="no-news">No Magazines</div>
  if (!magazines || magazines.length === 0) return <div className="no-news">No Magazines</div>

  const displayed = limit ? magazines.slice(0, limit) : magazines

  return (
    <div className="magazine-grid">
      {displayed.map((m) => (
        <div key={m.id} className="magazine-card">
          <div className="magazine-meta">{m.published_at}</div>
          <h3>{m.title}</h3>
          <a href={`/magazine/${m.id}`} className="btn">Read Issue</a>
        </div>
      ))}
    </div>
  )
}
