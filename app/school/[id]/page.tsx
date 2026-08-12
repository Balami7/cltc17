import Link from 'next/link'

async function fetchAll() {
  try {
    const res = await fetch('/api/public/schools', { cache: 'no-store' })
    if (!res.ok) return []
    const data = await res.json()
    return Array.isArray(data) ? data : data?.schools ?? []
  } catch (e) {
    return []
  }
}

async function fetchOne(id: string) {
  try {
    const res = await fetch(`/api/public/schools/${id}`, { cache: 'no-store' })
    if (!res.ok) return null
    return await res.json()
  } catch (e) {
    return null
  }
}

export default async function SchoolDetail({ params }: { params: { id: string } }) {

  const id = params.id
  const [all, item] = await Promise.all([fetchAll(), fetchOne(id)])

  if (!item) {
    return (
      <main>
        <p>School not found.</p>
        <Link href="/school">Back to schools</Link>
      </main>
    )
  }

  // find index in all
  const index = all.findIndex((s: any) => String(s.id) === String(id))
  const prev = index > 0 ? all[index - 1] : null
  const next = index >= 0 && index < all.length - 1 ? all[index + 1] : null

  return (
    <main>
      <div className="container">
        <p>
          <Link href="/school">← Back</Link>
        </p>

        <article className="school-article">
          <h1>{item.name}</h1>
          <p>{item.location}</p>
          <p>{item.address}</p>

          {item.photo_urls?.length > 0 && <img src={item.photo_urls[0]} alt={item.name} />}

          <section>
            <h3>Coordinator</h3>
            {item.coordinator && (
              <div>
                <p>{item.coordinator.name}</p>
                <p>{item.coordinator.phone_number}</p>
                <p>{item.coordinator.email}</p>
              </div>
            )}
          </section>
        </article>

        <div className="school-nav">
          {prev ? (
            <Link href={`/school/${prev.id}`} className="btn prev">
              ← Previous
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link href={`/school/${next.id}`} className="btn next">
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
