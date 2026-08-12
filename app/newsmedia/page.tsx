export const metadata = {
  title: "News & Media - Citizenship and Leadership Training Centre",
  description: "Latest news, updates, events, and media coverage from CLTC",
};

import NewsListClient from "@/components/NewsListClient"

export default function NewsMediaPage() {
  return (
    <main>
      <section className="news-section">
        <div className="container">
          <div className="section-heading-wrapper">
            <h2 className="section-heading">News & Media</h2>
          </div>

          <NewsListClient />
        </div>
      </section>
    </main>
  )
}