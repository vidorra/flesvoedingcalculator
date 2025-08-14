'use client'
import { useState } from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { Calendar, Clock, Target, ArrowRight, Download, Calculator, Baby, Package, Utensils, Milk } from 'lucide-react'

export default function VoedingsschemasPage() {
  const [selectedAge, setSelectedAge] = useState('0-3m')
  const [feedingFrequency, setFeedingFrequency] = useState('default')

  const ageGroups = [
    { id: '0-3m', name: '0-3 maanden', icon: Baby },
    { id: '3-6m', name: '3-6 maanden', icon: Package },
    { id: '6-12m', name: '6-12 maanden', icon: Utensils },
    { id: '12m+', name: '12+ maanden', icon: Milk }
  ]

  const feedingOptions = [
    { id: 'default', name: 'Standaard schema' },
    { id: '4-feeds', name: '4 voedingen per dag' },
    { id: '5-feeds', name: '5 voedingen per dag' },
    { id: '6-feeds', name: '6 voedingen per dag' },
    { id: '7-feeds', name: '7 voedingen per dag' },
    { id: '8-feeds', name: '8 voedingen per dag' }
  ]

  const schemas = {
    '0-3m': {
      default: {
        feeds: '6-8 voedingen',
        amount: '60-120 ml per voeding',
        interval: 'Om de 2-4 uur',
        examples: ['06:00 - 90ml', '09:00 - 90ml', '12:00 - 90ml', '15:00 - 90ml', '18:00 - 90ml', '21:00 - 90ml'],
      },
      '4-feeds': {
        feeds: '4 voedingen',
        amount: '120-150 ml per voeding',
        interval: 'Om de 6 uur',
        examples: ['06:00 - 135ml', '12:00 - 135ml', '18:00 - 135ml', '00:00 - 135ml'],
      },
      '5-feeds': {
        feeds: '5 voedingen',
        amount: '100-120 ml per voeding',
        interval: 'Om de 4-5 uur',
        examples: ['06:00 - 110ml', '10:00 - 110ml', '14:00 - 110ml', '18:00 - 110ml', '22:00 - 110ml'],
      },
      '6-feeds': {
        feeds: '6 voedingen',
        amount: '80-100 ml per voeding',
        interval: 'Om de 4 uur',
        examples: ['06:00 - 90ml', '10:00 - 90ml', '14:00 - 90ml', '18:00 - 90ml', '22:00 - 90ml', '02:00 - 90ml'],
      },
      '7-feeds': {
        feeds: '7 voedingen',
        amount: '70-90 ml per voeding',
        interval: 'Om de 3-4 uur',
        examples: ['06:00 - 80ml', '09:00 - 80ml', '12:00 - 80ml', '15:00 - 80ml', '18:00 - 80ml', '21:00 - 80ml', '00:00 - 80ml'],
      },
      '8-feeds': {
        feeds: '8 voedingen',
        amount: '60-80 ml per voeding',
        interval: 'Om de 3 uur',
        examples: ['06:00 - 70ml', '09:00 - 70ml', '12:00 - 70ml', '15:00 - 70ml', '18:00 - 70ml', '21:00 - 70ml', '00:00 - 70ml', '03:00 - 70ml'],
      },
      milestones: ['Gewichtstoename', 'Regelmatig voedingspatroon', 'Meer alertheid'],
      nextPhase: 'Rond 3-4 maanden kan het aantal voedingen afnemen maar de hoeveelheid per voeding toenemen.'
    },
    '3-6m': {
      default: {
        feeds: '5-6 voedingen',
        amount: '120-180 ml per voeding',
        interval: 'Om de 3-4 uur',
        examples: ['07:00 - 150ml', '11:00 - 150ml', '15:00 - 150ml', '19:00 - 150ml', '23:00 - 150ml'],
      },
      '4-feeds': {
        feeds: '4 voedingen',
        amount: '180-220 ml per voeding',
        interval: 'Om de 6 uur',
        examples: ['07:00 - 200ml', '13:00 - 200ml', '19:00 - 200ml', '01:00 - 200ml'],
      },
      '5-feeds': {
        feeds: '5 voedingen',
        amount: '150-180 ml per voeding',
        interval: 'Om de 4-5 uur',
        examples: ['07:00 - 165ml', '11:00 - 165ml', '15:00 - 165ml', '19:00 - 165ml', '23:00 - 165ml'],
      },
      '6-feeds': {
        feeds: '6 voedingen',
        amount: '120-150 ml per voeding',
        interval: 'Om de 4 uur',
        examples: ['07:00 - 135ml', '11:00 - 135ml', '15:00 - 135ml', '19:00 - 135ml', '23:00 - 135ml', '03:00 - 135ml'],
      },
      '7-feeds': {
        feeds: '7 voedingen',
        amount: '110-130 ml per voeding',
        interval: 'Om de 3-4 uur',
        examples: ['07:00 - 120ml', '10:00 - 120ml', '13:00 - 120ml', '16:00 - 120ml', '19:00 - 120ml', '22:00 - 120ml', '01:00 - 120ml'],
      },
      '8-feeds': {
        feeds: '8 voedingen',
        amount: '100-120 ml per voeding',
        interval: 'Om de 3 uur',
        examples: ['07:00 - 110ml', '10:00 - 110ml', '13:00 - 110ml', '16:00 - 110ml', '19:00 - 110ml', '22:00 - 110ml', '01:00 - 110ml', '04:00 - 110ml'],
      },
      milestones: ['Interesse in vast voedsel', 'Kunnen zelf fles vasthouden', 'Nachts langer slapen'],
      nextPhase: 'Vanaf 6 maanden wordt vast voedsel geïntroduceerd naast flesvoeding.'
    },
    '6-12m': {
      default: {
        feeds: '3-4 voedingen',
        amount: '180-240 ml per voeding',
        interval: 'Om de 4-6 uur',
        examples: ['07:00 - 200ml', '12:00 - 200ml', '18:00 - 200ml', '22:00 - 200ml'],
      },
      '4-feeds': {
        feeds: '4 voedingen',
        amount: '180-220 ml per voeding',
        interval: 'Om de 6 uur',
        examples: ['07:00 - 200ml', '13:00 - 200ml', '19:00 - 200ml', '01:00 - 200ml'],
      },
      '5-feeds': {
        feeds: '5 voedingen',
        amount: '150-180 ml per voeding',
        interval: 'Om de 4-5 uur',
        examples: ['07:00 - 165ml', '11:00 - 165ml', '15:00 - 165ml', '19:00 - 165ml', '23:00 - 165ml'],
      },
      '6-feeds': {
        feeds: '6 voedingen',
        amount: '130-160 ml per voeding',
        interval: 'Om de 4 uur',
        examples: ['07:00 - 145ml', '11:00 - 145ml', '15:00 - 145ml', '19:00 - 145ml', '23:00 - 145ml', '03:00 - 145ml'],
      },
      '7-feeds': {
        feeds: '7 voedingen',
        amount: '110-140 ml per voeding',
        interval: 'Om de 3-4 uur',
        examples: ['07:00 - 125ml', '10:00 - 125ml', '13:00 - 125ml', '16:00 - 125ml', '19:00 - 125ml', '22:00 - 125ml', '01:00 - 125ml'],
      },
      '8-feeds': {
        feeds: '8 voedingen',
        amount: '100-120 ml per voeding',
        interval: 'Om de 3 uur',
        examples: ['07:00 - 110ml', '10:00 - 110ml', '13:00 - 110ml', '16:00 - 110ml', '19:00 - 110ml', '22:00 - 110ml', '01:00 - 110ml', '04:00 - 110ml'],
      },
      milestones: ['Vast voedsel als hoofdmaaltijd', 'Eigen lepel proberen', 'Variatie in smaak'],
      nextPhase: 'Overgang naar gewone melk en zelfstandig eten.'
    },
    '12m+': {
      default: {
        feeds: '2-3 voedingen',
        amount: '200-250 ml per voeding',
        interval: 'Bij hoofdmaaltijden',
        examples: ['07:00 - 220ml', '12:00 - 220ml', '19:00 - 220ml'],
      },
      '4-feeds': {
        feeds: '4 voedingen',
        amount: '180-220 ml per voeding',
        interval: 'Om de 6 uur',
        examples: ['07:00 - 200ml', '13:00 - 200ml', '19:00 - 200ml', '01:00 - 200ml'],
      },
      '5-feeds': {
        feeds: '5 voedingen',
        amount: '150-180 ml per voeding',
        interval: 'Om de 4-5 uur',
        examples: ['07:00 - 165ml', '11:00 - 165ml', '15:00 - 165ml', '19:00 - 165ml', '23:00 - 165ml'],
      },
      '6-feeds': {
        feeds: '6 voedingen',
        amount: '130-160 ml per voeding',
        interval: 'Om de 4 uur',
        examples: ['07:00 - 145ml', '11:00 - 145ml', '15:00 - 145ml', '19:00 - 145ml', '23:00 - 145ml', '03:00 - 145ml'],
      },
      '7-feeds': {
        feeds: '7 voedingen',
        amount: '110-140 ml per voeding',
        interval: 'Om de 3-4 uur',
        examples: ['07:00 - 125ml', '10:00 - 125ml', '13:00 - 125ml', '16:00 - 125ml', '19:00 - 125ml', '22:00 - 125ml', '01:00 - 125ml'],
      },
      '8-feeds': {
        feeds: '8 voedingen',
        amount: '100-120 ml per voeding',
        interval: 'Om de 3 uur',
        examples: ['07:00 - 110ml', '10:00 - 110ml', '13:00 - 110ml', '16:00 - 110ml', '19:00 - 110ml', '22:00 - 110ml', '01:00 - 110ml', '04:00 - 110ml'],
      },
      milestones: ['Zelfstandig eten', 'Gevarieerd dieet', 'Gewone melk mogelijk'],
      nextPhase: 'Volledige overgang naar gevarieerd dieet en gewone melk.'
    }
  }

  const currentAgeSchema = schemas[selectedAge]
  const currentSchema = currentAgeSchema[feedingFrequency] || currentAgeSchema.default

  const downloadPDF = () => {
    // Create PDF content
    const content = `
FLESVOEDING SCHEMA - ${ageGroups.find(g => g.id === selectedAge)?.name}

Aantal voedingen: ${currentSchema.feeds}
Hoeveelheid: ${currentSchema.amount}
Interval: ${currentSchema.interval}

SCHEMA:
${currentSchema.examples.map(example => `• ${example}`).join('\n')}

ONTWIKKELINGSMIJLPALEN:
${currentAgeSchema.milestones.map(milestone => `• ${milestone}`).join('\n')}

VOLGENDE FASE:
${currentAgeSchema.nextPhase}

FlesvoedingCalculator.nl - Betrouwbare informatie voor flesvoeding
    `.trim()

    // Create and download file
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `voedingsschema-${selectedAge}-${feedingFrequency}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const addToCalendar = () => {
    const ageGroupName = ageGroups.find(g => g.id === selectedAge)?.name
    const title = `Voedingsschema ${ageGroupName}`
    
    // Create calendar events for each feeding time
    const events = currentSchema.examples.map(example => {
      const [time, amount] = example.split(' - ')
      const description = `Flesvoeding: ${amount}\\n\\nSchema: ${currentSchema.feeds}\\nInterval: ${currentSchema.interval}`
      
      // Create a date for today with the feeding time
      const now = new Date()
      const [hours, minutes] = time.split(':').map(Number)
      const feedingDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes)
      
      // Format for Google Calendar (YYYYMMDDTHHMMSSZ)
      const startTime = feedingDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
      const endTime = new Date(feedingDate.getTime() + 30 * 60 * 1000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
      
      return {
        title: `${title} - ${amount}`,
        start: startTime,
        end: endTime,
        description: description
      }
    })

    // For simplicity, create one recurring event
    const mainEvent = events[0]
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(mainEvent.title)}&dates=${mainEvent.start}/${mainEvent.end}&details=${encodeURIComponent(mainEvent.description)}&recur=RRULE:FREQ=DAILY`
    
    window.open(calendarUrl, '_blank')
  }

  return (
    <Layout>
      <div className="space-y-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
            <Calendar className="w-6 h-6 mr-3 text-primary" />
            Voedingsschema&apos;s
          </h1>
          <p className="text-gray-600">
            Ontdek de juiste voedingsschema&apos;s per leeftijdsgroep. Inclusief hoeveelheden, tijden en ontwikkelingsmijlpalen.
          </p>
        </div>

        {/* Age Tabs */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {ageGroups.map((group) => {
              const Icon = group.icon
              return (
                <button
                  key={group.id}
                  onClick={() => setSelectedAge(group.id)}
                  className={`p-3 rounded-xl transition-all text-center ${
                    selectedAge === group.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-50 text-gray-700 hover:bg-default'
                  }`}
                >
                  <div className="mb-2">
                    <Icon className="w-6 h-6 mx-auto" />
                  </div>
                  <div className="text-sm font-medium">{group.name}</div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Feeding Frequency Dropdown */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Aantal voedingen per dag
          </label>
          <select
            value={feedingFrequency}
            onChange={(e) => setFeedingFrequency(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary transition-all outline-none appearance-none bg-white"
          >
            {feedingOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        {/* Schema Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Schema Overview */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="font-semibold text-gray-800 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                Schema Overzicht
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-default rounded-xl p-4">
                  <div className="font-medium text-primary">Aantal voedingen</div>
                  <div className="text-gray-700">{currentSchema.feeds}</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="font-medium text-gray-800">Hoeveelheid</div>
                  <div className="text-gray-700">{currentSchema.amount}</div>
                </div>
                <div className="bg-gray-100 rounded-xl p-4">
                  <div className="font-medium text-gray-800">Interval</div>
                  <div className="text-gray-700">{currentSchema.interval}</div>
                </div>
              </div>

              <h3 className="font-medium text-gray-800 mb-3">Voorbeeldtijden</h3>
              <div className="space-y-2">
                {currentSchema.examples.map((example, index) => (
                  <div key={index} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">{example.split(' - ')[0]}</span>
                    <span className="font-medium text-gray-800">{example.split(' - ')[1]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Milestones */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="font-semibold text-gray-800 mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-primary" />
                Ontwikkelingsmijlpalen
              </h2>
              <div className="space-y-2">
                {currentAgeSchema.milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700">{milestone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Next Phase */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <ArrowRight className="w-5 h-5 mr-2 text-primary" />
                Volgende Fase
              </h3>
              <p className="text-sm text-gray-600">{currentAgeSchema.nextPhase}</p>
            </div>

            {/* Download Options */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Download className="w-5 h-5 mr-2 text-primary" />
                Downloads
              </h3>
              <div className="space-y-3">
                <button 
                  onClick={downloadPDF}
                  className="w-full bg-primary hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>PDF Schema</span>
                </button>
                <button 
                  onClick={addToCalendar}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Voeg toe aan agenda</span>
                </button>
              </div>
            </div>

            {/* Quick Calculator */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Calculator className="w-5 h-5 mr-2 text-primary" />
                Snelle Berekening
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Wil je een persoonlijk schema? Gebruik de calculator!
              </p>
              <Link 
                href="/"
                className="block w-full bg-default hover:bg-gray-200 text-primary font-medium py-2 px-4 rounded-lg transition-colors text-center"
              >
                Naar Calculator
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}