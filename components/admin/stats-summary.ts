// Gedeelde berekeningen voor /admin/stats, zodat het overzicht en de tabs
// Google en Verkopen precies dezelfde getallen tonen.

export type Row = Record<string, string | number | null>

export type RunRow = {
  id: number
  started_at: string
  finished_at: string | null
  ok: boolean | null
  trigger: string | null
  details?: { bol?: { from?: string; to?: string; orders?: number; promotionRows?: number; skipped?: string[] } } | null
  error: string | null
}

export type CalcStats = {
  period?: number | string
  bucket?: string
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
  clicksByPlatform?: Row[]
  clicksDaily?: Row[]
}

export type VisitorStats = { bucket?: string; series: Row[]; totals: Row[] }

export type GscData = {
  configured: boolean
  configProblem?: string | null
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

export type Parsed = { website: string | null; widget: string; label: string; page: string | null; arm: string | null } | null
export type SubRow = { sub_id: string | null; clicks: number; items: number; commission: number; parsed: Parsed }
export type RecentRow = Row & { parsed: Parsed }
export type SalesData = {
  configured: boolean
  bucket: string
  lastRun: RunRow | null
  totals: Row[]
  prevTotals?: Row[]
  daily: Row[]
  products: Row[]
  snippetClicks: Record<string, number>
  subIds: SubRow[]
  recent: RecentRow[]
  amazon: { daily: Row[]; products: Row[]; tracking: Row[] }
}

export const PERIOD_OPTIONS: { value: string; label: string }[] = [
  { value: '7', label: 'Laatste 7 dagen' },
  { value: '14', label: 'Laatste 14 dagen' },
  { value: '30', label: 'Laatste 30 dagen' },
  { value: '60', label: 'Laatste 60 dagen' },
  { value: '90', label: 'Laatste 3 maanden' },
  { value: '180', label: 'Laatste 6 maanden' },
  { value: '365', label: 'Laatste jaar' },
  { value: 'all', label: 'Alles' }
]

export const nl = (n: number) => n.toLocaleString('nl-NL')
export const eur = (n: number) => n.toLocaleString('nl-NL', { style: 'currency', currency: 'EUR' })
export const dateOnly = (d: string | null) =>
  d ? new Date(d).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short', year: 'numeric' }) : '-'
export const dateShort = (d: string | null) =>
  d ? new Date(d).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short' }) : '-'
export const dateTime = (d: string | null) =>
  d ? new Date(d).toLocaleString('nl-NL', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : '-'

// Een run die na 30 minuten nog niet klaar is, is gestopt (bv. een deploy).
export const isRunning = (r: RunRow | null) =>
  Boolean(r && !r.finished_at && Date.now() - new Date(r.started_at).getTime() < 30 * 60_000)

export const bucketWord = (b?: string) => (b === 'month' ? 'maand' : b === 'week' ? 'week' : 'dag')

export const trendPct = (cur: number, prev: number) =>
  prev > 0 ? Math.round(((cur - prev) / prev) * 100) : null

export function bySite<T extends Row>(rows: T[] | undefined, site: string): T[] {
  const list = rows ?? []
  return site === 'all' ? list : list.filter((r) => r.website === site)
}

export const sum = (rows: Row[], key: string, pred: (r: Row) => boolean = () => true) =>
  rows.filter(pred).reduce((s, r) => s + Number(r[key] ?? 0), 0)

// Reeks per dag/week/maand, opgeteld over de sites
export function series(rows: Row[], key = 'count') {
  const agg: Record<string, number> = {}
  rows.forEach((r) => {
    const d = String(r.day)
    agg[d] = (agg[d] || 0) + Number(r[key] ?? 0)
  })
  const entries = Object.entries(agg).sort((a, b) => a[0].localeCompare(b[0]))
  const max = entries.reduce((m, [, c]) => Math.max(m, c), 0)
  return { entries, max }
}

export function calcSummary(stats: CalcStats | null, site: string) {
  const totals = bySite(stats?.totals, site)
  const clickTotals = bySite(stats?.clickTotals, site)
  const calcPeriod = sum(totals, 'period')
  const calcPrev = sum(totals, 'prev')
  const clickPeriod = sum(clickTotals, 'period')
  const clickPrev = sum(clickTotals, 'prev')
  const platform = bySite(stats?.clicksByPlatform, site)
  return {
    calcAll: sum(totals, 'total'),
    calcPeriod,
    calcTrend: trendPct(calcPeriod, calcPrev),
    clickAll: sum(clickTotals, 'total'),
    clickPeriod,
    clickTrend: trendPct(clickPeriod, clickPrev),
    clicksBol: sum(platform, 'count', (r) => r.platform === 'bol'),
    clicksAmazon: sum(platform, 'count', (r) => r.platform === 'amazon')
  }
}

export function visitorSummary(v: VisitorStats | null, site: string) {
  const totals = bySite(v?.totals, site)
  const period = sum(totals, 'period')
  return {
    period,
    all: sum(totals, 'total'),
    trend: trendPct(period, sum(totals, 'prev')),
    ...series(bySite(v?.series, site)),
    bucket: v?.bucket
  }
}

export function gscSummary(data: GscData | null, site: string) {
  const totals = bySite(data?.totals, site)
  const clicks = sum(totals, 'clicks')
  const impressions = sum(totals, 'impressions')
  return {
    clicks,
    impressions,
    trend: trendPct(clicks, sum(totals, 'prev_clicks')),
    position: impressions > 0
      ? totals.reduce((s, t) => s + Number(t.position ?? 0) * Number(t.impressions ?? 0), 0) / impressions
      : null,
    // Oudste "laatste dag" over de sites: t/m die dag is alles compleet
    lastDate: totals.map((t) => String(t.last_date ?? '')).filter(Boolean).sort()[0] ?? null,
    firstDate: totals.map((t) => String(t.first_date ?? '')).filter(Boolean).sort()[0] ?? null
  }
}

export function salesSummary(data: SalesData | null, site: string) {
  const totals = bySite(data?.totals, site)
  const prev = bySite(data?.prevTotals, site)
  const notRejected = (r: Row) => r.status !== 'Geweigerd'
  const items = sum(totals, 'items', notRejected)
  const commission = sum(totals, 'commission', notRejected)
  const accepted = sum(totals, 'commission', (r) => r.status === 'Geaccepteerd')

  // Amazon: het categorierapport is per dag; producten en tracking-id's
  // beschrijven dezelfde verkopen, dus nooit bij elkaar optellen. Amazon
  // weet niet van welke site een verkoop kwam.
  const amzDaily = data?.amazon.daily ?? []
  const amzTracking = data?.amazon.tracking ?? []
  const amzSrc = amzDaily.length > 0 ? amzDaily : amzTracking
  const amzLast = amzDaily.length > 0
    ? String(amzDaily[amzDaily.length - 1].day)
    : amzTracking.length > 0 ? String(amzTracking[0].period_end) : null

  return {
    items,
    commission,
    accepted,
    open: commission - accepted,
    rejectedItems: sum(totals, 'items', (r) => r.status === 'Geweigerd'),
    revenue: sum(totals, 'revenue', notRejected),
    lastDate: totals.map((t) => String(t.last_date ?? '')).filter(Boolean).sort().pop() ?? null,
    hasPrev: Boolean(data?.prevTotals),
    prevItems: sum(prev, 'items'),
    prevCommission: sum(prev, 'commission'),
    amzOrders: sum(amzSrc, 'orders'),
    amzCommission: sum(amzSrc, 'commission'),
    amzRevenue: sum(amzSrc, 'revenue'),
    amzClicks: sum(amzSrc, 'clicks'),
    amzLast
  }
}
