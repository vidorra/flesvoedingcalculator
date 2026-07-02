'use client'

import Image from 'next/image'
import { Droplet, ShieldCheck, Calculator, Clock } from 'lucide-react'

/**
 * /v2 hero: centered headline + trust badges + CTA (same copy as the
 * homepage hero), flanked by floating images and two honest stat badges.
 * Calm on purpose: 4 images max, soft shadows, slight rotation, desktop only
 * (lg+); mobile stays clean and centered. Flesvoeding style (rounded-2xl,
 * primary teal, gray borders) — layout inspiration only, no new UI language.
 */
export default function V2Hero() {
  const scrollToCalculator = () => {
    document.getElementById('calculator-v2')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    // Header + main padding is ~180px, so this fills the first viewport
    // (header + hero = 100svh) on desktop for a calm, uncluttered opening.
    <section className="relative py-8 px-4 lg:py-10 lg:flex lg:flex-col lg:justify-center lg:min-h-[calc(100svh-180px)] lg:max-h-[860px]">
      {/* Floating images + stat badges (desktop only, calm) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Left side */}
        <div className="absolute left-[1vw] top-2 w-[17vw] max-w-[300px] -rotate-3">
          <Image
            src="/flesvoeding-door-mama.webp"
            alt=""
            width={450}
            height={300}
            sizes="17vw"
            className="w-full h-auto rounded-2xl border border-gray-200 shadow-md"
          />
        </div>
        <div className="absolute left-[6vw] bottom-0 w-[14vw] max-w-[260px] rotate-2">
          <Image
            src="/close-up-baby.webp"
            alt=""
            width={450}
            height={300}
            sizes="14vw"
            className="w-full h-auto rounded-2xl border border-gray-200 shadow-md"
          />
        </div>
        {/* Stat badge left */}
        <div className="absolute left-[2vw] bottom-[38%] bg-white rounded-2xl border border-gray-200 shadow-md px-4 py-3 rotate-[-2deg]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Droplet className="w-4 h-4" />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900 leading-none">150 ml</div>
              <div className="text-[11px] text-gray-500">per kg per dag</div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="absolute right-[1vw] top-4 w-[17vw] max-w-[300px] rotate-3">
          <Image
            src="/baby.webp"
            alt=""
            width={450}
            height={300}
            sizes="17vw"
            className="w-full h-auto rounded-2xl border border-gray-200 shadow-md"
          />
        </div>
        <div className="absolute right-[5vw] bottom-2 w-[14vw] max-w-[260px] -rotate-2">
          <Image
            src="/flesvoeding-close-up.webp"
            alt=""
            width={450}
            height={300}
            sizes="14vw"
            className="w-full h-auto rounded-2xl border border-gray-200 shadow-md"
          />
        </div>
        {/* Stat badge right */}
        <div className="absolute right-[2vw] bottom-[42%] bg-white rounded-2xl border border-gray-200 shadow-md px-4 py-3 rotate-[2deg]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900 leading-none">4-10×</div>
              <div className="text-[11px] text-gray-500">voedingen per dag</div>
            </div>
          </div>
        </div>
      </div>

      {/* Centered content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center lg:px-[20vw] lg:max-w-none">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 mb-4 lg:mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
            Bereken de <span className="text-primary">juiste hoeveelheid</span> flesvoeding voor uw baby
          </h1>

          <p className="text-base lg:text-lg text-gray-500 mb-6 lg:mb-8 max-w-2xl mx-auto leading-normal sm:leading-relaxed">
            Professionele calculator gebaseerd op Nederlandse richtlijnen van het Voedingscentrum.
            Krijg direct de aanbevolen hoeveelheid per voeding voor gezonde groei.
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 lg:mb-8">
            <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-primary/10 rounded-full text-primary-dark text-xs sm:text-sm font-medium">
              <Droplet className="w-5 h-5 text-primary" />
              <span>150ml per kg lichaamsgewicht</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-primary/10 rounded-full text-primary-dark text-xs sm:text-sm font-medium">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span>Officiële Nederlandse richtlijnen</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-primary/10 rounded-full text-primary-dark text-xs sm:text-sm font-medium">
              <Calculator className="w-5 h-5 text-primary" />
              <span>Gratis te gebruiken</span>
            </div>
          </div>

          <button
            onClick={scrollToCalculator}
            className="inline-flex items-center gap-2 sm:gap-3 bg-primary hover:bg-primary-hover text-white font-medium px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl transition-all"
          >
            <Calculator className="w-5 h-5" />
            <span>Start gratis berekening</span>
          </button>
        </div>
      </div>
    </section>
  )
}
