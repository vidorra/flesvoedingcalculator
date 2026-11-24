import { NextResponse } from 'next/server'
import { getClientIp } from '../../../lib/client-ip.js'
import { readJsonCapped } from '../../../lib/read-body.js'

const MAX_BODY_BYTES = 32 * 1024
const RECAPTCHA_ACTION = 'contact_form'

// Rate limiting store (in production, use Redis)
const rateLimitStore = new Map()

// Clean up old entries every hour
setInterval(() => {
  const oneHourAgo = Date.now() - 60 * 60 * 1000
  for (const [key, data] of rateLimitStore) {
    if (data.lastAttempt < oneHourAgo) {
      rateLimitStore.delete(key)
    }
  }
}, 60 * 60 * 1000)

// Verify reCAPTCHA token
async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY
  
  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY not configured')
    return { success: false, score: 0 }
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ secret: secretKey, response: token }),
    })

    const data = await response.json()
    return {
      success: data.success,
      score: data.score || 0,
      action: data.action,
      challenge_ts: data.challenge_ts,
      hostname: data.hostname,
      'error-codes': data['error-codes']
    }
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error)
    return { success: false, score: 0 }
  }
}

// Rate limiting check
function checkRateLimit(ip) {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxAttempts = 5 // max 5 submissions per 15 minutes
  
  const userAttempts = rateLimitStore.get(ip) || { count: 0, firstAttempt: now, lastAttempt: now }
  
  // Reset if window expired
  if (now - userAttempts.firstAttempt > windowMs) {
    userAttempts.count = 0
    userAttempts.firstAttempt = now
  }
  
  userAttempts.count++
  userAttempts.lastAttempt = now
  rateLimitStore.set(ip, userAttempts)
  
  return userAttempts.count <= maxAttempts
}

// Validate and sanitize input
// Alleen strings; regeleinden en stuurtekens eruit voor velden die in
// mailheaders kunnen belanden (naam, onderwerp).
const str = (v) => (typeof v === 'string' ? v.trim() : '')
const oneLine = (v) => str(v).replace(/[\u0000-\u001f\u007f]+/g, ' ')

function validateInput(data) {
  const errors = []

  // Sanitize and validate name
  const name = oneLine(data.name)
  if (!name || name.length < 2 || name.length > 100) {
    errors.push('Name must be between 2 and 100 characters')
  }
  
  // Validate email
  const email = str(data.email)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email) || email.length > 254) {
    errors.push('Valid email address is required')
  }
  
  // Validate message
  const message = str(data.message)
  if (!message || message.length < 10 || message.length > 5000) {
    errors.push('Message must be between 10 and 5000 characters')
  }
  
  // Validate type
  const type = str(data.type)
  const subject = oneLine(data.subject).slice(0, 200)
  if (!['feedback', 'contact'].includes(type)) {
    errors.push('Invalid message type')
  }
  
  // Check for obvious spam patterns
  const suspiciousPatterns = [
    /https?:\/\/[^\s]+/gi, // Multiple URLs
    /\b(buy now|click here|free money|win big|viagra|casino|lottery|investment opportunity)\b/gi,
    /(.)\\1{15,}/, // Too many repeated characters
    /[A-Z]{20,}/, // Excessive caps
  ]
  
  const fullText = `${name} ${subject} ${message}`.toLowerCase()
  const suspiciousMatches = suspiciousPatterns.filter(pattern => pattern.test(fullText))
  
  if (suspiciousMatches.length > 0) {
    errors.push('Message contains suspicious content')
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    sanitized: {
      name: name.replace(/[<>]/g, ''), // Basic XSS prevention
      email: email.toLowerCase(),
      subject: subject.replace(/[<>]/g, ''),
      message: message.replace(/[<>]/g, ''),
      type
    }
  }
}

// Send email via fetch API (server-side EmailJS)
async function sendEmail(formData, clientInfo) {
  const emailjsConfig = {
    PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    PRIVATE_KEY: process.env.EMAILJS_PRIVATE_KEY,
    SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  }

  // Check if EmailJS is configured
  if (!emailjsConfig.PRIVATE_KEY || !emailjsConfig.SERVICE_ID || !emailjsConfig.TEMPLATE_ID) {
    const missingConfig = []
    if (!emailjsConfig.PRIVATE_KEY) missingConfig.push('PRIVATE_KEY')
    if (!emailjsConfig.SERVICE_ID) missingConfig.push('SERVICE_ID')
    if (!emailjsConfig.TEMPLATE_ID) missingConfig.push('TEMPLATE_ID')
    
    console.error('EmailJS missing configuration:', missingConfig)
    throw new Error(`EmailJS not properly configured. Missing: ${missingConfig.join(', ')}`)
  }
  
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject || `${formData.type === 'feedback' ? 'Feedback' : 'Contact'} van ${formData.name}`,
    message: formData.message,
    message_type: formData.type,
    to_email: 'info@vidorra.nl',
    reply_to: formData.email,
    // Security info
    user_agent: clientInfo.userAgent,
    client_ip: clientInfo.ip,
    timestamp: new Date().toLocaleString('nl-NL', { 
      timeZone: 'Europe/Amsterdam',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
  }
  
  try {
    // EmailJS server-side sending via REST API
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: emailjsConfig.SERVICE_ID,
        template_id: emailjsConfig.TEMPLATE_ID,
        user_id: emailjsConfig.PUBLIC_KEY,
        accessToken: emailjsConfig.PRIVATE_KEY,
        template_params: templateParams
      })
    })
    
    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`EmailJS API error: ${response.status} - ${errorText}`)
    }
    
    const result = await response.text()
    return { success: true, response: result }
  } catch (error) {
    console.error('EmailJS send failed:', error.message)
    throw error
  }
}

export async function POST(request) {
  try {
    // IP uit het laatste XFF-veld (zie lib/client-ip.js), niet het eerste
    const ip = getClientIp(request)
    const userAgent = (request.headers.get('user-agent') || 'unknown').slice(0, 300)

    // Check rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Te veel aanvragen. Probeer later opnieuw.' },
        { status: 429 }
      )
    }

    // Body met harde grens, ook zonder Content-Length
    const { tooLarge, data: body } = await readJsonCapped(request, MAX_BODY_BYTES)
    if (tooLarge) {
      return NextResponse.json({ error: 'Bericht te groot' }, { status: 413 })
    }
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Ongeldig verzoek' }, { status: 400 })
    }

    // reCAPTCHA is verplicht. Zonder geheime sleutel faalt de route gesloten.
    if (!process.env.RECAPTCHA_SECRET_KEY) {
      console.error('Contact form disabled: RECAPTCHA_SECRET_KEY not configured')
      return NextResponse.json(
        { error: 'Het formulier is tijdelijk niet beschikbaar' },
        { status: 503 }
      )
    }
    const recaptchaToken = body.recaptchaToken
    if (typeof recaptchaToken !== 'string' || !recaptchaToken || recaptchaToken.length > 4096) {
      return NextResponse.json(
        { error: 'Beveiligingsvalidatie mislukt' },
        { status: 400 }
      )
    }
    const recaptchaResult = await verifyRecaptcha(recaptchaToken)
    const actionOk = !recaptchaResult.action || recaptchaResult.action === RECAPTCHA_ACTION
    if (!recaptchaResult.success || !actionOk || recaptchaResult.score < 0.5) {
      console.warn('reCAPTCHA rejected:', {
        success: recaptchaResult.success,
        score: recaptchaResult.score,
        action: recaptchaResult.action,
        errors: recaptchaResult['error-codes'],
      })
      return NextResponse.json(
        { error: 'Beveiligingsvalidatie mislukt' },
        { status: 400 }
      )
    }

    // Validate input
    const validation = validateInput(body)
    if (!validation.isValid) {
      return NextResponse.json(
        { error: 'Formuliervalidatie mislukt', details: validation.errors },
        { status: 400 }
      )
    }
    
    // Versturen. Mislukt dat, dan een eerlijke fout en geen persoonsgegevens
    // in de log (naam, e-mail en IP bleven daar eerder staan).
    try {
      await sendEmail(validation.sanitized, { ip, userAgent })
      console.log(`Contact form submitted (${validation.sanitized.type})`)
      return NextResponse.json({
        success: true,
        message: 'Bericht succesvol verzonden'
      })
    } catch (emailError) {
      console.error('Contact form: email sending failed:', emailError.message)
      return NextResponse.json(
        { error: 'Versturen is niet gelukt. Probeer het later opnieuw.' },
        { status: 502 }
      )
    }
    
  } catch (error) {
    console.error('Contact form error:', error?.message || error)

    return NextResponse.json(
      { error: 'Er ging iets mis. Probeer het later opnieuw.' },
      { status: 500 }
    )
  }
}

// Handle other methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}