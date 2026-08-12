"use client"

import { useEffect, useState } from "react"

type NewsItem = {
  id: string
  title: string
  published_at?: string
}

export default function NewsListClient({ apiBase, limit }: { apiBase?: string; limit?: number }) {
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState<NewsItem[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    setError(null)
    setNews(null)

    fetch('/api/news')
      .then((res) => {
        if (!res.ok) throw new Error(`status ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (!mounted) return
        // data may be an object with `news` field or an array
        const items = Array.isArray(data) ? data : data?.news ?? []
        setNews(items)
      })
      .catch((err) => {
        if (!mounted) return
        setError(String(err))
        setNews([])
      })
      .finally(() => {
        if (!mounted) return
        setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [apiBase])

  if (loading) return <div className="news-loading">Loading news...</div>

  // Only show "No News/Media" after request completed and returned empty
  if (!loading && Array.isArray(news) && news.length === 0) {
    return <div className="no-news">No News/Media</div>
  }

  if (error) {
    return <div className="no-news">No News/Media</div>
  }

  const displayed = limit && Array.isArray(news) ? news.slice(0, limit) : news

  return (
    <div className="news-grid">
      {displayed?.map((item) => (
        <div key={item.id} className="news-card">
          <div className="news-date">{item.published_at || ''}</div>
          <div className="news-content">
            <h3 className="news-title">{item.title}</h3>
            <a href={`/newsmedia/${item.id}`} className="news-readmore">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
