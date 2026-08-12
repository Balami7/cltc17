"use client"

import SchoolsListClient from "@/components/SchoolsListClient"

export default function TrainingSchoolsPage() {
  return (
    <main>
      <section className="schools-section">
        <div className="container">
          <div className="section-heading-wrapper">
            <h2 className="section-heading">Training Schools</h2>
          </div>

          <SchoolsListClient />
        </div>
      </section>
    </main>
  )
}