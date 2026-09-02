import MaintenanceMarque from "@/components/maintenance"
import Hero from "@/components/Hero";
import EventsSlideshow from "@/components/EventsSlideshow";
import UpcomingPrograms from "@/components/UpcomingPrograms";
import CoursesSection from "@/components/CourseSection";
import NewsSection from "@/components/NewsSection";
import NewsListClient from "@/components/NewsListClient"
import ExplorerMagazine from "@/components/ExplorersMagazine";

async function getRecentEvents() { return []; }
async function getCourses() { return []; }
async function getNews() {
  const API_BASE = process.env.CLTC_API_BASE || process.env.NEXT_PUBLIC_CLTC_API_BASE
  if (!API_BASE) throw new Error('CLTC API base URL not configured. Set CLTC_API_BASE or NEXT_PUBLIC_CLTC_API_BASE in environment.')
  try {
    const res = await fetch(`${(API_BASE as string).replace(/\/+$/, '')}/news`, { next: { revalidate: 300 } })
    if (!res.ok) return []
    const data = await res.json()
    return Array.isArray(data) ? data : data?.news ?? []
  } catch (e) {
    return []
  }
}

export default async function Home() {
  const apiBase = process.env.NEXT_PUBLIC_CLTC_API_BASE || process.env.CLTC_API_BASE;
  if (!apiBase) {
    throw new Error('CLTC API base URL not configured. Set CLTC_API_BASE or NEXT_PUBLIC_CLTC_API_BASE in environment.');
  }

  const [events, courses, news] = await Promise.all([
    getRecentEvents(),
    getCourses(),
    getNews(),
  ]);

  return (
    <main>
      {/*<MaintenanceMarque/>*/}
      <Hero />
      <hr className="section-divider" />
      <EventsSlideshow events={events} />
      <hr className="section-divider" />
      <UpcomingPrograms apiBase={apiBase} />
      <hr className="section-divider" />
      <CoursesSection courses={courses} />
      <hr className="section-divider" />
      <ExplorerMagazine />
      <hr className="section-divider" />
      <section className="news-section landing-news">
        <div className="container">
          <div className="news-header">
            <h2>News & Media</h2>
          </div>
          <NewsListClient apiBase={apiBase} limit={4} />
        </div>
      </section>
    </main>
  );
}
