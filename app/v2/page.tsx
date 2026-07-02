import Layout from '../../components/Layout'
import FlesCalculatorV2 from '../../components/calculator-v2/FlesCalculatorV2'

export const metadata = {
  title: 'Flesvoeding Calculator (nieuw ontwerp) | FlesvoedingCalculator.nl',
  description: 'Alternatief ontwerp van de flesvoeding calculator: live berekening met een overzichtelijk resultaatpaneel.',
  // Experimental alternative layout - keep out of the index to avoid duplicate content.
  robots: { index: false, follow: false }
}

export default function V2Page() {
  return (
    <Layout>
      <FlesCalculatorV2 />
    </Layout>
  )
}
