"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export type SchoolCourse = {
  id?: string | number;
  course_name?: string;
  name?: string;
  description?: string;
  duration?: string;
  location?: string;
  year?: string | number;
  start_date?: string;
  instructor?: string;
  coordinator?: string;
  school_name?: string;
};



export default function AllCoursesListClient({ apiBase }: { apiBase: string }) {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState<SchoolCourse[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const itemsPerPage = 9;

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    const endpoint = `${apiBase.replace(/\/+$/, "")}/public/courses`;
    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        const items = Array.isArray(data) ? data : data?.courses ?? data?.data ?? [];
        setCourses(items);
      })
      .catch((err) => {
        if (!mounted) return;
        console.warn("Could not fetch API courses:", err);
        setCourses([]);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [apiBase]);

  const activeCourses = courses ?? [];

  const filteredCourses = activeCourses.filter((course) => {
    const title = (course.course_name || course.name || "").toLowerCase();
    const desc = (course.description || "").toLowerCase();
    const instructor = (course.instructor || "").toLowerCase();
    const school = (course.school_name || "").toLowerCase();
    const loc = (course.location || "").toLowerCase();
    const q = searchQuery.toLowerCase().trim();

    return (
      !q ||
      title.includes(q) ||
      desc.includes(q) ||
      instructor.includes(q) ||
      school.includes(q) ||
      loc.includes(q)
    );
  });

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const displayed = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return null;
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr;
      return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="courses-container">
      {/* Alumni-style Search bar */}
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          className="alumni-search"
        />
      </div>

      {/* Loading state */}
      {loading ? (
        <p className="no-results">Loading courses...</p>
      ) : filteredCourses.length === 0 ? (
        <p className="no-results">No courses match your search criteria.</p>
      ) : (
        /* Courses Grid */
        <div ref={gridRef} className="all-courses-grid">
          {displayed.map((course, idx) => {
            const courseTitle = course.course_name || course.name || "CLTC Course";
            const formattedStart = formatDate(course.start_date);

            return (
              <article key={course.id || idx} className="course-item-card">
                <div className="course-card-top">
                  {course.school_name && (
                    <span className="course-school-badge">
                      <i className="fa-solid fa-building-columns"></i>
                      {course.school_name}
                    </span>
                  )}
                  {course.year && (
                    <span className="course-year-badge">{course.year}</span>
                  )}
                </div>

                <div className="course-card-main">
                  <h3 className="course-item-title">{courseTitle}</h3>

                  <div className="course-meta-tags">
                    {course.duration && (
                      <div className="meta-tag">
                        <i className="fa-regular fa-clock"></i>
                        <span>{course.duration}</span>
                      </div>
                    )}
                    {formattedStart && (
                      <div className="meta-tag">
                        <i className="fa-regular fa-calendar"></i>
                        <span>Starts {formattedStart}</span>
                      </div>
                    )}
                    {course.location && (
                      <div className="meta-tag">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>{course.location}</span>
                      </div>
                    )}
                  </div>

                  {course.description && (
                    <p className="course-item-description">
                      {course.description}
                    </p>
                  )}

                  <div className="course-people-info">
                    {course.instructor && (
                      <div className="person-row">
                        <span className="person-role">Instructor:</span>
                        <span className="person-name">{course.instructor}</span>
                      </div>
                    )}
                    {course.coordinator && (
                      <div className="person-row">
                        <span className="person-role">Coordinator:</span>
                        <span className="person-name">{course.coordinator}</span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Pagination */}
      {!loading && totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, idx) => {
            const page = idx + 1;
            return (
              <button
                key={page}
                type="button"
                className={page === currentPage ? "active" : ""}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
