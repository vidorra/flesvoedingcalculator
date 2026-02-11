import { useState } from 'react'
import { Droplet, ShieldCheck, Calculator } from 'lucide-react'

export default function HeroSection() {
  const [hoveredBadge, setHoveredBadge] = useState(null)

  return (
    <section className="relative py-8 px-4">
      
      {/* Main content container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 mb-4 lg:mb-6 leading-tight sm:leading-tight lg:leading-tight" style={{
          letterSpacing: '-0.02em'
        }}>
          Bereken de{' '}
          <span className="text-primary">
            juiste hoeveelheid
          </span>
          {' '}flesvoeding voor uw baby
        </h1>

        {/* Subtitle */}
        <p className="text-base lg:text-lg text-gray-500 mb-6 lg:mb-8 max-w-3xl mx-auto leading-normal sm:leading-relaxed">
          Professionele calculator gebaseerd op Nederlandse richtlijnen van het Voedingscentrum. 
          Krijg direct de aanbevolen hoeveelheid per voeding voor gezonde groei.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 lg:mb-10">
          <div
            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-primary/10 rounded-full text-primary-dark text-xs sm:text-sm font-medium transition-all hover:bg-primary/20"
            onMouseEnter={() => setHoveredBadge('medical')}
            onMouseLeave={() => setHoveredBadge(null)}
          >
            <Droplet className="w-5 h-5 text-primary" />
            <span>150ml per kg lichaamsgewicht</span>
          </div>

          <div
            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-primary/10 rounded-full text-primary-dark text-xs sm:text-sm font-medium transition-all hover:bg-primary/20"
            onMouseEnter={() => setHoveredBadge('guidelines')}
            onMouseLeave={() => setHoveredBadge(null)}
          >
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span>Officiële Nederlandse richtlijnen</span>
          </div>

          <div
            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-primary/10 rounded-full text-primary-dark text-xs sm:text-sm font-medium transition-all hover:bg-primary/20"
            onMouseEnter={() => setHoveredBadge('gdpr')}
            onMouseLeave={() => setHoveredBadge(null)}
          >
            <Calculator className="w-5 h-5 text-primary" />
            <span>Gratis te gebruiken</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-6 lg:mb-8">
          <button
            onClick={() => {
              // Scroll to calculator section
              const calculator = document.querySelector('.col-span-12.lg\\:col-span-7');
              if (calculator) {
                calculator.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
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