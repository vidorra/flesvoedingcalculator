'use client'

import { useEffect, useRef, useState } from 'react'
import { ShoppingBag, RefreshCw, Euro, Package, Upload, Table2, FileUp } from 'lucide-react'
import { Card, DailyChart, KpiCard, TrendBadge, SegmentSwitch, ShowAllButton, Warning, LIMIT } from './stats-ui'
import { useAdminJson } from './useAdminJson'
import {
  type Row, type Parsed, type SalesData, nl, eur, dateOnly, dateTime, isRunning, bucketWord, bySite, series,
  salesSummary, trendPct
} from './stats-summary'

const SITE_LABELS: Record<string, string> = { flesvoedingcalculator: 'Flesvoeding', togwaarde: 'Togwaarde', onbekend: 'Onbekend' }

const conv = (orders: number, clicks: number) =>
  clicks > 0 ? `${((orders / clicks) * 100).toLocaleString('nl-NL', { maximumFractionDigits: 1 })}%` : '-'

const th = 'text-left font-medium text-gray-500 py-2 px-2 whitespace-nowrap'
const thR = 'text-right font-medium text-gray-500 py-2 px-2 whitespace-nowrap'
const td = 'py-2 px-2 align-top'
const tdR = 'py-2 px-2 text-right tabular-nums whitespace-nowrap align-top'

function SiteTag({ website }: { website: string }) {
  return (
    <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full flex-shrink-0">
      {SITE_LABELS[website] ?? website}
    </span>
  )
}

function StatusTag({ status }: { status: string | null }) {
  const s = status || 'Onbekend'
  const tone = s === 'Geaccepteerd' ? 'bg-primary/10 text-primary' : s === 'Geweigerd' ? 'bg-gray-200 text-gray-600 line-through' : 'bg-gray-100 text-gray-600'
  return <span className={`text-[11px] px-1.5 py-0.5 rounded-full whitespace-nowrap ${tone}`}>{s}</span>
}

function SubLabel({ parsed, subId }: { parsed: Parsed; subId: string | null }) {
  if (!subId) return <span className="text-gray-500">Zonder subId (oude link of script)</span>
  if (!parsed || !parsed.website) return <span className="text-gray-700 break-all">{subId}</span>
  return (
    <span className="inline-flex flex-col">
      <span className="text-gray-900">
        {parsed.label}
        {parsed.arm ? <span className="text-gray-500"> · variant {parsed.arm.toUpperCase()}</span> : null}
      </span>
      <span className="text-xs text-gray-500 break-all">{parsed.page === 'home' ? '/' : `/${parsed.page}`}</span>
    </span>
  )
}

const readFile = (f: File) =>
  new Promise<{ name: string; text: string }>((resolve, reject) => {
    const r = new FileReader()
    r.onload = () => resolve({ name: f.name, text: String(r.result || '') })
    r.onerror = () => reject(new Error(`Kon ${f.name} niet lezen`))
    r.readAsText(f)
  })

type Segment = 'sub' | 'products' | 'recent'
type AmzSegment = 'products' | 'tracking'

export default function AffiliateSalesSection({ site, period, periodLabel }: { site: string; period: string; periodLabel: string }) {
  const { data, error: loadError, reload } = useAdminJson<SalesData>(
    `/api/admin/affiliate-sales?days=${period}`, 'Kon verkoopcijfers niet laden')
  const [actionError, setActionError] = useState<string | null>(null)
  const [starting, setStarting] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [uploadMsg, setUploadMsg] = useState<string | null>(null)
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [segment, setSegment] = useState<Segment>('sub')
  const [showAll, setShowAll] = useState(false)
  const [amzSegment, setAmzSegment] = useState<AmzSegment>('products')
  const [amzShowAll, setAmzShowAll] = useState(false)
  const [chosen, setChosen] = useState<File[]>([])
  const fileRef = useRef<HTMLInputElement>(null)
  const error = actionError || loadError

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
    fetch('/api/admin/affiliate-sales', { method: 'POST', headers: { Authorization: `Bearer ${token}` } })
      .then((r) => r.json())
      .then((d) => { if (!d.success) setActionError(d.error || 'Import kon niet starten') })
      .catch(() => setActionError('Import kon niet starten'))
      .finally(() => { setStarting(false); setTimeout(reload, 2000) })
  }

  const uploadAmazon = async () => {
    const token = localStorage.getItem('admin_token')
    if (!token || chosen.length === 0) return
    setUploading(true)
    setUploadMsg(null)
    try {
      const files = await Promise.all(chosen.map(readFile))
      const res = await fetch('/api/admin/affiliate-sales', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ files, from: from || undefined, to: to || undefined })
      })
      const d = await res.json()
      if (!d.success) {
        setUploadMsg(d.error || 'Upload mislukt')
      } else {
        const parts = (d.amazon?.files || []).map((f: { file: string; report: string; rows: number }) => `${f.file}: ${f.rows} regels`)
        setUploadMsg(`Ingelezen${parts.length ? `: ${parts.join(', ')}` : ''}.`)
        if (fileRef.current) fileRef.current.value = ''
        setChosen([])
        reload()
      }
    } catch (e) {
      setUploadMsg(e instanceof Error ? e.message : 'Upload mislukt')
    } finally {
      setUploading(false)
    }
  }

  const showSite = site === 'all'
  const sum = salesSummary(data, site)
  const chart = series(bySite(data?.daily, site))

  const products = bySite(data?.products, site)
  const subIds = (data?.subIds ?? []).filter((s) => site === 'all' || s.parsed?.website === site)
  const recent = bySite(data?.recent, site)
  const amazonProducts = bySite(data?.amazon.products, site)
  const amazonTracking = data?.amazon.tracking ?? []

  const lastRun = data?.lastRun ?? null
  const bolDetails = lastRun?.details?.bol

  const pick = (s: Segment) => { setSegment(s); setShowAll(false) }
  const cut = <T,>(rows: T[]) => (showAll ? rows : rows.slice(0, LIMIT))
  const segmentRows = segment === 'sub' ? subIds.length : segment === 'products' ? products.length : recent.length
  const amzCut = <T,>(rows: T[]) => (amzShowAll ? rows : rows.slice(0, LIMIT))
  const amzRows = amzSegment === 'products' ? amazonProducts.length : amazonTracking.length
  const amzNote = site === 'all' ? null : 'alle sites samen, Amazon kent de site niet'

  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-gray-900">Verkopen</h2>
          </div>
          <p className="text-sm text-gray-500">
            {periodLabel}. Bestellingen via bol (elke dag automatisch opgehaald) en Amazon (CSV uploaden). Bol loopt een dag achter
            {sum.lastDate ? <>; laatste bestelling {dateOnly(sum.lastDate)}</> : null}.
          </p>
        </div>
        {data?.configured && (
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400">
              {running
                ? 'Import loopt...'
                : lastRun
                  ? <>
                      Laatste import {dateTime(lastRun.finished_at || lastRun.started_at)}{lastRun.ok === false ? ' (mislukt)' : ''}
                      {lastRun.ok && bolDetails?.to && (
                        <> · {dateOnly(bolDetails.from ?? null)} t/m {dateOnly(bolDetails.to)}: {nl(bolDetails.orders ?? 0)} bestelregels, {nl(bolDetails.promotionRows ?? 0)} promotieregels</>
                      )}
                    </>
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

      {data && !data.configured && (
        <Warning>
          Let op: BOL_REPORTING_CLIENT_ID en BOL_REPORTING_CLIENT_SECRET staan niet in de omgeving van deze app, dus bol-verkopen worden niet opgehaald. Gebruik de sleutel "Reporting API" uit het bol-partnerprogramma, niet die van de Marketing Catalog API.
        </Warning>
      )}

      {lastRun && lastRun.ok === false && lastRun.error && (
        <Warning>
          <p className="font-medium mb-1">Let op: de laatste bol-import is mislukt</p>
          <p className="break-words">{lastRun.error}</p>
        </Warning>
      )}

      {lastRun?.ok && bolDetails?.skipped && bolDetails.skipped.length > 0 && (
        <p className="text-xs text-gray-500 mb-4">
          Bol gaf geen toegang tot {bolDetails.skipped.join(', ')}; die periode is overgeslagen.
        </p>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <KpiCard
          icon={<Package className="w-4 h-4" />}
          value={nl(sum.items)}
          title="Bol-bestellingen"
          sub={
            <span className="flex flex-col gap-0.5">
              {sum.hasPrev && <TrendBadge pct={trendPct(sum.items, sum.prevItems)} />}
              <span>{sum.rejectedItems > 0 ? `${nl(sum.rejectedItems)} geweigerd (retour of annulering)` : 'zonder geweigerd'}</span>
            </span>
          }
        />
        <KpiCard
          icon={<Euro className="w-4 h-4" />}
          value={eur(sum.commission)}
          title="Bol-commissie"
          sub={`${eur(sum.accepted)} geaccepteerd, ${eur(sum.open)} open`}
        />
        <KpiCard
          icon={<ShoppingBag className="w-4 h-4" />}
          value={eur(sum.revenue)}
          title="Bol-omzet"
          sub="incl. btw, zonder geweigerd"
        />
      </div>
      <div className={`grid grid-cols-2 lg:grid-cols-3 gap-4 ${amzNote && sum.amzLast ? 'mb-2' : 'mb-6'}`}>
        <KpiCard
          icon={<Package className="w-4 h-4" />}
          value={sum.amzLast ? nl(sum.amzOrders) : '-'}
          title="Amazon-bestellingen"
          sub={sum.amzLast ? `${nl(sum.amzClicks)} kliks volgens Amazon` : 'nog geen CSV ingelezen'}
        />
        <KpiCard
          icon={<Euro className="w-4 h-4" />}
          value={sum.amzLast ? eur(sum.amzCommission) : '-'}
          title="Amazon-commissie"
          sub={sum.amzLast ? `t/m ${dateOnly(sum.amzLast)} (laatste upload)` : 'nog geen CSV ingelezen'}
        />
        <KpiCard
          icon={<ShoppingBag className="w-4 h-4" />}
          value={sum.amzLast && sum.amzRevenue > 0 ? eur(sum.amzRevenue) : '-'}
          title="Amazon-omzet"
          sub={!sum.amzLast ? 'nog geen CSV ingelezen' : sum.amzRevenue > 0 ? 'bestelde omzet volgens Amazon' : 'geen omzetkolom in de CSV'}
        />
      </div>

      {amzNote && sum.amzLast && <p className="text-xs text-gray-500 mb-6">Amazon-cijfers: {amzNote}.</p>}

      <div className="space-y-6">
        <Card title={`Bol-bestellingen per ${bucketWord(data?.bucket)}`} icon={<Package className="w-4 h-4" />}>
          {!data ? (
            <p className="text-sm text-gray-500">Laden...</p>
          ) : chart.entries.length === 0 ? (
            <p className="text-sm text-gray-500">
              {data.configured ? 'Nog geen bestellingen in deze periode.' : 'Geen gegevens.'}
              {bolDetails ? ` Laatste import: ${nl(bolDetails.orders ?? 0)} orderregels (${bolDetails.from} t/m ${bolDetails.to}).` : ''}
            </p>
          ) : (
            <DailyChart entries={chart.entries} max={chart.max} />
          )}
        </Card>

        <Card title="Bol-bestellingen in detail" icon={<Table2 className="w-4 h-4" />}>
          <SegmentSwitch<Segment>
            value={segment}
            onChange={pick}
            options={[
              { value: 'sub', label: 'Per blok en pagina', count: subIds.length },
              { value: 'products', label: 'Producten', count: products.length },
              { value: 'recent', label: 'Laatste bestellingen', count: recent.length }
            ]}
          />

          {segment === 'sub' && (
            <>
              <p className="text-xs text-gray-500 mb-3">
                Uit de subId op de bol-link. Kliks zijn volgens bol, bestellingen uit het orderrapport.
              </p>
              {subIds.length === 0 ? (
                <p className="text-sm text-gray-500">Nog geen bestellingen of kliks met een subId.</p>
              ) : (
                <div className="overflow-x-auto -mx-2">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className={th}>Blok en pagina</th>
                        <th className={thR}>Kliks (bol)</th>
                        <th className={thR}>Bestellingen</th>
                        <th className={thR}>Conversie</th>
                        <th className={thR}>Commissie</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cut(subIds).map((s) => (
                        <tr key={s.sub_id ?? '-'} className="border-b border-gray-50">
                          <td className={td}>
                            <span className="inline-flex items-start gap-1.5">
                              <SubLabel parsed={s.parsed} subId={s.sub_id} />
                              {showSite && s.parsed?.website && <SiteTag website={s.parsed.website} />}
                            </span>
                          </td>
                          <td className={tdR}>{s.clicks ? nl(s.clicks) : '-'}</td>
                          <td className={tdR}>{nl(s.items)}</td>
                          <td className={tdR}>{conv(s.items, s.clicks)}</td>
                          <td className={tdR}>{eur(s.commission)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}

          {segment === 'products' && (
            products.length === 0 ? (
              <p className="text-sm text-gray-500">Nog geen verkochte producten bij bol in deze periode.</p>
            ) : (
              <div className="overflow-x-auto -mx-2">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className={th}>Product (bol)</th>
                      <th className={thR}>Bestellingen</th>
                      <th className={thR}>Onze kliks</th>
                      <th className={thR}>Conversie</th>
                      <th className={thR}>Commissie</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cut(products).map((p) => {
                      const clicks = p.snippet_id ? data?.snippetClicks[String(p.snippet_id)] ?? 0 : 0
                      return (
                        <tr key={`${p.website}-${p.product_id}`} className="border-b border-gray-50">
                          <td className={td}>
                            <span className="inline-flex items-start gap-1.5 flex-wrap">
                              <span className="text-gray-900">{String(p.title || p.product_id)}</span>
                              {showSite && <SiteTag website={String(p.website)} />}
                            </span>
                            {!p.snippet_id && <div className="text-xs text-gray-400">niet in onze productblokken</div>}
                            {Number(p.rejected) > 0 && <div className="text-xs text-gray-400">{nl(Number(p.rejected))} geweigerd</div>}
                          </td>
                          <td className={tdR}>{nl(Number(p.items))}</td>
                          <td className={tdR}>{p.snippet_id ? nl(clicks) : '-'}</td>
                          <td className={tdR}>{p.snippet_id ? conv(Number(p.items), clicks) : '-'}</td>
                          <td className={tdR}>{eur(Number(p.commission))}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            )
          )}

          {segment === 'recent' && (
            recent.length === 0 ? (
              <p className="text-sm text-gray-500">Nog geen bestellingen.</p>
            ) : (
              <div className="overflow-x-auto -mx-2">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className={th}>Datum</th>
                      <th className={th}>Product (bol)</th>
                      <th className={th}>Via</th>
                      <th className={thR}>Prijs</th>
                      <th className={thR}>Commissie</th>
                      <th className={th}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cut(recent).map((r, i) => (
                      <tr key={`${r.order_date}-${r.product_id}-${i}`} className="border-b border-gray-50">
                        <td className={`${td} whitespace-nowrap text-gray-600`}>{dateOnly(String(r.order_date))}</td>
                        <td className={td}>
                          <span className="inline-flex items-start gap-1.5 flex-wrap">
                            <span className="text-gray-900">{String(r.product_title || r.product_id)}</span>
                            {Number(r.quantity) > 1 && <span className="text-xs text-gray-500">{nl(Number(r.quantity))}x</span>}
                            {showSite && <SiteTag website={String(r.website)} />}
                          </span>
                        </td>
                        <td className={`${td} text-xs`}><SubLabel parsed={r.parsed} subId={r.sub_id ? String(r.sub_id) : null} /></td>
                        <td className={tdR}>{r.price !== null ? eur(Number(r.price)) : '-'}</td>
                        <td className={tdR}>{eur(Number(r.commission ?? 0))}</td>
                        <td className={td}><StatusTag status={r.status ? String(r.status) : null} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          )}

          <ShowAllButton total={segmentRows} open={showAll} onToggle={() => setShowAll((v) => !v)} />
        </Card>

        <Card title="Amazon" icon={<ShoppingBag className="w-4 h-4" />}>
          <div className="rounded-xl bg-gray-50 border border-gray-200 p-4 mb-6">
            <p className="text-sm font-medium text-gray-900 mb-1">Rapporten inlezen</p>
            <p className="text-xs text-gray-600 mb-4">
              Amazon heeft geen API voor partners. Download in Associates Central de rapporten Categorie, Gelinkte producten
              en Tracking-ID als CSV. Je kunt ze in één keer kiezen. Opnieuw inlezen overschrijft, er telt niets dubbel.
            </p>
            <div className="flex flex-wrap items-end gap-3">
              <div className="flex flex-col gap-1 min-w-0">
                <span className="text-xs text-gray-600">CSV-bestanden</span>
                <label className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg border border-primary bg-white text-primary hover:bg-primary/5 cursor-pointer w-fit">
                  <FileUp className="w-4 h-4" />
                  {chosen.length > 0 ? 'Andere bestanden kiezen' : 'Bestanden kiezen'}
                  <input
                    ref={fileRef}
                    type="file"
                    accept=".csv,text/csv"
                    multiple
                    className="sr-only"
                    onChange={(e) => { setChosen(Array.from(e.target.files ?? [])); setUploadMsg(null) }}
                  />
                </label>
              </div>
              <label className="text-xs text-gray-600 flex flex-col gap-1">
                Van
                <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} className="text-sm border border-gray-300 rounded-lg px-2 py-1.5 bg-white text-gray-900 focus:border-primary outline-none" />
              </label>
              <label className="text-xs text-gray-600 flex flex-col gap-1">
                Tot en met
                <input type="date" value={to} onChange={(e) => setTo(e.target.value)} className="text-sm border border-gray-300 rounded-lg px-2 py-1.5 bg-white text-gray-900 focus:border-primary outline-none" />
              </label>
              <button
                onClick={uploadAmazon}
                disabled={uploading || chosen.length === 0}
                className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Upload className="w-4 h-4" />
                {uploading ? 'Bezig met inlezen...' : chosen.length > 1 ? `${chosen.length} bestanden inlezen` : 'Inlezen'}
              </button>
            </div>
            <p className="text-sm text-gray-700 mt-3">
              {chosen.length > 0 ? chosen.map((f) => f.name).join(', ') : 'Nog geen bestand gekozen.'}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Van en tot en met zijn alleen nodig voor het Tracking-ID-rapport, want daar staat geen datum in.
            </p>
            {uploadMsg && <p className="text-sm font-medium text-gray-900 mt-3">{uploadMsg}</p>}
          </div>

          {amazonProducts.length === 0 && amazonTracking.length === 0 ? (
            <p className="text-sm text-gray-500">Nog geen Amazon-cijfers in deze periode.</p>
          ) : (
            <>
              <SegmentSwitch<AmzSegment>
                value={amzSegment}
                onChange={(v) => { setAmzSegment(v); setAmzShowAll(false) }}
                options={[
                  { value: 'products', label: 'Producten', count: amazonProducts.length },
                  { value: 'tracking', label: 'Per tracking-ID', count: amazonTracking.length }
                ]}
              />
              <p className="text-xs text-gray-500 mb-3">Amazon weet niet via welke site een bestelling kwam; de site komt uit ons productblok of de categorie.</p>
              {amzSegment === 'products' && (amazonProducts.length === 0 ? (
                <p className="text-sm text-gray-500">Geen productrapport in deze periode.</p>
              ) : (
                <div className="overflow-x-auto -mx-2">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className={th}>Product (Amazon)</th>
                        <th className={thR}>Kliks</th>
                        <th className={thR}>Bestellingen</th>
                        <th className={thR}>Conversie</th>
                        <th className={thR}>Commissie</th>
                      </tr>
                    </thead>
                    <tbody>
                      {amzCut(amazonProducts).map((p) => (
                        <tr key={String(p.key)} className="border-b border-gray-50">
                          <td className={td}>
                            <span className="inline-flex items-start gap-1.5 flex-wrap">
                              <span className="text-gray-900">{String(p.title || p.key)}</span>
                              {showSite && <SiteTag website={String(p.website)} />}
                            </span>
                            {p.category ? <div className="text-xs text-gray-400">{String(p.category)}</div> : null}
                          </td>
                          <td className={tdR}>{nl(Number(p.clicks))}</td>
                          <td className={tdR}>{nl(Number(p.orders))}</td>
                          <td className={tdR}>{conv(Number(p.orders), Number(p.clicks))}</td>
                          <td className={tdR}>{eur(Number(p.commission))}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
              {amzSegment === 'tracking' && (amazonTracking.length === 0 ? (
                <p className="text-sm text-gray-500">Geen Tracking-ID-rapport in deze periode.</p>
              ) : (
                <div className="overflow-x-auto -mx-2">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className={th}>Tracking-ID</th>
                        <th className={th}>Periode</th>
                        <th className={thR}>Kliks</th>
                        <th className={thR}>Bestellingen</th>
                        <th className={thR}>Commissie</th>
                      </tr>
                    </thead>
                    <tbody>
                      {amzCut(amazonTracking).map((t) => (
                        <tr key={`${t.key}-${t.period_start}-${t.period_end}`} className="border-b border-gray-50">
                          <td className={`${td} text-gray-900`}>{String(t.key)}</td>
                          <td className={`${td} text-gray-600 whitespace-nowrap`}>{dateOnly(String(t.period_start))} t/m {dateOnly(String(t.period_end))}</td>
                          <td className={tdR}>{nl(Number(t.clicks))}</td>
                          <td className={tdR}>{nl(Number(t.orders))}</td>
                          <td className={tdR}>{eur(Number(t.commission))}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
              <ShowAllButton total={amzRows} open={amzShowAll} onToggle={() => setAmzShowAll((v) => !v)} />
            </>
          )}
        </Card>
      </div>
    </>
  )
}
