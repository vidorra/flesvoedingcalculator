'use client'
import Layout from '../../../components/Layout'
import Link from 'next/link'
import { Wrench, ArrowRight, Home, CheckCircle, AlertTriangle, Heart } from 'lucide-react'

export default function VoedingstechniekenPage() {
  const preparationSteps = [
    'Was je handen grondig met zeep',
    'Check houdbaarheidsdatum van het poeder',
    'Kook water en laat afkoelen tot 40°C (of gebruik flessenwamer)',
    'Meet exact het juiste aantal ml water af',
    'Voeg poeder toe met bijgeleverde maatschep (afgestreken, niet aangedrukt)',
    'Sluit fles en schud krachtig tot poeder opgelost',
    'Controleer temperatuur op pols (moet lauw aanvoelen)'
  ]

  const babyPosition = [
    'Half rechtop (45 graden hoek)',
    'Hoofd iets hoger dan lichaam',
    'Nek recht voor slikken',
    'Nooit plat liggend voeden'
  ]

  const bottlePosition = [
    'Speen volledig gevuld met melk',
    'Geen lucht in speen (voorkomt krampen)',
    'Fles schuin houden',
    'Tempo laten bepalen door baby'
  ]

  const responsiveFeeding = [
    'Let op hongersignalen: zoekbewegingen, sabbelen op vuist',
    'Stop bij verzadiging: hoofdje wegdraaien, speen loslaten',
    'Geen dwang: baby bepaalt hoeveelheid',
    'Pauzes inlassen: voor boertje halverwege',
    'Oogcontact maken: belangrijk voor binding'
  ]

  const bondingTips = [
    'Huid-op-huid contact',
    'Oogcontact maken',
    'Rustig praten/zingen',
    'Telefoon wegleggen',
    'Voedingsmoment niet haasten',
    'Knuffelen na voeding'
  ]

  return (
    <Layout>
      <div className="space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600 flex items-center">
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          <ArrowRight className="w-4 h-4" />
          <Link href="/kennisbank" className="hover:text-blue-600">Kennisbank</Link>
          <ArrowRight className="w-4 h-4" />
          <span className="text-blue-600">Voedingstechnieken</span>
        </div>

        {/* Header */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
            <Wrench className="w-6 h-6 mr-3 text-blue-500" />
            Voedingstechnieken
          </h1>
          <p className="text-gray-600">
            Leer hoe je flesvoeding correct bereidt en geeft voor de beste ervaring voor jou en je baby.
          </p>
        </div>

        {/* Preparation Steps */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Fles klaarmaken - Stap voor stap</h2>
          <div className="space-y-3">
            {preparationSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                  {index + 1}
                </div>
                <span className="text-gray-700">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Baby Position */}
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">De juiste houding - Voor de baby</h2>
            <div className="space-y-2">
              {babyPosition.map((position, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{position}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottle Position */}
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">De juiste houding - Voor de fles</h2>
            <div className="space-y-2">
              {bottlePosition.map((position, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{position}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Responsive Feeding */}
        <div className="bg-green-50 rounded-2xl border border-green-200 p-6">
          <h2 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
            <Heart className="w-5 h-5 mr-2" />
            Responsive Feeding
          </h2>
          <p className="text-green-700 mb-4">Responsive feeding betekent dat je op de signalen van je baby let:</p>
          <div className="space-y-2">
            {responsiveFeeding.map((tip, index) => (
              <div key={index} className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-green-700 text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sterilization */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Steriliseren van flessen</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2 text-red-500" />
                Tot 6 maanden VERPLICHT:
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Uitkoken 10 minuten in pan</li>
                <li>• Stoomsterilisator (makkelijkst)</li>
                <li>• Koude sterilisatie met tabletten</li>
                <li>• Magnetron sterilisator</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Na 6 maanden:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Goed wassen in heet sop voldoende</li>
                <li>• Extra steriliseren bij ziekte</li>
                <li>• Spenen blijven steriliseren</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Binding during feeding */}
        <div className="bg-pink-50 rounded-2xl border border-pink-200 p-6">
          <h2 className="text-lg font-semibold text-pink-800 mb-4 flex items-center">
            <Heart className="w-5 h-5 mr-2" />
            Binding tijdens flesvoeding
          </h2>
          <p className="text-pink-700 mb-4">Flesvoeding is ook een moment van verbinding met je baby:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bondingTips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-2">
                <Heart className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                <span className="text-pink-700 text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Meer informatie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link 
              href="/kennisbank/hygiene-bereiding"
              className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <div className="font-medium text-gray-800">Hygiëne & Bereiding →</div>
              <div className="text-sm text-gray-600">Veilig bereiden en bewaren</div>
            </Link>
            <Link 
              href="/kennisbank/problemen-oplossen"
              className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <div className="font-medium text-gray-800">Problemen Oplossen →</div>
              <div className="text-sm text-gray-600">Hulp bij veelvoorkomende problemen</div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}