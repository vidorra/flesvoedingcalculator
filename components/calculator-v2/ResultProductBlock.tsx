'use client'

import { useEffect, useRef, useState } from 'react'
import type { AgeCategory } from '../../hooks/useCalculator'
import { trackEvent } from '../../lib/analytics'
import { trackAffiliateClick, useExperimentContext, useImpression, withBolSubId } from '../../lib/experiments'

/**
 * Drie producten bij de uitkomst van de calculator, passend bij de gekozen
 * leeftijd. Jens kiest ze per leeftijdsband in de admin (tab Toewijzing,
 * categorie Calculator). Zonder eigen producten toont de API de standaard.
 *
 * Ophalen gebeurt bij het laden en bij wisselen van leeftijd, tonen pas als
 * er een uitkomst is. Bij een premature berekening geen producten.
 */

const PLACEMENT = 'result_block'

const BANDS: Record<Exclude<AgeCategory, 'premature'>, { pageId: string; title: string }> = {
  '0-1': { pageId: 'calc-0-1', title: 'Handig in de eerste weken' },
  '1': { pageId: 'calc-1-3', title: 'Handig bij 1 tot 3 maanden' },
  '3': { pageId: 'calc-3-6', title: 'Handig bij 3 tot 6 maanden' },
  '6': { pageId: 'calc-6plus', title: 'Handig vanaf 6 maanden' }
}

interface Product {
  id: string
  name?: string
  type?: string
  price?: string | null
  originalPrice?: string | null
  data?: {
    url?: string
    imageUrl?: string
    cardUrl?: string
    productUrl?: string
    fallbackImage?: string
    title?: string
  }
}

function fmtPrice(price: unknown) {
  const s = String(price).trim()
  return s.includes('€') ? s : `€ ${s}`
}

function hrefFor(p: Product): string {
  if (String(p.type || '').includes('amazon')) return p.data?.url || '#'
  return p.data?.cardUrl || p.data?.productUrl || '#'
}

export default function ResultProductBlock({
  ageMonths,
  hasResult,
  isPremature
}: {
  ageMonths: AgeCategory
  hasResult: boolean
  isPremature: boolean
}) {
  const band = (ageMonths !== 'premature' && BANDS[ageMonths]) || BANDS['0-1']
  const [products, setProducts] = useState<Product[]>([])
  const [loadedFor, setLoadedFor] = useState<string | null>(null)
  const ctx = useExperimentContext()
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let cancelled = false
    fetch(`/api/affiliates/page/${band.pageId}/`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (cancelled) return
        setProducts(data?.success && Array.isArray(data.snippets) ? data.snippets.slice(0, 3) : [])
        setLoadedFor(band.pageId)
      })
      .catch(() => {
        if (!cancelled) {
          setProducts([])
          setLoadedFor(band.pageId)
        }
      })
    return () => { cancelled = true }
  }, [band.pageId])

  const visible = hasResult && !isPremature && loadedFor === band.pageId && products.length > 0
  useImpression(rootRef, PLACEMENT, ctx, visible)

  if (!visible) return null

  const onClick = (id: string) => {
    try { trackEvent('affiliate_click', { snippet_id: id, widget: PLACEMENT }) } catch {}
    trackAffiliateClick(id, PLACEMENT, ctx)
  }

  return (
    <section ref={rootRef} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
      <div className="flex items-baseline justify-between gap-3 mb-3">
        <h3 className="text-sm font-semibold text-primary">{band.title}</h3>
        <a href="/affiliate-disclaimer" className="text-xs text-gray-500 hover:text-primary underline decoration-dotted underline-offset-2 flex-shrink-0">
          Gesponsorde links
        </a>
      </div>
      <ul className="space-y-2">
        {products.map((p) => {
          const isAmazon = String(p.type || '').includes('amazon')
          const name = p.name || p.data?.title || ''
          const image = p.data?.imageUrl || p.data?.fallbackImage
          return (
            <li key={p.id}>
              <a
                href={withBolSubId(hrefFor(p), ctx)}
                target="_blank"
                rel="nofollow sponsored noopener"
                onClick={() => onClick(p.id)}
                className="flex items-center gap-3 p-2 rounded-xl border border-gray-100 hover:border-primary/30 transition-colors group"
              >
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-white rounded-lg overflow-hidden">
                  {image && (
                    <img
                      src={image}
                      alt={name}
                      loading="lazy"
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => { e.currentTarget.style.visibility = 'hidden' }}
                    />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-primary transition-colors">{name}</p>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    {p.price ? (
                      <span className="text-sm font-bold text-gray-900">
                        {fmtPrice(p.price)}
                        {p.originalPrice && p.originalPrice !== p.price && (
                          <span className="ml-1.5 text-xs font-normal text-gray-500 line-through">{fmtPrice(p.originalPrice)}</span>
                        )}
                      </span>
                    ) : <span />}
                    <img
                      src={isAmazon ? '/amazon.png' : '/bol.jpg'}
                      alt={isAmazon ? 'Amazon' : 'bol.com'}
                      className="h-5 w-auto max-w-[64px] object-contain"
                    />
                  </div>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
