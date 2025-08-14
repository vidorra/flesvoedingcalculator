'use client'
import Layout from '../../../components/Layout'
import Link from 'next/link'
import { BookOpen, CheckCircle, ArrowRight, Home } from 'lucide-react'

export default function BasisFlesvoedingPage() {
  const benefits = [
    'Flexibiliteit: Partner kan ook voeden',
    'Meetbaar: Je weet exact hoeveel baby drinkt',
    'Planning: Makkelijker te plannen',
    'Werkhervatting: Eenvoudiger bij terugkeer naar werk',
    'Medicatie: Geen zorgen over medicijnen in moedermelk'
  ]

  const guidelines = [
    '150ml per kg lichaamsgewicht per 24 uur (startpunt)',
    'Maximum 1000ml per dag voor baby\'s tot 1 jaar',
    'Aanpassing op basis van groeicurve en tevredenheid baby',
    'Altijd individueel bekijken met jeugdverpleegkundige'
  ]

  const reasons = [
    'Als borstvoeding niet mogelijk of gewenst is',
    'Bij onvoldoende melkproductie',
    'Als aanvulling op borstvoeding (combivoeiding)',
    'Bij medische redenen',
    'Persoonlijke voorkeur van ouders'
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
          <span className="text-primary">Basis Flesvoeding</span>
        </div>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-primary" />
            Basis Flesvoeding Informatie
          </h1>
          <p className="text-gray-600">
            Alles wat je moet weten over flesvoeding: van de basis tot praktische tips voor Nederlandse ouders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* What is bottle feeding */}
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Wat is flesvoeding?</h2>
            <p className="text-gray-600 leading-relaxed">
              Flesvoeding is speciaal samengestelde babymelk die alle voedingsstoffen bevat die een baby nodig heeft 
              voor gezonde groei en ontwikkeling. In Nederland moet alle flesvoeding voldoen aan strenge Europese 
              richtlijnen, waardoor elk merk dezelfde basisvoedingsstoffen bevat.
            </p>
          </div>

          {/* When to choose bottle feeding */}
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Wanneer kies je voor flesvoeding?</h2>
            <div className="space-y-2">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Voordelen van flesvoeding</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dutch Guidelines */}
        <div className="bg-default rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Nederlandse Richtlijnen</h2>
          <p className="text-gray-700 mb-4">
            Het Voedingscentrum en consultatiebureau hanteren deze basisregels:
          </p>
          <div className="space-y-3">
            {guidelines.map((guideline, index) => (
              <div key={index} className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{guideline}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation to other pages */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Meer weten?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link 
              href="/kennisbank/soorten-flesvoeding"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-gray-800">Soorten Flesvoeding →</div>
              <div className="text-sm text-gray-600">Leer over nummer 1, 2 en 3</div>
            </Link>
            <Link 
              href="/kennisbank/voedingstechnieken"
              className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
            >
              <div className="font-medium text-gray-800">Voedingstechnieken →</div>
              <div className="text-sm text-gray-600">Hoe geef je de fles goed?</div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}