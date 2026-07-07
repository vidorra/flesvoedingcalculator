'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Calculator, Droplet, ArrowRight, ArrowUpRight } from 'lucide-react'

/**
 * /v4 hero: full-bleed brand-colour block with white display typography and
 * floating cards, inspired by bold colour-field heroes (Skillbridge-style).
 * Uses the flesvoeding teal as the colour field; cards keep the site's
 * rounded-2xl / gray-border language.
 */
export default function V4Hero() {
  const scrollToCalculator = () => {
    document.getElementById('calculator-v2')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative py-4 lg:py-6">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-10 lg:px-12 lg:py-14 lg:min-h-[calc(100svh-220px)] lg:max-h-[820px]">
        {/* Decorative soft shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-32 left-1/4 w-[28rem] h-[28rem] bg-white/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10 h-full">
          {/* Left: display headline + photo card */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full mb-6">
                <Droplet className="w-4 h-4" />
                <span>150 ml per kg · richtlijn Voedingscentrum</span>
              </div>

              <h1 className="text-white font-bold tracking-tight leading-[1.02] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6">
                Bereken
                <br />
                de juiste
                <br />
                hoeveelheid<span className="text-white/60">.</span>
              </h1>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <p className="text-white/85 max-w-sm text-sm lg:text-base">
                  Gratis flesvoeding calculator voor Nederlandse ouders. Direct resultaat, zonder account.
                </p>
                <Link
                  href="/uitleg-calculator"
                  className="inline-flex items-center gap-1.5 border border-white/50 hover:bg-white/10 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
                >
                  Over de calculator
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Photo card on the colour field */}
            <div className="hidden lg:flex items-end gap-4">
              <div className="w-64 rounded-2xl overflow-hidden shadow-lg rotate-[-2deg]">
                <Image
                  src="/drinkende-baby.webp"
                  alt="Moeder geeft flesvoeding"
                  width={450}
                  height={300}
                  sizes="260px"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="bg-white/15 backdrop-blur rounded-2xl px-4 py-3 text-white rotate-[2deg]">
                <div className="text-2xl font-bold leading-none">4-10×</div>
                <div className="text-xs text-white/80 mt-1">voedingen per dag</div>
              </div>
            </div>
          </div>

          {/* Right: white quick-start card + stat tile */}
          <div className="mt-8 lg:mt-0 flex flex-col gap-4 lg:justify-center">
            <div className="bg-white rounded-2xl shadow-lg p-5">
              <h2 className="text-base font-medium text-gray-900 mb-3">Direct beginnen</h2>
              <ul className="space-y-2 mb-4 text-sm">
                <li><Link href="/kennisbank" className="text-gray-600 hover:text-primary transition-colors">Kennisbank</Link></li>
                <li><Link href="/voedingsschemas" className="text-gray-600 hover:text-primary transition-colors">Voedingsschema&apos;s</Link></li>
                <li><Link href="/schepjes-calculator" className="text-gray-600 hover:text-primary transition-colors">Schepjes calculator</Link></li>
                <li><Link href="/faq" className="text-gray-600 hover:text-primary transition-colors">Veelgestelde vragen</Link></li>
              </ul>
              <button
                onClick={scrollToCalculator}
                className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-5 py-3 rounded-xl transition-colors"
              >
                Start berekening
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white/15 backdrop-blur rounded-2xl p-5 text-white">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                <Calculator className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold leading-none">100%</div>
              <div className="text-sm text-white/80 mt-1">gratis, zonder account</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
