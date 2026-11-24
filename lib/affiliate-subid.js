// Leest de subId die we op bol-links zetten terug (zie bolSubId in
// lib/experiments.tsx en tagBolLink in togwaarde/components/AffiliateProductWidget.jsx).
// Vorm: `<blok>_<pagina>[_<variant>]`.

export const SUBID_WIDGETS = {
  pp: { website: 'flesvoedingcalculator', label: 'Populaire producten' },
  rb: { website: 'flesvoedingcalculator', label: 'Producten bij het resultaat' },
  aw: { website: 'flesvoedingcalculator', label: 'Productblok op pagina' },
  tg: { website: 'togwaarde', label: 'Productblok togwaarde' }
}

/** @returns {{ website: string|null, widget: string, label: string, page: string|null, arm: string|null } | null} */
export function parseSubId(subId) {
  if (!subId) return null
  const s = String(subId).trim()
  // Oude vorm uit de eerste A/B-test: `<experiment>_<variant>`
  const legacy = s.match(/^calc_result_block_(.+)$/)
  if (legacy) {
    return { website: 'flesvoedingcalculator', widget: 'ab', label: 'A/B-test resultaatblok', page: 'home', arm: legacy[1] }
  }
  const parts = s.split('_')
  const w = SUBID_WIDGETS[parts[0]]
  if (!w || parts.length < 2) return { website: null, widget: s, label: s, page: null, arm: null }
  // De pagina is het pad met '-' in plaats van '/', bijvoorbeeld
  // `kennisbank-voeding-hoeveel-ml` (lange paden: alleen het eind).
  return { website: w.website, widget: parts[0], label: w.label, page: parts[1], arm: parts[2] || null }
}
