import Hero from "@/components/Hero";
import EventsSlideshow from "@/components/EventsSlideshow";
import UpcomingPrograms from "@/components/UpcomingPrograms";
import CoursesSection from "@/components/CourseSection";
import NewsSection from "@/components/NewsSection";
import ExplorerMagazine from "@/components/ExplorersMagazine";

async function getRecentEvents()     { return []; }
async function getUpcomingPrograms() { return []; }
async function getCourses()          { return []; }
async function getNews()             { return []; }

export default async function Home() {
  const [events, programs, courses, news] = await Promise.all([
    getRecentEvents(),
    getUpcomingPrograms(),
    getCourses(),
    getNews(),
  ]);

  return (
    <main>
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
      <NewsSection         articles={news}     />
    </main>
  );
}