type ProgramItem = { id: string | number; imageUrl: string; alt: string };

const FALLBACK = [
  { id: "p1", imageUrl: "/image 41.png", alt: "Youths in classroom or training session" },
  { id: "p2", imageUrl: "/image 42.png", alt: "Students in uniform reading documents" },
  { id: "p3", imageUrl: "/image 43.png", alt: "Meeting or boardroom discussion" },
  { id: "p4", imageUrl: "/image 44.png", alt: "Director or official signing documents" },
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
          <div key={item.id} className="program-item">
            <img src={item.imageUrl} alt={item.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}