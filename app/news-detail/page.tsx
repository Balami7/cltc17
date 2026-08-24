"use client";

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'

const API_BASE = process.env.NEXT_PUBLIC_CLTC_API_BASE

function NewsDetailContent() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  
  const [item, setItem] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!API_BASE || !id) {
      setLoading(false)
      return
    }

    // Use our new public endpoint if available or stick to the exact previous fetch logic
    fetch(`${(API_BASE as string).replace(/\/+$/, '')}/news`)
      .then(res => {
        if (!res.ok) return []
        return res.json()
      })
      .then(data => {
        const arr = Array.isArray(data) ? data : data?.news ?? []
        const found = arr.find((n: any) => String(n.id) === id)
        setItem(found || null)
      })
      .catch(e => {
        console.error(e)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <main className="detail-page">
        <div className="detail-container">
          <div className="detail-loading">Loading news...</div>
        </div>
      </main>
    )
  }

  if (!item) {
    return (
      <main className="detail-page">
        <div className="detail-container">
          <div className="detail-not-found">
            <h2>News not found.</h2>
            <Link href="/newsmedia" className="detail-back">← Back to News</Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="detail-page">
      <div className="detail-container">
        <Link href="/newsmedia" className="detail-back">← Back to News</Link>
        <article className="detail-article">
          {item.main_image_uri && (
            <img src={item.main_image_uri} alt={item.title} className="detail-hero-image" />
          )}
          <div className="detail-body">
            <span className="detail-badge">News &amp; Media</span>
            <h1 className="detail-title">{item.title}</h1>
            {item.published_at && (
              <div className="detail-meta">
                <span className="detail-meta-item">
                  <i className="fa-regular fa-calendar" />
                  {item.published_at.split('T')[0]}
                </span>
              </div>
            )}
            <div className="detail-content" dangerouslySetInnerHTML={{ __html: item.content || item.excerpt || '' }} />
          </div>
        </article>
      </div>
    </main>
  )
}

export default function NewsDetailPage() {
  return (
    <Suspense fallback={<div className="detail-loading">Loading...</div>}>
      <NewsDetailContent />
    </Suspense>
  )
}
