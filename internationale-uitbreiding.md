# Internationale uitbreiding: FlesvoedingCalculator & TOGWaarde

Onderzoek (juli 2026) naar: wat kunnen we verdienen, hoeveel verkeer is
realistisch, welke landen zijn interessant, hoe doen we het technisch met
één codebase, en is het het waard. Dekt beide concepten.

---

## 1. Samenvatting (het eerlijke antwoord eerst)

- **Is het het waard?** Ja, maar niet nu meteen en niet overal tegelijk.
  De marginale kosten zijn laag (codebase bestaat, server kan het aan,
  domein kost ~€12/jaar), maar de marginale ínspanning niet: elke taal is
  een levende site met eigen medische richtlijnen, eigen content-onderhoud
  en eigen affiliate-programma's. Twee goede sites verslaan zes matige.
- **Beste eerste internationale stap: TOGWaarde naar het Engels (VK).**
  Daar is een écht gat: TOG is een Brits begrip, maar er bestaat geen
  onafhankelijke interactieve TOG-calculator; alleen statische tabellen op
  merkenblogs (ergoPouch, Love to Dream, HALO, Kyte). Eén concept, geen
  richtlijn-vertaalproblemen (NHS/Lullaby Trust is al onze bron).
- **Voor flesvoeding: Ierland/VK en Frankrijk zijn de flesvoedings-
  markten van Europa** (laagste borstvoedingscijfers ter wereld onder
  rijke landen). Duitsland is de grootste absolute markt maar heeft de
  sterkste concurrentie (HiPP, BabyOne, OmniCalculator).
- **Verdienverwachting kort:** met affiliate alleen is dit een
  long-tail-spel. Op het huidige verkeer praat je over enkele euro's per
  maand; bij 10.000 bezoekers/maand over tientallen euro's; interessant
  wordt het pas bij 50.000+ bezoekers/maand over meerdere sites samen.
  De uitbreidingsstrategie is dus vooral een verkeer-vermenigvuldiger
  tegen lage kosten, geen snelle omzetknop.

---

## 2. Waar we nu staan (nulmeting)

- **flesvoedingcalculator.nl**: ~1.300 bezoekers/maand (incl. bots; reëel
  vermoedelijk 800-1.000), 1 jaar oud. Redesign + SEO-verbeteringen net
  live (canonicals, sitemap, vraag-vorm titels, kruislinks, nieuwe
  artikelen), affiliate-advertenties sinds vandaag.
- **togwaarde.nl**: net gelanceerd concept (reverse calculator als
  homepage), kennisbank opgeschoond en uitgebreid, eigen GA-stream, nog
  nauwelijks historie in Google.
- Meetinfra is nu op orde: Umami (100% dekking), affiliate_click tracking
  in /admin/stats, dagelijkse prijssync. We kunnen effect dus echt meten.

**Belangrijk voor de timing:** het SEO-effect van de redesign is pas na
2-3 maanden zichtbaar (Google moet hercrawlen en herwaarderen). Beslis
over uitbreiding op de cijfers van oktober 2026, niet op die van nu.

---

## 3. Wat kunnen we verdienen? (affiliate-rekensommen)

De keten: bezoeker -> klik op productkaart -> aankoop bij bol/Amazon ->
commissie. Realistische kentallen voor deze niche:

| Kental | Range | Toelichting |
|---|---|---|
| Klikratio op productkaart | 2-5% van bezoekers | hoger op koopgerichte pagina's (koopgids, producten) |
| Conversie bij de winkel | 2-5% | bol.com converteert in NL goed; cookie-window telt |
| Commissie bol.com (baby/kind) | ~4-6% | partnerprogramma, varieert per categorie |
| Commissie Amazon (baby) | ~3% | VS/VK/DE vergelijkbaar; lager dan bol |
| Gemiddelde orderwaarde | €25-60 | slaapzak €25-40, starterset/sterilisator €30-80 |

**Scenario's per site** (orde van grootte, geen beloftes):

| Bezoekers/mnd | Kliks (3,5%) | Orders (3%) | Omzet/mnd (AOV €35, 5%) |
|---|---|---|---|
| 1.000 (nu) | 35 | ~1 | **€2-5** |
| 5.000 | 175 | 5 | **€9-15** |
| 10.000 | 350 | 10-12 | **€18-35** |
| 50.000 | 1.750 | 50-60 | **€90-180** |

Conclusies daaruit:
1. **Per site is dit zakgeld tot serieus zakcentje**, geen inkomen. Het
   model wordt interessant door optelling: meerdere sites x meerdere
   landen x nul marginale hostingkosten.
2. **De hefboom zit in koopintentie-pagina's**, niet in de calculator
   zelf: koopgidsen, vergelijkingen en "beste X"-artikelen halen 5-10x de
   klikratio van een informatiepagina. De contentplannen (koopgids,
   merkenvergelijking, per-TOG-aanbevelingen) zijn dus belangrijker voor
   omzet dan extra calculatorverkeer.
3. **Meet vanaf nu affiliate_click per pagina** (staat sinds vandaag in
   /admin/stats): na 4-6 weken weten we de échte klikratio en kunnen we
   deze tabel vervangen door eigen cijfers.

---

## 4. Togwaarde vs flesvoedingcalculator: verkeersverwachting

**Verwachting: togwaarde blijft in NL kleiner dan flesvoedingcalculator,
maar met betere koopintentie per bezoeker.**

Waarom kleiner in NL:
- "Flesvoeding" is een dagelijkse behoefte met veel zoekvragen (hoeveel
  ml, schema, per leeftijd, overstappen, opvolgmelk...). "TOG" is een
  productterm die veel Nederlandse ouders niet kennen; ze zoeken eerder
  "wat moet baby aan bij 20 graden" dan "TOG calculator".
- Flesvoeding heeft een jaar SEO-historie; togwaarde begint op nul.
- Realistische verhouding op termijn in NL: togwaarde 30-60% van het
  flesvoeding-verkeer.

Waarom toch waardevol:
- **Koopintentie**: elke TOG-vraag hangt direct aan een product
  (slaapzak). De affiliate-klikratio per bezoeker zal hoger liggen.
- **Seizoenspieken**: hittegolven en de eerste koude week zijn
  voorspelbare verkeersexplosies (zie het persmoment in google-plan.md).
- **Internationaal is de verhouding omgekeerd**: TOG-EN is een gat in de
  markt, flesvoeding-EN is een gevecht (zie hieronder).

---

## 5. Flesvoeding: welke landen geven relatief veel flesvoeding?

Kern: hoe lager het borstvoedingscijfer, hoe groter de flesvoedingsmarkt.
De cijfers (exclusieve borstvoeding op 6 maanden, diverse bronnen):

| Land | Excl. borstvoeding 6 mnd | Flesvoedingsmarkt | Geboortes/jr | Opmerking |
|---|---|---|---|---|
| **VK** | **~1%** (laagste ter wereld) | Zeer groot | ~600k | NHS-richtlijn ~150-200 ml/kg: sluit aan op onze formule |
| **Ierland** | ~15%, slechts 37% start borstvoeding | Zeer groot (relatief) | ~55k | Engels; meesurft op VK-content |
| **Frankrijk** | Laag (top-3 laagste rijke landen) | Groot | ~680k | Eigen taal + eigen richtlijnen (Appert-regel) |
| **VS** | Laag (top-3 laagste rijke landen) | Enorm | ~3,6M | oz/lb-eenheden, juridische cultuur, zware concurrentie |
| **Duitsland** | Middelmatig (hoger opgeleid ~50% op 4 mnd) | Groot (absoluut) | ~700k | Richtlijn "1/6 lichaamsgewicht"; sterke concurrentie (HiPP, BabyOne) |
| **België (VL)** | Vergelijkbaar met NL | Middel | ~120k | **Zelfde taal, bol.com werkt er al: quasi-gratis uitbreiding** |
| Nederland (nu) | ~39% (hoog) | Middel | ~170k | Ironisch: onze thuismarkt geeft relatief wéinig flesvoeding |

**Duiding:**
- Nederland is qua flesvoedingspenetratie eigenlijk een van de mindere
  markten; het concept is dus elders per definitie relevanter.
- **Ierland + VK** zijn samen de meest flesvoeding-intensieve
  Engelstalige regio met één taalversie te bedienen.
- **Concurrentie in het Engels bestaat wel** (omnicalculator.com,
  milkcalculator.org/.com, mdapp.co, fedisbest.org) maar het zijn kale
  rekentools zonder kennisbank/lokale richtlijn-diepgang; met de
  NL-aanpak (calculator + 40 artikelen + NHS-bronnen) is er ruimte.
- **Duitsland** is qua volume aantrekkelijk maar HiPP en grote portals
  bezetten de zoekresultaten; alleen instappen met een duidelijk betere
  tool en Duitstalige medische review.

### Let op: richtlijnen verschillen echt per land
Dit is de belangrijkste inhoudelijke valkuil (YMYL!):
- NL (Voedingscentrum): **150 ml/kg/dag**
- VK (NHS): **150-200 ml/kg/dag**
- DE: vuistregel **1/6 van lichaamsgewicht** (≈167 ml/kg)
- VS (AAP): **2,5 oz per pound** (≈163 ml/kg), oz/lb-weergave
Elke landversie moet dus de lokale richtlijn + lokale bronvermelding
gebruiken, niet een vertaling van de Nederlandse tekst. Dit is per land
een dagdeel werk in de calculator-constanten plus herbronnen van de
kernartikelen.

---

## 6. TOGWaarde: waar is de markt?

| Land | TOG-bekendheid | Gat in de markt | Opmerking |
|---|---|---|---|
| **VK** | Thuisland van TOG; Lullaby Trust-adviezen | **Groot: geen onafhankelijke interactieve TOG-calculator gevonden**, alleen statische merkentabellen | Onze bronnen (NHS/Lullaby Trust) zijn al Brits |
| **Australië/NZ** | Groot (ergoPouch, Love to Dream zijn Australisch) | Zelfde gat | Seizoenen omgekeerd: onze seizoenslogica moet per domein om |
| **VS** | Groeiend (HALO, Kyte Baby populariseren TOG) | Zelfde gat + minst bezet | Fahrenheit-weergave nodig |
| Nederland | Klein maar onbezet (daarom begonnen we) | - | - |

**Dit is de sterkste internationale kans van de twee concepten**: één
Engelse versie (bijv. togcalculator.com of babytog.co.uk) bedient VK,
Ierland, VS, AU en NZ tegelijk, de concurrentie bestaat uit statische
tabellen van merken (die juist niet onafhankelijk zijn), en de
temperatuur-naar-advies interactie is precies wat wij al gebouwd hebben.
Localisatie is beperkt: °F-toggle voor de VS, omgekeerde seizoenen voor
AU/NZ, Amazon-affiliate per land.

---

## 7. Technisch: één codebase, meerdere domeinen

Het multi-tenant fundament bestaat al (de `website`-kolom in de gedeelde
database, hostname-detectie in de affiliate-API). Twee opties:

**Optie A - één Next.js-app per concept, hostname-routing (aanbevolen)**
- Eén deployment serveert meerdere domeinen (flesvoedingcalculator.nl,
  bottlefeedingcalculator.co.uk, ...) en kiest per hostname een
  "site-config": taal, richtlijn-constanten (ml/kg, oz/lb), teksten,
  affiliate-IDs, canonical-domein.
- Voordelen: één deploy, één server-app (belangrijk: de schijf/RAM-les
  van deze week), gedeelde bugfixes.
- Nadelen: alle vertalingen in één repo; een fout raakt alle landen
  tegelijk; build wordt groter.

**Optie B - aparte CapRover-app per land (zelfde repo, env-config)**
- Zelfde codebase, maar per land een eigen app met `SITE_LOCALE`-env.
- Voordelen: isolatie, per land uitrollen/terugrollen.
- Nadelen: elke app kost ~1-1,5 GB image + RAM op de server; bij 4-5
  landen loopt de 40GB/4GB-server wéér vol. Dan is de cax21-upgrade of
  een tweede server alsnog nodig.

**Aanbeveling: Optie A.** Bouw een `lib/site-config.ts` met per domein:
`{ locale, guideline: {mlPerKg|ozPerLb}, units, currency, affiliate:
{amazonTag, bolActive}, sources: [...], brandName }`. De content-laag
(artikelen) wordt per locale een map (`content/nl/`, `content/en/`).

**SEO-onmisbaar bij meerdere landen:**
- **hreflang-tags** tussen de taalversies (anders concurreren ze met
  elkaar of worden ze als duplicaat gezien)
- Per domein een eigen GSC-property, sitemap en Organization-schema
- **Géén machinevertaling zonder redactie**: Google's "scaled content"
  en doorway-beleid raakt precies dit soort dunne landkopieën. Elke
  landversie heeft lokale richtlijnen, lokale bronnen en een lokale
  spelling-check nodig (E-E-A-T, zeker bij YMYL/baby-gezondheid).

**Affiliate per land (regel-werk, geen code-werk):**
- bol.com = alleen NL/BE. Daarbuiten: Amazon Associates per land
  (aparte aanmelding per marktplaats; let op de 180-dagen/3-verkopen
  regel: zonder verkopen wordt je account gesloten en moet je opnieuw)
- Alternatieven via Awin/TradeDoubler: babymarkt.de, Kidsroom (DE),
  JoJo Maman Bébé, John Lewis (VK)

**Kosten per extra land:** domein ~€12/jr + vertaling/lokalisatie
(20-40 uur eerste keer, daarna onderhoud) + affiliate-aanmeldingen.
Hosting: ~€0 bij Optie A.

---

## 8. Risico's

1. **YMYL/medisch**: verkeerde voedingsadviezen in een taal die we
   minder beheersen is het grootste risico. Mitigatie: per land alleen
   de officiële richtlijn overnemen, bronnen prominent, medische
   disclaimer per land.
2. **Dunne-content-penalty**: 5 landen tegelijk met machinevertaling =
   recept voor een Google-actie. Mitigatie: één land per keer, volwaardig.
3. **Amazon-afhankelijkheid** buiten NL: 3%-commissie en accountregels
   maken de business case dunner dan met bol.
4. **Onderhoud x N**: elke prijssync, elk artikel, elke bugfix telt per
   land. De admin is er klaar voor (multi-website), maar de menskracht
   moet er zijn.
5. **De thuisbasis is nog niet bewezen**: 1.300 bezoekers/maand na een
   jaar is bescheiden. Eerst aantonen dat de nieuwe SEO-aanpak de curve
   buigt; anders exporteren we een model dat nog niet werkt.

---

## 9. Aanbevolen fasering (met go/no-go criteria)

**Fase 0 - nu t/m oktober 2026: bewijzen op NL**
- Redesign/SEO laten landen; maandelijkse GSC-regexroutine draaien
- KPI's: flesvoeding naar 2.500+ echte bezoekers/mnd; togwaarde naar
  500+; affiliate_click-ratio meten; eerste bol-commissies binnen
- Go/no-go: groeit fles met >50% en levert affiliate aantoonbaar kliks
  op, dan door naar fase 1

**Fase 1 - Q4 2026: TOGWaarde Engels (VK-first)**
- Domein (bijv. togcalculator.com), site-config laag bouwen, °C blijft,
  Lullaby Trust/NHS als bron (hebben we al), Amazon UK affiliate
- Kleinste lokalisatie-inspanning, grootste marktgat
- KPI na 4 mnd: 1.000 bezoekers/mnd organisch

**Fase 2 - Q1 2027: Flesvoeding Engels (VK+IE)**
- bottlefeeding-calculator variant met NHS-richtlijn (150-200 ml/kg),
  10 kernartikelen geherbront (niet 40 vertaald)
- Meesurfen op de site-config-laag uit fase 1

**Fase 3 - beoordelen: FR of DE flesvoeding, US/AU voor TOG**
- Alleen als fase 1-2 de KPI's halen; FR vóór DE (minder concurrentie,
  grotere flesvoedingscultuur), US-TOG met °F-toggle

**Quick win los van alles: flesvoedingcalculator.be** overwegen
(redirect of alias van .nl): zelfde taal, bol.com werkt, alleen
hreflang + lokale vermeldingen. Kost bijna niets.

---

## 10. Eindoordeel

Het is het waard **als verkeer-vermenigvuldiger op lange termijn**, niet
als omzetsprong op korte termijn. De volgorde die het meeste oplevert per
uur werk: (1) NL laten bewijzen, (2) TOG naar het Engels (uniek gat,
minimale lokalisatie), (3) flesvoeding naar VK/Ierland (grootste
flesvoedingsmarkt van Europa, richtlijn lijkt op de onze), en pas daarna
FR/DE/US. Eén land per kwartaal, volwaardig gelokaliseerd, is sneller
rijk(er) dan vijf landen in één maand half.

---

## Bronnen

- [Breastfeeding Rates and Programs in Europe (JPGN, 2019)](https://onlinelibrary.wiley.com/doi/10.1097/MPG.0000000000002234)
- [Comparison of national breast-feeding surveys by maternal education in Europe (2006-2016)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6474715/)
- [UNICEF Ireland: Ireland's low breastfeeding rates](https://www.unicef.ie/story/ireland-breastfeeding-worst-world/)
- [Irish Times: Why does Ireland have the lowest breastfeeding rate in Europe?](https://www.irishtimes.com/life-and-style/health-family/parenting/why-does-ireland-have-the-lowest-breastfeeding-rate-in-europe-1.3949361)
- [World Population Review: Breastfeeding Rates by Country 2026](https://worldpopulationreview.com/country-rankings/breastfeeding-rates-by-country)
- [WCRF: Breastfeeding across the world](https://www.wcrf.org/about-us/news-and-blogs/breastfeeding-across-the-world-in-2022/)
- [Statista: World split on breast vs bottle feeding](https://www.statista.com/chart/32791/infants-aged-0-5-months-exclusively-brestfed/)
- [HealthyChildren.org (AAP): Amount and schedule of formula feedings](https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/amount-and-schedule-of-formula-feedings.aspx)
- [ergoPouch AU: TOG rating & what to wear](https://www.ergopouch.com.au/pages/what-to-wear-guide)
- [Love to Dream US: What is a TOG rating](https://lovetodream.com/blogs/baby-sleep/what-is-a-tog-rating)
- [HALO Sleep: TOG chart](https://www.halosleep.com/blogs/halo/tog-chart)
- [The Sleep Store AU: choosing sleeping bag weight](https://thesleepstore.com.au/content/faq/tog-rating)
- [Slumbersac UK: understanding TOG ratings](https://www.slumbersac.co.uk/pages/tog)
- [OmniCalculator: baby formula calculator (EN/DE concurrent)](https://www.omnicalculator.com/health/baby-formula)
- [HiPP DE: Trinkmenge berechnen (DE concurrent)](https://www.hipp.de/milchnahrung/ratgeber/stillen/trinkmenge-berechnen/)
- [milkcalculator.org (EN concurrent)](https://www.milkcalculator.org/)
- [Amazon Associates commission rates per categorie](https://affiliate-program.amazon.com/help/node/topic/GRXPHT8U84RAYDXZ)
- [Geniuslink: Amazon commission rates historical guide](https://geniuslink.com/blog/amazon-affiliate-commission-rates-historical-guide/)
