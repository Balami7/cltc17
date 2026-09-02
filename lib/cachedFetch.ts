const CACHE_PREFIX = "cltc-api-cache:"
const CACHE_TTL = 5 * 60 * 1000

type CachedResponse = {
  body: string
  status: number
  timestamp: number
}

const pendingRequests = new Map<string, Promise<Response>>()

function readCache(url: string): CachedResponse | null {
  try {
    const raw = sessionStorage.getItem(`${CACHE_PREFIX}${url}`)
    if (!raw) return null
    const cached = JSON.parse(raw) as CachedResponse
    if (Date.now() - cached.timestamp >= CACHE_TTL) {
      sessionStorage.removeItem(`${CACHE_PREFIX}${url}`)
      return null
    }
    return cached
  } catch {
    return null
  }
}

function responseFromCache(cached: CachedResponse) {
  return new Response(cached.body, {
    status: cached.status,
    headers: { "Content-Type": "application/json" },
  })
}

export function cachedFetch(url: string): Promise<Response> {
  const cached = readCache(url)
  if (cached) return Promise.resolve(responseFromCache(cached))

  const pending = pendingRequests.get(url)
  if (pending) return pending.then((response) => response.clone())

  const request = fetch(url).then(async (response) => {
    if (response.ok) {
      const body = await response.clone().text()
      try {
        sessionStorage.setItem(
          `${CACHE_PREFIX}${url}`,
          JSON.stringify({ body, status: response.status, timestamp: Date.now() }),
        )
      } catch {
        // Ignore storage limits and continue with the network response.
      }
    }
    return response
  })

  pendingRequests.set(url, request)
  request.finally(() => pendingRequests.delete(url)).catch(() => undefined)
  return request
}