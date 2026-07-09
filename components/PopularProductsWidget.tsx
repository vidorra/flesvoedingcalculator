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
  clicks: number
  active: boolean
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
        <p className="text-xs text-gray-400 mt-0.5">Gesponsorde links</p>
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
              {/* Platform-badge (bol.com / Amazon), afgeleid van het type */}
              <div className="absolute top-1.5 right-1.5 z-10">
                {String(snippet.type || '').includes('amazon') ? (
                  <span className="bg-[#232F3E] text-white text-[9px] leading-none px-1.5 py-1 rounded font-bold tracking-tight">
                    amazon
                  </span>
                ) : (
                  <span className="bg-[#0050c8] text-white text-[9px] leading-none px-1.5 py-1 rounded font-bold tracking-tight">
                    bol<span className="text-[#ffd200]">.com</span>
                  </span>
                )}
              </div>
              {snippet.imageUrl ? (
                <img
                  src={snippet.imageUrl}
                  alt={snippet.name}
                  className="max-w-[60%] h-full object-contain"
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
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
