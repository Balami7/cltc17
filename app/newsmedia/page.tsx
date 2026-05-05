export const metadata = {
  title: "News & Media - Citizenship and Leadership Training Centre",
  description: "Latest news, updates, events, and media coverage from CLTC",
};

export default function NewsMediaPage() {
  const newsItems = [
    {
      id: 1,
      date: "December 1, 2025",
      title: "Abiola Calls for Value-Driven Leadership at Legislative Mentorship Initiative (CLTC)",
    },
    {
      id: 2,
      date: "December 1, 2025",
      title: "Nigeria’s Youth Hold Key to National Transformation — DG CLTC Rinsola Abiola",
    },
    {
      id: 3,
      date: "November 27, 2025",
      title: "Official Launch of National Financial Literacy, Investment and Wealth Creation Program",
    },
    {
      id: 4,
      date: "November 27, 2025",
      title: "CLTC Joins Global Campaign Against Gender-Based Violence",
    },
    {
      id: 5,
      date: "November 27, 2025",
      title: "CLTC Recognizes Outstanding Staff with ‘Culture Champion’ Award",
    },
    {
      id: 6,
      date: "November 27, 2025",
      title: "Kaduna Governor’s SSA on Citizenship and Leadership Training Visits CLTC DG",
    },
    {
      id: 7,
      date: "November 27, 2025",
      title:
        "Senior Special Assistant to the Executive Governor of Kaduna State on Citizenship and Leadership Training (ILCT) Honourable Yusuf Umar Karkuwa on Tuesday paid a courtesy visit",
    },
    {
      id: 8,
      date: "November 27, 2025",
      title: "CLTC Urges OY Officers to Promote Discipline and Civic Peace Amid Rising Frustrations",
    },
    {
      id: 9,
      date: "November 5, 2025",
      title: "CLTC Calls on Security Personnel, Particularly Officers in Kwara State",
    },
    {
      id: 10,
      date: "November 5, 2025",
      title: "ASUU Pledges Support to Citizenship and Leadership Training Centre",
    },
    {
      id: 11,
      date: "October 23, 2025",
      title: "Rev. Fr. Moses Adasu University Wins 2025 Youth Leadership Debate",
    },
    {
      id: 12,
      date: "October 23, 2025",
      title:
        "Undergraduates from Reverend Father Moses Adasu University, formerly Benue State University, have emerged overall winners of the 2025 Youth Leadership Debate Competition",
    },
    {
      id: 13,
      date: "October 23, 2025",
      title: "NYSC DG CLTC for promoting National Youth Service Corps (NYSC)",
    },
    {
      id: 14,
      date: "October 23, 2025",
      title:
        "Brigadier General Olusegun Nafiu commended the Citizenship and Leadership Training Centre (CLTC) for its role",
    },
    {
      id: 15,
      date: "October 23, 2025",
      title: "How to Attract Gen Z to Public Service Commission (FCSC)",
    },
    {
      id: 16,
      date: "October 23, 2025",
      title: "Prof. Tunde Oladipo has given insight into how to attract youth to public service",
    },
    {
      id: 17,
      date: "November 23, 2025",
      title: "Rinsola Abiola Urges Youth to Make Volunteering a Way of Life",
    },
  ];

  return (
    <main>
      <section className="news-section">
        <div className="container">
          <div className="section-heading-wrapper">
            <h2 className="section-heading">News & Media</h2>
          </div>

          <div className="news-grid">
            {newsItems.map((item) => (
              <div key={item.id} className="news-card">
                <div className="news-date">{item.date}</div>
                <div className="news-content">
                  <h3 className="news-title">{item.title}</h3>
                  <div className="news-meta">
                    <span className="news-comments loading" data-post-id={`news-${item.id}`}>
                      Loading...
                    </span>
                    <a href="#" className="news-readmore">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}