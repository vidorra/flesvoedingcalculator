'use client'

// Ophalen voor /admin/stats met een cache per URL. Tabs halen pas op als ze
// open gaan; terugschakelen is direct, en het overzicht deelt zijn antwoorden
// met de tabs Google en Verkopen. Lopende verzoeken voor dezelfde URL worden
// samengevoegd. Na 5 minuten wordt bij het openen opnieuw opgehaald.

import { useCallback, useEffect, useRef, useState } from 'react'

type Entry = { data: unknown; at: number }

const TTL = 5 * 60_000
const cache = new Map<string, Entry>()
const inflight = new Map<string, Promise<unknown>>()
const listeners = new Map<string, Set<() => void>>()

class FetchError extends Error {
  status: number
  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }
}

function load(url: string): Promise<unknown> {
  const running = inflight.get(url)
  if (running) return running
  const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') : null
  if (!token) return Promise.reject(new FetchError(401, 'Unauthorized'))
  const p = fetch(url, { headers: { Authorization: `Bearer ${token}` } })
    .then(async (r) => {
      if (r.status === 401) throw new FetchError(401, 'Unauthorized')
      const d = await r.json().catch(() => null)
      if (!d || !d.success) throw new FetchError(r.status, d?.error || '')
      cache.set(url, { data: d, at: Date.now() })
      listeners.get(url)?.forEach((fn) => fn())
      return d
    })
    .finally(() => inflight.delete(url))
  inflight.set(url, p)
  return p
}

export function useAdminJson<T>(url: string | null, errorText: string) {
  const [, rerender] = useState(0)
  const [error, setError] = useState<string | null>(null)
  // Vorige data tonen tot het nieuwe antwoord er is (bv. bij een andere periode)
  const last = useRef<T | null>(null)

  const run = useCallback((u: string) =>
    load(u)
      .then(() => setError(null))
      .catch((e: unknown) => {
        // Sessie verlopen: terug naar de inlog van de admin
        if (e instanceof FetchError && e.status === 401) window.location.replace('/admin')
        else setError((e instanceof Error && e.message) || errorText)
      }), [errorText])

  useEffect(() => {
    if (!url) return
    const fn = () => rerender((n) => n + 1)
    let set = listeners.get(url)
    if (!set) listeners.set(url, (set = new Set()))
    set.add(fn)
    const hit = cache.get(url)
    if (!hit || Date.now() - hit.at > TTL) run(url)
    else setError(null)
    return () => { set!.delete(fn) }
  }, [url, run])

  const reload = useCallback(() => (url ? run(url) : Promise.resolve()), [url, run])

  const hit = url ? cache.get(url) : undefined
  if (hit) last.current = hit.data as T
  return { data: last.current, loading: Boolean(url && !hit), error, reload }
}
