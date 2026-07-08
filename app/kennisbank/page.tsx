import KennisbankClient from './KennisbankClient'

export const metadata = {
  title: 'Kennisbank Flesvoeding: Alle Gidsen, Tips & Antwoorden op één Plek',
  description: 'De complete flesvoeding kennisbank: van bereiden en bewaren tot soorten melk, problemen oplossen en besparen. Doorzoek alle artikelen per categorie.',
  keywords: 'flesvoeding kennisbank, flesvoeding informatie, flesvoeding tips, flesvoeding gids, baby voeding, flesvoeding bereiden, flesvoeding artikelen',
  alternates: { canonical: '/kennisbank/' },
}

export default function KennisbankPage() {
  return <KennisbankClient />
}
