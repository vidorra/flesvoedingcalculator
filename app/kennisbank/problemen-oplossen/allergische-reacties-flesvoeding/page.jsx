import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { AlertTriangle, Shield, Heart, Phone, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Allergische Reacties Flesvoeding: Nederlandse Herkenning & Behandeling Gids',
  description: 'Complete gids voor het herkennen en behandelen van allergische reacties op flesvoeding in Nederland. Van CMPA tot noodprotocol - alles wat Nederlandse ouders moeten weten.',
}

export default function AllergischeReactiesFlesvoedingPage() {
  // Sidebar configuration
  const sidebarImages = [
    {
      src: "/allergische-reacties-herkenning.png",
      alt: "Allergische reacties herkennen bij baby's",
      caption: "Vroege symptomen herkennen is cruciaal"
    },
    {
      src: "/noodprotocol-anafylaxie.png", 
      alt: "Noodprotocol bij anafylactische reactie",
      caption: "EpiPen gebruik en emergency protocol"
    },
    {
      src: "/alternatieve-flesvoeding.png",
      alt: "Alternatieve flesvoeding opties",
      caption: "Hydrolysaat en amino acid formules"
    }
  ]

  // Ad targeting keywords
  const adTopics = ["Allergie Behandeling", "Medische Zorg Baby", "Specialistische Voeding"]

  // Data arrays
  const symptomenTypes = [
    "Huidreacties - eczeem, uitslag, zwelling",
    "Maag-darm klachten - braken, diarree, koliek", 
    "Ademhalingsproblemen - piepen, hoesten, kortademigheid",
    "Gedragsveranderingen - extreme onrust, lethargie",
    "Groei problemen - gewichtsverlies, falende groei",
    "Systemische reacties - anafylaxie, shock"
  ]

  const risicofactoren = [
    "Familie geschiedenis van allergieën of atopie",
    "Vroege formule introductie (binnen 6 maanden)",
    "Premature geboorte en verhoogde darmdoorlaatbaarheid",
    "Antibiotica gebruik in eerste levensmaanden",
    "Urbane omgeving met verhoogde luchtvervuiling",
    "Over-steriele omgeving (hygiëne hypothesis)"
  ]

  const noodprotocol = [
    "Herken multi-systeem symptomen binnen 0-30 seconden",
    "Bel 112 onmiddellijk - meld 'baby anafylactische reactie'",
    "Gebruik EpiPen Jr indien voorhanden (buitenkant dij, 90°)",
    "Positioneer baby: plat bij bewusteloosheid, rechtop bij ademhaling",
    "Monitor continue ademhaling en hartslag tot hulp arriveert",
    "Bereid voor op herhaling EpiPen na 5-15 minuten indien nodig"
  ]

  const alternatieveOpties = [
    "Extensively Hydrolyzed Formula - 95% allergeenreductie",
    "Amino Acid Formula - volledig elementaire voeding",
    "Nutrilon Pepti Allergy - Nederlandse marktleider",
    "Neocate LCP - voor complexe gevallen",
    "Volledig vergoed op kinderarts recept",
    "Professional monitoring en follow-up vereist"
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            
            {/* Header - ALWAYS outside of card containers */}
            <div>
              <div className="text-sm text-gray-500 mb-2">Kennisbank • Problemen Oplossen</div>
              <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-primary" />
                Allergische Reacties Flesvoeding: Nederlandse Herkenning & Behandeling Gids
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Allergische reacties op flesvoeding kunnen variëren van mild tot levensbedreigend. Deze uitgebreide gids helpt Nederlandse ouders allergieën herkennen, behandelen en voorkomen.
              </p>
            </div>

            {/* Introduction Section */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Inleiding</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Flesvoeding allergieën treffen 2-7% van Nederlandse baby's en kunnen ernstige gevolgen hebben voor gezondheid en ontwikkeling. 
                Vroege herkenning en juiste behandeling zijn cruciaal voor het welzijn van je baby.
              </p>
              
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Belangrijk:</strong> Dit artikel vervangt geen medisch advies. Neem altijd contact op met je huisarts of consultatiebureau bij verdenking van allergie.
                </p>
              </div>
            </section>

            {/* Soorten Allergische Reacties */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Soorten Allergische Reacties
              </h2>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">IgE-Gemedieerde Allergieën (Onmiddellijke Reacties)</h3>
                <p className="text-gray-700 mb-4">
                  Deze reacties treden op binnen 0-2 uur na consumptie en kunnen zeer ernstig zijn, 
                  inclusief anafylaxie. Ze worden veroorzaakt door IgE antibodies en histamine release.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-medium text-gray-700 mb-2">Timing en Ernst:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700">Reactietijd: 0-2 uur na voeding</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700">Ernst: Mild tot levensbedreigend</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700">Prevalentie: 2-3% Nederlandse baby's</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Niet-IgE Gemedieerde Allergieën (Vertraagde Reacties)</h3>
                <p className="text-gray-700 mb-4">
                  Deze reacties ontwikkelen zich 2-72 uur na consumptie en zijn meestal milder, 
                  maar kunnen chronisch worden. Ze worden veroorzaakt door T-cel gemedieerde reacties.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-primary mb-3">Symptomen Patronen:</h4>
                    <ul className="space-y-2">
                      {symptomenTypes.map((symptom, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700 text-sm">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary mb-3">Nederlandse Risicofactoren:</h4>
                    <ul className="space-y-2">
                      {risicofactoren.map((factor, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Koemelk Eiwit Allergie */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Koemelk Eiwit Allergie (CMPA)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CMPA is de meest voorkomende flesvoeding allergie in Nederland, treffende 2-7% van baby's in het eerste jaar. 
                Het betreft een reactie op caseïne en/of whey eiwitten in koemelk.
              </p>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Nederlandse Diagnose Protocol</h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Stap 1: Clinical Assessment</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Uitgebreide anamnese, fysiek onderzoek en symptoom dagboek gedurende 1-2 weken.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Stap 2: Elimination Diet</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    2-4 weken trial met extensively hydrolyzed formula onder medische supervisie.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-700 mb-2">Stap 3: Challenge Test</h4>
                  <p className="text-gray-700 text-sm">
                    Gecontroleerde reïntroductie in ziekenhuisomgeving voor definitieve diagnose.
                  </p>
                </div>
              </div>
            </section>

            {/* Noodprotocol */}
            <section className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Nederlands Anafylaxie Noodprotocol</h3>
                  <p className="text-sm text-amber-700 leading-relaxed mb-4">
                    Bij verdenking van anafylaxie: onmiddellijke actie kan levensreddend zijn. 
                    Volg deze stappen precies en aarzel nooit om 112 te bellen.
                  </p>
                  <ul className="space-y-2">
                    {noodprotocol.map((stap, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-amber-700 text-sm">{stap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Alternatieve Flesvoeding */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Alternatieve Flesvoeding Opties</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bij bewezen allergie zijn er effectieve alternatieven beschikbaar in Nederland. 
                Alle gespecialiseerde formules zijn volledig vergoed door de zorgverzekering op recept.
              </p>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Nederlandse Behandelingsopties</h3>
                <ul className="space-y-3">
                  {alternatieveOpties.map((optie, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Heart className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{optie}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">Kosten en Vergoeding</h4>
                  <p className="text-gray-700 text-sm">
                    Extensively hydrolyzed formula kost €100-120 per maand, amino acid formula €160-200 per maand. 
                    Met kinderarts recept zijn deze volledig vergoed voor kinderen onder 18 jaar.
                  </p>
                </div>
              </div>
            </section>

            {/* Nederlandse Zorg */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Nederlandse Medische Zorg</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Zorgtraject:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700 text-sm">Huisarts - Eerste beoordeling en basis behandeling</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700 text-sm">Kinderarts - Specialistische diagnostiek en behandeling</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700 text-sm">Allergoloog - Complexe gevallen en challenge testing</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-primary mb-3">Specialist Centra:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Emma Kinderziekenhuis Amsterdam</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Erasmus MC Sophia Rotterdam</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Radboud UMC Nijmegen</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <div className="text-center">
                <Link 
                  href="/calculator"
                  className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-white transition-colors"
                >
                  <div className="text-center">
                    <div className="font-medium text-primary">Bereken veilige voeding hoeveelheden →</div>
                    <div className="text-sm text-gray-600">Gebruik onze calculator voor gepersonaliseerd advies</div>
                  </div>
                </Link>
              </div>
            </section>

            {/* Related Articles */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Gerelateerde Artikelen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/soorten-flesvoeding/hypoallergene-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Hypoallergene flesvoeding →</div>
                  <div className="text-sm text-gray-600">Speciaal ontwikkeld voor allergische baby's</div>
                </Link>
                <Link href="/kennisbank/problemen-oplossen/krampjes-na-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Krampjes na flesvoeding →</div>
                  <div className="text-sm text-gray-600">Herkennen en behandelen van voedingsgerelateerde krampjes</div>
                </Link>
                <Link href="/kennisbank/problemen-oplossen/spugen-na-de-fles" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Spugen na de fles →</div>
                  <div className="text-sm text-gray-600">Wanneer spugen normaal is en wanneer niet</div>
                </Link>
                <Link href="/kennisbank/veiligheid" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Veiligheid algemeen →</div>
                  <div className="text-sm text-gray-600">Alle aspecten van veilige flesvoeding</div>
                </Link>
              </div>
            </section>

          </div>
        </div>
        
        <KennisbankSidebar images={sidebarImages} adTopics={adTopics} />
      </div>
    </Layout>
  )
}