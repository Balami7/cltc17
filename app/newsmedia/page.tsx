export const metadata = {
  title: "News & Media - Citizenship and Leadership Training Centre",
  description: "Latest news, updates, events, and media coverage from CLTC",
};

import NewsListClient from "@/components/NewsListClient"

export default function NewsMediaPage() {
  const apiBase = process.env.NEXT_PUBLIC_CLTC_API_BASE || process.env.CLTC_API_BASE
  if (!apiBase) throw new Error('CLTC API base URL not configured. Set CLTC_API_BASE or NEXT_PUBLIC_CLTC_API_BASE in environment.')

  return (
    <main>
      <section className="news-section">
        <div className="container">
          <div className="section-heading-wrapper">
            <h2 className="section-heading">News & Media</h2>
          </div>

          <NewsListClient apiBase={apiBase} />
        </div>
      </section>
    </main>
  )
}