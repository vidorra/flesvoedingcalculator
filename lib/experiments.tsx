'use client'

/**
 * A/B-testen in de browser: loting, context en meten.
 *
 * - Geen cookies of bezoekers-id. De gelote variant staat in sessionStorage
 *   (één bezoek), `pv` is een willekeurig kenmerk van één paginalading dat
 *   alleen in het geheugen staat.
 * - `?exp_arm=<variant>` forceert een variant om te bekijken en zet het meten
 *   uit, zodat eigen testen de cijfers niet vervuilen.
 * - Lukt het ophalen niet of loopt er niets: de eerste variant (A).
 */

import { createContext, useContext, useEffect, useRef, useState, type ReactNode, type RefObject } from 'react'
import { getExperimentDefinition } from './experiments-config'

export interface ExperimentState {
  exp: string | null
  arm: string | null
  pv: string | null
  /** Alleen meten als de loting echt is (niet geforceerd, experiment loopt) */
  track: boolean
}

const EMPTY: ExperimentState = { exp: null, arm: null, pv: null, track: false }

const ExperimentContext = createContext<ExperimentState>(EMPTY)

export function ExperimentProvider({ value, children }: { value: ExperimentState; children: ReactNode }) {
  return <ExperimentContext.Provider value={value}>{children}</ExperimentContext.Provider>
}

export function useExperimentContext(): ExperimentState {
  return useContext(ExperimentContext)
}

/** Velden die met een meting meegaan, alleen als er gemeten wordt. */
export function experimentFields(ctx: ExperimentState): { exp?: string; arm?: string; pv?: string } {
  if (!ctx.track || !ctx.exp || !ctx.arm || !ctx.pv) return {}
  return { exp: ctx.exp, arm: ctx.arm, pv: ctx.pv }
}

function randomId(): string {
  try {
    if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID().replace(/-/g, '')
  } catch { /* oudere browser */ }
  return Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)
}

type ActiveResponse = {
  experiments?: Record<string, { status: string; arms: { id: string; weight: number }[]; winner: string | null }>
}

// Eén verzoek per paginalading, gedeeld door alle hooks
let activePromise: Promise<ActiveResponse> | null = null
function fetchActive(): Promise<ActiveResponse> {
  if (!activePromise) {
    activePromise = fetch('/api/experiments/active')
      .then((r) => (r.ok ? r.json() : {}))
      .catch(() => ({}))
  }
  return activePromise
}

function draw(arms: { id: string; weight: number }[]): string | null {
  const total = arms.reduce((s, a) => s + Math.max(0, Number(a.weight) || 0), 0)
  if (total <= 0) return null
  let r = Math.random() * total
  for (const a of arms) {
    r -= Math.max(0, Number(a.weight) || 0)
    if (r < 0) return a.id
  }
  return arms[arms.length - 1]?.id ?? null
}

/**
 * Loot een variant voor `key`. `arm` is null zolang de loting loopt; render
 * het deel dat per variant verschilt pas daarna, dan verspringt er niets.
 */
export function useExperiment(key: string): ExperimentState {
  const def = getExperimentDefinition(key)
  const control = def?.arms[0]?.id ?? 'control'
  const pvRef = useRef<string | null>(null)
  if (pvRef.current === null && typeof window !== 'undefined') pvRef.current = randomId()

  const [state, setState] = useState<ExperimentState>({ exp: key, arm: null, pv: null, track: false })

  useEffect(() => {
    let cancelled = false
    const pv = pvRef.current || randomId()
    const done = (arm: string, track: boolean) => {
      if (!cancelled) setState({ exp: key, arm, pv, track })
    }
    const validIds = def?.arms.map((a) => a.id) ?? [control]

    // Geforceerde variant via de URL: tonen, niet meten
    try {
      const forced = new URLSearchParams(window.location.search).get('exp_arm')
      if (forced && validIds.includes(forced)) {
        done(forced, false)
        return () => { cancelled = true }
      }
    } catch { /* geen URL beschikbaar */ }

    fetchActive().then((data) => {
      const cfg = data.experiments?.[key]
      if (!cfg) return done(control, false)
      if (cfg.status === 'finished') {
        return done(cfg.winner && validIds.includes(cfg.winner) ? cfg.winner : control, false)
      }
      if (cfg.status !== 'running') return done(control, false)

      const storageKey = `exp:${key}`
      let arm: string | null = null
      try {
        const stored = sessionStorage.getItem(storageKey)
        if (stored && validIds.includes(stored)) arm = stored
      } catch { /* sessionStorage geblokkeerd */ }
      if (!arm) {
        const usable = cfg.arms.filter((a) => validIds.includes(a.id))
        arm = draw(usable) || control
        try { sessionStorage.setItem(storageKey, arm) } catch { /* niet bewaren */ }
      }
      done(arm, true)
    })

    return () => { cancelled = true }
  }, [key, control, def])

  return state
}

function send(url: string, payload: Record<string, unknown>) {
  try {
    const body = JSON.stringify(payload)
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      navigator.sendBeacon(url, new Blob([body], { type: 'application/json' }))
    } else {
      fetch(url, { method: 'POST', body, keepalive: true, headers: { 'Content-Type': 'application/json' } }).catch(() => {})
    }
  } catch { /* meten mag nooit iets blokkeren */ }
}

/**
 * Naam van de subid-parameter in bol-partnerlinks. Het bol-script kent het
 * veld `linkSubId`; de naam in de klik-URL nog nakijken in het partnerdashboard.
 */
export const BOL_SUBID_PARAM = 'subid'

/** Bol-partnerlink voorzien van een subid per variant, zodat bol zelf ook per variant telt. */
export function withBolSubId(href: string, ctx: ExperimentState): string {
  const fields = experimentFields(ctx)
  if (!fields.exp || !href.includes('partner.bol.com')) return href
  try {
    const url = new URL(href)
    url.searchParams.set(BOL_SUBID_PARAM, `${fields.exp}_${fields.arm}`.slice(0, 40))
    return url.toString()
  } catch {
    return href
  }
}

/** Affiliate-klik loggen, met A/B-context als die er is. */
export function trackAffiliateClick(
  snippetId: string,
  widget: string,
  ctx: ExperimentState,
  placement?: string
) {
  const fields = experimentFields(ctx)
  send('/api/track-click', {
    snippetId,
    widget,
    ...(fields.exp ? { ...fields, placement: placement || widget } : {})
  })
}

/**
 * Telt één vertoning als het element minstens een seconde voor de helft in
 * beeld is, één keer per paginalading. Alleen tijdens een lopend experiment.
 */
export function useImpression(ref: RefObject<HTMLElement | null>, placement: string, ctx: ExperimentState, enabled = true) {
  const sentRef = useRef(false)
  const { exp, arm, pv, track } = ctx

  useEffect(() => {
    if (!enabled || !track || !exp || !arm || !pv || sentRef.current) return
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    let timer: ReturnType<typeof setTimeout> | null = null
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting && e.intersectionRatio >= 0.5)
        if (visible && !timer) {
          timer = setTimeout(() => {
            if (sentRef.current) return
            sentRef.current = true
            send('/api/track-impression', { placement, exp, arm, pv })
            observer.disconnect()
          }, 1000)
        } else if (!visible && timer) {
          clearTimeout(timer)
          timer = null
        }
      },
      { threshold: [0, 0.5, 1] }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      if (timer) clearTimeout(timer)
    }
  }, [ref, placement, enabled, track, exp, arm, pv])
}
