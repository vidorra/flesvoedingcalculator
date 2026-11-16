import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Baby, AlertTriangle } from 'lucide-react'
import Layout from '../../../components/Layout'
import KennisbankSidebar from '../../../components/KennisbankSidebar'
import AffiliateProductWidget from '../../../components/AffiliateProductWidget'
import FlesCalculatorV2 from '../../../components/calculator-v2/FlesCalculatorV2'
import { generateFAQSchema, generateBreadcrumbSchema } from '../../../lib/structured-data'
import { feedingRow, weightSteps, nl, scoopsLabel, scheduleTimes } from '../../../lib/feeding-table'
import { FEEDING_AMOUNTS } from '../../../lib/feeding-constants'
import {
  LEEFTIJD_PAGINAS,
  GOED_OM_TE_WETEN,
  BRONNEN,
  BRONNEN_DATUM,
  getLeeftijdPagina,
  type BronId,
  type LeeftijdPagina
} from '../../../lib/leeftijd-paginas'

const SITE = 'https://flesvoedingcalculator.nl'
const CARD = 'bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6'

export const dynamicParams = false

export function generateStaticParams() {
  return LEEFTIJD_PAGINAS.map((p) => ({ leeftijd: p.slug }))
}

type Props = { params: Promise<{ leeftijd: string }> }

export async function generateMetadata({ params }: Props) {
  const { leeftijd } = await params
  const pagina = getLeeftijdPagina(leeftijd)
  if (!pagina) return {}
  return {
    title: `Baby ${pagina.label}: hoeveel ml flesvoeding en hoe vaak? | FlesvoedingCalculator.nl`,
    description: pagina.metaDescription,
    alternates: { canonical: `/voedingsschemas/${pagina.slug}/` }
  }
}

const floorHalf = (n: number) => Math.floor(n * 2) / 2
const ceilHalf = (n: number) => Math.ceil(n * 2) / 2
const roundTenth = (n: number) => Math.round(n * 10) / 10

/** Alle getallen voor de pagina, uit dezelfde rekenregel als de calculator. */
function bereken(p: LeeftijdPagina) {
  const ageMonths = p.weken / 4.345
  const { jongens, meisjes } = p.gewicht
  const minN = Math.min(...p.voedingen)
  const maxN = Math.max(...p.voedingen)

  const laag = meisjes.p15
  const hoog = jongens.p85
  const dagLaag = feedingRow(laag, maxN, ageMonths).daily
  const dagHoog = feedingRow(hoog, minN, ageMonths).daily
  const voedingLaag = feedingRow(laag, maxN, ageMonths).perFeed
  const voedingHoog = feedingRow(hoog, minN, ageMonths).perFeed

  const gewichten = weightSteps(
    floorHalf(Math.min(meisjes.p3, jongens.p3)),
    ceilHalf(Math.max(meisjes.p97, jongens.p97))
  )
  const rijen = gewichten.map((w) => ({
    weightKg: w,
    daily: feedingRow(w, minN, ageMonths).daily,
    perVoeding: p.voedingen.map((n) => feedingRow(w, n, ageMonths))
  }))
  const capVanaf = rijen.find((r) => r.daily >= FEEDING_AMOUNTS.MAX_DAILY_NORMAL)?.weightKg

  const voorbeeldGewicht = roundTenth((jongens.p50 + meisjes.p50) / 2)
  const voorbeeld = feedingRow(voorbeeldGewicht, p.voorbeeldVoedingen, ageMonths)

  return { laag, hoog, dagLaag, dagHoog, voedingLaag, voedingHoog, rijen, capVanaf, voorbeeldGewicht, voorbeeld }
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

export default async function LeeftijdPage({ params }: Props) {
  const { leeftijd } = await params
  const pagina = getLeeftijdPagina(leeftijd)
  if (!pagina) notFound()

  const c = bereken(pagina)
  const { label, ookWel } = pagina
  const naam = ookWel && !ookWel.startsWith('ongeveer') ? `${label} (${ookWel})` : label

  const gesorteerd = [...LEEFTIJD_PAGINAS].sort((a, b) => a.weken - b.weken)
  const index = gesorteerd.findIndex((p) => p.slug === pagina.slug)
  const vorige = gesorteerd[index - 1]
  const volgende = gesorteerd[index + 1]

  const kortAntwoord =
    `De meeste baby's van ${label} wegen tussen ${nl(c.laag)} en ${nl(c.hoog)} kg (WHO). ` +
    `Met de vuistregel van 150 ml per kilo per dag drinken zij ongeveer ${c.dagLaag} tot ${c.dagHoog} ml per dag, ` +
    `verdeeld over ${Math.min(...pagina.voedingen)} tot ${Math.max(...pagina.voedingen)} voedingen: ` +
    `${c.voedingLaag} tot ${c.voedingHoog} ml per voeding.`

  const faqs = [
    {
      question: `Hoeveel ml flesvoeding drinkt een baby van ${label}?`,
      answer: `${kortAntwoord} Reken met het echte gewicht van je baby, de ene dag drinkt je baby ook meer dan de andere.`
    },
    { question: `Hoe vaak drinkt een baby van ${label}?`, answer: pagina.hoeVaak.tekst },
    ...pagina.faq
  ]

  const breadcrumbs = [
    { name: 'Home', url: `${SITE}/` },
    { name: "Voedingsschema's", url: `${SITE}/voedingsschemas/` },
    { name: `Baby ${label}`, url: `${SITE}/voedingsschemas/${pagina.slug}/` }
  ]

  const alleBronnen = Array.from(
    new Set<BronId>([
      'who',
      ...pagina.hoeVaak.bronnen,
      ...pagina.feiten.flatMap((f) => f.bronnen),
      ...GOED_OM_TE_WETEN.flatMap((f) => f.bronnen),
      ...(c.capVanaf !== undefined ? (['jgz-voeding'] as BronId[]) : [])
    ])
  )

  const sidebarImages = [
    { src: '/drinkende-baby.webp', alt: `Baby van ${label} drinkt uit de fles`, caption: 'Geef de fles op verzoek' },
    { src: '/slapende-baby-2.webp', alt: 'Slapende baby', caption: 'Na de fles even rust' }
  ]

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            <div>
              <div className="text-sm text-gray-500 mb-2">Voedingsschema&apos;s • Per leeftijd</div>
              <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <Baby className="w-6 h-6 mr-3 text-primary flex-shrink-0" />
                Hoeveel flesvoeding heeft een baby van {naam} nodig?
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Hoeveel ml per dag en per voeding, uitgerekend per gewicht, en hoe vaak een baby van {label} drinkt.
                {ookWel && ookWel.startsWith('ongeveer') && ` ${label[0].toUpperCase()}${label.slice(1)} is ${ookWel}.`}
                {' '}Onder de tabel kun je het uitrekenen met het gewicht van je eigen baby.
              </p>
            </div>

            <section className={CARD}>
              <h2 className="text-lg font-semibold text-primary mb-4">Kort antwoord</h2>
              <p className="text-gray-700 leading-relaxed">{kortAntwoord}</p>
              <Bronnen ids={['who', 'vc-hoeveel']} />
            </section>

            <section className={CARD}>
              <h2 className="text-lg font-semibold text-primary mb-4">Flesvoeding per gewicht op {label}</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-white">
                      <th className="border border-gray-300 px-4 py-2 text-left">Gewicht</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Per dag</th>
                      {pagina.voedingen.map((n) => (
                        <th key={n} className="border border-gray-300 px-4 py-2 text-left">
                          {n} voedingen
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {c.rijen.map((r, i) => (
                      <tr key={r.weightKg} className={i % 2 === 1 ? 'bg-white' : undefined}>
                        <td className="border border-gray-300 px-4 py-2 font-semibold whitespace-nowrap">{nl(r.weightKg, 1)} kg</td>
                        <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">
                          {r.daily} ml{c.capVanaf !== undefined && r.weightKg >= c.capVanaf ? '*' : ''}
                        </td>
                        {r.perVoeding.map((v, j) => (
                          <td key={pagina.voedingen[j]} className="border border-gray-300 px-4 py-2 whitespace-nowrap">
                            {v.perFeed} ml
                            <span className="block text-sm text-gray-500">{scoopsLabel(v.scoops)} schepjes</span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p>
                  WHO-mediaan op {label}: {nl(pagina.gewicht.jongens.p50)} kg bij jongens en {nl(pagina.gewicht.meisjes.p50)} kg
                  bij meisjes. De tabel loopt van het 3e tot het 97e percentiel.
                </p>
                {pagina.gewichtNoot && <p>{pagina.gewichtNoot}</p>}
                <p>
                  Per voeding afgerond op 5 ml. De schepjes zijn gerekend met 1 schepje per 30 ml water, zoals bij de
                  meeste merken. Volg altijd de verpakking van jouw merk.
                </p>
                {c.capVanaf !== undefined && (
                  <p>
                    * Vanaf {nl(c.capVanaf, 1)} kg komt de vuistregel boven 1000 ml per dag uit. De calculator rekent dan met
                    1000 ml, een oude vuistregel. Volgens de JGZ-richtlijn is er geen bewijs voor een maximum. Twijfel je
                    of je baby genoeg of te veel drinkt, vraag het dan op het consultatiebureau.
                  </p>
                )}
              </div>
              <Bronnen ids={['who', 'vc-hoeveel']} />
            </section>

            <section className={CARD}>
              <h2 className="text-lg font-semibold text-primary mb-4">Hoe vaak drinkt een baby van {label}?</h2>
              <p className="text-gray-700 leading-relaxed">{pagina.hoeVaak.tekst}</p>
              <Bronnen ids={pagina.hoeVaak.bronnen} />
            </section>
          </div>
        </div>

        <KennisbankSidebar images={sidebarImages} />
      </div>

      <div className="max-w-5xl mx-auto mt-10 mb-4">
        <h2 className="text-lg font-semibold text-primary">Reken het uit voor jouw baby</h2>
        <p className="text-gray-600">Vul het gewicht in, de leeftijd en het aantal voedingen staan al goed voor {label}.</p>
      </div>
      <FlesCalculatorV2
        simple
        variant="leeftijd"
        initialAge={pagina.initialAge}
        initialFeedings={pagina.initialFeedings}
      />

      <div className="grid grid-cols-12 gap-6 mt-4">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            <section className={CARD}>
              <h2 className="text-lg font-semibold text-primary mb-4">Voorbeeldschema voor {label}</h2>
              <p className="text-gray-600 mb-4">
                Een voorbeeld voor een baby van {nl(c.voorbeeldGewicht)} kg met {pagina.voorbeeldVoedingen} voedingen:{' '}
                {c.voorbeeld.daily} ml per dag, {c.voorbeeld.perFeed} ml per voeding. Je geeft de fles op verzoek, dus
                de tijden schuiven mee met je baby.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-white">
                      <th className="border border-gray-300 px-4 py-2 text-left">Tijd</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Hoeveelheid</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Schepjes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduleTimes(pagina.voorbeeldVoedingen).map((t, i) => (
                      <tr key={t} className={i % 2 === 1 ? 'bg-white' : undefined}>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">{t}</td>
                        <td className="border border-gray-300 px-4 py-2">{c.voorbeeld.perFeed} ml</td>
                        <td className="border border-gray-300 px-4 py-2">{scoopsLabel(c.voorbeeld.scoops)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className={CARD}>
              <h2 className="text-lg font-semibold text-primary mb-4">Wat speelt er rond {label}?</h2>
              <div className="space-y-6">
                {pagina.feiten.map((f) => (
                  <div key={f.titel}>
                    <h3 className="font-medium text-primary mb-2">{f.titel}</h3>
                    <p className="text-gray-700 leading-relaxed">{f.tekst}</p>
                    <Bronnen ids={f.bronnen} />
                  </div>
                ))}
              </div>
            </section>

            <section className={CARD}>
              <h2 className="text-lg font-semibold text-primary mb-4">Goed om te weten</h2>
              <div className="space-y-6">
                {GOED_OM_TE_WETEN.map((f) => (
                  <div key={f.titel}>
                    <h3 className="font-medium text-primary mb-2">{f.titel}</h3>
                    <p className="text-gray-700 leading-relaxed">{f.tekst}</p>
                    <Bronnen ids={f.bronnen} />
                  </div>
                ))}
              </div>
            </section>

            <section className={CARD}>
              <h2 className="text-lg font-semibold text-primary mb-4">Veelgestelde vragen</h2>
              <div className="space-y-6">
                {faqs.map((f) => (
                  <div key={f.question}>
                    <h3 className="font-medium text-primary mb-2">{f.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Let op</h3>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    De getallen op deze pagina zijn een richtlijn. Drinkt je baby slecht, groeit het niet goed of twijfel
                    je, bel dan de huisarts of het consultatiebureau.
                  </p>
                </div>
              </div>
            </div>

            <section className={CARD}>
              <h2 className="text-lg font-semibold text-primary mb-4">Verder lezen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {vorige && (
                  <Link href={`/voedingsschemas/${vorige.slug}/`} className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors bg-default">
                    <div className="font-medium text-primary">Baby van {vorige.label} →</div>
                    <div className="text-sm text-gray-600">Hoeveelheden en ritme een stap eerder</div>
                  </Link>
                )}
                {volgende && (
                  <Link href={`/voedingsschemas/${volgende.slug}/`} className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors bg-default">
                    <div className="font-medium text-primary">Baby van {volgende.label} →</div>
                    <div className="text-sm text-gray-600">Wat verandert er daarna</div>
                  </Link>
                )}
                <Link href="/voedingsschemas/" className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors bg-default">
                  <div className="font-medium text-primary">Voedingsschema per leeftijd →</div>
                  <div className="text-sm text-gray-600">Alle leeftijden in één overzicht</div>
                </Link>
                <Link href="/schepjes-calculator/" className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors bg-default">
                  <div className="font-medium text-primary">Schepjes calculator →</div>
                  <div className="text-sm text-gray-600">Hoeveel schepjes bij jouw hoeveelheid water</div>
                </Link>
                {pagina.artikelen.map((a) => (
                  <Link key={a.href} href={a.href} className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors bg-default">
                    <div className="font-medium text-primary">{a.titel} →</div>
                    <div className="text-sm text-gray-600">{a.omschrijving}</div>
                  </Link>
                ))}
              </div>
            </section>

            <section className={CARD}>
              <h2 className="text-lg font-semibold text-primary mb-4">Bronnen</h2>
              <ul className="space-y-2">
                {alleBronnen.map((id) => (
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

        <div className="col-span-12 lg:col-span-5">
          <AffiliateProductWidget pageId={`leeftijd_${pagina.slug}`} title="Handige producten" />
        </div>
      </div>

      <div className="h-36 lg:hidden" />
    </Layout>
  )
}
