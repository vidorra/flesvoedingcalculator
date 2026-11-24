'use client'

// /admin/stats: vaste filterbalk (tab, site, periode; alles in de URL) en
// subtabs. Elke tab haalt pas op als hij opengaat; de antwoorden staan in een
// gedeelde cache, dus Overzicht, Google en Verkopen delen hun gegevens.

import { useEffect, useState } from 'react'
import {
  BarChart3, Calculator, MousePointerClick, CalendarDays, Baby, Thermometer, Trophy, Activity, Bed, Users,
  Search, Euro, Package, Filter, Clock
} from 'lucide-react'
import { Card, DailyChart, KpiCard, TrendBadge, PlatformSplit, Warning } from './stats-ui'
import SearchConsoleSection from './SearchConsoleSection'
import AffiliateSalesSection from './AffiliateSalesSection'
import { useAdminJson } from './useAdminJson'
import {
  type CalcStats, type VisitorStats, type GscData, type SalesData, PERIOD_OPTIONS, nl, eur, dateOnly,
  bucketWord as bucketName, bySite, series, trendPct, calcSummary, visitorSummary, gscSummary, salesSummary
} from './stats-summary'

type Tab = 'overzicht' | 'google' | 'verkopen' | 'calculator' | 'meetroutine'
const TABS: { value: Tab; label: string }[] = [
  { value: 'overzicht', label: 'Overzicht' },
  { value: 'google', label: 'Google' },
  { value: 'verkopen', label: 'Verkopen & kliks' },
  { value: 'calculator', label: 'Calculator' },
  { value: 'meetroutine', label: 'Meetroutine' }
]

// Vaste lijst: beide apps altijd tonen, ook als een site nog geen events heeft
const KNOWN_SITES = ['flesvoedingcalculator', 'togwaarde'] as const

const SITE_LABELS: Record<string, string> = {
  flesvoedingcalculator: 'Flesvoeding',
  togwaarde: 'Togwaarde'
}

const AGE_LABELS: Record<string, string> = {
  '0-1': '0-1 maand',
  '1': '1-3 maanden',
  '3': '3-6 maanden',
  '6': '6+ maanden',
  premature: 'Prematuur',
  '0-3': '0-3 maanden',
  '3-6': '3-6 maanden',
  '6-12': '6-12 maanden',
  '12+': '12+ maanden',
  onbekend: 'Onbekend'
}

const SLEEP_MODE_LABELS: Record<string, string> = {
  slaapzak: 'Slaapzak',
  dekens: 'Dekens',
  geen: 'Geen (alleen kleding)',
  onbekend: 'Onbekend'
}

function label(map: Record<string, string>, key: string) {
  return map[key] ?? key
}

function Bar({ label: l, count, total }: { label: string; count: number; total: number }) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center text-sm mb-1.5">
        <span className="text-gray-700">{l}</span>
        <span className="text-gray-500 tabular-nums">
          {count.toLocaleString('nl-NL')}
          <span className="ml-1.5 text-xs text-gray-400">({pct}%)</span>
        </span>
      </div>
      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70 transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}


function FunnelStep({ label: l, value, max, sub }: { label: string; value: number; max: number; sub?: string }) {
  const w = max > 0 ? Math.max(1.5, Math.min(100, (value / max) * 100)) : 0
  return (
    <div>
      <div className="flex justify-between items-baseline text-sm mb-1.5">
        <span className="text-gray-700">{l}{sub ? <span className="text-xs text-gray-400 ml-1.5">{sub}</span> : null}</span>
        <span className="font-semibold text-gray-900 tabular-nums">{nl(value)}</span>
      </div>
      <div className="h-5 rounded-md bg-gray-100 overflow-hidden">
        <div className="h-full rounded-md bg-gradient-to-r from-primary to-primary/70" style={{ width: `${w}%` }} />
      </div>
    </div>
  )
}

function StepRate({ from, to }: { from: number; to: number }) {
  const r = from > 0 ? (to / from) * 100 : null
  return (
    <div className="text-xs text-gray-400 pl-2 py-1">
      {r === null ? '-' : `${r.toLocaleString('nl-NL', { maximumFractionDigits: r < 10 ? 1 : 0 })}% gaat door`}
    </div>
  )
}

const pill = (active: boolean) =>
  `px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
    active ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'
  }`

export default function StatsPanel() {
  const [tab, setTab] = useState<Tab>('overzicht')
  const [site, setSite] = useState<string>('all')
  const [period, setPeriod] = useState('30')
  const [ready, setReady] = useState(false)

  // Filters uit de URL lezen (pas na het mounten, anders klopt de server-HTML niet)
  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    const t = q.get('stab') as Tab | null
    if (t && TABS.some((x) => x.value === t)) setTab(t)
    const s = q.get('site')
    if (s && (s === 'all' || (KNOWN_SITES as readonly string[]).includes(s))) setSite(s)
    const p = q.get('periode')
    if (p && PERIOD_OPTIONS.some((o) => o.value === p)) setPeriod(p)
    setReady(true)
  }, [])

  // ...en terugschrijven, zonder andere parameters (zoals ?tab=stats) te verliezen
  useEffect(() => {
    if (!ready) return
    const url = new URL(window.location.href)
    const set = (k: string, v: string, def: string) => (v === def ? url.searchParams.delete(k) : url.searchParams.set(k, v))
    set('stab', tab, 'overzicht')
    set('site', site, 'all')
    set('periode', period, '30')
    window.history.replaceState(window.history.state, '', url.toString())
  }, [ready, tab, site, period])

  const periodLabel = PERIOD_OPTIONS.find((o) => o.value === period)?.label ?? 'periode'
  const on = (...tabs: Tab[]) => ready && tabs.includes(tab)

  const calc = useAdminJson<CalcStats>(
    on('overzicht', 'verkopen', 'calculator') ? `/api/admin/calculator-stats?days=${period}` : null,
    'Kon calculator-statistieken niet laden')
  const visitors = useAdminJson<VisitorStats>(
    on('overzicht') ? `/api/admin/visitor-stats?days=${period}` : null, 'Kon bezoekers niet laden')
  const gsc = useAdminJson<GscData>(
    on('overzicht') ? `/api/admin/search-console?days=${period}` : null, 'Kon Search Console-cijfers niet laden')
  const sales = useAdminJson<SalesData>(
    on('overzicht') ? `/api/admin/affiliate-sales?days=${period}` : null, 'Kon verkoopcijfers niet laden')

  const stats = calc.data
  const c = calcSummary(stats, site)
  const v = visitorSummary(visitors.data, site)
  const g = gscSummary(gsc.data, site)
  const sl = salesSummary(sales.data, site)
  const bucketWord = bucketName(stats?.bucket)
  const loading = calc.loading || visitors.loading || gsc.loading || sales.loading

  // Amazon weet niet van welke site een bestelling kwam: alleen bij "Beide apps"
  const withAmazon = site === 'all'
  const orders = sl.items + (withAmazon ? sl.amzOrders : 0)
  const commission = sl.commission + (withAmazon ? sl.amzCommission : 0)
  const bolFailed = sales.data?.lastRun?.ok === false
  const showTrend = period !== 'all'

  // Calculator-aggregaties
  const filt = <T extends Record<string, unknown>>(rows: T[]) => (site === 'all' ? rows : rows.filter((r) => r.website === site))
  const ageAgg: Record<string, number> = {}
  if (stats) filt(stats.byAge).forEach((r) => {
    const k = String(r.age_category)
    ageAgg[k] = (ageAgg[k] || 0) + Number(r.count)
  })
  const ageEntries = Object.entries(ageAgg).sort((a, b) => b[1] - a[1])
  const ageTotal = ageEntries.reduce((s, [, n]) => s + n, 0)
  const showFlesBreakdown = site === 'all' || site === 'flesvoedingcalculator'
  const showTogBreakdown = site === 'all' || site === 'togwaarde'
  const weightTotal = stats ? stats.byWeight.reduce((s, r) => s + Number(r.count), 0) : 0
  const combiTotal = stats ? stats.combi.reduce((s, r) => s + Number(r.count), 0) : 0
  const combiYes = stats ? Number(stats.combi.find((r) => r.is_combi === 'true')?.count ?? 0) : 0
  const combiPct = combiTotal > 0 ? Math.round((combiYes / combiTotal) * 100) : 0
  const roomTempTotal = stats ? (stats.byRoomTemp ?? []).reduce((s, r) => s + Number(r.count), 0) : 0
  const sleepModeRows = stats ? (stats.bySleepMode ?? []) : []
  const sleepModeTotal = sleepModeRows.reduce((s, r) => s + Number(r.count), 0)
  const adviesTogRows = stats ? (stats.byAdviesTog ?? []) : []
  const adviesTogTotal = adviesTogRows.reduce((s, r) => s + Number(r.count), 0)
  const calcChart = series(bySite(stats?.daily, site))
  const dailyEntries = calcChart.entries
  const dailyMax = calcChart.max

  // Affiliate-kliks
  const clickSnippets = bySite(stats?.clicksBySnippet, site)
  const clickTopMax = clickSnippets.reduce((m, r) => Math.max(m, Number(r.count)), 0)
  const clickChart = series(bySite(stats?.clicksDaily, site))

  const funnelMax = Math.max(v.period, c.calcPeriod, c.clickPeriod, orders)

  return (
    <div>
      {/* Vaste filterbalk: blijft staan tijdens het scrollen */}
      <div className="sticky top-2 z-20 px-4 py-3 mb-6 bg-white/95 backdrop-blur rounded-2xl border border-gray-200 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <nav className="flex gap-1 bg-gray-100 rounded-lg p-1 overflow-x-auto max-w-full" aria-label="Statistieken">
            {TABS.map((t) => (
              <button key={t.value} onClick={() => setTab(t.value)} className={pill(tab === t.value)}>{t.label}</button>
            ))}
          </nav>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
              <button onClick={() => setSite('all')} className={pill(site === 'all')}>Beide apps</button>
              {KNOWN_SITES.map((s) => (
                <button key={s} onClick={() => setSite(s)} className={pill(site === s)}>{label(SITE_LABELS, s)}</button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="stats-period" className="text-sm text-gray-500 sr-only sm:not-sr-only">Periode</label>
              <select
                id="stats-period"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white text-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              >
                {PERIOD_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              {loading && <span className="text-xs text-gray-400">laden...</span>}
            </div>
          </div>
        </div>
      </div>

      {!ready && <p className="text-sm text-gray-500">Laden...</p>}

      {/* ===== Overzicht ===== */}
      {ready && tab === 'overzicht' && (
        <>
          {[calc.error, visitors.error].filter(Boolean).map((e) => <Warning key={String(e)}>{e}</Warning>)}

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 mb-4">
            <span className="inline-flex items-center gap-1 text-gray-600 font-medium"><Clock className="w-3.5 h-3.5" /> Cijfers t/m</span>
            <span>Bezoeken en calculator: nu</span>
            <span>
              Google: {g.lastDate ? dateOnly(g.lastDate) : gsc.data && !gsc.data.configured ? 'niet gekoppeld' : '-'}
              <span className="text-gray-400"> (loopt 2 à 3 dagen achter)</span>
            </span>
            <span>
              bol: {bolFailed
                ? <span className="text-amber-700">laatste import mislukt</span>
                : sl.lastDate ? <>laatste bestelling {dateOnly(sl.lastDate)}</> : '-'}
            </span>
            <span>Amazon: {sl.amzLast ? <>{dateOnly(sl.amzLast)} <span className="text-gray-400">(laatste upload)</span></> : 'nog geen upload'}</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <KpiCard
              icon={<Users className="w-5 h-5" />}
              value={visitors.data ? nl(v.period) : '-'}
              title="Bezoeken"
              sub={showTrend ? <TrendBadge pct={v.trend} /> : undefined}
            />
            <KpiCard
              icon={<Search className="w-5 h-5" />}
              value={gsc.data && (gsc.data.configured || gsc.data.totals.length > 0) ? nl(g.clicks) : '-'}
              title="Google-kliks"
              sub={gsc.data && !gsc.data.configured
                ? <span className="text-xs text-amber-700">Koppeling met Google werkt niet, zie tab Google</span>
                : showTrend ? <TrendBadge pct={g.trend} /> : undefined}
            />
            <KpiCard
              icon={<Calculator className="w-5 h-5" />}
              value={stats ? nl(c.calcPeriod) : '-'}
              title="Berekeningen"
              sub={showTrend ? <TrendBadge pct={c.calcTrend} /> : undefined}
            />
            <KpiCard
              icon={<MousePointerClick className="w-5 h-5" />}
              value={stats ? nl(c.clickPeriod) : '-'}
              title="Affiliate-kliks"
              sub={showTrend ? <TrendBadge pct={c.clickTrend} /> : undefined}
            />
            <KpiCard
              icon={<Package className="w-5 h-5" />}
              value={sales.data ? nl(orders) : '-'}
              title="Bestellingen"
              sub={
                <span className="flex flex-col gap-1">
                  {showTrend && sl.hasPrev && <TrendBadge pct={trendPct(sl.items, sl.prevItems)} label="bol vs vorige periode" />}
                  <span className="text-xs text-gray-500">
                    bol {nl(sl.items)}{withAmazon ? ` · Amazon ${nl(sl.amzOrders)}` : ''}
                    {bolFailed && <span className="text-amber-700"> · bol-import mislukt</span>}
                  </span>
                </span>
              }
            />
            <KpiCard
              icon={<Euro className="w-5 h-5" />}
              value={sales.data ? eur(commission) : '-'}
              title="Commissie"
              sub={
                <span className="flex flex-col gap-1">
                  {showTrend && sl.hasPrev && <TrendBadge pct={trendPct(sl.commission, sl.prevCommission)} label="bol vs vorige periode" />}
                  <span className="text-xs text-gray-500">
                    bol {eur(sl.commission)}{withAmazon ? ` · Amazon ${eur(sl.amzCommission)}` : ''}
                  </span>
                </span>
              }
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title={`Funnel, ${periodLabel.toLowerCase()}`} icon={<Filter className="w-5 h-5" />}>
              <FunnelStep label="Bezoeken" value={v.period} max={funnelMax} />
              <StepRate from={v.period} to={c.calcPeriod} />
              <FunnelStep label="Berekeningen" value={c.calcPeriod} max={funnelMax} />
              <StepRate from={c.calcPeriod} to={c.clickPeriod} />
              <FunnelStep label="Affiliate-kliks" value={c.clickPeriod} max={funnelMax} />
              <StepRate from={c.clickPeriod} to={orders} />
              <FunnelStep label="Bestellingen" value={orders} max={funnelMax} sub={withAmazon ? 'bol + Amazon' : 'alleen bol'} />
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm text-gray-600">Commissie</span>
                <span className="text-lg font-bold text-gray-900">{eur(commission)}</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Bestellingen komen niet altijd uit dezelfde periode als de klik (bol telt op besteldatum).
                {withAmazon ? ' Amazon telt mee t/m de laatste upload.' : ' Amazon weet niet via welke site een bestelling kwam en telt hier niet mee.'}
              </p>
            </Card>

            <div className="space-y-6">
              <Card title={`Bezoeken per ${bucketName(v.bucket)}`} icon={<BarChart3 className="w-5 h-5" />}>
                {!visitors.data ? <p className="text-sm text-gray-500">Laden...</p> : <DailyChart entries={v.entries} max={v.max} />}
                <p className="text-xs text-gray-400 mt-3">Anoniem, 1 per sessie, zonder cookies. Totaal sinds de start: {nl(v.all)}.</p>
              </Card>
              <Card title="Affiliate-kliks per platform" icon={<MousePointerClick className="w-5 h-5" />}>
                <PlatformSplit bol={c.clicksBol} amazon={c.clicksAmazon} />
              </Card>
            </div>
          </div>
        </>
      )}

      {/* ===== Google ===== */}
      {ready && tab === 'google' && <SearchConsoleSection site={site} period={period} periodLabel={periodLabel} />}

      {/* ===== Verkopen & kliks ===== */}
      {ready && tab === 'verkopen' && (
        <>
          <AffiliateSalesSection site={site} period={period} periodLabel={periodLabel} />

          <div className="flex items-center gap-2 mb-1 mt-10">
            <MousePointerClick className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-gray-900">Affiliate-kliks</h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">Kliks op bol.com/Amazon-productkaarten, door ons geteld (anoniem)</p>
          {calc.error && <Warning>{calc.error}</Warning>}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <KpiCard icon={<CalendarDays className="w-5 h-5" />} value={nl(c.clickPeriod)} title={periodLabel} sub={showTrend ? <TrendBadge pct={c.clickTrend} /> : undefined} />
            <KpiCard icon={<MousePointerClick className="w-5 h-5" />} value={nl(c.clickAll)} title="Totaal kliks (alles)" />
            <KpiCard
              icon={<Activity className="w-5 h-5" />}
              value={c.calcPeriod > 0 ? `${((c.clickPeriod / c.calcPeriod) * 100).toFixed(1)}%` : '-'}
              title="Kliks per berekening"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <Card title={`Kliks per ${bucketWord}`} icon={<BarChart3 className="w-5 h-5" />}>
                <DailyChart entries={clickChart.entries} max={clickChart.max} />
              </Card>
              <Card title="Kliks per platform" icon={<MousePointerClick className="w-5 h-5" />}>
                <PlatformSplit bol={c.clicksBol} amazon={c.clicksAmazon} />
              </Card>
            </div>

            <Card title="Top producten" icon={<Trophy className="w-5 h-5" />}>
              {clickSnippets.length === 0 && <p className="text-sm text-gray-500">Nog geen kliks geregistreerd.</p>}
              <div className="space-y-3">
                {clickSnippets.slice(0, 10).map((r, i) => (
                  <div key={`${r.website}-${r.snippet_id}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0 ${
                        i === 0 ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                      }`}>
                        {i + 1}
                      </span>
                      <span className="text-sm text-gray-700 truncate flex-1" title={String(r.name)}>
                        {String(r.name)}
                      </span>
                      {site === 'all' && (
                        <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full flex-shrink-0">
                          {label(SITE_LABELS, String(r.website))}
                        </span>
                      )}
                      <span className="text-sm font-semibold text-gray-900 tabular-nums flex-shrink-0">
                        {nl(Number(r.count))}
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden ml-8">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
                        style={{ width: `${clickTopMax > 0 ? Math.round((Number(r.count) / clickTopMax) * 100) : 0}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </>
      )}

      {/* ===== Calculator ===== */}
      {ready && tab === 'calculator' && (
        <>
          <div className="flex items-center gap-2 mb-4">
            <Calculator className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-gray-900">Calculator-gebruik</h2>
          </div>
          {calc.error && <Warning>{calc.error}</Warning>}
          {!stats && !calc.error && <p className="text-sm text-gray-500">Laden...</p>}
          {stats && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <KpiCard icon={<Activity className="w-5 h-5" />} value={nl(c.calcAll)} title="Totaal berekeningen (alles)" />
                <KpiCard icon={<CalendarDays className="w-5 h-5" />} value={nl(c.calcPeriod)} title={periodLabel} sub={showTrend ? <TrendBadge pct={c.calcTrend} /> : undefined} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card title={`Berekeningen per ${bucketWord}`} icon={<BarChart3 className="w-5 h-5" />}>
                  <DailyChart entries={dailyEntries} max={dailyMax} />
                </Card>

                <Card title="Leeftijd van de baby" icon={<Baby className="w-5 h-5" />}>
                  {ageEntries.length === 0 && <p className="text-sm text-gray-500">Nog geen data.</p>}
                  {ageEntries.map(([k, c]) => (
                    <Bar key={k} label={label(AGE_LABELS, k)} count={c} total={ageTotal} />
                  ))}
                </Card>

                {showFlesBreakdown && weightTotal > 0 && (
                  <Card title="Gewicht van de baby (Flesvoeding)" icon={<Baby className="w-5 h-5" />}>
                    {stats.byWeight.map((r) => (
                      <Bar key={String(r.weight_bucket)} label={String(r.weight_bucket)} count={Number(r.count)} total={weightTotal} />
                    ))}
                  </Card>
                )}

                {showFlesBreakdown && combiTotal > 0 && (
                  <Card title="Combivoeding (Flesvoeding)" icon={<Activity className="w-5 h-5" />}>
                    <div className="h-3 rounded-full overflow-hidden flex bg-gray-100 mb-3">
                      <div className="bg-primary h-full" style={{ width: `${combiPct}%` }} />
                      <div className="bg-gray-300 h-full" style={{ width: `${100 - combiPct}%` }} />
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
                      <span className="flex items-center gap-1.5 text-gray-700">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block" />
                        Combivoeding: <strong>{combiYes.toLocaleString('nl-NL')}</strong> ({combiPct}%)
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-700">
                        <span className="w-2.5 h-2.5 rounded-full bg-gray-300 inline-block" />
                        Alleen fles: <strong>{(combiTotal - combiYes).toLocaleString('nl-NL')}</strong> ({100 - combiPct}%)
                      </span>
                    </div>
                  </Card>
                )}

                {showTogBreakdown && roomTempTotal > 0 && (
                  <Card title="Kamertemperatuur (Togwaarde)" icon={<Thermometer className="w-5 h-5" />}>
                    {stats.byRoomTemp.map((r) => (
                      <Bar key={String(r.room_temp)} label={String(r.room_temp)} count={Number(r.count)} total={roomTempTotal} />
                    ))}
                  </Card>
                )}

                {showTogBreakdown && adviesTogTotal > 0 && (
                  <Card title="Geadviseerde TOG op de homepage (Togwaarde)" icon={<Thermometer className="w-5 h-5" />}>
                    {adviesTogRows.map((r) => (
                      <Bar
                        key={String(r.advies_tog)}
                        label={String(r.advies_tog) === 'geen' ? 'Geen slaapzak (27°C+)' : `${r.advies_tog} TOG`}
                        count={Number(r.count)}
                        total={adviesTogTotal}
                      />
                    ))}
                  </Card>
                )}

                {showTogBreakdown && sleepModeTotal > 0 && (
                  <Card title="Slaapmodus op /calculator (Togwaarde)" icon={<Bed className="w-5 h-5" />}>
                    {sleepModeRows.map((r) => (
                      <Bar key={String(r.sleep_mode)} label={label(SLEEP_MODE_LABELS, String(r.sleep_mode))} count={Number(r.count)} total={sleepModeTotal} />
                    ))}
                  </Card>
                )}
              </div>
            </>
          )}
        </>
      )}

      {/* ===== Meetroutine ===== */}
      {ready && tab === 'meetroutine' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card title="Meetbronnen & maandroutine" icon={<CalendarDays className="w-5 h-5" />}>
            <div className="space-y-2 text-sm mb-4">
              <a href="https://stats.server.devjens.nl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                Umami dashboard (100% cookieless meting) ↗
              </a>
              <a href="https://search.google.com/search-console?resource_id=sc-domain%3Aflesvoedingcalculator.nl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                Search Console: flesvoedingcalculator.nl ↗
              </a>
              <a href="https://search.google.com/search-console?resource_id=sc-domain%3Atogwaarde.nl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                Search Console: togwaarde.nl ↗
              </a>
            </div>
            <div className="text-sm text-gray-700 mb-2 font-medium">Maandroutine (30 min, zie togwaarde/google-plan.md §8):</div>
            <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-600 mb-3">
              <li>GSC: thema-regexes draaien, impressies/CTR noteren</li>
              <li>Impressies + lage CTR: titel herschrijven; impressies zonder pagina: artikel schrijven</li>
              <li>Hier: kliks per product checken, toppers meer producten geven</li>
              <li>Umami: funnel-uitval bekijken</li>
            </ol>
            <details className="text-xs">
              <summary className="cursor-pointer text-primary hover:underline">GSC-regexes (togwaarde, kopieerbaar)</summary>
              <div className="mt-2 space-y-2 font-mono text-[10px] text-gray-600">
                <div><span className="font-sans font-medium text-gray-700">TOG-basis:</span><br />{'tog.?(waarde|rating|schaal)|wat (is|betekent) tog|tog (optellen|bij elkaar)|maximale? tog'}</div>
                <div><span className="font-sans font-medium text-gray-700">Temperatuur & aankleden:</span><br />{'(baby|kindje?) .*(aan(kleden|doen)?|kleden) .*(nacht|bed|slapen)|wat moet .*baby aan|babykamer.*(temperatuur|graden)|slapen bij [0-9]+ graden'}</div>
                <div><span className="font-sans font-medium text-gray-700">Slaapzak kopen:</span><br />{'(welke|beste|hoeveel) .*slaapzak|slaapzak .*(kopen|maat|mouwen|materiaal|tweedehands|merk)'}</div>
                <div><span className="font-sans font-medium text-gray-700">Veiligheid:</span><br />{'oververhitting|wiegendood|baby .*(te warm|te koud|zweet|klam)|koude hand(en|jes)|nekje voelen'}</div>
                <div><span className="font-sans font-medium text-gray-700">Situaties:</span><br />{'slaapzak .*(vakantie|reizen|autostoel|draagzak|kinderwagen)|jas .*autostoel|baby .*(koorts|ziek) .*(slaapzak|aankleden)'}</div>
                <div className="font-sans text-gray-400">Volledige set + flesvoeding-varianten: togwaarde/vragen-content.md</div>
              </div>
            </details>
          </Card>
          <Card title="Funnel als conversie-proxy" icon={<Activity className="w-5 h-5" />}>
            <p className="text-sm text-gray-600 mb-2">
              De funnel in Overzicht (bezoek, berekening, affiliate-klik, bestelling) is de eigen conversie-proxy. Leg
              de stap van berekening naar klik na 4-6 weken naast de aannames in expansion/internationale-uitbreiding.md
              (§3) en stel de omzetscenario&apos;s bij.
            </p>
            <p className="text-sm text-gray-600">
              Volledige bezoeker-funnels (pageview, calculator, klik) staan in Umami onder Reports &gt; Funnel.
            </p>
          </Card>
        </div>
      )}
    </div>
  )
}
