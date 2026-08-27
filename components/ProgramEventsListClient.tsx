"use client"

import { useEffect, useState } from "react"

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

export default function ProgramEventsListClient({ apiBase }: { apiBase: string }) {
  const [loading, setLoading] = useState(true)
  const [events, setEvents] = useState<EventItem[]>([])

  useEffect(() => {
    if (!apiBase) {
      setLoading(false)
      return
    }

    let mounted = true
    const endpoint = `${apiBase.replace(/\/+$/, "")}/public/events`

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (!mounted) return
        const items = Array.isArray(data) ? data : data?.events ?? []
        setEvents(items)
        setLoading(false)
      })
      .catch((err) => {
        if (!mounted) return
        console.warn("Could not fetch program events:", err)
        setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [apiBase])

  if (loading) {
    return <div className="news-loading">Loading events...</div>
  }

  if (events.length === 0) {
    return <div className="no-news">No events found</div>
  }

  return (
    <div className="events-grid">
      {events.map((event, index) => {
        const imgUrl = event["image-url"] || event.image_url || event.image || "/gal.jpg"
        const desc = event.summary || ""
        return (
          <div key={event.id ?? index} className="event-card">
            <img
              src={imgUrl}
              alt={event.title}
              className="event-image"
              width={400}
              height={220}
            />
            <div className="event-content">
              <div className="event-title">{event.title}</div>
              <div className="event-meta">
                <span className="event-date">{event.date}</span> • {event.location}
              </div>
              <p className="event-desc">{desc}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
