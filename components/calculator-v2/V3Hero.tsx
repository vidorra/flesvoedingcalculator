'use client'

import Image from 'next/image'
import { Calculator, Droplet } from 'lucide-react'

/**
 * /v3 hero: bolder take on the v2 hero. Oversized headline up top and a
 * photo collage strip along the bottom edge (mixed shapes: circle, tilted
 * cards, a colour blob with the CTA pill), inspired by big-typography
 * editorial heroes. Flesvoeding colours only (teal, gray borders).
 */
export default function V3Hero() {
  const scrollToCalculator = () => {
    document.getElementById('calculator-v2')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative py-8 px-4 lg:py-10 lg:min-h-[calc(100svh-180px)] lg:max-h-[900px] lg:flex lg:flex-col lg:justify-between">
      {/* Headline */}
      <div className="max-w-5xl mx-auto text-center pt-2 lg:pt-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-5">
          De juiste hoeveelheid
          <br />
          <span className="text-primary">flesvoeding</span> in seconden
        </h1>
        <p className="text-base lg:text-lg text-gray-500 max-w-2xl mx-auto mb-6">
          Gratis calculator op basis van de richtlijn van het Voedingscentrum (150 ml per kg).
          Vul gewicht en leeftijd in en je ziet direct het resultaat.
        </p>
        <button
          onClick={scrollToCalculator}
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-medium px-8 py-4 rounded-xl transition-all"
        >
          <Calculator className="w-5 h-5" />
          <span>Start gratis berekening</span>
        </button>
      </div>

      {/* Collage strip along the bottom edge */}
      <div className="mt-10 lg:mt-6 flex items-end justify-center gap-4 lg:gap-6" aria-hidden="true">
        {/* Colour blob with CTA pill */}
        <div className="hidden md:flex relative w-[16vw] max-w-[240px] aspect-[4/3] bg-primary/15 rounded-[3rem] items-center justify-center -translate-y-4">
          <button
            onClick={scrollToCalculator}
            className="pointer-events-auto bg-primary hover:bg-primary-hover text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors rotate-[-4deg]"
          >
            Bereken →
          </button>
        </div>

        {/* Circle photo */}
        <div className="w-[26vw] md:w-[15vw] max-w-[230px] aspect-square rounded-full overflow-hidden border border-gray-200 shadow-md translate-y-2">
          <Image
            src="/flesvoeding-door-mama.webp"
            alt=""
            width={450}
            height={450}
            sizes="(max-width: 768px) 26vw, 15vw"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tall tilted card */}
        <div className="w-[30vw] md:w-[18vw] max-w-[280px] aspect-[4/5] rounded-2xl overflow-hidden border border-gray-200 shadow-md rotate-2 -translate-y-3">
          <Image
            src="/baby.webp"
            alt=""
            width={450}
            height={560}
            sizes="(max-width: 768px) 30vw, 18vw"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Stat chip */}
        <div className="hidden lg:flex flex-col items-start bg-white rounded-2xl border border-gray-200 shadow-md px-4 py-3 -translate-y-16 rotate-[-3deg]">
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

        {/* Wide card */}
        <div className="w-[28vw] md:w-[17vw] max-w-[260px] aspect-[5/4] rounded-2xl overflow-hidden border border-gray-200 shadow-md -rotate-2 translate-y-1">
          <Image
            src="/mother_and_baby.webp"
            alt=""
            width={450}
            height={360}
            sizes="(max-width: 768px) 28vw, 17vw"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Small card */}
        <div className="hidden md:block w-[12vw] max-w-[180px] aspect-square rounded-2xl overflow-hidden border border-gray-200 shadow-md rotate-3 -translate-y-6">
          <Image
            src="/flesvoeding-close-up.webp"
            alt=""
            width={360}
            height={360}
            sizes="12vw"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
