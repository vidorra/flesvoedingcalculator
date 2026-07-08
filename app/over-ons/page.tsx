import OverOnsClient from './OverOnsClient'

export const metadata = {
  title: 'Over ons en onze werkwijze | FlesvoedingCalculator.nl',
  description: 'Lees waarom je FlesvoedingCalculator.nl kunt vertrouwen: gebaseerd op richtlijnen van het Voedingscentrum en NCJ, privacyvriendelijk en gratis voor alle ouders.',
  keywords: 'over flesvoedingcalculator, betrouwbare flesvoeding informatie, Voedingscentrum richtlijnen, NCJ, flesvoeding methode, privacy flesvoeding',
  alternates: {
    canonical: '/over-ons/'
  }
}

export default function OverOnsPage() {
  return <OverOnsClient />
}
