// Kleine mailer op de Resend HTTP-API, hetzelfde patroon als business-scraper
// (src/mailer.ts). Bewust zonder nodemailer: dit project verstuurt alleen
// interne meldingen, dus een fetch volstaat en scheelt een dependency.
//
// Nodig in CapRover:
//   RESEND_API_KEY   de key van het Resend-account
//   MAIL_FROM        moet op een GEVERIFIEERD Resend-domein zitten. Dat is
//                    webbureaunoord.nl; vidorra.nl is niet geverifieerd en
//                    geeft 403 "domain is not verified".
//   OWNER_EMAIL      optioneel, standaard info@vidorra.nl
//
// Zonder config slaapt de mailer (mailerConfigured() = false) en breekt er
// niets: de prijssync moet blijven werken ook als mail niet is ingesteld.

const RESEND_ENDPOINT = 'https://api.resend.com/emails'

function config() {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  const from = process.env.MAIL_FROM?.trim()
  if (!apiKey || !from) return null
  return {
    apiKey,
    from,
    replyTo: process.env.MAIL_REPLY_TO?.trim() || ''
  }
}

export function mailerConfigured() {
  return config() !== null
}

export function ownerEmail() {
  return process.env.OWNER_EMAIL?.trim() || 'info@vidorra.nl'
}

export async function sendMail({ to, subject, text, html }) {
  const c = config()
  if (!c) return { ok: false, error: 'mailer niet geconfigureerd (RESEND_API_KEY of MAIL_FROM ontbreekt)' }

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${c.apiKey}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        from: c.from,
        to: [to],
        subject,
        text,
        html,
        reply_to: c.replyTo || undefined
      })
    })

    if (!res.ok) {
      const body = await res.text().catch(() => '')
      return { ok: false, error: `resend ${res.status}: ${body.slice(0, 240)}` }
    }
    return { ok: true }
  } catch (error) {
    return { ok: false, error: error?.message || 'resend-fout' }
  }
}
