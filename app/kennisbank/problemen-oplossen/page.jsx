import Layout from '../../../components/Layout'
import Link from 'next/link'
import { AlertCircle, ArrowRight, Home, Thermometer, Baby, Droplets, Phone } from 'lucide-react'

export const metadata = {
  title: 'Baby Weigert Fles? Spugen? Reflux? → Oplossingen & Tips',
  description: 'Praktische oplossingen voor flesvoeding problemen. Baby weigert fles, overmatig spugen, reflux of constipatie? Directe hulp van experts.',
}

export default function ProblemenOplossenPage() {
  const bottleRefusalCauses = [
    {
      cause: 'Verkeerde temperatuur',
      icon: Thermometer,
      solutions: ['Test op pols (37°C is ideaal)', 'Gebruik flessenwarmer voor consistentie']
    },
    {
      cause: 'Speen probleem',
      icon: Baby,
      solutions: ['Probeer andere maat/vorm', 'Controleer gaatjesgrootte', 'Vervang versleten spenen']
    },
    {
      cause: 'Overgang borstvoeding',
      icon: Baby,
      solutions: ['Laat partner fles geven', 'Begin met afgekolfde melk', 'Probeer verschillende houdingen']
    }
  ]

  const refluxTips = [
    'Kleinere, frequentere voedingen',
    'Extra boertjes tussendoor',
    '30 minuten rechtop na voeding',
    'Hoofdeinde bed verhogen'
  ]

  const constipationSigns = [
    'Harde, droge ontlasting',
    'Minder dan 1x per 3 dagen',
    'Pijn bij poepen',
    'Harde buik'
  ]

  const constipationSolutions = [
    'Extra water tussen voedingen (>6 maanden)',
    'Juiste poeder-water verhouding checken',
    'Buikmassage met klok mee',
    'Fietsbewegingen met beentjes',
    'Contact arts bij aanhouden'
  ]

  const diarrheaWarnings = [
    'Meer dan 6 waterige luiers per dag',
    'Koorts boven 38.5°C',
    'Tekenen uitdroging',
    'Bloed in ontlasting'
  ]

  const diarrheaFirstAid = [
    'Blijf flesvoeding geven',
    'Extra vocht aanbieden',
    'ORS bij advies arts',
    'Let op natte luiers (min. 4 per dag)'
  ]

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
          <Link href="/kennisbank" className="hover:text-primary">Kennisbank</Link>
          <ArrowRight className="w-4 h-4" />
          <span className="text-primary">Problemen Oplossen</span>
        </div>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
            <AlertCircle className="w-6 h-6 mr-3 text-primary" />
            Flesvoeding Problemen Oplossen
          </h1>
          <p className="text-gray-600">
            Praktische oplossingen voor veelvoorkomende problemen bij flesvoeding. 
            <strong>Bij twijfel altijd contact opnemen met consultatiebureau of huisarts.</strong>
          </p>
        </div>

        {/* Baby refuses bottle */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Baby weigert de fles</h2>
          <p className="text-gray-600 mb-4">Mogelijke oorzaken & oplossingen:</p>
          
          <div className="space-y-4">
            {bottleRefusalCauses.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon className="w-5 h-5 text-primary" />
                    <h3 className="font-medium text-gray-800">{item.cause}:</h3>
                  </div>
                  <ul className="space-y-1 ml-7">
                    {item.solutions.map((solution, idx) => (
                      <li key={idx} className="text-sm text-gray-600">• {solution}</li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="font-medium text-amber-800 mb-2">Ziekte of ongemak:</h3>
            <ul className="space-y-1 text-sm text-amber-700">
              <li>• Check op oorontsteking</li>
              <li>• Kijk naar doorkomende tandjes</li>
              <li>• Raadpleeg arts bij aanhoudende weigering</li>
            </ul>
          </div>
        </div>

        {/* Reflux */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Droplets className="w-5 h-5 mr-2 text-primary" />
              Spugen en reflux
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-green-800 mb-2">Normaal spugen:</h3>
                <ul className="space-y-1 text-sm text-green-700">
                  <li>• Tot 1 jaar normaal</li>
                  <li>• Kleine hoeveelheden na voeding</li>
                  <li>• Baby groeit goed</li>
                  <li>• Geen pijn signalen</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-red-800 mb-2">Problematische reflux:</h3>
                <ul className="space-y-1 text-sm text-red-700">
                  <li>• Grote hoeveelheden</li>
                  <li>• Pijn bij/na voeding</li>
                  <li>• Slecht groeien</li>
                  <li>• Huilen bij platliggen</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-default rounded-2xl border border-gray-200 p-6">
            <h3 className="font-medium text-primary mb-3">Tips bij spugen:</h3>
            <div className="space-y-2">
              {refluxTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Constipation */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Constipatie bij flesvoeding</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-red-800 mb-3">Signalen:</h3>
              <div className="space-y-2">
                {constipationSigns.map((sign, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-red-700 text-sm">{sign}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-green-800 mb-3">Oplossingen:</h3>
              <div className="space-y-2">
                {constipationSolutions.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-green-700 text-sm">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Diarrhea */}
        <div className="bg-red-50 rounded-2xl border border-red-200 p-6">
          <h2 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
            <Phone className="w-5 h-5 mr-2" />
            Diarree - Wanneer arts bellen
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-red-800 mb-3">Alarmerende signalen:</h3>
              <div className="space-y-2">
                {diarrheaWarnings.map((warning, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-red-700 text-sm font-medium">{warning}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-3">Eerste hulp:</h3>
              <div className="space-y-2">
                {diarrheaFirstAid.map((aid, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{aid}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Meer informatie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link 
              href="/kennisbank/veiligheid"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-gray-800">Veiligheidsrichtlijnen →</div>
              <div className="text-sm text-gray-600">Wanneer direct hulp zoeken</div>
            </Link>
            <Link 
              href="/faq"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-gray-800">Veelgestelde Vragen →</div>
              <div className="text-sm text-gray-600">Nog meer antwoorden</div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}