

interface Magazine {
  id: string
  title: string
  main_image_uri?: string
  published_at?: string
  excerpt?: string
}

export default async function ExplorerMagazine() {
  const API_BASE = process.env.CLTC_API_BASE || process.env.NEXT_PUBLIC_CLTC_API_BASE
  if (!API_BASE) throw new Error('CLTC API base URL not configured. Set CLTC_API_BASE or NEXT_PUBLIC_CLTC_API_BASE in environment.')

  async function fetchLatest(): Promise<Magazine[]> {
    try {
      const res = await fetch(`${(API_BASE as string).replace(/\/+$/, '')}/magazines`, { cache: 'no-store' })
      if (!res.ok) return []
      const data = await res.json()
      return Array.isArray(data) ? data : data?.magazines ?? []
    } catch (e) {
      return []
    }
  }

  const magazines = await fetchLatest()
  const latestMagazines = magazines.slice(0, 4)

  return (
    <section className="news-section explorer-magazine landing-news">
      <div className="container">
        <div className="news-header">
          <h2>CLTC Explorer Magazine</h2>
        </div>
        {latestMagazines.length === 0 ? (
          <p>No magazines available</p>
        ) : (
          <div className="news-grid">
            {latestMagazines.map((latest: Magazine) => (
              <div key={latest.id} className="news-card">
                {latest.main_image_uri ? (
                  <div className="news-image-container">
                    <img src={latest.main_image_uri} alt={latest.title} />
                    <span className="news-badge">MAGAZINE</span>
                  </div>
                ) : (
                  <div className="news-image-container no-image">
                    <span className="news-badge">MAGAZINE</span>
                  </div>
                )}
                <div className="news-date">{latest.published_at?.split('T')[0] || ''}</div>
                <div className="news-content">
                  <h3 className="news-title">{latest.title}</h3>
                  <p>{latest.excerpt ?? ''}</p>
                  <a href={`/magazine-detail?id=${latest.id}`} className="news-readmore">Read Issue</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
