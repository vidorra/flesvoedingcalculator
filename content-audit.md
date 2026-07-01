# Content Audit — Flesvoedingcalculator

**Date:** 2026-07-02 · **Scope:** homepage/calculator, `lib/feeding-constants.ts`, `hooks/useCalculator.ts`, calculator components, `over-ons`/disclaimers, and all ~35 kennisbank articles. Every verifiable factual claim was extracted; high-stakes claims checked against primary sources.

## Sources used for verification
- Voedingscentrum — 150 ml/kg/dag guideline, water/prep advice: https://www.voedingscentrum.nl
- NCJ / TNO — Peiling Melkvoeding 2023: **53%** start breastfeeding at birth (lowest since 1997; ~69% in 2018): https://www.ncj.nl/inspiratie/rapport-peiling-melkvoeding/
- ESPGHAN 2022 — "Enteral Nutrition **in** Preterm Infants" (position paper): 150–180 ml/kg/day for stable growing preterm infants. https://www.espghan.org/knowledge-center/publications/Nutrition/2022-enteral-nutrition
- NVWA — cereulide contamination / Nestlé + Danone recall (Jan 2026), ARA-oil, 233 reports by Mar 2026: https://www.nvwa.nl/actueel/actuele-onderwerpen/5-vragen-over-cereulide-in-zuigelingenvoeding
- EU Regulation 2016/127 — infant/follow-on formula composition & labelling (does NOT mandate a 30 ml scoop volume).

## Findings & actions

### 🔴 Critical (false credentials / expert-endorsement)
| # | Claim | Location | Action |
|---|-------|----------|--------|
| 1 | Fabricated medical team: "Kinderarts & Voedingsspecialist", "Verloskundige & Lactatie Expert" (emoji avatars, no names/BIG) | `app/over-ons/page.tsx` | **FIXED** — array was dead code; deleted entirely |
| 2 | "Berekeningen gevalideerd door kinderartsen-neonatologen van Nederlandse NICU's (niveau 3 centra)" | `components/calculator/PrematureInputSection.tsx` | **FIXED** — removed; reframed to "gebaseerd op openbare richtlijnen, vervangt geen medisch advies" |
| 3 | "NICU protocollen grote centra (AMC, Erasmus MC, UMCU)" implied as sources | `PrematureInputSection.tsx` | **FIXED** → "Nederlandse neonatologie-richtlijnen (openbaar)" |
| 4 | "Deze calculator volgt de richtlijnen van: NVK, ESPGHAN, en Nederlandse NICU-protocollen" | `components/calculator/CalculatorResults.tsx` | **FIXED** — dropped the NICU-protocol claim |
| 5 | "gevalideerd door kinderartsen-neonatologen" + future date "Februari 2026" | `kennisbank/.../flesvoeding-bij-premature-babys` | **FIXED** → "Gebaseerd op de openbare richtlijnen van NVK en ESPGHAN (2022)" |

### 🟠 Factual errors / invented statistics
| # | Claim | Location | Action |
|---|-------|----------|--------|
| 6 | "94% van baby's krijgt bij geboorte borstvoeding" | `kennisbank/basis-flesvoeding/flesvoeding-vs-borstvoeding` | **FIXED** → "53% ... (NCJ/TNO Peiling Melkvoeding 2023)"; follow-on %s (85/65/3.2mnd) de-quantified |
| 7 | Bio-organic: "28% marktaandeel", "280.000 baby's", "€95M", "94% lagere pesticide", "23% minder eczeem (RIVM 2023)", "Wageningen 5-jaar studie 19%/14%" | `kennisbank/soorten-flesvoeding/bio-organische-flesvoeding` | **FIXED** — all invented figures + fake studies removed; replaced with honest "bewijs is beperkt". (Real organic share is ~5–18%, not 28%.) |
| 8 | AR-formula efficacy "85%/80%/78% minder spugen" (brand-specific) | `kennisbank/soorten-flesvoeding/anti-reflux-flesvoeding` | **FIXED** — de-quantified to "kan het spugen verminderen" |
| 9 | "40% meer uitgerust", "15-25% lagere stresshormoon", "6+ vs 4-5 uur (Nederlands onderzoek)" | `kennisbank/praktische-tips/flesvoeding-en-slapen` | **FIXED** — removed invented numbers + fake study |
| 10 | "80% families juni-augustus", "45% internationale destinaties" | `kennisbank/praktische-tips/flesvoeding-op-vakantie` | **FIXED** — de-quantified |
| 11 | "€3.200/maand besteedbaar inkomen" | `kennisbank/praktische-tips/geld-besparen-flesvoeding` | **FIXED** — removed (cost range kept as "grofweg") |
| 12 | "30% van baby's weigert de fles" | `kennisbank/basis-flesvoeding/page.tsx` | **FIXED** → "Veel baby's..." |

### 🟡 Precision
| # | Claim | Location | Action |
|---|-------|----------|--------|
| 13 | ESPGHAN title "Enteral Nutrition **Supply** for Preterm Infants" | PrematureInputSection + premature article | **FIXED** → "Enteral Nutrition **in** Preterm Infants" |
| 14 | Scoop 30 ml attributed to "EU Regulation 2016/127" | `lib/feeding-constants.ts`, `CalculatorResults.tsx` | **FIXED** — reframed as standard prep ratio per brand instructions |

## Claims VERIFIED CORRECT — do not "fix" these
- **Recall article (`terugroepacties-babyvoeding-2026`)** — verified against NVWA: cereulide/ARA-oil, Nestlé + Danone, Jan 2026 timeline, batch/product details all accurate. This is the legally riskiest content and it holds up.
- **Core calculator math** — 150 ml/kg (Voedingscentrum), 100 ml/kg after solids, max 1000/1200 ml, premature **155–180 ml/kg** (matches ESPGHAN 2022 range 150–180), scoop ratio, rounding, growth-spurt 1.3×.
- **Epidemiology figures** — koemelkallergie 2–3%, reflux 15–20% mild / 3–5% GERD / 80% resolves ≤12 mnd, primaire lactose-intolerantie <1% — established and correct.
- **Disclaimers** — the medische-disclaimer and premature "medisch advies vereist" warnings are strong and appropriately prominent.
- Cereulide onset "30 min–6 uur" is medically correct for this emetic toxin (a prior audit pass wrongly flagged it).

## Remaining (low priority)
- Branded product suggestions (Nutrilon Nenatal / Aptamil Prematil, Gallia) presented as examples — fine unless there is an undisclosed affiliate relationship, which must then be disclosed.
- Some kennisbank cost ranges are estimates; kept with "grofweg / afhankelijk van merk" framing.

## Overall
Core math, disclaimers, and the recall content are solid. The fixes above removed the real liabilities: fabricated medical credentials/validation claims and a set of invented statistics. No fabricated medical *guidance* was found in the calculator itself.
