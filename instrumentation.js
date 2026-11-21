// Draait één keer bij het starten van de server. Start de dagelijkse
// Search Console-import: elk uur een check, de import zelf alleen als de
// laatste geslaagde run meer dan 20 uur oud is (zie lib/search-console.js).
export async function register() {
  if (process.env.NEXT_RUNTIME !== 'nodejs') return
  if (!process.env.GSC_SERVICE_ACCOUNT_JSON || !process.env.DATABASE_URL) return

  const { maybeRunDailyGscImport } = await import('./lib/search-console.js')
  const tick = () => maybeRunDailyGscImport().catch((e) => console.error('GSC-planner:', e.message))
  setTimeout(tick, 2 * 60_000)
  setInterval(tick, 60 * 60_000)
}
