"use client"

import { useEffect, useState } from "react"
import DataState from "./DataState"
import { cachedFetch } from "@/lib/cachedFetch"

type Procurement = {
  id: string | number
  title: string
  description: string
}

export default function ProcurementsListClient({ apiBase }: { apiBase: string }) {
  const [loading, setLoading] = useState(true)
  const [procurements, setProcurements] = useState<Procurement[] | null>(null)

  useEffect(() => {
    if (!apiBase) {
      setLoading(false)
      return
    }

    let mounted = true
    const endpoint = `${apiBase.replace(/\/+$/, "")}/public/procurements`
    
    cachedFetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (!mounted) return
        const items = Array.isArray(data) ? data : data?.procurements ?? []
        setProcurements(items)
        setLoading(false)
      })
      .catch((err) => {
        if (!mounted) return
        console.warn("Could not fetch procurements:", err)
        setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [apiBase])

  if (loading) {
    return <DataState icon="fa-file-invoice">Loading procurements...</DataState>
  }

  if (!procurements || procurements.length === 0) {
    return <DataState icon="fa-file-invoice">No procurements found</DataState>
  }

  return (
    <div className="lots-grid">
      {procurements.map((item, index) => (
        <div key={item.id ?? index} className="lot-item">
          <strong>{item.title}</strong> {item.description}
        </div>
      ))}
    </div>
  )
}
