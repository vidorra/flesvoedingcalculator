import Layout from '../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../components/KennisbankSidebar'
import { BookOpen, CheckCircle, ArrowRight, Home } from 'lucide-react'

export const metadata = {
  title: 'Flesvoeding Basis: Alles wat Nederlandse Ouders Moeten Weten | 2025 Guide',
  description: 'Complete gids over flesvoeding in Nederland. Wanneer kiezen voor flesvoeding? Voordelen, nadelen en officiële richtlijnen van het Voedingscentrum.',
}

export default function BasisFlesvoedingPage() {
  const sidebarImages = [
    {
      src: "/basis-flesvoeding-gids.png",
      alt: "Complete basis flesvoeding gids",
      caption: "Alles over flesvoeding basis"
    },
    {
      src: "/baby-flesvoeding.png",
      alt: "Baby krijgt flesvoeding",
      caption: "Nederlandse flesvoeding richtlijnen"
    }
  ]

  const adTopics = ["Flesvoeding Basis", "Baby Voeding", "Startvoeding", "Babymelk"]

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
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">

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
            <h2 className="text-lg font-semibold text-primary mb-4">Wat is flesvoeding?</h2>
            <p className="text-gray-600 leading-relaxed">
              Flesvoeding is speciaal samengestelde babymelk die alle voedingsstoffen bevat die een baby nodig heeft 
              voor gezonde groei en ontwikkeling. In Nederland moet alle flesvoeding voldoen aan strenge Europese 
              richtlijnen, waardoor elk merk dezelfde basisvoedingsstoffen bevat.
            </p>
          </div>

          {/* When to choose bottle feeding */}
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-primary mb-4">Wanneer kies je voor flesvoeding?</h2>
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
          <h2 className="text-lg font-semibold text-primary mb-4">Voordelen van flesvoeding</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
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
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Veiligheid & Regelgeving in Nederland</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-700 mb-3">EU-verordening 2016/127:</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <span>Alle Nederlandse flesvoeding voldoet aan strenge EU-eisen</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <span>Verplichte toevoeging van DHA vanaf 2020</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <span>Regelmatige kwaliteitscontroles door NVWA</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <span>Alle merken zijn even veilig qua voedingsstoffen</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-700 mb-3">Nederlandse context:</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <span>Kraanwater is veilig voor bereiding flesvoeding</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <span>Consultatiebureau biedt gratis advies</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <span>Breed assortiment merken verkrijgbaar</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <span>Goede prijs-kwaliteit verhouding</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Myth Busting */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-600 mb-4">Veelgehoorde Mythes over Flesvoeding</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-medium text-gray-600 mb-2"> Mythe: "Flesvoeding is minder gezond dan borstvoeding"</h3>
              <p className="text-sm text-gray-700">
                 Feit: Moderne flesvoeding bevat alle essentiële voedingsstoffen. 
                Elk kind dat goed groeit en gezond is, krijgt de juiste voeding.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-medium text-gray-600 mb-2"> Mythe: "Dure merken zijn beter"</h3>
              <p className="text-sm text-gray-700">
                 Feit: Alle merken voldoen aan dezelfde EU-richtlijnen. 
                Kruidvat huismerk is even veilig als premium merken.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-medium text-gray-600 mb-2"> Mythe: "Baby's worden minder slim van flesvoeding"</h3>
              <p className="text-sm text-gray-700">
                 Feit: DHA (voor hersenontwikkeling) is verplicht in alle flesvoeding sinds 2020. 
                Liefde en aandacht zijn belangrijker dan voedingstype.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-medium text-gray-600 mb-2"> Mythe: "Flesvoeding baby's worden vaker ziek"</h3>
              <p className="text-sm text-gray-700">
                 Feit: Goede hygiëne bij bereiding is belangrijker dan voedingstype. 
                Veel factoren beïnvloeden weerstand (slaap, stress, genetica).
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Veelgestelde Vragen</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-primary mb-2">Kan ik van borstvoeding overstappen naar flesvoeding?</h3>
              <p className="text-sm text-gray-600">
                Ja, dit kan altijd en op elke leeftijd. Een geleidelijke overgang over 1-2 weken 
                wordt aangeraden om borstontsteking te voorkomen. Raadpleeg het consultatiebureau voor persoonlijk advies.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-2">Welk merk flesvoeding is het beste?</h3>
              <p className="text-sm text-gray-600">
                Alle Nederlandse merken voldoen aan dezelfde strenge EU-eisen en zijn even veilig. 
                Kies op basis van prijs, beschikbaarheid en voorkeur van je baby.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-2">Vanaf welke leeftijd kan mijn baby flesvoeding krijgen?</h3>
              <p className="text-sm text-gray-600">
                Flesvoeding is veilig vanaf de geboorte. Startvoeding (nummer 1) is geschikt 
                voor baby's van 0-12 maanden als volledig alternatief voor borstvoeding.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-2">Hoeveel ml heeft mijn baby precies nodig?</h3>
              <p className="text-sm text-gray-600">
                Elke baby is anders. De Nederlandse richtlijn is 150ml per kg lichaamsgewicht per dag. 
                <Link href="/" className="text-primary hover:underline font-medium">
                  Bereken met onze calculator
                </Link> de exacte hoeveelheid voor jouw baby op basis van gewicht en leeftijd.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-2">Kan ik borstvoeding en flesvoeding combineren?</h3>
              <p className="text-sm text-gray-600">
                Ja, combivoeiding is mogelijk. Start met flesvoeding als aanvulling en bouw 
                geleidelijk op. Let wel op dat melkproductie kan afnemen.
              </p>
            </div>
          </div>
        </div>

        {/* Comprehensive Guide Section */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Complete Flesvoeding Gids</h2>
          
          <div className="space-y-6">
            {/* What is bottle feeding - expanded */}
            <div>
              <h3 className="font-medium text-primary mb-3">Wat is flesvoeding precies?</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Flesvoeding is kunstmatige babyvoeding die alle voedingsstoffen bevat die je baby nodig heeft voor een gezonde groei en ontwikkeling. 
                In Nederland volgen we de richtlijnen van het Voedingscentrum voor optimale babyvoedering.
              </p>
              <div className="bg-default p-4 rounded-lg">
                <p className="text-primary font-medium text-sm">
                  <strong>Nederlandse standaard:</strong> 150ml per kg lichaamsgewicht per 24 uur als uitgangspunt, 
                  met maximum 1000ml per dag voor baby's tot 1 jaar.
                </p>
              </div>
            </div>

            {/* Cost Information */}
            <div>
              <h3 className="font-medium text-primary mb-3">Kosten van flesvoeding in Nederland</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">Gemiddelde kosten per maand:</h4>
                  <div className="space-y-1 text-sm text-gray-700">
                    <div>• Startvoeding (0-6 mnd): €15-25</div>
                    <div>• Opvolgmelk (6+ mnd): €20-30</div>
                    <div>• Totaal eerste jaar: circa €250-350</div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-600 mb-2">Geld besparen tips:</h4>
                  <div className="space-y-1 text-sm text-gray-700">
                    <div>• Huismerken even goed als A-merken</div>
                    <div>• Grotere verpakkingen goedkoper</div>
                    <div>• Let op aanbiedingen</div>
                    <div>• Vergelijk prijzen online</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Work and bottle feeding */}
            <div>
              <h3 className="font-medium text-primary mb-3">Flesvoeding en werk combineren</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Flesvoeding biedt flexibiliteit bij werkhervatting. Partners kunnen overnemen, oppas kan voeden, 
                en je hoeft niet te kolven. Plan geleidelijke overgang minimaal 2 weken voor werkhervatting.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-amber-50 p-3 rounded-lg">
                  <div className="font-medium text-amber-800 mb-1">Voorbereiding:</div>
                  <div className="text-sm text-amber-700">Start vroeg met wennen aan fles, laat partner oefenen, stock voorraad op</div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <div className="font-medium text-purple-800 mb-1">Praktisch:</div>
                  <div className="text-sm text-purple-700">Instructies voor oppas, noodvoorraad, backup plan maken</div>
                </div>
              </div>
            </div>

            {/* Partner involvement */}
            <div>
              <h3 className="font-medium text-primary mb-3">Partner betrekken bij flesvoeding</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Flesvoeding biedt unieke kans voor partner om volledig betrokken te zijn bij voeding. 
                Dit versterkt de band en geeft mama rust.
              </p>
              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="font-medium text-pink-800 mb-2">Praktische tips:</h4>
                <div className="space-y-1 text-sm text-pink-700">
                  <div>• Verdeel voedingen: bijvoorbeeld mama overdag, papa 's avonds</div>
                  <div>• Laat partner nachtvoeding overnemen voor mama's rust</div>
                  <div>• Creëer eigen rituelen: papa's liedjes, mama's verhalen</div>
                  <div>• Beide ouders leren alle handgrepen (bereiding, temperatuur)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Baby Weigert de Fles Section */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Baby Weigert de Fles: Praktische Oplossingen</h2>
          
          <p className="text-gray-600 leading-relaxed mb-4">
            Ongeveer 30% van alle baby's weigert op enig moment de fles. Dit is één van de meest frustrerende 
            uitdagingen voor ouders, maar bijna altijd oplosbaar met de juiste aanpak.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <h3 className="text-gray-800 font-medium mb-3">Meest voorkomende oorzaken:</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span><strong>Temperatuur verkeerd</strong> - Te warm of koud</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span><strong>Verkeerde speen</strong> - Vorm, flow, materiaal</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span><strong>Timing probleem</strong> - Te hongerig of verzadigd</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span><strong>Verkeerde persoon</strong> - Baby verwacht borstvoeding van mama</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span><strong>Stress/omgeving</strong> - Onrustige sfeer</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <h3 className="text-gray-800 font-medium mb-3">Snelle oplossingen:</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span><strong>Test temperatuur</strong> op pols (37°C)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span><strong>Probeer andere spenen</strong> verschillende vormen</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span><strong>Laat partner proberen</strong> Papa vaak meer succes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span><strong>Rustige omgeving</strong> dimmen licht, geen afleiding</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span><strong>Juiste timing</strong> vroege hongersignalen</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-6">
            <h3 className="text-primary font-semibold mb-3">7-Dagen Actieplan bij Flesweigering:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-3">
                <h4 className="font-medium text-primary mb-2">Dag 1-2: Diagnostiek</h4>
                <ul className="text-gray-600 text-xs space-y-1">
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Controleer temperatuur systematisch</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Test verschillende spenen (5 min per stuk)</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Varieer timing aanbiedingen</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Laat anderen proberen</span>
                </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-3">
                <h4 className="font-medium text-primary mb-2">Dag 3-4: Optimaliseren</h4>
                <ul className="text-gray-600 text-xs space-y-1">
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Creëer speciale flesvoeding-plek</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Zachte muziek/white noise</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Experimenteer met houdingen</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Rustige routine opbouwen</span>
                </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-3">
                <h4 className="font-medium text-primary mb-2">Dag 5-7: Geduld</h4>
                <ul className="text-gray-600 text-xs space-y-1">
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Laat baby speen verkennen</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Positieve associaties opbouwen</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Bevochtig speen met moedermelk</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Blijf aanbieden zonder dwang</span>
                </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
            <h3 className="text-amber-900 font-semibold mb-2"> Wanneer hulp zoeken:</h3>
            <p className="text-amber-800 text-sm mb-2">
              Als baby 48 uur geen significante hoeveelheden drinkt, of tekenen van uitdroging toont 
              (minder natte luiers, droge mond, verminderde energie), neem direct contact op met het consultatiebureau.
            </p>
          </div>
        </div>

        {/* Eerste Keer Flesvoeding Section */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Eerste Keer Flesvoeding Geven</h2>
          
          <p className="text-gray-600 leading-relaxed mb-4">
            De eerste keer flesvoeding geven kan spannend zijn. Met de juiste voorbereiding en aanpak 
            wordt het een succesvolle ervaring voor zowel ouder als baby.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-medium text-primary mb-3">Stap 1-4: Voorbereiding</h3>
              <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                <p><strong>1. Handen wassen</strong> grondig met warme zeep</p>
                <p><strong>2. Materiaal checken</strong> fles, speen, geen scheurtjes</p>
                <p><strong>3. Water klaarmaken</strong> afgekoeld gekookt water</p>
                <p><strong>4. Temperatuur testen</strong> 37°C op pols</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-primary mb-3">Stap 5-8: Fles geven</h3>
              <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                <p><strong>5. Juiste houding</strong> baby iets omhoog (45°)</p>
                <p><strong>6. Stimuleer reflexen</strong> wang aanraken</p>
                <p><strong>7. Speen plaatsen</strong> vol met melk, geen lucht</p>
                <p><strong>8. Baby's tempo</strong> niet forceren, boertjes tussendoor</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <h3 className="text-gray-800 font-medium mb-2"> Tips voor succes eerste keer:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-gray-700 text-sm space-y-1">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Begin niet als baby al heel boos van honger</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Herkent vroege hongersignalen (lipjes likken)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Blijf kalm en geduldig</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Maak oogcontact en praat zacht</span>
                </li>
              </ul>
              <ul className="text-gray-700 text-sm space-y-1">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Eerste keren kunnen lastig zijn - normaal!</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Na paar dagen krijg je een ritme</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Elke baby is anders</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Vind jullie eigen manier</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation to other pages */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Link 
              href="/kennisbank/soorten-flesvoeding"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-primary">Soorten Flesvoeding →</div>
              <div className="text-sm text-gray-600">Nummer 1, 2, 3 uitgelegd</div>
            </Link>
            <Link 
              href="/kennisbank/voedingstechnieken"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-primary">Voedingstechnieken →</div>
              <div className="text-sm text-gray-600">Bereiden en geven van fles</div>
            </Link>
            <Link 
              href="/"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-primary">Flesvoeding Calculator →</div>
              <div className="text-sm text-gray-600">Bereken hoeveelheden</div>
            </Link>
          </div>
          </div>
        </div>
        
        <KennisbankSidebar images={sidebarImages} adTopics={adTopics} />
      </div>
    </Layout>
  )
}