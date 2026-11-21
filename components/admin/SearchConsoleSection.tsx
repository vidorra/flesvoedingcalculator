'use client'

import { useCallback, useEffect, useState } from 'react'
import { BarChart3, Search, Route, Target, FileSearch, ShieldCheck, RefreshCw, Eye, MousePointerClick, ListOrdered } from 'lucide-react'
import { Card, DailyChart, KpiCard, TrendBadge } from './stats-ui'

type Row = Record<string, string | number | null>
type RunRow = {
  id: number
  started_at: string
  finished_at: string | null
  ok: boolean | null
  trigger: string | null
  error: string | null
}
type GscData = {
  configured: boolean
  serviceAccount: string | null
  bucket: string
  lastRun: RunRow | null
  totals: Row[]
  daily: Row[]
  pages: Row[]
  opportunities: Row[]
  weak: Row[]
  index: Row[]
}

const HOSTS: Record<string, string> = {
  flesvoedingcalculator: 'flesvoedingcalculator.nl',
  togwaarde: 'togwaarde.nl'
}
const SITE_LABELS: Record<string, string> = { flesvoedingcalculator: 'Flesvoeding', togwaarde: 'Togwaarde' }

const nl = (n: number) => n.toLocaleString('nl-NL')
const pct = (clicks: number, impressions: number) =>
  impressions > 0 ? `${((clicks / impressions) * 100).toLocaleString('nl-NL', { maximumFractionDigits: 1 })}%` : '-'
const pos = (p: number | string | null) =>
  p === null || p === undefined ? '-' : Number(p).toLocaleString('nl-NL', { maximumFractionDigits: 1 })
const dateTime = (d: string | null) =>
  d ? new Date(d).toLocaleString('nl-NL', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : '-'
const dateOnly = (d: string | null) =>
  d ? new Date(d).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short', year: 'numeric' }) : '-'

// Een run die na 30 minuten nog niet klaar is, is gestopt (bv. een deploy).
const isRunning = (r: RunRow | null) =>
  Boolean(r && !r.finished_at && Date.now() - new Date(r.started_at).getTime() < 30 * 60_000)

const COVERAGE_NL: Record<string, string> = {
  'Submitted and indexed': 'Ingediend en geïndexeerd',
  'Indexed, not submitted in sitemap': 'Geïndexeerd, niet in sitemap',
  'Crawled - currently not indexed': 'Gecrawld, nu niet geïndexeerd',
  'Discovered - currently not indexed': 'Gevonden, nu niet geïndexeerd',
  'Duplicate, Google chose different canonical than user': 'Duplicaat: Google koos een andere canonical',
  'Duplicate without user-selected canonical': 'Duplicaat zonder canonical',
  'Alternate page with proper canonical tag': 'Alternatieve pagina met juiste canonical',
  'Excluded by ‘noindex’ tag': 'Uitgesloten door noindex',
  'Page with redirect': 'Pagina met omleiding',
  'Not found (404)': 'Niet gevonden (404)',
  'URL is unknown to Google': 'Google kent deze URL nog niet'
}

function SiteTag({ website }: { website: string }) {
  return (
    <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full flex-shrink-0">
      {SITE_LABELS[website] ?? website}
    </span>
  )
}

function PageLink({ website, page }: { website: string; page: string }) {
  return (
    <a
      href={`https://${HOSTS[website] ?? ''}${page}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-700 hover:text-primary hover:underline break-all"
    >
      {page}
    </a>
  )
}

const th = 'text-left font-medium text-gray-500 py-2 px-2 whitespace-nowrap'
const thR = 'text-right font-medium text-gray-500 py-2 px-2 whitespace-nowrap'
const td = 'py-2 px-2 align-top'
const tdR = 'py-2 px-2 text-right tabular-nums whitespace-nowrap align-top'

function QueryTable({ rows, showSite, empty }: { rows: Row[]; showSite: boolean; empty: string }) {
  if (rows.length === 0) return <p className="text-sm text-gray-500">{empty}</p>
  return (
    <div className="overflow-x-auto -mx-2">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100">
            <th className={th}>Zoekvraag</th>
            <th className={th}>Pagina</th>
            <th className={thR}>Vertoningen</th>
            <th className={thR}>Kliks</th>
            <th className={thR}>CTR</th>
            <th className={thR}>Positie</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={`${r.website}-${r.query}`} className="border-b border-gray-50">
              <td className={`${td} text-gray-900`}>
                <span className="inline-flex items-center gap-1.5 flex-wrap">
                  {String(r.query)}
                  {showSite && <SiteTag website={String(r.website)} />}
                </span>
              </td>
              <td className={`${td} text-xs`}><PageLink website={String(r.website)} page={String(r.page)} /></td>
              <td className={tdR}>{nl(Number(r.impressions))}</td>
              <td className={tdR}>{nl(Number(r.clicks))}</td>
              <td className={tdR}>{pct(Number(r.clicks), Number(r.impressions))}</td>
              <td className={tdR}>{pos(r.position)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function SearchConsoleSection({ site, period, periodLabel }: { site: string; period: string; periodLabel: string }) {
  const [data, setData] = useState<GscData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [starting, setStarting] = useState(false)
  const [showAllPages, setShowAllPages] = useState(false)

  const load = useCallback(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') : null
    if (!token) return
    fetch(`/api/admin/search-console?days=${period}`, { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => r.json())
      .then((d) => {
        if (d && d.success) { setData(d); setError(null) } else setError(d?.error || 'Kon Search Console-cijfers niet laden')
      })
      .catch(() => setError('Kon Search Console-cijfers niet laden'))
  }, [period])

  useEffect(() => { load() }, [load])

  // Tijdens een import elke 15 seconden verversen tot hij klaar is.
  const running = isRunning(data?.lastRun ?? null)
  useEffect(() => {
    if (!running) return
    const t = setInterval(load, 15_000)
    return () => clearInterval(t)
  }, [running, load])

  const startImport = () => {
    const token = localStorage.getItem('admin_token')
    if (!token) return
    setStarting(true)
    fetch('/api/admin/search-console', { method: 'POST', headers: { Authorization: `Bearer ${token}` } })
      .then((r) => r.json())
      .then((d) => { if (!d.success) setError(d.error || 'Import kon niet starten') })
      .catch(() => setError('Import kon niet starten'))
      .finally(() => { setStarting(false); setTimeout(load, 2000) })
  }

  const filt = (rows: Row[]) => (site === 'all' ? rows : rows.filter((r) => r.website === site))
  const showSite = site === 'all'

  const totals = data ? filt(data.totals) : []
  const clicks = totals.reduce((s, t) => s + Number(t.clicks ?? 0), 0)
  const impressions = totals.reduce((s, t) => s + Number(t.impressions ?? 0), 0)
  const prevClicks = totals.reduce((s, t) => s + Number(t.prev_clicks ?? 0), 0)
  const trend = prevClicks > 0 ? Math.round(((clicks - prevClicks) / prevClicks) * 100) : null
  const posWeighted = impressions > 0
    ? totals.reduce((s, t) => s + Number(t.position ?? 0) * Number(t.impressions ?? 0), 0) / impressions
    : null
  const lastDate = totals.map((t) => String(t.last_date ?? '')).filter(Boolean).sort()[0] ?? null
  const firstDate = totals.map((t) => String(t.first_date ?? '')).filter(Boolean).sort()[0] ?? null

  const dailyAgg: Record<string, number> = {}
  if (data) filt(data.daily).forEach((r) => {
    const d = String(r.day)
    dailyAgg[d] = (dailyAgg[d] || 0) + Number(r.count)
  })
  const dailyEntries = Object.entries(dailyAgg).sort((a, b) => a[0].localeCompare(b[0]))
  const dailyMax = dailyEntries.reduce((m, [, c]) => Math.max(m, c), 0)
  const bucketWord = data?.bucket === 'month' ? 'maand' : data?.bucket === 'week' ? 'week' : 'dag'

  const pages = data ? filt(data.pages).sort((a, b) => Number(b.clicks) - Number(a.clicks)) : []
  const visiblePages = showAllPages ? pages : pages.slice(0, 15)
  const affTotal = pages.reduce((s, r) => s + Number(r.aff_clicks), 0)

  const index = data ? filt(data.index) : []
  const indexed = index.filter((r) => r.verdict === 'PASS')
  const notIndexed = index.filter((r) => r.verdict !== 'PASS')
  const lastChecked = index.reduce<string | null>((m, r) => (!m || String(r.checked_at) > m ? String(r.checked_at) : m), null)

  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Search className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-gray-900">Google zoeken</h2>
          </div>
          <p className="text-sm text-gray-500">
            Search Console, elke dag automatisch opgehaald. Google loopt 2 à 3 dagen achter
            {lastDate ? <>; cijfers t/m {dateOnly(lastDate)}</> : null}
            {firstDate ? <>, bewaard vanaf {dateOnly(firstDate)}</> : null}.
          </p>
        </div>
        {data?.configured && (
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400">
              {running
                ? 'Import loopt...'
                : data.lastRun
                  ? <>Laatste import {dateTime(data.lastRun.finished_at || data.lastRun.started_at)}{data.lastRun.ok === false ? ' (mislukt)' : ''}</>
                  : 'Nog niet opgehaald'}
            </span>
            <button
              onClick={startImport}
              disabled={starting || running}
              className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-700 hover:border-primary hover:text-primary disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${running ? 'animate-spin' : ''}`} />
              Nu ophalen
            </button>
          </div>
        )}
      </div>

      {error && <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-xl p-4 mb-6 text-sm">{error}</div>}
      {data?.lastRun?.ok === false && data.lastRun.error && (
        <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-xl p-4 mb-6 text-sm whitespace-pre-line">
          Laatste import ging niet goed: {data.lastRun.error}
        </div>
      )}

      {!data && !error && <p className="text-sm text-gray-500 mb-10">Laden...</p>}

      {data && !data.configured && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10 text-sm text-amber-900">
          <p className="font-semibold mb-2">Nog niet gekoppeld</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Google Cloud Console: maak een project, zet de &quot;Google Search Console API&quot; aan.</li>
            <li>Maak een serviceaccount en download een JSON-sleutel.</li>
            <li>Search Console: voeg het e-mailadres van het serviceaccount toe als gebruiker (Beperkt) op flesvoedingcalculator.nl én togwaarde.nl.</li>
            <li>CapRover, app flesvoedingcalculator: zet de JSON in GSC_SERVICE_ACCOUNT_JSON en herstart.</li>
          </ol>
        </div>
      )}

      {data?.configured && (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <KpiCard icon={<MousePointerClick className="w-5 h-5" />} value={nl(clicks)} title={`Google-kliks, ${periodLabel.toLowerCase()}`} sub={<TrendBadge pct={trend} />} />
            <KpiCard icon={<Eye className="w-5 h-5" />} value={nl(impressions)} title="Vertoningen" />
            <KpiCard icon={<Target className="w-5 h-5" />} value={pct(clicks, impressions)} title="CTR" />
            <KpiCard icon={<ListOrdered className="w-5 h-5" />} value={pos(posWeighted)} title="Gemiddelde positie" />
          </div>

          <div className="space-y-6 mb-10">
            <Card title={`Google-kliks per ${bucketWord}`} icon={<BarChart3 className="w-5 h-5" />}>
              <DailyChart entries={dailyEntries} max={dailyMax} />
            </Card>

            <Card title="Route per pagina: Google-klik naar affiliate-klik" icon={<Route className="w-5 h-5" />}>
              <p className="text-xs text-gray-500 mb-3">
                Affiliate-kliks per pagina tellen vanaf 21-11-2026; daarvoor werd de pagina niet opgeslagen
                ({nl(affTotal)} kliks met pagina in deze periode).
              </p>
              {pages.length === 0 ? (
                <p className="text-sm text-gray-500">Nog geen data.</p>
              ) : (
                <div className="overflow-x-auto -mx-2">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className={th}>Pagina</th>
                        <th className={thR}>Vertoningen</th>
                        <th className={thR}>Google-kliks</th>
                        <th className={thR}>CTR</th>
                        <th className={thR}>Positie</th>
                        <th className={thR}>Affiliate-kliks</th>
                        <th className={thR} title="Affiliate-kliks per 100 Google-kliks">per 100</th>
                      </tr>
                    </thead>
                    <tbody>
                      {visiblePages.map((r) => (
                        <tr key={`${r.website}-${r.page}`} className="border-b border-gray-50">
                          <td className={`${td} text-xs`}>
                            <span className="inline-flex items-center gap-1.5 flex-wrap">
                              <PageLink website={String(r.website)} page={String(r.page)} />
                              {showSite && <SiteTag website={String(r.website)} />}
                            </span>
                          </td>
                          <td className={tdR}>{nl(Number(r.impressions))}</td>
                          <td className={tdR}>{nl(Number(r.clicks))}</td>
                          <td className={tdR}>{pct(Number(r.clicks), Number(r.impressions))}</td>
                          <td className={tdR}>{pos(r.position)}</td>
                          <td className={tdR}>{nl(Number(r.aff_clicks))}</td>
                          <td className={tdR}>
                            {Number(r.clicks) > 0 ? Math.round((Number(r.aff_clicks) / Number(r.clicks)) * 100) : '-'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {pages.length > 15 && (
                <button onClick={() => setShowAllPages((v) => !v)} className="mt-3 text-sm text-primary hover:underline">
                  {showAllPages ? 'Minder tonen' : `Alle ${pages.length} pagina's tonen`}
                </button>
              )}
            </Card>

            <Card title="Kansen: zoekvragen op positie 4 tot 15" icon={<Target className="w-5 h-5" />}>
              <p className="text-xs text-gray-500 mb-3">
                Net onder of op de eerste pagina. Een betere titel of een alinea die de vraag letterlijk beantwoordt
                levert hier het meest op. Gesorteerd op vertoningen, minimaal 10.
              </p>
              <QueryTable rows={filt(data.opportunities)} showSite={showSite} empty="Geen zoekvragen in deze band met genoeg vertoningen." />
            </Card>

            <Card title="Veel vertoningen, geen goede pagina (positie > 15)" icon={<FileSearch className="w-5 h-5" />}>
              <p className="text-xs text-gray-500 mb-3">
                Google koppelt de zoekvraag aan de site, maar geen pagina beantwoordt hem goed. Kandidaten voor een eigen artikel.
              </p>
              <QueryTable rows={filt(data.weak)} showSite={showSite} empty="Geen zoekvragen in deze band met genoeg vertoningen." />
            </Card>

            <Card title="Indexering (alle URL's uit de sitemap)" icon={<ShieldCheck className="w-5 h-5" />}>
              {index.length === 0 ? (
                <p className="text-sm text-gray-500">Nog niet gecontroleerd. Dit gebeurt bij de eerstvolgende import.</p>
              ) : (
                <>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm mb-4">
                    <span className="text-gray-700">Geïndexeerd: <strong>{nl(indexed.length)}</strong></span>
                    <span className="text-gray-700">Niet geïndexeerd: <strong>{nl(notIndexed.length)}</strong></span>
                    <span className="text-gray-400">Gecontroleerd {dateTime(lastChecked)}</span>
                  </div>
                  {notIndexed.length === 0 ? (
                    <p className="text-sm text-gray-500">Alle pagina&apos;s uit de sitemap staan in Google.</p>
                  ) : (
                    <div className="overflow-x-auto -mx-2">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-100">
                            <th className={th}>URL</th>
                            <th className={th}>Status bij Google</th>
                            <th className={th}>Laatst gecrawld</th>
                          </tr>
                        </thead>
                        <tbody>
                          {notIndexed.map((r) => {
                            const url = String(r.url)
                            const canonical = r.google_canonical ? String(r.google_canonical) : null
                            const lost = r.prev_verdict === 'PASS' && r.verdict_changed_at
                            return (
                              <tr key={`${r.website}-${url}`} className="border-b border-gray-50">
                                <td className={`${td} text-xs`}>
                                  <span className="inline-flex items-center gap-1.5 flex-wrap">
                                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary hover:underline break-all">
                                      {url.replace(/^https?:\/\/[^/]+/, '')}
                                    </a>
                                    {showSite && <SiteTag website={String(r.website)} />}
                                    {lost && (
                                      <span className="text-[10px] bg-amber-50 text-amber-800 px-1.5 py-0.5 rounded-full">
                                        uit index sinds {dateOnly(String(r.verdict_changed_at))}
                                      </span>
                                    )}
                                  </span>
                                </td>
                                <td className={`${td} text-xs text-gray-600`}>
                                  {COVERAGE_NL[String(r.coverage_state)] ?? (r.coverage_state ? String(r.coverage_state) : '-')}
                                  {canonical && canonical !== url && (
                                    <div className="text-gray-400 break-all">Google-canonical: {canonical}</div>
                                  )}
                                </td>
                                <td className={`${td} text-xs text-gray-500 whitespace-nowrap`}>{dateOnly(r.last_crawl ? String(r.last_crawl) : null)}</td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                  <p className="text-xs text-gray-400 mt-3">
                    Valt een pagina die eerder geïndexeerd was eruit, dan gaat er een mail naar info@vidorra.nl.
                  </p>
                </>
              )}
            </Card>
          </div>
        </>
      )}
    </>
  )
}
