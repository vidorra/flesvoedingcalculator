/**
 * FaqSection - Lazy-loaded FAQ component
 *
 * Separated from main page to enable code splitting and lazy loading.
 * FAQ content is secondary content that appears below the fold.
 *
 * Performance: Reduces initial bundle size by ~1.5KB
 */
export default function FaqSection() {
  return (
    <div className="bg-white backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
      <h2 className="font-medium text-primary mb-4">Meest Gestelde Vragen</h2>
      <div className="space-y-4">
        <div className="pb-4 rounded-xl border border-gray-200 bg-white">
          <h3 className="font-medium text-primary mb-2">Welk merk flesvoeding is het beste?</h3>
          <p className="text-gray-600">
            Alle Nederlandse merken voldoen aan dezelfde strenge EU-eisen. Kruidvat huismerk is even veilig als Nutrilon of Hero Baby, maar wel goedkoper. Kies op basis van budget en beschikbaarheid.
          </p>
        </div>

        <div className="pb-4 rounded-xl border border-gray-200 bg-white">
          <h3 className="font-medium text-primary mb-2">Hoeveel kost flesvoeding per maand?</h3>
          <p className="text-gray-600">
            Budget variant (Kruidvat): €35-50/maand. Middenklasse (Hero Baby): €50-70/maand. Hoogwaardig (Nutrilon): €70-90/maand. Eerste jaar totaal: €400-1000 afhankelijk van merkkeuze.
          </p>
        </div>

        <div className="pb-4 rounded-xl border border-gray-200 bg-white">
          <h3 className="font-medium text-primary mb-2">Wanneer overstappen van nummer 1 naar 2?</h3>
          <p className="text-gray-600">
            Pas vanaf 6 maanden én wanneer baby vaste voeding krijgt. Nummer 1 mag tot 12 maanden gebruikt worden. Overstappen is dus optioneel, niet verplicht.
          </p>
        </div>

        <div className="pb-4 rounded-xl border border-gray-200 bg-white">
          <h3 className="font-medium text-primary mb-2">Kan ik van borstvoeding overstappen naar flesvoeding?</h3>
          <p className="text-gray-600">
            Ja, dit kan op elke leeftijd. Geleidelijke overgang over 1-2 weken voorkomt borstontsteking. Combivoeiding (borstvoeding + flesvoeding) is ook mogelijk.
          </p>
        </div>

        <div className="pb-4 rounded-xl border border-gray-200 bg-white">
          <h3 className="font-medium text-primary mb-2">Mijn baby weigert de fles, wat nu?</h3>
          <p className="text-gray-600">
            Check temperatuur (37°C), probeer andere speen, laat partner proberen, gebruik afgekolfde melk eerst. Geduld is belangrijk - sommige baby's hebben tijd nodig.
          </p>
        </div>
      </div>
    </div>
  )
}
