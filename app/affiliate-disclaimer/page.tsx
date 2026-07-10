import Layout from '../../components/Layout'
import Link from 'next/link'
import { ArrowRight, Home, Handshake, Euro, RefreshCw, Info } from 'lucide-react'

export const metadata = {
  title: 'Affiliate-disclaimer | FlesvoedingCalculator.nl',
  description: 'Hoe FlesvoedingCalculator.nl werkt met affiliate links van bol.com en Amazon, en hoe de getoonde prijzen tot stand komen en actueel gehouden worden.',
  alternates: { canonical: 'https://flesvoedingcalculator.nl/affiliate-disclaimer' },
}

export default function AffiliateDisclaimerPage() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary flex items-center">
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          <ArrowRight className="w-4 h-4" />
          <span className="text-primary">Affiliate-disclaimer</span>
        </div>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
            <Handshake className="w-6 h-6 mr-3 text-primary" />
            Affiliate-disclaimer
          </h1>
          <p className="text-gray-600">
            Transparantie over de productaanbevelingen en prijzen op FlesvoedingCalculator.nl.
          </p>
        </div>

        <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Affiliate links</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            FlesvoedingCalculator.nl toont productaanbevelingen (zoals babyflessen en
            sterilisatoren) met affiliate links naar bol.com en Amazon. Koopt u iets via
            zo&apos;n link, dan ontvangen wij mogelijk een kleine commissie van de winkel.
            <strong> Dit kost u niets extra</strong>: u betaalt exact dezelfde prijs als
            wanneer u rechtstreeks naar de winkel gaat.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Met deze commissies houden we de calculator en de kennisbank gratis toegankelijk.
            De aanbevelingen selecteren we zelf op relevantie; winkels of merken hebben geen
            invloed op onze adviezen.
          </p>
        </section>

        <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
            <Euro className="w-5 h-5 mr-2 text-primary" /> Getoonde prijzen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Bij producten tonen we waar mogelijk een prijs, met daarbij de datum waarop die
            prijs voor het laatst is bijgewerkt. Zo komen die prijzen tot stand:
          </p>
          <ul className="space-y-2 mb-3">
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
              <span className="text-gray-700"><strong>bol.com-producten:</strong> de prijs wordt dagelijks automatisch bijgewerkt op basis van de productpagina van bol.com</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
              <span className="text-gray-700"><strong>Amazon-producten:</strong> de prijs wordt handmatig door ons ingevoerd en periodiek gecontroleerd</span>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Prijzen in webwinkels veranderen regelmatig. De getoonde prijs kan daarom afwijken
            van de actuele prijs in de winkel. <strong>De prijs op bol.com of Amazon op het
            moment van aankoop is altijd leidend.</strong> Aan de getoonde prijzen kunnen geen
            rechten worden ontleend.
          </p>
        </section>

        <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
            <RefreshCw className="w-5 h-5 mr-2 text-primary" /> Beschikbaarheid
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Producten kunnen uitverkocht raken of uit het assortiment verdwijnen. We controleren
            de beschikbaarheid van bol.com-producten dagelijks en verwijderen aanbiedingen die
            niet meer leverbaar zijn, maar er kan altijd korte tijd een verouderde aanbieding
            zichtbaar zijn.
          </p>
        </section>

        <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
            <Info className="w-5 h-5 mr-2 text-primary" /> Merken en vragen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Genoemde merknamen en logo&apos;s (waaronder bol.com en Amazon) zijn eigendom van hun
            respectievelijke eigenaren en worden alleen gebruikt om aan te geven bij welke winkel
            een product verkrijgbaar is.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Vragen over deze disclaimer? Neem contact op via de footer. Zie ook onze{' '}
            <Link href="/gebruiksvoorwaarden" className="text-primary hover:underline font-medium">gebruiksvoorwaarden</Link>{' '}
            en <Link href="/medische-disclaimer" className="text-primary hover:underline font-medium">medische disclaimer</Link>.
          </p>
        </section>
      </div>
    </Layout>
  )
}
