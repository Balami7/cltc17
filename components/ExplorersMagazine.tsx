

export default async function ExplorerMagazine() {
  const API_BASE = process.env.CLTC_API_BASE || process.env.NEXT_PUBLIC_CLTC_API_BASE
  if (!API_BASE) throw new Error('CLTC API base URL not configured. Set CLTC_API_BASE or NEXT_PUBLIC_CLTC_API_BASE in environment.')

  async function fetchLatest() {
    try {
      const res = await fetch(`${(API_BASE as string).replace(/\/+$/, '')}/magazines`, { cache: 'no-store' })
      if (!res.ok) return null
      const data = await res.json()
      const items = Array.isArray(data) ? data : data?.magazines ?? []
      return items[0] ?? null
    } catch (e) {
      return null
    }
  }

  const latest = await fetchLatest()

  if (!latest) {
    return (
      <div className="explorer-magazine">
        <div className="container">
          <h1 className="main-title">CLTC Explorer Magazine</h1>
          <p>No magazines available</p>
        </div>
      </div>
    )
  }

  return (
    <div className="explorer-magazine">
      <div className="container">
        <h1 className="main-title">CLTC Explorer Magazine</h1>
        <div className="grid">
          <div className="section">
            <div className="card">
              {latest.main_image_uri && <img src={latest.main_image_uri} alt={latest.title} className="card-image" />}
              <div className="card-body">
                <h3 className="card-title">{latest.title}</h3>
                <p className="card-text">{latest.excerpt ?? ''}</p>
                <div className="card-footer">
                  <a className="btn" href={`/magazine/${latest.id}`}>Read Latest Issue</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
