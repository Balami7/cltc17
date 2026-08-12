import Link from 'next/link'

type NewsItem = {
  id: string
  title: string
  content?: string
  excerpt?: string
  main_image_uri?: string
  images?: string[]
  published_at?: string
}

async function fetchAll() {
  try {
    const res = await fetch('/api/news', { cache: 'no-store' })
    if (!res.ok) return []
    const data = await res.json()
    return Array.isArray(data) ? data : []
  } catch (e) {
    return []
  }
}

async function fetchOne(id: string) {
  try {
    const res = await fetch(`/api/news/${id}`, { cache: 'no-store' })
    if (!res.ok) return null
    return await res.json()
  } catch (e) {
    return null
  }
}

export default async function NewsDetailPage({ params }: { params: { id: string } }) {
  const id = params.id
  const [all, item] = await Promise.all([fetchAll(), fetchOne(id)])

  if (!item) {
    return (
      <main>
        <p>News not found.</p>
        <Link href="/newsmedia">Back to news</Link>
      </main>
    )
  }

  const index = all.findIndex((n: any) => String(n.id) === String(id))
  const prev = index > 0 ? all[index - 1] : null
  const next = index >= 0 && index < all.length - 1 ? all[index + 1] : null

  return (
    <main>
      <div className="container">
        <p>
          <Link href="/newsmedia">← Back</Link>
        </p>

        <article className="news-article">
          <h1>{item.title}</h1>
          <div className="news-meta">{item.published_at}</div>
          {item.main_image_uri && <img src={item.main_image_uri} alt={item.title} />}
          <div dangerouslySetInnerHTML={{ __html: item.content || item.excerpt || '' }} />
        </article>

        <div className="news-nav">
          {prev ? (
            <Link href={`/newsmedia/${prev.id}`} className="btn prev">
              ← Previous
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link href={`/newsmedia/${next.id}`} className="btn next">
              Next →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </main>
  )
}
