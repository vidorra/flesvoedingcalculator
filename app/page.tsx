import Layout from '../components/Layout'
import V2PageContent from '../components/calculator-v2/V2PageContent'
import V3Hero from '../components/calculator-v2/V3Hero'
import { generateCalculatorSchema, generateOrganizationSchema, generateFAQSchema } from '../lib/structured-data'
import { faqData } from '../lib/faq-data'

// Explicit self-canonical for the homepage (consolidates query-param variants).
// Resolves against metadataBase in layout -> https://flesvoedingcalculator.nl/
export const metadata = {
  alternates: { canonical: '/' }
}

/**
 * Homepage: the v3 design promoted to production (bold hero with photo
 * collage, single-card live calculator with gradient result panel).
 * The previous homepage lives at /oud (noindex); /v3 301-redirects here.
 */
export default function HomePage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCalculatorSchema())
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema())
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqData))
        }}
      />

      <Layout>
        <V2PageContent hero={<V3Hero />} simpleCalculator variant="home" />
      </Layout>
    </>
  )
}
