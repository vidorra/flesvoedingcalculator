import { Pool } from 'pg'

// Lightweight, run-once creation of the shared calculator_events table.
// Kept separate from the heavy autoMigrate() so the public tracking endpoint
// stays cheap. Idempotent across both apps (they share one database).
let ensured = false

export async function ensureCalculatorEventsTable() {
  if (ensured) return true
  const url = process.env.DATABASE_URL
  if (!url) return false

  const pool = new Pool({ connectionString: url, ssl: false })
  const client = await pool.connect()
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS calculator_events (
        id uuid PRIMARY KEY,
        website text NOT NULL DEFAULT 'flesvoedingcalculator',
        age_category text,
        data jsonb,
        created_at timestamptz NOT NULL DEFAULT now()
      );
    `)
    await client.query(
      `CREATE INDEX IF NOT EXISTS idx_calc_events_website_created ON calculator_events (website, created_at);`
    )
    ensured = true
    return true
  } finally {
    client.release()
    await pool.end()
  }
}


// Click events for affiliate links - anonymous, no IP/session/personal data.
// Shared table across both apps; created lazily by whichever app first logs.
let clicksEnsured = false

export async function ensureClickEventsTable() {
  if (clicksEnsured) return true
  const url = process.env.DATABASE_URL
  if (!url) return false

  const pool = new Pool({ connectionString: url, ssl: false })
  const client = await pool.connect()
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS click_events (
        id uuid PRIMARY KEY,
        website text NOT NULL DEFAULT 'flesvoedingcalculator',
        snippet_id text NOT NULL,
        widget text,
        created_at timestamptz NOT NULL DEFAULT now()
      );
    `)
    await client.query(
      `CREATE INDEX IF NOT EXISTS idx_click_events_website_created ON click_events (website, created_at);`
    )
    await client.query(
      `CREATE INDEX IF NOT EXISTS idx_click_events_snippet ON click_events (snippet_id);`
    )
    clicksEnsured = true
    return true
  } finally {
    client.release()
    await pool.end()
  }
}


// Pageview/visit events - anoniem: alleen website + tijdstip (geen IP, sessie,
// pad of persoonsgegevens). Eén rij per sessie (client vuurt 1x per sessie).
// Gedeelde tabel over beide apps; lui aangemaakt door wie het eerst logt.
let viewsEnsured = false

export async function ensurePageviewEventsTable() {
  if (viewsEnsured) return true
  const url = process.env.DATABASE_URL
  if (!url) return false

  const pool = new Pool({ connectionString: url, ssl: false })
  const client = await pool.connect()
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS pageview_events (
        id uuid PRIMARY KEY,
        website text NOT NULL DEFAULT 'flesvoedingcalculator',
        created_at timestamptz NOT NULL DEFAULT now()
      );
    `)
    await client.query(
      `CREATE INDEX IF NOT EXISTS idx_pageview_events_website_created ON pageview_events (website, created_at);`
    )
    viewsEnsured = true
    return true
  } finally {
    client.release()
    await pool.end()
  }
}


// Onthoudt welke producten er bij de vorige prijssync-melding stuk stonden, en
// wanneer die melding eruit ging. Zonder dit zou elke run een mail sturen: de
// launchd-job draait niet alleen om 07:00 maar ook bij elke login/boot, dus een
// product dat een week niet leverbaar is zou tientallen identieke mails opleveren.
let alertStateEnsured = false

export async function ensurePriceAlertStateTable() {
  if (alertStateEnsured) return true
  const url = process.env.DATABASE_URL
  if (!url) return false

  const pool = new Pool({ connectionString: url, ssl: false })
  const client = await pool.connect()
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS price_alert_state (
        id text PRIMARY KEY,
        failing_hash text NOT NULL,
        last_sent_at timestamptz NOT NULL DEFAULT now()
      );
    `)
    alertStateEnsured = true
    return true
  } finally {
    client.release()
    await pool.end()
  }
}


// Pagina van een affiliate-klik (alleen het pad, bv. /kennisbank/x/), zodat
// /admin/stats Google-kliks, berekeningen en affiliate-kliks per pagina kan
// naast elkaar zetten. Leeg voor kliks van vóór 21-11-2026.
let clickPageEnsured = false

export async function ensureClickPageColumn() {
  if (clickPageEnsured) return true
  const url = process.env.DATABASE_URL
  if (!url) return false

  await ensureClickEventsTable()
  const pool = new Pool({ connectionString: url, ssl: false })
  const client = await pool.connect()
  try {
    await client.query(`ALTER TABLE click_events ADD COLUMN IF NOT EXISTS page text;`)
    await client.query(
      `CREATE INDEX IF NOT EXISTS idx_click_events_page ON click_events (website, page, created_at);`
    )
    clickPageEnsured = true
    return true
  } finally {
    client.release()
    await pool.end()
  }
}


// A/B-testen. Gedeelde database met togwaarde: alle nieuwe kolommen op
// click_events mogen leeg zijn, zodat de inserts van togwaarde gewoon blijven
// werken. Geen cookies of bezoekers-id: `pv` is een willekeurig kenmerk van één
// paginalading dat alleen in het geheugen van de browser staat.
let experimentsEnsured = false

export async function ensureExperimentTables() {
  if (experimentsEnsured) return true
  const url = process.env.DATABASE_URL
  if (!url) return false

  await ensureClickEventsTable()
  const pool = new Pool({ connectionString: url, ssl: false })
  const client = await pool.connect()
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS experiments (
        website    text NOT NULL,
        key        text NOT NULL,
        status     text NOT NULL DEFAULT 'draft',
        arms       jsonb NOT NULL,
        winner     text,
        started_at timestamptz,
        ended_at   timestamptz,
        updated_at timestamptz NOT NULL DEFAULT now(),
        PRIMARY KEY (website, key)
      );
    `)
    await client.query(`
      CREATE TABLE IF NOT EXISTS impression_events (
        id uuid PRIMARY KEY,
        website text NOT NULL DEFAULT 'flesvoedingcalculator',
        placement text,
        exp text,
        arm text,
        pv text,
        created_at timestamptz NOT NULL DEFAULT now()
      );
    `)
    await client.query(
      `CREATE INDEX IF NOT EXISTS idx_impression_events_exp ON impression_events (website, exp, created_at);`
    )
    await client.query(`
      ALTER TABLE click_events
        ADD COLUMN IF NOT EXISTS exp text,
        ADD COLUMN IF NOT EXISTS arm text,
        ADD COLUMN IF NOT EXISTS placement text,
        ADD COLUMN IF NOT EXISTS pv text;
    `)
    await client.query(
      `CREATE INDEX IF NOT EXISTS idx_click_events_exp ON click_events (website, exp, created_at);`
    )
    experimentsEnsured = true
    return true
  } finally {
    client.release()
    await pool.end()
  }
}
