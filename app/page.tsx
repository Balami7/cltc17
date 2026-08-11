import MaintenanceMarque from "@/components/maintenance"
import Hero from "@/components/Hero";
import EventsSlideshow from "@/components/EventsSlideshow";
import UpcomingPrograms from "@/components/UpcomingPrograms";
import CoursesSection from "@/components/CourseSection";
import NewsSection from "@/components/NewsSection";
import NewsListClient from "@/components/NewsListClient"
import ExplorerMagazine from "@/components/ExplorersMagazine";

async function getRecentEvents()     { return []; }
async function getUpcomingPrograms() { return []; }
async function getCourses()          { return []; }
async function getNews() {
  const API_BASE = process.env.CLTC_API_BASE || process.env.NEXT_PUBLIC_CLTC_API_BASE
  if (!API_BASE) throw new Error('CLTC API base URL not configured. Set CLTC_API_BASE or NEXT_PUBLIC_CLTC_API_BASE in environment.')
  try {
    const res = await fetch(`${API_BASE.replace(/\/+$/, '')}/news`, { cache: 'no-store' })
    if (!res.ok) return []
    const data = await res.json()
    return Array.isArray(data) ? data : data?.news ?? []
  } catch (e) {
    return []
  }
}

export default async function Home() {
  const [events, programs, courses, news] = await Promise.all([
    getRecentEvents(),
    getUpcomingPrograms(),
    getCourses(),
    getNews(),
  ]);

  return (
    <main>
      <MaintenanceMarque/>
      <Hero />
      <hr className="section-divider" />
      <EventsSlideshow     events={events}     />
      <hr className="section-divider" />
      <UpcomingPrograms    programs={programs} />
      <hr className="section-divider" />
      <CoursesSection      courses={courses}   />
      <hr className="section-divider" />
      <ExplorerMagazine   />
      <hr className="section-divider" />
      {/* Client-side news list so the browser issues the GET and Read More navigates to detail pages */}
      <NewsListClient apiBase={process.env.NEXT_PUBLIC_CLTC_API_BASE || process.env.CLTC_API_BASE} limit={4} />
    </main>
  );
}
