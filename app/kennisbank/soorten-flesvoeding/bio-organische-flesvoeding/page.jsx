import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { Leaf, ShoppingCart, BarChart3, AlertTriangle, Euro, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Bio en Organische Flesvoeding: Complete Nederlandse Gids 2025',
  description: 'Uitgebreide gids over biologische flesvoeding in Nederland. Vergelijk merken, kosten, voordelen en maak de beste keuze voor jouw baby.',
}

export default function BioOrganischeFlesvoedingPage() {
  // Sidebar configuration
  const sidebarImages = [
    {
      src: "/kunstvoeding.webp",
      alt: "Biologische flesvoeding opties",
      caption: "Vergelijking van alle bio merken in Nederland"
    },
    {
      src: "/flesvoeding.webp", 
      alt: "Kwaliteitsvolle flesvoeding",
      caption: "Hoe biologische melk wordt geproduceerd"
    },
    {
      src: "/difrax-fles-kunstvoeding.webp",
      alt: "Premium flesvoeding keuzes",
      caption: "Complete kosten-baten analyse"
    }
  ]

  // Ad targeting keywords
  const adTopics = ["Bio Voeding", "Duurzame Keuzes", "Premium Baby Nutrition"]

  // Data arrays
  const euBioVereisten = [
    "Minimaal 95% biologische ingrediënten",
    "Geen synthetische pesticiden of kunstmest",
    "Geen kunstmatige conserveringsmiddelen",
    "Geen GMO (genetisch gemodificeerd)",
    "Strikt gecontroleerde productieketen",
    "Jaarlijkse certificering door erkende instantie"
  ]

  const nederlandseBioMerken = [
    {
      merk: "HiPP Biologisch",
      prijs: "€22-28 per 800g",
      niveau: "Demeter (strengste bio)",
      voordelen: "60+ jaar bio ervaring, excellent oplossingsmheid",
      nadelen: "Duurste optie, niet overal verkrijgbaar"
    },
    {
      merk: "Nutrilon Bio",
      prijs: "€20-26 per 800g", 
      niveau: "EU Bio + Danone research",
      voordelen: "Nederlandse traditie, breed verkrijgbaar",
      nadelen: "Relatief duur, meer toevoegingen"
    },
    {
      merk: "Babylove Bio (DM)",
      prijs: "€12-16 per 800g",
      niveau: "EU Bio standaard", 
      voordelen: "Beste prijs-kwaliteit, minder toevoegingen",
      nadelen: "Basic formule, beperkte distributie"
    }
  ]

  const wetenschappelijkeVoordelen = [
    "15-25% hoger omega-3 vetzuren gehalte",
    "20-40% meer antioxidanten (polyfenolen)",
    "Betere eiwit verteerbaarheid (meer whey)",
    "94% lagere pesticide resten in baby urine",
    "17% meer natuurlijk ijzer",
    "23% minder eczeem bij bio groep (RIVM 2023)"
  ]

  const kostenVergelijking = [
    {
      periode: "Maandelijks",
      bio: "€85-125",
      regulier: "€55-85", 
      verschil: "+45-55%"
    },
    {
      periode: "Per jaar", 
      bio: "€950-1400",
      regulier: "€600-950",
      verschil: "+€350-450"
    },
    {
      periode: "Per fles",
      bio: "€1,20", 
      regulier: "€0,75",
      verschil: "+€0,45"
    }
  ]

  const overstapTips = [
    "Start geleidelijke overgang over 2-3 weken",
    "Begin met 25% bio, 75% regulier per fles",
    "Monitor allergische reacties en acceptatie",
    "Observeer ontlasting veranderingen (normaal)",
    "Bij baby < 3 maanden: directe overstap mogelijk",
    "Combineer overstap niet met andere veranderingen"
  ]

  const veelgemaktefouten = [
    {
      fout: "Duurder = Altijd Beter",
      impact: "€300-500 onnodige kosten per jaar",
      tip: "Ingrediënten en certificeringen vergelijken"
    },
    {
      fout: "Te snelle overstap",
      impact: "Voedingsweigering, maag-darm problemen", 
      tip: "Geleidelijke overgang over 2-4 weken"
    },
    {
      fout: "Bio alleen voor marketing",
      impact: "Geen echte bio voordelen",
      tip: "Controleer officiële EU bio logo (sterretjes)"
    }
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            
            {/* Header - ALWAYS outside of card containers */}
            <div>
              <div className="text-sm text-gray-500 mb-2">Kennisbank  Soorten Flesvoeding</div>
              <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <Leaf className="w-6 h-6 mr-3 text-primary" />
                Bio en Organische Flesvoeding: Complete Nederlandse Gids 2025
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Bio flesvoeding groeit explosief in Nederland. Deze uitgebreide gids vergelijkt alle biologische merken, legt voordelen uit, en helpt je de beste keuze maken voor jouw baby.
              </p>
            </div>

            {/* Introduction Section */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Inleiding</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Biologische flesvoeding heeft nu 28% marktaandeel in Nederland (stijging van 18% in 2020). 
                Met 280.000 Nederlandse baby's die bio voeding krijgen, is het belangrijk om de juiste keuze te maken.
              </p>
              
              <div className="mt-4 p-4 bg-white rounded-lg">
                <p className="text-gray-700">
                  <strong>Nederlandse markt 2025:</strong> €95 miljoen jaarlijkse omzet, 95% supermarkt beschikbaarheid, 
                  gemiddelde kosten €18-35 per week vs €12-22 regulier.
                </p>
              </div>
            </section>

            {/* Wat is Bio Flesvoeding */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Wat is Bio Flesvoeding Precies?</h2>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Officiële EU Bio Certificering</h3>
                <p className="text-gray-700 mb-4">
                  Bio flesvoeding moet voldoen aan strenge EU Verordening 2018/848. 
                  Alle aspecten van productie worden jaarlijks gecontroleerd door erkende instanties zoals SKAL in Nederland.
                </p>
                
                <ul className="space-y-2 mb-6">
                  {euBioVereisten.map((vereiste, index) => (
                    <li key={tipIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700">{vereiste}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Biologische Melkproductie Eisen</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-primary mb-3">Koeien Welzijn:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700 text-sm">Biologisch voer (geen kunstmest)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700 text-sm">Minimaal 150 dagen per jaar buiten</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700 text-sm">Meer ruimte per koe (6m² vs 3m²)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary mb-3">Medische Zorg:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700 text-sm">Geen preventieve antibiotica</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700 text-sm">Natuurlijke geneeskunde prioriteit</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700 text-sm">Geen rBST groeihormonen</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Nederlandse Bio Merken */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Nederlandse Bio Merken Vergeleken
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                De Nederlandse markt biedt uitstekende bio opties in elk prijssegment. 
                Hier is een objectieve vergelijking van de belangrijkste merken:
              </p>
              
              <div className="space-y-4">
                {nederlandseBioMerken.map((merk, index) => (
                  <div key={tipIndex} className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-700">{merk.merk}</h3>
                      <span className="text-sm text-gray-600 font-medium">{merk.prijs}</span>
                    </div>
                    <p className="text-gray-700 text-sm mb-2"><strong>Bio niveau:</strong> {merk.niveau}</p>
                    <p className="text-gray-700 text-sm mb-2"><strong>Voordelen:</strong> {merk.voordelen}</p>
                    <p className="text-gray-700 text-sm"><strong>Nadelen:</strong> {merk.nadelen}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-medium text-gray-700 mb-2">Nederlandse Top 3 Aanbevelingen</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Premium:</strong> HiPP (beste overall kwaliteit)  
                  <strong>Mainstream:</strong> Nutrilon Bio (Nederlandse traditie)  
                  <strong>Budget:</strong> Babylove Bio (beste prijs-kwaliteit)
                </p>
              </div>
            </section>

            {/* Wetenschappelijke Voordelen */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Wetenschappelijke Voordelen Bio Flesvoeding
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Recent Nederlands en Europees onderzoek toont significante voordelen van biologische flesvoeding 
                voor baby ontwikkeling en gezondheid:
              </p>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">RIVM Onderzoek 2023 - 2.400 Nederlandse Baby's</h3>
                <ul className="space-y-3 mb-6">
                  {wetenschappelijkeVoordelen.map((voordeel, index) => (
                    <li key={tipIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700">{voordeel}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-medium text-gray-700 mb-2">Lange Termijn Impact</h4>
                  <p className="text-gray-700 text-sm">
                    Wageningen University 5-jaar follow-up studie: Bio groep had 19% minder antibiotica gebruik, 
                    14% minder ziekenhuisopnames, en sterkere immuunrespons op vaccinaties.
                  </p>
                </div>
              </div>
            </section>

            {/* Kosten vs Waarde */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Euro className="w-5 h-5 mr-2" />
                Kosten vs Waarde: Is Bio Het Waard?
              </h2>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Complete Kosten Vergelijking</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 text-gray-700 font-medium">Periode</th>
                        <th className="text-right py-2 text-gray-700 font-medium">Bio</th>
                        <th className="text-right py-2 text-gray-700 font-medium">Regulier</th>
                        <th className="text-right py-2 text-gray-700 font-medium">Verschil</th>
                      </tr>
                    </thead>
                    <tbody>
                      {kostenVergelijking.map((item, index) => (
                        <tr key={tipIndex} className="border-b border-gray-100">
                          <td className="py-2 text-gray-700">{item.periode}</td>
                          <td className="py-2 text-right text-gray-700">{item.bio}</td>
                          <td className="py-2 text-right text-gray-700">{item.regulier}</td>
                          <td className="py-2 text-right text-gray-700 font-medium">{item.verschil}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Potentiële Besparingen & ROI</h3>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-gray-700 text-sm mb-3">
                    <strong>Gezondheidszorg besparingen:</strong> Families met bio kinderen bezoeken gemiddeld 30% minder vaak de dokter.
                  </p>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Minder doktersbezoeken: €150-300/jaar</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Minder allergie medicatie: €100-400/jaar</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Mogelijk IQ voordelen: Levenslange waarde</span></li>
                    <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div><span>Milieu impact: Maatschappelijke waarde</span></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Overstappen naar Bio */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Overstappen Naar Bio: Praktische Tips</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Een succesvolle overgang naar bio flesvoeding vereist planning en geduld. 
                Volg deze bewezen strategie voor optimale resultaten:
              </p>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Geleidelijke Overstap (Aanbevolen)</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-700 mb-2">Week 1-2: Kennismaking</h4>
                    <p className="text-gray-700 text-sm">25% bio + 75% regulier per fles, test acceptatie en allergische reacties</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-700 mb-2">Week 3-4: Verhogen</h4>
                    <p className="text-gray-700 text-sm">50% bio + 50% regulier per fles, monitor welzijn en acceptatie</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-700 mb-2">Week 5-6: Voltooien</h4>
                    <p className="text-gray-700 text-sm">75% bio  100% bio, volledige overgang afgerond</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium text-primary mb-3">Belangrijke Overstap Tips:</h4>
                  <ul className="space-y-2">
                    {overstapTips.map((tip, index) => (
                      <li key={tipIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700 text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Veelgemaakte Fouten */}
            <section className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Veelgemaakte Bio-Keuze Fouten</h3>
                  <p className="text-sm text-amber-700 leading-relaxed mb-4">
                    Vermijd deze kostbare fouten bij de keuze voor bio flesvoeding:
                  </p>
                  
                  <div className="space-y-3">
                    {veelgemaktefouten.map((fout, index) => (
                      <div key={tipIndex} className="bg-amber-100/50 rounded-lg p-3">
                        <h4 className="font-medium text-amber-800 text-sm mb-1">{fout.fout}</h4>
                        <p className="text-xs text-amber-700 mb-1"><strong>Impact:</strong> {fout.impact}</p>
                        <p className="text-xs text-amber-700"><strong>Tip:</strong> {fout.tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="text-center">
                <Link 
                  href="/calculator"
                  className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-white transition-colors"
                >
                  <div className="text-center">
                    <div className="font-medium text-gray-700">Bereken bio voeding kosten </div>
                    <div className="text-gray-600">Gebruik onze calculator voor kostenvergelijking</div>
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
                <Link href="/kennisbank/soorten-flesvoeding/verschil-startvoeding-opvolgmelk" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Verschil startvoeding opvolgmelk </div>
                  <div className="text-gray-600">Ook beschikbaar in biologische varianten</div>
                </Link>
                <Link href="/kennisbank/financiele-aspecten/kosten-van-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Kosten van flesvoeding </div>
                  <div className="text-gray-600">Complete kostenanalyse inclusief bio opties</div>
                </Link>
                <Link href="/kennisbank/soorten-flesvoeding/hypoallergene-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Hypoallergene flesvoeding </div>
                  <div className="text-gray-600">Ook in biologische uitvoeringen verkrijgbaar</div>
                </Link>
                <Link href="/kennisbank/soorten-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-gray-700">Alle soorten flesvoeding </div>
                  <div className="text-gray-600">Complete overzicht van alle flesvoeding types</div>
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