"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export type OnlineCourse = {
  id?: string | number;
  name?: string;
  title?: string;
  description?: string;
  course_instructor?: string;
  instructor?: string;
  main_image_uri?: string;
  images?: string[];
  date?: string;
};



export default function OnlineCoursesListClient({ apiBase }: { apiBase: string }) {
  const [loading, setLoading] = useState(true);
  const [onlineCourses, setOnlineCourses] = useState<OnlineCourse[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const itemsPerPage = 9;

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    const endpoint = `${apiBase.replace(/\/+$/, "")}/public/online-courses`;
    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        const items = Array.isArray(data)
          ? data
          : data?.courses ?? data?.online_courses ?? data?.data ?? [];
        setOnlineCourses(items);
      })
      .catch((err) => {
        if (!mounted) return;
        console.warn("Could not fetch online courses:", err);
        setOnlineCourses([]);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [apiBase]);

  const activeCourses = onlineCourses ?? [];

  const filteredCourses = activeCourses.filter((course) => {
    const title = (course.name || course.title || "").toLowerCase();
    const desc = (course.description || "").toLowerCase();
    const instructor = (course.course_instructor || course.instructor || "").toLowerCase();
    const q = searchQuery.toLowerCase().trim();

    return !q || title.includes(q) || desc.includes(q) || instructor.includes(q);
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
          placeholder="Search online courses..."
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
        <p className="no-results">Loading online courses...</p>
      ) : filteredCourses.length === 0 ? (
        <p className="no-results">No online courses match your search criteria.</p>
      ) : (
        /* Online Courses Grid */
        <div ref={gridRef} className="online-courses-grid">
          {displayed.map((course, idx) => {
            const courseTitle = course.name || course.title || "Online Course";
            const instructor = course.course_instructor || course.instructor;
            const formattedDate = formatDate(course.date);
            const imageSrc = course.main_image_uri || (course.images && course.images[0]) || "/gal.jpg";

            return (
              <article key={course.id || idx} className="online-course-card">
                <div className="online-course-img-wrapper">
                  <img
                    src={imageSrc}
                    alt={courseTitle}
                    className="online-course-img"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/gal.jpg";
                    }}
                  />
                  <div className="online-badge">
                    <i className="fa-solid fa-globe"></i> ONLINE
                  </div>
                </div>

                <div className="online-course-body">
                  <h3 className="online-course-title">{courseTitle}</h3>

                  <div className="online-course-meta">
                    {instructor && (
                      <div className="online-meta-item">
                        <i className="fa-solid fa-chalkboard-user"></i>
                        <span>{instructor}</span>
                      </div>
                    )}
                    {formattedDate && (
                      <div className="online-meta-item">
                        <i className="fa-regular fa-calendar"></i>
                        <span>{formattedDate}</span>
                      </div>
                    )}
                  </div>

                  {course.description && (
                    <p className="online-course-desc">
                      {course.description}
                    </p>
                  )}
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
