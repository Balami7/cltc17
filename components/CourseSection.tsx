"use client"; 

import React from 'react';

type CourseItem = {
  id: string | number;
  title: string;
  description: string;
};

const FALLBACK_COURSES: CourseItem[] = [
  {
    id: "c1",
    title: "JUNIOR COURSE<br>(OUTWARD BOUND TRAINING)",
    description:
      "(OUTWARD BOUND TRAINING) Primary and Junior Secondary School Students (JSS1-3) to give them the needed exposure.",
  },
  {
    id: "c2",
    title: "SENIOR COURSES<br>(SENIOR CIVIL SERVANTS) (ONLINE TRAINING)",
    description:
      "This is a training specially designed for the Civil Servants (Senior and middle-level Leadership Servants) to equip them with Leadership qualities and good Citizenship responsibilities.",
  },
  {
    id: "c3",
    title: "INTERMEDIATE JUNIOR COURSES<br>(OUTWARD BOUND TRAINING)",
    description: "These are training categories for Senior Secondary School Students (SS1-3) and Teenagers.",
  },
  {
    id: "c4",
    title: "INTERMEDIATE-SENIOR COURSES<br>(OUTWARD BOUND TRAINING)",
    description:
      "This training category involves Tertiary institutions:<br>1. University Students<br>2. Polytechnics<br>3. Mono-technics<br>4. Colleges of Education<br>5. Students of PHE (Department of Kinetics workers)<br>6. Community Development Officers / Social workers.",
  },
];

interface CoursesSectionProps {
  courses?: CourseItem[]; 
}

export default function CoursesSection({ courses = [] }: CoursesSectionProps) {
  const displayCourses = courses.length > 0 ? courses : FALLBACK_COURSES;

  return (
    <section className="courses-section">
      <div className="courses-header">
        <h2>OUR COURSES</h2>
      </div>

      <div className="courses-tabs">
        <button className="tab active">Popular Courses</button>
        <a href="#" className="all-courses-link">All Courses</a>
      </div>

      <div className="courses-grid">
        {displayCourses.map((course) => (
          <div key={course.id} className="course-card">
            <h3 dangerouslySetInnerHTML={{ __html: course.title }} />
            <p dangerouslySetInnerHTML={{ __html: course.description }} />
          </div>
        ))}
      </div>
    </section>
  );
}