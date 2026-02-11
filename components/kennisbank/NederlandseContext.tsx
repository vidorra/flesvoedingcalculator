/**
 * NederlandseContext - Lazy-loaded Dutch context component
 *
 * Separated from main page to enable code splitting and lazy loading.
 * Context information is supplementary content that appears below the fold.
 *
 * Performance: Reduces initial bundle size by ~1.2KB
 */
export default function NederlandseContext() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <h2 className="font-medium text-gray-600 mb-4">Flesvoeding in Nederland</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium text-gray-600 mb-3">Regelgeving & Veiligheid:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
              <span>Alle merken voldoen aan EU-verordening 2016/127</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
              <span>NVWA controleert regelmatig kwaliteit</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
              <span>DHA verplicht in alle flesvoeding sinds 2020</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
              <span>Nederlandse kraanwater is veilig voor bereiding</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
              <span>Gratis advies via consultatiebureau</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-gray-600 mb-3">Beschikbaarheid & Kosten:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
              <span>Breed assortiment in alle supermarkten</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
              <span>Budget opties vanaf €35/maand (Kruidvat)</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
              <span>Hoogwaardige merken tot €90/maand (Nutrilon)</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
              <span>Biologische opties verkrijgbaar (HIPP, Holle)</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
              <span>Online bestelling met korting mogelijk</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
