# Artikel-verbeteringen kennisbank

Factcheck- en redactie-audit van alle inhoudelijke kennisbank-artikelen (juli 2026).
Gecontroleerd tegen Voedingscentrum, RIVM/NVWA, Thuisarts/NHG, WHO en EU-verordening 2016/127.

**Werkwijze:** 8 parallelle review-agents, elk met websearch-verificatie. Bevindingen per artikel
geordend op ernst. Labels: **KRITIEK** (veiligheid/gezondheid) · **FEIT** (feitelijk onjuist/verouderd)
· **VOLLEDIGHEID** (ontbrekend onderwerp) · **TAAL** (spelling/grammatica) · **STIJL** (huisstijl,
verzonnen cijfers, code-hygiëne).

**Al afgehandeld (aparte commits, juli 2026):** `soorten-flesvoeding`, `water-koken-flesvoeding`,
`problemen-oplossen/spugen-na-de-fles`, `praktische-gidsen/uitgebreide-flesvoeding-gids`. Die staan
hieronder niet meer.

---

## 1. Top-prioriteiten (veiligheid + harde feitfouten eerst)

Deze zijn medisch of feitelijk het meest risicovol. Aanpakken vóór de rest.

1. **`problemen-oplossen/diarree-en-flesvoeding` — verdunningsschema is onveilig en achterhaald.**
   Het "Geleidelijke Herstart"-schema (r.368-379: dag 1-2 alleen ORS, dan 25%/50%/75% verdunning) druist
   in tegen de NHG-Standaard Acute diarree en Thuisarts: flesvoeding **onverdund doorgeven**, ORS er los
   tussendoor. 1-2 dagen "alleen ORS + water" is schadelijk voor een baby. Volledig herschrijven.
2. **`problemen-oplossen/diarree-en-flesvoeding` — verzonnen/foute telefoonnummers (r.337-341):**
   niet-bestaand "0900-1628 / telefoonie", een verzonnen landelijk huisartsenpost-nummer, en het
   NVIC-nummer dat alleen voor zorgprofessionals is. Verwijderen; alleen 112 + "huisartsenpost in jouw regio" + Thuisarts.nl.
3. **`voedingstechnieken/voeden-van-tweeling` — risicovol bereidings-/voedingsadvies.** "6-8 flessen
   vooruit maken en 24u bewaren" (r.22) botst met het Voedingscentrum-advies (vers per voeding bereiden);
   en fleshouders/propfeeding (r.46-47) zonder waarschuwing = verstikkingsrisico. Herschrijven + "Let op"-blok.
4. **`problemen-oplossen/constipatie-door-flesvoeding` — "extra water in de fles" (r.205-217)** is tegen
   Thuisarts-advies (verstoort voedingswaarde/elektrolyten). Vervangen door "juiste verhouding, niet verdunnen zonder overleg".
5. **`problemen-oplossen/allergische-reacties-flesvoeding` — noodprotocol (r.54-61):** "herken binnen
   0-30 seconden" en "EpiPen Jr indien voorhanden" zijn misleidend/riskant. Vereenvoudigen tot "bel 112,
   volg de centralist". Plus: benoem dat anafylaxie op standaard flesvoeding zeldzaam is en koemelkallergie meestal traag/mild.
6. **Koortsdrempel baby < 3 maanden staat overal te hoog** (diarree r.268/r.86: ">39°C"/">38,5°C";
   krampjes r.289). Regel = **elke koorts ≥ 38°C bij een baby < 3 maanden → direct (spoed)arts**. En
   **rectaal meten als thuisadvies schrappen** (JGZ raadt dit ouders af).
7. **Gefabriceerde "bronnen"/statistieken die als wetenschap worden gepresenteerd — verwijderen:**
   - `voedingstechnieken/juiste-temperatuur-controleren` r.99-116: verzonnen "UMCG/TNO/EU/JGZ"-onderzoeken.
   - `hygiene-bereiding/veilig-verwarmen-flesvoeding` r.623-625: verzonnen "Nederlandse ER-statistieken".
   - `basis-flesvoeding/flesvoeding-vs-borstvoeding` r.449-467: verzonnen IQ/infectie/allergie-percentages.
   - `voedingstechnieken/baby-leren-zelf-drinken` + `overgang-naar-beker`: verzonnen "2024"-percentagetabellen.
8. **`voedingstechnieken/juiste-temperatuur-controleren` — magnetronverbod is fout (r.627+).** Het
   Voedingscentrum staat de magnetron toe (max 600W, daarna schudden en testen op de pols). Van "ABSOLUUT NIET" naar de juiste nuance.
9. **IJzergehalte opvolgmelk klopt niet:** `soorten-flesvoeding/verschil-startvoeding-opvolgmelk`
   (r.62-64 tabel + r.127/r.136 merkclaims) noemt 4-6 mg/100ml; werkelijk ~1,0-1,3 mg/100ml (EU 2016/127).
   Zelfde fout als eerder in `soorten-flesvoeding` (al gecorrigeerd).
10. **`soorten-flesvoeding/hypoallergene-flesvoeding` — achterhaalde preventieclaim (r.50/r.58):**
    "50% minder allergierisico / bewezen preventie". Partieel gehydrolyseerde (HA) voeding heeft géén
    bewezen preventief effect. Plus: HA (preventie) ≠ behandeling van koemelkallergie (die vraagt sterk
    gehydrolyseerde of aminozuurvoeding op recept).
11. **`basis-flesvoeding/flesvoeding-vs-borstvoeding` — DHA "verplicht 100mg/100ml" (r.45)** is factor 3-5
    te hoog; EU 2016/127 = 20-50 mg per 100 kcal.
12. **Veilig-slapen ontbreekt in slaap-/nachtartikelen** (`praktische-tips/flesvoeding-en-slapen`,
    `nachtvoeding-optimaliseren`, `baby-terugleggen-na-nachtvoeding`): geen "baby op de rug, nooit fles
    mee in bed" (verslikking + tandbederf). Toevoegen.
13. **Beker-overgang verouderd** (`voedingstechnieken/baby-leren-zelf-drinken` + `overgang-naar-beker`):
    start op 10-12 mnd en fles tot 18-24 mnd. Voedingscentrum: oefenen uit beker vanaf ~6 mnd, fles afbouwen vóór 1 jaar.

---

## 2. Terugkerende patronen (site-breed)

Deze fouten komen in meerdere artikelen terug. Efficiënt om ze in één ronde overal te fixen.

| Patroon | Correctie | Getroffen artikelen (o.a.) |
|---|---|---|
| "Water koken tot 70°C" als NL-norm | In NL hoeft koud kraanwater niet gekookt (WHO-70°C is buitenland/kwetsbare baby's) | eerste-keer-flesvoeding, flesvoeding-bewaren, houdbaarheid, fles-bereiden-stap-voor-stap |
| Opwarmen tot "37°C" | Voedingscentrum: 30-35°C, testen op pols | baby-weigert, eerste-keer, fles-bereiden, juiste-temperatuur (hele frame), baby-drinkt-niet-genoeg |
| Bewaren "24 uur" / "2 uur" | Klaargemaakte fles max 8 uur achterin koelkast (4°C), restjes weg | flesvoeding-bewaren, houdbaarheid, fles-bereiden, tweeling |
| Magnetron "absoluut verboden" | Mag mits max 600W, schudden en testen | juiste-temperatuur, beste-melkmachine |
| Verzonnen precisie-percentages/prijzen | Schrappen of "indicatief" | vrijwel alle artikelen (zie per-artikel) |
| Verzonnen testimonials (naam + plaats) | Verwijderen of als voorbeeld labelen | anti-reflux, nachtvoeding-optimaliseren, voeden-van-tweeling |
| Em-dashes (—) / gedachtestreepje-als-em-dash | Komma, dubbele punt of · | beste-melkmachine, terugroepacties-babyvoeding-2026, premature-babys |
| Weggevallen pijlen (→) tonen als dubbele spatie | Herstel "→" of "naar" | anti-reflux, bio, hypoallergene, lactosevrije, werk-combineren, nachtvoeding, en-slapen |
| Dode module-scope `sidebarImages`/`adTopics` buiten component | Opruimen (echte sidebar staat inline) | premature-babys, flesvoeding-bewaren, verschillende-spenen, geld-besparen, nachtvoeding, krampjes |
| React `key={index}` in geneste `.map()` | Binnenste index gebruiken (key-collisie) | boertje, vs-borstvoeding, op-vakantie, tweeling, geld-besparen, nachtvoeding |
| Engelse doorspekking / Title Case-koppen | Verdutsen, zin-hoofdletters | op-vakantie, en-slapen, partner-betrekken, voedingsritme, baby-leren-zelf-drinken, verschillende-spenen |
| Ontbrekende medische disclaimer | "Let op"-blok toevoegen | baby-drinkt-niet-genoeg, constipatie, diarree, krampjes |
| h1 `font-medium` i.p.v. `font-bold` (CLAUDE.md) | Consistent maken (site-breed patroon) | boertje, juiste-houding, constipatie, e.a. |

---

## 3. Per artikel

### basis-flesvoeding

**`baby-weigert-de-fles`**
- [FEIT] r.231/r.223: opwarmen "37°C" → 30-35°C.
- [TAAL] r.41: "ouders wiens baby" → "ouders wier baby" / "ouders van wie de baby".
- [VOLLEDIGHEID] r.165: bij "te lang bewaard" de norm noemen (max 8u/4°C, restjes weg).

**`combivoeding-borstvoeding-bijvoeden`** — (geen belangrijke bevindingen; sterkste artikel: rekenmodel klopt, veilig geformuleerd, bronnen + disclaimer aanwezig).

**`eerste-keer-flesvoeding-geven`**
- [KRITIEK/FEIT] r.53-54: "water altijd koken tot 70°C" → NL koud kraanwater, niet koken.
- [FEIT] r.53: doeltemp "37°C" → 30-35°C.
- [FEIT] r.173: "laag fluoridegehalte" als voordeel is misleidend (NL-water niet gefluorideerd sinds 1976); schrappen.
- [STIJL] r.65-70: star transitieschema zonder "op eigen tempo / overleg lactatiekundige"-nuance.
- [STIJL] geen bronvermelding onderaan (vergelijk combivoeding-artikel).

**`flesvoeding-bij-premature-babys`**
- [FEIT] r.124: "8,7% te vroeg geboren" → ~7,5-8% (Perined); "8,7%" te hoog/verzonnen precisie.
- [FEIT] r.89: post-discharge "72 kcal/100ml" controleren (~73-75); merkwaarden dateren, disclaimer overwegen.
- [STIJL] r.13-32: dode `sidebarImages`/`adTopics` buiten component. r.122/147/164: gedachtestreepje-als-em-dash.
- [FEIT] Voedingsbehoefte tot 200 ml/kg is correct voor prematuren, staat goed onder "alleen met medisch team".

**`flesvoeding-vs-borstvoeding`**
- [KRITIEK/FEIT] r.45: DHA "100mg/100ml" → 20-50 mg per 100 kcal (EU 2016/127).
- [KRITIEK/FEIT] r.449-467: verzonnen "Nederlandse studies 2020-2024" (IQ 101,2 vs 100,8; 15% meer infecties; 8% allergie) — bronloos, verwijderen of echt citeren.
- [FEIT] r.140: borstvoedingspercentages (Noorwegen 95% / EU 78% "op 6 maanden") verwarren "ooit gestart" met "op 6 mnd"; nu misleidend.
- [FEIT] r.37: "35% uitsluitend flesvoeding na 3 mnd" — bron toevoegen of schrappen.
- [STIJL] r.493: `key={index}` in geneste map (dubbele keys).

**`overstappen-van-borst-naar-fles`**
- [FEIT] r.360-364: moedermelk + poeder in één fles mengen wordt afgeraden; adviseer aparte voedingen.
- [FEIT] r.88: "2-3 weken" borstvoeding opbouwen inconsistent met combivoeding-artikel (4-6 weken); gelijktrekken.
- [VOLLEDIGHEID] r.662: "overstappen tijdens zwangerschap is veilig" te stellig; nuance/overleg verloskundige.
- [TAAL] r.254 "hongrig" → "hongerig"; r.458 "Savooikool bladeren" → "savooiekoolbladeren"; r.220 "Equipment" → "benodigdheden".

### hygiene-bereiding

**`flessen-steriliseren`**
- [FEIT] r.611: "steriliseren zolang baby flesvoeding krijgt" te sterk → vooral eerste ~6 mnd; daarna goed reinigen meestal voldoende.
- [FEIT] r.245: "3 minuten doorkoken" → minstens 5 minuten.
- [FEIT/STIJL] r.288-290/520-532/577-589: verzonnen merkprijzen + kostentabel (magnetron duurder dan koken klopt niet); markeren als indicatief.
- [FEIT] r.270: "24 uur steriel" alleen mits deksel dicht.
- [STIJL] r.544: DollarSign-icoon in euro-context → euro-icoon.
- [TAAL] r.124 "elk leeftijd" → "elke"; r.164 "na elke gebruik" → "elk gebruik".

**`flesvoeding-bewaren`**
- [KRITIEK/FEIT] r.78/r.108/r.273: koelkast "24 uur" → max 8 uur (4°C).
- [KRITIEK/FEIT] r.95/r.231/r.233: "koken → 70°C" → NL koud kraanwater / 30-35°C, of expliciet als WHO-methode labelen.
- [FEIT] r.68-72: kamertemp "2 uur" inconsistent (elders 1u/½u); harmoniseren.
- [FEIT] r.38: "Chronobacter" → "Cronobacter".
- [FEIT] r.284-285: geopende verpakking "3-4 weken" → "max 4 weken".
- [TAAL] "angebroken"→"aangebroken", "Klaar gemaakte"→"klaargemaakte" (o.a. r.79/86/264/390).
- [STIJL] r.13-32: dode `sidebarImages`/`adTopics` buiten component.

**`houdbaarheid-flesvoeding`**
- [KRITIEK/FEIT] r.45-49/r.150/r.158: koelkast "24 uur" → max 8 uur.
- [STIJL/FEIT] r.215 "50% lagere weerstand" en r.219 "pH 3-4 vs 1-2": verzonnen precisie, schrappen.
- [FEIT] r.36-42: 30/45-min-uitsplitsing kamertemp is verzonnen; vereenvoudig (restjes direct weg).
- [FEIT] r.75-79: "Opnameduur 14+ dagen" (Cronobacter) misleidend; herlabelen/schrappen.
- [FEIT] r.173-175: kant-en-klaar "gevoeliger dan zelfgemaakt" onjuist (steriel ongeopend juist veiliger).
- [TAAL] r.127 "wegooien" → "weggooien".

**`veilig-verwarmen-flesvoeding`**
- [KRITIEK/FEIT] r.623-625: verzonnen "Nederlandse ER-statistieken" (67%/23%/10%) — verwijderen.
- [FEIT] r.165/r.723: niet-verifieerbare NVK-uitspraak → Voedingscentrum als bron.
- [FEIT] r.113/r.211-214: verzonnen vitamineverlies-percentages (B1 40%, B12 30%, lysine 50%) — schrappen.
- [FEIT] r.74: "boven 40°C brandwonden" overdreven; nuanceren.
- [TAAL] "waterpad" → "waterbad" (~15×, ook keyword r.10).
- [FEIT] merkprijzen/kostentabel (r.428/691-707) als indicatief markeren.
- [FEIT] r.148/r.571: "35-37°C / lichaamstemperatuur" is grotendeels correct; benadruk 30-35°C opwarmen.

### financiele-aspecten

**`kosten-van-flesvoeding`**
- [FEIT] alle merkprijzen/jaarbedragen (r.9/59/104-107) dateren snel → "indicatief, prijspeil 2026" + ranges i.p.v. centbedragen.
- [STIJL] r.408: kop "25 Bespaartips" terwijl er 15 zijn; corrigeren.
- [STIJL] r.420: "Apps zoals Prospectus" — geen bekende NL-app; controleren/vervangen.
- [STIJL] euro-notatie punt → komma (€12.99 → €12,99), huisstijl.
- [FEIT] r.118/r.573: "borstvoeding €40-80/mnd" nuanceren als indirecte kosten.
- [FEIT] r.446: "restjes max 1 uur, na drinken direct weg" is correct — behouden.
- [VOLLEDIGHEID] toevoegen: kraanwater is gratis (geen flessenwater nodig) als bespaartip.

### soorten-flesvoeding

**`anti-reflux-flesvoeding`**
- [FEIT] r.64: Aptamil AR "gemodificeerd zetmeel" → johannesbroodpitmeel (of generiek "verdikkingsmiddel").
- [VEILIGHEID/VOLLEDIGHEID] voeg expliciet toe: AR-voeding alleen op advies, kan obstipatie geven.
- [FEIT] r.118: "venkel/kamille thee na 4 mnd" wordt afgeraden; schrappen/sterk nuanceren.
- [STIJL] r.556-572: verzonnen "Success Stories"-testimonials (naam+plaats) + Engelse kop; verwijderen/vertalen.
- [FEIT] r.51/r.68: beschikbaarheidsclaims ("alle supermarkten" / "alleen drogist") twijfelachtig.

**`bio-organische-flesvoeding`**
- [FEIT] r.51: "HiPP = Demeter (strengste bio)" → "sommige HiPP-lijnen zijn Demeter".
- [STIJL/FEIT] r.78-96/108-124: verzonnen percentages/bedragen ("+45-55%", "€950-1400/jaar"); markeren.
- [FEIT] EU-verordening 2018/848 (bio) correct genoemd. Relativeert gezondheidsvoordelen goed.
- [TAAL] r.108 variabele `veelgemaktefouten` typo; r.251-253/366 weggevallen scheidingstekens/pijl.

**`hypoallergene-flesvoeding`**
- [KRITIEK/FEIT] r.50/r.58: "50% minder allergierisico / bewezen preventie" → HA heeft geen bewezen preventief effect.
- [FEIT] r.112-113: standaard HA ≠ behandeling koemelkallergie (dat vraagt eHF/aminozuur op recept); intro/titel verduidelijken.
- [FEIT] r.73-74: "60%/40% kans" verzonnen precisie → "sterk verhoogd risico".
- [FEIT] r.126: "2-3% koemelkallergie" correct. Noodprotocol met 112 (r.343-360) goed.
- [TAAL] r.314 "Medicijnbaby" onduidelijk; r.370 weggevallen pijlen.

**`lactosevrije-flesvoeding`** (inhoudelijk sterk)
- [FEIT] r.290-291: "<1% / zeldzaam" + afbakening vs koemelkallergie correct — behouden.
- [FEIT] r.87-88: "HiPP enige bio lactosevrije optie" absolute claim; verifiëren/verzachten.
- [STIJL/FEIT] r.255/r.464: "40-80% duurder", "€200-400 besparen" bronloos; markeren.
- [TAAL] r.343-374/476-481: leidende spaties in koppen (weggehaalde emoji) opruimen.

**`verschil-startvoeding-opvolgmelk`**
- [KRITIEK/FEIT] r.62-64 + r.127/r.136: ijzer "4-6 mg/100ml" en "6× meer" → ~1,0-1,3 mg/100ml (~1,5-2× meer).
- [FEIT] r.288-298/r.685: "citaten" van JGZ/NVK/Voedingscentrum als woordelijk gepresenteerd zonder bron; als parafrase framen.
- [FEIT] r.334-335: "opvolgmelk goedkoper door minder strenge regulatie" twijfelachtig; nuanceren.
- [STIJL] r.728 Engelse kop "Informed Choice, Not Pressure" vertalen; marktaandelen r.95/104/113 bronloos.

**`wanneer-overstappen-opvolgmelk`** (kernboodschap correct)
- [VOLLEDIGHEID] r.346: kop "5 Belangrijke Factoren" maar er zijn er 3; corrigeren.
- [STIJL/FEIT] r.314/r.337-339: "uit de praktijk"-claims circulair/bronloos; herformuleren.
- [FEIT] 6-mnd-minimum en koemelk vanaf 12 mnd correct — behouden.

### problemen-oplossen (medisch — zie ook top-prioriteiten)

**`allergische-reacties-flesvoeding`**
- [KRITIEK] r.54-61: noodprotocol "0-30 sec" + EpiPen-instructies → "bel 112, volg centralist".
- [KRITIEK/FEIT] r.42/r.55-56: anafylaxie als hoofdscenario; benoem dat het zeldzaam is, meeste KMA traag/mild.
- [FEIT] r.94/r.144: prevalentie "2-7%" → "ongeveer 2-3%".
- [FEIT] r.67-68/r.249: "volledig vergoed" → "bij medische indicatie meestal vergoed, vraag zorgverzekeraar".
- [VOLLEDIGHEID] differentiaal koemelkallergie vs lactose-intolerantie ontbreekt (er wordt wel naar lactosevrij gelinkt).
- [FEIT] r.48: "vroege introductie <6 mnd als risicofactor" misleidend; schrappen/nuanceren.
- [TAAL] Engelse termen (r.83/94/131) vertalen; r.36 "maag-darm klachten" → "maag-darmklachten".

**`baby-drinkt-niet-genoeg`**
- [FEIT] r.58-70: "0-1 mnd 150-200 ml/kg" bovengrens te hoog → ~150 ml/kg als basis.
- [FEIT/VEILIGHEID] r.105: dehydratie-drempel "<3 natte luiers" te laat → "duidelijk minder dan normaal, bijv. <6/dag".
- [VOLLEDIGHEID] geen medische disclaimer; toevoegen.
- [TAAL] r.42 "probleemoplossings-gids"; r.424 "geduld is een schone zaak" → "...deugd".
- [VEILIGHEID] alarmsignalen (fontanel, droge mond, lethargie) correct — sterker aan spoed koppelen.

**`constipatie-door-flesvoeding`**
- [KRITIEK/VEILIGHEID] r.205-217: "extra water 10-15ml per fles" + "gefilterd water" → schrappen; juiste verhouding, niet verdunnen zonder overleg.
- [VEILIGHEID] r.279-292 "NOOIT" (honing <12mnd, geen laxeermiddelen, geen thermometerstimulatie) correct — behouden.
- [FEIT] r.265: pruimensap 15-30ml alleen bij bijvoeding/overleg framen.
- [VOLLEDIGHEID] medische disclaimer toevoegen.
- [TAAL] r.54 "ontlasting patronen" → "ontlastingspatronen"; r.131 "samenstelling verschillen" → "samenstellingsverschillen".

**`diarree-en-flesvoeding`** (meest urgente — zie top 1 & 2)
- [KRITIEK] r.368-379: verdunnings-/opbouwschema vervangen door "onverdund doorvoeden + ORS los".
- [KRITIEK] r.337-341: verzonnen/foute telefoonnummers verwijderen.
- [KRITIEK/FEIT] r.55-68/r.99: "rectaal meten" als thuisadvies schrappen.
- [VEILIGHEID] r.268/r.86: koortsdrempel <3 mnd → elke koorts ≥38°C = direct arts.
- [FEIT] r.125/131/387: verzonnen percentages (tellen niet op) schrappen.
- [TAAL] r.156 "Peurig" → "brijig/papperig"; r.341 "telefoonie" geen woord.
- [VOLLEDIGHEID] koemelkallergie-differentiaal bij aanhoudende diarree ontbreekt.

**`krampjes-na-flesvoeding`**
- [KRITIEK/CODE] r.13-32: dode `sidebarImages`/`adTopics` buiten component.
- [FEIT] r.99-140: verzonnen oorzaak-percentages (overlappen/tellen niet op) schrappen.
- [FEIT] r.420-423: "flesvoeding geeft meer krampjes" niet onderbouwd; koliek komt bij alle baby's voor.
- [FEIT] r.113/r.539: "zelf overstappen op HA na 2 weken" → alleen in overleg.
- [FEIT] r.246-248: Infacol/Espumisan effect niet bewezen; als "bewijs beperkt, overleg" framen.
- [FEIT] r.368: L. reuteri-bewijs vooral bij borstvoeding; afzwakken.
- [VEILIGHEID] koortsdrempel <3 mnd + rectaal meten (zie diarree).
- [TAAL] r.59 "Ontroosstbaar"→"ontroostbaar"; r.386 "duuren"→"duren"; r.113 "caseine"→"caseïne".

### voedingstechnieken

**`boertje-laten-tijdens-voeding`**
- [FEIT] r.62-66: intervallen "na 30ml/60ml" bronloos; als vuistregel labelen. r.251: koliek-claim afzwakken.
- [FEIT] r.186-188: "'s nachts altijd boertje" nuanceren.
- [TAAL] r.230 "oncomfort" → "ongemak"; React `key={index}`-bug in meerdere maps.
- [VOLLEDIGHEID] geen bronvermelding (Voedingscentrum/JGZ) toevoegen.

**`fles-bereiden-stap-voor-stap`**
- [KRITIEK/FEIT] r.100: "koken → 70°C" → NL koud kraanwater / 30-35°C, hele stapvolgorde herzien.
- [KRITIEK/FEIT] r.128: doeltemp "37°C" → 30-35°C.
- [KRITIEK/FEIT] r.149-150: "binnen 2 uur / max 2 uur bewaren" → vers direct, vooraf max 8u/4°C.
- [VOLLEDIGHEID] handen wassen, geen warm kraanwater, test op pols toevoegen; artikel is erg summier voor "stap voor stap".
- [TAAL] r.76 "Proper hygiëne" → "Goede hygiëne".

**`juiste-houding-bij-flesvoeding`**
- [FEIT] r.177: wiegendood-koppeling aan voedingshouding schrappen/nuanceren (verslikking/oorontsteking klopt).
- [FEIT] r.76-77: "45°-regel" als richtlijn i.p.v. harde norm.
- [TAAL] r.305/r.540 "houding problemen" → "houdingsproblemen".
- [STIJL] r.391-403: "Populaire Nederlandse merken" deels niet-NL; "Pregnancy Pillow" is producttype geen merk.

**`juiste-temperatuur-controleren`** (zwaar — zie top 7 & 8)
- [KRITIEK/FEIT] r.99-116: verzonnen "UMCG/TNO/EU/JGZ"-onderzoeken verwijderen.
- [KRITIEK/FEIT] hele "37°C is de norm"-frame → 30-35°C (37°C hooguit als bovengrens/lichaamstemp).
- [KRITIEK/FEIT] r.627-647: magnetron "absoluut niet" → mag mits 600W, schudden, testen.
- [FEIT] r.138-152: temperatuurgrenzen (32°C/42°C/45°C) bronloos/tegenstrijdig; r.288/312: thermometer-precisie + prijzen als indicatief.
- [TAAL] "oppervlakte temperatuur"/"temperatuur controle/wisseling/weergave" → samenstellen; r.605 "convenient"/r.803 "standby".

**`baby-leren-zelf-drinken`**
- [FEIT] r.45-52/138: beker-timing te laat → start ~6-8 mnd (Voedingscentrum).
- [KRITIEK] r.146-147 + r.189-193: verzonnen "95% op 15 mnd" + "Nederlandse Baby Statistieken (2024)"-tabel verwijderen.
- [FEIT] r.40: "pincer grasp" (9-10 mnd) inconsistent met "vanaf 6 mnd zelf drinken".
- [TAAL] r.73 objectkey `activiteities` → `activiteiten` (rendert nu leeg — functionele bug); r.162 "Elk baby" → "Elke baby ... zich".
- [STIJL] sterke Engelse doorspekking + r.245 verzonnen "25% korting".

**`overgang-naar-beker`**
- [KRITIEK/FEIT] r.16-32/258-278/325: hele tijdlijn verouderd → start ~6-8 mnd, fles afbouwen vóór 1 jaar; 18-24 mnd-fase schrappen.
- [FEIT] r.325/r.1167: "consultatiebureau adviseert start 10-12 mnd" onjuist.
- [KRITIEK] r.393-435: verzonnen statistiekentabel verwijderen. r.256-278: dode `volumeRequirements`-data.
- [STIJL] r.83-132: dode `premiumBrands`-array (JSX hardcodet merken apart) → dubbele waarheid opruimen; r.675 "IKEA BÖRJA" is geen bekerserie.
- [VOLLEDIGHEID] ontbreekt: fles niet te lang gebruiken (gebit/overgewicht), water uit beker als dorstlesser.

**`verschillende-spenen-uitproberen`**
- [KRITIEK/CODE] r.13-33: dode `sidebarImages`/`adTopics` buiten component.
- [FEIT] r.46-66: speenmaten framen op drinkgedrag, niet op leeftijd (Voedingscentrum).
- [FEIT] r.285-291: "gaatje vergroten met naald" afraden (verslikkingsrisico) → van speen wisselen.
- [KRITIEK/CODE] r.151-197/483-518: datavelden door elkaar (flows/types/availability) + lege sterren-render.
- [TAAL] r.112 "ortodontisch" → "orthodontisch"; r.115/354 "verslijkt" → "verslikt".
- [STIJL] "STAP/LEVEL/BASIS PAKKET"-toon + r.368-370 bronloze koliek-claim.

**`voeden-van-tweeling`** (zie top 3)
- [KRITIEK] r.22: "6-8 flessen vooruit, 24u bewaren" → vers per voeding.
- [VOLLEDIGHEID] "Let op": nooit twee baby's tegelijk met vastgezette flessen zonder toezicht (verstikking).
- [KRITIEK] r.14/20/71/138/143/147: verzonnen percentages (60%/75%/80%/78%/85%) schrappen.
- [FEIT] r.51-60: "860 ml per baby 0-2 mnd" te hoog; koppelen aan gewicht/calculator.
- [STIJL] r.398-427: verzonnen testimonials; r.220-223 "7 uur besparing!" overdreven; React `key`-bug r.238/327/353.
- [TAAL] r.9/113 "survival" vernederlandsen; r.304 ontbrekende scheiding.

### praktische-tips

**`baby-terugleggen-na-nachtvoeding`**
- [VOLLEDIGHEID] toevoegen: nooit fles mee in bed (verslikking + tandbederf).
- [FEIT] r.38: kamertemp "16-20°C" ok, maar inconsistent met en-slapen (18-20°C); gelijktrekken.
- Overigens netjes (je-vorm, geen em-dashes, geen verzonnen cijfers).

**`beste-melkmachine-flesvoeding`**
- [STIJL] em-dashes (—) door hele bestand (r.48/114/224/227/311/369/408) vervangen.
- [STIJL] metadata (title/description) ontbreekt volledig; toevoegen (SEO).
- [VEILIGHEID/VOLLEDIGHEID] machines verwarmen vaak <70°C; vermeld dat dit Cronobacter-risico niet wegneemt (jonge/kwetsbare baby's).
- [STIJL/FEIT] verzonnen Bol-scores/prijzen (r.148-152/204-208/334) als indicatief; r.408/114 "compatible" → "compatibel".

**`flesvoeding-bij-warm-weer`** (sterk artikel)
- [FEIT] r.50: "langer dan een uur op kamertemperatuur" → half uur (consistent met Voedingscentrum/houdbaarheid).
- [FEIT] r.54: "<6 natte luiers = uitdroging" kan onnodig ongerust maken → "rond zes, en zeker <4 is alarm".
- [FEIT] r.37 (5-10 ml water onder 6 mnd, nooit verdunnen) correct — behouden.
- [STIJL] Title Case-koppen; r.214 "700-1000 ml meer" bronloos, zachter formuleren.

**`flesvoeding-en-slapen`**
- [KRITIEK/VEILIGHEID] geen veilig-slapen/fles-in-bed-waarschuwing; toevoegen (rug, nooit fles in bed).
- [FEIT] r.150-174: pseudowetenschap (CCK, cortisol, "2-4u vs 1-3u") afzwakken/bronnen; kop "Wetenschappelijke Basis" misleidend.
- [TAAL] veel Engels ("Increase dag intake", "Coolere kamer", "bicycles legs", "Pickup/Putdown") vertalen.
- [TAAL] r.168/212/304: weggevallen scheidingstekens (dubbele spaties) herstellen.

**`flesvoeding-op-vakantie`**
- [KRITIEK/VEILIGHEID] centraal reisadvies ontbreekt: geen klaargemaakte fles meenemen; poeder + water gescheiden, vers bereiden.
- [KRITIEK/FEIT] r.107: "alleen flessenwater" onvolledig (flessenwater niet steriel; ook koken/≥70°C bij exotische bestemming).
- [TAAL] veel Engels/steenkolen-NL (r.40/92/99/104/140-152) volledig vertalen.
- [CODE] React `key={index}`-bug (r.235/246/278/…); r.9/166 Title Case; r.600 "formula" → "flesvoeding".

**`voedingsritme-opbouwen`** (feitelijk sterk)
- [FEIT] r.480-482 "uit onderzoek" + r.186 "70% van baby's": bron toevoegen of afzwakken.
- [FEIT] r.419-420 (wakker maken overdag eerste weken) correct; r.216-218 warm weer → overleg correct.
- [TAAL] Engels ("Gently wakker maken", "responsive feeding", "Partner involvement") + r.306 "Groeispurts (Groeispurts)" dubbel.
- [STIJL] Title Case-koppen; "2026" in titel.

**`flesvoeding-werk-combineren`**
- [FEIT] r.150: "kinderopvang vanaf 10 weken" → vanaf 6 weken (einde bevallingsverlof).
- [FEIT] r.148: "16 weken zwangerschapsverlof" → "16 weken zwangerschaps- en bevallingsverlof (totaal)".
- [STIJL] r.381-395: verzonnen bedragen (€150/mnd, €300-600) markeren; r.127-160 herhaalde "minder stress"-aanname ontdubbelen.
- [TAAL] leidende spaties in koppen (r.134/146/199/317) + weggevallen pijlen (r.204-216/367-368); veel anglicismen.

**`geld-besparen-flesvoeding`**
- [KRITIEK/STIJL] r.9/r.136: "tot 50% besparen" → tabel toont max ~40%; corrigeren.
- [FEIT] r.39-49: Hero Baby zowel "premium" als "budget"; interne tegenspraak; prijzen verifiëren.
- [FEIT] r.282-285: EU 2016/127 + NVWA-blok correct (huismerk gelijkwaardig) — behouden; "identiek" → "voldoet aan dezelfde eisen".
- [KRITIEK/CODE] r.12-32 dode arrays + sidebar verwijst naar niet-bestaande `/images/budget-*.jpg`; koppelen aan echte `.webp`.
- [STIJL] r.343 "Honey" grotendeels stopgezet (eind 2025); r.64/58 verzonnen kortingspercentages; React `key`-bug r.254/374.

**`nachtvoeding-optimaliseren`**
- [KRITIEK/VEILIGHEID] veilig-slapen ontbreekt volledig (rug, nooit fles in bed); toevoegen.
- [FEIT] r.124: "6+ mnd water i.p.v. melk 's nachts" geen standaard advies; nuanceren/schrappen.
- [KRITIEK] r.536-548: verzonnen testimonials (naam+plaats) verwijderen; r.73-88/555 verzonnen prijzen + Perfect-Prep-reclame.
- [STIJL] r.567-572 "u"-vorm i.p.v. "je"; r.273/335/68 verzonnen percentages; r.13-32 dode arrays; React `key`-bug; weggevallen pijlen r.39/48/49.

**`partner-betrekken-flesvoeding`**
- [KRITIEK/STIJL] massale verengelsing ("Communication protocols", "Morning briefing", "off duty", …) volledig verdutsen.
- [FEIT] r.827: "€2000+ verloren productiviteit" verzonnen; schrappen.
- [FEIT] r.211/r.711: terminologie "vaderschapsverlof" → geboorteverlof/partnerverlof; r.695 "2024" dateren.
- [FEIT] r.55/r.845 onbewezen "sterker partnerschap/levenslang"-claims nuanceren.
- [TAAL] r.857 "de perfect flesvoeding routine" → "perfecte"; r.389-393 "Nederlandse familie apps" (Cozi/Todoist zijn niet NL) → "Handige apps".

### veiligheid

**`terugroepacties-babyvoeding-2026`** (feitelijk solide, kernverhaal klopt met NVWA/RASFF)
- [FEIT/VOLLEDIGHEID] belangrijkste omissie: Franse babysterfgevallen/OM-onderzoeken niet genoemd — mét de nuance dat geen causaal verband is vastgesteld.
- [FEIT] r.45 vs r.15/r.95: landental inconsistent (63 vs 60+); "ruim 60" aanhouden.
- [FEIT] r.48: Foodwatch-strafklacht verifiëren of naar bevestigd OM-onderzoek herformuleren.
- [FEIT] r.49/r.38-39: EFSA-getallen + batchnummers vóór publicatie tegen NVWA/EFSA-primaire bron checken.
- [STIJL] r.449 "stand van zaken 12 feb 2026" → "laatst gecontroleerd" + actualiseren; em-dashes (—) vervangen.

---

## 4. Aanpak-suggestie

Gezien het volume raad ik een gefaseerde uitvoering aan:

1. **Ronde 1 — veiligheid/medisch** (sectie 1, punten 1-6 + 12): diarree, constipatie, allergie,
   tweeling, en de slaap-/nachtartikelen. Deze raken direct de gezondheid van baby's.
2. **Ronde 2 — harde feitfouten** (sectie 1, punten 7-11 + 13): gefabriceerde bronnen/statistieken,
   ijzer, DHA, HA-claim, beker-timing.
3. **Ronde 3 — terugkerende patronen** (sectie 2) in één sweep: 70°C/8u/37°C/magnetron, verzonnen
   cijfers, testimonials, em-dashes, dode code, React-keys, verengelsing.
4. **Ronde 4 — per-artikel resterende TAAL/STIJL** (sectie 3).

Dit kan grotendeels via dezelfde parallelle-agent-aanpak per categorie, met een build + `lint:kennisbank`
na elke ronde.
