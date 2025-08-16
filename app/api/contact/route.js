import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import emailjs from '@emailjs/browser'

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
      body: `secret=${secretKey}&response=${token}`,
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
function validateInput(data) {
  const errors = []
  
  // Sanitize and validate name
  const name = data.name?.trim()
  if (!name || name.length < 2 || name.length > 100) {
    errors.push('Name must be between 2 and 100 characters')
  }
  
  // Validate email
  const email = data.email?.trim()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email) || email.length > 254) {
    errors.push('Valid email address is required')
  }
  
  // Validate message
  const message = data.message?.trim()
  if (!message || message.length < 10 || message.length > 5000) {
    errors.push('Message must be between 10 and 5000 characters')
  }
  
  // Validate type
  const type = data.type?.trim()
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
  
  const fullText = `${name} ${data.subject || ''} ${message}`.toLowerCase()
  const suspiciousMatches = suspiciousPatterns.filter(pattern => pattern.test(fullText))
  
  if (suspiciousMatches.length > 0) {
    errors.push('Message contains suspicious content')
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    sanitized: {
      name: name?.replace(/[<>]/g, ''), // Basic XSS prevention
      email: email?.toLowerCase(),
      subject: data.subject?.trim()?.replace(/[<>]/g, '') || '',
      message: message?.replace(/[<>]/g, ''),
      type
    }
  }
}

// Send email via EmailJS
async function sendEmail(formData, clientInfo) {
  const emailjsConfig = {
    PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  }
  
  // Check if EmailJS is configured
  if (!emailjsConfig.PUBLIC_KEY || !emailjsConfig.SERVICE_ID || !emailjsConfig.TEMPLATE_ID) {
    throw new Error('EmailJS not properly configured')
  }
  
  // Initialize EmailJS (server-side)
  emailjs.init(emailjsConfig.PUBLIC_KEY)
  
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
    const response = await emailjs.send(
      emailjsConfig.SERVICE_ID,
      emailjsConfig.TEMPLATE_ID,
      templateParams
    )
    
    return { success: true, response }
  } catch (error) {
    console.error('EmailJS send failed:', error)
    throw error
  }
}

export async function POST(request) {
  try {
    // Get client IP and headers
    const headersList = headers()
    const forwarded = headersList.get('x-forwarded-for')
    const realIp = headersList.get('x-real-ip')
    const ip = forwarded?.split(',')[0] || realIp || 'unknown'
    const userAgent = headersList.get('user-agent') || 'unknown'
    
    // Check rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Te veel aanvragen. Probeer later opnieuw.' },
        { status: 429 }
      )
    }
    
    // Parse request body
    const body = await request.json()
    
    // Verify reCAPTCHA if token provided
    if (body.recaptchaToken) {
      const recaptchaResult = await verifyRecaptcha(body.recaptchaToken)
      
      if (!recaptchaResult.success) {
        console.log('reCAPTCHA verification failed:', recaptchaResult)
        return NextResponse.json(
          { error: 'Beveiligingsvalidatie mislukt' },
          { status: 400 }
        )
      }
      
      // Check score (v3 only)
      if (recaptchaResult.score !== undefined && recaptchaResult.score < 0.5) {
        console.log('reCAPTCHA score too low:', recaptchaResult.score)
        return NextResponse.json(
          { error: 'Beveiligingsvalidatie mislukt' },
          { status: 400 }
        )
      }
    }
    
    // Validate input
    const validation = validateInput(body)
    if (!validation.isValid) {
      return NextResponse.json(
        { error: 'Formuliervalidatie mislukt', details: validation.errors },
        { status: 400 }
      )
    }
    
    // Send email
    const emailResult = await sendEmail(validation.sanitized, { ip, userAgent })
    
    if (emailResult.success) {
      // Log successful submission (without sensitive data)
      console.log(`Contact form submitted successfully from ${ip} (${validation.sanitized.type})`)
      
      return NextResponse.json({
        success: true,
        message: 'Bericht succesvol verzonden'
      })
    } else {
      throw new Error('Email sending failed')
    }
    
  } catch (error) {
    console.error('Contact form error:', error)
    
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