# Technisch plan: internationale multi-domein architectuur

Hoe FlesvoedingCalculator en TOGWaarde technisch internationaal werken:
één codebase per concept, meerdere domeinen, per land eigen formules,
content en affiliate. Verwijst naar echte bestanden in beide repos.
Zie `internationale-uitbreiding.md` voor het waarom en de landkeuze.

---

## 1. Architectuurkeuze

**Eén Next.js-app per concept serveert alle domeinen van dat concept.**
CapRover kan per app meerdere custom domains + SSL koppelen; de app
bepaalt per request op hostname welke "site" hij is.

```
flesvoedingcalculator-app  ->  flesvoedingcalculator.nl
                               flesvoedingcalculator.be
                               bottlefeedingcalculator.co.uk   (fase 2)
togwaarde-app              ->  togwaarde.nl
                               togcalculator.com               (fase 1)
```

Waarom niet één app per land (aparte CapRover-apps): elke app kost
~1-1,5 GB image + RAM; bij 4-5 landen loopt de huidige server weer vast
(les van juli 2026). Waarom niet één mega-app voor beide concepten:
de concepten delen nauwelijks UI en hebben elk hun eigen groeipad.

Het multi-tenant fundament bestaat al en wordt hergebruikt:
- gedeelde Postgres met `website`-kolom op snippets/pages/page_snippets/
  click_events/calculator_events
- hostname-detectie in `app/api/affiliates/page/[pageId]/route.js`
  (`detectWebsiteFromHostname`) en `app/api/popular-snippets/route.js`
- admin met website-switcher (`/api/admin/switch-website`)

---

## 2. De site-registry (kern van alles)

Nieuw bestand per repo: `lib/sites.ts`. Eén bron van waarheid die elke
laag (metadata, formules, affiliate, analytics, sitemap) leest.

```ts
// lib/sites.ts (flesvoedingcalculator-repo, togwaarde analoog)
export type SiteKey = 'flesvoedingcalculator' | 'fles-be' | 'fles-uk'

export interface SiteConfig {
  key: SiteKey                 // = waarde van de `website`-kolom in de DB
  domain: string               // canonical host
  locale: 'nl' | 'nl-BE' | 'en-GB'
  brandName: string
  hreflangSiblings: SiteKey[]  // voor <link rel="alternate">

  guideline: FeedingGuideline  // zie §3
  units: { volume: 'ml' | 'oz'; weight: 'kg' | 'lb' }

  affiliate: {
    bol: boolean               // alleen nl/nl-BE
    amazonTag?: string         // per marktplaats eigen tag
    amazonDomain?: 'amazon.nl' | 'amazon.co.uk' | 'amazon.de'
  }

  analytics: { umamiWebsiteId: string }
  sources: { name: string; url: string }[]  // Voedingscentrum / NHS / HSE
}

export const SITES: Record<string, SiteConfig> = { /* per domein */ }

export function siteFromHost(host: string): SiteConfig {
  const domain = host.split(':')[0].toLowerCase().replace(/^www\./, '')
  return SITES[domain] ?? SITES['flesvoedingcalculator.nl'] // default
}
```

Alle bestaande hardcoded plekken migreren naar deze registry:
- `detectWebsiteFromHostname` (2 routes) -> `siteFromHost(...).key`
- `VALID_WEBSITES` (switch-website route, admin-snippets POST) ->
  `Object.values(SITES).map(s => s.key)`
- `SITE_LABELS` in `/admin/stats` en de dashboard-tabs -> uit registry
- `components/UmamiScript` -> website-ID op `window.location.hostname`
  matchen (client-side map uit dezelfde registry, geëxporteerd als
  plain object zonder secrets)

---

## 3. Effect op de formules

### 3a. Flesvoeding: richtlijn wordt een parameter

Nu: `lib/feeding-constants.ts` -> `ML_PER_KG_STANDARD: 150` (hard NL).
`lib/feeding-calc.ts` (`computeFeeding`) leest die constante.

Wordt: `computeFeeding(input, guideline)` met per land:

```ts
export type FeedingGuideline =
  | { type: 'ml_per_kg'; value: 150 }                    // NL Voedingscentrum
  | { type: 'ml_per_kg_range'; min: 150; max: 200 }      // UK NHS
  | { type: 'fraction_of_weight'; divisor: 6 }           // DE (1/6 ≈ 167 ml/kg)
  | { type: 'oz_per_lb'; value: 2.5 }                    // US AAP (≈163 ml/kg)
```

Consequenties in de code:
- `computeFeeding` rekent intern altijd in ml/kg; de guideline mapt
  ernaartoe. Bij een range (NHS) tonen we een bandbreedte in het
  resultaatpaneel ("540-720 ml per dag") i.p.v. één getal; de
  UI-componenten (`CalculatorResults`, `FlesCalculatorV2` ResultBody)
  krijgen een optioneel `rangeMax`-veld.
- **Eenheden**: bij `units.volume === 'oz'` converteert een display-laag
  (`lib/format-units.ts`, nieuw) ml->fl oz en kg->lb op álle plekken
  waar getallen getoond worden (resultaat, schema, schepjes). Intern
  blijft alles metrisch; alleen weergave converteert. Invoer in de VS:
  gewicht in lb met decimalen, onder water x0.4536.
- **Schepjes**: `SCOOP_SIZE_ML` is merkafhankelijk en per land anders
  (NL-potten ~30 ml/schep is niet universeel). Wordt per site
  configureerbaar; in landen zonder betrouwbare standaard verbergen we
  de schepjes-regel (feature-flag in site-config:
  `features.scoops: boolean`).
- **Voedingsschema-teksten** (`generateFeedingSchedule`) bevatten
  NL-strings; die verhuizen naar de dictionary (zie contentplan §2).
- **Premature-flow**: leunt op NL-categorieën; voor fase 2 (UK) checken
  tegen NHS-guidance of tijdelijk uitschakelen per site
  (`features.premature: boolean`).

### 3b. TOG: banden zijn al universeel, de rest is presentatie

De TOG-banden in `lib/tog-constants.ts` (`TOG_RECOMMENDATIONS`) en
`getReverseAdvies` in `ReverseCalculator.jsx` zijn gebaseerd op
NHS/Lullaby Trust en gelden wereldwijd. **De kernformule verandert per
land dus niet.** Wat wél per site moet:

- **Temperatuurweergave °C/°F**: intern blijft alles °C.
  `TEMP_SLIDER_CONFIG` krijgt een presentatievariant: VS-site toont
  57-82°F op de slider en op de knoppen (16/18/20/22 -> 61/64/68/72),
  conversie in één helper `formatTemp(c, unit)`. De banden
  (`temp >= 24` etc.) blijven in °C rekenen.
- **Halfrond/seizoenen**: `SEIZOEN_TEMP_NL` en de seizoensafleiding in
  `useWeatherLocation` zijn noordelijk. Site-config krijgt
  `hemisphere: 'north' | 'south'`; voor AU/NZ draait de
  maand->seizoen-mapping om en krijgt `SEIZOEN_TEMP_*` een eigen tabel
  per land (australische kamertemperaturen wijken af).
- **Locatie-fallbacks**: `TIMEZONE_COORDS` / `REGION_FALLBACK_COORDS`
  uitbreiden met Londen/Dublin/Sydney/Auckland/New York zodat de
  "Vannacht in {stad}"-regel ook daar werkt (Open-Meteo is wereldwijd,
  geen API-wijziging nodig).
- **Kleding-benamingen**: `KLEDING_WAARDEN`-keys blijven (romper etc.),
  labels komen uit de dictionary ("bodysuit", "sleepsuit" voor UK).

---

## 4. Routing en rendering per domein

**Middleware-rewrite (standaard multi-tenant patroon in Next):**

```
middleware:  host -> siteKey -> rewrite naar /_sites/{siteKey}{pathname}
app/_sites/[site]/...        -> alle pagina's, ontvangen params.site
```

- Gedeelde componenten (calculators, widgets, Layout) blijven in
  `components/` en krijgen `siteConfig` als prop of via een
  `SiteProvider` (server: `siteFromHost(headers().get('host'))`).
- **Migratiepad zonder big-bang**: fase 0 verplaatst níets; we
  introduceren eerst `lib/sites.ts` + provider en laten de bestaande
  NL-pagina's als default-site werken. Pas bij de eerste echte tweede
  taal (tog-EN) verhuist die app naar het `_sites/[site]`-patroon;
  de NL-site volgt daarna. Zo blijft elke deploy klein en testbaar.
- togwaarde's CSP-middleware bestaat al; de rewrite komt in dezelfde
  `middleware.js` (eerst rewrite bepalen, dan headers zetten).

**Metadata/canonical/hreflang** per pagina uit site-config:

```tsx
// in generateMetadata of layout
alternates: {
  canonical: `https://${site.domain}${path}`,
  languages: Object.fromEntries(
    site.hreflangSiblings.map(k => [SITES_BY_KEY[k].locale,
      `https://${SITES_BY_KEY[k].domain}${pathMap[k] ?? path}`])
  )
}
```

`pathMap` vangt afwijkende slugs op (NL `/kennisbank/wat-is-tog` vs EN
`/guide/what-is-tog`); alleen pagina's die in beide talen bestaan
krijgen hreflang.

---

## 5. Database en admin

- **`website`-kolomwaarden worden site-keys**: bestaande waarden
  ('flesvoedingcalculator', 'togwaarde') blijven; nieuwe sites krijgen
  'fles-uk', 'tog-en', enz. Geen schema-wijziging nodig; wel de
  `VALID_WEBSITES`-arrays vervangen door de registry (§2).
- **Admin**: de bestaande switcher en de Website-radio in het
  create-formulier lezen de lijst uit de registry, zodat een nieuwe
  site automatisch beheerbaar is. `pageWebsiteFilter`-tabs idem.
- **Pages-lijst** (`/api/admin-pages`) is nu een hardcoded array met
  NL-pagina's; per site komt daar een blok bij (of beter: afleiden uit
  de content-registry van het contentplan, zodat een nieuw artikel
  automatisch als koppelbare pagina verschijnt).
- **Producten zijn per site uniek** (ander land = ander assortiment +
  andere affiliate-links). Geen deel-mechanisme bouwen; de admin
  ondersteunt dit al via het website-veld.

---

## 6. Affiliate en prijssync per land

- **bol.com**: alleen `nl` en `nl-BE`; site-config `affiliate.bol`
  bepaalt of bol-snippettypes aangeboden worden in de admin-create-form.
- **Amazon**: per marktplaats een eigen Associates-account en tag
  (amazon.co.uk, amazon.com, amazon.de). `plainProductUrl` en de
  widget-logo-logica werken al type-gebaseerd; de productlinks zelf
  komen per site uit de admin, dus geen code-wijziging behalve de
  domein-validatie in `lib/price-sync.js`:
  - beschikbaarheidscheck (`checkBolAvailability`) krijgt een
    generieke variant per platform-domein
  - Amazon blijft handmatig geprijsd (zie affiliate-disclaimer);
    de sync slaat amazon-snippets over zoals nu
- **Cron**: `/api/cron/sync-prices` synct nu per hardcoded website;
  wordt een loop over alle site-keys van dat concept (zelfde
  CRON_SECRET, zelfde workflow).

---

## 7. Sitemaps, robots, analytics per domein

- **Sitemap**: nu één statisch `public/sitemap.xml` dat voor élk
  gekoppeld domein geserveerd zou worden (fout voor multi-domein).
  Vervangen door een dynamische route die op hostname de juiste
  URL-set genereert uit de content-registry
  (fles heeft al `/api/sitemap` als rewrite; die wordt host-aware).
- **robots.txt**: idem host-aware (zelfde patroon).
- **Umami**: per domein een eigen website-ID (config §2); events
  (calculator_usage, affiliate_click) krijgen automatisch de juiste
  site doordat het script per domein een ander ID draagt.
- **click_events / calculator_events**: schrijven de site-key; de
  /admin/stats-filters tonen automatisch elke site uit de registry.

---

## 8. Deployment en infra

1. CapRover: per nieuw domein "Add custom domain" + enable HTTPS op de
   bestaande app; DNS A-record naar 195.201.113.102.
2. `NEXT_PUBLIC_*` build-args blijven gedeeld; site-specifieke waarden
   staan in `lib/sites.ts` (publiek) of runtime-env (secrets).
3. GitHub Actions workflows ongewijzigd (zelfde tarball); let op de
   tar-allowlist bij nieuwe top-level mappen (`content/`, `_sites/`).
4. Server: huidige 40GB/4GB kan dit aan zolang het één app per concept
   blijft; bij >6 domeinen of merkbare RAM-druk eerst cax21-upgrade.

---

## 9. Migratiestappen in volgorde (per concept)

| Stap | Wat | Raakt | Inschatting |
|---|---|---|---|
| 1 | `lib/sites.ts` + siteFromHost + SiteProvider | nieuw | 0,5 dag |
| 2 | Hardcoded website-detectie/labels/VALID_WEBSITES -> registry | 6-8 bestanden | 0,5 dag |
| 3 | Formule-parametrisering (fles: guideline+units; tog: °F+hemisfeer) | lib/feeding-*, tog-constants, result-componenten | 1-2 dagen |
| 4 | UI-strings naar dictionary (zie contentplan) | calculator-componenten | 1-2 dagen |
| 5 | Middleware-rewrite + `_sites/[site]` voor de nieuwe taal | app-structuur | 1 dag |
| 6 | Host-aware sitemap/robots/hreflang/canonicals | api/sitemap, layouts | 0,5 dag |
| 7 | Admin/stats registry-koppeling + cron-loop | admin, price-sync | 0,5 dag |
| 8 | Domein + SSL + GSC + Umami-site + Amazon-tag | infra/accounts | 0,5 dag |

Totaal per concept ~5-7 dagen techniek, exclusief content (zie
`content-plan.md`). Stappen 1-2 zijn nu al veilig te doen zonder
gedragsverandering en maken elke latere fase kleiner.
