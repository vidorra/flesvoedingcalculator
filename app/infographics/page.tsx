import InfographicsClient from './InfographicsClient'

export const metadata = {
  title: 'Flesvoeding Infographics: Bereiden & Voedingsschema per Leeftijd',
  description: 'Visuele guides voor flesvoeding: stap-voor-stap de fles bereiden in 6 stappen en een compleet voedingsschema per leeftijd van 0 tot 12 maanden.',
  keywords: 'flesvoeding infographic, flesvoeding bereiden stappen, voedingsschema baby, flesvoeding per leeftijd, flesvoeding visuele gids, baby voedingsschema',
  alternates: { canonical: '/infographics/' },
}

export default function InfographicsPage() {
  return <InfographicsClient />
}
