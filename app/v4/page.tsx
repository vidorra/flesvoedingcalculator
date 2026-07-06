import Layout from '../../components/Layout'
import V2PageContent from '../../components/calculator-v2/V2PageContent'
import V4Hero from '../../components/calculator-v2/V4Hero'

export const metadata = {
  title: 'Flesvoeding Calculator (ontwerp 4) | FlesvoedingCalculator.nl',
  description: 'Alternatief ontwerp van de flesvoeding calculator met een kleurvlak-hero.',
  // Experimental alternative layout - keep out of the index.
  robots: { index: false, follow: false }
}

export default function V4Page() {
  return (
    <Layout>
      <V2PageContent hero={<V4Hero />} variant="v4" />
    </Layout>
  )
}
