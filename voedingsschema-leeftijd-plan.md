# Plan: schemapagina herschrijven en leeftijdspagina's (flesvoedingcalculator.nl)

Opgesteld 16 november 2026. Bronnen: Search Console-export van 13 augustus 2025
t/m 14 november 2026 (5.991 klikken, 233.141 vertoningen) en de code op `main`.

## Doel

Twee groepen zoekopdrachten binnenhalen waar de site nu buiten pagina 1 staat:
mensen die een voedingsschema zoeken, en mensen die vragen hoeveel een baby
van een bepaalde leeftijd drinkt.

**Eerlijke verwachting.** Dit levert meer informatief verkeer op, geen
koopverkeer. Uit de zichtbare zoekopdrachten volgt een ruwe schatting van 50
tot 200 extra klikken per maand voor de leeftijdspagina's, tegen ±850 nu. Het
kan een veelvoud zijn, omdat de export maar een vijfde van alle vertoningen
per zoekopdracht laat zien. Het schema-cluster is de onbekende: op positie 44
zie je de echte vraag niet.

## Wat de data zegt

**Schema: 54 zoekopdrachten, 2.256 vertoningen, 1 klik, gemiddeld positie 44.**

| Zoekopdracht | Vertoningen | Positie |
|---|---|---|
| voedingsschema baby | 342 | 63 |
| flesvoeding schema | 298 | 36 |
| baby voedingsschema | 258 | 65 |
| schema voeding baby | 141 | 57 |
| schema flesvoeding | 134 | 30 |
| voedingsschema baby 1 maand | 65 | 44 |
| voedingsschema baby 3 maanden | 64 | 31 |
| voedingsschema baby tijden | 49 | 50 |

**Leeftijd: 264 zoekopdrachten, 5.836 vertoningen, 46 klikken, positie 18.**
Zelfde leeftijd in weken en maanden is samengenomen:

| Leeftijd | Vertoningen | Positie | Voorbeeld |
|---|---|---|---|
| 3 maanden (12 weken) | 1.752 | 13 | hoeveel flesvoeding baby 3 maanden |
| 3 weken | 871 | 16 | hoeveel ml drinkt een baby van 3 weken |
| 4 weken (1 maand) | 614 | 17 tot 35 | hoeveel flesvoeding baby 4 weken |
| 8 weken (2 maanden) | 448 | 20 tot 23 | hoeveel ml baby 8 weken |
| 2 weken | 350 | 22 | hoeveel flesvoeding baby 2 weken |
| 6 weken | 345 | 21 | hoeveel ml baby 6 weken |
| 4 maanden | 309 | 15 | hoeveel ml melk baby 4 maanden |
| 5 weken | 184 | 17 | |
| 7 weken | 173 | 15 | |
| 6 maanden | 147 | 18 | |
| 1 week | 134 | 29 | |
| 5 maanden | 129 | 20 | |

**Gewicht: ±1.500 vertoningen op positie 10 tot 20**, zoals "baby 5 kg hoeveel
voeding" (187, positie 21) en "baby 4 5 kg hoeveel voeding" (184, positie 12).

**Waarom de schemapagina niet rankt.** `/voedingsschemas/` heeft als H1 alleen
"Voedingsschema's", één zin intro en daarna een keuzetool. De tool is een
client-component met de gekozen leeftijd in state: in de HTML die Google
krijgt staat alleen het schema voor 0-3 maanden. De schema's voor 3-6, 6-12 en
12+ maanden en alle varianten per aantal voedingen zitten in JavaScript
([VoedingsschemasClient.tsx](app/voedingsschemas/VoedingsschemasClient.tsx)).
Er staat geen overzicht per week of maand, terwijl mensen daar juist op zoeken.

**Twee versies in Google.** De www-variant van de schemapagina heeft 1.368
vertoningen, de variant zonder www 631. Zolang www met een 302 doorstuurt
blijft dat verdeeld.

## Vooraf

- [ ] www naar niet-www: in CapRover via "Edit Default Nginx Configurations"
      beide `return 302` naar `301` en de doorstuurregel naar
      `https://flesvoedingcalculator.nl$request_uri`.
- [ ] Zoekvolume van "voedingsschema baby" en "flesvoeding schema" opzoeken in
      Google Keyword Planner (gratis). Dat bepaalt hoeveel moeite fase 3 waard is.

## Uitgangspunten

- **Eén bron voor de getallen.** Alle hoeveelheden komen uit `computeFeeding()`
  in [lib/feeding-calc.ts](lib/feeding-calc.ts) en de constanten in
  [lib/feeding-constants.ts](lib/feeding-constants.ts) (150 ml per kg, afronden
  op 5 ml, 1 schepje per 30 ml). De schemapagina heeft nu eigen, met de hand
  ingevulde bereiken ("60-120 ml"): die vervallen.
- **Elk feit met bron.** Gewichten per leeftijd uit de groeidiagrammen van TNO
  of de WHO-groeistandaard, met bronvermelding. Leeftijdsgebonden onderwerpen
  (regeldagen, nachtvoeding, eerste hapjes) alleen als het Voedingscentrum of
  de JGZ-richtlijn het zo zegt. Geen getallen uit het hoofd.
- **Geen pagina's die alleen in één getal verschillen.** De hoeveelheid hangt
  af van het gewicht, niet van de leeftijd. Een leeftijdspagina bestaat alleen
  als er ook iets eigens over die leeftijd te zeggen valt.
- Stijlregels uit [CLAUDE.md](CLAUDE.md) gelden; `npm run lint:kennisbank` moet
  schoon blijven.

## Fase 1: schemapagina herschrijven

- [ ] `page.tsx` wordt een servercomponent met de inhoud in de HTML. De
      keuzetool en de PDF-knop blijven als klein client-onderdeel. `jspdf` pas
      laden bij de klik op Download.
- [ ] H1: "Voedingsschema flesvoeding: per leeftijd en gewicht". Title blijft
      in de buurt van de huidige.
- [ ] Bovenaan één overzichtstabel: per leeftijd (1 week t/m 12 maanden) het
      aantal voedingen per dag, ml per voeding en totaal per dag, met een link
      naar de leeftijdspagina waar die bestaat.
- [ ] Daaronder per leeftijdsgroep een eigen sectie met anker, met een
      voorbeelddag in tijden (er wordt gezocht op "voedingsschema baby tijden").
      Alle groepen staan in de HTML, niet alleen de gekozen tab.
- [ ] Korte sectie "Op verzoek of op schema?", met bron.
- [ ] Veelgestelde vragen op basis van de echte zoekopdrachten hierboven.
- [ ] Links naar de calculator, de schepjes-calculator en
      `voedingsritme-opbouwen`. Dat artikel blijft apart: andere vraag. Het
      komt nu niet voor in Search Console, dus een link erheen helpt.

## Fase 2: zes leeftijdspagina's

**Welke.** De zes met de meeste vraag: 2 weken, 3 weken, 4 weken, 6 weken,
8 weken en 3 maanden.

**Techniek.** Eén route `app/voedingsschemas/[leeftijd]/page.tsx` met
`generateStaticParams` en `dynamicParams = false`, gevoed uit een databestand
`lib/leeftijd-paginas.ts`. Per leeftijd staat daar: slug, benamingen (weken én
maanden), gewichtsbereik met bron, gebruikelijk aantal voedingen, en de
handgeschreven tekstblokken met hun bronnen. De tabellen worden berekend.

**URL en koppen.** `/voedingsschemas/baby-3-weken/`. Title: "Baby 3 weken:
hoeveel ml flesvoeding en hoe vaak? | FlesvoedingCalculator.nl". H1: "Hoeveel
flesvoeding heeft een baby van 3 weken nodig?". Bij 4 weken, 8 weken en
3 maanden beide benamingen in de tekst ("4 weken, dus 1 maand").

**Opbouw van elke pagina**

1. Het antwoord in twee zinnen: het bereik per dag en per voeding voor de
   gewichten die bij die leeftijd horen.
2. Tabel per gewicht (stappen van 0,5 kg): ml per dag, ml per voeding bij het
   gebruikelijke aantal voedingen, aantal schepjes.
3. De calculator, met de leeftijd al ingevuld. Daarvoor krijgt
   [FlesCalculatorV2.tsx](components/calculator-v2/FlesCalculatorV2.tsx) een
   prop `initialAge`; de leeftijd staat nu vast op `'0-1'` (regel 187).
4. Voorbeeldschema met tijden.
5. Wat er op deze leeftijd speelt, met bron. Dit is het deel dat de pagina
   eigen maakt.
6. Links: vorige en volgende leeftijd, de schemapagina, passende artikelen uit
   de kennisbank.
7. Medische disclaimer en bronnenlijst.

**Bouwstappen**

- [ ] Gewichten en leeftijdsfeiten verzamelen uit de bronnen, met URL en datum.
- [ ] Databestand, route en de zes pagina's bouwen.
- [ ] `initialAge` toevoegen aan de calculator. Berekeningen vanaf deze
      pagina's krijgen `variant: 'leeftijd'` mee, zodat ze in de statistieken
      te onderscheiden zijn.
- [ ] URL's toevoegen aan `public/sitemap.xml` (die is statisch) en aan de
      admin-paginalijst.
- [ ] Vanaf de homepage linken: een regel "Per leeftijd" onder de calculator.
- [ ] Controle: de getallen in elke tabel zijn gelijk aan wat de calculator
      geeft bij dezelfde invoer. Schermcontrole op 375 px breed.

## Fase 3: uitbreiden, alleen als fase 2 werkt

Toets na zes weken. Staat minstens de helft van de zes pagina's in de top 10
voor zijn hoofdzoekopdracht, dan volgen 4 maanden, 5 weken, 7 weken, 6 maanden,
1 week en 5 maanden. Vanaf 6 maanden hangt de hoeveelheid af van hoeveel vaste
voeding een kind eet (de constanten hebben daar een eigen waarde voor: 100 ml
per kg na de start met vaste voeding). Die pagina's vragen meer uitleg en
komen daarom niet in de eerste ronde.

## Extra kans uit dezelfde data: tabel per gewicht

Niet gevraagd, wel goedkoop. Een vaste tabel "flesvoeding per gewicht" (3 tot
10 kg, per halve kilo) onder de calculator op de homepage geeft Google een
letterlijk antwoord op "baby 5 kg hoeveel voeding". De homepage draagt 85% van
het verkeer, dus alleen een toevoeging onder de tool, niets verplaatsen.
Keuze aan Jens.

## Wat we bewust niet doen

- Geen pagina voor elke week. Vijf en zeven weken komen in de overzichtstabel.
- Geen opvultekst om pagina's lang te maken.
- `voedingsritme-opbouwen` en `uitgebreide-flesvoeding-gids` niet samenvoegen
  met de schemapagina.
- De homepage niet ombouwen.

## Meetpunten

Wekelijks in Search Console, eerste oordeel zes weken na livegang:

| Wat | Nu | Doel na 6 tot 8 weken |
|---|---|---|
| Positie "flesvoeding schema" | 36 | top 15 |
| Positie "voedingsschema baby" | 63 | onder de 30 |
| Klikken schemapagina per 28 dagen | ±3 | 40 of meer |
| Positie "hoeveel flesvoeding baby 3 maanden" | 13 | top 5 |
| Klikken leeftijdspagina's per 28 dagen | 0 | 50 of meer |
| Berekeningen met `variant: 'leeftijd'` | 0 | zichtbaar in de admin |

De homepage staat voor de leeftijdsvragen nu op positie 10 tot 20. Neemt een
leeftijdspagina die plek over, dan is dat de bedoeling. Zakt de homepage op
zijn kerntermen ("flesvoeding berekenen", positie 7), dan de interne links
nalopen.

## Open vragen voor Jens

1. Tabel per gewicht op de homepage: wel of niet?
2. Wie leest de leeftijdsteksten na op inhoud voordat ze live gaan?
