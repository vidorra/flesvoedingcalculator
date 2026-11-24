# Plan: affiliate-verkopen inzichtelijk (bol-koppeling + Amazon-import)

Status: gebouwd 24-11-2026. Code: `lib/affiliate-sales.js` (import, Amazon-CSV), `lib/affiliate-subid.js` (subId lezen), `app/api/admin/affiliate-sales/route.js`, `components/admin/AffiliateSalesSection.tsx` (kaart Verkopen in /admin/stats), planner in `instrumentation-node.js`. SubIds worden bij het klikken gezet (`bolSubId`/`tagBolLink` in `lib/experiments.tsx`, `tg_` in togwaarde). Nog te bevestigen: dat bol de parameter `subid` terugmeldt in het promotion-report.

Doel: per verkoop zien welk product het was, van welke site, en (vanaf de subId's) van welke pagina, welk blok en welke A/B-variant. Daarmee meet de A/B-test `calc_result_block` op verkopen in plaats van alleen klikken.

## Bronnen

### bol: Affiliate Reporting API v2

Docs: https://api.bol.com/marketing/docs/affiliate-reports-api/index.html

- Inloggen: `POST https://login.bol.com/token?grant_type=client_credentials`, header `Authorization: Basic base64(clientId:clientSecret)`, `Accept: application/json`. Token is ongeveer 5 minuten geldig; hergebruiken tot hij verloopt (te veel tokenverzoeken kan een IP-ban geven).
- Sleutel: affiliate.bol.com, Account, blok Open API, Toevoegen. De productfeed-gegevens (`BOL_PRODUCT_FEED_*`) zijn iets anders en werken hier niet. Eerst proberen of de bestaande `BOL_API_CLIENT_ID` / `BOL_API_CLIENT_SECRET` (als die in CapRover staan) toegang geven.
- Basis: `https://api.bol.com/marketing/affiliate/reports/v2/`, alle GET met `startDate` en `endDate` (`yyyy-MM-dd`), antwoord `{"items": [...]}`.
  - `/order-report`: per bestelregel `orderDate`, `orderDateTime`, `orderId`, `orderItemId`, `productId`, `productTitle`, `quantity`, `chunkName` (categorie), `siteCode`, `frameType`, `name`, `subId`, `priceInclVat`, `commission`, `status` (Open / Geaccepteerd / Geweigerd), `statusFinal`, `approvedForPayment`.
  - `/promotion-report`: per dag en subId `clicks`, `impressions`, `orders`, `conversion`, `commission`, `revenueInclVat`.
  - `/commission-report`: commissie open en goedgekeurd per dag en subId.
- Niet gedocumenteerd: rate limits, hoe ver terug, maximale periode, hoe de subId in de klik-URL heet en hoe lang hij mag zijn.

### Amazon: CSV-export uit Associates Central

Amazon heeft geen rapportage-API voor partners, dus import. Kies CSV (`csv-parser` zit al in het project).

Eerste export (22-11-2026) bevat drie bestanden:

| Rapport | Kolommen (NL) | Bijzonderheid |
|---|---|---|
| Category | Datum, Categorie, Klikken, Bestelde items, Bestelde omzet, Verzonden/Geretourneerde items, Totale inkomsten | categorie "Other" |
| Linked-Product | Datum, categorie, producttitel, ASIN, klikken, ... totale opbrengst | titel "-", ASIN "Other" |
| Tracking-Id | Tracking-ID, Clicks, Bestelde items, ... Totale inkomsten | tracking-ID "Other" |

- Datum in Amerikaanse notatie (`11-22-2026` = maand-dag-jaar), decimalen met een punt (`13.21`).
- Amazon verbergt bij lage aantallen het product ("Other"). Welk product het was is dan niet te achterhalen; misschien wel als het volume groeit.
- Wel bruikbaar: klikken, bestellingen, omzet, commissie en retouren per dag.

## Site bepalen

Beide sites gebruiken hetzelfde bol-site-ID (`1472968`) en dezelfde Amazon-tag (`flesvoedingca-21`). De site volgt uit het product:

1. Product-ID (bol) of ASIN (Amazon) koppelen aan een snippet; de `website`-kolom van die snippet geeft de site.
2. Lukt dat niet: op soort product. Slaapzakken en kleding = togwaarde, alle andere babyproducten = flesvoedingcalculator (bol `chunkName`, Amazon categorie).
3. Lukt ook dat niet (Amazon "Other"): site onbekend, alleen in het totaal.

## Fase 1: bol-koppeling

1. Sleutel: bestaande `BOL_API_CLIENT_ID` / `BOL_API_CLIENT_SECRET` proberen, anders nieuwe aanmaken onder die namen in CapRover (flesvoeding-app). Beide sites delen de database, dus één koppeling vult beide.
2. Elke bol-link krijgt een subId met blok en pagina, bijvoorbeeld `widget-home` of `kennis-tog-tabel`; tijdens een A/B-test komt de variant erbij. Nu gebeurt dat alleen in de test (`withBolSubId` in `lib/experiments.tsx`). Eerst met één testklik controleren dat de subId de dag erna in het promotion-report staat.
3. Nieuwe `lib/bol-reports.js` met token-cache tot de echte vervaltijd. Let op: het bestaande `lib/bol-api.js` trekt 300 s af van een token van 299 s en vraagt dus bij elk verzoek een nieuw token.
4. Dagelijkse import via de planner in `instrumentation-node.js` (zelfde patroon als Search Console): elke dag de laatste 60 dagen ophalen, omdat de status van Open naar Geaccepteerd kan gaan.
   - Tabel `affiliate_orders`: `network`, `order_item_id` (uniek, upsert), `order_date`, `product_id`, `product_title`, `quantity`, `price_incl_vat`, `commission`, `status`, `status_final`, `sub_id`, `category`, `website`, `snippet_id`.
   - Tabel `affiliate_daily`: per `network`, datum en subId / tracking-ID de klikken, bestellingen, omzet en commissie.

## Fase 2: Amazon-import

1. Uploadknop in de admin voor een of meer van de drie CSV's; type herkennen aan de kolomkoppen.
2. Datum parsen als maand-dag-jaar, decimalen met punt; opnieuw uploaden overschrijft (upsert op datum + rapport + sleutel), telt niets dubbel.
3. Zelfde tabellen als bol, met `network = 'amazon'`.
4. Optioneel, voor meer inzicht: extra tracking-ID's aanmaken in Associates Central (max 100), bijvoorbeeld per blok. Het Tracking-Id-rapport splitst de verkopen dan per plek, ook als het product verborgen blijft.

## Fase 3: kaart "Verkopen" in de admin

Naast de Search Console-kaart in `StatsPanel`:

- Bestellingen en commissie per netwerk, gesplitst in open, geaccepteerd en geweigerd.
- Top-producten met conversie (bestellingen / onze klikken op dat product).
- Verkopen per site, pagina en blok, en per A/B-variant.

## Grenzen

- Bestellingen van vóór de subId's krijgen geen pagina of blok, alleen product en site.
- Bol-limieten onbekend; start met één import per dag over 60 dagen. Bij vragen: affiliate@bol.com.
- Amazon-rapporten met "Other" geven alleen totalen.
