'use client'
import { useState } from 'react'
import Layout from '../../components/Layout'
import ContactModal from '../../components/ContactModal'
import { generateFAQSchema } from '../../lib/structured-data'
import { Info, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react'


export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('calculator')
  const [openFAQ, setOpenFAQ] = useState(null)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const categories = [
    { id: 'calculator', name: 'Calculator gebruik' },
    { id: 'feeding', name: 'Algemene voedingsvragen' },
    { id: 'medical', name: 'Medische vragen' },
    { id: 'practical', name: 'Praktische tips' }
  ]

  const faqs = {
    calculator: [
      {
        id: 1,
        question: 'Hoe nauwkeurig is deze calculator?',
        answer: 'Onze calculator is gebaseerd op de officiële Nederlandse richtlijnen van het Voedingscentrum. De berekening gebruikt 150ml per kg lichaamsgewicht als uitgangspunt, aangepast voor leeftijd. Dit geeft een goede richtlijn, maar elke baby is uniek.'
      },
      {
        id: 2,
        question: 'Waarom wijkt het resultaat af van wat mijn dokter zei?',
        answer: 'Artsen kunnen specifieke aanbevelingen geven op basis van de individuele ontwikkeling van uw baby. Onze calculator geeft algemene richtlijnen. Volg altijd het advies van uw kinderarts.'
      }
    ],
    feeding: [
      {
        id: 3,
        question: 'Hoeveel flesvoeding heeft mijn baby per dag nodig?',
        answer: 'Dit hangt af van het gewicht en de leeftijd van uw baby. Als vuistregel geldt 150ml per kg lichaamsgewicht per dag, verdeeld over meerdere voedingen. Gebruik onze calculator voor een persoonlijke berekening.'
      },
      {
        id: 4,
        question: 'Kan mijn baby teveel flesvoeding krijgen?',
        answer: 'Ja, overvoeding kan voorkomen. Baby\'s hebben een natuurlijk verzadigingsgevoel. Stop met voeden als uw baby de fles wegduwt, zijn hoofd wegdraait of niet meer zuigt.'
      }
    ],
    medical: [
      {
        id: 5,
        question: 'Wanneer moet ik contact opnemen met de dokter?',
        answer: 'Neem contact op bij: ongewone gewichtstoename of -afname, braken na elke voeding, tekenen van uitdroging, of als u zich zorgen maakt over de voeding van uw baby.'
      }
    ],
    practical: [
      {
        id: 6,
        question: 'Hoe warm moet flesvoeding zijn?',
        answer: 'Flesvoeding moet lichaamstemperatuur hebben (37°C). Test de temperatuur door een druppel op uw pols te doen - het moet lauw aanvoelen, niet heet of koud.'
      }
    ]
  }

  const currentFAQs = faqs[selectedCategory] || []

  // Generate FAQ structured data for all categories
  const allFAQs = Object.values(faqs).flat()
  const faqSchemaData = allFAQs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  }))

  return (
    <>
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqSchemaData))
        }}
      />
      
    <Layout>
      <div className="space-y-6">
        <div className="mb-6">
          <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
            <Info className="w-6 h-6 mr-3 text-primary" />
            Veelgestelde Vragen
          </h1>
          <p className="text-gray-600">
            Vind snel antwoorden op de meest gestelde vragen over flesvoeding en onze calculator.
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Categories - Left sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-4 lg:sticky lg:top-4">
              <h2 className="font-medium text-gray-800 mb-3 px-2">Categorieën</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full p-3 rounded-xl border transition-all text-left ${
                        selectedCategory === category.id
                          ? 'bg-gradient-active border-primary text-primary'
                          : 'bg-white border-gray-200 hover:border-primary text-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-medium text-sm">{category.name}</div>
                        {selectedCategory === category.id && <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>}
                      </div>
                    </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Items - Right content */}
          <div className="lg:col-span-9 space-y-6">
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="font-medium text-gray-800 mb-4">
                {categories.find(c => c.id === selectedCategory)?.name}
              </h2>

              <div className="space-y-4">
                {currentFAQs.map((faq) => (
                  <div key={faq.id} className="border-b border-gray-100">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                      className="w-full py-3 text-left hover:bg-default transition-colors flex items-center justify-between"
                    >
                      <span className="font-medium text-gray-800">{faq.question}</span>
                      {openFAQ === faq.id ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-primary" />}
                    </button>
                    {openFAQ === faq.id && (
                      <div className="pb-3 text-gray-600">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6 mt-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-amber-800 mb-1">Medische Disclaimer</h3>
                    <p className="text-sm text-amber-700">
                      De informatie op deze pagina is alleen voor informatieve doeleinden en vervangt geen professioneel medisch advies.
                      Raadpleeg altijd uw kinderarts of een gekwalificeerde zorgverlener voor specifieke medische vragen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-primary rounded-2xl shadow-lg p-6 text-white">
          <h2 className="font-medium mb-2">Vraag niet gevonden?</h2>
          <p className="text-gray-100 mb-4">
            Neem contact met ons op voor persoonlijke ondersteuning bij uw vragen over flesvoeding.
          </p>
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="bg-white text-primary hover:bg-default font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Contact opnemen
          </button>
        </div>

      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </Layout>
    </>
  )
}