'use client'

import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

/**
 * Admin-tab Experimenten: status, verdeling en uitslag per A/B-experiment.
 * Meetmaat: aandeel berekeningen (paginaladingen met een uitkomst) met
 * minstens één productklik. Beslisregel staat in lib/experiments-config.ts.
 */

interface ArmResult {
  id: string
  label: string
  calcs: number
  seen: number
  clicked: number
  rate: number
  interval: [number, number]
}

interface Results {
  from: string
  to: string
  days: number
  arms: ArmResult[]
  probBBeatsA: number | null
  assignmentP: number
  verdict: { code: string; text: string }
}

interface Experiment {
  key: string
  website: string
  title: string
  description: string
  armDefs: { id: string; label: string }[]
  status: 'draft' | 'running' | 'paused' | 'finished'
  arms: { id: string; weight: number }[]
  winner: string | null
  startedAt: string | null
  endedAt: string | null
  results: Results | null
}

interface Rule {
  minDays: number
  minCalculationsPerArm: number
  maxDays: number
  winThreshold: number
  loseThreshold: number
}

const STATUS_LABEL: Record<Experiment['status'], string> = {
  draft: 'Nog niet gestart',
  running: 'Loopt',
  paused: 'Gepauzeerd',
  finished: 'Afgerond'
}

const pct = (v: number, digits = 1) => `${(v * 100).toLocaleString('nl-NL', { minimumFractionDigits: digits, maximumFractionDigits: digits })}%`
const fmtDate = (s: string | null) => (s ? new Date(s).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short', year: 'numeric' }) : '')

function authHeaders(): Record<string, string> | null {
  const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') : null
  return token ? { Authorization: `Bearer ${token}` } : null
}

export default function ExperimentsPanel() {
  const router = useRouter()
  const [experiments, setExperiments] = useState<Experiment[] | null>(null)
  const [rule, setRule] = useState<Rule | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  const load = useCallback(() => {
    const headers = authHeaders()
    if (!headers) {
      router.replace('/admin')
      return
    }
    setError(null)
    fetch('/api/admin/experiments', { headers })
      .then((r) => (r.status === 401 ? (router.replace('/admin'), null) : r.json()))
      .then((data) => {
        if (data && data.success) {
          setExperiments(data.experiments)
          setRule(data.rule)
        } else if (data) {
          setError(data.error || 'Kon experimenten niet laden')
        }
      })
      .catch(() => setError('Kon experimenten niet laden'))
  }, [router])

  useEffect(() => { load() }, [load])

  const act = async (key: string, body: Record<string, unknown>) => {
    const headers = authHeaders()
    if (!headers) return router.replace('/admin')
    setBusy(true)
    setError(null)
    try {
      const r = await fetch('/api/admin/experiments', {
        method: 'PUT',
        headers: { ...headers, 'Content-Type': 'application/json' },
        body: JSON.stringify({ key, ...body })
      })
      if (r.status === 401) return router.replace('/admin')
      const data = await r.json().catch(() => null)
      if (!data?.success) setError(data?.error || 'Actie mislukt')
      load()
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="space-y-6">
      {error && <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-xl p-4">{error}</div>}
      {!experiments && !error && <div className="text-gray-500">Laden...</div>}

      {experiments?.map((exp) => (
        <ExperimentCard key={exp.key} exp={exp} rule={rule} busy={busy} onAction={(body) => act(exp.key, body)} />
      ))}

      {rule && (
        <p className="text-sm text-gray-500">
          Beslisregel: oordeel vanaf dag {rule.minDays} én {rule.minCalculationsPerArm} berekeningen per variant.
          B wint bij een kans van {pct(rule.winThreshold, 0)} of meer, A blijft bij {pct(rule.loseThreshold, 0)} of minder.
          Na {Math.round(rule.maxDays / 7)} weken zonder uitslag kies je zelf.
          Bekijk een variant zonder te meten met <code className="text-gray-700">?exp_arm=result_block</code> of <code className="text-gray-700">?exp_arm=control</code>.
        </p>
      )}
    </div>
  )
}

function ExperimentCard({
  exp,
  rule,
  busy,
  onAction
}: {
  exp: Experiment
  rule: Rule | null
  busy: boolean
  onAction: (body: Record<string, unknown>) => void
}) {
  const [weightA, setWeightA] = useState(String(exp.arms[0]?.weight ?? 50))
  const [winner, setWinner] = useState(exp.winner || exp.armDefs[0]?.id || '')
  const r = exp.results

  useEffect(() => { setWeightA(String(exp.arms[0]?.weight ?? 50)) }, [exp.arms])

  const wA = Number(weightA)
  const weightsValid = Number.isInteger(wA) && wA >= 0 && wA <= 100
  const split = exp.arms.map((a) => a.weight).join(' / ')

  const confirmStart = () => {
    const restart = exp.status === 'finished'
    if (restart && !window.confirm('Opnieuw starten begint een nieuwe meting vanaf nu. Doorgaan?')) return
    onAction({ action: 'start' })
  }

  const confirmFinish = () => {
    const label = exp.armDefs.find((a) => a.id === winner)?.label || winner
    if (!window.confirm(`Experiment stoppen en "${label}" aan iedereen tonen?`)) return
    onAction({ action: 'finish', winner })
  }

  const btn = 'px-3 py-1.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-50'
  const btnPrimary = `${btn} bg-primary text-white hover:opacity-90`
  const btnGhost = `${btn} border border-gray-300 text-gray-700 hover:border-primary hover:text-primary`

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-primary">{exp.title}</h2>
          <p className="text-sm text-gray-600 mt-1 max-w-2xl">{exp.description}</p>
        </div>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${exp.status === 'running' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}`}>
          {STATUS_LABEL[exp.status]}
          {exp.status === 'finished' && exp.winner && `: ${exp.armDefs.find((a) => a.id === exp.winner)?.label || exp.winner}`}
        </span>
      </div>

      <dl className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
        <div>
          <dt className="text-gray-500">Gestart</dt>
          <dd className="text-gray-800">{fmtDate(exp.startedAt) || 'nog niet'}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Dagen</dt>
          <dd className="text-gray-800">{r ? r.days : 0}{rule ? ` van minimaal ${rule.minDays}` : ''}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Verdeling A / B</dt>
          <dd className="text-gray-800">{split}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Gestopt</dt>
          <dd className="text-gray-800">{fmtDate(exp.endedAt) || '-'}</dd>
        </div>
      </dl>

      {/* Acties */}
      <div className="mt-5 flex flex-wrap items-center gap-3">
        {exp.status !== 'running' && (
          <button className={btnPrimary} disabled={busy} onClick={confirmStart}>
            {exp.status === 'paused' ? 'Hervatten' : exp.status === 'finished' ? 'Opnieuw starten' : 'Start'}
          </button>
        )}
        {exp.status === 'running' && (
          <button className={btnGhost} disabled={busy} onClick={() => onAction({ action: 'pause' })}>Pauzeer</button>
        )}

        <div className="flex items-center gap-2">
          <label htmlFor={`w-${exp.key}`} className="text-sm text-gray-600">A krijgt</label>
          <input
            id={`w-${exp.key}`}
            type="number"
            min={0}
            max={100}
            value={weightA}
            onChange={(e) => setWeightA(e.target.value)}
            className="w-16 border border-gray-300 rounded-lg px-2 py-1 text-sm"
          />
          <span className="text-sm text-gray-600">%, B {weightsValid ? 100 - wA : '?'}%</span>
          <button
            className={btnGhost}
            disabled={busy || !weightsValid || wA === exp.arms[0]?.weight}
            onClick={() => onAction({ action: 'weights', weights: [wA, 100 - wA] })}
          >
            Verdeling opslaan
          </button>
        </div>

        {exp.status !== 'finished' && exp.startedAt && (
          <div className="flex items-center gap-2">
            <select
              value={winner}
              onChange={(e) => setWinner(e.target.value)}
              className="border border-gray-300 rounded-lg px-2 py-1 text-sm"
              aria-label="Winnaar"
            >
              {exp.armDefs.map((a) => <option key={a.id} value={a.id}>{a.label}</option>)}
            </select>
            <button className={btnGhost} disabled={busy} onClick={confirmFinish}>Stop en kies winnaar</button>
          </div>
        )}
      </div>

      {/* Resultaten */}
      {r ? (
        <div className="mt-6 border-t border-gray-200 pt-6">
          {r.verdict.code === 'srm' && (
            <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-xl p-4 mb-4 text-sm">
              <strong>Let op:</strong> de verdeling van berekeningen over A en B wijkt sterk af van de ingestelde verdeling
              (p = {r.assignmentP.toExponential(1)}). Waarschijnlijk telt een variant niet goed mee. Zoek de oorzaak voordat je naar de uitslag kijkt.
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Variant</th>
                  <th className="border border-gray-300 px-3 py-2 text-right">Berekeningen</th>
                  <th className="border border-gray-300 px-3 py-2 text-right">Blok gezien</th>
                  <th className="border border-gray-300 px-3 py-2 text-right">Met klik</th>
                  <th className="border border-gray-300 px-3 py-2 text-right">Doorklik</th>
                  <th className="border border-gray-300 px-3 py-2 text-right">90%-interval</th>
                </tr>
              </thead>
              <tbody>
                {r.arms.map((a, i) => (
                  <tr key={a.id} className={i % 2 === 1 ? 'bg-white' : undefined}>
                    <td className="border border-gray-300 px-3 py-2 font-semibold">{a.label}</td>
                    <td className="border border-gray-300 px-3 py-2 text-right">{a.calcs.toLocaleString('nl-NL')}</td>
                    <td className="border border-gray-300 px-3 py-2 text-right">
                      {a.seen.toLocaleString('nl-NL')}
                      {a.calcs > 0 && <span className="text-gray-500"> ({pct(a.seen / a.calcs, 0)})</span>}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-right">{a.clicked.toLocaleString('nl-NL')}</td>
                    <td className="border border-gray-300 px-3 py-2 text-right font-semibold">{a.calcs > 0 ? pct(a.rate) : '-'}</td>
                    <td className="border border-gray-300 px-3 py-2 text-right text-gray-600">
                      {a.calcs > 0 ? `${pct(a.interval[0])} tot ${pct(a.interval[1])}` : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-500">Kans dat B beter is dan A</div>
              <div className="text-2xl font-bold text-gray-900">{r.probBBeatsA === null ? '-' : pct(r.probBBeatsA, 0)}</div>
            </div>
            <div>
              <div className="text-gray-500">Oordeel</div>
              <div className="text-gray-800 font-medium mt-1">{r.verdict.text}</div>
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            Periode {fmtDate(r.from)} tot {fmtDate(r.to)}. Een berekening is één paginalading met een uitkomst; "met klik" telt
            paginaladingen met minstens één productklik in die variant. "Blok gezien" telt het productblok van de variant
            minstens een seconde voor de helft in beeld.
          </p>
        </div>
      ) : (
        <p className="mt-6 text-sm text-gray-500">
          Nog geen resultaten. Vul eerst per leeftijdsband de producten in (Page Assignment, categorie Calculator) en start dan het experiment.
        </p>
      )}
    </section>
  )
}
