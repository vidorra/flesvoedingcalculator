'use client'
import { useState } from 'react'
import Layout from '../../components/Layout'
import ContactModal from '../../components/ContactModal'
import { Users } from 'lucide-react'

export default function OverOnsPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  
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
        <div className="mb-6">
          <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
            <Users className="w-6 h-6 mr-3 text-primary" />
            Over Ons
          </h1>
          <p className="text-gray-600">
            Leer meer over ons team, onze missie en waarom je onze flesvoeding calculator kunt vertrouwen.
          </p>
        </div>


        {/* Why Trust Us */}
        <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="font-medium text-gray-800 mb-4">Waarom FlesvoedingCalculator.nl vertrouwen?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-dark font-medium">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Evidence-Based</h3>
                  <p className="text-sm text-gray-600">Gebaseerd op officiële Nederlandse richtlijnen van het Voedingscentrum en het Nederlands Centrum Jeugdgezondheid.</p>
                </div>
              </div>
              
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-dark font-medium">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Regelmatig Geüpdatet</h3>
                  <p className="text-sm text-gray-600">Onze informatie wordt regelmatig gecontroleerd en bijgewerkt volgens de laatste inzichten.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-dark font-medium">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Privacy Gewaarborgd</h3>
                  <p className="text-sm text-gray-600">We bewaren geen persoonlijke gegevens en respecteren volledig uw privacy.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-dark font-medium">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Gratis Toegankelijk</h3>
                  <p className="text-sm text-gray-600">Alle informatie en tools zijn gratis beschikbaar voor alle ouders in Nederland.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-dark font-medium">✓</span>
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
        <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="font-medium text-gray-800 mb-4">Onze Methode</h2>
          
          <div className="space-y-4">
            <div className="bg-accent-rose-lighter rounded-xl p-4">
              <h3 className="font-medium text-primary mb-2">Nederlandse Richtlijnen</h3>
              <p className="text-sm text-gray-700">
                Onze calculator gebruikt de officiële Nederlandse norm van 150ml flesvoeding per kg lichaamsgewicht per dag,
                aangepast voor leeftijd volgens de richtlijnen van het Voedingscentrum.
              </p>
            </div>
            
            <div className="bg-accent-rose-lighter rounded-xl p-4">
              <h3 className="font-medium text-primary mb-2">Leeftijdsaanpassingen</h3>
              <p className="text-sm text-gray-700">
                De berekening wordt automatisch aangepast op basis van de leeftijd van uw baby, omdat voedingsbehoeften
                veranderen naarmate baby&apos;s groeien en ontwikkelen.
              </p>
            </div>
            
            <div
              className="rounded-xl p-4"
              style={{ background: 'radial-gradient(circle at 30% 30%, rgba(200, 120, 140, .12) 0, rgba(16, 148, 174, .06) 40%, transparent 70%), linear-gradient(90deg, #fff0f3, #f5e6ed)' }}
            >
              <h3 className="font-medium text-primary mb-2">Individuele Variatie</h3>
              <p className="text-sm text-gray-700">
                We benadrukken altijd dat elke baby uniek is. Onze calculator geeft een richtlijn, maar het is belangrijk
                om ook naar de signalen van uw baby te luisteren en contact op te nemen met uw zorgverlener bij vragen.
              </p>
            </div>
          </div>
        </div>


        {/* Sources */}
        <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="font-medium text-gray-800 mb-4">Bronnen & Expertise</h2>
          
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-start space-x-2">
              <span className="text-primary mt-1">•</span>
              <span><strong>Voedingscentrum Nederland</strong> - Officiële voedingsrichtlijnen voor zuigelingen</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-primary mt-1">•</span>
              <span><strong>Nederlands Centrum Jeugdgezondheid (NCJ)</strong> - Groei- en ontwikkelingsrichtlijnen</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-primary mt-1">•</span>
              <span><strong>Nederlandse Vereniging voor Kindergeneeskunde</strong> - Medische standaarden</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-primary mt-1">•</span>
              <span><strong>Koninklijke Nederlandse Organisatie van Verloskundigen (KNOV)</strong> - Voedingsadvies</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-primary mt-1">•</span>
              <span><strong>Wetenschappelijke literatuur</strong> - Peer-reviewed onderzoek naar zuigelingenvoeding</span>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-primary rounded-2xl shadow-lg p-6 text-white">
          <h2 className="font-medium mb-2">Vragen of feedback?</h2>
          <p className="text-gray-100 mb-4">
            We horen graag van je! Neem contact met ons op voor vragen, suggesties of als je meer wilt weten over onze aanpak.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-white text-primary hover:bg-default font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Contact opnemen
            </button>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-gray-500 hover:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Feedback versturen
            </button>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </Layout>
  )
}