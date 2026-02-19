'use client'
import { useEffect, useState } from 'react'

interface Snippet {
  id: string
  name: string
  url: string
  tag?: string | null
  imageUrl?: string | null
  clicks: number
  active: boolean
}

function trackClick(snippetId: string) {
  try {
    const body = JSON.stringify({ snippetId })
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      navigator.sendBeacon('/api/track-click', body)
    } else {
      fetch('/api/track-click', { method: 'POST', body, keepalive: true }).catch(() => {})
    }
  } catch {}
}

export default function PopularProductsWidget({ limit = 5 }: { limit?: number }) {
  const [snippets, setSnippets] = useState<Snippet[]>([])

  useEffect(() => {
    fetch(`/api/popular-snippets?limit=${limit}`)
      .then(r => r.json())
      .then(data => {
        if (data.success && data.snippets?.length > 0) {
          setSnippets(data.snippets)
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
            <div className="bg-gray-50 flex items-center justify-center h-28">
              {snippet.imageUrl ? (
                <img
                  src={snippet.imageUrl}
                  alt={snippet.name}
                  className="w-full h-full object-contain p-2"
                  onError={(e: any) => { e.target.style.display = 'none' }}
                />
              ) : (
                <div className="w-full h-full" />
              )}
            </div>
            <div className="p-2 flex flex-col gap-1">
              {snippet.tag && (
                <span className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded-full self-start">
                  {snippet.tag}
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
