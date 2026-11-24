// Amazon noemt kleine verkopen niet bij naam (ASIN "Other", titel "-"). Op
// basis van de prijs per item en onze eigen kliks schatten we welk product van
// ons het was. "Direct besteld" betekent volgens Amazon: precies het product
// achter de link; "indirect": iets anders gekocht na de klik.

export function parsePrice(v) {
  if (v === null || v === undefined) return null
  let s = String(v).replace(/[^\d.,]/g, '')
  if (!s) return null
  if (s.includes(',') && s.includes('.')) {
    s = s.lastIndexOf(',') > s.lastIndexOf('.') ? s.replace(/\./g, '').replace(',', '.') : s.replace(/,/g, '')
  } else if (s.includes(',')) {
    s = s.replace(',', '.')
  }
  const n = Number(s)
  return Number.isFinite(n) && n > 0 ? n : null
}

const ASIN = /^[A-Z0-9]{10}$/i
export const isUnknownAmazonProduct = (key, title) =>
  !ASIN.test(String(key || '')) && (!title || String(title).trim() === '-')

const shiftDay = (day, n) => {
  const d = new Date(`${day}T12:00:00Z`)
  d.setUTCDate(d.getUTCDate() + n)
  return d.toISOString().slice(0, 10)
}

// Marge: prijzen veranderen en staan bij ons met de hand ingevuld
const close = (a, b) => Math.abs(a - b) <= Math.max(0.75, b * 0.08)

// Amazon rapporteert de omzet meestal zonder btw; onze kaarten tonen de
// winkelprijs. Daarom vergelijken we met beide, en met de actie- en adviesprijs.
const VAT = 1.21
function priceFit(snippet, unitPrice) {
  let best = null
  for (const p of [snippet.priceNum, snippet.originalNum]) {
    if (!p) continue
    for (const target of [unitPrice * VAT, unitPrice]) {
      if (!close(p, target)) continue
      const diff = Math.abs(p - target) / p
      if (!best || diff < best.diff) best = { diff, price: p }
    }
  }
  return best
}

/**
 * @param rows     [{ day, key, orders, direct, indirect, revenue, commission }] onbekende productregels
 * @param snippets [{ id, name, website, price }] onze Amazon-productkaarten
 * @param clicks   [{ snippet_id, day, clicks }] onze kliks per dag (Europe/Amsterdam)
 */
export function matchAmazonSales(rows, snippets, clicks) {
  const priced = snippets.map((s) => ({ ...s, priceNum: parsePrice(s.price), originalNum: parsePrice(s.original_price) }))
  const byId = new Map(priced.map((s) => [String(s.id), s]))

  return rows.filter((r) => Number(r.orders) > 0).map((r) => {
    const orders = Number(r.orders)
    const revenue = r.revenue === null || r.revenue === undefined ? null : Number(r.revenue)
    const unitPrice = revenue && orders > 0 ? Math.round((revenue / orders) * 100) / 100 : null
    const direct = r.direct === null || r.direct === undefined ? null : Number(r.direct)
    const indirect = r.indirect === null || r.indirect === undefined ? null : Number(r.indirect)

    // Amazon-cookie: 24 uur, dus kliks van die dag en de dag ervoor
    const window = new Set([r.day, shiftDay(r.day, -1)])
    const clickCount = new Map()
    for (const c of clicks) {
      if (!window.has(String(c.day))) continue
      const id = String(c.snippet_id)
      clickCount.set(id, (clickCount.get(id) || 0) + Number(c.clicks))
    }
    const clicked = [...clickCount.entries()]
      .map(([id, n]) => ({ id, name: byId.get(id)?.name ?? id, clicks: n }))
      .sort((a, b) => b.clicks - a.clicks)

    const onlyOther = direct === 0 && (indirect ?? 0) > 0
    let match = null
    if (unitPrice && !onlyOther) {
      const fits = priced
        .map((s) => ({ s, fit: priceFit(s, unitPrice), clicks: clickCount.get(String(s.id)) || 0 }))
        .filter((x) => x.fit)
        .sort((a, b) => (b.clicks > 0) - (a.clicks > 0) || a.fit.diff - b.fit.diff || b.clicks - a.clicks)
      if (fits.length > 0) {
        const { s: m, fit, clicks: n } = fits[0]
        match = {
          snippet_id: String(m.id), name: m.name, website: m.website, price: fit.price, clicks: n,
          alternatives: fits.slice(1, 4).map((x) => x.s.name)
        }
      }
    }

    // Zonder direct/indirect (oude import) weten we niet of het ons product was
    const verdict = match
      ? (match.clicks > 0 ? 'waarschijnlijk' : 'mogelijk')
      : direct && direct > 0 ? 'onze-link' : onlyOther ? 'ander-product' : 'onbekend'

    return {
      day: r.day,
      orders,
      direct,
      indirect,
      revenue,
      unitPrice,
      commission: Number(r.commission ?? 0),
      verdict,
      match,
      website: match?.website ?? 'onbekend',
      clicked: clicked.slice(0, 5),
      unpriced: priced.filter((s) => !s.priceNum && !s.originalNum).length
    }
  })
}
