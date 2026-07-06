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
              The Citizenship and Leadership Training Centre (CLTC) is a Federal Government parastatal under the Federal Ministry of Youth Development, established to promote citizenship education, leadership development, civic responsibility and national values among Nigerians.
            </p>
            <p>
              CLTC was established in 1951 and given legal status by an Act of Parliament published in the extraordinary Official Gazette No. 45 of August 10, 1960. This legal instrument was later modified and repealed by Decree No. 38, enacted in December 1989.
            </p>
            <p>
             The Centre is Nigeria’s foremost institution for experiential citizenship and leadership training, equipping individuals with the knowledge, skills and values required for responsible citizenship, ethical leadership and national development.
            </p>
            <p>
             Through structured training programmes, outdoor and experiential learning, civic education initiatives and leadership development courses, the Centre cultivates patriotism, discipline, volunteerism, teamwork, resilience and public service among young people and other segments of society.
            </p>
            <p>
              The Centre also serves as the supervisory body of the Man O’ War Voluntary Organization, providing policy direction, institutional oversight and support for one of Nigeria’s foremost volunteer and citizenship development organizations.
            </p>
            <p>
              The Centre continues to partner with government institutions, educational establishments, development partners and civil society organizations to strengthen civic consciousness, nurture responsible leadership and empower citizens to contribute meaningfully to national development.
            </p>
          </div>

          <h2>Our Vision</h2>
          <div className="content">
            <p>
              To be Nigeria’s leading training institution for developing responsible citizens, ethical leaders and active communities committed to national development.
            </p>
          </div>

          <h2>Our Mission</h2>
          <div className="content">
            <p>To promote citizenship, patriotism, leadership, volunteerism and civic responsibility through innovative training, experiential learning, strategic partnerships and community engagement.</p>
          </div>

          <h2>Our Mandate</h2>
          <div className="content">
            <p>
              To promote citizenship education, leadership development, patriotism and national values through training, advocacy and experiential learning that builds the capacity of Nigerians to become responsible citizens and leaders committed to national development. <br/>
              To establish, supervise and strengthen the Man O’ War Voluntary Organization in promoting volunteerism, civic responsibility and community service. <br />
              To conduct research into youth-related social issues and develop practical solutions that foster responsible citizenship and national development.

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
              <img className="leader-img" src="/image 5.png" alt="Mrs. Ada Veronica Uche" />
              <div className="leader-info">
                <h3 className="leader-name">Mrs. Ada Veronica Uche</h3>
                <p className="leader-title">H.O.D Special Services</p>
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
              <img className="leader-img" src="/image 11.png" alt="Dr. Abokwara-Adjekota Alero" />
              <div className="leader-info">
                <h3 className="leader-name">Dr. Abokwara-Adjekota Alero</h3>
                <p className="leader-title">H.O.D Operation & Rescue</p>
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
              <img className="leader-img" src="/image 10.png" alt="Alhaji Danjuma Ochidi" />
              <div className="leader-info">
                <h3 className="leader-name">Alhaji Danjuma Ochidi</h3>
                <p className="leader-title">H.O.D Reform Services Coordination & Innovation Department (RSCID)</p>
              </div>
            </div>

            <div className="leader-card">
              <img className="leader-img" src="/image 33.png" alt="Alhaji Usman Furfuri" />
              <div className="leader-info">
                <h3 className="leader-name">Alhaji Ibrahim Usman Furfuri</h3>
                <p className="leader-title">H.O.D Human Resources</p>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </main>
  );
}
