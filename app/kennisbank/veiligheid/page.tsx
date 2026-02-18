'use client'
import Layout from '../../../components/Layout'
import Link from 'next/link'
import { AlertTriangle, ArrowRight, Home, Phone, X, Eye, AlertCircle } from 'lucide-react'

export default function VeiligheidPage() {
  const emergencyContacts = [
    'Baby drinkt >12 uur niets',
    'Uitdrogingsverschijnselen (droge luier >6 uur)',
    'Hoge koorts (>38,5°C bij <3 maanden)',
    'Bloed in ontlasting/braaksel',
    'Extreme sloomheid',
    'Geen gewichtstoename'
  ]

  const neverDo = [
    'Melk in magnetron opwarmen',
    'Honing toevoegen (botulisme risico <1 jaar)',
    'Zelf formule aanpassen',
    'Gewone melk geven <12 maanden',
    'Poeder verdunnen om te besparen',
    'Flessen delen tussen baby\'s'
  ]

  const allergySignals = [
    'Huiduitslag/eczeem',
    'Diarree met bloed/slijm',
    'Overmatig huilen na voeding',
    'Zwelling gezicht/lippen',
    'Ademhalingsproblemen (112 bellen!)'
  ]

  const allergyActions = [
    'Stop niet zelf met voeding',
    'Maak afspraak huisarts',
    'Houd voedingsdagboek bij',
    'Mogelijk verwijzing kinderarts'
  ]

  return (
    <Layout>
      <div className="space-y-6">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
            <AlertTriangle className="w-6 h-6 mr-3 text-primary" />
            Belangrijke Veiligheidsrichtlijnen
          </h1>
          <p className="text-gray-600">
            Cruciale veiligheidsinformatie die alle ouders moeten weten bij flesvoeding.
          </p>
        </div>

        {/* Emergency contacts */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
            <Phone className="w-5 h-5 mr-2" />
            Wanneer direct arts contacteren
          </h2>
          <p className="text-gray-700 mb-4 font-medium">
            Bij deze signalen ALTIJD direct contact opnemen met huisarts of spoedeisende hulp:
          </p>
          <div className="space-y-3">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0 mt-0.5">
                  !
                </div>
                <span className="text-gray-700 font-medium">{contact}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-4">
            <p className="text-gray-700 font-medium text-center">
              Bij levensbedreigende situaties: bel direct 112
            </p>
          </div>
        </div>

        {/* Never do */}
        <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
            <X className="w-5 h-5 mr-2" />
            Voedingsveiligheid - Nooit doen:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {neverDo.map((item, index) => (
              <div key={index} className="flex items-start space-x-2">
                <X className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Allergy signals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              Allergiesignalen - Let op:
            </h2>
            <div className="space-y-3">
              {allergySignals.map((signal, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <AlertTriangle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{signal}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-default rounded-2xl border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-primary mb-4">Bij vermoeden allergie:</h2>
            <div className="space-y-3">
              {allergyActions.map((action, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 text-sm">{action}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important phone numbers */}
        <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4">Belangrijke telefoonnummers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <h3 className="font-medium text-gray-700 mb-2">Spoedeisende hulp</h3>
              <p className="text-2xl font-medium text-gray-600">112</p>
              <p className="text-xs text-gray-700">Bij levensbedreigende situaties</p>
            </div>

            <div className="text-center">
              <h3 className="font-medium text-primary mb-2">Huisartsenpraktijk</h3>
              <p className="text-lg font-medium text-gray-700">Je eigen nummer</p>
              <p className="text-xs text-gray-600">Voor advies en afspraken</p>
            </div>

            <div className="text-center">
              <h3 className="font-medium text-gray-700 mb-2">Consultatiebureau</h3>
              <p className="text-lg font-medium text-gray-600">Lokaal nummer</p>
              <p className="text-xs text-gray-700">Voor ontwikkelingsvragen</p>
            </div>
          </div>
        </div>

        {/* Medical disclaimer */}
        <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-amber-800 mb-1">Medische Disclaimer</h3>
              <p className="text-sm text-amber-700">
                De informatie op deze pagina is alleen voor informatieve doeleinden en vervangt geen professioneel medisch advies. Raadpleeg altijd uw kinderarts of een gekwalificeerde zorgverlener voor specifieke medische vragen.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-primary mb-4">Meer hulp nodig?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link 
              href="/kennisbank/problemen-oplossen"
              className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
            >
              <div className="font-medium text-primary">Problemen Oplossen</div>
              <div className="flex items-center justify-between"><span className="text-gray-600">Hulp bij veelvoorkomende problemen</span><ArrowRight className="w-4 h-4 text-primary flex-shrink-0" /></div>
            </Link>
            <Link 
              href="/faq"
              className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
            >
              <div className="font-medium text-primary">Veelgestelde Vragen</div>
              <div className="flex items-center justify-between"><span className="text-gray-600">Antwoorden op veel gestelde vragen</span><ArrowRight className="w-4 h-4 text-primary flex-shrink-0" /></div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}