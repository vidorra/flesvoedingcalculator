import InformatieClient from './InformatieClient'

export const metadata = {
  title: 'Informatie over Flesvoeding: Richtlijnen, Hoeveelheden & Veiligheid',
  description: 'Alles over flesvoeding: berekeningsbasis, hoeveelheden per leeftijd, veiligheidsrichtlijnen en wanneer je een zorgverlener raadpleegt. Duidelijke uitleg voor ouders.',
  keywords: 'flesvoeding informatie, flesvoeding hoeveelheid, flesvoeding per leeftijd, flesvoeding richtlijnen, flesvoeding veiligheid, baby voeding uitleg',
  alternates: { canonical: '/informatie/' },
}

export default function InformatiePage() {
  return <InformatieClient />
}
