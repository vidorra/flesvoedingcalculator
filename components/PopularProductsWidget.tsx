'use client'
import { useEffect, useState } from 'react'
import { trackEvent } from '../lib/analytics'

interface Snippet {
  id: string
  name: string
  url: string
  type?: string | null
  tag?: string | null
  imageUrl?: string | null
  price?: string | null
  originalPrice?: string | null
  clicks: number
  active: boolean
}

// Prijsweergave: DB-prijzen zijn soms "24.99" en soms "€ 24,99"
function fmtPrice(price: unknown) {
  const s = String(price).trim()
  return s.includes('€') ? s : `€ ${s}`
}

function trackClick(snippetId: string) {
  try {
    trackEvent('affiliate_click', { snippet_id: snippetId, widget: 'popular_products' })
    const body = JSON.stringify({ snippetId })
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      navigator.sendBeacon('/api/track-click', body)
    } else {
      fetch('/api/track-click', { method: 'POST', body, keepalive: true }).catch(() => {})
    }
  } catch {}
}

export default function PopularProductsWidget({ limit = 4 }: { limit?: number }) {
  const [snippets, setSnippets] = useState<Snippet[]>([])

  useEffect(() => {
    fetch(`/api/popular-snippets?limit=${Math.min(limit, 4)}`)
      .then(r => r.json())
      .then(data => {
        if (data.success && data.snippets?.length > 0) {
          setSnippets(data.snippets.slice(0, 4))
        }
      })
      .catch(() => {})
  }, [limit])

  if (snippets.length === 0) return null

  return (
    <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-4">
      <div className="mb-3">
        <h3 className="text-sm font-semibold text-primary">Aanbevolen Producten</h3>
        <p className="text-xs text-gray-400 mt-0.5"><a href="/affiliate-disclaimer" className="hover:text-primary underline decoration-dotted underline-offset-2">Gesponsorde links</a></p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {snippets.map(snippet => (
          <a
            key={snippet.id}
            href={snippet.url}
            target="_blank"
            rel="nofollow noopener"
            onClick={() => trackClick(snippet.id)}
            className="flex flex-col group border border-gray-100 hover:border-primary/30 rounded-xl overflow-hidden transition-colors"
          >
            <div className="relative flex items-center justify-center aspect-[2/1]">
              {/* Platform-logo (bol.com / Amazon), afgeleid van het type */}
              <div className="absolute top-1.5 right-1.5 z-10">
                <img
                  src={String(snippet.type || '').includes('amazon') ? '/amazon.png' : '/bol.jpg'}
                  alt={String(snippet.type || '').includes('amazon') ? 'Amazon' : 'bol.com'}
                  className="h-7 w-auto max-w-[80px] object-contain rounded bg-white p-1 shadow-sm"
                />
              </div>
              {snippet.imageUrl ? (
                <img
                  src={snippet.imageUrl}
                  alt={snippet.name}
                  className="h-full w-auto max-w-[85%] object-contain"
                  onError={(e: any) => { e.target.style.display = 'none' }}
                />
              ) : (
                <div className="w-full h-full" />
              )}
            </div>
            <div className="p-2 flex flex-col gap-1">
              {snippet.tag && String(snippet.tag).split(',')[0].trim() && (
                <span className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded-full self-start">
                  {String(snippet.tag).split(',')[0].trim()}
                </span>
              )}
              <p className="text-xs font-medium text-gray-800 line-clamp-2 group-hover:text-primary transition-colors">
                {snippet.name}
              </p>
              {snippet.price && (
                <p className="text-sm font-bold text-gray-900">
                  {fmtPrice(snippet.price)}
                  {snippet.originalPrice && snippet.originalPrice !== snippet.price && (
                    <span className="ml-1.5 text-xs font-normal text-gray-500 line-through">{fmtPrice(snippet.originalPrice)}</span>
                  )}
                </p>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
