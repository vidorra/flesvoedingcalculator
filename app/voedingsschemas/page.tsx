import Link from 'next/link'
import { CalendarClock } from 'lucide-react'
import Layout from '../../components/Layout'
import KennisbankSidebar from '../../components/KennisbankSidebar'
import AffiliateProductWidget from '../../components/AffiliateProductWidget'
import SchemaMaker from './SchemaMaker'
import { generateFAQSchema, generateBreadcrumbSchema } from '../../lib/structured-data'
import { feedingRow, nl, scoopsLabel, scheduleTimes } from '../../lib/feeding-table'
import { FEEDING_AMOUNTS } from '../../lib/feeding-constants'
import { LEEFTIJD_PAGINAS, BRONNEN, BRONNEN_DATUM, type BronId } from '../../lib/leeftijd-paginas'

export const metadata = {
  title: 'Voedingsschema flesvoeding per leeftijd en gewicht | FlesvoedingCalculator.nl',
  description:
    'Hoeveel ml flesvoeding per dag en per voeding, van 1 week tot 9 maanden. Overzicht per leeftijd, voorbeelddagen met tijden en een eigen schema als PDF of in je agenda.',
  alternates: { canonical: '/voedingsschemas/' }
}

const SITE = 'https://flesvoedingcalculator.nl'
const CARD = 'bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6'
const CAP = FEEDING_AMOUNTS.MAX_DAILY_NORMAL

/** WHO-mediaan (P50) in kg; leeftijd in maanden voor de rekenregel. */
const OVERZICHT: { label: string; maanden: number; jongen: number; meisje: number; voedingen: number[]; tekst: string; slug?: string }[] = [
  { label: '1 week', maanden: 0.23, jongen: 3.5, meisje: 3.3, voedingen: [10], tekst: 'ongeveer 10' },
  { label: '2 weken', maanden: 0.46, jongen: 3.8, meisje: 3.6, voedingen: [10], tekst: 'ongeveer 10', slug: 'baby-2-weken' },
  { label: '3 weken', maanden: 0.69, jongen: 4.1, meisje: 3.8, voedingen: [10], tekst: 'ongeveer 10', slug: 'baby-3-weken' },
  { label: '4 weken', maanden: 0.92, jongen: 4.4, meisje: 4.1, voedingen: [6, 10], tekst: '6 tot 10', slug: 'baby-4-weken' },
  { label: '5 weken', maanden: 1.15, jongen: 4.7, meisje: 4.3, voedingen: [6, 10], tekst: '6 tot 10' },
  { label: '6 weken', maanden: 1.38, jongen: 4.9, meisje: 4.6, voedingen: [6, 10], tekst: '6 tot 10', slug: 'baby-6-weken' },
  { label: '7 weken', maanden: 1.61, jongen: 5.2, meisje: 4.8, voedingen: [6, 10], tekst: '6 tot 10' },
  { label: '8 weken', maanden: 1.84, jongen: 5.4, meisje: 5.0, voedingen: [6, 10], tekst: '6 tot 10', slug: 'baby-8-weken' },
  { label: '3 maanden', maanden: 3, jongen: 6.4, meisje: 5.8, voedingen: [6, 8], tekst: '6 tot 8', slug: 'baby-3-maanden' },
  { label: '4 maanden', maanden: 4, jongen: 7.0, meisje: 6.4, voedingen: [6, 8], tekst: '6 tot 8' },
  { label: '5 maanden', maanden: 5, jongen: 7.5, meisje: 6.9, voedingen: [6, 8], tekst: '6 tot 8' },
  { label: '6 maanden', maanden: 6, jongen: 7.9, meisje: 7.3, voedingen: [6], tekst: 'ongeveer 6' },
  { label: '9 maanden', maanden: 9, jongen: 8.9, meisje: 8.2, voedingen: [6], tekst: 'ongeveer 6' }
]

const VOORBEELDDAGEN = [
  { id: 'eerste-weken', titel: 'De eerste weken', gewicht: 4.0, voedingen: 9, maanden: 0 },
  { id: '1-3-maanden', titel: '1 tot 3 maanden', gewicht: 5.2, voedingen: 7, maanden: 1 },
  { id: '3-6-maanden', titel: '3 tot 6 maanden', gewicht: 6.5, voedingen: 6, maanden: 4 },
  { id: '6-12-maanden', titel: '6 tot 12 maanden', gewicht: 7.6, voedingen: 6, maanden: 6 }
]

function bereik(a: number, b: number, eenheid = 'ml') {
  return a === b ? `${a} ${eenheid}` : `${a} tot ${b} ${eenheid}`
}

function Bronnen({ ids }: { ids: BronId[] }) {
  return (
    <p className="text-sm text-gray-500 mt-2">
      Bron:{' '}
      {ids.map((id, i) => (
        <span key={id}>
          {i > 0 && ', '}
          <a href={BRONNEN[id].url} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">
            {BRONNEN[id].naam}
          </a>
        </span>
      ))}
    </p>
  )
}

const FAQS = [
  {
    question: 'Moet ik mijn baby op een vast schema voeden?',
    answer:
      'Nee. Het Voedingscentrum schrijft dat je de fles het beste op verzoek van je baby geeft en dat er geen regels of voedingsschema te geven zijn voor hoe vaak een baby flesvoeding nodig heeft. Een schema op deze pagina is een voorbeeld om een idee te krijgen van de hoeveelheden.'
  },
  {
    question: 'Hoeveel ml flesvoeding heeft een baby per dag nodig?',
    answer:
      'Het Voedingscentrum en de JGZ rekenen met ongeveer 150 ml per kilo lichaamsgewicht per dag. Een baby van 5 kilo drinkt dan ongeveer 750 ml per dag. Het Voedingscentrum noemt dat uitdrukkelijk een richtlijn en geen wet.'
  },
  {
    question: 'Hoeveel voedingen per dag krijgt een baby?',
    answer:
      'Het Voedingscentrum noemt ongeveer 10 voedingen per 24 uur in de eerste weken en ongeveer 6 rond 6 maanden. De JGZ-richtlijn noemt ongeveer 6 voedingen vanaf 1 maand. Bij minder voedingen wordt elk flesje groter, de hoeveelheid per dag blijft gelijk.'
  },
  {
    question: 'Hoe lang duurt een voeding?',
    answer: 'Volgens het Voedingscentrum duurt een voeding ongeveer 20 tot 30 minuten. Wat na een half uur over is, gooi je weg.'
  },
  {
    question: 'Is er een maximum aan flesvoeding per dag?',
    answer:
      'Vroeger werd een liter per dag als bovengrens aangehouden. Volgens de JGZ-richtlijn zijn er geen minimale of maximale hoeveelheden vastgesteld en is er geen wetenschappelijk bewijs voor die liter. Onze calculator rekent nog wel met 1000 ml als bovengrens. Twijfel je of je baby te veel of te weinig drinkt, vraag het dan op het consultatiebureau.'
  }
]

const ALLE_BRONNEN: BronId[] = ['who', 'vc-hoeveel', 'vc-hoe-geef', 'vc-klaarmaken', 'jgz-voeding']

export default function VoedingsschemasPage() {
  const rijen = OVERZICHT.map((r) => {
    const laag = feedingRow(r.meisje, Math.max(...r.voedingen), r.maanden)
    const hoog = feedingRow(r.jongen, Math.min(...r.voedingen), r.maanden)
    return { ...r, dagLaag: laag.daily, dagHoog: hoog.daily, voedingLaag: laag.perFeed, voedingHoog: hoog.perFeed }
  })

  const breadcrumbs = [
    { name: 'Home', url: `${SITE}/` },
    { name: "Voedingsschema's", url: `${SITE}/voedingsschemas/` }
  ]

  const leeftijden = [...LEEFTIJD_PAGINAS].sort((a, b) => a.weken - b.weken)

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            <div>
              <div className="text-sm text-gray-500 mb-2">Voedingsschema&apos;s • Overzicht</div>
              <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <CalendarClock className="w-6 h-6 mr-3 text-primary flex-shrink-0" />
                Voedingsschema flesvoeding: per leeftijd en gewicht
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Hoeveel ml flesvoeding een baby per dag en per voeding drinkt, van 1 week tot 9 maanden. Met voorbeelddagen
                en een eigen schema dat je als PDF bewaart of in je agenda zet.
              </p>
            </div>

            <section className={CARD}>
              <h2 className="text-lg font-semibold text-primary mb-4">Flesvoeding per leeftijd</h2>
              <p className="text-gray-600 mb-4">
                Gerekend met de WHO-mediaan van meisjes (laagste getal) en jongens (hoogste getal) en de vuistregel van
                ongeveer 150 ml per kilo per dag. Klik op een leeftijd voor een tabel per gewicht.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-white">
                      <th className="border border-gray-300 px-4 py-2 text-left">Leeftijd</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Gewicht</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Per dag</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Voedingen</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Per voeding</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rijen.map((r, i) => (
                      <tr key={r.label} className={i % 2 === 1 ? 'bg-white' : undefined}>
                        <td className="border border-gray-300 px-4 py-2 font-semibold whitespace-nowrap">
                          {r.slug ? (
                            <Link href={`/voedingsschemas/${r.slug}/`} className="text-primary hover:underline">
                              {r.label}
                            </Link>
                          ) : (
                            r.label
                          )}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">
                          {nl(r.meisje, 1)} tot {nl(r.jongen, 1)} kg
                        </td>
                        <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">
                          {bereik(r.dagLaag, r.dagHoog)}
                          {r.dagHoog >= CAP ? '*' : ''}
                          {r.maanden >= 6 ? '**' : ''}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">{r.tekst}</td>
                        <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">{bereik(r.voedingLaag, r.voedingHoog)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p>
                  Het aantal voedingen volgt de bronnen: het Voedingscentrum noemt ongeveer 10 per 24 uur in de eerste
                  weken en ongeveer 6 rond 6 maanden, de JGZ-richtlijn ongeveer 6 vanaf 1 maand.
                </p>
                <p>
                  * De calculator rekent met 1000 ml per dag als bovengrens, een oude vuistregel. Volgens de JGZ-richtlijn
                  is er geen bewijs voor een maximum.
                </p>
                <p>
                  ** Vanaf 6 maanden komen er hapjes bij. De calculator rekent dan met 100 ml per kilo. Dat is een
                  rekenregel van deze site, geen officieel getal: hoeveel melk een baby naast de hapjes drinkt, verschilt
                  sterk.
                </p>
              </div>
              <Bronnen ids={['who', 'vc-hoeveel', 'jgz-voeding']} />
            </section>

            <section className={CARD} id="schema-maken">
              <h2 className="text-lg font-semibold text-primary mb-4">Maak je eigen schema</h2>
              <p className="text-gray-600 mb-4">
                Vul het gewicht van je baby in en kies het aantal voedingen. Je krijgt de hoeveelheid per voeding en
                voorbeeldtijden, als PDF om op te hangen of als terugkerende afspraken in je agenda.
              </p>
              <SchemaMaker />
            </section>

            <section className={CARD}>
              <h2 className="text-lg font-semibold text-primary mb-4">Op verzoek of op schema?</h2>
              <p className="text-gray-700 leading-relaxed">
                Op verzoek. Het Voedingscentrum schrijft dat je de fles, net als de borst, het beste op verzoek van je baby
                geeft, en dat een baby niet keurig om de 2 of 3 uur om drinken vraagt. Veel baby&apos;s drinken in de late
                middag en vroege avond vaker, zodat ze &apos;s nachts een langere periode kunnen overbruggen. De tijden
                hieronder zijn dus een voorbeeld, geen rooster.
              </p>
              <Bronnen ids={['vc-hoe-geef', 'vc-hoeveel']} />
            </section>

            {VOORBEELDDAGEN.map((d) => {
              const rij = feedingRow(d.gewicht, d.voedingen, d.maanden)
              return (
                <section key={d.id} id={d.id} className={`${CARD} scroll-mt-24`}>
                  <h2 className="text-lg font-semibold text-primary mb-4">Voorbeelddag: {d.titel}</h2>
                  <p className="text-gray-600 mb-4">
                    Een baby van {nl(d.gewicht, 1)} kg met {d.voedingen} voedingen: {rij.daily} ml per dag,{' '}
                    {rij.perFeed} ml per voeding ({scoopsLabel(rij.scoops)} schepjes).
                    {d.maanden >= 6 && ' Naast de fles krijgt je baby op deze leeftijd ook hapjes.'}
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-white">
                          <th className="border border-gray-300 px-4 py-2 text-left">Tijd</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Hoeveelheid</th>
                        </tr>
                      </thead>
                      <tbody>
                        {scheduleTimes(d.voedingen).map((t, i) => (
                          <tr key={t} className={i % 2 === 1 ? 'bg-white' : undefined}>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">{t}</td>
                            <td className="border border-gray-300 px-4 py-2">{rij.perFeed} ml</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )
            })}

            <section className={CARD}>
              <h2 className="text-lg font-semibold text-primary mb-4">Per leeftijd</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {leeftijden.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/voedingsschemas/${p.slug}/`}
                    className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors bg-default"
                  >
                    <div className="font-medium text-primary">Baby van {p.label} →</div>
                    <div className="text-sm text-gray-600">Tabel per gewicht en wat er speelt</div>
                  </Link>
                ))}
              </div>
            </section>

            <section className={CARD}>
              <h2 className="text-lg font-semibold text-primary mb-4">Veelgestelde vragen</h2>
              <div className="space-y-6">
                {FAQS.map((f) => (
                  <div key={f.question}>
                    <h3 className="font-medium text-primary mb-2">{f.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className={CARD}>
              <h2 className="text-lg font-semibold text-primary mb-4">Verder rekenen en lezen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/" className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors bg-default">
                  <div className="font-medium text-primary">Flesvoeding calculator →</div>
                  <div className="text-sm text-gray-600">Ook voor te vroeg geboren baby&apos;s en combivoeding</div>
                </Link>
                <Link href="/schepjes-calculator/" className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors bg-default">
                  <div className="font-medium text-primary">Schepjes calculator →</div>
                  <div className="text-sm text-gray-600">Hoeveel schepjes bij jouw hoeveelheid water</div>
                </Link>
                <Link href="/kennisbank/praktische-tips/voedingsritme-opbouwen/" className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors bg-default">
                  <div className="font-medium text-primary">Voedingsritme opbouwen →</div>
                  <div className="text-sm text-gray-600">Van op verzoek naar een vast ritme</div>
                </Link>
              </div>
            </section>

            <section className={CARD}>
              <h2 className="text-lg font-semibold text-primary mb-4">Bronnen</h2>
              <ul className="space-y-2">
                {ALLE_BRONNEN.map((id) => (
                  <li key={id} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <a href={BRONNEN[id].url} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary hover:underline">
                      {BRONNEN[id].naam}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 mt-4">Geraadpleegd op {BRONNEN_DATUM}.</p>
            </section>
          </div>
        </div>

        <KennisbankSidebar
          images={[
            { src: '/flesvoeding-close-up.webp', alt: 'Flesje flesvoeding', caption: 'Per voeding afgerond op 5 ml' },
            { src: '/slapende-baby-2.webp', alt: 'Slapende baby', caption: 'Op verzoek voeden, ook \'s nachts' }
          ]}
        >
          <AffiliateProductWidget pageId="voedingsschemas" title="Handige producten" />
        </KennisbankSidebar>
      </div>
    </Layout>
  )
}
