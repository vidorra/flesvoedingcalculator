import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import AffiliateProductWidget from '../../../../components/AffiliateProductWidget'
import { AlertTriangle, AlertCircle, CheckCircle, Shield, Search, Phone, ExternalLink, Clock } from 'lucide-react'

export const metadata = {
  title: 'Terugroepacties Babyvoeding 2026: Alles Wat Ouders Moeten Weten',
  description: 'Overzicht van de cereulide-terugroepacties van Nutrilon, Nestlé en andere merken. Controleer batchnummers, vind veilige alternatieven en lees praktisch advies voor Nederlandse ouders.',
}

export default function TerugroepactiesBabyvoeding2026Page() {

  const affectedBrands = [
    { brand: 'Nestlé', products: 'Little Steps, Alfamino, NAN OPTIPRO, SMA, BEBA, Guigoz', countries: '60+ landen', relevance: 'Hoog — direct verkocht in NL' },
    { brand: 'Danone', products: 'Nutrilon, Aptamil, Cow & Gate', countries: '20+ landen', relevance: 'Hoog — Nutrilon is marktleider in NL' },
    { brand: 'Lactalis', products: 'Picot', countries: '18 landen', relevance: 'Laag — niet in NL-winkels' },
    { brand: 'Hochdorf', products: 'Bimbosan', countries: 'Diverse landen incl. NL', relevance: 'Gemiddeld — geitenmelk niche' },
    { brand: 'Vitagermine', products: 'Babybio', countries: 'Frankrijk, België', relevance: 'Gemiddeld — via biowebshops in NL verkrijgbaar' },
    { brand: 'Popote', products: 'Popote', countries: 'Frankrijk', relevance: 'Laag — niet in NL verkrijgbaar' },
  ]

  const safeBrands = [
    { brand: 'Hero Baby / Hero Nutrasense', note: 'Officieel niet betrokken; Hero heeft dit bevestigd op hun website' },
    { brand: 'HiPP Biologisch', note: 'Officieel statement gepubliceerd dat zij niet getroffen zijn' },
    { brand: 'Holle', note: 'Officieel bevestigd middels leveranciersverificatie' },
    { brand: 'Kabrita (geitenmelk)', note: 'Nederlands merk (Ausnutria), geen betrokkenheid gevonden' },
    { brand: 'Kruidvat huismerk', note: 'FrieslandCampina bevestigt geen link met Cabio Biotech' },
    { brand: 'Etos huismerk', note: 'Niet betrokken bij de cereulide-crisis' },
    { brand: 'Albert Heijn huismerk', note: 'Niet betrokken (let op: AH verkocht wel Nestlé Little Steps)' },
    { brand: 'Lebenswert', note: 'Biologisch merk, niet betrokken' },
    { brand: 'Nannycare (geitenmelk)', note: 'Nieuw-Zeelandse herkomst, geen recalls' },
  ]

  const nestleProducts = [
    { product: 'Nestlé Little Steps 1 (0-6 mnd)', packaging: '800g blik', batch: '51230346AC', tht: '30/11/2026' },
    { product: 'Nestlé Alfamino', packaging: '400g', batch: '51680017Y1', tht: '17/06/2027' },
    { product: 'NAN OPTIPRO 1', packaging: '800g', batch: '53370346AA, 53380346AA', tht: '31/12/2027' },
  ]

  const timeline = [
    { date: 'Eind november 2025', event: 'Nestlé detecteert lage concentraties cereulide tijdens routinecontroles in fabriek Nunspeet' },
    { date: '9 december 2025', event: 'Nestlé informeert de NVWA' },
    { date: '12 december 2025', event: 'Italië logt eerste RASFF-melding (referentienummer 2025.9962)' },
    { date: '5 januari 2026', event: 'Nestlé start publieke terugroepactie in 63 landen, inclusief Nederland' },
    { date: '21 januari 2026', event: 'Lactalis roept Picot-babyvoeding terug in 18 landen' },
    { date: '23 januari 2026', event: 'Danone roept Aptamil terug in Verenigd Koninkrijk en Ierland' },
    { date: '29 januari 2026', event: 'Foodwatch dient strafrechtelijke klacht in bij het Franse Openbaar Ministerie' },
    { date: '2 februari 2026', event: 'EFSA publiceert eerste acute referentiedosis voor cereulide: maximaal 0,054 μg/L in zuigelingenvoeding en 0,1 μg/L in opvolgmelk. Popote en Vitagermine (Babybio) trekken producten terug' },
    { date: '6 februari 2026', event: 'Grote Nutrilon-terugroepactie: 14 producttypen, 44+ batches in Nederland' },
  ]

  const usefulLinks = [
    { label: 'NVWA veiligheidswaarschuwingen', url: 'nvwa.nl' },
    { label: 'Nutrilon batchchecker', url: 'nutriciavoorjou.nl/terugroepactie' },
    { label: 'Nestlé terugroepactie', url: 'nestlebabyvoeding.nl/terugroepactie' },
    { label: 'Voedingscentrum Q&A', url: 'voedingscentrum.nl' },
    { label: 'RASFF-portaal', url: 'webgate.ec.europa.eu/rasff-window/screen/search' },
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            {/* Header */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">Veiligheid &rsaquo; Terugroepacties Babyvoeding</div>
              <h1 className="text-2xl font-medium text-primary mb-3 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-primary" />
                Terugroepacties Babyvoeding 2026: Alles Wat Ouders Moeten Weten
              </h1>
              <p className="text-gray-600">
                Zes fabrikanten hebben babyvoeding teruggeroepen vanwege besmetting met cereulide, een hittebestendige gifstof.
                Het betreft de grootste terugroepactie van zuigelingenvoeding in de Europese geschiedenis. Controleer hier
                of jouw babyvoeding veilig is en wat je moet doen.
              </p>
            </div>

            {/* What happened */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Wat is er precies aan de hand?</h2>

              <p className="text-gray-700 mb-4">
                De huidige crisis draait om <strong>cereulide</strong>, een toxine geproduceerd door de bacterie <em>Bacillus cereus</em>.
                Dit toxine is hittebestendig: het wordt niet afgebroken door koken, pasteurisatie of sproeidrogen. De besmetting
                zit in <strong>ARA-olie</strong> (arachidonzuurolie), een essentieel vetzuur dat standaard aan zuigelingenvoeding
                wordt toegevoegd ter ondersteuning van de hersenontwikkeling.
              </p>

              <p className="text-gray-700 mb-4">
                De leverancier van de besmette olie is het Chinese bedrijf <strong>Cabio Biotech</strong> uit Wuhan. Omdat dit
                bedrijf aan meerdere grote fabrikanten leverde, breidde het probleem zich snel uit over de hele Europese markt
                en uiteindelijk naar <strong>meer dan 60 landen wereldwijd</strong>.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <h3 className="font-medium text-primary mb-2">Symptomen van cereulide-vergiftiging</h3>
                <p className="text-gray-700 mb-2">
                  Klachten treden op binnen <strong>30 minuten tot 6 uur</strong> na consumptie:
                </p>
                <ul className="space-y-1">
                  {['Hevig braken', 'Waterige diarree', 'Buikpijn', 'Lusteloosheid / opvallende slaperigheid'].map((symptom, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <AlertTriangle className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{symptom}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 text-sm mt-2">
                  Bij baby&apos;s jonger dan 6 maanden is het risico op uitdroging het grootst. De klachten verdwijnen meestal binnen 24 uur.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Chronologie: van detectie tot massale terugroepactie
              </h2>

              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-800">{item.date}</span>
                      <p className="text-gray-700">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 mt-4">
                <p className="text-gray-700">
                  <strong>Kritiek:</strong> Er verstreken bijna zes weken tussen de eerste detectie (eind november 2025) en
                  de publieke waarschuwing (5 januari 2026). Bovendien bleek dat de internationale standaardtest voor cereulide
                  in poedervorm waarden tot <strong>75 keer onderschatte</strong> vergeleken met tests op opgeloste melk.
                </p>
              </div>
            </div>

            {/* Recalled products NL */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Welke producten zijn teruggeroepen in Nederland?</h2>

              {/* Nestlé */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-800 mb-3">Nestlé (terugroepactie sinds 5 januari 2026)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-3 py-2 text-left">Product</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Verpakking</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Batchnummer</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">THT-datum</th>
                      </tr>
                    </thead>
                    <tbody>
                      {nestleProducts.map((item, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-3 py-2 font-medium">{item.product}</td>
                          <td className="border border-gray-300 px-3 py-2">{item.packaging}</td>
                          <td className="border border-gray-300 px-3 py-2">{item.batch}</td>
                          <td className="border border-gray-300 px-3 py-2">{item.tht}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-600 text-sm mt-2">
                  Contact: <strong>020-5699 699</strong> of consumentenservice@nl.nestle.com
                </p>
              </div>

              {/* Danone/Nutrilon */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-800 mb-3">Danone/Nutrilon (terugroepactie sinds 6 februari 2026)</h3>
                <p className="text-gray-700 mb-3">
                  Danone riep in Nederland <strong>14 Nutrilon-producten</strong> terug, met tientallen specifieke batchnummers:
                </p>
                <ul className="space-y-2 mb-3">
                  {[
                    'Nutrilon volledige zuigelingenvoeding 1 (800g, 600g en 1,2kg) — THT juli 2026 t/m december 2026',
                    'Nutrilon opvolgmelk 2 (800g, 600g en 1,2kg) — THT juni 2026 t/m februari 2027',
                    'Nutrilon opvolgmelk 3 (800g) — THT juni 2026 t/m december 2026',
                    'Nutrilon AR 2, Content 1, Duobalans 1 en 2',
                    'Nutrilon tabs (zuigelingenvoeding 1 en opvolgmelk 2)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 text-sm">
                  Controleer via de batchchecker op <strong>nutriciavoorjou.nl/terugroepactie</strong>.
                  Contact: <strong>0800 022 26 26</strong> of <strong>0800 022 08 22</strong> (gratis).
                </p>
              </div>

              {/* Bimbosan */}
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Hochdorf/Bimbosan</h3>
                <p className="text-gray-700">
                  Bimbosan riep geitenmelkformule terug: <strong>Bimbosan goat&apos;s milk 1</strong>, lotnummers 30484024 en 30484025.
                </p>
              </div>
            </div>

            {/* International overview */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Alle betrokken fabrikanten: het complete overzicht</h2>

              <p className="text-gray-700 mb-4">
                Dit overzicht is ook relevant voor Nederlandse ouders die babyvoeding uit het buitenland bestellen,
                bijvoorbeeld via Duitse webshops of tijdens vakanties.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-3 py-2 text-left">Fabrikant</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Merken</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Landen</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Relevantie voor NL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {affectedBrands.map((item, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 px-3 py-2 font-medium">{item.brand}</td>
                        <td className="border border-gray-300 px-3 py-2">{item.products}</td>
                        <td className="border border-gray-300 px-3 py-2">{item.countries}</td>
                        <td className="border border-gray-300 px-3 py-2">{item.relevance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  <strong>Let op:</strong> Aptamil wordt vaak via Duitse webshops of bij grensovergangen gekocht.
                  In het Verenigd Koninkrijk onderzoekt de UKHSA inmiddels 36 ziektegevallen bij zuigelingen die
                  Aptamil en Cow &amp; Gate consumeerden.
                </p>
              </div>
            </div>

            {/* Safe brands */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Welke babyvoeding is wél veilig?
              </h2>

              <p className="text-gray-700 mb-4">
                Merken die geen ingrediënten van Cabio Biotech afnemen, zijn niet betrokken.
                Diverse fabrikanten hebben dit inmiddels officieel bevestigd.
              </p>

              <div className="space-y-3">
                {safeBrands.map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>{item.brand}</strong> — {item.note}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 mt-4">
                <p className="text-gray-700 mb-3">
                  <strong>Belangrijk:</strong> ook bij Nutrilon en Nestlé geldt dat producten die <strong>niet</strong> op
                  de terugroeplijst staan, veilig zijn. Het gaat uitsluitend om de specifieke batchnummers. Het
                  Voedingscentrum bevestigt dat overstappen op een ander merk veilig is — alle zuigelingenvoeding in de
                  EU moet aan dezelfde strenge voedingseisen voldoen (EU Verordening 2016/127).
                </p>
                <p className="text-gray-700">
                  <strong>FrieslandCampina</strong>, de vermoedelijke producent achter diverse huismerkbabyvoeding in Nederland,
                  heeft expliciet bevestigd <strong>niet met Cabio Biotech samen te werken</strong> en geen productieproblemen te hebben.
                </p>
              </div>
            </div>

            {/* Practical advice */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4 flex items-center">
                <Search className="w-5 h-5 mr-2" />
                Praktisch advies: zo controleer je of jouw babyvoeding veilig is
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Stap 1: Zoek het batchnummer</h3>
                  <p className="text-gray-700">
                    Dit staat meestal op de onderkant van het blik, op de zijkant van de doos, of op de achterkant
                    van het zakje, vaak naast of bij de houdbaarheidsdatum (THT).
                  </p>
                </div>

                <div className="border-b border-gray-200"></div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Stap 2: Controleer online</h3>
                  <p className="text-gray-700">
                    Gebruik de batchchecker van Nutrilon op <strong>nutriciavoorjou.nl/terugroepactie</strong>,
                    of bekijk de Nestlé-pagina op <strong>nestlebabyvoeding.nl/terugroepactie</strong>.
                    De NVWA publiceert alle officiële veiligheidswaarschuwingen op <strong>nvwa.nl</strong>.
                  </p>
                </div>

                <div className="border-b border-gray-200"></div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Stap 3: Bij een match, niet meer gebruiken</h3>
                  <p className="text-gray-700">
                    Geef de voeding niet meer aan je baby. Breng het product terug naar de winkel voor volledige
                    terugbetaling — ook zonder kassabon. Foodwatch adviseert om de verpakking en eventuele restanten
                    te bewaren als bewijsmateriaal.
                  </p>
                </div>

                <div className="border-b border-gray-200"></div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Stap 4: Overstappen</h3>
                  <p className="text-gray-700 mb-2">
                    Kies een alternatief merk dat niet op de terugroeplijst staat. Geleidelijk overstappen
                    (over een paar dagen mengen) is het prettigst voor je baby&apos;s maag, maar bij urgentie is
                    direct overstappen verantwoord.
                  </p>
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-3">
                    <p className="text-gray-700 text-sm">
                      <strong>Gebruik nooit</strong> gewone koemelk, geitenmelk, haver- of sojamelk als vervanging
                      voor zuigelingenvoeding — deze zijn absoluut ongeschikt voor baby&apos;s jonger dan 12 maanden.
                    </p>
                  </div>
                </div>

                <div className="border-b border-gray-200"></div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Stap 5: Let op symptomen</h3>
                  <p className="text-gray-700 mb-2">
                    Cereulide veroorzaakt klachten binnen 30 minuten tot 6 uur: hevig braken, waterige diarree,
                    buikpijn en opvallende slaperigheid.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Bij deze symptomen: <strong>neem direct contact op met je huisarts</strong> of het consultatiebureau</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Bij tekenen van ernstige uitdroging (geen tranen, droge luier langer dan 6 uur, extreme slaperigheid): <strong>bel 112</strong></span>
                    </li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-2">
                    Geen symptomen gehad? Dan hoef je je volgens het Voedingscentrum geen zorgen te maken, zelfs als
                    je kind een getroffen batch heeft gehad.
                  </p>
                </div>

                <div className="border-b border-gray-200"></div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Melden bij de NVWA</h3>
                  <p className="text-gray-700">
                    Vermoed je dat je baby ziek is geworden van babyvoeding — ook als het niet om een teruggeroepen
                    batch gaat — meld dit dan bij de NVWA. Zij hebben inmiddels <strong>tientallen meldingen</strong> ontvangen
                    en ook nog <strong>13 meldingen</strong> over producten van andere producenten dan Nestlé of Danone
                    die momenteel worden onderzocht.
                  </p>
                </div>
              </div>
            </div>

            {/* How the safety system works */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Hoe het veiligheidssysteem werkt — en waar het faalde</h2>

              <p className="text-gray-700 mb-4">
                Het Europese voedselveiligheidssysteem rust op meerdere pijlers: fabrikanten met HACCP-systemen,
                de NVWA voor nationaal toezicht, het RASFF-systeem voor Europese coördinatie, en de EFSA voor
                wetenschappelijke risicobeoordelingen.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Zwakte 1: Geen wettelijke grenswaarde</h3>
                  <p className="text-gray-700">
                    Vóór 2 februari 2026 bestond er <strong>geen wettelijke grenswaarde voor cereulide</strong> in
                    zuigelingenvoeding, nergens ter wereld. Fabrikanten waren niet verplicht hierop te testen.
                  </p>
                </div>

                <div className="border-b border-gray-200"></div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Zwakte 2: Onbetrouwbare testmethode</h3>
                  <p className="text-gray-700">
                    De standaardtestmethode voor cereulide in poedervorm bleek concentraties <strong>tot 75 keer
                    te onderschatten</strong> vergeleken met tests op aangemengde melk — precies de vorm waarin
                    baby&apos;s het product consumeren.
                  </p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Conclusie</h2>

              <p className="text-gray-700 mb-4">
                Voor ouders is de praktische boodschap helder: <strong>controleer het batchnummer</strong> op je
                Nutrilon- of Nestlé-verpakking via de websites van de fabrikanten. Producten die niet op de lijst
                staan, zijn veilig. Wie wil overstappen, kan dat zonder voedingskundige bezwaren doen naar elk
                ander EU-goedgekeurd merk.
              </p>

              <p className="text-gray-700 mb-4">
                De situatie is nog in ontwikkeling — de NVWA en EFSA kunnen aanvullende batches of producten
                toevoegen naarmate de tracering vordert. Het is daarom verstandig om de fabrikantwebsites en
                nvwa.nl regelmatig te raadplegen.
              </p>

              {/* Useful links */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h3 className="font-medium text-primary mb-3">Nuttige links</h3>
                <div className="space-y-2">
                  {usefulLinks.map((link, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <ExternalLink className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>{link.label}</strong> — {link.url}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-500 text-sm mt-4 italic">
                Stand van zaken: 12 februari 2026. Dit artikel wordt bijgewerkt zodra nieuwe informatie beschikbaar komt.
              </p>
            </div>

            {/* Affiliate Products */}
            <AffiliateProductWidget
              pageId="veiligheid_terugroepacties-babyvoeding-2026"
              title="Veilige Babyvoeding Producten"
            />

            {/* Medical Disclaimer */}
            <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-amber-800 mb-1">Medische Disclaimer</h3>
                  <p className="text-sm text-amber-700">
                    De informatie op deze pagina is alleen voor informatieve doeleinden en vervangt geen professioneel medisch advies.
                    Raadpleeg altijd uw kinderarts of een gekwalificeerde zorgverlener voor specifieke medische vragen.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-primary mb-4">Gerelateerde Artikelen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link
                  href="/kennisbank/veiligheid"
                  className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
                >
                  <div className="font-medium text-gray-700">Veiligheid</div>
                  <div className="text-gray-600">Alle veiligheidsartikelen</div>
                </Link>
                <Link
                  href="/kennisbank/hygiene-bereiding/flesvoeding-bewaren"
                  className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors"
                >
                  <div className="font-medium text-gray-700">Flesvoeding Bewaren</div>
                  <div className="text-gray-600">Veilig bewaren van flesvoeding</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <KennisbankSidebar
          images={[
            {
              src: "/baby.webp",
              alt: "Veilige babyvoeding",
              caption: "Controleer altijd het batchnummer"
            },
            {
              src: "/mother_and_baby.webp",
              alt: "Moeder met baby",
              caption: "Veiligheid van je baby staat voorop"
            }
          ]}
          adTopics={["Baby Veiligheid", "Flesvoeding"]}
        />
      </div>
    </Layout>
  )
}
