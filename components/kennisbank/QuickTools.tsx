import Link from 'next/link'
import { Info, ArrowRight } from 'lucide-react'

/**
 * QuickTools - Lazy-loaded tools section component
 *
 * Separated from main page to enable code splitting and lazy loading.
 * Tools section is secondary navigation that appears below the fold.
 *
 * Performance: Reduces initial bundle size by ~1KB
 */
export default function QuickTools() {
  return (
    <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
      <h2 className="font-medium text-primary mb-4 flex items-center">
        <Info className="w-5 h-5 mr-2 text-primary" />
        Handige Tools
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="/"
          className="p-4 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-gray-200 hover:border-primary transition-colors"
        >
          <h3 className="font-medium text-primary mb-2">Flesvoeding Calculator</h3>
          <p className="text-sm text-gray-600 mb-3">Bereken persoonlijke hoeveelheden per voeding</p>
          <div className="text-primary hover:text-primary-dark font-medium text-sm flex items-center">
            Bereken nu <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </Link>
        <Link
          href="/voedingsschemas"
          className="p-4 rounded-xl bg-gradient-to-br from-rose-50 to-rose-100 border border-gray-200 hover:border-primary transition-colors"
        >
          <h3 className="font-medium text-primary mb-2">Voedingsschema's</h3>
          <p className="text-sm text-gray-600 mb-3">Interactieve schema's per leeftijdsgroep</p>
          <div className="text-primary hover:text-primary-dark font-medium text-sm flex items-center">
            Bekijk schema's <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </Link>
        <Link
          href="/infographics"
          className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-gray-200 hover:border-primary transition-colors"
        >
          <h3 className="font-medium text-primary mb-2">Visuele Guides</h3>
          <p className="text-sm text-gray-600 mb-3">Stap-voor-stap infographics en tijdlijnen</p>
          <div className="text-primary hover:text-primary-dark font-medium text-sm flex items-center">
            Bekijk guides <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </Link>
      </div>
    </div>
  )
}
