'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { Baby, Scale, Clock, Calendar, Milk, Info, AlertTriangle, ArrowRight } from 'lucide-react'
import { computeFeeding } from '../../lib/feeding-calc'
import { generateFeedingSchedule, type AgeCategory } from '../../hooks/useCalculator'
import { FEEDING_MEASUREMENTS } from '../../lib/feeding-constants'
import WarmWeerAlert from '../calculator/WarmWeerAlert'

/**
 * Alternative-UX calculator (/v2). Same feeding math as the homepage, but with
 * the element placement from togwaarde: sectioned input cards, a live sticky
 * result panel on desktop, and a fixed result bar on mobile. Flesvoeding's own
 * colours and radius are kept (rounded-2xl, primary teal, gray borders).
 */

const AGE_OPTIONS: { value: AgeCategory; label: string }[] = [
  { value: '0-1', label: '0-1 mnd' },
  { value: '1', label: '1-3 mnd' },
  { value: '3', label: '3-6 mnd' },
  { value: '6', label: '6+ mnd' }
]

const FEEDING_OPTIONS = [4, 5, 6, 7, 8, 9, 10]

function Section({
  icon,
  title,
  subtitle,
  value,
  children
}: {
  icon: React.ReactNode
  title: string
  subtitle?: string
  value?: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-start gap-3 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-medium text-gray-900 leading-snug">{title}</h3>
            {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
          </div>
        </div>
        {value && <span className="text-xl font-bold text-primary flex-shrink-0">{value}</span>}
      </div>
      {children}
    </div>
  )
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`py-2.5 px-3 rounded-xl text-sm font-medium border transition-all ${
        active
          ? 'bg-primary text-white border-primary'
          : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-primary'
      }`}
    >
      {children}
    </button>
  )
}

function ResultBody({ results, hint }: { results: ReturnType<typeof computeFeeding>; hint: string }) {
  if (!results) {
    return (
      <div className="text-center py-6">
        <Milk className="w-10 h-10 mx-auto mb-3 text-primary/40" />
        <p className="text-sm text-gray-600">{hint}</p>
      </div>
    )
  }
  const schepjes = (results.recommendedAmount / FEEDING_MEASUREMENTS.SCOOP_SIZE_ML).toFixed(1)
  return (
    <>
      <div className="text-center mb-4">
        <div className="text-[11px] uppercase tracking-wide text-gray-500 mb-1">Per voeding</div>
        <div className="text-4xl font-bold text-primary leading-none">{results.recommendedAmount} ml</div>
        <div className="text-xs text-gray-500 mt-1">
          {schepjes} schepjes poeder · bij groeispurt tot {results.maxAmount} ml
        </div>
      </div>
      <div className="flex items-stretch gap-3 border-t border-gray-200 pt-4">
        <div className="flex-1 text-center">
          <div className="text-[11px] uppercase tracking-wide text-gray-500 mb-1">Per dag</div>
          <div className="text-2xl font-bold text-gray-900 leading-none">{results.dailyAmount} ml</div>
        </div>
        <div className="w-px bg-gray-200" />
        <div className="flex-1 text-center">
          <div className="text-[11px] uppercase tracking-wide text-gray-500 mb-1">Voedingen</div>
          <div className="text-2xl font-bold text-gray-900 leading-none">{results.feedingsPerDay}×</div>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-3 text-center">
        Gebaseerd op {results.mlPerKg} ml/kg per dag ({results.weightKg} kg)
      </p>
    </>
  )
}

export default function FlesCalculatorV2() {
  const [ageMonths, setAgeMonths] = useState<AgeCategory>('0-1')
  const [isPremature, setIsPremature] = useState(false)
  const [weight, setWeight] = useState('')
  const [feedingsPerDay, setFeedingsPerDay] = useState('7')
  const [gestationalAge, setGestationalAge] = useState('')
  const [birthDate, setBirthDate] = useState('')

  const results = useMemo(
    () => computeFeeding({ weight, ageMonths, feedingsPerDay, isPremature, gestationalAge, birthDate }),
    [weight, ageMonths, feedingsPerDay, isPremature, gestationalAge, birthDate]
  )

  const ageLabel = isPremature
    ? 'Prematuur'
    : AGE_OPTIONS.find(o => o.value === ageMonths)?.label || ''

  // Context-aware empty-state hint: tell the user what is actually missing.
  const missingHint = !weight || parseFloat(weight) <= 0
    ? 'Vul het gewicht in en je ziet hier direct hoeveel flesvoeding je baby nodig heeft.'
    : isPremature && (!gestationalAge || !birthDate)
      ? 'Vul de zwangerschapsduur en geboortedatum in voor de premature berekening.'
      : 'Vul de gegevens in voor je resultaat.'

  const schedule = results ? generateFeedingSchedule(results.feedingsPerDay, results.recommendedAmount) : null

  return (
    <div className="relative pb-40 lg:pb-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Flesvoeding Calculator</h1>
          <p className="text-sm text-gray-500">Vul de gegevens in, je resultaat rekent live mee.</p>
        </div>

        {/* Hot-weather hydration notice (shows only at warm temperatures) */}
        <div className="max-w-2xl mx-auto">
          <WarmWeerAlert ageMonths={isPremature ? 'premature' : ageMonths} />
        </div>

        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-6 lg:items-start">
          {/* Left column: inputs */}
          <div className="space-y-4">
            {/* Leeftijd */}
            <Section icon={<Baby className="w-5 h-5" />} title="Leeftijd" subtitle="Kies de leeftijd van je baby" value={ageLabel}>
              <div className="grid grid-cols-4 gap-2">
                {AGE_OPTIONS.map(o => (
                  <Chip key={o.value} active={!isPremature && ageMonths === o.value} onClick={() => { setIsPremature(false); setAgeMonths(o.value) }}>
                    {o.label}
                  </Chip>
                ))}
              </div>
              <label className="mt-3 flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input type="checkbox" checked={isPremature} onChange={e => setIsPremature(e.target.checked)} className="w-4 h-4" />
                <span>Mijn baby is prematuur geboren</span>
              </label>

              {isPremature && (
                <div className="mt-4 border-t border-gray-200 pt-4 space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Zwangerschapsduur bij geboorte (weken)</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      <input
                        type="number" min={24} max={42} inputMode="numeric"
                        value={gestationalAge}
                        onChange={e => setGestationalAge(e.target.value)}
                        placeholder="bijv. 34"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary outline-none text-gray-800"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Geboortedatum</label>
                    <input
                      type="date"
                      value={birthDate}
                      onChange={e => setBirthDate(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary outline-none text-gray-800"
                    />
                  </div>
                </div>
              )}
            </Section>

            {/* Gewicht */}
            <Section icon={<Scale className="w-5 h-5" />} title="Gewicht" subtitle="Het actuele gewicht van je baby" value={weight ? `${weight} kg` : undefined}>
              <div className="relative">
                <input
                  type="number" min={0} step="0.1" inputMode="decimal"
                  value={weight}
                  onChange={e => setWeight(e.target.value)}
                  placeholder="bijv. 4.5"
                  className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary outline-none text-gray-800 placeholder:text-gray-400"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">kg</span>
              </div>
            </Section>

            {/* Aantal voedingen */}
            <Section icon={<Clock className="w-5 h-5" />} title="Aantal voedingen" subtitle="Hoe vaak per dag" value={`${feedingsPerDay}×`}>
              <div className="grid grid-cols-7 gap-2">
                {FEEDING_OPTIONS.map(n => (
                  <Chip key={n} active={feedingsPerDay === String(n)} onClick={() => setFeedingsPerDay(String(n))}>
                    {n}
                  </Chip>
                ))}
              </div>
            </Section>

            {/* Notes / warnings */}
            {results?.isNewborn && (
              <div className="bg-amber-50 rounded-2xl border border-amber-200 p-4 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-amber-700">
                  Eerste dagen: start met 10-15 ml per voeding en verhoog dagelijks met ongeveer 10 ml. De berekening is het streefdoel, niet dag 1.
                </p>
              </div>
            )}
            {results?.isPremature && (
              <div className="bg-amber-50 rounded-2xl border border-amber-200 p-4 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-amber-700">
                  Voor een premature baby is begeleiding door de kinderarts en diëtist essentieel. Gebruik dit alleen als indicatie.
                </p>
              </div>
            )}
            {results && results.specialNotes.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
                <ul className="space-y-2">
                  {results.specialNotes.map((note, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1.5" />
                      <span className="text-sm text-gray-600">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Voedingsschema */}
            {results && schedule && (
              <Section icon={<Clock className="w-5 h-5" />} title="Voorbeeldschema" subtitle="Flexibel aan te passen aan jullie ritme">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {schedule.map((item, index) => (
                    <div key={index} className="flex items-center justify-between px-3 py-2 rounded-xl bg-gray-50 border border-gray-200">
                      <span className="text-sm text-gray-600">{item.time}</span>
                      <span className="text-sm font-medium text-gray-800">{item.amount}</span>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            <p className="text-xs text-gray-500 flex items-start gap-1.5">
              <Info className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
              Een hulpmiddel op basis van de richtlijn van het Voedingscentrum (150 ml/kg). Vervangt geen medisch advies.
            </p>
          </div>

          {/* Right column: sticky result panel (desktop) */}
          <div className="hidden lg:block">
            <div className="lg:sticky lg:top-6 rounded-2xl border-2 border-primary/30 bg-white shadow-md p-6">
              <ResultBody results={results} hint={missingHint} />
              <Link
                href="/"
                className="mt-5 inline-flex items-center justify-center w-full gap-2 text-sm font-medium text-primary border border-gray-200 rounded-xl py-2.5 hover:border-primary transition-colors"
              >
                Volledige calculator met schema
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile fixed result bar */}
      <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 p-3 pointer-events-none">
        <div className="max-w-xl mx-auto pointer-events-auto rounded-2xl border-2 border-primary/30 bg-white shadow-[0_-6px_28px_rgba(0,0,0,0.16)] p-4">
          {results ? (
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-[11px] uppercase tracking-wide text-gray-500">Per voeding</div>
                <div className="text-xl font-bold text-primary leading-none">{results.recommendedAmount} ml</div>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="text-center">
                  <div className="text-[11px] uppercase tracking-wide text-gray-500">Per dag</div>
                  <div className="text-lg font-bold text-gray-900 leading-none">{results.dailyAmount} ml</div>
                </div>
                <div className="w-px h-8 bg-gray-200" />
                <div className="text-center">
                  <div className="text-[11px] uppercase tracking-wide text-gray-500">Voedingen</div>
                  <div className="text-lg font-bold text-gray-900 leading-none">{results.feedingsPerDay}×</div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-600 text-center">{missingHint}</p>
          )}
        </div>
      </div>
    </div>
  )
}
