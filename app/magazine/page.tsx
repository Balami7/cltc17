export const metadata = {
  title: "explorer's magazine",
  description: "Internal dashboard showing achievements, AI ethics framework, staff of the month, and birthdays",
};

export default function DashboardPage() {
  return (
    <div className="page-wrapper">
      <section className="section achievements">
        <h2 className="section-title">Achievements</h2>
        <h3>Quarterly Performance Report: Record-Breaking Achievements Under the Leadership of the Director General</h3>
        <p>This quarter has signaled significant progress in our journey under the strategic leadership of the Director General (DG). We have achieved record-breaking results across multiple key performance areas.</p>
        <p>Through strengthened governance, operational efficiency, and strategic stakeholder engagement, the organisation has surpassed its quarterly targets and expanded its impact across key sectors.</p>
        <p><strong>Key Highlights:</strong></p>
        <ul className="key-highlights">
          <li>Highest quarterly performance rating in organisational history</li>
          <li>Successful implementation of advanced quality assurance frameworks</li>
          <li>Completion and delivery of high-priority strategic projects</li>
          <li>Enhanced inter-departmental collaboration and knowledge sharing</li>
        </ul>
        <p>As we reflect on this quarter’s achievements, we reaffirm our commitment to sustainable growth, innovation, and service excellence.</p>
      </section>

      <section className="section ai-ethics">
        <h2 className="section-title">AI Ethics Framework</h2>
        <h3>Building Responsible AI for Tomorrow</h3>
        <p>As artificial intelligence continues to transform industries and societies, the imperative for ethical, secure, and transparent AI systems has never been greater.</p>
        <p><strong>Inside the Publication:</strong></p>
        <ul className="key-highlights">
          <li>Practical strategies for designing ethical AI systems</li>
          <li>Frameworks for balancing innovation with accountability</li>
          <li>Guidelines for meaningful stakeholder engagement</li>
          <li>Case studies of responsible AI deployment across sectors</li>
        </ul>
        <p>This edition marks a significant step toward building AI systems that are innovative, trustworthy, inclusive, and socially responsible.</p>
      </section>

      <section className="section staff-month">
        <h2 className="section-title">Meet Our Staff of the Month!</h2>
        <p>Hard work deserves recognition. We're proud to celebrate someone truly exceptional this month!</p>

        <div className="current-staff">
          <img src="/image 4.png" alt="Aisha Bello" />
          <h4>Aisha Bello</h4>
          <p>Operations Officer</p>
          <p>February</p>
          <p>We proudly recognize Aisha Bello for her outstanding dedication, proactive problem-solving, and exceptional support to our operational systems.</p>
          <p>Congratulations on this well-deserved recognition!</p>
        </div>

        <h3>Previous Winners</h3>
        <div className="previous-winners">
          <div className="previous-winner">
            <img src="/image 4.png" alt="Olawale Munna" />
            <p>Olawale Munna</p>
            <p>January</p>
          </div>
          <div className="previous-winner">
            <img src="/image 4.png" alt="Mercy James" />
            <p>Mercy James</p>
            <p>December</p>
          </div>
          <div className="previous-winner">
            <img src="/image 4.png" alt="Prince Akachi" />
            <p>Prince Akachi</p>
            <p>November</p>
          </div>
        </div>
      </section>

      <section className="section birthdays">
        <h2 className="section-title">Celebrating Our Amazing Team </h2>
        <p>Honouring the incredible people who make every day better. Happy Birthday to our March celebrants!</p>

        <div className="current-birthday">
          <img src="/image 4.png" alt="Fatima Mohammed" />
          <h4>Fatima Mohammed</h4>
          <p>Finance Officer</p>
          <p>March 3rd</p>
          <p>Fatima’s precision and dedication keep our financial operations running smoothly.</p>
          <p>Happy Birthday!</p>
        </div>

        <h3>Upcoming Birthdays</h3>
        <div className="upcoming-birthdays">
          <div className="upcoming-birthday">
            <img src="/image 4.png" alt="Olawale Munna" />
            <p>Olawale Munna</p>
            <p>March 6th</p>
          </div>
          <div className="upcoming-birthday">
            <img src="/image 4.png" alt="Mercy James" />
            <p>Mercy James</p>
            <p>March 28th</p>
          </div>
          <div className="upcoming-birthday">
            <img src="/image 4.png" alt="Prince Akachi" />
            <p>Prince Akachi</p>
            <p>March 29th</p>
          </div>
        </div>
      </section>
    </div>
  );
}