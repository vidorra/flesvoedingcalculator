import Layout from '../../../components/Layout'
import Link from 'next/link'
import { BookOpen, CheckCircle, ArrowRight, Home } from 'lucide-react'

export const metadata = {
  title: 'Flesvoeding Basis: Alles wat Nederlandse Ouders Moeten Weten | 2025 Guide',
  description: 'Complete gids over flesvoeding in Nederland. Wanneer kiezen voor flesvoeding? Voordelen, nadelen en officiële richtlijnen van het Voedingscentrum.',
}

export default function BasisFlesvoedingPage() {
  const benefits = [
    'Flexibiliteit: Partner kan ook voeden',
    'Meetbaar: Je weet exact hoeveel baby drinkt',
    'Planning: Makkelijker te plannen',
    'Werkhervatting: Eenvoudiger bij terugkeer naar werk',
    'Medicatie: Geen zorgen over medicijnen in moedermelk'
  ]

  const guidelines = [
    '150ml per kg lichaamsgewicht per 24 uur (startpunt)',
    'Maximum 1000ml per dag voor baby\'s tot 1 jaar',
    'Aanpassing op basis van groeicurve en tevredenheid baby',
    'Altijd individueel bekijken met jeugdverpleegkundige'
  ]

  const reasons = [
    'Als borstvoeding niet mogelijk of gewenst is',
    'Bij onvoldoende melkproductie',
    'Als aanvulling op borstvoeding (combivoeiding)',
    'Bij medische redenen',
    'Persoonlijke voorkeur van ouders'
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
          <span className="text-primary">Basis Flesvoeding</span>
        </div>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-primary" />
            Complete Gids Flesvoeding voor Nederlandse Ouders
          </h1>
          <p className="text-gray-600">
            Alles over flesvoeding: van eerste keuze tot dagelijkse praktijk. Betrouwbare informatie gebaseerd op Nederlandse richtlijnen van het Voedingscentrum en JGZ.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* What is bottle feeding */}
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Wat is flesvoeding?</h2>
            <p className="text-gray-600 leading-relaxed">
              Flesvoeding is speciaal samengestelde babymelk die alle voedingsstoffen bevat die een baby nodig heeft 
              voor gezonde groei en ontwikkeling. In Nederland moet alle flesvoeding voldoen aan strenge Europese 
              richtlijnen, waardoor elk merk dezelfde basisvoedingsstoffen bevat.
            </p>
          </div>

          {/* When to choose bottle feeding */}
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Wanneer kies je voor flesvoeding?</h2>
            <div className="space-y-2">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Voordelen van flesvoeding</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dutch Guidelines */}
        <div className="bg-default rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Nederlandse Richtlijnen</h2>
          <p className="text-gray-700 mb-4">
            Het Voedingscentrum en consultatiebureau hanteren deze basisregels:
          </p>
          <div className="space-y-3">
            {guidelines.map((guideline, index) => (
              <div key={index} className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{guideline}</span>
              </div>
            ))}
          </div>
        </div>

        {/* EU Regulations & Safety */}
        <div className="bg-green-50 rounded-2xl border border-green-200 p-6">
          <h2 className="text-lg font-semibold text-green-800 mb-4">Veiligheid & Regelgeving in Nederland</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-green-800 mb-3">EU-verordening 2016/127:</h3>
              <div className="space-y-2 text-sm text-green-700">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Alle Nederlandse flesvoeding voldoet aan strenge EU-eisen</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Verplichte toevoeging van DHA vanaf 2020</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Regelmatige kwaliteitscontroles door NVWA</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Alle merken zijn even veilig qua voedingsstoffen</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-green-800 mb-3">Nederlandse context:</h3>
              <div className="space-y-2 text-sm text-green-700">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Kraanwater is veilig voor bereiding flesvoeding</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Consultatiebureau biedt gratis advies</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Breed assortiment merken verkrijgbaar</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Goede prijs-kwaliteit verhouding</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Myth Busting */}
        <div className="bg-blue-50 rounded-2xl border border-blue-200 p-6">
          <h2 className="text-lg font-semibold text-blue-800 mb-4">Veelgehoorde Mythes over Flesvoeding</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-medium text-red-600 mb-2">❌ Mythe: "Flesvoeding is minder gezond dan borstvoeding"</h3>
              <p className="text-sm text-blue-700">
                ✅ Feit: Moderne flesvoeding bevat alle essentiële voedingsstoffen. 
                Elk kind dat goed groeit en gezond is, krijgt de juiste voeding.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-medium text-red-600 mb-2">❌ Mythe: "Dure merken zijn beter"</h3>
              <p className="text-sm text-blue-700">
                ✅ Feit: Alle merken voldoen aan dezelfde EU-richtlijnen. 
                Kruidvat huismerk is even veilig als premium merken.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-medium text-red-600 mb-2">❌ Mythe: "Baby's worden minder slim van flesvoeding"</h3>
              <p className="text-sm text-blue-700">
                ✅ Feit: DHA (voor hersenontwikkeling) is verplicht in alle flesvoeding sinds 2020. 
                Liefde en aandacht zijn belangrijker dan voedingstype.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-medium text-red-600 mb-2">❌ Mythe: "Flesvoeding baby's worden vaker ziek"</h3>
              <p className="text-sm text-blue-700">
                ✅ Feit: Goede hygiëne bij bereiding is belangrijker dan voedingstype. 
                Veel factoren beïnvloeden weerstand (slaap, stress, genetica).
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Veelgestelde Vragen</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Kan ik van borstvoeding overstappen naar flesvoeding?</h3>
              <p className="text-sm text-gray-600">
                Ja, dit kan altijd en op elke leeftijd. Een geleidelijke overgang over 1-2 weken 
                wordt aangeraden om borstontsteking te voorkomen. Raadpleeg het consultatiebureau voor persoonlijk advies.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Welk merk flesvoeding is het beste?</h3>
              <p className="text-sm text-gray-600">
                Alle Nederlandse merken voldoen aan dezelfde strenge EU-eisen en zijn even veilig. 
                Kies op basis van prijs, beschikbaarheid en voorkeur van je baby.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Vanaf welke leeftijd kan mijn baby flesvoeding krijgen?</h3>
              <p className="text-sm text-gray-600">
                Flesvoeding is veilig vanaf de geboorte. Startvoeding (nummer 1) is geschikt 
                voor baby's van 0-12 maanden als volledig alternatief voor borstvoeding.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Hoeveel ml heeft mijn baby precies nodig?</h3>
              <p className="text-sm text-gray-600">
                Elke baby is anders. De Nederlandse richtlijn is 150ml per kg lichaamsgewicht per dag. 
                <Link href="/" className="text-primary hover:underline font-medium">
                  Bereken met onze calculator
                </Link> de exacte hoeveelheid voor jouw baby op basis van gewicht en leeftijd.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Kan ik borstvoeding en flesvoeding combineren?</h3>
              <p className="text-sm text-gray-600">
                Ja, combivoeiding is mogelijk. Start met flesvoeding als aanvulling en bouw 
                geleidelijk op. Let wel op dat melkproductie kan afnemen.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation to other pages */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Link 
              href="/kennisbank/soorten-flesvoeding"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-gray-800">Soorten Flesvoeding →</div>
              <div className="text-sm text-gray-600">Nummer 1, 2, 3 uitgelegd</div>
            </Link>
            <Link 
              href="/kennisbank/voedingstechnieken"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-gray-800">Voedingstechnieken →</div>
              <div className="text-sm text-gray-600">Bereiden en geven van fles</div>
            </Link>
            <Link 
              href="/"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-gray-800">Flesvoeding Calculator →</div>
              <div className="text-sm text-gray-600">Bereken hoeveelheden</div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}