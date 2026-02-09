'use client'
import Link from 'next/link'

// FAQ data for structured data and display
export const faqData = [
  {
    question: "Hoeveel flesvoeding heeft mijn baby nodig?",
    answer: "De Nederlandse richtlijn is 150ml per kilogram lichaamsgewicht per dag, verdeeld over meerdere voedingen. Dit kan variëren per baby en leeftijd."
  },
  {
    question: "Hoe vaak moet ik mijn baby voeden?",
    answer: "Pasgeboren baby's hebben meestal 6-8 voedingen per dag nodig. Naarmate ze groeien, neemt dit af tot 4-6 voedingen per dag."
  },
  {
    question: "Is deze calculator betrouwbaar?",
    answer: "Ja, onze calculator is gebaseerd op Nederlandse voedingsrichtlijnen en het Voedingscentrum. Raadpleeg altijd uw arts of consultatiebureau voor persoonlijk advies."
  }
]

export default function FAQSection() {
  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6 mt-8">
      <h2 className="text-lg font-medium text-primary mb-4">Veelgestelde Vragen</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-medium text-gray-800 mb-2">Hoeveel ml flesvoeding heeft een baby van 3 maanden nodig?</h3>
          <p className="text-sm text-gray-600">
            Een baby van 3 maanden krijgt ongeveer 130ml per kg lichaamsgewicht per dag.
            Bij een gewicht van 5kg betekent dit 650ml verdeeld over 6-7 voedingen (ongeveer 95ml per voeding).
          </p>
        </div>

        <div>
          <h3 className="font-medium text-gray-800 mb-2">Hoeveel flesvoeding heeft een baby van 4 kg nodig?</h3>
          <p className="text-sm text-gray-600">
            Bij 4 kg: 4 x 150ml = 600ml per dag, verdeeld over 6-7 voedingen.
            Dit komt neer op ongeveer 85-100ml per voeding, afhankelijk van leeftijd en aantal voedingen.
          </p>
        </div>

        <div>
          <h3 className="font-medium text-gray-800 mb-2">Wat is het flesvoeding schema voor 0-6 maanden?</h3>
          <p className="text-sm text-gray-600">
            0-3 maanden: 6-8 voedingen van 60-120ml. 3-6 maanden: 5-6 voedingen van 120-180ml.
            Bekijk onze <Link href="/voedingsschemas" className="text-primary hover:underline font-medium">complete voedingsschema&apos;s</Link> of
            gebruik onze calculator voor een persoonlijk schema op basis van gewicht en leeftijd.
          </p>
        </div>

        <div>
          <h3 className="font-medium text-gray-800 mb-2">Hoe bereken ik hoeveel flesvoeding mijn baby nodig heeft?</h3>
          <p className="text-sm text-gray-600">
            Gebruik de formule: gewicht (kg) x 150ml = totaal per dag.
            Deel dit door aantal voedingen per dag. Onze calculator doet dit automatisch en houdt rekening met leeftijdsaanpassingen.
          </p>
        </div>
      </div>
    </div>
  )
}
