import Layout from '../../components/Layout'
import V2PageContent from '../../components/calculator-v2/V2PageContent'

export const metadata = {
  title: 'Flesvoeding Calculator (nieuw ontwerp) | FlesvoedingCalculator.nl',
  description: 'Alternatief ontwerp van de flesvoeding calculator: live berekening met een overzichtelijk resultaatpaneel.',
  // Experimental alternative layout - keep out of the index to avoid duplicate content.
  robots: { index: false, follow: false }
}

export default function V2Page() {
  return (
    <Layout>
      <V2PageContent variant="v2" />
    </Layout>
  )
}
