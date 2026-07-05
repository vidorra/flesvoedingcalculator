import Layout from '../../components/Layout'
import V2PageContent from '../../components/calculator-v2/V2PageContent'
import V3Hero from '../../components/calculator-v2/V3Hero'

export const metadata = {
  title: 'Flesvoeding Calculator (ontwerp 3) | FlesvoedingCalculator.nl',
  description: 'Alternatief ontwerp van de flesvoeding calculator met een uitgesproken hero.',
  // Experimental alternative layout - keep out of the index.
  robots: { index: false, follow: false }
}

export default function V3Page() {
  return (
    <Layout>
      <V2PageContent hero={<V3Hero />} simpleCalculator />
    </Layout>
  )
}
