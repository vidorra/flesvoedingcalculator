import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/**
 * Curated internal links from the homepage (the site's strongest page) to the
 * kennisbank articles that have high impressions but low CTR in Search Console.
 * Passing link authority from the homepage helps these pages get crawled,
 * indexed and ranked. Kept as visible, useful content for readers too.
 */
const ARTICLES = [
  {
    href: '/kennisbank/soorten-flesvoeding/verschil-startvoeding-opvolgmelk',
    title: 'Verschil Nutrilon 1, 2 en 3',
    desc: 'Startvoeding, opvolgmelk en peutermelk uitgelegd'
  },
  {
    href: '/kennisbank/soorten-flesvoeding/wanneer-overstappen-opvolgmelk',
    title: 'Wanneer overstappen op opvolgmelk (2 en 3)?',
    desc: 'Het juiste moment en of het nodig is'
  },
  {
    href: '/kennisbank/financiele-aspecten/kosten-van-flesvoeding',
    title: 'Wat kost flesvoeding per maand?',
    desc: 'Kosten per merk en hoe je bespaart'
  },
  {
    href: '/kennisbank/basis-flesvoeding/eerste-keer-flesvoeding-geven',
    title: 'Voor het eerst flesvoeding geven',
    desc: 'Stap voor stap beginnen met de fles'
  },
  {
    href: '/kennisbank/problemen-oplossen/spugen-na-de-fles',
    title: 'Spugen na de fles',
    desc: 'Wanneer is het normaal en wanneer niet?'
  },
  {
    href: '/kennisbank/soorten-flesvoeding',
    title: 'Soorten flesvoeding',
    desc: 'Alle typen flesvoeding op een rij'
  },
  {
    href: '/schepjes-calculator',
    title: 'Hoeveel schepjes flesvoeding?',
    desc: 'Bereken schepjes per ml (1 schepje per 30 ml)'
  }
]

export default function PopularArticles() {
  return (
    <section className="max-w-5xl mx-auto mt-10 px-4">
      <h2 className="text-lg font-medium text-primary mb-4">Veelgelezen in de kennisbank</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {ARTICLES.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            className="p-4 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-medium text-primary">{a.title}</span>
              <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
            </div>
            <div className="text-sm text-gray-600 mt-1">{a.desc}</div>
          </Link>
        ))}
      </div>
      <div className="mt-4">
        <Link href="/kennisbank" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
          Naar de hele kennisbank
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </section>
  )
}
