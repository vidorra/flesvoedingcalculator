// Gedeelde bouwstenen van /admin/stats (StatsPanel en de secties per tab).
import { ArrowUpRight, ArrowDownRight, Minus, AlertTriangle } from 'lucide-react'

export function TrendBadge({ pct, label = 'vs vorige periode' }: { pct: number | null; label?: string }) {
  if (pct === null) {
    return (
      <span className="inline-flex items-center gap-0.5 text-xs font-medium text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-full">
        <Minus className="w-3 h-3" /> {label}
      </span>
    )
  }
  const up = pct >= 0
  return (
    <span className={`inline-flex items-center gap-0.5 text-xs font-medium px-1.5 py-0.5 rounded-full ${
      up ? 'text-green-700 bg-green-50' : 'text-red-700 bg-red-50'
    }`}>
      {up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
      {Math.abs(pct)}% {label}
    </span>
  )
}

export function KpiCard({ icon, value, title, sub }: { icon: React.ReactNode; value: string; title: string; sub?: React.ReactNode }) {
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

export function DailyChart({ entries, max }: { entries: [string, number][]; max: number }) {
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

export function Card({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) {
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

// Knoppenrij om binnen een kaart tussen tabellen te wisselen
export function SegmentSwitch<T extends string>({ options, value, onChange }: {
  options: { value: T; label: string; count?: number }[]
  value: T
  onChange: (v: T) => void
}) {
  return (
    <div className="flex flex-wrap gap-1 bg-gray-100 rounded-lg p-1 w-fit mb-4">
      {options.map((o) => (
        <button
          key={o.value}
          onClick={() => onChange(o.value)}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
            value === o.value ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {o.label}
          {o.count !== undefined && <span className="ml-1.5 text-xs text-gray-400 tabular-nums">{o.count}</span>}
        </button>
      ))}
    </div>
  )
}

// Eerste 10 regels tonen, met een knop voor de rest
export const LIMIT = 10
export function ShowAllButton({ total, open, onToggle }: { total: number; open: boolean; onToggle: () => void }) {
  if (total <= LIMIT) return null
  return (
    <button onClick={onToggle} className="mt-3 text-sm text-primary hover:underline">
      {open ? 'Minder tonen' : `Alle ${total} tonen`}
    </button>
  )
}

export function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-amber-50 rounded-xl border border-amber-200 p-4 mb-6 flex items-start gap-3">
      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
      <div className="text-sm text-amber-800 min-w-0">{children}</div>
    </div>
  )
}

// Verdeling van onze affiliate-kliks over bol.com en Amazon
export function PlatformSplit({ bol, amazon }: { bol: number; amazon: number }) {
  const total = bol + amazon
  if (total === 0) return <p className="text-sm text-gray-500">Nog geen affiliate-kliks in deze periode.</p>
  const bolPct = (bol / total) * 100
  const amazonPct = (amazon / total) * 100
  return (
    <div>
      <div className="flex h-6 rounded-lg overflow-hidden bg-gray-100">
        {bol > 0 && (
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center" style={{ width: `${bolPct}%` }}>
            {bolPct >= 18 && <span className="text-[11px] font-medium text-white px-1">bol.com</span>}
          </div>
        )}
        {amazon > 0 && (
          <div className="bg-gradient-to-r from-amber-500 to-orange-400 flex items-center justify-center" style={{ width: `${amazonPct}%` }}>
            {amazonPct >= 18 && <span className="text-[11px] font-medium text-white px-1">Amazon</span>}
          </div>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 mt-2 text-sm">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" />
          <span className="text-gray-700">bol.com</span>
          <span className="font-semibold text-gray-900 tabular-nums">{bol.toLocaleString('nl-NL')}</span>
          <span className="text-xs text-gray-400">({bolPct.toFixed(0)}%)</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
          <span className="text-gray-700">Amazon</span>
          <span className="font-semibold text-gray-900 tabular-nums">{amazon.toLocaleString('nl-NL')}</span>
          <span className="text-xs text-gray-400">({amazonPct.toFixed(0)}%)</span>
        </span>
      </div>
    </div>
  )
}
