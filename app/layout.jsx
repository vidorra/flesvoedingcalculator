import './globals.css'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  metadataBase: new URL('https://flesvoedingcalculator.nl'),
  title: 'Flesvoeding Calculator 2025 | Bereken Hoeveel ML Baby Nodig Heeft',
  description: 'Gratis flesvoeding calculator op basis van Nederlandse richtlijnen. Bereken direct hoeveel ml jouw baby per voeding nodig heeft. ✓ 150ml/kg formule ✓ Per leeftijd',
  keywords: 'flesvoeding calculator, hoeveel ml flesvoeding, baby voeding berekenen, flesvoeding schema, Nederlandse richtlijnen, 150ml per kg',
  robots: 'index, follow',
  authors: [{ name: 'FlesvoedingCalculator.nl' }],
  openGraph: {
    title: 'FlesvoedingCalculator.nl',
    description: 'Bereken hoeveel flesvoeding jouw baby nodig heeft',
    url: 'https://flesvoedingcalculator.nl',
    siteName: 'FlesvoedingCalculator.nl',
    images: ['/og-image.png'],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlesvoedingCalculator.nl',
    description: 'Bereken hoeveel flesvoeding jouw baby nodig heeft',
    images: ['/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://flesvoedingcalculator.nl',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  )
}