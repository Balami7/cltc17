"use client"

import { useEffect, useState } from "react"
import DataState from "./DataState"
import { cachedFetch } from "@/lib/cachedFetch"

type EventItem = {
  id: string | number
  title: string
  summary?: string
  'image-url'?: string
  image_url?: string
  image?: string
  location?: string
  date?: string
}

export default function UpcomingPrograms({ apiBase }: { apiBase: string }) {
  const [loading, setLoading] = useState(true)
  const [programs, setPrograms] = useState<EventItem[]>([])

  useEffect(() => {
    if (!apiBase) {
      setLoading(false)
      return
    }

    let mounted = true
    const endpoint = `${apiBase.replace(/\/+$/, "")}/public/events`

    cachedFetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (!mounted) return
        const rawItems: EventItem[] = Array.isArray(data) ? data : data?.events ?? []
        
        // Find 4 closest to now
        const now = new Date().getTime()
        const sorted = [...rawItems].sort((a, b) => {
          const dateA = new Date(a.date || "").getTime()
          const dateB = new Date(b.date || "").getTime()
          
          const diffA = isNaN(dateA) ? Infinity : Math.abs(dateA - now)
          const diffB = isNaN(dateB) ? Infinity : Math.abs(dateB - now)
          
          return diffA - diffB
        })

        setPrograms(sorted.slice(0, 4))
        setLoading(false)
      })
      .catch((err) => {
        if (!mounted) return
        console.warn("Could not fetch upcoming events:", err)
        setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [apiBase])

  if (loading) {
    return (
      <section className="upcoming-programs">
        <div className="section-title">UPCOMING PROGRAMMES</div>
        <DataState icon="fa-calendar-days">Loading programmes...</DataState>
      </section>
    )
  }

  if (programs.length === 0) {
    return (
      <section className="upcoming-programs">
        <div className="section-title">UPCOMING PROGRAMMES</div>
        <DataState icon="fa-calendar-days">No upcoming programmes found</DataState>
      </section>
    )
  }

  return (
    <section className="upcoming-programs">
      <div className="section-title">UPCOMING PROGRAMMES</div>

      <div className="programs-grid">
        {programs.map((item) => {
          const imgUrl = item["image-url"] || item.image_url || item.image || "/gal.jpg"
          return (
            <div key={item.id} className="program-wrapper">
              <div className="program-item">
                <img src={imgUrl} alt={item.title} />
              </div>
              <h3 className="program-title">{item.title}</h3>
            </div>
          )
        })}
      </div>
    </section>
  )
}
