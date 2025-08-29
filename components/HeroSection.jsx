import { useState } from 'react'
import { Shield, Calendar, CheckCircle } from 'lucide-react'

export default function HeroSection() {
  const [hoveredBadge, setHoveredBadge] = useState(null)

  return (
    <section className="relative py-8 px-4">
      
      {/* Main content container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight" style={{
          letterSpacing: '-0.02em'
        }}>
          Bereken de{' '}
          <span className="text-primary">
            juiste hoeveelheid
          </span>
          {' '}flesvoeding voor uw baby
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Professionele calculator gebaseerd op Nederlandse richtlijnen van het Voedingscentrum. 
          Krijg direct de aanbevolen hoeveelheid per voeding voor gezonde groei.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div 
            className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary-dark font-medium transition-all hover:bg-primary/20"
            onMouseEnter={() => setHoveredBadge('medical')}
            onMouseLeave={() => setHoveredBadge(null)}
          >
            <Shield className="w-5 h-5 text-primary" />
            <span>150ml per kg lichaamsgewicht</span>
          </div>
          
          <div 
            className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary-dark font-medium transition-all hover:bg-primary/20"
            onMouseEnter={() => setHoveredBadge('guidelines')}
            onMouseLeave={() => setHoveredBadge(null)}
          >
            <Calendar className="w-5 h-5 text-primary" />
            <span>Officiële Nederlandse richtlijnen</span>
          </div>

          <div 
            className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary-dark font-medium transition-all hover:bg-primary/20"
            onMouseEnter={() => setHoveredBadge('gdpr')}
            onMouseLeave={() => setHoveredBadge(null)}
          >
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>Gratis te gebruiken</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-8">
          <button 
            onClick={() => {
              // Scroll to calculator section
              const calculator = document.querySelector('.bg-white\\/80.backdrop-blur.rounded-2xl') || 
                                document.querySelector('[class*="bg-white/80"]') ||
                                document.querySelector('.col-span-12.lg\\:col-span-7');
              if (calculator) {
                calculator.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg shadow-md"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
            <span>Start gratis berekening</span>
          </button>
          
        </div>

      </div>
    </section>
  )
}