import VoedingsschemasClient from './VoedingsschemasClient'

export const metadata = {
  title: 'Voedingsschema flesvoeding per leeftijd | FlesvoedingCalculator.nl',
  description: 'Voedingsschema voor flesvoeding per leeftijd van 0 tot 12+ maanden. Bekijk hoeveelheden, voedingstijden en mijlpalen, plus download je schema als PDF.',
  keywords: 'voedingsschema flesvoeding, flesvoeding schema baby, voedingstijden baby, hoeveel flesvoeding per leeftijd, voedingsschema 0-3 maanden, flesvoeding schema pdf',
  alternates: {
    canonical: '/voedingsschemas/'
  }
}

export default function VoedingsschemasPage() {
  return <VoedingsschemasClient />
}
