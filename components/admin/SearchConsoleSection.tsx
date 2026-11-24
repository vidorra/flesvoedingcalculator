'use client'

import { useEffect, useState } from 'react'
import { BarChart3, Search, Target, RefreshCw, Eye, MousePointerClick, ListOrdered, Table2 } from 'lucide-react'
import { Card, DailyChart, KpiCard, TrendBadge, SegmentSwitch, ShowAllButton, Warning, LIMIT } from './stats-ui'
import { useAdminJson } from './useAdminJson'
import {
  type Row, type GscData, nl, dateOnly, dateTime, isRunning, bucketWord, bySite, series, gscSummary
} from './stats-summary'

const HOSTS: Record<string, string> = {
  flesvoedingcalculator: 'flesvoedingcalculator.nl',
  togwaarde: 'togwaarde.nl'
}
const SITE_LABELS: Record<string, string> = { flesvoedingcalculator: 'Flesvoeding', togwaarde: 'Togwaarde' }

const pct = (clicks: number, impressions: number) =>
  impressions > 0 ? `${((clicks / impressions) * 100).toLocaleString('nl-NL', { maximumFractionDigits: 1 })}%` : '-'
const pos = (p: number | string | null) =>
  p === null || p === undefined ? '-' : Number(p).toLocaleString('nl-NL', { maximumFractionDigits: 1 })
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

type Segment = 'pages' | 'kansen' | 'weak' | 'index'

export default function SearchConsoleSection({ site, period, periodLabel }: { site: string; period: string; periodLabel: string }) {
  const { data, error: loadError, reload } = useAdminJson<GscData>(
    `/api/admin/search-console?days=${period}`, 'Kon Search Console-cijfers niet laden')
  const [actionError, setActionError] = useState<string | null>(null)
  const [starting, setStarting] = useState(false)
  const [segment, setSegment] = useState<Segment>('pages')
  const [showAll, setShowAll] = useState(false)
  const error = actionError || loadError

  // Tijdens een import elke 15 seconden verversen tot hij klaar is.
  const running = isRunning(data?.lastRun ?? null)
  useEffect(() => {
    if (!running) return
    const t = setInterval(reload, 15_000)
    return () => clearInterval(t)
  }, [running, reload])

  const startImport = () => {
    const token = localStorage.getItem('admin_token')
    if (!token) return
    setStarting(true)
    setActionError(null)
    fetch('/api/admin/search-console', { method: 'POST', headers: { Authorization: `Bearer ${token}` } })
      .then((r) => r.json())
      .then((d) => { if (!d.success) setActionError(d.error || 'Import kon niet starten') })
      .catch(() => setActionError('Import kon niet starten'))
      .finally(() => { setStarting(false); setTimeout(reload, 2000) })
  }

  const showSite = site === 'all'
  const sum = gscSummary(data, site)
  // Ook zonder werkende sleutel de opgeslagen cijfers tonen
  const hasData = Boolean(data && (data.configured || data.totals.length > 0 || data.pages.length > 0))
  const chart = series(bySite(data?.daily, site))

  const pages = bySite(data?.pages, site).sort((a, b) => Number(b.clicks) - Number(a.clicks))
  const affTotal = pages.reduce((s, r) => s + Number(r.aff_clicks), 0)
  const opportunities = bySite(data?.opportunities, site)
  const weak = bySite(data?.weak, site)
  const index = bySite(data?.index, site)
  const indexed = index.filter((r) => r.verdict === 'PASS')
  const notIndexed = index.filter((r) => r.verdict !== 'PASS')
  const lastChecked = index.reduce<string | null>((m, r) => (!m || String(r.checked_at) > m ? String(r.checked_at) : m), null)

  const pick = (s: Segment) => { setSegment(s); setShowAll(false) }
  const cut = <T,>(rows: T[]) => (showAll ? rows : rows.slice(0, LIMIT))
  const segmentRows = segment === 'pages' ? pages.length : segment === 'kansen' ? opportunities.length
    : segment === 'weak' ? weak.length : notIndexed.length

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
            {sum.lastDate ? <>; cijfers t/m {dateOnly(sum.lastDate)}</> : null}
            {sum.firstDate ? <>, bewaard vanaf {dateOnly(sum.firstDate)}</> : null}.
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

      {error && <Warning>{error}</Warning>}
      {data?.lastRun?.ok === false && data.lastRun.error && (
        <Warning><p className="whitespace-pre-line">Let op: de laatste import ging niet goed: {data.lastRun.error}</p></Warning>
      )}

      {!data && !error && <p className="text-sm text-gray-500">Laden...</p>}

      {data && !data.configured && hasData && (
        <Warning>
          <p className="font-semibold mb-1">Let op: de koppeling met Google werkt niet meer</p>
          <p className="mb-1">{data.configProblem || 'De sleutel in GSC_SERVICE_ACCOUNT_JSON is niet leesbaar.'}</p>
          <p>
            De cijfers hieronder komen uit eerdere imports{sum.lastDate ? <> en lopen t/m {dateOnly(sum.lastDate)}</> : null}.
            Zet de sleutel opnieuw in CapRover (app flesvoedingcalculator, GSC_SERVICE_ACCOUNT_JSON) en herstart.
          </p>
        </Warning>
      )}

      {data && !data.configured && !hasData && (
        <Warning>
          <p className="font-semibold mb-2">Let op: nog niet gekoppeld</p>
          {data.configProblem && <p className="mb-2">{data.configProblem}</p>}
          <ol className="list-decimal pl-5 space-y-1">
            <li>Google Cloud Console: maak een project, zet de &quot;Google Search Console API&quot; aan.</li>
            <li>Maak een serviceaccount en download een JSON-sleutel.</li>
            <li>Search Console: voeg het e-mailadres van het serviceaccount toe als gebruiker (Beperkt) op flesvoedingcalculator.nl én togwaarde.nl.</li>
            <li>CapRover, app flesvoedingcalculator: zet de JSON in GSC_SERVICE_ACCOUNT_JSON en herstart.</li>
          </ol>
        </Warning>
      )}

      {hasData && (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <KpiCard icon={<MousePointerClick className="w-5 h-5" />} value={nl(sum.clicks)} title={`Google-kliks, ${periodLabel.toLowerCase()}`} sub={<TrendBadge pct={sum.trend} />} />
            <KpiCard icon={<Eye className="w-5 h-5" />} value={nl(sum.impressions)} title="Vertoningen" />
            <KpiCard icon={<Target className="w-5 h-5" />} value={pct(sum.clicks, sum.impressions)} title="CTR" />
            <KpiCard icon={<ListOrdered className="w-5 h-5" />} value={pos(sum.position)} title="Gemiddelde positie" />
          </div>

          <div className="space-y-6">
            <Card title={`Google-kliks per ${bucketWord(data.bucket)}`} icon={<BarChart3 className="w-5 h-5" />}>
              <DailyChart entries={chart.entries} max={chart.max} />
            </Card>

            <Card title="Pagina's en zoekvragen" icon={<Table2 className="w-5 h-5" />}>
              <SegmentSwitch<Segment>
                value={segment}
                onChange={pick}
                options={[
                  { value: 'pages', label: "Pagina's", count: pages.length },
                  { value: 'kansen', label: 'Kansen', count: opportunities.length },
                  { value: 'weak', label: 'Geen goede pagina', count: weak.length },
                  { value: 'index', label: 'Indexering', count: notIndexed.length }
                ]}
              />

              {segment === 'pages' && (
                <>
                  <p className="text-xs text-gray-500 mb-3">
                    Route per pagina: Google-klik naar affiliate-klik. Affiliate-kliks per pagina tellen vanaf 21-11-2026
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
                          {cut(pages).map((r) => (
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
                </>
              )}

              {segment === 'kansen' && (
                <>
                  <p className="text-xs text-gray-500 mb-3">
                    Zoekvragen op positie 4 tot 15: net onder of op de eerste pagina. Een betere titel of een alinea die de
                    vraag letterlijk beantwoordt levert hier het meest op. Gesorteerd op vertoningen, minimaal 10.
                  </p>
                  <QueryTable rows={cut(opportunities)} showSite={showSite} empty="Geen zoekvragen in deze band met genoeg vertoningen." />
                </>
              )}

              {segment === 'weak' && (
                <>
                  <p className="text-xs text-gray-500 mb-3">
                    Veel vertoningen op positie 15 of lager: Google koppelt de zoekvraag aan de site, maar geen pagina
                    beantwoordt hem goed. Kandidaten voor een eigen artikel.
                  </p>
                  <QueryTable rows={cut(weak)} showSite={showSite} empty="Geen zoekvragen in deze band met genoeg vertoningen." />
                </>
              )}

              {segment === 'index' && (
                index.length === 0 ? (
                  <p className="text-sm text-gray-500">Nog niet gecontroleerd. Dit gebeurt bij de eerstvolgende import.</p>
                ) : (
                  <>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm mb-4">
                      <span className="text-gray-700">Geïndexeerd: <strong>{nl(indexed.length)}</strong></span>
                      <span className="text-gray-700">Niet geïndexeerd: <strong>{nl(notIndexed.length)}</strong></span>
                      <span className="text-gray-400">Alle URL&apos;s uit de sitemap, gecontroleerd {dateTime(lastChecked)}</span>
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
                            {cut(notIndexed).map((r) => {
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
                )
              )}

              <ShowAllButton total={segmentRows} open={showAll} onToggle={() => setShowAll((v) => !v)} />
            </Card>
          </div>
        </>
      )}
    </>
  )
}
