# Plan: productblok bij de uitkomst, met A/B-test in de admin

Opgesteld 16 november 2026. Bronnen: de code op `main`, de funnel uit de admin
sinds ±7 juli en Search Console (94% van de Google-klikken is mobiel).

| Site | Berekeningen | Affiliate-kliks | Doorklik | bol / Amazon |
|---|---|---|---|---|
| flesvoedingcalculator | 4.046 | 20 | 0,5% | 15 / 5 |
| togwaarde | 533 | 4 | 0,8% | 0 / 4 |

## Stand na de cijfers per site (16-11)

Togwaarde heeft al wat dit plan voor flesvoedingcalculator bouwt: producten
direct onder de uitkomst, afgestemd op het advies. De doorklik daar is 0,8%
tegen 0,5%. Met vier kliks is dat verschil niet van toeval te onderscheiden
(de werkelijke waarde ligt ergens tussen ±0,3% en ±1,7%), maar het wijst niet
op een verviervoudiging. En alleen een verschil van die orde kan de A/B-test
bij dit verkeer aantonen (zie de tabel onder Statistiek).

Twee kanttekeningen bij dat cijfer:

- Bol-kliks worden op togwaarde mogelijk niet geteld, omdat bol-producten daar
  via het script van bol getoond worden. Zie het togwaarde-plan, deel 2.
- De kliks zijn van de hele site, dus ook van artikelen. Dat geldt voor beide
  sites.

**Advies over de volgorde**

1. Eerst op togwaarde de bol-producten als eigen kaart tonen. Dan klopt de
   meting daar en is het blok onder de uitkomst op togwaarde een proef die al
   loopt, zonder dat er iets nieuws gebouwd is.
2. Het productblok uit deel A bouwen kan los van de test: het is de logischere
   plek en het maakt producten per leeftijd beheerbaar.
3. Het testraamwerk uit deel B pas bouwen als de gecorrigeerde cijfers van
   togwaarde op een groot verschil wijzen, of als het verkeer een veelvoud is.
   Bouw je het nu, dan is de waarschijnlijkste uitslag na twaalf weken "geen
   aantoonbaar verschil".

Keuze aan Jens. Het plan hieronder blijft volledig, zodat beide routes kunnen.

## Doel

Het productblok op de homepage direct bij de uitkomst zetten, afgestemd op wat
iemand invult, en in de admin kunnen meten of dat beter werkt dan de huidige
opzet.

**Eerlijke verwachting.** Bij ±920 berekeningen per maand (4.046 in ±132
dagen) is 0,5% doorklik ongeveer 5 kliks per maand. Haalt het nieuwe blok 3%,
dan zijn dat er ±27: ongeveer één verkoop per maand, een paar euro. Op grond
van togwaarde is 1% waarschijnlijker dan 3%. De waarde zit in weten wat
werkt en in een opzet die meegroeit met het verkeer. Het testraamwerk is
daarna opnieuw te gebruiken, ook op togwaarde.

## Huidige situatie

- De homepage rendert `V2PageContent` met `simpleCalculator`. De producten
  zijn `PopularProductsWidget`, meegegeven als `rightExtra`
  ([V2PageContent.tsx](components/calculator-v2/V2PageContent.tsx), regel 23).
- Op mobiel komt `rightExtra` na de hele linkerkolom: invoer, toelichting,
  soorten flesvoeding, voorbeeldschema en FAQ
  ([FlesCalculatorV2.tsx](components/calculator-v2/FlesCalculatorV2.tsx), regel 482).
- Het blok toont altijd dezelfde vier producten: de snippets die aan de pagina
  `default` hangen ([app/api/popular-snippets/route.js](app/api/popular-snippets/route.js)).
- Gemeten wordt nu: één berekening per paginalading
  (`calculator_events`, met leeftijd, gewichtsklasse, aantal voedingen en
  `variant`) en elke affiliate-klik (`click_events`, met snippet en widget).
  Niet gemeten: of het blok in beeld is geweest.
- Instellingen staan in een bestand in de container
  ([lib/settings-service.ts](lib/settings-service.ts)), niet in de database.
  Ongeschikt voor een experiment: een deploy kan het wissen.
- De site is bannervrij. `ViewBeacon` gebruikt al een vlag in `sessionStorage`.

## Deel A: het productblok

**Plek**

- Mobiel: direct onder het invoerblok en de toelichting, boven de disclaimer.
  Het blok verschijnt pas als er een uitkomst is.
- Desktop: in de rechterkolom onder het uitkomstpaneel, waar nu de vaste
  producten staan.

**Inhoud volgt de invoer.** Vier leeftijdsbanden, elk met een eigen pagina-id
in het bestaande toewijzingssysteem. Jens kiest en ordent de producten in de
admin, tab Toewijzing, zoals bij artikelen.

| Invoer | Pagina-id | Kop (voorstel) | Producten (voorstel) |
|---|---|---|---|
| 0-1 maand | `calc-0-1` | Handig in de eerste weken | anti-koliek flessenset, sterilisator, flessenwarmer |
| 1-3 maanden | `calc-1-3` | Handig bij 1 tot 3 maanden | anti-koliek flessen, speenset, flessenwarmer |
| 3-6 maanden | `calc-3-6` | Handig bij 3 tot 6 maanden | doseerbakje, speenset, melkmachine |
| 6+ maanden | `calc-6plus` | Handig vanaf 6 maanden | koeltas voor onderweg, drinkbeker |
| Prematuur | geen | geen blok | |

De producten komen uit [affiliate-productplan.md](affiliate-productplan.md),
dat tot ±12 weken per fase uitwerkt. De rij voor 6+ is nieuw: de drinkbeker
staat nog niet in dat plan.

- Heeft een band nog geen eigen producten, dan toont de bestaande API vanzelf
  de standaardproducten. Het blok is dus nooit leeg.
- Maximaal drie producten. Eigen kaarten (foto, naam, prijs, logo van de
  winkel), geen bol-script: dat past bij het bannervrije besluit.
- Het label "Gesponsorde links" met link naar de disclaimer blijft.
- Geen startvoeding (nummer 1) in deze blokken: reclame voor
  zuigelingenvoeding is aan strenge regels gebonden. Opvolgmelk bij 6+ eerst
  nakijken in de regels en in de voorwaarden van bol.
- Bij een premature berekening geen producten. Dat is een kwetsbaar moment.

**Techniek**

- Nieuw component `components/calculator-v2/ResultProductBlock.tsx`. Het krijgt
  de invoer (leeftijdsband, of er een uitkomst is, prematuur) van de calculator
  via een render-prop.
- Haalt de producten op via de bestaande
  `/api/affiliates/page/[pageId]`. Ophalen bij het laden van de pagina en bij
  wisselen van leeftijd, zodat het blok tegelijk met de uitkomst verschijnt en
  niets verspringt.
- Klikken gaan naar `/api/track-click` met `widget: 'result_block'`.
- De vier pagina-id's toevoegen aan de paginalijst van de admin
  ([app/api/admin-pages](app/api/admin-pages)), categorie "Calculator".

## Deel B: A/B-testen in de admin

### Wat je in de admin kunt

Een nieuw tabblad Experimenten met per experiment: starten, pauzeren, de
verdeling instellen (standaard 50/50), de resultaten per variant bekijken en
stoppen met een winnaar. Na het stoppen krijgt 100% van de bezoekers de
winnaar, zonder nieuwe deploy.

**Afbakening.** Welke varianten bestaan staat in de code: een variant is een
stuk React. De admin stuurt en meet. Het is geen visuele editor.

### Het eerste experiment

`calc_result_block`, alleen op de homepage:

- **A, `control`**: zoals nu. Vaste producten onderaan.
- **B, `result_block`**: het nieuwe blok uit deel A. De vaste producten
  onderaan vervallen in deze variant.

Het experiment meet dus het nieuwe ontwerp als geheel (plek plus inhoud) tegen
het oude.

### Toewijzen zonder cookies

- Bij het laden haalt de calculator de lopende experimenten op via
  `GET /api/experiments/active` (openbaar, 60 seconden gecachet) en loot een
  variant volgens de verdeling.
- De uitkomst van de loting staat in `sessionStorage`, net als de vlag van
  `ViewBeacon`: binnen één bezoek blijft de variant gelijk. Geen cookie, geen
  id, niets dat een nieuw bezoek aan het vorige koppelt.
- Lukt het ophalen niet of loopt er niets: variant A.
- `?exp_arm=result_block` in de URL forceert een variant om te bekijken en zet
  het meten uit. Zo vervuilt eigen testen de cijfers niet.

### Meten

Per paginalading maakt de browser een willekeurig kenmerk `pv` aan dat alleen
in het geheugen staat en bij het sluiten van de pagina weg is. Het gaat mee
met de berekening, de vertoning en de klik van die ene paginalading. Zo is te
tellen hoeveel berekeningen tot minstens één klik leidden, zonder iemand te
volgen.

| Gebeurtenis | Waar | Wijziging |
|---|---|---|
| Berekening | `calculator_events.data` | sleutels `exp`, `arm`, `pv` toelaten in `sanitizeData` ([track-calculation](app/api/track-calculation/route.js)) |
| Klik | `click_events` | kolommen `exp`, `arm`, `placement`, `pv` (mogen leeg zijn) |
| Blok gezien | nieuwe tabel `impression_events` | `id, website, placement, exp, arm, pv, created_at` |
| Experiment | nieuwe tabel `experiments` | zie hieronder |

```sql
CREATE TABLE IF NOT EXISTS experiments (
  website    text NOT NULL,
  key        text NOT NULL,
  status     text NOT NULL DEFAULT 'draft',   -- draft | running | paused | finished
  arms       jsonb NOT NULL,                  -- [{"id":"control","weight":50},{"id":"result_block","weight":50}]
  winner     text,
  started_at timestamptz,
  ended_at   timestamptz,
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (website, key)
);
```

- Tabellen en kolommen aanmaken op de bestaande manier in
  [lib/db/ensure-events.js](lib/db/ensure-events.js), met `IF NOT EXISTS`.
  De database is gedeeld met togwaarde: alle nieuwe kolommen mogen leeg zijn,
  dus daar verandert niets.
- "Blok gezien" telt als het blok minstens een seconde voor de helft in beeld
  is, één keer per paginalading. Ook de vaste producten van variant A worden
  zo gemeten. Dat laat zien of het verschil door de plek komt.
- Nieuwe route `/api/track-impression`, met dezelfde begrenzing als de andere
  meetroutes ([lib/track-guard.js](lib/track-guard.js)).
- Bol-links krijgen per variant een eigen `subid` mee, zodat ook het
  bol-dashboard kliks en bestellingen per variant toont. De naam van die
  parameter eerst nakijken in het partnerdashboard.

### Statistiek en beslisregel

**Hoofdmaat:** het deel van de berekeningen met minstens één affiliate-klik in
dezelfde paginalading. Verkopen zijn geen maat: één per vier maanden is te
weinig om iets aan af te lezen.

**Wat is aantoonbaar bij dit verkeer?** Uitgaande van ±900 berekeningen per
maand op de homepage (de site als geheel doet er ±920), 50/50 verdeeld, en
0,5% als startpunt:

| Variant B haalt | Nodig per variant | Doorlooptijd |
|---|---|---|
| 3,0% (6 keer zo veel) | ±430 berekeningen | ±4 weken |
| 2,0% (4 keer) | ±860 | ±8 weken |
| 1,5% (3 keer) | ±1.550 | ±3,5 maand |
| 1,0% (2 keer) | ±4.700 | ±10 maanden |

Alleen een groot verschil is dus binnen redelijke tijd aan te tonen. Daarom
twee varianten tegelijk, nooit meer, en pas teksten of volgordes testen als
het verkeer een veelvoud is.

**Beslisregel, vooraf vastgelegd**

1. Geen oordeel voor er vier volle weken zijn verstreken en elke variant 430
   berekeningen heeft. De admin toont tot dan "nog te weinig data".
2. De admin rekent per variant het 90%-interval uit en de kans dat B beter is
   dan A.
3. Kans 95% of hoger: B wint. Kans 5% of lager: A blijft.
4. Na twaalf weken zonder uitslag: stoppen met "geen aantoonbaar verschil".
   Jens kiest dan zelf.

**Controle op de loting.** Wijkt het aantal berekeningen per variant sterk af
van de ingestelde verdeling, dan toont de admin een waarschuwing: de meting
klopt dan niet en de uitslag telt niet.

### Admin-scherm

Nieuw component `components/admin/ExperimentsPanel.tsx`, als extra tab in
[app/admin/dashboard/page.tsx](app/admin/dashboard/page.tsx), naast Statistieken.
Voorbeeld, met verzonnen getallen:

```
Productblok bij de uitkomst          loopt sinds 24-11 (dag 30)
Verdeling 50 / 50                    [Pauzeer]  [Stop en kies winnaar]

Variant            Berekeningen  Blok gezien  Met klik  Doorklik  90%-interval
A  huidig          448           71 (16%)     2         0,4%      0,1 - 1,2%
B  uitkomstblok    441           379 (86%)    13        2,9%      1,8 - 4,6%

Kans dat B beter is dan A: 99%
Voldoende data. B wint volgens de beslisregel.
```

Routes, beide achter de bestaande admin-login (`verifyAdminAndGetWebsite`):

- `GET /api/admin/experiments`: lijst, status en resultaten per variant.
- `PUT /api/admin/experiments`: starten, pauzeren, verdeling, stoppen met winnaar.

De lijst van bestaande experimenten en hun varianten staat in `lib/experiments.ts`.

## Deel C: bouwvolgorde

- [ ] **1. Database.** `experiments`, `impression_events` en de extra kolommen
      op `click_events`. Controle: togwaarde logt daarna nog gewoon kliks.
- [ ] **2. Meten.** `exp`, `arm` en `pv` door de drie meetroutes; nieuwe route
      voor vertoningen. Controle: een proefklik staat met variant in de database.
- [ ] **3. Loting.** `lib/experiments.ts` met de hook `useExperiment(key)` en
      de openbare route. Controle: zonder lopend experiment ziet iedereen A en
      verandert er niets aan de site.
- [ ] **4. Het blok.** `ResultProductBlock`, de render-prop in de calculator,
      de vier pagina-id's. Controle: via `?exp_arm=result_block` op 375 px en
      op desktop; niets verspringt als de uitkomst verschijnt; bij prematuur
      geen blok.
- [ ] **5. Admin.** `ExperimentsPanel` met resultaten, interval, kans en de
      waarschuwing bij een scheve loting.
- [ ] **6. Vullen.** Jens koppelt per leeftijdsband de producten in de admin.
- [ ] **7. Start.** Experiment op 50/50. Na een week: aantallen per variant
      naast elkaar leggen als eerste controle op de loting.
- [ ] **8. Oordeel** volgens de beslisregel. Daarna de verliezende code opruimen.

## Wat we bewust niet doen

- Geen extern testprogramma: dat zet cookies en kost geld.
- Geen drie of meer varianten tegelijk.
- Geen test op verkopen.
- Togwaarde niet in deze ronde. Het raamwerk is er wel op voorbereid: de
  tabellen hebben een kolom `website`.

## Open vragen voor Jens

1. Welke route: alleen het blok bouwen, of blok plus testraamwerk? Zie het
   advies bovenaan.
2. Kloppen de producten per leeftijdsband, en staan ze al als snippet in de admin?
3. Mag opvolgmelk in het blok voor 6+, of houden we het bij spullen?

Beantwoord op 16-11: de verdeling per site staat in de tabel bovenaan.
