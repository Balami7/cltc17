"use client";

import AllCoursesListClient from "@/components/AllCoursesListClient";

const apiBase = process.env.NEXT_PUBLIC_CLTC_API_BASE || process.env.CLTC_API_BASE;

export default function AllCoursesPage() {
  if (!apiBase) {
    return (
      <div className="container">
        CLTC API base not configured. Set NEXT_PUBLIC_CLTC_API_BASE in environment.
      </div>
    );
  }

  return (
    <main>
      <section className="courses-page-section">
        <div className="container">
          <div className="section-heading-wrapper">
            <h2 className="section-heading">All Courses</h2>
          </div>

          <AllCoursesListClient apiBase={apiBase} />
        </div>
      </section>
    </main>
  );
}
