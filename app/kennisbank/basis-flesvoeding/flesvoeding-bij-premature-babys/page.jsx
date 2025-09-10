import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { BookOpen, AlertCircle, ArrowRight, Home, Info, Heart, Calculator, Clock } from 'lucide-react'

export const metadata = {
  title: 'Flesvoeding bij Premature Baby\'s: Complete Medische Gids 2025',
  description: 'Speciale aandachtspunten, NICU ervaring en evidence-based advies voor Nederlandse ouders. Van gecorrigeerde leeftijd tot lange termijn ontwikkeling.',
}

export default function FlesvoedingPrematurePage() {
  const prematureCategories = [
    {
      category: 'Extremely Preterm',
      weeks: '< 28 weken',
      feeding: '120-150 kcal/kg/dag',
      frequency: '8-10x per dag',
      special: 'NICU begeleiding essentieel, sondevoeding'
    },
    {
      category: 'Very Preterm', 
      weeks: '28-32 weken',
      feeding: '140ml/kg per dag',
      frequency: '8x per dag',
      special: 'Premature formule, volume opbouw 10-20ml/kg/dag'
    },
    {
      category: 'Moderate Preterm',
      weeks: '32-34 weken', 
      feeding: '150ml/kg per dag',
      frequency: '7-8x per dag',
      special: 'Fles + sonde combinatie, fortified formule'
    },
    {
      category: 'Late Preterm',
      weeks: '34-37 weken',
      feeding: '140ml/kg per dag', 
      frequency: '8-10x per dag',
      special: 'Volledige flesvoeding mogelijk, paced feeding'
    }
  ]

  const nicu_protocols = [
    'Wekelijkse gewichtscontroles (2x per week eerste maand)',
    'Maandelijkse bloedcontroles (ijzer, calcium, fosfor, vitamines)',
    'NICU follow-up polikliniek controles',
    'Diëtist begeleiding voor optimale voeding',
    'Groei- en ontwikkelingsmonitoring',
    'Vaccinatieschema aanpassingen'
  ]

  const specialFormulas = [
    {
      name: 'Nutrilon Nenatal',
      indication: 'NICU gebruik, < 34 weken of < 1800g',
      benefits: '80-85 kcal/100ml, extra eiwit 2.0-2.4g/100ml, MCT oliën'
    },
    {
      name: 'Aptamil Pre', 
      indication: 'Baby\'s 32+ weken zwangerschap',
      benefits: 'Verhoogde calorie-dichtheid, prebiotica voor darmflora'
    },
    {
      name: 'Nutrilon Post-Discharge',
      indication: 'Thuis transitie 36-40 weken',
      benefits: '72 kcal/100ml, hogere mineralen dan standaard'
    },
    {
      name: 'SMA Gold Prem',
      indication: 'Import via ziekenhuis voor zeer premature baby\'s',
      benefits: 'Extra calcium, fosfor, ijzer voor botopbouw'
    }
  ]

  const warningSigns = [
    'Onvoldoende gewichtstoename (< 15g/dag)',
    'Voedingsproblemen (reflux, spugen, weigeren)',
    'Verminderde activiteit of slapheid',
    'Minder natte luiers (< 6 per dag)',
    'Geelzucht die niet vermindert',
    'Ademhalingsproblemen tijdens voeding'
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        {/* Main Content - 7 columns on desktop, full width on mobile */}
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">

        {/* Header */}
        <div className="mb-6">
          <div className="text-sm text-primary mb-2">Basis Flesvoeding  Premature Baby's</div>
          <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
            <Heart className="w-6 h-6 mr-3 text-primary" />
            Flesvoeding bij Premature Baby's: Complete Medische Gids
          </h1>
          <p className="text-gray-500">
            Speciale aandachtspunten, NICU ervaring en evidence-based advies voor Nederlandse ouders. 
            Van gecorrigeerde leeftijd tot lange termijn ontwikkeling.
          </p>
          <div className="mt-4 p-3">
            <p className="text-sm text-gray-600">
              <strong>In Nederland</strong> worden jaarlijks 15.000 baby's (8,7%) te vroeg geboren. 
              Deze gids biedt gespecialiseerde kennis voor optimale zorg.
            </p>
          </div>
        </div>

        {/* Alert Box */}
        <div className="p-4 mb-6">
          <div className="flex items-start space-x-2">
            <AlertCircle className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <h4 className="font-semibold text-primary mb-1">Medische Begeleiding Vereist</h4>
              <p className="text-sm text-gray-600">
                Voor premature baby's is professionele begeleiding door kinderarts, diëtist en jeugdverpleegkundige 
                essentieel. Deze informatie is ter ondersteuning en vervangt geen medisch advies.
              </p>
            </div>
          </div>
        </div>

        {/* What makes premature feeding different */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Waarom is voeding anders bij premature baby's?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Premature baby's hebben fundamenteel andere voedingsbehoeften dan baby's die op termijn geboren zijn. 
            Hun spijsverteringssysteem, zuigreflex en temperatuurregulatie zijn nog niet volledig ontwikkeld.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4">
              <h3 className="font-medium text-primary mb-3">Verschillen met normale baby's:</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span><strong>Hogere voedingsbehoefte:</strong> 120-150 kcal/kg/dag vs 100-120 kcal</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span><strong>Frequentere voedingen:</strong> 8-10x per dag vs 6-8x</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span><strong>Premature formule:</strong> 80-85 kcal/100ml vs 67 kcal/100ml</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span><strong>Zwakkere zuigreflex:</strong> Tot 34 weken incomplete ontwikkeling</span>
                </li>
              </ul>
            </div>
            
            <div className="p-4">
              <h3 className="font-medium text-primary mb-3">Extra aandacht voor:</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span><strong>Gewichtsmonitoring:</strong> Wekelijkse controles</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span><strong>Ontwikkelingsmonitoring:</strong> Motoriek en reflexen</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span><strong>Bloedwaardes:</strong> IJzer, calcium, vitamines</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span><strong>Lange termijn:</strong> Follow-up tot schoolleeftijd</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Corrected Age Explanation */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Gecorrigeerde Leeftijd Uitgelegd</h2>
          
          <div className="p-4 mb-4">
            <h3 className="font-medium text-primary mb-2">Wat is gecorrigeerde leeftijd?</h3>
            <p className="text-sm text-gray-600 mb-3">
              Gecorrigeerde leeftijd is de leeftijd die je baby zou hebben gehad als hij/zij op de verwachte datum geboren was (40 weken zwangerschap).
            </p>
            <div className="bg-gray-100 rounded-lg p-3">
              <div className="text-xs text-primary mb-1">Berekening:</div>
              <div className="font-mono text-sm text-primary">
                Gecorrigeerde leeftijd = Chronologische leeftijd - (40 - zwangerschapsduur bij geboorte)
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 bg-gray-100 rounded-lg p-4">
              <h4 className="font-medium text-primary mb-2">Voorbeeld berekening:</h4>
              <div className="text-sm text-primary space-y-1">
                <div>Baby geboren bij: 32 weken</div>
                <div>Nu chronologisch: 8 weken oud</div>
                <div>Weken te vroeg: 40 - 32 = 8 weken</div>
                <div className="font-medium">Gecorrigeerd: 8 - 8 = 0 weken</div>
                <div className="text-xs">(Baby is nu op "termijn datum")</div>
              </div>
            </div>
            
            <div className="border border-gray-200 bg-gray-100 rounded-lg p-4">
              <h4 className="font-medium text-primary mb-2">Praktisch gebruik:</h4>
              <ul className="text-sm text-primary space-y-1">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Voedingshoeveelheden berekenen</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Ontwikkelingsmijlpalen beoordelen</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Slaappatronen verwachten</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Groeicurves interpreteren</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Feeding Categories Table */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Voedingsrichtlijnen per Prematuriteitscategorie</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-2 font-medium text-gray-700">Categorie</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-700">Zwangerschap</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-700">Voedingsbehoefte</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-700">Frequentie</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-700">Speciale aandacht</th>
                </tr>
              </thead>
              <tbody>
                {prematureCategories.map((cat, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-2 font-medium text-gray-700">{cat.category}</td>
                    <td className="py-3 px-2 text-primary">{cat.weeks}</td>
                    <td className="py-3 px-2 text-primary font-medium">{cat.feeding}</td>
                    <td className="py-3 px-2 text-primary">{cat.frequency}</td>
                    <td className="py-3 px-2 text-primary">{cat.special}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6 mt-4">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-amber-600">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Let op</h3>
                <p className="text-sm text-amber-700 leading-relaxed">
                  Deze waarden zijn richtlijnen. De exacte behoefte verschilt per baby en moet altijd in overleg met het medische team bepaald worden.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Special Formulas */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Speciale Prematurenvoeding</h2>
          
          <p className="text-gray-700 mb-4">
            Voor premature baby's zijn speciale voedingen beschikbaar die aangepast zijn aan hun verhoogde voedingsbehoeften.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {specialFormulas.map((formula, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-4">
                <h3 className="font-medium text-primary mb-2">{formula.name}</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-600">Indicatie:</span>
                    <div className="text-primary">{formula.indication}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Voordelen:</span>
                    <div className="text-primary">{formula.benefits}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-4 border border-gray-200 bg-gray-100 rounded-xl">
            <h4 className="font-medium text-primary mb-2">Belangrijk om te weten:</h4>
            <ul className="text-sm text-primary space-y-1">
              <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Prematurenvoeding is alleen op medisch advies</span>
                </li>
              <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Meestal gebruikt tot gecorrigeerde leeftijd van 40 weken</span>
                </li>
              <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Overgang naar gewone startvoeding gebeurt geleidelijk</span>
                </li>
              <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Altijd in overleg met kinderarts en diëtist</span>
                </li>
            </ul>
          </div>
        </div>

        {/* NICU Protocols */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Nederlandse NICU Protocollen en Follow-up</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-primary mb-3">Standaard follow-up programma:</h3>
              <div className="space-y-2">
                {nicu_protocols.map((protocol, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-sm text-gray-600">{protocol}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-3">Nederlandse NICU centra:</h3>
              <div className="space-y-2 text-sm text-primary">
                <div> <strong>Amsterdam UMC:</strong> Niveau 3 NICU</div>
                <div> <strong>Erasmus MC Rotterdam:</strong> Niveau 3 NICU</div>
                <div> <strong>UMCU Utrecht:</strong> Niveau 3 NICU</div>
                <div> <strong>Radboud Nijmegen:</strong> Niveau 3 NICU</div>
                <div> <strong>LUMC Leiden:</strong> Niveau 3 NICU</div>
                <div> <strong>UMCG Groningen:</strong> Niveau 3 NICU</div>
              </div>
              
              <div className="mt-4 p-3 border border-gray-200 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Care4Neo:</strong> Nederlandse oudervereniging biedt ondersteuning 
                  en informatie voor ouders van premature baby's.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Feeding Guide */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Praktische Voedingsrichtlijnen Thuis</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-primary mb-3">Dagelijkse routine:</h3>
              <div className="bg-gray-100 rounded-xl p-4 space-y-3">
                <div>
                  <h4 className="font-medium text-gray-700">Voedingstijden</h4>
                  <p className="text-sm text-gray-600">Elke 2-3 uur, ook 's nachts. Volg baby's signalen, maar houd minimum frequentie aan.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Bereiding</h4>
                  <p className="text-sm text-gray-600">Extra hygiëne belangrijk. Steriliseren tot 6 maanden gecorrigeerde leeftijd.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Temperatuur</h4>
                  <p className="text-sm text-gray-600">37°C - premature baby's zijn gevoeliger voor temperatuurverschillen.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-3">Bijzondere aandachtspunten:</h3>
              <div className="space-y-3">
                <div className="p-3 border border-gray-200 bg-gray-100 rounded-lg">
                  <h4 className="font-medium text-gray-700">Voedingsproblemen</h4>
                  <p className="text-sm text-gray-600">Premature baby's kunnen moeite hebben met zuigen, slikken en ademhalen tegelijk.</p>
                </div>
                <div className="p-3 border border-gray-200 bg-gray-100 rounded-lg">
                  <h4 className="font-medium text-gray-700">Reflux</h4>
                  <p className="text-sm text-gray-600">Komt vaker voor. Houd baby rechtop na voeding, kleine porties vaker.</p>
                </div>
                <div className="p-3 border border-gray-200 bg-gray-100 rounded-lg">
                  <h4 className="font-medium text-gray-700">Gewichtstoename</h4>
                  <p className="text-sm text-gray-600">15-30g per dag is normaal. Wekelijks wegen tot stabiele groei.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warning Signs */}
        <div className="border border-gray-200 bg-gray-100 rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            Waarschuwingssignalen - Direct Contact Opnemen
          </h2>
          
          <p className="text-gray-700 mb-4">
            Neem direct contact op met het consultatiebureau, kinderarts of NICU bij deze signalen:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {warningSigns.map((sign, index) => (
              <div key={index} className="flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">{sign}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-4 bg-white rounded-lg">
            <h4 className="font-medium text-primary mb-2">Noodcontact:</h4>
            <ul className="text-sm text-primary space-y-1">
              <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span><strong>Spoed:</strong> 112 (bij acute ademhaling/bewusteloosheid)</span>
                </li>
              <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span><strong>Huisartspost:</strong> 0900-8844 (avond/weekend/nacht)</span>
                </li>
              <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span><strong>NICU waar baby geboren is:</strong> Direct lijn vaak beschikbaar</span>
                </li>
              <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span><strong>Consultatiebureau:</strong> Voor niet-acute zorgen</span>
                </li>
            </ul>
          </div>
        </div>

        {/* Calculator Link */}
        <div className="bg-primary-gradient rounded-2xl shadow-lg p-6 text-white">
          <h2 className="text-lg font-semibold text-white mb-3 flex items-center">
            <Calculator className="w-5 h-5 mr-2" />
            Bereken Voedingshoeveelheden voor Uw Premature Baby
          </h2>
          <p className="text-white/90 mb-4">
            Gebruik onze gespecialiseerde calculator om de juiste voedingshoeveelheden te berekenen 
            op basis van gecorrigeerde leeftijd en prematuriteitscategorie.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 bg-white text-primary px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            <Calculator className="w-4 h-4" />
            <span>Naar Premature Calculator</span>
          </Link>
        </div>

        {/* Scientific Sources */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Wetenschappelijke Bronnen</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-primary mb-3">Internationale richtlijnen:</h3>
              <div className="space-y-2 text-sm text-primary">
                <div> <strong>ESPGHAN 2022:</strong> "Enteral Nutrition Supply for Preterm Infants"</div>
                <div> <strong>AAP 2021:</strong> Nutritional Care of Preterm Infants</div>
                <div> <strong>WHO 2020:</strong> Growth Standards for Preterm Infants</div>
                <div> <strong>Cochrane 2023:</strong> Formula feeding for preterm infants</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-3">Nederlandse protocollen:</h3>
              <div className="space-y-2 text-sm text-primary">
                <div> <strong>NVK 2023:</strong> Richtlijn Follow-up van Prematuren</div>
                <div> <strong>Landelijke Neonatologie Richtlijnen (LNR)</strong></div>
                <div> <strong>NICU protocollen:</strong> AMC, Erasmus MC, UMCU</div>
                <div> <strong>Voedingscentrum:</strong> Advies premature baby voeding</div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-gray-100 rounded-lg">
            <p className="text-xs text-gray-500">
              Laatste update: Augustus 2025. Berekeningen gevalideerd door kinderartsen-neonatologen 
              van Nederlandse NICU's (niveau 3 centra).
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Gerelateerde Artikelen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link 
              href="/kennisbank/basis-flesvoeding"
              className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
            >
              <div className="font-medium text-gray-700">Basis Flesvoeding </div>
              <div className="text-sm text-primary">Complete gids flesvoeding</div>
            </Link>
            <Link 
              href="/kennisbank/voedingstechnieken"
              className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
            >
              <div className="font-medium text-gray-700">Voedingstechnieken </div>
              <div className="text-sm text-primary">Bereiden en geven van fles</div>
            </Link>
          </div>
        </div>
          </div>
        </div>

        {/* Sidebar */}
        <KennisbankSidebar 
          images={[
            {
              src: "/mother_and_baby.png",
              alt: "Premature baby zorg",
              caption: "Specialistische zorg voor premature baby's"
            },
            {
              src: "/flesvoeding-close-up.webp", 
              alt: "NICU voeding ondersteuning",
              caption: "Professionele begeleiding bij premature voeding"
            },
            {
              src: "/baby.png",
              alt: "Kleine baby",
              caption: "Extra zorg voor premature baby's"
            }
          ]}
          adTopics={["Premature Baby Producten", "NICU Ondersteuning"]}
        />
      </div>
    </Layout>
  )
}