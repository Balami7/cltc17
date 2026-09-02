"use client";

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'
import DataState from '@/components/DataState'
import { cachedFetch } from '@/lib/cachedFetch'

const API_BASE = process.env.NEXT_PUBLIC_CLTC_API_BASE

function MagazineDetailContent() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  
  const [item, setItem] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!API_BASE || !id) {
      setLoading(false)
      return
    }
    cachedFetch(`${(API_BASE as string).replace(/\/+$/, '')}/magazines/${id}`)
      .then(res => {
        if (!res.ok) return null
        return res.json()
      })
      .then(data => {
        setItem(data)
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
          <DataState icon="fa-book">Loading magazine...</DataState>
        </div>
      </main>
    )
  }

  if (!item) {
    return (
      <main className="detail-page">
        <div className="detail-container">
          <DataState icon="fa-book">
            <span>Magazine not found.</span>
            <Link href="/magazine" className="detail-back">← Back to Magazine</Link>
          </DataState>
        </div>
      </main>
    )
  }

  return (
    <main className="detail-page">
      <div className="detail-container">
        <Link href="/magazine" className="detail-back">← Back to Magazine</Link>
        <article className="detail-article">
          {item.main_image_uri && (
            <img src={item.main_image_uri} alt={item.title} className="detail-hero-image" />
          )}
          <div className="detail-body">
            <span className="detail-badge">Magazine</span>
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

export default function MagazineDetail() {
  return (
    <Suspense fallback={<DataState icon="fa-book">Loading magazine...</DataState>}>
      <MagazineDetailContent />
    </Suspense>
  )
}
