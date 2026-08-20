import MagazineListClient from '@/components/MagazineListClient'

export default function MagazinePage() {
  const apiBase = process.env.NEXT_PUBLIC_CLTC_API_BASE
  if (!apiBase) throw new Error('CLTC API base URL not configured. Set CLTC_API_BASE or NEXT_PUBLIC_CLTC_API_BASE in environment.')

  return (
    <main>
      <section className="news-section">
        <div className="container">
          <div className="news-header">
            <h2>MAGAZINES</h2>
          </div>

          <MagazineListClient apiBase={apiBase} />
        </div>
      </section>
    </main>
  )
}
export const metadata = {
  title: "explorer's magazine",
  description: "Internal dashboard showing achievements, AI ethics framework, staff of the month, and birthdays",
};
