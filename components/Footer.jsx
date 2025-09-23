'use client'
import { useState } from 'react'
import Link from 'next/link'
import ContactModal from './ContactModal'
import { Baby, Calculator, Info, BookOpen, Calendar, Users, X, AlertCircle } from 'lucide-react'

export default function Footer() {
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const navigation = [
    { href: '/', name: 'Calculator' },
    { href: '/kennisbank', name: 'Kennisbank' },
    { href: '/voedingsschemas', name: 'Voedingsschema\'s' },
    { href: '/faq', name: 'FAQ' },
    { href: '/over-ons', name: 'Over Ons' }
  ]

  return (
    <>
      {/* Disclaimer Banner */}
      {showDisclaimer && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-3">
          <div className="container mx-auto flex items-start space-x-2">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-800">
              <p className="font-semibold mb-1">Medische Disclaimer</p>
              <p>Deze calculator is alleen voor informatieve doeleinden. Raadpleeg altijd uw kinderarts of consultatiebureau voor persoonlijk advies over de voeding van uw baby.</p>
            </div>
            <button 
              onClick={() => setShowDisclaimer(false)}
              className="text-amber-600 hover:text-amber-800 ml-auto"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Baby className="w-5 h-5 text-primary" />
                <span className="font-medium text-gray-800">FlesvoedingCalculator.nl</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Betrouwbare informatie en tools voor flesvoeding, gebaseerd op Nederlandse richtlijnen.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-medium text-gray-500 mb-3">Navigatie</h3>
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Informatie */}
            <div>
              <h3 className="font-medium text-gray-500 mb-3">Informatie</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <Link href="/uitleg-calculator" className="block hover:text-primary transition-colors">Hoe werkt de calculator?</Link>
                <Link href="/informatie" className="block hover:text-primary transition-colors">Informatie</Link>
                <Link href="/medische-disclaimer" className="block hover:text-primary transition-colors">Medische disclaimer</Link>
                <Link href="/privacy-beleid" className="block hover:text-primary transition-colors">Privacy beleid</Link>
                <Link href="/gebruiksvoorwaarden" className="block hover:text-primary transition-colors">Gebruiksvoorwaarden</Link>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="block hover:text-primary transition-colors text-left"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Bronnen */}
            <div>
              <h3 className="font-medium text-gray-500 mb-3">Bronnen</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <a href="https://www.voedingscentrum.nl" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
                  Voedingscentrum
                </a>
                <a href="https://www.ncj.nl" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
                  NCJ
                </a>
                <a href="https://www.nvk.nl" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
                  NVK
                </a>
                <a href="https://www.knov.nl" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
                  KNOV
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              <p>© 2025 FlesvoedingCalculator.nl - Alle rechten voorbehouden</p>
            </div>
            <div className="text-xs text-gray-400">
              <p>Gebaseerd op richtlijnen van het Voedingscentrum en NCJ</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  )
}