// Gedeelde bouwstenen van /admin/stats (StatsPanel en SearchConsoleSection).
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react'

export function TrendBadge({ pct }: { pct: number | null }) {
  if (pct === null) {
    return (
      <span className="inline-flex items-center gap-0.5 text-xs font-medium text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-full">
        <Minus className="w-3 h-3" /> vs vorige periode
      </span>
    )
  }
  const up = pct >= 0
  return (
    <span className={`inline-flex items-center gap-0.5 text-xs font-medium px-1.5 py-0.5 rounded-full ${
      up ? 'text-green-700 bg-green-50' : 'text-red-700 bg-red-50'
    }`}>
      {up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
      {Math.abs(pct)}% vs vorige periode
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
