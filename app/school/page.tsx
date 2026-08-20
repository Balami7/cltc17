"use client"

import SchoolsListClient from "@/components/SchoolsListClient"

const apiBase = process.env.NEXT_PUBLIC_CLTC_API_BASE

export default function TrainingSchoolsPage() {
  if (!apiBase) {
    return <div className="container">CLTC API base not configured. Set NEXT_PUBLIC_CLTC_API_BASE in environment.</div>
  }

  return (
    <main>
      <section className="schools-section">
        <div className="container">
          <div className="section-heading-wrapper">
            <h2 className="section-heading">Training Schools</h2>
          </div>

          <SchoolsListClient apiBase={apiBase} />
        </div>
      </section>
    </main>
  )
}