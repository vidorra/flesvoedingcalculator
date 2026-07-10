# Technisch contentplan: meertalige content voor expansion

Hoe content per land georganiseerd, gelokaliseerd en onderhouden wordt.
Hoort bij `technisch-plan.md` (architectuur) en
`internationale-uitbreiding.md` (landkeuze). Kernprincipe: **lokaliseren
is herbronnen, niet vertalen** - zeker bij YMYL/baby-gezondheid.

---

## 1. Content-tiers: wat moet er per land bestaan?

| Tier | Wat | Omvang | Aanpak per nieuw land |
|---|---|---|---|
| **T0** | UI-strings: calculator-labels, knoppen, resultaatteksten, alerts, footer | ~200 strings | dictionary-bestand, professioneel vertalen + native check |
| **T1** | Juridisch/vertrouwen: medische disclaimer, affiliate-disclaimer, privacy, over-ons, contact | 5-6 pagina's | herschrijven op lokale wetgeving en richtlijn-instantie |
| **T2** | Kernartikelen die de calculator dragen | fles: 10, tog: 8 | **herbronnen** op lokale richtlijn (NHS/HSE/AAP), niet vertalen |
| **T3** | Long-tail kennisbank | fles: ~30, tog: ~15 | pas na tractie; per stuk beoordelen of het land-specifiek moet |

Launch-minimum per land = T0 + T1 + T2. T3 volgt op zoekvraag-data
(GSC-regexroutine per land, zelfde methode als vragen-content.md).

**T2-kernlijst flesvoeding** (uit bestaand NL-aanbod gekozen op
zoekintentie): hoeveel-ml-per-dag uitleg, voedingsschema per leeftijd,
fles bereiden stap-voor-stap, flessen steriliseren, opvolgmelk/stages,
baby weigert de fles, combivoeding, koopgids flessen, koopgids
sterilisatoren, warm weer & voeding.

**T2-kernlijst TOG**: wat is TOG, TOG-tabel per temperatuur, kleding
onder de slaapzak, zomer/heatwave-gids, winter-gids, oververhitting
herkennen, slaapzak-koopgids per TOG, veilig-slapen basics
(rug/bedje/geen dekens).

---

## 2. Waar leeft de content in de repo?

**T0 - dictionaries.** Nieuw: `content/{locale}/ui.json` (of ts).
Componenten gebruiken een minimale `t()`-helper via de SiteProvider
(geen zware i18n-lib nodig; keys zijn statisch en server-side bekend):

```
content/
  nl/ui.json        en-GB/ui.json        (later: de/ui.json ...)
```

Regel: **geen letterlijke strings meer in gedeelde componenten**
(FlesCalculatorV2, ReverseCalculator, TOGCalculatorV3, widgets,
Footer/Header). NL-strings verhuizen 1-op-1 naar `nl/ui.json`; dat is
meteen de refactor-checklist. Artikel-JSX blijft buiten de dictionary
(artikelen zijn per locale toch uniek).

**T1/T2/T3 - pagina's per locale.** Artikelen zijn nu JSX-pagina's; dat
blijft (styleguide/CLAUDE.md-regels gelden per pagina). Structuur volgt
de `_sites`-routing uit het technisch plan:

```
app/_sites/
  flesvoedingcalculator/          # bestaande NL-pagina's (verhuizen in fase)
    kennisbank/...
  fles-uk/
    guide/making-up-a-bottle/page.tsx
    ...
```

Plus een **content-registry** per site (`content/{siteKey}/registry.ts`)
met slug, titel, categorie en publicatiedatum van elke pagina. Die
registry voedt: de kennisbank-index, de host-aware sitemap, de
admin-pages-lijst (koppelbare affiliate-pagina's) en de
hreflang-pathMap. Eén nieuwe registry-entry = pagina overal bekend.

**Slugs zijn per taal** (Engelse slugs voor EN-sites: `/guide/...` i.p.v.
`/kennisbank/...`). De pathMap in de registry koppelt equivalente
pagina's over talen heen voor hreflang:

```ts
{ slug: 'guide/what-is-tog', hreflang: { 'togwaarde': 'kennisbank/wat-is-tog' } }
```

---

## 3. Lokalisatieregels (het herbron-protocol)

Per T2-artikel bij een nieuw land, in deze volgorde:

1. **Richtlijn-check eerst**: welke instantie is leidend en wat zegt die?
   | Land | Voeding | Veilig slapen |
   |---|---|---|
   | NL | Voedingscentrum, NCJ | VeiligheidNL |
   | UK/IE | NHS, First Steps Nutrition / HSE | Lullaby Trust |
   | DE | Netzwerk Gesund ins Leben | BfR |
   | US | AAP, CDC | AAP Safe Sleep |
   Wijkt de richtlijn af van het NL-artikel (bv. NHS 150-200 ml/kg,
   bereidingstemperatuur 70°C-advies verschilt per land), dan wint de
   lokale richtlijn; het artikel wordt daaromheen geschreven.
2. **Getallen en eenheden** uit de site-config (ml/oz, °C/°F, kg/lb);
   nooit hardcoded in artikeltekst; voorbeeldberekeningen lokaal
   ("a 10 lb baby needs about 25 oz a day").
3. **Producten en merken lokaal**: NL-merken (HEMA, Puckababy, Difrax)
   vervangen door lokaal verkrijgbare (UK: Tommee Tippee, MAM, John
   Lewis-assortiment). Affiliate-blokken verwijzen naar snippets met de
   juiste site-key; de admin scheidt dit al per website.
4. **Interne links** alleen naar pagina's die op die site bestaan
   (registry is de bron; een lint-script kan dode interne links per
   site vangen).
5. **Native review**: minimaal één moedertaal-lezer per artikel vóór
   publicatie (E-E-A-T; machinevertaling zonder redactie is het
   grootste Google-risico, zie onderzoeksdoc §8).
6. **Bronvermelding onderaan elk artikel** naar de lokale instantie;
   dat is zowel YMYL-hygiëne als linkbait-waardig.

---

## 4. Effect op bestaande formule-gebonden content

Content die getallen uit de calculator herhaalt moet uit dezelfde bron
putten als de calculator zelf, anders lopen site en artikelen uiteen
zodra een richtlijn-parameter wijzigt:

- Nieuw: `lib/guideline-text.ts` levert kant-en-klare zinnen/waarden
  ("150 ml per kg", "150-200 ml per kg") vanuit de site-config; T2-
  artikelen en hero-badges (bv. "150ml per kg lichaamsgewicht" op de
  homepage) gebruiken die helper i.p.v. losse strings.
- De trust-badges, FAQ-antwoorden met getallen en het
  voedingsschema-artikel zijn de bekende plekken; bij de
  dictionary-refactor (T0) meteen meepakken.
- TOG-inhoud is getalsmatig universeel; alleen temperatuurvoorbeelden
  renderen via `formatTemp()` zodat de VS-site 68°F toont waar NL 20°C
  toont.

---

## 5. Redactionele workflow per nieuw land

```
1. Site-config + domein live (technisch plan stap 1-2, 8)
2. T0: ui.json vertalen -> native check -> calculator klikbaar in taal
3. T1: juridische pagina's herschrijven (incl. affiliate-disclaimer
   met lokale prijs-uitleg en Amazon-marktplaats)
4. T2: 8-10 kernartikelen herbronnen volgens §3-protocol
   (redactie-volgorde: calculator-uitleg eerst, koopgidsen laatst)
5. Registry vullen -> sitemap/hreflang/admin-pages automatisch mee
6. Affiliate: 6-10 lokale producten in admin (site-key), tags/TOG
7. GSC-property + Umami-site + eerste indexatie-check
8. Na 4-6 weken: GSC-regexroutine starten (vragen-content-methode)
   en T3-backlog vullen op basis van echte impressies
```

Inschatting content-inspanning per land: T0 ~2 dagen, T1 ~1 dag,
T2 ~6-8 dagen (fles) of ~4-5 dagen (tog), plus native review.
TOG-EN is bewust de eerste: kleinste T2-set én de bronnen (NHS/Lullaby
Trust) zijn al Engels - daar is "herbronnen" bijna alleen redigeren.

---

## 6. Kwaliteitsbewaking meertalig

- **Lint-checks per site** (uitbreiding op `lint-kennisbank`):
  hardcoded getallen die in de guideline-helper horen, dode interne
  links t.o.v. de registry, ontbrekende hreflang-partners, verboden
  NL-strings in EN-pagina's.
- **Duplicaatbewaking**: nooit twee sites met dezelfde taal én dezelfde
  tekst (fles-nl vs fles-be delen content maar krijgen hreflang
  nl-NL/nl-BE en één canonical-strategie: .be canoniekt naar .nl tot er
  echt Vlaamse content is).
- **Meetlat per land** (zelfde als google-plan.md maar per property):
  indexdekking, impressies per T2-artikel, affiliate_click per site
  in /admin/stats (site-filter bestaat al).
- **Verwijder-drempel**: haalt een land na 6 maanden geen 500
  bezoekers/mnd organisch, dan bevriezen (geen nieuwe T3) en de les
  documenteren voordat een volgend land start.
