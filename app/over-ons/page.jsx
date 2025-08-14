import Layout from '../../components/Layout'
import { Users, Heart, Star, Calculator, BookOpen } from 'lucide-react'

export default function OverOnsPage() {
  const team = [
    {
      name: 'Medisch Expert',
      role: 'Kinderarts & Voedingsspecialist',
      bio: 'Ons medisch team heeft uitgebreide ervaring in de kindergeneeskunde en specialiseert zich in voeding voor zuigelingen.',
      avatar: '👩‍⚕️'
    },
    {
      name: 'Voedingsspecialist',
      role: 'Verloskundige & Lactatie Expert',
      bio: 'Onze voedingsexperts begeleiden ouders bij voedingsvragen en hebben uitgebreide kennis van zowel borst- als flesvoeding.',
      avatar: '👩‍💼'
    },
    {
      name: 'Ontwikkelingsteam',
      role: 'Ontwikkelaars & Ouders',
      bio: 'Ons team ontwikkelde deze tool vanuit eigen ervaring als ouders en passie voor het helpen van andere ouders.',
      avatar: '👨‍💻'
    }
  ]

  return (
    <Layout>
      <div className="space-y-6">
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
            <Users className="w-6 h-6 mr-3 text-blue-500" />
            Over Ons
          </h1>
          <p className="text-gray-600">
            Leer meer over ons team, onze missie en waarom je onze flesvoeding calculator kunt vertrouwen.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Heart className="w-6 h-6 mr-2 text-red-300" />
            Onze Missie
          </h2>
          <p className="text-blue-100 leading-relaxed">
            Wij geloven dat elke ouder toegang moet hebben tot betrouwbare, evidence-based informatie over flesvoeding. 
            Onze missie is om ouders te ondersteunen met praktische tools en kennis, zodat ze zelfverzekerde beslissingen 
            kunnen nemen over de voeding van hun baby. We maken complexe voedingsrichtlijnen toegankelijk en begrijpelijk 
            voor iedereen.
          </p>
        </div>

        {/* Why Trust Us */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h2 className="font-semibold text-gray-800 mb-4 flex items-center">
            <Star className="w-5 h-5 mr-2 text-blue-500" />
            Waarom FlesvoedingCalculator.nl vertrouwen?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Evidence-Based</h3>
                  <p className="text-sm text-gray-600">Gebaseerd op officiële Nederlandse richtlijnen van het Voedingscentrum en het Nederlands Centrum Jeugdgezondheid.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Expert Team</h3>
                  <p className="text-sm text-gray-600">Ontwikkeld door kinderartsen, verloskundigen en voedingsspecialisten met jarenlange ervaring.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Regelmatig Geüpdatet</h3>
                  <p className="text-sm text-gray-600">Onze informatie wordt regelmatig gecontroleerd en bijgewerkt volgens de laatste inzichten.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Privacy Gewaarborgd</h3>
                  <p className="text-sm text-gray-600">We bewaren geen persoonlijke gegevens en respecteren volledig uw privacy.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Gratis Toegankelijk</h3>
                  <p className="text-sm text-gray-600">Alle informatie en tools zijn gratis beschikbaar voor alle ouders in Nederland.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Gebruiksvriendelijk</h3>
                  <p className="text-sm text-gray-600">Ontwikkeld met ouders, voor ouders. Simpel en duidelijk in gebruik.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Method */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h2 className="font-semibold text-gray-800 mb-4 flex items-center">
            <Calculator className="w-5 h-5 mr-2 text-blue-500" />
            Onze Methode
          </h2>
          
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-xl p-4">
              <h3 className="font-medium text-blue-800 mb-2">Nederlandse Richtlijnen</h3>
              <p className="text-sm text-blue-700">
                Onze calculator gebruikt de officiële Nederlandse norm van 150ml flesvoeding per kg lichaamsgewicht per dag, 
                aangepast voor leeftijd volgens de richtlijnen van het Voedingscentrum.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-4">
              <h3 className="font-medium text-green-800 mb-2">Leeftijdsaanpassingen</h3>
              <p className="text-sm text-green-700">
                De berekening wordt automatisch aangepast op basis van de leeftijd van uw baby, omdat voedingsbehoeften 
                veranderen naarmate baby&apos;s groeien en ontwikkelen.
              </p>
            </div>
            
            <div className="bg-amber-50 rounded-xl p-4">
              <h3 className="font-medium text-amber-800 mb-2">Individuele Variatie</h3>
              <p className="text-sm text-amber-700">
                We benadrukken altijd dat elke baby uniek is. Onze calculator geeft een richtlijn, maar het is belangrijk 
                om ook naar de signalen van uw baby te luisteren en contact op te nemen met uw zorgverlener bij vragen.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h2 className="font-semibold text-gray-800 mb-6 flex items-center">
            <Users className="w-5 h-5 mr-2 text-blue-500" />
            Ons Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-3">{member.avatar}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sources */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-blue-100 p-6">
          <h2 className="font-semibold text-gray-800 mb-4 flex items-center">
            <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
            Bronnen & Expertise
          </h2>
          
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-start space-x-2">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>Voedingscentrum Nederland</strong> - Officiële voedingsrichtlijnen voor zuigelingen</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>Nederlands Centrum Jeugdgezondheid (NCJ)</strong> - Groei- en ontwikkelingsrichtlijnen</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>Nederlandse Vereniging voor Kindergeneeskunde</strong> - Medische standaarden</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>Koninklijke Nederlandse Organisatie van Verloskundigen (KNOV)</strong> - Voedingsadvies</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>Wetenschappelijke literatuur</strong> - Peer-reviewed onderzoek naar zuigelingenvoeding</span>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
          <h2 className="font-semibold mb-2">Vragen of feedback?</h2>
          <p className="text-blue-100 mb-4">
            We horen graag van je! Neem contact met ons op voor vragen, suggesties of als je meer wilt weten over onze aanpak.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition-colors">
              Contact opnemen
            </button>
            <button className="bg-blue-400 hover:bg-blue-300 text-white font-medium py-2 px-4 rounded-lg transition-colors">
              Feedback versturen
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}