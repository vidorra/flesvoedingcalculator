import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FlesvoedingCalculator.nl - Bereken de juiste hoeveelheid flesvoeding',
  description: 'Bereken de juiste hoeveelheid flesvoeding voor je baby met onze Nederlandse calculator. Gebaseerd op officiële richtlijnen van het Voedingscentrum.',
  keywords: 'flesvoeding, calculator, baby, voeding, nederland, hoeveelheid, voedingsschema',
  authors: [{ name: 'FlesvoedingCalculator.nl' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}