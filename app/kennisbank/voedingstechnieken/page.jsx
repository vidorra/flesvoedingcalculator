import Layout from '../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../components/KennisbankSidebar'
import { Wrench, ArrowRight, Home, CheckCircle, AlertTriangle, Heart } from 'lucide-react'

export const metadata = {
  title: 'Fles Klaarmaken & Geven: Stap-voor-Stap Guide + Video Tips',
  description: 'Leer hoe je veilig flesvoeding klaarmaakt en geeft. ✓ Juiste temperatuur ✓ Houding ✓ Steriliseren ✓ Responsive feeding technieken.',
}

function VoedingstechniekenPage() {
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
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
            <Wrench className="w-6 h-6 mr-3 text-primary" />
            Voedingstechnieken
          </h1>
          <p className="text-primary">
            Leer hoe je flesvoeding correct bereidt en geeft voor de beste ervaring voor jou en je baby.
          </p>
        </div>

        {/* Preparation Steps */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Fles klaarmaken - Stap voor stap</h2>
          <div className="space-y-3">
            {preparationSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                  {index + 1}
                </div>
                <span className="text-primary">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Baby Position */}
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-primary mb-4">De juiste houding - Voor de baby</h2>
            <div className="space-y-2">
              {babyPosition.map((position, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-primary text-sm">{position}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottle Position */}
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-primary mb-4">De juiste houding - Voor de fles</h2>
            <div className="space-y-2">
              {bottlePosition.map((position, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-primary text-sm">{position}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Responsive Feeding */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
            <Heart className="w-5 h-5 mr-2" />
            Responsive Feeding
          </h2>
          <p className="text-primary mb-4">Responsive feeding betekent dat je op de signalen van je baby let:</p>
          <div className="space-y-2">
            {responsiveFeeding.map((tip, index) => (
              <div key={index} className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-primary text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sterilization */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Steriliseren van flessen</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-primary mb-3 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2 text-primary" />
                Tot 6 maanden VERPLICHT:
              </h3>
              <ul className="space-y-2 text-sm text-primary">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Uitkoken 10 minuten in pan</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Stoomsterilisator (makkelijkst)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Koude sterilisatie met tabletten</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Magnetron sterilisator</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-3">Na 6 maanden:</h3>
              <ul className="space-y-2 text-sm text-primary">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Goed wassen in heet sop voldoende</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Extra steriliseren bij ziekte</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Spenen blijven steriliseren</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Binding during feeding */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
            <Heart className="w-5 h-5 mr-2" />
            Binding tijdens flesvoeding
          </h2>
          <p className="text-primary mb-4">Flesvoeding is ook een moment van verbinding met je baby:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bondingTips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-2">
                <Heart className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-primary text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Temperature Control */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Temperatuur Controle - Belangrijk!
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-primary mb-3">Juiste temperatuur (37°C):</h3>
              <div className="space-y-2 text-sm text-primary">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Test op pols: moet lauw aanvoelen</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Te heet: wacht tot afgekoeld</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Te koud: warm op in flessenwarmer</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Nooit in magnetron: ongelijke verhitting</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-3">Waarom juiste temperatuur?</h3>
              <div className="space-y-2 text-sm text-primary">
                <div>• Te heet: brandwonden in mond/keel</div>
                <div>• Te koud: baby weigert fles</div>
                <div>• Schommelingen: stress voor baby</div>
                <div>• Lichaamstemperatuur: meest comfortabel</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Veelgestelde Vragen over Voedingstechnieken</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-primary mb-2">Hoelang duurt een voeding normaal?</h3>
              <p className="text-sm text-primary">
                Gemiddeld 15-20 minuten. Korter dan 10 minuten kan te snel zijn (risico overslikken), 
                langer dan 30 minuten kan wijzen op verkeerde speenmaat.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-2">Mijn baby valt in slaap tijdens voeding, wat nu?</h3>
              <p className="text-sm text-primary">
                Dit is normaal, vooral 's nachts. Laat baby rustig drinken. 
                Zorg wel dat baby genoeg binnen krijgt over de hele dag.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-2">Hoeveel moet mijn baby boeren?</h3>
              <p className="text-sm text-primary">
                Niet elke baby hoeft te boeren. Laat baby halverwege even pauzeren. 
                Als baby geen boertje laat na 5 minuten, ga gewoon door met voeden.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-2">Kan ik de fles warm houden?</h3>
              <p className="text-sm text-primary">
                Nee, bereide flesvoeding maximaal 1 uur bewaren op kamertemperatuur. 
                Bacteriën groeien snel in warme melk. Maak altijd vers als dat kan.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-2">Welke speenmaat voor welke leeftijd?</h3>
              <p className="text-sm text-primary">
                0-3 maanden: Small/Slow flow. 3-6 maanden: Medium flow. 
                6+ maanden: Large/Fast flow. Let op signalen van je baby - sommigen hebben voorkeur voor andere flow.
              </p>
            </div>
          </div>
        </div>

        {/* First Time Feeding Guide */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Je Eerste Fles: Stap-voor-Stap voor Beginners</h2>
          
          <div className="space-y-6">
            {/* Mental preparation */}
            <div>
              <h3 className="font-medium text-primary mb-3">Mentale voorbereiding (belangrijker dan je denkt!)</h3>
              <div className="bg-white p-4 rounded-lg">
                <div className="space-y-2 text-sm text-primary">
                  <div>• Geen perfectie verwachten - eerste keer is oefenen</div>
                  <div>• Baby bepaalt het tempo, niet jij</div>
                  <div>• Stress vermijden (baby voelt jouw spanning)</div>
                  <div>• Tijd nemen - geen haast hebben</div>
                  <div>• Focus op positieve momenten</div>
                </div>
              </div>
            </div>

            {/* First feeding signals */}
            <div>
              <h3 className="font-medium text-primary mb-3">Herken eerste keer signalen</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-primary mb-2"> Positieve signalen:</h4>
                  <div className="space-y-1 text-sm text-primary">
                    <div>• Baby zuigt actief</div>
                    <div>• Ontspannen lichaampje</div>
                    <div>• Mogelijk oogcontact</div>
                    <div>• Tevreden na afloop</div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-primary mb-2"> Normale "problemen":</h4>
                  <div className="space-y-1 text-sm text-primary">
                    <div>• Weinig gedronken (normaal!)</div>
                    <div>• Veel gespuugd (komt voor)</div>
                    <div>• Fles geweigerd (niet persoonlijk nemen)</div>
                    <div>• Langer duren dan verwacht</div>
                  </div>
                </div>
              </div>
            </div>

            {/* After feeding */}
            <div>
              <h3 className="font-medium text-primary mb-3">Na de eerste voeding</h3>
              <div className="bg-white p-4 rounded-lg">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-primary">Boertje proberen (geduld hebben)</div>
                      <div className="text-sm text-primary">Soms komt pas na 5-10 minuten</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-primary">Baby rechtop houden (20 minuten)</div>
                      <div className="text-sm text-primary">Voorkomt spugen en reflux</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-primary">Positief afsluiten met knuffel</div>
                      <div className="text-sm text-primary">Reinforcement van de ervaring</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-primary">Fles direct opruimen</div>
                      <div className="text-sm text-primary">Voorkomt bacteriegroei</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Evaluation without judgment */}
            <div>
              <h3 className="font-medium text-primary mb-3">Evalueren zonder oordeel</h3>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-sm text-primary space-y-1">
                  <div>• Focus op wat WEL goed ging</div>
                  <div>• Wat leerde je voor volgende keer?</div>
                  <div>• Hoe reageerde baby (zonder oordeel)?</div>
                  <div>• Remember: eerste keer is nooit perfect</div>
                  <div>• Elke voeding wordt beter</div>
                  <div>• Baby en jij leren samen</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fles Bereiden Section */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Fles Bereiden Stap voor Stap: Van Poeder tot Klare Fles</h2>
          
          <p className="text-primary leading-relaxed mb-4">
            Perfect voeding keer op keer maken. Met de juiste techniek voor veilige fles bereiding volgens 
            Nederlandse richtlijnen wordt elke fles consistent en veilig.
          </p>

          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-6">
            <h3 className="text-primary font-semibold mb-3">🔄 Snelle stappen overzicht:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-3">
                <h4 className="font-medium text-primary mb-1">1. Water voorbereiden</h4>
                <p className="text-primary text-sm">Kook water, laat afkoelen tot 70°C</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <h4 className="font-medium text-primary mb-1">2. Meten & mengen</h4>
                <p className="text-primary text-sm">Juiste ratio: 1 maatlepel per 30ml</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <h4 className="font-medium text-primary mb-1">3. Temperatuur testen</h4>
                <p className="text-primary text-sm">37°C - lauwwarm op pols</p>
              </div>
            </div>
          </div>

          <h3 className="font-medium text-primary mb-4">Gedetailleerd Bereidingsproces</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <h4 className="font-medium text-primary">Stap 1-4: Voorbereiding</h4>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-2">
                <p className="text-primary"><strong>1. Was je handen</strong> grondig met warme zeep</p>
                <p className="text-primary"><strong>2. Steriliseer fles en speen</strong> (eerste 6 maanden)</p>
                <p className="text-primary"><strong>3. Kook water</strong> en laat afkoelen tot 70°C</p>
                <p className="text-primary"><strong>4. Meet water eerst</strong> in de fles</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-primary">Stap 5-8: Mengen & Serveren</h4>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-2">
                <p className="text-primary"><strong>5. Voeg poeder toe</strong> (1 lepel per 30ml)</p>
                <p className="text-primary"><strong>6. Roer en schud</strong> tot volledig opgelost</p>
                <p className="text-primary"><strong>7. Koel af</strong> tot 37°C (lichaamstemperatuur)</p>
                <p className="text-primary"><strong>8. Test en serveer</strong> direct aan baby</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-6">
            <h3 className="text-primary font-semibold mb-3"> Belangrijke Nederlandse Context</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-primary mb-2"> Nederlands Kraanwater:</h4>
                <ul className="text-primary text-sm space-y-1">
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Wereldklasse kwaliteit, EU-standaarden</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Oudere huizen (voor 1960): laat 2-3 min lopen</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Koken verplicht voor baby's onder 6 maanden</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Winter: kouder, langer opwarmen</span>
                </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-primary mb-2">🌡️ Temperatuur Tips:</h4>
                <ul className="text-primary text-sm space-y-1">
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>70°C voor poeder (bacteriën doden)</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>37°C voor serveren (lichaamstemperatuur)</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Polstest betrouwbaarder dan thermometer</span>
                </li>
                  <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Nederlandse klimaat: snellere afkoeling</span>
                </li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="font-medium text-primary mb-4">Juiste Meng Verhoudingen</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 font-medium">Merk</th>
                  <th className="text-left p-3 font-medium">Ratio</th>
                  <th className="text-left p-3 font-medium">Water</th>
                  <th className="text-left p-3 font-medium">Poeder</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Standaard (alle merken)</td>
                  <td className="p-3">1:30</td>
                  <td className="p-3">30ml</td>
                  <td className="p-3">1 gestreepte maatlepel</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="p-3">Nutrilon, Hero Baby, Kruidvat</td>
                  <td className="p-3">1:30</td>
                  <td className="p-3">30ml</td>
                  <td className="p-3">1 bijgeleverde maatlepel</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <h3 className="text-primary font-medium mb-2"> Veelgemaakte fouten:</h3>
              <ul className="text-primary text-sm space-y-1">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Te veel poeder (nierbelasting, gevaarlijk)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Magnetron gebruik (hete plekken)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Hergebruik restjes (bacteriegroei)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Verkeerde maatlepel tussen merken</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Bolle lepels i.p.v. gestreept</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <h3 className="text-primary font-medium mb-2"> Tips voor success:</h3>
              <ul className="text-primary text-sm space-y-1">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Heb alles klaar voordat je begint</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Thermosfles met gekookt water voor nacht</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Controleer vervaldatum poeder</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Bewaar poeder droog en koel</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Gebruik binnen 4 weken na openen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Visual Guide Highlight */}
        <div className="bg-primary-gradient rounded-2xl shadow-lg p-6 text-white">
          <h2 className="text-lg font-semibold text-white mb-4">Visuele Stap-voor-Stap Guide</h2>
          <p className="text-white/90 mb-4">
            Wil je een visuele guide met alle bereidingsstappen? Bekijk onze handige infographic!
          </p>
          <Link 
            href="/infographics"
            className="bg-white/20 hover:bg-white/30 backdrop-blur text-white font-medium py-3 px-6 rounded-xl transition-all inline-flex items-center"
          >
            <ArrowRight className="w-5 h-5 mr-2" />
            Bekijk Visuele Guides
          </Link>
        </div>

        {/* Navigation */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Gerelateerde informatie</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Link 
              href="/kennisbank/hygiene-bereiding"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-primary">Hygiëne & Bereiding →</div>
              <div className="text-sm text-primary">Veilig bereiden en bewaren</div>
            </Link>
            <Link 
              href="/kennisbank/problemen-oplossen"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-primary">Problemen Oplossen →</div>
              <div className="text-sm text-primary">Hulp bij veelvoorkomende problemen</div>
            </Link>
            <Link 
              href="/kennisbank/soorten-flesvoeding"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-primary">Soorten Flesvoeding →</div>
              <div className="text-sm text-primary">Welk type voor welke leeftijd</div>
            </Link>
          </div>
          </div>
        </div>
      </div>
        <div className="col-span-12 lg:col-span-5">
          <KennisbankSidebar 
            images={[
              '/images/voedingstechnieken-1.jpg',
              '/images/voedingstechnieken-2.jpg',
              '/images/voedingstechnieken-3.jpg'
            ]}
            adTopics={[
              'Beste flessenwarmer kopen',
              'Kwaliteitsflessen voor baby',
              'Veilige sterilisatoren vergelijken'
            ]}
          />
        </div>
      </div>
    </Layout>
  )
}

export default VoedingstechniekenPage