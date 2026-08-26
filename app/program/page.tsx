import ProgramEventsListClient from "@/components/ProgramEventsListClient";

const API_BASE = process.env.CLTC_API_BASE || process.env.NEXT_PUBLIC_CLTC_API_BASE || "";

export const metadata = {
  title: "Program & Events - Citizenship and Leadership Training Centre",
  description: "Upcoming programs, events, and celebrations from CLTC",
};

export default function ProgramEventsPage() {
  return (
    <main>
      <section className="programs-section">
        <div className="container">
          <div className="section-heading-wrapper">
            <h2 className="section-heading">Programmes & Events</h2>
          </div>

          <ProgramEventsListClient apiBase={API_BASE} />
        </div>
      </section>
    </main>
  );
}
