# Vragen & Content-plan — FlesvoedingCalculator.nl

**Doel:** de 50 belangrijkste gebruikersvragen, waar we ze nu beantwoorden, wat er nog mist, en regexes om deze vragen terug te vinden in Google Search Console.

Status: ✅ beantwoord · 🔶 deels · ❌ gat

---

## 1. Rekenvragen (calculator-intentie)

| # | Vraag | Status | Waar / plan |
|---|-------|--------|-------------|
| 1 | Hoeveel ml flesvoeding bij X kg per dag? | ✅ | Calculator (home, /v2-v4) |
| 2 | Hoeveel ml per voeding bij X voedingen? | ✅ | Calculator |
| 3 | Baby van 3 weken, hoeveel drinken? | ✅ | Calculator + newborn-alert (10-15 ml opbouw) |
| 4 | Hoeveel schepjes op 120 ml water? | ✅ | /schepjes-calculator + resultaatpaneel |
| 5 | Gaat het schepje van het water af? | ✅ | Bereiding-regel in resultaat ("X ml water + Y schepjes") |
| 6 | Hoeveel voedingen per dag bij 2 maanden? | ✅ | Calculator + /voedingsschemas |
| 7 | Prematuur: hoeveel drinken? | ✅ | Prematuur-flow calculator + kennisbank/basis-flesvoeding/flesvoeding-bij-premature-babys |
| 8 | Wat is gecorrigeerde leeftijd? | ✅ | Prematuur-artikel + tooltip |
| 9 | Klopt 150 ml/kg? Consultatiebureau zei anders | 🔶 | FAQ noemt de bron. **Plan:** FAQ-item "Waarom kan het advies afwijken van het consultatiebureau?" (individueel advies gaat vóór, wij zijn richtlijn-indicatie) |
| 10 | Waarom maximaal 1000 ml per dag? | ✅ | Calculator-cap + informatie-pagina |
| 11 | Baby wil meer dan berekend, mag dat? | ✅ | Groeispurt-regel in resultaat |
| 12 | Baby drinkt minder dan berekend | ✅ | kennisbank/problemen-oplossen/baby-drinkt-niet-genoeg |
| 13 | Combivoeding: 3x borst, hoeveel fles bijgeven? | ❌ | **GAT 1, zie plan onderaan** |
| 14 | 8 maanden + hapjes: hoeveel melk nog? | ✅ | 100 ml/kg-regel + specialNotes vanaf 6 mnd |
| 15 | Groeispurt: hoeveel extra, hoe lang? | 🔶 | Alleen resultaat-regel. **Plan:** kort artikel "Groeispurts en flesvoeding" (praktische-tips) |

## 2. Bereiding & hygiëne

| # | Vraag | Status | Waar / plan |
|---|-------|--------|-------------|
| 16 | Water eerst of poeder eerst? | ✅ | voedingstechnieken/fles-bereiden-stap-voor-stap |
| 17 | Mag kraanwater? | ✅ | hygiene-bereiding/water-koken-flesvoeding |
| 18 | Waarom 70 graden? | ✅ | fles-bereiden + water-koken |
| 19 | Hoe lang is een klaargemaakte fles houdbaar? | ✅ | hygiene-bereiding/houdbaarheid-flesvoeding |
| 20 | Restje bewaren voor volgende voeding? | ✅ | houdbaarheid-flesvoeding |
| 21 | Fles opwarmen in magnetron? | ✅ | hygiene-bereiding/veilig-verwarmen-flesvoeding |
| 22 | Tot welke leeftijd steriliseren? | ✅ | hygiene-bereiding/flessen-steriliseren |
| 23 | Flessen in de vaatwasser? | 🔶 | Zijdelings in steriliseren. **Plan:** sectie toevoegen aan flessen-steriliseren |
| 24 | 's Avonds flessen klaarmaken voor de nacht? | 🔶 | Deels in nachtvoeding-optimaliseren. **Plan:** expliciete sectie (veilige opties: heet water in thermos, poedertorentje, kant-en-klaar) |
| 25 | Flesvoeding meenemen onderweg? | ✅ | praktische-tips/flesvoeding-op-vakantie |

## 3. Soorten & merken

| # | Vraag | Status | Waar / plan |
|---|-------|--------|-------------|
| 26 | Verschil nummer 1 en 2? | ✅ | soorten-flesvoeding/verschil-startvoeding-opvolgmelk |
| 27 | Wanneer overstappen naar opvolgmelk? | ✅ | soorten-flesvoeding/wanneer-overstappen-opvolgmelk |
| 28 | Huismerk even goed als A-merk? | ✅ | financiele-aspecten/kosten-van-flesvoeding + geld-besparen |
| 29 | Veilig wisselen van merk, hoe? | ❌ | **GAT 2, zie plan onderaan** |
| 30 | Anti-refluxvoeding nodig? | ✅ | soorten-flesvoeding/anti-reflux-flesvoeding |
| 31 | Wanneer hypoallergeen? | ✅ | soorten-flesvoeding/hypoallergene-flesvoeding |
| 32 | Is bio gezonder? | ✅ | soorten-flesvoeding/bio-organische-flesvoeding (eerlijk herschreven na audit) |
| 33 | Is mijn blik teruggeroepen? | ✅ | veiligheid/terugroepacties-babyvoeding-2026 |
| 34 | Welke voeding lijkt het meest op borstvoeding? | ❌ | **Plan:** sectie in flesvoeding-vs-borstvoeding of eigen kort artikel |

## 4. Situaties

| # | Vraag | Status | Waar / plan |
|---|-------|--------|-------------|
| 35 | Meer drinken bij warm weer? | ✅ | praktische-tips/flesvoeding-bij-warm-weer + WarmWeerAlert |
| 36 | Water geven bij hitte? | ✅ | idem (nooit verdunnen, <6 mnd vaker voeden) |
| 37 | Flesvoeding naar de kinderopvang: hoe? | ❌ | **GAT 3, zie plan onderaan** |
| 38 | Regels vliegtuig/handbagage? | ✅ | flesvoeding-op-vakantie |
| 39 | Nachtvoedingen afbouwen? | ✅ | praktische-tips/nachtvoeding-optimaliseren |
| 40 | Papa wil de fles geven | ✅ | praktische-tips/partner-betrekken-flesvoeding |
| 41 | Tweeling voeden | ✅ | voedingstechnieken/voeden-van-tweeling |
| 42 | Kosten per maand? | ✅ | financiele-aspecten/kosten-van-flesvoeding |
| 43 | Besparen op flesvoeding? | ✅ | praktische-tips/geld-besparen-flesvoeding |
| 44 | Oma/oppas: wat moet zij weten? | ❌ | **GAT 5, zie plan onderaan** |

## 5. Problemen & vertrouwen

| # | Vraag | Status | Waar / plan |
|---|-------|--------|-------------|
| 45 | Spugen na elke fles | ✅ | problemen-oplossen/spugen-na-de-fles |
| 46 | Krampjes na de fles | ✅ | problemen-oplossen/krampjes-na-flesvoeding |
| 47 | Verstopping | ✅ | problemen-oplossen/constipatie-door-flesvoeding |
| 48 | Baby weigert de fles | ✅ | basis-flesvoeding/baby-weigert-de-fles |
| 49 | Overvoeden mogelijk? Verzadiging herkennen | 🔶 | **GAT 4, zie plan onderaan** |
| 50 | Is de calculator betrouwbaar, wie zit erachter? | ✅ | FAQ + medische-disclaimer + over-ons (na audit eerlijk) |

---

## Actieplan: 5 nieuwe stukken content

| Prio | Artikel (slug) | Categorie | Kern | Zoekintentie |
|------|----------------|-----------|------|--------------|
| 1 | `combivoeding-borstvoeding-bijvoeden` | basis-flesvoeding | Hoeveel fles bijgeven naast X borstvoedingen; rekenvoorbeelden per aantal borstvoedingen; verwijzing naar calculator. **Fase 2:** calculatoroptie "aantal borstvoedingen" die van de dagbehoefte aftrekt | "bijvoeden hoeveel ml", "combivoeding schema", "borstvoeding en flesvoeding combineren" |
| 2 | `overstappen-ander-merk-flesvoeding` | soorten-flesvoeding | Direct of geleidelijk mixen, overgangsschema 5-7 dagen, waar op letten (ontlasting, krampjes), wanneer terug | "wisselen flesvoeding merk", "overstappen nutrilon naar kruidvat" |
| 3 | `flesvoeding-kinderopvang` | praktische-tips | Wat geef je mee (poedertorentjes vs klaargemaakt), etiketteren, koelketen, afspraken met opvang/gastouder | "flesvoeding meegeven kinderdagverblijf" |
| 4 | `overvoeden-hongersignalen-paced-feeding` | voedingstechnieken | Honger- en verzadigingssignalen, paced bottle feeding stap voor stap, wanneer stopt een baby zelf | "baby overvoeden fles", "paced feeding", "hongersignalen baby" |
| 5 | `oppas-spiekbrief-flesvoeding` | praktische-tips | Printbare 1-pagina spiekbrief voor oppas/grootouders: bereiden, hoeveelheid, opwarmen, houdbaarheid + link naar calculator | "flesvoeding uitleg oppas", "instructie flesvoeding opa oma" |

**Kleine uitbreidingen aan bestaande artikelen:** vaatwasser-sectie (flessen-steriliseren), nacht-voorbereiding-sectie (nachtvoeding-optimaliseren), consultatiebureau-FAQ-item (FAQ), "lijkt op borstvoeding"-sectie (flesvoeding-vs-borstvoeding), groeispurt-kort-artikel of sectie.

Schrijfregels: huisstijl per CLAUDE.md, alleen eerlijke cijfers (zie content-audit.md), bronnen benoemen, geen verzonnen statistieken.

---

## Regexes (Google Search Console, RE2-syntax)

Gebruik: GSC → Prestaties → filter Zoekopdracht → "Aangepast (regex)". Zo zie je op welke van deze vragen we al vertoningen/klikken krijgen en waar we (na publicatie) ranken. RE2: geen lookaheads; `(?i)` = case-insensitive.

**1. Rekenvragen / hoeveelheid**
```regex
(?i)(hoeveel|aantal)\s?(ml|milliliter|flesvoeding|voedingen|melk)|ml\s?per\s?kg|150\s?ml|hoeveel.*(baby|fles).*(drinken|voeding)|voedingsschema
```

**2. Schepjes / bereiding**
```regex
(?i)schepje|maatschepje|(water|poeder)\s?eerst|kraanwater.*fles|70\s?graden|fles(voeding)?\s?(bereiden|klaarmaken|maken)
```

**3. Houdbaarheid / hygiëne**
```regex
(?i)fles(voeding)?.*(bewaren|houdbaar|restje|steriliseren|opwarmen|magnetron|vaatwasser)|(restje|klaargemaakte)\s?fles|hoe\s?lang.*fles
```

**4. Soorten / merken / overstappen**
```regex
(?i)(startvoeding|opvolgmelk|nummer\s?[12])|verschil.*(1|2|startvoeding|opvolgmelk)|(huismerk|kruidvat|nutrilon|hero|hipp|aptamil).*(flesvoeding|vergelijk|verschil|overstappen|wisselen)|anti.?reflux|hypoallergeen|lactosevrij|bio.*(flesvoeding|babyvoeding)|terugroep|recall.*(babyvoeding|flesvoeding)
```

**5. Combivoeding / bijvoeden (gat 1)**
```regex
(?i)combivoeding|bijvoeden|borstvoeding.*(fles|bijvoeden|combineren|aanvullen)|kolven.*fles
```

**6. Situaties (weer, opvang, reizen, nacht)**
```regex
(?i)fles(voeding)?.*(warm|hitte|zomer|kinderopvang|creche|gastouder|vliegtuig|vakantie|onderweg|nacht)|baby.*(warm\s?weer|hitte).*(drinken|water)|nachtvoeding
```

**7. Problemen**
```regex
(?i)(spugen|spuugt|krampjes|verstopping|constipatie|diarree|weiger).*(fles|voeding)|baby.*(drinkt\s?niet|weigert\s?de?\s?fles)|overvoeden|hongersignalen|paced\s?(bottle)?\s?feeding
```

**8. Alles gecombineerd (master-filter)**
```regex
(?i)flesvoeding|schepje|opvolgmelk|startvoeding|combivoeding|bijvoeden|kunstvoeding|zuigelingenvoeding|(hoeveel|ml).*(baby|fles)
```

> Tip: draai regex 1 t/m 7 maandelijks in GSC en noteer vertoningen zonder kliks: dat zijn de vragen waar we wél gezien worden maar nog niet overtuigen (titel/meta), of waar de nieuwe artikelen moeten landen.

---

*Aangemaakt: juli 2026. Bijwerken wanneer artikelen uit het actieplan live gaan.*
