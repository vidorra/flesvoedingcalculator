import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { verifyAdminAndGetWebsite } from '../../../lib/jwt-utils.js'

// Force dynamic route
export const dynamic = 'force-dynamic'

const DATA_DIR = path.join(process.cwd(), 'data', 'admin')
const PAGE_SNIPPETS_FILE = path.join(DATA_DIR, 'page-snippets.json')

// Verify admin JWT token
function isAuthenticated(request) {
  try {
    verifyAdminAndGetWebsite(request)
    return true
  } catch {
    return false
  }
}

// Load page snippets to calculate real snippet counts
function loadPageSnippets() {
  if (!fs.existsSync(PAGE_SNIPPETS_FILE)) {
    return {}
  }
  
  try {
    const data = fs.readFileSync(PAGE_SNIPPETS_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading page snippets file:', error)
    return {}
  }
}

// Production-safe pages list with dynamic snippet counts
function getKnownPages() {
  const pageSnippets = loadPageSnippets()
  
  // Pages for both websites
  const basePages = [
    // === Flesvoedingcalculator pages ===
    { id: 'hygiene-bereiding_flessen-steriliseren', title: 'Flessen Steriliseren', path: '/kennisbank/hygiene-bereiding/flessen-steriliseren', category: 'hygiene-bereiding', website: 'flesvoedingcalculator' },
    { id: 'basis-flesvoeding_flesvoeding-vs-borstvoeding', title: 'Flesvoeding vs Borstvoeding', path: '/kennisbank/basis-flesvoeding/flesvoeding-vs-borstvoeding', category: 'basis-flesvoeding', website: 'flesvoedingcalculator' },
    { id: 'voedingstechnieken_overstappen-van-borst-naar-fles', title: 'Overstappen van Borst naar Fles', path: '/kennisbank/voedingstechnieken/overstappen-van-borst-naar-fles', category: 'voedingstechnieken', website: 'flesvoedingcalculator' },
    { id: 'basis-flesvoeding_eerste-keer-flesvoeding-geven', title: 'Eerste Keer Flesvoeding Geven', path: '/kennisbank/basis-flesvoeding/eerste-keer-flesvoeding-geven', category: 'basis-flesvoeding', website: 'flesvoedingcalculator' },
    { id: 'hygiene-bereiding_juiste-temperatuur-controleren', title: 'Juiste Temperatuur Controleren', path: '/kennisbank/hygiene-bereiding/juiste-temperatuur-controleren', category: 'hygiene-bereiding', website: 'flesvoedingcalculator' },
    { id: 'soorten-flesvoeding_bio-organische-flesvoeding', title: 'Bio en Organische Flesvoeding', path: '/kennisbank/soorten-flesvoeding/bio-organische-flesvoeding', category: 'soorten-flesvoeding', website: 'flesvoedingcalculator' },
    { id: 'basis-flesvoeding_flesvoeding-bij-premature-babys', title: 'Flesvoeding bij Premature Baby\'s', path: '/kennisbank/basis-flesvoeding/flesvoeding-bij-premature-babys', category: 'basis-flesvoeding', website: 'flesvoedingcalculator' },
    { id: 'soorten-flesvoeding_hypoallergene-flesvoeding', title: 'Hypoallergene Flesvoeding', path: '/kennisbank/soorten-flesvoeding/hypoallergene-flesvoeding', category: 'soorten-flesvoeding', website: 'flesvoedingcalculator' },
    { id: 'soorten-flesvoeding_lactosevrije-flesvoeding', title: 'Lactosevrije Flesvoeding', path: '/kennisbank/soorten-flesvoeding/lactosevrije-flesvoeding', category: 'soorten-flesvoeding', website: 'flesvoedingcalculator' },
    { id: 'soorten-flesvoeding_anti-reflux-flesvoeding', title: 'Anti-Reflux Flesvoeding', path: '/kennisbank/soorten-flesvoeding/anti-reflux-flesvoeding', category: 'soorten-flesvoeding', website: 'flesvoedingcalculator' },
    { id: 'voedingstechnieken_overgang-naar-beker', title: 'Overgang naar Beker', path: '/kennisbank/voedingstechnieken/overgang-naar-beker', category: 'voedingstechnieken', website: 'flesvoedingcalculator' },
    { id: 'voedingstechnieken_baby-leren-zelf-drinken', title: 'Baby Leren Zelf Drinken', path: '/kennisbank/voedingstechnieken/baby-leren-zelf-drinken', category: 'voedingstechnieken', website: 'flesvoedingcalculator' },
    { id: 'problemen-oplossen_diarree-en-flesvoeding', title: 'Diarree en Flesvoeding', path: '/kennisbank/problemen-oplossen/diarree-en-flesvoeding', category: 'problemen-oplossen', website: 'flesvoedingcalculator' },
    { id: 'problemen-oplossen_allergische-reacties-flesvoeding', title: 'Allergische Reacties Flesvoeding', path: '/kennisbank/problemen-oplossen/allergische-reacties-flesvoeding', category: 'problemen-oplossen', website: 'flesvoedingcalculator' },
    { id: 'hygiene-bereiding_flesvoeding-bewaren', title: 'Flesvoeding Bewaren', path: '/kennisbank/hygiene-bereiding/flesvoeding-bewaren', category: 'hygiene-bereiding', website: 'flesvoedingcalculator' },
    { id: 'praktische-tips_geld-besparen-flesvoeding', title: 'Geld Besparen Flesvoeding', path: '/kennisbank/praktische-tips/geld-besparen-flesvoeding', category: 'praktische-tips', website: 'flesvoedingcalculator' },
    { id: 'hygiene-bereiding_veilig-verwarmen-flesvoeding', title: 'Veilig Verwarmen Flesvoeding', path: '/kennisbank/hygiene-bereiding/veilig-verwarmen-flesvoeding', category: 'hygiene-bereiding', website: 'flesvoedingcalculator' },
    { id: 'praktische-tips_flesvoeding-op-vakantie', title: 'Flesvoeding op Vakantie', path: '/kennisbank/praktische-tips/flesvoeding-op-vakantie', category: 'praktische-tips', website: 'flesvoedingcalculator' },
    { id: 'praktische-tips_flesvoeding-en-slapen', title: 'Flesvoeding en Slapen', path: '/kennisbank/praktische-tips/flesvoeding-en-slapen', category: 'praktische-tips', website: 'flesvoedingcalculator' },
    // === TOGWaarde pages ===
    { id: 'tog_wat-is-tog', title: 'Wat is TOG?', path: '/kennisbank/wat-is-tog', category: 'basis', website: 'togwaarde' },
    { id: 'tog_wat-is-tog-waarde', title: 'Wat is TOG Waarde?', path: '/kennisbank/wat-is-tog-waarde', category: 'basis', website: 'togwaarde' },
    { id: 'tog_tog-waarde-berekenen', title: 'TOG Waarde Berekenen', path: '/kennisbank/tog-waarde-berekenen', category: 'basis', website: 'togwaarde' },
    { id: 'tog_tog-schaal-overzicht', title: 'TOG Schaal Overzicht', path: '/kennisbank/tog-schaal-overzicht', category: 'basis', website: 'togwaarde' },
    { id: 'tog_tog-waarde-per-seizoen', title: 'TOG Waarde per Seizoen', path: '/kennisbank/tog-waarde-per-seizoen', category: 'seizoen', website: 'togwaarde' },
    { id: 'tog_tog-waarde-winter', title: 'TOG Waarde Winter', path: '/kennisbank/tog-waarde-winter', category: 'seizoen', website: 'togwaarde' },
    { id: 'tog_baby-slapen-zomer', title: 'Baby Slapen in de Zomer', path: '/kennisbank/baby-slapen-zomer', category: 'seizoen', website: 'togwaarde' },
    { id: 'tog_kleding-onder-slaapzak', title: 'Kleding Onder Slaapzak', path: '/kennisbank/kleding-onder-slaapzak', category: 'kleding', website: 'togwaarde' },
    { id: 'tog_tog-waarde-babykleding-tabel', title: 'TOG Waarde Babykleding Tabel', path: '/kennisbank/tog-waarde-babykleding-tabel', category: 'kleding', website: 'togwaarde' },
    { id: 'tog_babykamer-temperatuur', title: 'Babykamer Temperatuur', path: '/kennisbank/babykamer-temperatuur', category: 'temperatuur', website: 'togwaarde' },
    { id: 'tog_baby-temperatuur-controleren', title: 'Baby Temperatuur Controleren', path: '/kennisbank/baby-temperatuur-controleren', category: 'temperatuur', website: 'togwaarde' },
    { id: 'tog_veilige-slaaptemperatuur', title: 'Veilige Slaaptemperatuur', path: '/kennisbank/veilige-slaaptemperatuur', category: 'temperatuur', website: 'togwaarde' },
    { id: 'tog_oververhitting-herkennen', title: 'Oververhitting Herkennen', path: '/kennisbank/oververhitting-herkennen', category: 'veiligheid', website: 'togwaarde' },
    { id: 'tog_warmtestuwing-baby', title: 'Warmtestuwing Baby', path: '/kennisbank/warmtestuwing-baby', category: 'veiligheid', website: 'togwaarde' },
    { id: 'tog_wiegendood-voorkomen-tog', title: 'Wiegendood Voorkomen met TOG', path: '/kennisbank/wiegendood-voorkomen-tog', category: 'veiligheid', website: 'togwaarde' },
    { id: 'tog_wiegendood-preventie', title: 'Wiegendood Preventie', path: '/kennisbank/wiegendood-preventie', category: 'veiligheid', website: 'togwaarde' },
    { id: 'tog_inbakeren-tog-waarde', title: 'Inbakeren en TOG Waarde', path: '/kennisbank/inbakeren-tog-waarde', category: 'speciaal', website: 'togwaarde' },
    { id: 'tog_premature-baby-tog-waarde', title: 'Premature Baby TOG Waarde', path: '/kennisbank/premature-baby-tog-waarde', category: 'speciaal', website: 'togwaarde' },
    { id: 'tog_baby-slaapzak-koopgids', title: 'Baby Slaapzak Koopgids', path: '/kennisbank/baby-slaapzak-koopgids', category: 'producten', website: 'togwaarde' },
    { id: 'tog_nederlandse-merken-vergelijking', title: 'Nederlandse Merken Vergelijking', path: '/kennisbank/nederlandse-merken-vergelijking', category: 'producten', website: 'togwaarde' }
  ]
  
  // Add dynamic snippet counts based on actual data
  return basePages.map(page => ({
    ...page,
    snippetCount: pageSnippets[page.id]?.length || 0
  })).sort((a, b) => a.path.localeCompare(b.path))
}

// GET - List all kennisbank pages
export async function GET(request) {
  try {
    if (!isAuthenticated(request)) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    const pages = getKnownPages()
    
    return NextResponse.json({
      success: true,
      pages
    })

  } catch (error) {
    console.error('Failed to load pages:', error)
    return NextResponse.json(
      { message: 'Failed to load pages', error: error.message },
      { status: 500 }
    )
  }
}