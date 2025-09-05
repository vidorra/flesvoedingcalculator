'use client'
import Layout from '../../../components/Layout'
import Link from 'next/link'
import { Lightbulb, ArrowRight, Home, DollarSign, Moon, Heart, ShoppingCart } from 'lucide-react'

export default function PraktischeTipsPage() {
  const moneySavingTips = [
    'Huismerken zijn even goed (zelfde EU-standaarden)',
    'Bulk kopen bij aanbieding (let op houdbaarheidsdatum)',
    'Prijzen vergelijken online vs winkel',
    'Kruidvat/Etos eigen merk overwegen (vaak 40% goedkoper)',
    'Let op gramprijs, niet pakprijs',
    'Winkelen met kortingscodes en cashback apps',
    'Albert Heijn/Jumbo bonus spaaracties benutten'
  ]
  
  const budgetComparison = [
    { category: 'Budget (Kruidvat)', monthlyPrice: '€35-50', yearPrice: '€420-600', note: 'Zelfde kwaliteit als A-merken' },
    { category: 'Middenklasse (Hero Baby)', monthlyPrice: '€50-70', yearPrice: '€600-840', note: 'Goede prijs-kwaliteit verhouding' },
    { category: 'Premium (Nutrilon)', monthlyPrice: '€70-90', yearPrice: '€840-1080', note: 'Nederlandse ontwikkeling' },
    { category: 'Biologisch (HIPP)', monthlyPrice: '€80-100', yearPrice: '€960-1200', note: '100% biologische ingrediënten' }
  ]

  const nightFeedingTips = [
    'Flessenwarmer op slaapkamer',
    'Water en poeder klaarzetten',
    'Dimbaar nachtlampje gebruiken',
    'Partner afwisselen',
    'Luier alleen verschonen indien nodig'
  ]

  const bondingTips = [
    'Huid-op-huid contact',
    'Oogcontact maken',
    'Rustig praten/zingen',
    'Telefoon wegleggen',
    'Voedingsmoment niet haasten',
    'Knuffelen na voeding'
  ]

  const organizationTips = [
    {
      title: 'Voorraadbeheer',
      tips: ['Extra blikken in huis hebben', 'Houdbaarheidsdatums in agenda', 'Reservefles en speen']
    },
    {
      title: 'Bereiding optimaliseren',
      tips: ['Meerdere flessen tegelijk klaarmaken', 'Warme thermoskan gebruiken', 'Keukenweegschaal voor precisie']
    },
    {
      title: 'Onderweg',
      tips: ['Thermosfles met heet water', 'Poeder in doseerbox', 'Extra spenen meenemen']
    }
  ]

  const developmentTips = [
    {
      age: '0-3 maanden',
      tips: ['Rustige omgeving', 'Veel oogcontact', 'Boertje na elke 60ml']
    },
    {
      age: '3-6 maanden',
      tips: ['Baby mag fles vasthouden', 'Sociale interactie tijdens voeding', 'Vaste tijden introduceren']
    },
    {
      age: '6+ maanden',
      tips: ['Beker introduceren', 'Zelf laten drinken oefenen', 'Voeding combineren met vast voedsel']
    }
  ]

  return (
    <Layout>
      <div className="space-y-6">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
            <Lightbulb className="w-6 h-6 mr-3 text-primary" />
            Praktische Tips
          </h1>
          <p className="text-gray-600">
            Handige tips en trucs om flesvoeding makkelijker en voordeliger te maken.
          </p>
        </div>

        {/* Money saving tips */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
            <DollarSign className="w-5 h-5 mr-2" />
            Geld besparen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {moneySavingTips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-2 p-3 bg-gray-50 rounded-lg">
                <ShoppingCart className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{tip}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <p className="text-gray-700 text-sm">
              <strong>Tip:</strong> Alle flesvoeding in Nederland voldoet aan dezelfde Europese normen. 
              Huismerken zijn vaak 30-50% goedkoper met dezelfde kwaliteit!
            </p>
          </div>
        </div>

        {/* Night feeding tips */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
            <Moon className="w-5 h-5 mr-2" />
            Nachtvoedingtips
          </h2>
          <div className="space-y-3">
            {nightFeedingTips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                  {index + 1}
                </div>
                <span className="text-gray-700 text-sm">{tip}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-4 bg-default rounded-lg">
            <p className="text-gray-700 text-sm">
              <strong>Gouden regel:</strong> Hoe minder je wakker wordt, hoe beter voor iedereen. 
              Bereid alles voor zodat nachtvoedingtijd zo kort mogelijk is.
            </p>
          </div>
        </div>

        {/* Bonding tips */}
        <div className="bg-pink-50 rounded-2xl border border-pink-200 p-6">
          <h2 className="text-lg font-semibold text-pink-800 mb-4 flex items-center">
            <Heart className="w-5 h-5 mr-2" />
            Binding tijdens flesvoeding
          </h2>
          <p className="text-pink-700 mb-4">
            Flesvoeding biedt ook prachtige momenten van verbinding met je baby:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bondingTips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-2">
                <Heart className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                <span className="text-pink-800 text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Organization tips */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Organisatie & Efficiëntie</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {organizationTips.map((section, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-primary mb-3">{section.title}:</h3>
                <div className="space-y-2">
                  {section.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Age-specific tips */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Tips per Leeftijd</h2>
          
          <div className="space-y-4">
            {developmentTips.map((ageGroup, index) => (
              <div key={index} className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-medium text-primary mb-2">{ageGroup.age}:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {ageGroup.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded">
                      {tip}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick reference */}
        <div className="bg-yellow-50 rounded-2xl border border-yellow-200 p-6">
          <h2 className="text-lg font-semibold text-yellow-800 mb-4">Snelle Referentie</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-yellow-800 mb-3">Bij problemen eerst checken:</h3>
              <ul className="space-y-1 text-sm text-yellow-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Temperatuur flesvoeding (lauw op pols)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Speen niet verstopt of versleten</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Juiste poeder-water verhouding</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Baby niet overmoe of overstimuleerd</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-yellow-800 mb-3">Altijd bij de hand hebben:</h3>
              <ul className="space-y-1 text-sm text-yellow-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Reserve fles en spenen</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Flessenreiniger en borstel</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Thermosfles voor warm water</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Nummer huisarts en consultatiebureau</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Meer informatie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link 
              href="/voedingsschemas"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-primary">Voedingsschema&apos;s →</div>
              <div className="text-sm text-gray-600">Interactieve schema&apos;s per leeftijd</div>
            </Link>
            <Link 
              href="/"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-primary">Calculator →</div>
              <div className="text-sm text-gray-600">Bereken persoonlijke hoeveelheden</div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}