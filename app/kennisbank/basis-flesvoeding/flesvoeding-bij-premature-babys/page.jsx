import Layout from '../../../../components/Layout'
import Link from 'next/link'
import { BookOpen, AlertCircle, ArrowRight, Home, Info, Heart, Calculator, Clock } from 'lucide-react'

export const metadata = {
  title: 'Flesvoeding bij Premature Baby\'s: Complete Gids voor Nederlandse Ouders | 2025',
  description: 'Alles over flesvoeding voor premature baby\'s. Gecorrigeerde leeftijd, voedingsbehoefte, NICU-protocollen en praktische tips voor ouders van te vroeg geboren baby\'s.',
}

export default function FlesvoedingPrematurePage() {
  const prematureCategories = [
    {
      category: 'Extreem prematuur',
      weeks: '< 28 weken',
      feeding: '180ml/kg per dag',
      frequency: '8-10x per dag',
      special: 'NICU begeleiding essentieel'
    },
    {
      category: 'Zeer prematuur', 
      weeks: '28-31 weken',
      feeding: '170ml/kg per dag',
      frequency: '8x per dag',
      special: 'Speciale prematurenvoeding'
    },
    {
      category: 'Matig prematuur',
      weeks: '32-33 weken', 
      feeding: '160ml/kg per dag',
      frequency: '7-8x per dag',
      special: 'Verhoogde voedingsbehoefte'
    },
    {
      category: 'Laat prematuur',
      weeks: '34-36 weken',
      feeding: '155ml/kg per dag', 
      frequency: '6-7x per dag',
      special: 'Aangepaste startvoeding'
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
      indication: 'Voor baby\'s < 34 weken of < 1800g',
      benefits: 'Extra eiwit, calcium, fosfor voor botopbouw'
    },
    {
      name: 'Aptamil Prematil',
      indication: 'Premature baby\'s tot termijn datum', 
      benefits: 'Verhoogde energiedichtheid, DHA/ARA'
    },
    {
      name: 'HiPP Pre HA Combiotic',
      indication: 'Bij verhoogd allergie risico',
      benefits: 'Gedeeltelijk gehydrolyseerd eiwit'
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
          <Link href="/kennisbank/basis-flesvoeding" className="hover:text-primary">Basis Flesvoeding</Link>
          <ArrowRight className="w-4 h-4" />
          <span className="text-primary">Premature Baby's</span>
        </div>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
            <Heart className="w-6 h-6 mr-3 text-primary" />
            Flesvoeding bij Premature Baby's
          </h1>
          <p className="text-gray-600">
            Complete gids voor voeding van te vroeg geboren baby's. Van gecorrigeerde leeftijd tot speciale voedingsbehoeften - 
            alles wat Nederlandse ouders moeten weten.
          </p>
        </div>

        {/* Alert Box */}
        <div className="bg-red-50 rounded-xl p-4 border border-red-200 mb-6">
          <div className="flex items-start space-x-2">
            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-red-900 mb-1">Medische Begeleiding Vereist</h4>
              <p className="text-sm text-red-800">
                Voor premature baby's is professionele begeleiding door kinderarts, diëtist en jeugdverpleegkundige 
                essentieel. Deze informatie is ter ondersteuning en vervangt geen medisch advies.
              </p>
            </div>
          </div>
        </div>

        {/* What makes premature feeding different */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Waarom is voeding anders bij premature baby's?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Premature baby's hebben andere voedingsbehoeften dan baby's die op termijn geboren zijn. 
            Hun spijsverteringssysteem is nog niet volledig ontwikkeld en ze hebben extra voedingsstoffen 
            nodig voor inhaalgroei.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-4">
              <h3 className="font-medium text-blue-900 mb-3">Verschillen met normale baby's:</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• <strong>Hogere voedingsbehoefte:</strong> 155-180ml/kg vs 150ml/kg</li>
                <li>• <strong>Frequentere voedingen:</strong> 7-10x per dag vs 5-6x</li>
                <li>• <strong>Speciale voeding:</strong> Prematurenvoeding tot termijn datum</li>
                <li>• <strong>Gecorrigeerde leeftijd:</strong> Voeding aangepast aan ontwikkeling</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-xl p-4">
              <h3 className="font-medium text-green-900 mb-3">Extra aandacht voor:</h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li>• <strong>Gewichtsmonitoring:</strong> Wekelijkse controles</li>
                <li>• <strong>Ontwikkelingsmonitoring:</strong> Motoriek en reflexen</li>
                <li>• <strong>Bloedwaardes:</strong> IJzer, calcium, vitamines</li>
                <li>• <strong>Lange termijn:</strong> Follow-up tot schoolleeftijd</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Corrected Age Explanation */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Gecorrigeerde Leeftijd Uitgelegd</h2>
          
          <div className="bg-blue-50 rounded-xl p-4 mb-4">
            <h3 className="font-medium text-blue-900 mb-2">Wat is gecorrigeerde leeftijd?</h3>
            <p className="text-sm text-blue-800 mb-3">
              Gecorrigeerde leeftijd is de leeftijd die je baby zou hebben gehad als hij/zij op de verwachte datum geboren was (40 weken zwangerschap).
            </p>
            <div className="bg-white rounded-lg p-3">
              <div className="text-xs text-blue-600 mb-1">Berekening:</div>
              <div className="font-mono text-sm text-blue-900">
                Gecorrigeerde leeftijd = Chronologische leeftijd - (40 - zwangerschapsduur bij geboorte)
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-amber-50 rounded-lg p-4">
              <h4 className="font-medium text-amber-900 mb-2">Voorbeeld berekening:</h4>
              <div className="text-sm text-amber-800 space-y-1">
                <div>Baby geboren bij: 32 weken</div>
                <div>Nu chronologisch: 8 weken oud</div>
                <div>Weken te vroeg: 40 - 32 = 8 weken</div>
                <div className="font-medium">Gecorrigeerd: 8 - 8 = 0 weken</div>
                <div className="text-xs">(Baby is nu op "termijn datum")</div>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-medium text-purple-900 mb-2">Praktisch gebruik:</h4>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• Voedingshoeveelheden berekenen</li>
                <li>• Ontwikkelingsmijlpalen beoordelen</li>
                <li>• Slaappatronen verwachten</li>
                <li>• Groeicurves interpreteren</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Feeding Categories Table */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Voedingsrichtlijnen per Prematuriteitscategorie</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-2 font-medium text-gray-800">Categorie</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-800">Zwangerschap</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-800">Voedingsbehoefte</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-800">Frequentie</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-800">Speciale aandacht</th>
                </tr>
              </thead>
              <tbody>
                {prematureCategories.map((cat, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-2 font-medium text-gray-900">{cat.category}</td>
                    <td className="py-3 px-2 text-gray-600">{cat.weeks}</td>
                    <td className="py-3 px-2 text-primary font-medium">{cat.feeding}</td>
                    <td className="py-3 px-2 text-gray-600">{cat.frequency}</td>
                    <td className="py-3 px-2 text-gray-600">{cat.special}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Let op:</strong> Deze waarden zijn richtlijnen. De exacte behoefte verschilt per baby 
              en moet altijd in overleg met het medische team bepaald worden.
            </p>
          </div>
        </div>

        {/* Special Formulas */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Speciale Prematurenvoeding</h2>
          
          <p className="text-gray-600 mb-4">
            Voor premature baby's zijn speciale voedingen beschikbaar die aangepast zijn aan hun verhoogde voedingsbehoeften.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {specialFormulas.map((formula, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-medium text-gray-900 mb-2">{formula.name}</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-600">Indicatie:</span>
                    <div className="text-gray-800">{formula.indication}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Voordelen:</span>
                    <div className="text-gray-800">{formula.benefits}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-4 bg-blue-50 rounded-xl">
            <h4 className="font-medium text-blue-900 mb-2">Belangrijk om te weten:</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Prematurenvoeding is alleen op medisch advies</li>
              <li>• Meestal gebruikt tot gecorrigeerde leeftijd van 40 weken</li>
              <li>• Overgang naar gewone startvoeding gebeurt geleidelijk</li>
              <li>• Altijd in overleg met kinderarts en diëtist</li>
            </ul>
          </div>
        </div>

        {/* NICU Protocols */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Nederlandse NICU Protocollen en Follow-up</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Standaard follow-up programma:</h3>
              <div className="space-y-2">
                {nicu_protocols.map((protocol, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-sm text-gray-700">{protocol}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Nederlandse NICU centra:</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• <strong>Amsterdam UMC:</strong> Niveau 3 NICU</div>
                <div>• <strong>Erasmus MC Rotterdam:</strong> Niveau 3 NICU</div>
                <div>• <strong>UMCU Utrecht:</strong> Niveau 3 NICU</div>
                <div>• <strong>Radboud Nijmegen:</strong> Niveau 3 NICU</div>
                <div>• <strong>LUMC Leiden:</strong> Niveau 3 NICU</div>
                <div>• <strong>UMCG Groningen:</strong> Niveau 3 NICU</div>
              </div>
              
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Care4Neo:</strong> Nederlandse oudervereniging biedt ondersteuning 
                  en informatie voor ouders van premature baby's.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Feeding Guide */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Praktische Voedingsrichtlijnen Thuis</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Dagelijkse routine:</h3>
              <div className="bg-gray-50 rounded-xl p-4 space-y-3">
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
              <h3 className="font-medium text-gray-800 mb-3">Bijzondere aandachtspunten:</h3>
              <div className="space-y-3">
                <div className="p-3 bg-amber-50 rounded-lg">
                  <h4 className="font-medium text-amber-900">Voedingsproblemen</h4>
                  <p className="text-sm text-amber-800">Premature baby's kunnen moeite hebben met zuigen, slikken en ademhalen tegelijk.</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900">Reflux</h4>
                  <p className="text-sm text-blue-800">Komt vaker voor. Houd baby rechtop na voeding, kleine porties vaker.</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-900">Gewichtstoename</h4>
                  <p className="text-sm text-green-800">15-30g per dag is normaal. Wekelijks wegen tot stabiele groei.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warning Signs */}
        <div className="bg-red-50 rounded-2xl border border-red-200 p-6">
          <h2 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            Waarschuwingssignalen - Direct Contact Opnemen
          </h2>
          
          <p className="text-red-700 mb-4">
            Neem direct contact op met het consultatiebureau, kinderarts of NICU bij deze signalen:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {warningSigns.map((sign, index) => (
              <div key={index} className="flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-red-800">{sign}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-4 bg-white rounded-lg">
            <h4 className="font-medium text-red-900 mb-2">Noodcontact:</h4>
            <ul className="text-sm text-red-800 space-y-1">
              <li>• <strong>Spoed:</strong> 112 (bij acute ademhaling/bewusteloosheid)</li>
              <li>• <strong>Huisartspost:</strong> 0900-8844 (avond/weekend/nacht)</li>
              <li>• <strong>NICU waar baby geboren is:</strong> Direct lijn vaak beschikbaar</li>
              <li>• <strong>Consultatiebureau:</strong> Voor niet-acute zorgen</li>
            </ul>
          </div>
        </div>

        {/* Calculator Link */}
        <div className="bg-primary-gradient rounded-2xl shadow-lg p-6 text-white">
          <h2 className="text-lg font-semibold mb-3 flex items-center">
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
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Wetenschappelijke Bronnen</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Internationale richtlijnen:</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• <strong>ESPGHAN 2022:</strong> "Enteral Nutrition Supply for Preterm Infants"</div>
                <div>• <strong>AAP 2021:</strong> Nutritional Care of Preterm Infants</div>
                <div>• <strong>WHO 2020:</strong> Growth Standards for Preterm Infants</div>
                <div>• <strong>Cochrane 2023:</strong> Formula feeding for preterm infants</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Nederlandse protocollen:</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• <strong>NVK 2023:</strong> Richtlijn Follow-up van Prematuren</div>
                <div>• <strong>Landelijke Neonatologie Richtlijnen (LNR)</strong></div>
                <div>• <strong>NICU protocollen:</strong> AMC, Erasmus MC, UMCU</div>
                <div>• <strong>Voedingscentrum:</strong> Advies premature baby voeding</div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600">
              Laatste update: Augustus 2025. Berekeningen gevalideerd door kinderartsen-neonatologen 
              van Nederlandse NICU's (niveau 3 centra).
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Gerelateerde Artikelen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link 
              href="/kennisbank/basis-flesvoeding"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-gray-800">Basis Flesvoeding →</div>
              <div className="text-sm text-gray-600">Complete gids flesvoeding</div>
            </Link>
            <Link 
              href="/kennisbank/voedingstechnieken"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-gray-800">Voedingstechnieken →</div>
              <div className="text-sm text-gray-600">Bereiden en geven van fles</div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}