import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import AffiliateProductWidget from '../../../../components/AffiliateProductWidget'
import { Briefcase, ArrowRight, Home, Clock, CheckCircle, AlertTriangle, Calculator, Users } from 'lucide-react'

export const metadata = {
  title: 'Flesvoeding en Werk Combineren: Complete Gids 2026 | Nederlandse Ouders',
  description: 'Alles over terugkeer naar werk met flesvoeding baby. Van kinderopvang instrueren tot schema\'s, werk-privé balance en praktische tips voor werkende ouders in Nederland.',
}

export default function FlesvoedingWerkPage() {
  const workAdvantages = [
    'Partner kan volledig overnemen voedingen',
    'Voorspelbare schema\'s voor planning',
    'Geen kolven nodig, tijdsbesparing',
    'Kinderopvang gewend aan flesvoeding',
    'Meetbare intake - weet precies hoeveel baby drinkt'
  ]

  const dutchScenarios = [
    {
      type: '16 Weken Verlof (wettelijk minimum)',
      timeline: 'Week 16: Eerste werkdag',
      prep: 'Week 13-15: Voorbereiden',
      advantage: 'Basis routine gevestigd, praktijk testen mogelijk'
    },
    {
      type: 'Parttime (veel Nederlandse Moeders)',
      timeline: '3-4 dagen werken per week',
      prep: 'Minder voeding transities',
      advantage: 'Meer thuisdagen, stabielere routine'
    },
    {
      type: 'Thuiswerk Hybride',
      timeline: '2 dagen kantoor, 3 thuis',
      prep: 'Flexibele werk-privé integratie',
      advantage: 'Meer controle over voeding, lagere opvang kosten'
    }
  ]

  const childcareTypes = [
    {
      type: 'Kinderdagverblijf',
      pros: ['Professionele keuken', 'Strikte hygiëne protocollen', 'Schema\'s geïntegreerd', 'Reserve voeding beschikbaar'],
      cons: ['Duurder', 'Minder flexibiliteit', 'Groepsetting'],
      tips: 'Eigen voeding meebrengen vs verstrekking bespreken'
    },
    {
      type: 'Gastouder',
      pros: ['Persoonlijke aandacht', 'Flexibeler schema', 'Huiselijke omgeving', 'Goedkoper'],
      cons: ['Meer training nodig', 'Minder reserve opties', 'Afhankelijk van één persoon'],
      tips: 'Gedetailleerde instructies en regelmatig overleg'
    },
    {
      type: 'Familie/Oppas',
      pros: ['Maximale flexibiliteit', 'Vertrouwde omgeving', 'Één-op-één aandacht'],
      cons: ['Intensieve training vereist', 'Geen professionele ervaring', 'Duurder per uur'],
      tips: 'Volledige voeding training en noodprocedures'
    }
  ]

  const scheduleExamples = [
    {
      type: 'Fulltime (8:30-17:30)',
      morning: ['06:00 - Ochtendvoeding (200ml)', '07:30 - Overdracht kinderopvang'],
      daycare: ['10:30 - Voeding (180ml)', '13:00 - Lunch voeding (190ml)', '15:30 - Middag (170ml)'],
      evening: ['18:30 - Thuis avondvoeding (200ml)', '21:00 - Bedtijd (180ml)'],
      tips: 'Avond voorbereiding cruciaal, reserve fles in auto'
    },
    {
      type: 'Parttime (3 dagen, 9:00-15:00)',
      morning: ['07:30 - Voeding (190ml)', '08:00 - Naar opvang'],
      daycare: ['11:00 - Voeding (170ml)', '13:00 - Voeding (180ml)'],
      evening: ['15:30 - Thuis voeding (160ml)', '17:30 - Avond (190ml)'],
      tips: 'Thuisdagen voor schema aanpassingen, meer bonding tijd'
    }
  ]

  const stressBeheer = [
    {
      concern: 'Heeft baby genoeg gedronken?',
      solution: 'Dagboek app delen met opvang, foto\'s lege flessen ontvangen, vertrouwen opbouwen'
    },
    {
      concern: 'Schema werkt niet meer',
      solution: 'Flexibiliteit oefenen, reserve tijden, partner rol uitbreiden, perfectie loslaten'
    },
    {
      concern: 'Geen tijd voor voorbereiding',
      solution: 'Voorbereiden in het weekend, poeder vooraf afmeten in doseerbakjes, dubbele flessenset, efficiëntie'
    },
    {
      concern: 'Schuldgevoel over werken',
      solution: 'Focus kwaliteitstijd, financiële stabiliteit, werkvoorbeeld geven belangrijk'
    }
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">

            {/* Header */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">Praktische Tips • Werk Combineren</div>
              <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-primary" />
                Flesvoeding en Werk Combineren: Complete Gids
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Terugkeer naar werk met flesvoeding baby brengt unieke uitdagingen én voordelen. 
                Leer hoe je een soepele overgang maakt met praktische schema's en expert tips.
              </p>
            </div>

            {/* Advantages of bottle feeding for work */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                Waarom Flesvoeding Voordelig is voor Werkende Ouders
              </h2>
              
              <div className="mb-4">
                <p className="text-gray-700 mb-4">
                  Veel Nederlandse ouders keren terug naar werk binnen 12 maanden. Bij flesvoeding kan een partner of
                  de opvang de voedingen volledig overnemen, en zie je precies hoeveel je baby drinkt. Dat maakt de
                  overgang vaak wat overzichtelijker, zeker in combinatie met <Link href="/kennisbank/praktische-tips/voedingsritme-opbouwen" className="text-primary hover:underline font-medium">een voorspelbaar voedingsritme</Link>.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-600 mb-3">Voordelen van Flesvoeding bij Werk</h3>
                  <div className="space-y-2">
                    {workAdvantages.map((advantage, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-600 mb-3">Nederlandse Werkcontext</h3>
                  <div className="text-sm text-gray-600 space-y-2">
                    <div><strong>16 weken verlof:</strong> Zwangerschaps- en bevallingsverlof samen (wettelijk minimum)</div>
                    <div><strong>Parttime cultuur:</strong> Veel ouders werken parttime</div>
                    <div><strong>Kinderopvang:</strong> Vaak vanaf ongeveer 6 weken mogelijk, na het bevallingsverlof</div>
                    <div><strong>Flexibel werken:</strong> Steeds meer werkgevers bieden flexibiliteit</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dutch work scenarios */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Nederlandse Werkhervatting Scenario's</h2>
              
              <div className="space-y-4">
                {dutchScenarios.map((scenario, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-primary mb-2">{scenario.type}</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-600 text-sm mb-1">Tijdlijn</h4>
                        <p className="text-sm text-gray-600">{scenario.timeline}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-600 text-sm mb-1">Voorbereiding</h4>
                        <p className="text-sm text-gray-600">{scenario.prep}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-600 text-sm mb-1">Voordeel</h4>
                        <p className="text-sm text-gray-600">{scenario.advantage}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Childcare instruction guide */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Kinderopvang Instrueren: Complete Gids
              </h2>
              
              <div className="mb-6">
                <h3 className="font-medium text-gray-600 mb-3">Checklist Essentiële Informatie</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-600 mb-2">Voeding Details</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Schema met exacte tijden</span></li>
                      <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Hoeveelheden per voeding</span></li>
                      <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Merk en type flesvoeding</span></li>
                      <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Speen voorkeur en reservespenen</span></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-600 mb-2">Praktische Info</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Bereidingsinstructies</span></li>
                      <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Voorkeursmethode voor opwarmen</span></li>
                      <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Techniek om te laten boeren</span></li>
                      <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Noodcontact informatie</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {childcareTypes.map((type, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-primary mb-3">{type.type}</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <h4 className="font-medium text-gray-600 mb-2">Voordelen:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {type.pros.map((pro, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-600 mb-2">Aandachtspunten:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {type.cons.map((con, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="p-2 bg-white rounded text-primary">
                      <strong>Tip:</strong> {type.tips}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule examples */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Praktische Werkdag Schema's
              </h2>
              
              <div className="space-y-6">
                {scheduleExamples.map((schedule, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-700 mb-4">{schedule.type}</h3>
                    <div className="grid md:grid-cols-3 gap-4 mb-3">
                      <div>
                        <h4 className="font-medium text-primary mb-2">Ochtend</h4>
                        <div className="text-sm text-gray-600 space-y-1">
                          {schedule.morning.map((item, idx) => (
                            <div key={idx}>{item}</div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2">Kinderopvang</h4>
                        <div className="text-sm text-gray-600 space-y-1">
                          {schedule.daycare.map((item, idx) => (
                            <div key={idx}>{item}</div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2">Avond</h4>
                        <div className="text-sm text-gray-600 space-y-1">
                          {schedule.evening.map((item, idx) => (
                            <div key={idx}>{item}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="p-2 bg-white rounded text-primary border border-gray-200">
                      <strong>Praktische tips:</strong> {schedule.tips}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stressbeheer */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Stressbeheersing & Praktische Oplossingen</h2>
              
              <div className="space-y-4">
                {stressBeheer.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-600 mb-1">"{item.concern}"</h3>
                    <p className="text-sm text-gray-600">{item.solution}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 border border-gray-200">
                <h4 className="font-medium text-gray-600 mb-2">Succesvolle Strategieën, week voor week</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium text-gray-600 mb-1">Week 1-2: Aanpassing</h5>
                    <p className="text-gray-600">Flexibel zijn, communicatie prioriteit, eigen welzijn niet vergeten</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-600 mb-1">Week 3-6: Routine</h5>
                    <p className="text-gray-600">Schema optimaliseren, vertrouwen opbouwen, efficiëntie terugwinnen</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-600 mb-1">Week 7+: Beheersing</h5>
                    <p className="text-gray-600">Automatische routine, crisisbeheer, werk-privé balans</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency planning */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Crisis Beheer: Noodplannen
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border border-gray-200">
                  <h3 className="font-medium text-gray-600 mb-3">Kinderopvang Ziek/Gesloten</h3>
                  <div className="text-sm text-gray-600 space-y-2">
                    <div><strong>Reserveplan A:</strong> Partner thuisblijven (afwisselen)</div>
                    <div><strong>Reserveplan B:</strong> Familie/vrienden noodhulp</div>
                    <div><strong>Werkgever:</strong> Thuiswerk dag, flexibele eindtijd</div>
                    <div><strong>Voorbereiding:</strong> Noodcontacten, reserve opvang</div>
                  </div>
                </div>
                
                <div className="p-4 border border-gray-200">
                  <h3 className="font-medium text-gray-600 mb-3">Baby Weigert Voeding op Opvang</h3>
                  <div className="text-sm text-gray-600 space-y-2">
                    <div><strong>Direct:</strong> Kinderopvang bellen voor details</div>
                    <div><strong>Proberen:</strong> Andere speen/merk, partner laten proberen</div>
                    <div><strong>Lange termijn:</strong> Routine herevalueren, training intensiveren</div>
                    <div><strong>Medisch:</strong> Advies indien persistent probleem</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 border border-gray-200">
                <h4 className="font-medium text-gray-600 mb-2">Noodplan Werk + Baby Crisis</h4>
                <div className="text-sm text-gray-600">
                  <strong>Prioriteit:</strong> Gezondheid en veiligheid van de baby altijd eerst → partner contacteren
                  → werk delegeren → noodopvang regelen → medische hulp indien nodig
                </div>
              </div>
            </div>

            {/* Financial planning */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Financiële Planning: Kosten en Besparingen</h2>

              <p className="text-sm text-gray-600 mb-4">De bedragen hieronder zijn ruwe indicaties (prijspeil 2026) en verschillen sterk per gezin, regio en aantal opvangdagen. Reken je eigen situatie na en houd rekening met kinderopvangtoeslag.</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-600 mb-3">Extra Kosten Werkhervatting (indicatief)</h3>
                  <div className="text-sm text-gray-600 space-y-2">
                    <div><strong>Kinderopvang:</strong> globaal enkele honderden euro's per maand, afhankelijk van dagen en toeslag</div>
                    <div><strong>Extra flesvoeding voor de opvang:</strong> beperkt, enkele tientjes per maand</div>
                    <div><strong>Reiskosten:</strong> afhankelijk van woon-werkafstand</div>
                    <div><strong>Extra gemak (kant-en-klaar, dubbele set):</strong> variabel</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-600 mb-3">Kostenvoordeel Flesvoeding (indicatief)</h3>
                  <div className="text-sm text-gray-600 space-y-2">
                    <div><strong>Geen kolfpomp nodig:</strong> eenmalige besparing op aanschaf</div>
                    <div><strong>Geen koelbox of koelkastje op het werk</strong></div>
                    <div><strong>Minder tijdverlies:</strong> geen kolfpauzes tijdens werk</div>
                    <div><strong>Partner kan overnemen:</strong> voedingen volledig te delen</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Handige producten */}
            <AffiliateProductWidget
              pageId="praktische-tips_flesvoeding-werk-combineren"
              title="Handige producten"
            />

            {/* Navigation */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Gerelateerde artikelen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/hygiene-bereiding/flesvoeding-bewaren" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Flesvoeding bewaren →</div>
                  <div className="text-sm text-gray-600">Veilige opslag voor kinderopvang</div>
                </Link>
                <Link href="/kennisbank/praktische-tips/voedingsritme-opbouwen" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Voedingsritme opbouwen →</div>
                  <div className="text-sm text-gray-600">Werkbare schema's ontwikkelen</div>
                </Link>
                <Link href="/kennisbank/praktische-tips/partner-betrekken-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Partner betrekken →</div>
                  <div className="text-sm text-gray-600">Gedeelde verantwoordelijkheden werk</div>
                </Link>
                <Link href="/kennisbank/praktische-tips/geld-besparen-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Geld besparen →</div>
                  <div className="text-sm text-gray-600">Budget tips werkende ouders</div>
                </Link>
              </div>
            </div>

            {/* Calculator CTA */}
            <div className="bg-primary-gradient rounded-2xl shadow-lg p-6 text-white">
              <h2 className="text-lg font-medium text-white mb-4 flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                Optimaliseer je Werk-Schema
              </h2>
              <p className="text-white/90 mb-4">
                Plan je werkdag voedingen perfect. Bereken exact hoeveel ml je baby per voeding 
                nodig heeft op de kinderopvang.
              </p>
              <Link
                href="/"
                className="bg-white/20 hover:bg-white/30 backdrop-blur text-white font-medium py-3 px-6 rounded-xl transition-all inline-flex items-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Gratis Calculator Gebruiken
              </Link>
            </div>

          </div>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <KennisbankSidebar 
            images={[
              {
                src: "/flesvoeding.webp",
                alt: "Flesvoeding voor werkende ouders",
                caption: "Praktische oplossingen voor werkende ouders"
              },
              {
                src: "/sterilisator-babyflessen.webp",
                alt: "Voorbereiding flesvoeding voor werk",
                caption: "Organisatie en planning is alles"
              },
              {
                src: "/close-up-baby.webp",
                alt: "Baby bij kinderopvang",
                caption: "Vertrouwen in goede zorg"
              }
            ]}
            adTopics={[
              'Beste kinderopvang vinden',
              'Werkende ouders verzekeringen',
              'Baby-friendly werkgevers'
            ]}
          />
        </div>
      </div>
    </Layout>
  )
}