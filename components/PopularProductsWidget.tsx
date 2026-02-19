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
      <h3 className="text-sm font-semibold text-primary mb-3 flex items-center gap-1">
        <span>🔥</span>
        <span>Meest bekeken producten</span>
      </h3>
      <div className="flex flex-col gap-3">
        {snippets.map(snippet => (
          <a
            key={snippet.id}
            href={snippet.url}
            target="_blank"
            rel="nofollow noopener"
            onClick={() => trackClick(snippet.id)}
            className="flex items-center gap-3 group hover:bg-gray-50 rounded-xl p-2 -mx-2 transition-colors"
          >
            {snippet.imageUrl && (
              <img
                src={snippet.imageUrl}
                alt={snippet.name}
                className="w-14 h-14 object-contain rounded-lg flex-shrink-0 bg-gray-50"
                onError={(e: any) => { e.target.style.display = 'none' }}
              />
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-primary transition-colors">
                {snippet.name}
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                {snippet.tag && (
                  <span className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded-full">
                    {snippet.tag}
                  </span>
                )}
                {snippet.clicks > 0 && (
                  <span className="text-xs text-gray-400">
                    {snippet.clicks}× bekeken
                  </span>
                )}
              </div>
            </div>
            <span className="text-primary text-xs flex-shrink-0">→</span>
          </a>
        ))}
      </div>
    </div>
  )
}
