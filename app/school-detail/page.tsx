"use client";

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'

const API_BASE = process.env.NEXT_PUBLIC_CLTC_API_BASE || process.env.CLTC_API_BASE

function SchoolDetailContent() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  
  const [item, setItem] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!API_BASE || !id) {
      setLoading(false)
      return
    }

    fetch(`${(API_BASE as string).replace(/\/+$/, '')}/public/schools`)
      .then(res => {
        if (!res.ok) return []
        return res.json()
      })
      .then(data => {
        const arr = Array.isArray(data) ? data : data?.schools ?? []
        // We use school_email as the unique ID for schools based on previous files
        const found = arr.find((s: any) => String(s.school_email) === id)
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
          <div className="detail-loading">Loading school...</div>
        </div>
      </main>
    )
  }

  if (!item) {
    return (
      <main className="detail-page">
        <div className="detail-container">
          <div className="detail-not-found">
            <h2>School not found.</h2>
            <Link href="/school" className="detail-back">← Back to Schools</Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="detail-page">
      <div className="detail-container">
        <Link href="/school" className="detail-back">← Back to Schools</Link>
        <article className="detail-article">
          {item.photo_urls?.length > 0 && (
            <img src={item.photo_urls[0]} alt={item.name} className="detail-hero-image" />
          )}
          <div className="detail-body">
            <span className="detail-badge">School</span>
            <h1 className="detail-title">{item.name}</h1>
            <div className="detail-info-block">
              {item.location && (
                <div className="detail-info-row">
                  <span className="detail-info-label">Location</span>
                  <span>{item.location}</span>
                </div>
              )}
              {item.address && (
                <div className="detail-info-row">
                  <span className="detail-info-label">Address</span>
                  <span>{item.address}</span>
                </div>
              )}
            </div>
            {item.coordinator_name && (
              <div className="detail-coordinator">
                <div className="detail-coordinator-icon">
                  <i className="fa-solid fa-user-tie" />
                </div>
                <div>
                  <p className="detail-coordinator-label">Coordinator</p>
                  <p className="detail-coordinator-name">{item.coordinator_name}</p>
                  <p className="detail-coordinator-contacts">
                    {item.coordinator_phone_number && <>{item.coordinator_phone_number}<br /></>}
                    {item.school_email}
                  </p>
                </div>
              </div>
            )}
            {/* Fallback to old coordinator object if API isn't updated yet */}
            {item.coordinator && !item.coordinator_name && (
              <div className="detail-coordinator">
                <div className="detail-coordinator-icon">
                  <i className="fa-solid fa-user-tie" />
                </div>
                <div>
                  <p className="detail-coordinator-label">Coordinator</p>
                  <p className="detail-coordinator-name">{item.coordinator.name}</p>
                  <p className="detail-coordinator-contacts">
                    {item.coordinator.phone_number && <>{item.coordinator.phone_number}<br /></>}
                    {item.coordinator.email}
                  </p>
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    </main>
  )
}

export default function SchoolDetail() {
  return (
    <Suspense fallback={<div className="detail-loading">Loading...</div>}>
      <SchoolDetailContent />
    </Suspense>
  )
}
