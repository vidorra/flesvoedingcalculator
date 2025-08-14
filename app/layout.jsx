import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FlesvoedingCalculator.nl - Bereken de juiste hoeveelheid',
  description: 'Gratis Nederlandse flesvoeding calculator voor ouders. Bereken hoeveel flesvoeding jouw baby nodig heeft volgens officiële richtlijnen.',
  keywords: 'flesvoeding, calculator, baby, nederland',
  robots: 'index, follow',
  authors: [{ name: 'FlesvoedingCalculator.nl' }],
  viewport: 'width=device-width, initial-scale=1',
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}