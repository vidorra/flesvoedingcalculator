'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  BarChart3, Calculator, MousePointerClick, CalendarDays,
  ArrowUpRight, ArrowDownRight, Minus, Baby, Thermometer, Trophy, Activity, Bed
} from 'lucide-react'

type Row = Record<string, string | number>
type Stats = {
  totals: Row[]
  byAge: Row[]
  daily: Row[]
  byWeight: Row[]
  combi: Row[]
  byRoomTemp: Row[]
  bySleepMode?: Row[]
  byAdviesTog?: Row[]
  clickTotals?: Row[]
  clicksBySnippet?: Row[]
  clicksDaily?: Row[]
}

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

// Trend: som laatste 7 dagen vs de 7 dagen ervoor, uit de daily-rijen
function weekTrend(dailyAgg: Record<string, number>) {
  const now = new Date()
  let cur = 0
  let prev = 0
  for (const [day, count] of Object.entries(dailyAgg)) {
    const diff = (now.getTime() - new Date(day).getTime()) / 86400000
    if (diff <= 7) cur += count
    else if (diff <= 14) prev += count
  }
  if (prev === 0) return { pct: null as number | null, cur, prev }
  return { pct: Math.round(((cur - prev) / prev) * 100), cur, prev }
}

function TrendBadge({ pct }: { pct: number | null }) {
  if (pct === null) {
    return (
      <span className="inline-flex items-center gap-0.5 text-xs font-medium text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-full">
        <Minus className="w-3 h-3" /> vs vorige week
      </span>
    )
  }
  const up = pct >= 0
  return (
    <span className={`inline-flex items-center gap-0.5 text-xs font-medium px-1.5 py-0.5 rounded-full ${
      up ? 'text-green-700 bg-green-50' : 'text-red-700 bg-red-50'
    }`}>
      {up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
      {Math.abs(pct)}% vs vorige week
    </span>
  )
}

function KpiCard({ icon, value, title, sub }: { icon: React.ReactNode; value: string; title: string; sub?: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          <div className="text-sm text-gray-500 mt-0.5">{title}</div>
        </div>
        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
      </div>
      {sub && <div className="mt-3">{sub}</div>}
    </div>
  )
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

function DailyChart({ entries, max }: { entries: [string, number][]; max: number }) {
  if (entries.length === 0) return <p className="text-sm text-gray-500">Nog geen data.</p>
  return (
    <div>
      <div className="flex items-end gap-1 h-32 border-b border-gray-100">
        {entries.map(([d, c]) => (
          // h-full is essentieel: zonder expliciete hoogte op de kolom is de
          // procentuele hoogte van de balk 0 en blijft de grafiek leeg
          <div key={d} className="flex-1 h-full flex flex-col justify-end group relative">
            <div
              className="bg-primary/80 rounded-t hover:opacity-100 opacity-90 transition-opacity"
              style={{ height: `${max > 0 ? Math.max(3, (c / max) * 100) : 0}%` }}
            />
            <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-900 text-white text-[10px] px-1.5 py-0.5 rounded whitespace-nowrap z-10">
              {new Date(d).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short' })}: {c}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-gray-400 mt-1">
        <span>{new Date(entries[0][0]).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short' })}</span>
        <span>piek: {max.toLocaleString('nl-NL')}</span>
        <span>{new Date(entries[entries.length - 1][0]).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short' })}</span>
      </div>
    </div>
  )
}

function Card({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
        {icon && <span className="text-primary">{icon}</span>}
        {title}
      </h2>
      {children}
    </div>
  )
}

export default function StatsPanel() {
  const router = useRouter()
  const [stats, setStats] = useState<Stats | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [site, setSite] = useState<'all' | string>('all')

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') : null
    if (!token) {
      router.replace('/admin')
      return
    }
    fetch('/api/admin/calculator-stats', { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => (r.status === 401 ? (router.replace('/admin'), null) : r.json()))
      .then((data) => {
        if (data && data.success) setStats(data)
        else if (data) setError(data.error || 'Kon statistieken niet laden')
      })
      .catch(() => setError('Kon statistieken niet laden'))
  }, [router])

  const filt = (rows: Row[]) => (site === 'all' ? rows : rows.filter((r) => r.website === site))

  // Calculator-aggregaties
  const ageAgg: Record<string, number> = {}
  if (stats) filt(stats.byAge).forEach((r) => {
    const k = String(r.age_category)
    ageAgg[k] = (ageAgg[k] || 0) + Number(r.count)
  })
  const ageEntries = Object.entries(ageAgg).sort((a, b) => b[1] - a[1])
  const ageTotal = ageEntries.reduce((s, [, c]) => s + c, 0)

  const totalAll = stats ? filt(stats.totals).reduce((s, t) => s + Number(t.total), 0) : 0
  const total30 = stats ? filt(stats.totals).reduce((s, t) => s + Number(t.last30), 0) : 0
  const total7 = stats ? filt(stats.totals).reduce((s, t) => s + Number(t.last7 ?? 0), 0) : 0

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

  const dailyAgg: Record<string, number> = {}
  if (stats) filt(stats.daily).forEach((r) => {
    const d = String(r.day)
    dailyAgg[d] = (dailyAgg[d] || 0) + Number(r.count)
  })
  const dailyEntries = Object.entries(dailyAgg).sort((a, b) => a[0].localeCompare(b[0]))
  const dailyMax = dailyEntries.reduce((m, [, c]) => Math.max(m, c), 0)
  const calcTrend = weekTrend(dailyAgg)

  // Affiliate-klik aggregaties
  const clickTotalAll = stats ? filt(stats.clickTotals ?? []).reduce((s, t) => s + Number(t.total), 0) : 0
  const clickTotal30 = stats ? filt(stats.clickTotals ?? []).reduce((s, t) => s + Number(t.last30), 0) : 0
  const clickTotal7 = stats ? filt(stats.clickTotals ?? []).reduce((s, t) => s + Number(t.last7 ?? 0), 0) : 0
  const clickSnippets = stats ? filt(stats.clicksBySnippet ?? []) : []
  const clickTopMax = clickSnippets.reduce((m, r) => Math.max(m, Number(r.count)), 0)
  const clickDailyAgg: Record<string, number> = {}
  if (stats) filt(stats.clicksDaily ?? []).forEach((r) => {
    const d = String(r.day)
    clickDailyAgg[d] = (clickDailyAgg[d] || 0) + Number(r.count)
  })
  const clickDailyEntries = Object.entries(clickDailyAgg).sort((a, b) => a[0].localeCompare(b[0]))
  const clickDailyMax = clickDailyEntries.reduce((m, [, c]) => Math.max(m, c), 0)
  const clickTrend = weekTrend(clickDailyAgg)

  // Funnel (30 dagen): berekeningen -> affiliate-kliks. Kliks per berekening
  // is onze eigen conversie-proxy; leg deze na 4-6 weken naast de aannames in
  // expansion/internationale-uitbreiding.md §3.
  const funnelRatio = total30 > 0 ? (clickTotal30 / total30) * 100 : null

  return (
    <div>
      {error && <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-xl p-4 mb-6">{error}</div>}
      {!stats && !error && <div className="text-gray-500">Laden...</div>}

      {stats && (
        <>
          {/* Site filter - vaste lijst zodat Togwaarde er ook zonder data staat */}
          <div className="flex space-x-1 mb-8 bg-gray-100 rounded-lg p-1 w-fit">
            <button
              onClick={() => setSite('all')}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                site === 'all' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Beide apps
            </button>
            {KNOWN_SITES.map((s) => (
              <button
                key={s}
                onClick={() => setSite(s)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  site === s ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {label(SITE_LABELS, s)}
              </button>
            ))}
          </div>

          {/* ===== Calculator ===== */}
          <div className="flex items-center gap-2 mb-4">
            <Calculator className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-gray-900">Calculator-gebruik</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <KpiCard icon={<Activity className="w-5 h-5" />} value={totalAll.toLocaleString('nl-NL')} title="Totaal berekeningen" />
            <KpiCard icon={<CalendarDays className="w-5 h-5" />} value={total30.toLocaleString('nl-NL')} title="Laatste 30 dagen" />
            <KpiCard icon={<Calculator className="w-5 h-5" />} value={total7.toLocaleString('nl-NL')} title="Laatste 7 dagen" sub={<TrendBadge pct={calcTrend.pct} />} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <Card title="Berekeningen per dag (30 dagen)" icon={<BarChart3 className="w-5 h-5" />}>
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

          {/* ===== Affiliate-kliks ===== */}
          <div className="flex items-center gap-2 mb-1">
            <MousePointerClick className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-gray-900">Affiliate-kliks</h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">Kliks op bol.com/Amazon-productkaarten (anoniem)</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <KpiCard icon={<MousePointerClick className="w-5 h-5" />} value={clickTotalAll.toLocaleString('nl-NL')} title="Totaal kliks" />
            <KpiCard icon={<CalendarDays className="w-5 h-5" />} value={clickTotal30.toLocaleString('nl-NL')} title="Laatste 30 dagen" />
            <KpiCard icon={<Activity className="w-5 h-5" />} value={clickTotal7.toLocaleString('nl-NL')} title="Laatste 7 dagen" sub={<TrendBadge pct={clickTrend.pct} />} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title="Kliks per dag (30 dagen)" icon={<BarChart3 className="w-5 h-5" />}>
              <DailyChart entries={clickDailyEntries} max={clickDailyMax} />
            </Card>

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
                        {Number(r.count).toLocaleString('nl-NL')}
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

          {/* ===== Funnel & meetroutine ===== */}
          <div className="flex items-center gap-2 mb-4 mt-10">
            <Activity className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-gray-900">Funnel & meetroutine</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title="Funnel: berekening naar affiliate-klik (30 dagen)" icon={<Activity className="w-5 h-5" />}>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gray-700">Berekeningen</span>
                    <span className="font-semibold text-gray-900 tabular-nums">{total30.toLocaleString('nl-NL')}</span>
                  </div>
                  <div className="h-6 rounded-lg bg-gradient-to-r from-primary to-primary/70" style={{ width: '100%' }} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gray-700">Affiliate-kliks</span>
                    <span className="font-semibold text-gray-900 tabular-nums">{clickTotal30.toLocaleString('nl-NL')}</span>
                  </div>
                  <div
                    className="h-6 rounded-lg bg-gradient-to-r from-amber-500 to-amber-400 min-w-[4px]"
                    style={{ width: `${total30 > 0 ? Math.max(2, Math.min(100, (clickTotal30 / total30) * 100)) : 0}%` }}
                  />
                </div>
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm text-gray-600">Kliks per berekening</span>
                  <span className="text-lg font-bold text-gray-900">
                    {funnelRatio === null ? '-' : `${funnelRatio.toFixed(1)}%`}
                  </span>
                </div>
                <p className="text-xs text-gray-400">
                  Dit is de eigen conversie-proxy. Leg dit percentage na 4-6 weken naast de
                  aannames in expansion/internationale-uitbreiding.md (§3) en stel de
                  omzetscenario&apos;s bij. Volledige bezoeker-funnels (pageview -&gt; calculator
                  -&gt; klik) staan in Umami onder Reports &gt; Funnel.
                </p>
              </div>
            </Card>

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
          </div>
        </>
      )}
    </div>
  )
}
