'use client'

import Image from 'next/image'
import { Calculator, Droplet, Clock, ShieldCheck } from 'lucide-react'

/**
 * /v3 hero: bolder take on the v2 hero. Oversized headline up top and a
 * photo collage along the bottom, gusta.studio-inspired spacing: large
 * staggered images with generous air, especially on mobile. Flesvoeding
 * style kept (teal, rounded-2xl cards, gray borders, honest stat badges).
 */

function StatBadge({ icon, value, label, className = '' }: { icon: React.ReactNode; value: string; label: string; className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 bg-white rounded-2xl border border-gray-200 shadow-md px-4 py-3 ${className}`}>
      <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-lg font-bold text-gray-900 leading-none">{value}</div>
        <div className="text-[11px] text-gray-500">{label}</div>
      </div>
    </div>
  )
}

export default function V3Hero() {
  const scrollToCalculator = () => {
    document.getElementById('calculator-v2')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative pt-8 px-4 lg:pt-10 lg:pb-0 lg:min-h-[calc(100svh-180px)] lg:max-h-[900px] lg:flex lg:flex-col lg:justify-between">
      {/* Headline */}
      <div className="max-w-5xl mx-auto text-center pt-2 lg:pt-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tight mb-5">
          De juiste hoeveelheid
          <br />
          <span className="text-primary">flesvoeding</span> in seconden
        </h1>
        <p className="text-base lg:text-lg text-gray-500 max-w-2xl mx-auto mb-6">
          Gratis calculator op basis van de richtlijn van het Voedingscentrum (150 ml per kg).
          Vul gewicht en leeftijd in en je ziet direct het resultaat.
        </p>
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
          <div className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary-dark text-xs sm:text-sm font-medium">
            <Droplet className="w-4 h-4 text-primary" />
            <span>150ml per kg lichaamsgewicht</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary-dark text-xs sm:text-sm font-medium">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Officiële Nederlandse richtlijnen</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary-dark text-xs sm:text-sm font-medium">
            <Calculator className="w-4 h-4 text-primary" />
            <span>Gratis te gebruiken</span>
          </div>
        </div>

        <button
          onClick={scrollToCalculator}
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-medium px-8 py-4 rounded-xl transition-all"
        >
          <Calculator className="w-5 h-5" />
          <span>Start gratis berekening</span>
        </button>
      </div>

      {/* Mobile collage: kept deliberately clean - one lead photo, with the
          stat badges and the two center images hidden on mobile. */}
      <div className="md:hidden mt-12" aria-hidden="true">
        <div className="w-[64vw] max-w-[320px] mx-auto rotate-[-2deg] rounded-2xl overflow-hidden border border-gray-200 shadow-md">
          <Image
            src="/flesvoeding-door-mama.webp"
            alt=""
            width={450}
            height={340}
            sizes="64vw"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Desktop collage strip: big cards on the outside hugging the bottom
          edge, smaller cards inside lifted a bit higher */}
      <div className="hidden md:flex mt-10 lg:mt-6 items-end justify-center gap-4 lg:gap-6 lg:translate-y-3" aria-hidden="true">
        {/* Tall card (large, far left, bottom) */}
        <div className="w-[18vw] max-w-[280px] aspect-[4/5] rounded-2xl overflow-hidden border border-gray-200 shadow-md rotate-[-2deg] translate-y-2">
          <Image
            src="/baby.webp"
            alt=""
            width={450}
            height={560}
            sizes="18vw"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Stat chip */}
        <StatBadge icon={<Droplet className="w-4 h-4" />} value="150 ml" label="per kg per dag" className="-translate-y-16 rotate-[-3deg]" />

        {/* Photo card (medium, inside, lifted) */}
        <div className="w-[15vw] max-w-[230px] aspect-[4/5] rounded-2xl overflow-hidden border border-gray-200 shadow-md rotate-2 -translate-y-6">
          <Image
            src="/mother_and_baby.webp"
            alt=""
            width={450}
            height={560}
            sizes="15vw"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Small card (inside, lifted a bit more) */}
        <div className="w-[12vw] max-w-[180px] aspect-square rounded-2xl overflow-hidden border border-gray-200 shadow-md rotate-[-3deg] -translate-y-10">
          <Image
            src="/flesvoeding-close-up.webp"
            alt=""
            width={360}
            height={360}
            sizes="12vw"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Stat badge */}
        <StatBadge icon={<Clock className="w-4 h-4" />} value="4-8×" label="voedingen per dag" className="-translate-y-14 rotate-[3deg]" />

        {/* Wide card (large, far right, lowest) */}
        <div className="w-[17vw] max-w-[260px] aspect-[5/4] rounded-2xl overflow-hidden border border-gray-200 shadow-md rotate-2 translate-y-4">
          <Image
            src="/flesvoeding-door-mama.webp"
            alt=""
            width={450}
            height={360}
            sizes="17vw"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
