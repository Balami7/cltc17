import Link from "next/link";

export const metadata = {
  title: "About Us - Citizenship and Leadership Training Centre",
  description: "Learn about CLTC's vision, mission, mandate, and leadership team.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="about-section">
        <div className="container">
          <h1 id="aboutt">About CLTC</h1>

          <div className="content">
            <p>
              The Citizenship and Leadership Training Centre is a Parastatal in the Federal Ministry of Youths.
            </p>
            <p>
              It is principally a human resource development outfit established for the training and moulding of{" "}
              <span className="highlight">Nigerian Citizens</span> to become responsible and respectable Citizens and Leaders.
            </p>
            <p>
              The Centre is by all indications the only informal educational institution that executes experiential and{" "}
              <span className="highlight">Outward Bound education</span>. It provides citizenship and leadership training in an
              atmosphere in which self-discovery and self-actualization are evidently based on one’s competence and ability,
              irrespective of origin, belief or class.
            </p>
            <p>
              It is principally a human development outfit established for the training and moulding of Nigerian citizenry to
              become responsible and respectable citizens and leaders.
            </p>
          </div>

          <h2>Our Vision</h2>
          <div className="content">
            <p>
              To be a world class provider of quality training that will empower Nigerians for good citizenship and responsible
              class of leadership.
            </p>
          </div>

          <h2>Our Mission</h2>
          <div className="content">
            <p>Providing a sustainable framework for citizenship and leadership training and value-orientation.</p>
          </div>

          <h2>Our Mandate</h2>
          <div className="content">
            <p>
              To establish Man O'War Clubs and Commands and formulate policy guidelines for running the Clubs and Commands.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-heading-wrapper">
            <h2 className="section-heading">Our Leadership Team</h2>
          </div>

          <div className="featured-leaders">
            <div className="leader-card-large">
              <img className="leader-img" src="/image 4b.png" alt="Rinsola Abiola" />
              <div className="leader-info">
                <h3 className="leader-name">RINSOLA ABIOLA</h3>
                <p className="leader-title">DIRECTOR GENERAL</p>
                <p className="leader-desc">Citizenship & Leadership Training Centre</p>
              </div>
            </div>
          </div>

          <div className="team-grid">
            <div className="leader-card">
              <img className="leader-img" src="/image 10.png" alt="Alhaji Danjuma Ochidi" />
              <div className="leader-info">
                <h3 className="leader-name">Alhaji Danjuma Ochidi</h3>
                <p className="leader-title">H.O.D Reform Services Coordination & Innovation Department (RSCID)</p>
              </div>
            </div>

            <div className="leader-card">
              <img className="leader-img" src="/image 11.png" alt="Dr. Abokwara-Adjekota Alero" />
              <div className="leader-info">
                <h3 className="leader-name">Dr. Abokwara-Adjekota Alero</h3>
                <p className="leader-title">H.O.D Operation & Rescue</p>
              </div>
            </div>

            <div className="leader-card">
              <img className="leader-img" src="/image 30.png" alt="Mr Adiole Marshall" />
              <div className="leader-info">
                <h3 className="leader-name">Mr. Adiole Marshall</h3>
                <p className="leader-title">H.O.D Planning Research, Monitoring and Information</p>
              </div>
            </div>

            <div className="leader-card">
              <img className="leader-img" src="/image 33.png" alt="Alhaji Usman Furfuri" />
              <div className="leader-info">
                <h3 className="leader-name">Alhaji Ibrahim Usman Furfuri</h3>
                <p className="leader-title">H.O.D Human Resources</p>
              </div>
            </div>

            <div className="leader-card">
              <img className="leader-img" src="/image 34.png" alt="Mr. Ebiwari Elehibiri" />
              <div className="leader-info">
                <h3 className="leader-name">Mr. Ebiwari Elehibiri</h3>
                <p className="leader-title">H.O.D Training & Development</p>
              </div>
            </div>

            <div className="leader-card">
              <img className="leader-img" src="/image 5.png" alt="Mrs. Ada Veronica Uche" />
              <div className="leader-info">
                <h3 className="leader-name">Mrs. Ada Veronica Uche</h3>
                <p className="leader-title">H.O.D Special Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}