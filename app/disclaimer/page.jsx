import Layout from '../../components/Layout'
import Link from 'next/link'
import { AlertTriangle, ArrowRight, Home, Shield, Heart, Phone } from 'lucide-react'

export const metadata = {
  title: 'Medische Disclaimer | FlesvoedingCalculator.nl',
  description: 'Belangrijke medische disclaimer en aansprakelijkheidsuitsluitingen voor het gebruik van FlesvoedingCalculator.nl.',
}

export default function DisclaimerPage() {
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
          <span className="text-primary">Medische Disclaimer</span>
        </div>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
            <AlertTriangle className="w-6 h-6 mr-3 text-primary" />
            Medische Disclaimer
          </h1>
          <p className="text-gray-600">
            Belangrijke informatie over het gebruik van onze calculator en medische adviezen.
          </p>
        </div>

        {/* Important Warning */}
        <div className="bg-red-50 rounded-2xl border border-red-200 p-6">
          <h2 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Belangrijk: Dit is geen medisch advies
          </h2>
          <div className="space-y-3 text-red-800">
            <p className="font-medium">
              FlesvoedingCalculator.nl vervangt NOOIT professioneel medisch advies, diagnose of behandeling.
            </p>
            <ul className="space-y-1 text-sm">
              <li>• Raadpleeg altijd uw kinderarts, huisarts of consultatiebureau</li>
              <li>• Bij vragen over de gezondheid van uw baby: zoek professionele hulp</li>
              <li>• Onze calculator geeft alleen algemene richtlijnen</li>
              <li>• Elk kind is uniek en kan andere behoeften hebben</li>
            </ul>
          </div>
        </div>

        {/* What we provide */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Wat bieden wij?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3 flex items-center">
                <Shield className="w-4 h-4 mr-2 text-primary" />
                Informatieve tools:
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Calculator gebaseerd op Nederlandse richtlijnen</li>
                <li>• Educatieve informatie over flesvoeding</li>
                <li>• Algemene voedingsschema's per leeftijd</li>
                <li>• Praktische tips en technieken</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-3 flex items-center">
                <Heart className="w-4 h-4 mr-2 text-primary" />
                Onze bronnen:
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Nederlandse Voedingscentrum</li>
                <li>• NCJ (Nederlands Centrum Jeugdgezondheid)</li>
                <li>• Nederlandse Vereniging voor Kindergeneeskunde</li>
                <li>• EU-verordening 2016/127</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What we are NOT */}
        <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6">
          <h2 className="text-lg font-semibold text-amber-800 mb-4">
            Wat zijn wij NIET?
          </h2>
          
          <div className="space-y-3 text-amber-800">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Geen medische professionals</p>
                <p className="text-sm text-amber-700">Wij zijn geen artsen, verpleegkundigen of lactatiekundigen</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Geen persoonlijk advies</p>
                <p className="text-sm text-amber-700">Onze informatie is algemeen en niet op uw specifieke situatie toegespitst</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Geen vervanging voor zorgverlening</p>
                <p className="text-sm text-amber-700">Wij vervangen nooit het advies van uw zorgverlener</p>
              </div>
            </div>
          </div>
        </div>

        {/* When to seek help */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Phone className="w-5 h-5 mr-2 text-primary" />
            Wanneer professionele hulp zoeken?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Direct contact opnemen bij:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Baby weigert eten of drinken</li>
                <li>• Tekenen van uitdroging</li>
                <li>• Koorts, braken of diarree</li>
                <li>• Allergische reacties</li>
                <li>• Zorgen over groei of gewichtstoename</li>
                <li>• Overmatig huilen of onrust</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Ook advies vragen bij:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Overstappen van borstvoeding naar flesvoeding</li>
                <li>• Keuze voor specifieke flesvoeding</li>
                <li>• Voedingsproblemen of weigering</li>
                <li>• Vragen over voedingsschema's</li>
                <li>• Introductie van vaste voeding</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Liability */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Aansprakelijkheid
          </h2>
          
          <div className="space-y-3 text-gray-700">
            <p>
              FlesvoedingCalculator.nl, de eigenaren en medewerkers zijn niet aansprakelijk voor:
            </p>
            
            <ul className="space-y-1 text-sm text-gray-600 ml-4">
              <li>• Directe of indirecte gevolgen van het gebruik van onze informatie</li>
              <li>• Beslissingen genomen op basis van onze calculator of content</li>
              <li>• Medische problemen die ontstaan door het volgen van onze adviezen</li>
              <li>• Onjuistheden in de informatie (ondanks zorgvuldige controle)</li>
              <li>• Technische problemen of uitval van de website</li>
            </ul>
            
            <p className="text-sm">
              Door gebruik te maken van onze website accepteert u deze voorwaarden.
            </p>
          </div>
        </div>

        {/* Professional help */}
        <div className="bg-blue-50 rounded-2xl border border-blue-200 p-6">
          <h2 className="text-lg font-semibold text-blue-800 mb-4">
            Waar kunt u terecht voor professionele hulp?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/50 rounded-lg p-4">
              <h3 className="font-medium text-blue-800 mb-2">Consultatiebureau</h3>
              <p className="text-sm text-blue-700">Voor vragen over voeding, groei en ontwikkeling van uw baby</p>
            </div>
            
            <div className="bg-white/50 rounded-lg p-4">
              <h3 className="font-medium text-blue-800 mb-2">Huisarts</h3>
              <p className="text-sm text-blue-700">Voor medische vragen en zorgen over de gezondheid van uw baby</p>
            </div>
            
            <div className="bg-white/50 rounded-lg p-4">
              <h3 className="font-medium text-blue-800 mb-2">Lactatiekundige</h3>
              <p className="text-sm text-blue-700">Voor specifieke vragen over voeding en overstappen naar flesvoeding</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-primary-gradient rounded-2xl shadow-lg p-6 text-white">
          <h2 className="font-bold text-lg mb-4">
            Vragen over deze disclaimer?
          </h2>
          <p className="text-white/90 mb-4">
            Heeft u vragen over deze disclaimer of over het gebruik van onze website? 
            Neem dan contact met ons op.
          </p>
          <Link 
            href="/contact"
            className="bg-white/20 hover:bg-white/30 backdrop-blur text-white font-medium py-3 px-6 rounded-xl transition-all inline-flex items-center"
          >
            <ArrowRight className="w-5 h-5 mr-2" />
            Contact opnemen
          </Link>
        </div>
      </div>
    </Layout>
  )
}