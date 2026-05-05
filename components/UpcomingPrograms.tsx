type ProgramItem = { id: string | number; imageUrl: string; alt: string; title?: string };

const FALLBACK = [
  { id: "p1", imageUrl: "/image 41.png", alt: "Youths in classroom or training session", title: "Program Title" },
  { id: "p2", imageUrl: "/image 42.png", alt: "Students in uniform reading documents", title: "Program Title" },
  { id: "p3", imageUrl: "/image 43.png", alt: "Meeting or boardroom discussion", title: "Program Title" },
  { id: "p4", imageUrl: "/image 44.png", alt: "Director or official signing documents", title: "Program Title" },
];

interface Props {
  programs: ProgramItem[];
}

export default function UpcomingPrograms({ programs }: Props) {
  const items = programs.length > 0 ? programs : FALLBACK;

  return (
    <section className="upcoming-programs">
      <div className="section-title">UPCOMING PROGRAMS</div>

      <div className="programs-grid">
        {items.map((item) => (
          <div key={item.id} className="program-wrapper">
            <div className="program-item">
              <img src={item.imageUrl} alt={item.alt} />
            </div>
            <h3 className="program-title">{item.title ?? "Program Title"}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}