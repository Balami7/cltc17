"use client";

import { useState } from "react";
import AllCoursesListClient from "@/components/AllCoursesListClient";
import OnlineCoursesListClient from "@/components/OnlineCoursesListClient";

const apiBase = process.env.NEXT_PUBLIC_CLTC_API_BASE || process.env.CLTC_API_BASE;

export default function CoursesHubPage() {
  const [activeTab, setActiveTab] = useState<"all" | "online">("all");

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
            <h2 className="section-heading">Courses</h2>
          </div>

          <div className="courses-tabs-switcher">
            <button
              type="button"
              className={`courses-tab-btn ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All Courses
            </button>
            <button
              type="button"
              className={`courses-tab-btn ${activeTab === "online" ? "active" : ""}`}
              onClick={() => setActiveTab("online")}
            >
              Online Courses
            </button>
          </div>

          {activeTab === "all" ? (
            <AllCoursesListClient apiBase={apiBase} />
          ) : (
            <OnlineCoursesListClient apiBase={apiBase} />
          )}
        </div>
      </section>
    </main>
  );
}
