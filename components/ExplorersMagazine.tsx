

export default function ExplorerMagazine() {

  const magazineSections = [
    {
      title: "Achievements",
      items: [
        {
          image: "/image 4.png",
          alt: "Outstanding Performance",
          title: "Outstanding Performance",
          text: "Celebrating record-breaking results and team milestones this quarter.",
        },
      ],
    },
    {
      title: "Research",
      items: [
        {
          image: "/image 4.png",
          alt: "AI Ethics Framework",
          title: "AI Ethics Framework",
          text: "Latest publication exploring responsible AI development and deployment.",
        },
      ],
    },
    {
      title: "Birthdays",
      items: [
        {
          image: "/image 4.png",
          alt: "March Celebrations",
          title: "March Celebrations",
          text: "Warm wishes to our colleagues celebrating birthdays this month.",
        },
      ],
    },
    {
      title: "Staff of the Month",
      items: [
        {
          image: "/image 4.png",
          alt: "Aisha Mohammed",
          title: "Aisha Mohammed",
          text: "Recognized for outstanding leadership and innovative contributions.",
        },
      ],
    },
  ];

  return (
    <div className="explorer-magazine">
      <div className="container">
        <h1 className="main-title">CLTC Explorer Magazine</h1>

        <div className="grid">
          {magazineSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="section">
              <div className="section-title">{section.title}</div>

              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="card">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="card-image"
                  />
                  <div className="card-body">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-text">{item.text}</p>
                    <div className="card-footer">
                      <button className="btn">Read More</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}