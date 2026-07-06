import OudHomeClient from './OudHomeClient'

export const metadata = {
  title: 'Flesvoeding Calculator (oude versie) | FlesvoedingCalculator.nl',
  description: 'De vorige versie van de flesvoeding calculator.',
  // Old homepage kept for reference; the new homepage is the canonical calculator.
  robots: { index: false, follow: false }
}

export default function OudPage() {
  return <OudHomeClient />
}
