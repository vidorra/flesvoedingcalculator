# Google Plan — FlesvoedingCalculator.nl

**Doel:** meer organisch verkeer en betere inzichten via Google Search Console, GA4/GTM en technische SEO. Bouwt voort op [vragen-content.md](vragen-content.md) (50 vragen + regexes) en [content-audit.md](content-audit.md) (eerlijke claims = E-E-A-T-basis).

**Huidige infrastructuur (geverifieerd):** GTM `GTM-PPX8RJTF` · GA4 `G-3NZ90KFHQ6` · Microsoft Clarity · web-vitals → gtag · events: `calculator_usage`, `form_submission`, `link_click` · robots.txt + statische sitemap.xml · schema.org (SoftwareApplication, Organization, FAQ op home) · 52+ kennisbank-artikelen · /v2-/v4 noindex.

---

## 1. Google Search Console — inzicht-motor

### Eenmalig (deze week)
- [ ] Controleer dat het property-type **Domein** is (dekt www/non-www/http varianten).
- [ ] Sitemap opnieuw indienen na elke content-release (Indexering → Sitemaps).
- [ ] **Dekking-check:** Pagina's-rapport → controleer dat /v2, /v3, /v4 als "Uitgesloten door noindex" staan (bewust) en dat alle 52+ kennisbank-URL's geïndexeerd zijn. Onverwachte uitsluitingen = actie.
- [ ] Koppel GSC aan GA4 (GA4 Beheer → Search Console-koppeling) zodat query-data in GA4-rapporten zichtbaar wordt.

### Maandelijkse regex-analyse (de kern)
Draai de 8 regexes uit [vragen-content.md](vragen-content.md) in GSC → Prestaties → Zoekopdracht → Aangepast (regex). Per thema noteren: vertoningen, kliks, CTR, gemiddelde positie.

| Regex-thema | Waar we op letten |
|---|---|
| 1. Rekenvragen | Ons kernverkeer: positie <3 houden op "hoeveel ml flesvoeding" |
| 2. Schepjes/bereiding | CTR van /schepjes-calculator |
| 3. Houdbaarheid/hygiëne | Grootste artikelcluster: welke artikelen stagneren |
| 4. Soorten/merken | Na publicatie merk-wissel-artikel: ranking opbouw volgen |
| 5. Combivoeding | **Nulmeting nu** (artikel is net live): groei per maand volgen |
| 6. Situaties | Seizoenspiek warm weer (juni-aug) benutten |
| 7. Problemen | Vaak hoge intentie: CTR-optimalisatie loont hier het meest |
| 8. Master | Totaalbeeld flesvoeding-markt |

**Beslisregels:**
- Vertoningen hoog + CTR laag (<2%) + positie 4-10 → **titel/meta herschrijven** (vraag letterlijk in de title, jaartal toevoegen).
- Positie 11-20 ("pagina 2") → **content verdiepen + interne links** vanaf sterke pagina's.
- Vertoningen op vragen zonder eigen pagina → **nieuw artikel** (voed de lijst in vragen-content.md).
- Kliks zonder passende landingspagina (verkeerde pagina rankt) → interne link + anchor aanpassen.

---

## 2. GA4 / GTM — meetplan

### Gaten dichten (prio)
- [ ] **`calculator_usage` vuurt niet op /v2-/v4** (live berekening zonder event). Actie: debounced event bij eerste geldige berekening per sessie + parameters `variant` (v2/v3/v4), `is_premature`, `is_combi`. Anders meten we de nieuwe UX blind.
- [ ] **Affiliate-kliks als GA4-event:** we hebben server-side click-stats (track-click API), maar geen `affiliate_click`-event in GA4 → geen koppeling klik ↔ bron/pagina/apparaat. Toevoegen in PopularProductsWidget/AffiliateProductWidget.
- [ ] **WarmWeerAlert-vertoning** als event (`warm_weer_alert_shown`, param temp) → meet of de alert kliks naar het artikel oplevert.

### Key events (conversies) definiëren in GA4
1. `calculator_usage` (kernconversie)
2. `affiliate_click` (omzetproxy)
3. `form_submission` (contact)

### Rapport-routine (maandelijks, 15 min)
- Betrokkenheid → Pagina's: top-10 kennisbank op engagement; artikelen <30 sec = herschrijf-kandidaat.
- Acquisitie → Organic Search per landingspagina, naast de GSC-regexdata leggen.
- Clarity: 2-3 heatmaps/recordings van de calculator bekijken (waar haken mensen af, wordt de combi-optie gevonden?).
- Verhouding v2/v3/v4 `calculator_usage` per variant → data voor de keuze welke variant de homepage wordt.

---

## 3. Technische SEO

- [ ] **Sitemap automatiseren:** public/sitemap.xml is handmatig (elke vergeten update = trager geïndexeerd artikel). Vervang door een build-time generator over de app-routes (lastmod uit git). Tot die tijd: sitemap-update verplicht onderdeel van elke artikel-PR.
- [ ] **Structured data verbreden:**
  - `FAQPage`-schema op kennisbank-artikelen met vraagsecties (warm-weer, combivoeding lenen zich direct).
  - `HowTo`-schema op fles-bereiden-stap-voor-stap en flessen-steriliseren.
  - `BreadcrumbList` op alle kennisbank-artikelen (breadcrumb staat al in de UI).
- [ ] **Core Web Vitals bewaken:** GSC → Ervaring → Core Web Vitals maandelijks. Bekende risico's: AdSense-blokken zonder gereserveerde hoogte (CLS) → `min-height` op ad-containers; hero-afbeeldingen /v2-v4 hebben al `sizes` (goed).
- [ ] **Interne linking:** elk nieuw artikel krijgt ≥3 inkomende links vanaf bestaande relevante artikelen (niet alleen uitgaand). Combivoeding-artikel: links toevoegen vanaf overstappen-van-borst-naar-fles, flesvoeding-vs-borstvoeding en de FAQ.
- [ ] **Titels met jaartal actueel houden** (2026-titels in 2027 bijwerken; geldt ook voor terugroepacties-artikel).
- [ ] **Experimenten netjes:** v2-v4 blijven noindex tot een winnaar de homepage wordt; daarna 301 van de v-route of verwijderen, nooit twee geïndexeerde calculators.

## 4. E-E-A-T (vertrouwen)

Basis is gelegd door de facts-audit (fake credentials weg, bronnen kloppen). Verder uitbouwen:
- [ ] Zichtbare "Laatst bijgewerkt"-datum op artikelen, alléén als er echt een inhoudelijke update was.
- [ ] Uitgaande bronlinks naar Voedingscentrum/RIVM/NCJ in artikelen die ze citeren (warm-weer doet dit al; combivoeding-bronnen kunnen linkjes krijgen).
- [ ] Over-ons uitbreiden met werkwijze: "hoe wij bronnen kiezen en controleren" (verwijs naar de openbare richtlijnen). Geen credentials claimen die we niet hebben.
- [ ] Terugroepacties-artikel actueel houden: maandelijkse NVWA-check, datum bijwerken — actualiteit is hier de rankingfactor.

## 5. Content-cadans (koppeling vragen-content.md)

| Maand | Actie |
|---|---|
| Jul 2026 | ✅ Combivoeding (artikel + calculatoroptie) · GSC-nulmeting regex 5 |
| Aug 2026 | Artikel: overstappen-ander-merk · kleine uitbreidingen (vaatwasser, nacht-voorbereiding) |
| Sep 2026 | Artikel: flesvoeding-kinderopvang (seizoen: werkhervatting) · FAQPage-schema uitrol |
| Okt 2026 | Artikel: overvoeden/paced-feeding · sitemap-generator bouwen |
| Nov 2026 | Oppas-spiekbrief (printbaar) · interne-link-audit |
| Doorlopend | Maandelijkse regex-rapportage · NVWA-recallcheck · CWV-check |

## 6. KPI's (maandelijks vastleggen)

| KPI | Bron | Nu (nulmeting invullen) | Doel +6 mnd |
|---|---|---|---|
| Organische kliks/mnd | GSC | … | +50% |
| Vertoningen regex 5 (combivoeding) | GSC | ~0 | top-10 positie |
| CTR kernquery's (regex 1) | GSC | … | >5% |
| `calculator_usage`/mnd | GA4 | … | +30% |
| `affiliate_click`/mnd | GA4 | (nog geen event) | meetbaar + baseline |
| Geïndexeerde pagina's | GSC | … | 100% van bedoelde |
| CWV "goed" URL's | GSC | … | 100% |

## 7. Togwaarde repliceren

Zelfde speelboek, kleinere schaal: eigen vragenlijst + regexes (TOG-waarden, slaapzak, kamertemperatuur, wiegendood), GSC-koppeling, `calculator_usage`-event op de TOG-calculator, FAQPage-schema. Aparte opzet in de togwaarde-repo wanneer dit plan loopt.

---

*Aangemaakt juli 2026. Maandelijkse routine: regexes draaien → beslisregels toepassen → KPI-tabel bijwerken → één content-actie uit de cadans opleveren.*
