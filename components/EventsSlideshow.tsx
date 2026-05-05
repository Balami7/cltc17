"use client";

type EventItem = { id: string | number; imageUrl: string; alt: string };

const FALLBACK = [
  { id: "f1", imageUrl: "/image 35.png", alt: "Group photo" },
  { id: "f2", imageUrl: "/image 36.png", alt: "DARE panel" },
  { id: "f3", imageUrl: "/image 40.png", alt: "Stage panel" },
];

interface Props {
  events: EventItem[];
}

export default function EventsSlideshow({ events }: Props) {
  const items = events.length > 0 ? events : FALLBACK;

  return (
    <section className="events-slideshow">
      <h2 className="slideshow-title">Recent Events & Programs</h2>

      <div className="slideshow-container">
        {items.map((item) => (
          <div key={item.id} className="mySlide fade">
            <img src={item.imageUrl} alt={item.alt} />
          </div>
        ))}

        <a className="prev" onClick={() => (window as any).plusSlides?.(-1)}>❮</a>
        <a className="next" onClick={() => (window as any).plusSlides?.(1)}>❯</a>
      </div>

      <div className="dot-container">
        {items.map((_, index) => (
          <span
            key={index}
            className="dot"
            onClick={() => (window as any).currentSlide?.(index + 1)}
          />
        ))}
      </div>
    </section>
  );
}