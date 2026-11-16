import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { feedingRow, weightSteps, nl, scoopsLabel } from '../../lib/feeding-table'
import { FEEDING_AMOUNTS } from '../../lib/feeding-constants'
import { LEEFTIJD_PAGINAS } from '../../lib/leeftijd-paginas'

const VOEDINGEN = [6, 7, 8]

/**
 * Homepage: vaste tabel per gewicht (0 tot 6 maanden, 150 ml per kilo) en
 * links naar de leeftijdspagina's. Dezelfde rekenregel als de calculator.
 */
export default function GewichtTabel() {
  const rijen = weightSteps(3, 10).map((w) => ({
    w,
    daily: feedingRow(w, VOEDINGEN[0]).daily,
    perVoeding: VOEDINGEN.map((n) => feedingRow(w, n))
  }))
  const leeftijden = [...LEEFTIJD_PAGINAS].sort((a, b) => a.weken - b.weken)

  return (
    <section className="max-w-5xl mx-auto mt-10 px-4">
      <h2 className="text-lg font-medium text-primary mb-2">Flesvoeding per gewicht</h2>
      <p className="text-gray-600 mb-4">
        Voor baby&apos;s tot 6 maanden, met de vuistregel van ongeveer 150 ml per kilo per dag (Voedingscentrum). Per
        voeding afgerond op 5 ml, schepjes gerekend met 1 schepje per 30 ml water.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-white">
              <th className="border border-gray-300 px-4 py-2 text-left">Gewicht</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Per dag</th>
              {VOEDINGEN.map((n) => (
                <th key={n} className="border border-gray-300 px-4 py-2 text-left">{n} voedingen</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rijen.map((r, i) => (
              <tr key={r.w} className={i % 2 === 1 ? 'bg-white' : undefined}>
                <td className="border border-gray-300 px-4 py-2 font-semibold whitespace-nowrap">{nl(r.w, 1)} kg</td>
                <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">
                  {r.daily} ml{r.daily >= FEEDING_AMOUNTS.MAX_DAILY_NORMAL ? '*' : ''}
                </td>
                {r.perVoeding.map((v, j) => (
                  <td key={VOEDINGEN[j]} className="border border-gray-300 px-4 py-2 whitespace-nowrap">
                    {v.perFeed} ml
                    <span className="block text-sm text-gray-500">{scoopsLabel(v.scoops)} schepjes</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        * De calculator rekent met 1000 ml per dag als bovengrens, een oude vuistregel. Volgens de JGZ-richtlijn is er geen
        bewijs voor een maximum. Twijfel je, vraag het op het consultatiebureau.
      </p>

      <h2 className="text-lg font-medium text-primary mt-10 mb-4">Per leeftijd</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {leeftijden.map((p) => (
          <Link
            key={p.slug}
            href={`/voedingsschemas/${p.slug}/`}
            className="p-4 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-medium text-primary">Baby {p.label}</span>
              <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
            </div>
          </Link>
        ))}
        <Link
          href="/voedingsschemas/"
          className="p-4 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
        >
          <div className="flex items-center justify-between gap-2">
            <span className="font-medium text-primary">Alle leeftijden</span>
            <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
          </div>
        </Link>
      </div>
    </section>
  )
}
