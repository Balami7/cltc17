"use client"

import { useEffect, useRef, useState } from "react"
import DataState from "./DataState"
import { cachedFetch } from "@/lib/cachedFetch"

type NewsItem = {
  id: string
  title: string
  main_image_uri?: string
  published_at?: string
}

export default function NewsListClient({ apiBase, limit }: { apiBase: string; limit?: number }) {
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState<NewsItem[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [columns, setColumns] = useState(1)
  const gridRef = useRef<HTMLDivElement | null>(null)
  const itemsPerPage = 10 * columns

  useEffect(() => {
    let mounted = true
    setLoading(true)
    setError(null)
    setNews(null)

    cachedFetch(`${apiBase.replace(/\/+$/, "")}/news`)
      .then((res) => {
        if (!res.ok) throw new Error(`status ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (!mounted) return
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
    const totalPages = news ? Math.ceil(news.length / itemsPerPage) : 1
    if (currentPage > totalPages) setCurrentPage(totalPages || 1)
  }, [currentPage, itemsPerPage, news])

  if (loading) return <DataState icon="fa-newspaper">Loading news...</DataState>

  if (!loading && Array.isArray(news) && news.length === 0) {
    return <DataState icon="fa-newspaper">No News/Media</DataState>
  }

  if (error) {
    return <DataState icon="fa-newspaper">No News/Media</DataState>
  }

  const totalPages = Array.isArray(news) ? Math.ceil(news.length / itemsPerPage) : 0
  const displayed = Array.isArray(news)
    ? limit
      ? news.slice(0, limit)
      : news.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : []

  return (
    <>
      <div ref={gridRef} className="news-grid">
      {displayed?.map((item) => (
        <div key={item.id} className="news-card">
          {item.main_image_uri ? (
            <div className="news-image-container">
              <img src={item.main_image_uri} alt={item.title} />
              <span className="news-badge">NEWS</span>
            </div>
          ) : (
            <div className="news-image-container no-image">
              <span className="news-badge">NEWS</span>
            </div>
          )}
          <div className="news-date">{item.published_at?.split('T')[0] || ''}</div>
          <div className="news-content">
            <h3 className="news-title">{item.title}</h3>
            <a href={`/news-detail?id=${item.id}`} className="news-readmore">
              Read More
            </a>
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
