/**
 * Data voor de leeftijdspagina's onder /voedingsschemas/[leeftijd]/.
 *
 * De hoeveelheden worden op de pagina berekend (lib/feeding-table.ts). Hier
 * staan alleen gewichten en teksten, elk feit met de bron waar het vandaan
 * komt. Bronnen geraadpleegd op 16 november 2026. Regels voor de tekst:
 * geen getallen uit het hoofd, geen "groeisprongen" op vaste weken, geen
 * aantal nachtvoedingen, de oude grens van 1 liter niet als regel noemen.
 */

export type BronId =
  | 'who'
  | 'vc-hoeveel'
  | 'vc-hoe-geef'
  | 'vc-klaarmaken'
  | 'vc-huilen'
  | 'vc-water'
  | 'jgz-voeding'
  | 'jgz-huilen'
  | 'jgz-huilen-ouders'
  | 'jgz-slaap'
  | 'groeigids'
  | 'rvp'
  | 'thuisarts-spugen'

export const BRONNEN: Record<BronId, { naam: string; url: string }> = {
  who: {
    naam: 'WHO Child Growth Standards, weight-for-age (tabellen per week en per maand)',
    url: 'https://www.who.int/tools/child-growth-standards/standards/weight-for-age'
  },
  'vc-hoeveel': {
    naam: 'Voedingscentrum, Hoeveel flesvoeding heeft mijn baby nodig?',
    url: 'https://www.voedingscentrum.nl/nl/zwanger-en-kind/borstvoeding-en-flesvoeding/flesvoeding-geven/hoeveel-flesvoeding-heeft-mijn-baby-nodig-.aspx'
  },
  'vc-hoe-geef': {
    naam: 'Voedingscentrum, Hoe geef ik de fles?',
    url: 'https://www.voedingscentrum.nl/nl/zwanger-en-kind/borstvoeding-en-flesvoeding/flesvoeding-geven/hoe-geef-ik-de-fles.aspx'
  },
  'vc-klaarmaken': {
    naam: 'Voedingscentrum, Hoe maak ik de fles klaar?',
    url: 'https://www.voedingscentrum.nl/nl/zwanger-en-kind/borstvoeding-en-flesvoeding/flesvoeding-geven/hoe-maak-ik-de-fles-klaar-.aspx'
  },
  'vc-huilen': {
    naam: 'Voedingscentrum, Huilt mijn baby van de honger of is er iets anders?',
    url: 'https://www.voedingscentrum.nl/nl/service/vraag-en-antwoord/zwanger-en-baby/huilen-baby-honger-of-iets-anders.aspx'
  },
  'vc-water': {
    naam: 'Voedingscentrum, Leren water drinken',
    url: 'https://www.voedingscentrum.nl/nl/zwanger-en-kind/eerste-hapjes/leren-water-drinken.aspx'
  },
  'jgz-voeding': {
    naam: 'JGZ-richtlijn Voeding en eetgedrag',
    url: 'https://www.jgzrichtlijnen.nl/richtlijn/jgz-richtlijn-voeding-en-eetgedrag/'
  },
  'jgz-huilen': {
    naam: 'JGZ-richtlijn Excessief huilen (2025)',
    url: 'https://www.jgzrichtlijnen.nl/richtlijn/jgz-richtlijn-excessief-huilen/'
  },
  'jgz-huilen-ouders': {
    naam: 'JGZ, Samenvatting voor ouders: Excessief huilen (2025)',
    url: 'https://www.jgzrichtlijnen.nl/wp-content/uploads/2025/11/20250915-Samenvatting-voor-ouders-JGZ-richtlijn-Excessief-huilen.pdf'
  },
  'jgz-slaap': {
    naam: 'JGZ-richtlijn Slaap (2026)',
    url: 'https://www.jgzrichtlijnen.nl/richtlijn/jgz-richtlijn-slaap/'
  },
  groeigids: {
    naam: 'GroeiGids 0-4 jaar (editie 2026)',
    url: 'https://www.groeigids.nl/assets/print/groeigids-0-4-2026.pdf'
  },
  rvp: {
    naam: 'Rijksvaccinatieprogramma, Vaccinatieschema',
    url: 'https://rijksvaccinatieprogramma.nl/vaccinaties/vaccinatieschema'
  },
  'thuisarts-spugen': {
    naam: 'Thuisarts, Mijn baby spuugt veel (reflux)',
    url: 'https://www.thuisarts.nl/spugen-bij-babys/mijn-baby-spuugt-veel-reflux'
  }
}

export const BRONNEN_DATUM = '16 november 2026'

export interface Percentielen {
  p3: number
  p15: number
  p50: number
  p85: number
  p97: number
}

export interface Feit {
  titel: string
  tekst: string
  bronnen: BronId[]
}

export interface LeeftijdPagina {
  slug: string
  /** "3 weken" */
  label: string
  /** Tweede benaming in de tekst, zoals "1 maand" bij 4 weken */
  ookWel?: string
  /** Leeftijd in weken, voor de volgorde */
  weken: number
  gewicht: { jongens: Percentielen; meisjes: Percentielen }
  /** Uitleg bij de gewichten, bijvoorbeeld week- versus maandtabel */
  gewichtNoot?: string
  /** Kolommen in de tabel per gewicht */
  voedingen: number[]
  /** Aantal voedingen in het voorbeeldschema (sleutel van FEEDING_SCHEDULES) */
  voorbeeldVoedingen: number
  /** Leeftijdsknop in de calculator */
  initialAge: '0-1' | '1' | '3' | '6'
  initialFeedings: string
  /** Antwoord op "hoe vaak drinkt een baby van ..." */
  hoeVaak: { tekst: string; bronnen: BronId[] }
  feiten: Feit[]
  /** Extra vragen naast de twee die de pagina zelf opbouwt */
  faq: { question: string; answer: string }[]
  artikelen: { href: string; titel: string; omschrijving: string }[]
  metaDescription: string
}

const HUILEN_PIEK: Feit = {
  titel: 'Huilen: piek en afname',
  tekst:
    'Sommige baby\'s huilen het meest rond 4 weken, gemiddeld een uur en 40 minuten per dag. De spreiding van die piek is 3 tot 6 weken. Andere baby\'s huilen vanaf de geboorte tot 8 weken vrij constant. Rond 8 weken wordt het bij de meeste baby\'s minder.',
  bronnen: ['jgz-huilen', 'jgz-huilen-ouders']
}

const REGELDAGEN: Feit = {
  titel: 'Regeldagen',
  tekst:
    'Rond 10 dagen, 6 weken en 3 maanden hebben baby\'s vaak regeldagen: dagen waarop ze onrustig zijn en vaker willen drinken. Het Voedingscentrum raadt aan dan vaker een flesje te geven. Na ongeveer 2 dagen is er meestal weer een nieuw ritme.',
  bronnen: ['vc-hoeveel']
}

const VACCINATIE_6_9: Feit = {
  titel: 'Vaccinaties tussen 6 en 9 weken',
  tekst:
    'Tussen 6 en 9 weken krijgt je baby bij de JGZ het vaccin tegen rotavirus. De DKTP-Hib-HepB-prik komt er op deze leeftijd alleen bij als de moeder tijdens de zwangerschap geen kinkhoestprik heeft gehad, of in bijzondere situaties.',
  bronnen: ['rvp', 'groeigids']
}

const HONGER_SIGNALEN: Feit = {
  titel: 'Honger of genoeg gehad?',
  tekst:
    'Je baby heeft honger als het onrustig wordt, op de handjes sabbelt en smakkende geluidjes maakt. Geef je dan meteen de fles, dan ben je het huilen vaak voor. Draait je baby het hoofdje weg, loopt er melk uit de mondhoeken of hapt het niet meer gretig toe, dan is het genoeg.',
  bronnen: ['vc-hoe-geef', 'vc-hoeveel']
}

const HOE_VAAK_EERSTE_WEKEN = {
  tekst:
    'Het Voedingscentrum noemt voor de eerste weken ongeveer 10 voedingen per 24 uur, ook \'s nachts. Je geeft de fles op verzoek, dus het ene etmaal zijn het er wat meer dan het andere.',
  bronnen: ['vc-hoeveel', 'jgz-voeding'] as BronId[]
}

const HOE_VAAK_VANAF_MAAND = {
  tekst:
    'De JGZ-richtlijn noemt vanaf 1 maand ongeveer 6 voedingen per dag, het Voedingscentrum ongeveer 10 in de eerste weken. Tussen 6 en 10 keer per 24 uur is op deze leeftijd dus gewoon. De hoeveelheid per dag blijft gelijk: bij minder voedingen wordt elk flesje groter.',
  bronnen: ['jgz-voeding', 'vc-hoeveel'] as BronId[]
}

export const LEEFTIJD_PAGINAS: LeeftijdPagina[] = [
  {
    slug: 'baby-2-weken',
    label: '2 weken',
    weken: 2,
    gewicht: {
      jongens: { p3: 2.8, p15: 3.2, p50: 3.8, p85: 4.3, p97: 4.9 },
      meisjes: { p3: 2.7, p15: 3.1, p50: 3.6, p85: 4.1, p97: 4.6 }
    },
    voedingen: [8, 10],
    voorbeeldVoedingen: 9,
    initialAge: '0-1',
    initialFeedings: '8',
    hoeVaak: HOE_VAAK_EERSTE_WEKEN,
    feiten: [
      {
        titel: 'Terug op geboortegewicht',
        tekst:
          'Na de geboorte valt een baby eerst wat af. Na ongeveer 2 weken is je baby meestal weer terug op het geboortegewicht. Daarna groeit een baby in het eerste halfjaar ongeveer 150 gram per week, en groeit de hoeveelheid melk mee.',
        bronnen: ['vc-hoeveel']
      },
      {
        titel: 'Ook \'s nachts voeden',
        tekst:
          'De JGZ-richtlijn adviseert de voedingen in de eerste 6 weken ook \'s nachts aan te bieden. Een vast aantal nachtvoedingen is er niet: je volgt wat je baby aangeeft.',
        bronnen: ['jgz-voeding']
      },
      {
        titel: 'Kennismaking met de JGZ',
        tekst:
          'Ongeveer twee weken na de geboorte komt de jeugdverpleegkundige bij je thuis kennismaken. Daarna krijg je uitnodigingen voor afspraken. Vaak is er ook een inloop- of weegspreekuur, waar je ziet hoe je baby groeit en kleine vragen kwijt kunt.',
        bronnen: ['groeigids']
      },
      {
        titel: 'RSV-prik',
        tekst:
          'Is je baby geboren tussen oktober en maart, dan krijgt het binnen 2 weken na de geboorte de prik tegen RSV. Baby\'s die tussen april en september geboren zijn, krijgen die prik in september of oktober.',
        bronnen: ['rvp']
      }
    ],
    faq: [
      {
        question: 'Mijn baby van 2 weken wil elke 2 uur drinken. Is dat normaal?',
        answer:
          'Ja. Het Voedingscentrum noemt voor de eerste weken ongeveer 10 voedingen per 24 uur en schrijft dat een baby niet keurig om de 2 of 3 uur om drinken vraagt. Geef de fles op verzoek.'
      }
    ],
    artikelen: [
      { href: '/kennisbank/basis-flesvoeding/eerste-keer-flesvoeding-geven/', titel: 'Eerste keer flesvoeding geven', omschrijving: 'Stap voor stap de eerste flesjes' },
      { href: '/kennisbank/praktische-tips/nachtvoeding-optimaliseren/', titel: 'Nachtvoeding', omschrijving: 'De nacht zo rustig mogelijk houden' }
    ],
    metaDescription:
      'Hoeveel ml flesvoeding drinkt een baby van 2 weken? Tabel per gewicht met ml per dag, per voeding en schepjes, een voorbeeldschema en wat er speelt rond 2 weken.'
  },
  {
    slug: 'baby-3-weken',
    label: '3 weken',
    weken: 3,
    gewicht: {
      jongens: { p3: 3.1, p15: 3.5, p50: 4.1, p85: 4.7, p97: 5.2 },
      meisjes: { p3: 2.9, p15: 3.3, p50: 3.8, p85: 4.4, p97: 5.0 }
    },
    voedingen: [8, 10],
    voorbeeldVoedingen: 9,
    initialAge: '0-1',
    initialFeedings: '8',
    hoeVaak: HOE_VAAK_EERSTE_WEKEN,
    feiten: [
      HUILEN_PIEK,
      HONGER_SIGNALEN,
      {
        titel: 'Vaker drinken in de avond',
        tekst:
          'Veel baby\'s drinken in de late middag en vroege avond vaker, zodat ze \'s nachts een langere periode kunnen overbruggen. Het Voedingscentrum raadt aan daar niet tegenin te gaan met een vast schema.',
        bronnen: ['vc-hoeveel']
      }
    ],
    faq: [
      {
        question: 'Mijn baby van 3 weken huilt veel na de fles. Heeft het nog honger?',
        answer:
          'Niet altijd. Huilen neemt in deze weken bij veel baby\'s toe, met een piek rond 4 weken. Let op de signalen: sabbelen op de handjes en smakken wijzen op honger, het hoofdje wegdraaien en niet meer gretig toehappen op genoeg gehad.'
      }
    ],
    artikelen: [
      { href: '/kennisbank/problemen-oplossen/krampjes-na-flesvoeding/', titel: 'Krampjes na flesvoeding', omschrijving: 'Wat helpt en wanneer je hulp vraagt' },
      { href: '/kennisbank/voedingstechnieken/boertje-laten-tijdens-voeding/', titel: 'Boertje laten', omschrijving: 'Minder lucht in het buikje' }
    ],
    metaDescription:
      'Hoeveel ml flesvoeding drinkt een baby van 3 weken? Tabel per gewicht met ml per dag, per voeding en schepjes, een voorbeeldschema en wat er speelt rond 3 weken.'
  },
  {
    slug: 'baby-4-weken',
    label: '4 weken',
    ookWel: '1 maand',
    weken: 4,
    gewicht: {
      jongens: { p3: 3.4, p15: 3.8, p50: 4.4, p85: 5.0, p97: 5.6 },
      meisjes: { p3: 3.1, p15: 3.5, p50: 4.1, p85: 4.7, p97: 5.3 }
    },
    gewichtNoot:
      '4 weken en 1 maand zijn niet precies hetzelfde. De WHO rekent een maand als ruim 30 dagen, dus bij 1 maand liggen de gewichten iets hoger: de mediaan is dan 4,5 kg bij jongens en 4,2 kg bij meisjes. Hier staan de waarden voor precies 4 weken.',
    voedingen: [6, 8, 10],
    voorbeeldVoedingen: 8,
    initialAge: '0-1',
    initialFeedings: '8',
    hoeVaak: HOE_VAAK_VANAF_MAAND,
    feiten: [
      HUILEN_PIEK,
      {
        titel: '6 of 10 voedingen?',
        tekst:
          'Hier verschillen de bronnen. Het Voedingscentrum noemt ongeveer 10 voedingen per 24 uur in de eerste weken, de JGZ-richtlijn ongeveer 6 vanaf 1 maand. De hoeveelheid per dag verandert daar niet door, je verdeelt die over meer of minder flesjes. Daarom staan er in de tabel drie kolommen.',
        bronnen: ['vc-hoeveel', 'jgz-voeding']
      },
      HONGER_SIGNALEN
    ],
    faq: [
      {
        question: 'Hoeveel flesvoeding drinkt een baby van 1 maand?',
        answer:
          'Ongeveer evenveel als op 4 weken. Bij 1 maand is de WHO-mediaan 4,5 kg bij jongens en 4,2 kg bij meisjes. Met de vuistregel van 150 ml per kilo is dat 630 tot 675 ml per dag. Reken met het echte gewicht van je baby in de calculator.'
      }
    ],
    artikelen: [
      { href: '/kennisbank/praktische-tips/voedingsritme-opbouwen/', titel: 'Voedingsritme opbouwen', omschrijving: 'Van op verzoek naar een vast ritme' },
      { href: '/kennisbank/problemen-oplossen/krampjes-na-flesvoeding/', titel: 'Krampjes na flesvoeding', omschrijving: 'Wat helpt en wanneer je hulp vraagt' }
    ],
    metaDescription:
      'Hoeveel ml flesvoeding drinkt een baby van 4 weken (1 maand)? Tabel per gewicht met ml per dag, per voeding en schepjes, bij 6, 8 en 10 voedingen, plus een voorbeeldschema.'
  },
  {
    slug: 'baby-6-weken',
    label: '6 weken',
    weken: 6,
    gewicht: {
      jongens: { p3: 3.8, p15: 4.3, p50: 4.9, p85: 5.6, p97: 6.3 },
      meisjes: { p3: 3.5, p15: 4.0, p50: 4.6, p85: 5.3, p97: 5.9 }
    },
    voedingen: [6, 8, 10],
    voorbeeldVoedingen: 7,
    initialAge: '1',
    initialFeedings: '8',
    hoeVaak: HOE_VAAK_VANAF_MAAND,
    feiten: [
      REGELDAGEN,
      {
        titel: 'Nachtvoedingen',
        tekst:
          'De JGZ-richtlijn adviseert de voedingen in de eerste 6 weken ook \'s nachts aan te bieden. Een vast aantal nachtvoedingen voor daarna noemen de richtlijnen niet. Je blijft voeden op verzoek, ook \'s nachts.',
        bronnen: ['jgz-voeding', 'vc-hoeveel']
      },
      VACCINATIE_6_9,
      {
        titel: 'Huilen',
        tekst:
          'De huilpiek ligt meestal rond 4 weken, met een spreiding van 3 tot 6 weken. Rond 8 weken, met een spreiding van 5 tot 11 weken, neemt het huilen bij de meeste baby\'s duidelijk af.',
        bronnen: ['jgz-huilen']
      }
    ],
    faq: [
      {
        question: 'Mijn baby van 6 weken wil ineens veel vaker drinken. Moet ik meer geven?',
        answer:
          'Rond 6 weken hebben baby\'s vaak regeldagen: ze zijn onrustig en willen vaker drinken. Het Voedingscentrum raadt aan dan vaker een flesje te geven. Na ongeveer 2 dagen is er meestal weer een nieuw ritme.'
      }
    ],
    artikelen: [
      { href: '/kennisbank/praktische-tips/voedingsritme-opbouwen/', titel: 'Voedingsritme opbouwen', omschrijving: 'Van op verzoek naar een vast ritme' },
      { href: '/kennisbank/praktische-tips/nachtvoeding-optimaliseren/', titel: 'Nachtvoeding', omschrijving: 'De nacht zo rustig mogelijk houden' }
    ],
    metaDescription:
      'Hoeveel ml flesvoeding drinkt een baby van 6 weken? Tabel per gewicht met ml per dag, per voeding en schepjes, een voorbeeldschema en wat er speelt rond 6 weken.'
  },
  {
    slug: 'baby-8-weken',
    label: '8 weken',
    ookWel: '2 maanden',
    weken: 8,
    gewicht: {
      jongens: { p3: 4.3, p15: 4.7, p50: 5.4, p85: 6.2, p97: 6.8 },
      meisjes: { p3: 3.9, p15: 4.4, p50: 5.0, p85: 5.7, p97: 6.4 }
    },
    gewichtNoot:
      '8 weken is iets minder dan 2 maanden. Bij 2 maanden is de WHO-mediaan 5,6 kg bij jongens en 5,1 kg bij meisjes. Hier staan de waarden voor precies 8 weken.',
    voedingen: [6, 8, 10],
    voorbeeldVoedingen: 7,
    initialAge: '1',
    initialFeedings: '8',
    hoeVaak: HOE_VAAK_VANAF_MAAND,
    feiten: [
      {
        titel: 'Het huilen neemt af',
        tekst:
          'Rond 8 weken, met een spreiding van 5 tot 11 weken, begint het huilen bij de meeste baby\'s duidelijk af te nemen. Vanaf 12 weken huilen baby\'s gemiddeld nog een half uur tot een uur per 24 uur.',
        bronnen: ['jgz-huilen']
      },
      VACCINATIE_6_9,
      {
        titel: 'Spugen',
        tekst:
          'Een mondje voeding terug bij een boertje is in de eerste maanden heel gewoon. Spugen stopt bijna altijd voordat je baby 1 jaar is. Bel de huisarts als je baby slecht drinkt of niet goed groeit.',
        bronnen: ['thuisarts-spugen', 'jgz-voeding']
      }
    ],
    faq: [
      {
        question: 'Hoeveel flesvoeding drinkt een baby van 2 maanden?',
        answer:
          'Bij 2 maanden is de WHO-mediaan 5,6 kg bij jongens en 5,1 kg bij meisjes. Met de vuistregel van 150 ml per kilo is dat ongeveer 765 tot 840 ml per dag. Reken met het echte gewicht van je baby in de calculator.'
      }
    ],
    artikelen: [
      { href: '/kennisbank/problemen-oplossen/spugen-na-de-fles/', titel: 'Spugen na de fles', omschrijving: 'Wanneer het normaal is en wanneer niet' },
      { href: '/kennisbank/praktische-tips/voedingsritme-opbouwen/', titel: 'Voedingsritme opbouwen', omschrijving: 'Van op verzoek naar een vast ritme' }
    ],
    metaDescription:
      'Hoeveel ml flesvoeding drinkt een baby van 8 weken (2 maanden)? Tabel per gewicht met ml per dag, per voeding en schepjes, een voorbeeldschema en wat er speelt rond 8 weken.'
  },
  {
    slug: 'baby-3-maanden',
    label: '3 maanden',
    ookWel: 'ongeveer 13 weken',
    weken: 13,
    gewicht: {
      jongens: { p3: 5.1, p15: 5.6, p50: 6.4, p85: 7.2, p97: 7.9 },
      meisjes: { p3: 4.6, p15: 5.1, p50: 5.8, p85: 6.7, p97: 7.4 }
    },
    gewichtNoot:
      '3 maanden is ongeveer 13 weken. In de WHO-tabellen geven 13 weken en 3 maanden afgerond dezelfde gewichten.',
    voedingen: [6, 7, 8],
    voorbeeldVoedingen: 6,
    initialAge: '3',
    initialFeedings: '6',
    hoeVaak: {
      tekst:
        'De JGZ-richtlijn noemt vanaf 1 maand ongeveer 6 voedingen per dag, en rond 6 maanden willen de meeste baby\'s volgens het Voedingscentrum ongeveer 6 keer per dag een fles. Op 3 maanden zit je dus meestal rond de 6 voedingen, soms wat meer. Blijf op verzoek voeden.',
      bronnen: ['jgz-voeding', 'vc-hoeveel']
    },
    feiten: [
      {
        titel: 'Dag- en nachtritme',
        tekst:
          'Rond 3 maanden ontstaat een dag- en nachtritme, waardoor baby\'s makkelijker in slaap vallen en \'s nachts langer slapen. Doorslapen is nog niet de norm: in een Fins onderzoek sliep de meerderheid van de baby\'s van 3 maanden nog niet ononderbroken van 00:00 tot 06:00 uur.',
        bronnen: ['jgz-slaap']
      },
      REGELDAGEN,
      {
        titel: 'Minder huilen, krampjes meestal over',
        tekst:
          'Vanaf 12 weken huilen baby\'s gemiddeld nog een half uur tot een uur per 24 uur. Bij de meeste baby\'s zijn de krampjes na 3 maanden over.',
        bronnen: ['jgz-huilen', 'vc-huilen']
      },
      {
        titel: 'Vaccinaties op 3 maanden',
        tekst:
          'Op 3 maanden krijgt je baby bij de JGZ vaccins tegen rotavirus, DKTP-Hib-HepB en pneumokokken.',
        bronnen: ['rvp']
      }
    ],
    faq: [
      {
        question: 'Hoeveel flesvoeding drinkt een baby van 12 weken?',
        answer:
          'Ongeveer evenveel als op 3 maanden: 3 maanden is ongeveer 13 weken. Reken met het gewicht van je baby. Bij 6 kg is dat 900 ml per dag, bij 6 voedingen 150 ml per fles.'
      },
      {
        question: 'Mijn baby van 3 maanden slaapt nog niet door. Moet ik de laatste fles groter maken?',
        answer:
          'Doorslapen is op 3 maanden nog niet de norm. Volgens de JGZ-richtlijn Slaap slaapt de meerderheid van de baby\'s op die leeftijd nog niet ononderbroken van 00:00 tot 06:00 uur. Het flesje hoeft niet leeg, en je baby geeft zelf aan wanneer het genoeg is.'
      }
    ],
    artikelen: [
      { href: '/kennisbank/praktische-tips/flesvoeding-en-slapen/', titel: 'Flesvoeding en slapen', omschrijving: 'De laatste fles en de nacht' },
      { href: '/kennisbank/praktische-tips/voedingsritme-opbouwen/', titel: 'Voedingsritme opbouwen', omschrijving: 'Van op verzoek naar een vast ritme' }
    ],
    metaDescription:
      'Hoeveel ml flesvoeding drinkt een baby van 3 maanden? Tabel per gewicht met ml per dag, per voeding en schepjes, een voorbeeldschema en wat er speelt rond 3 maanden.'
  }
]

export function getLeeftijdPagina(slug: string): LeeftijdPagina | undefined {
  return LEEFTIJD_PAGINAS.find((p) => p.slug === slug)
}

/** Gedeelde feiten onder elke leeftijdspagina. */
export const GOED_OM_TE_WETEN: Feit[] = [
  {
    titel: 'Een richtlijn, geen wet',
    tekst:
      'Het Voedingscentrum rekent met ongeveer 150 ml per kilo per dag en noemt dat "echt een richtlijn en geen wet". De ene dag drinkt je baby meer dan de andere.',
    bronnen: ['vc-hoeveel', 'jgz-voeding']
  },
  {
    titel: 'Het flesje hoeft niet leeg',
    tekst:
      'Draait je baby het hoofdje weg of hapt het niet meer gretig toe, dan is het genoeg. Ook de JGZ-richtlijn zegt dat de fles niet altijd leeg hoeft.',
    bronnen: ['vc-hoeveel', 'jgz-voeding']
  },
  {
    titel: 'Geen extra water',
    tekst:
      'In de eerste 6 maanden krijgt je baby genoeg vocht uit de melk. Extra water is niet nodig.',
    bronnen: ['vc-water']
  },
  {
    titel: 'Restjes weggooien',
    tekst:
      'Laat je baby niet langer dan een half uur drinken en gooi wat over is weg. Maak de fles niet warmer dan 30 tot 35 graden.',
    bronnen: ['vc-klaarmaken']
  }
]
