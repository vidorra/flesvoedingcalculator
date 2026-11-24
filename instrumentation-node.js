// Alleen voor de Node-runtime (zie instrumentation.js). Start de dagelijkse
// imports: elk uur een check, de import zelf alleen als de laatste geslaagde
// run meer dan 20 uur oud is (zie lib/search-console.js en lib/affiliate-sales.js).
import { maybeRunDailyGscImport } from './lib/search-console.js'
import { maybeRunDailyAffiliateImport } from './lib/affiliate-sales.js'

export function startGscScheduler() {
  if (!process.env.GSC_SERVICE_ACCOUNT_JSON || !process.env.DATABASE_URL) return
  const tick = () => maybeRunDailyGscImport().catch((e) => console.error('GSC-planner:', e.message))
  setTimeout(tick, 2 * 60_000)
  setInterval(tick, 60 * 60_000)
}

// Bol-verkopen. Start 3 minuten na de boot, zodat hij niet tegelijk met de
// Search Console-import draait.
export function startAffiliateScheduler() {
  if (!process.env.BOL_API_CLIENT_ID || !process.env.BOL_API_CLIENT_SECRET || !process.env.DATABASE_URL) return
  const tick = () => maybeRunDailyAffiliateImport().catch((e) => console.error('Affiliate-planner:', e.message))
  setTimeout(tick, 3 * 60_000)
  setInterval(tick, 60 * 60_000)
}
