export const metadata = {
  title: "Program & Events - Citizenship and Leadership Training Centre",
  description: "Upcoming programs, events, and celebrations from CLTC",
};

export default function ProgramEventsPage() {
  
  const events = [
    {
      title: "Nigeria @65 Conference",
      date: "October 1, 2025",
      location: "National Stadium / Virtual",
      description:
        "Grand celebration and conference marking Nigeria's 65th Independence Anniversary. Join leaders, patriots, and citizens for inspiring sessions on unity, progress, and Renewed Hope.",
      image: "https://via.placeholder.com/400x220/28a745/ffffff?text=Nigeria+@65+Conference+Poster",
    },
    {
      title: "Independence Day Parade & Presidential Broadcast",
      date: "October 1, 2025",
      location: "Eagle Square, Abuja",
      description:
        "National parade, presidential address to the nation, and cultural displays celebrating 65 years of independence.",
      image: "https://via.placeholder.com/400x220/1e7e34/ffffff?text=Independence+Parade",
    },
    {
      title: "World Press Conference",
      date: "September 29, 2025",
      location: "National Press Centre, Radio House, Abuja",
      description:
        "Official briefing on the 65th Independence Anniversary activities and theme: 'All Hands on Deck for a Greater Nation'.",
      image: "https://via.placeholder.com/400x220/4caf50/ffffff?text=Press+Conference",
    },
    {
      title: "Inter-Denominational Thanksgiving Service",
      date: "September 28, 2025",
      location: "Ecumenical Centre, Abuja",
      description: "National church service giving thanks for 65 years of nationhood.",
      image: "https://via.placeholder.com/400x220/28a745/ffffff?text+Thanksgiving+Service",
    },
  ];

  return (
    <main>
      <div className="container">
        <div className="events-header">
          <h1>Program & Events</h1>
        </div>

        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <img
                src={event.image}
                alt={event.title}
                className="event-image"
                width={400}
                height={220}
              />
              <div className="event-content">
                <div className="event-title">{event.title}</div>
                <div className="event-meta">
                  <span className="event-date">{event.date}</span> • {event.location}
                </div>
                <p className="event-desc">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}