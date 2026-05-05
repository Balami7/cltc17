export const metadata = {
  title: "Procurement - Citizenship and Leadership Training Centre",
  description: "Invitation to Tender / Expression of Interest for 2025 Capital Projects",
};

export default function ProcurementPage() {
  const lots = [
    "Renovation of 6 Nos. VIP Toilets/Latrines at Training Schools – Abuja, Jos, Kano, Owerri, Enugu & Lagos",
    "Renovation of 6 Nos. Perimeter Fencing at Training Schools – Abuja, Jos, Kano, Owerri, Enugu & Lagos",
    "Renovation of 6 Nos. Hostel Blocks at Training Schools – Abuja, Jos, Kano, Owerri, Enugu & Lagos",
    "Renovation of 6 Nos. Administrative Blocks at Training Schools – Abuja, Jos, Kano, Owerri, Enugu & Lagos",
    "Renovation of 6 Nos. Dining Halls/Kitchens at Training Schools – Abuja, Jos, Kano, Owerri, Enugu & Lagos",
    "Renovation of 6 Nos. Perimeter Lighting at Training Schools – Abuja, Jos, Kano, Owerri, Enugu & Lagos",
    "Renovation of 6 Nos. Classrooms/Lecture Halls at Training Schools – Abuja, Jos, Kano, Owerri, Enugu & Lagos",
    "Renovation of 6 Nos. Staff Quarters at Training Schools – Abuja, Jos, Kano, Owerri, Enugu & Lagos",
    "Renovation of 6 Nos. Generator Houses at Training Schools – Abuja, Jos, Kano, Owerri, Enugu & Lagos",
    "Renovation of 6 Nos. Water Supply System at Training Schools – Abuja, Jos, Kano, Owerri, Enugu & Lagos",
    "Construction of Perimeter Fencing at Training Schools – Abuja, Jos, Kano, Owerri, Enugu & Lagos",
    "Construction of Perimeter Lighting at Training Schools – Abuja, Jos, Kano, Owerri, Enugu & Lagos",
    "Construction of Water Supply System at Training Schools – Abuja, Jos, Kano, Owerri, Enugu & Lagos",
    "Construction of Generator Houses at Training Schools – Abuja, Jos, Kano, Owerri, Enugu & Lagos",
    "Construction of Staff Quarters at Training Schools – Abuja, Jos, Kano, Owerri, Enugu & Lagos",
    "Construction of Classrooms/Lecture Halls at Training Schools – Abuja, Jos, Kano, Owerri, Enugu & Lagos",
    "Construction of Administrative Blocks at Training Schools – Abuja, Jos, Kano, Owerri, Enugu & Lagos",
    "Construction of Hostel Blocks at Training Schools – Abuja, Jos, Kano, Owerri, Enugu & Lagos",
  ];

  return (
    <main>
      <section className="procurement-section">
        <div className="container">
          <div className="section-heading-wrapper">
            <h2 className="section-heading">Invitation to Tender / Expression of Interest</h2>
          </div>

          <div className="tender-content">
            <h3 className="tender-title">
              Procurement of Goods/Supply, Works and Expression of Interest for Consultancy Services for 2025 Capital Projects
            </h3>

            <p className="tender-intro">
              The Citizenship and Leadership Training Centre in pursuance of the implementation of the 2025 Capital budget invites competent and reputable contractors/suppliers/consultants with relevant experience to tender for the under-listed projects.
            </p>

            <div className="lots-grid">
              {lots.map((lot, index) => (
                <div key={index} className="lot-item">
                  <strong>LOT {index + 1}</strong> {lot}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}