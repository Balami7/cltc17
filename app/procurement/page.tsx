import ProcurementsListClient from "@/components/ProcurementsListClient";

const API_BASE = process.env.CLTC_API_BASE || process.env.NEXT_PUBLIC_CLTC_API_BASE || "";

const currentYear = new Date().getFullYear();

export const metadata = {
  title: "Procurement - Citizenship and Leadership Training Centre",
  description: `Invitation to Tender / Expression of Interest for ${currentYear} Capital Projects`,
};

export default function ProcurementPage() {
  return (
    <main>
      <section className="procurement-section">
        <div className="container">
          <div className="section-heading-wrapper">
            <h2 className="section-heading">Invitation to Tender / Expression of Interest</h2>
          </div>

          <div className="tender-content">
            <h3 className="tender-title">
              Procurement of Goods/Supply, Works and Expression of Interest for Consultancy Services for {currentYear} Capital Projects
            </h3>

            <p className="tender-intro">
              The Citizenship and Leadership Training Centre in pursuance of the implementation of the {currentYear} Capital budget invites competent and reputable contractors/suppliers/consultants with relevant experience to tender for the under-listed projects.
            </p>

            <ProcurementsListClient apiBase={API_BASE} />
          </div>
        </div>
      </section>
    </main>
  );
}