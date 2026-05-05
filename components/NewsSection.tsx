"use client";

type NewsArticle = {
  id: string | number;
  title: string;
  description?: string;
  imageUrl: string;
  badge?: string;
};

const FALLBACK = [
  {
    id: "n1",
    title: "Youth Ministry Launches Enterprise Content Management System to Fully Transition to Paperless Operations",
    description: "FEDERAL MINISTRY OF YOUTH DEVELOPMENT INFORMATION AND PUBLIC RELATIONS DEPARTMENT",
    imageUrl: "/image 4.png",
    badge: "NEWS",
  },
  
  
  {
    id: "n2",
    title: "Permanent Secretary Visits CLTC Headquarters to Strengthen Youth Leadership Development",
    description: "PERMANENT SECRETARY VISITS CLTC HEADQUARTERS TO STRENGTHEN YOUTH LEADERSHIP DEVELOPMENT",
    imageUrl: "/image 4.png",
    badge: "NEWS",
  },


  {
    id: "n3",
    title: "Youth Ministry Launches Enterprise Content Management System to Fully Transition to Paperless Operations",
    description: "FEDERAL MINISTRY OF YOUTH DEVELOPMENT INFORMATION AND PUBLIC RELATIONS DEPARTMENT",
    imageUrl: "/image 4.png",
    badge: "NEWS",
  },
  
  
  {
    id: "n4",
    title: "Permanent Secretary Visits CLTC Headquarters to Strengthen Youth Leadership Development",
    description: "PERMANENT SECRETARY VISITS CLTC HEADQUARTERS TO STRENGTHEN YOUTH LEADERSHIP DEVELOPMENT",
    imageUrl: "/image 4.png",
    badge: "NEWS",
  },
  
];

interface Props {
  articles: NewsArticle[];
}

export default function NewsSection({ articles }: Props) {
  const items = articles.length > 0 ? articles : FALLBACK;

  return (
    <section className="news-section">
      <div className="news-header">
        <h2>NEWS</h2>
      </div>

      <div className="news-carousel">
        <button className="carousel-arrow prev-arrow" onClick={() => (window as any).scrollCarousel?.(-1)}>
          ❮
        </button>

        <div className="news-scroller" id="newsScroller">
          {items.map((article) => (
            <div key={article.id} className="news-card">
              <div className="news-image-container">
                <img src={article.imageUrl} alt={article.title} />
                <span className="news-badge">{article.badge || "NEWS"}</span>
              </div>
              <div className="news-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href="#" className="read-more">READ MORE »</a>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-arrow next-arrow" onClick={() => (window as any).scrollCarousel?.(1)}>
          ❯
        </button>
      </div>
    </section>
  );
}