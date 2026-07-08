import { generateFAQSchema } from '../../lib/structured-data'
import { faqItems } from './faq-data'
import FaqClient from './FaqClient'

export const metadata = {
  title: 'Veelgestelde vragen over flesvoeding | FlesvoedingCalculator.nl',
  description: 'Antwoorden op veelgestelde vragen over flesvoeding: hoeveelheid per dag, nauwkeurigheid van de calculator, juiste temperatuur en wanneer je de dokter belt.',
  keywords: 'flesvoeding vragen, veelgestelde vragen flesvoeding, hoeveel flesvoeding baby, flesvoeding temperatuur, flesvoeding calculator, overvoeding baby',
  alternates: {
    canonical: '/faq/'
  }
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqItems)) }}
      />
      <FaqClient />
    </>
  )
}
