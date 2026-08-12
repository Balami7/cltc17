import MagazineListClient from '@/components/MagazineListClient'

export default function MagazinePage() {
  return (
    <main>
      <section className="magazine-section">
        <div className="container">
          <div className="section-heading-wrapper">
            <h2 className="section-heading">MAGAZINES</h2>
          </div>

          <MagazineListClient />
        </div>
      </section>
    </main>
  )
}
export const metadata = {
  title: "explorer's magazine",
  description: "Internal dashboard showing achievements, AI ethics framework, staff of the month, and birthdays",
};
