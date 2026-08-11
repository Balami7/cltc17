import Link from 'next/link'

const API_BASE = process.env.CLTC_API_BASE || process.env.NEXT_PUBLIC_CLTC_API_BASE
if (!API_BASE) throw new Error('CLTC API base URL not configured. Set CLTC_API_BASE or NEXT_PUBLIC_CLTC_API_BASE in environment.')

async function fetchAll() {
  try {
    const res = await fetch(`${API_BASE.replace(/\/+$/, '')}/magazines`, { cache: 'no-store' })
    if (!res.ok) return []
    const data = await res.json()
    return Array.isArray(data) ? data : data?.magazines ?? []
  } catch (e) {
    return []
  }
}

async function fetchOne(id: string) {
  try {
    const res = await fetch(`${API_BASE.replace(/\/+$/, '')}/magazines/${id}`, { cache: 'no-store' })
    if (!res.ok) return null
    return await res.json()
  } catch (e) {
    return null
  }
}

export default async function MagazineDetail({ params }: { params: { id: string } }) {
  const id = params.id
  const [all, item] = await Promise.all([fetchAll(), fetchOne(id)])

  if (!item) {
    return (
      <main>
        <p>Magazine not found.</p>
        <Link href="/magazine">Back to magazines</Link>
      </main>
    )
  }

  const index = all.findIndex((m: any) => String(m.id) === String(id))
  const prev = index > 0 ? all[index - 1] : null
  const next = index >= 0 && index < all.length - 1 ? all[index + 1] : null

  return (
    <main>
      <div className="container">
        <p>
          <Link href="/magazine">← Back</Link>
        </p>

        <article className="magazine-article">
          <h1>{item.title}</h1>
          <div className="magazine-meta">{item.published_at}</div>
          {item.main_image_uri && <img src={item.main_image_uri} alt={item.title} />}
          <div dangerouslySetInnerHTML={{ __html: item.content || item.excerpt || '' }} />
        </article>

        <div className="magazine-nav">
          {prev ? (
            <Link href={`/magazine/${prev.id}`} className="btn prev">← Previous</Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link href={`/magazine/${next.id}`} className="btn next">Next →</Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </main>
  )
}
