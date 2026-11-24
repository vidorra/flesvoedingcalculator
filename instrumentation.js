// Draait één keer bij het starten van de server. De import staat binnen de
// runtime-check zodat Next hem uit de edge-bundel laat (pg werkt daar niet).
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { startGscScheduler, startAffiliateScheduler } = await import('./instrumentation-node.js')
    startGscScheduler()
    startAffiliateScheduler()
  }
}
