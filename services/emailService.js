import emailjs from '@emailjs/browser'

// EmailJS Configuration
// TODO: Replace these with your actual EmailJS credentials
const EMAILJS_CONFIG = {
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
}

// Initialize EmailJS
export const initEmailJS = () => {
  try {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
    console.log('EmailJS initialized successfully')
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error)
  }
}

// Send contact form email
export const sendContactEmail = async (formData) => {
  try {
    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || `${formData.type === 'feedback' ? 'Feedback' : 'Vraag'} van ${formData.name}`,
      message: formData.message,
      message_type: formData.type,
      to_email: 'info@vidorra.nl',
      reply_to: formData.email,
      // Add timestamp for reference
      timestamp: new Date().toLocaleString('nl-NL', { 
        timeZone: 'Europe/Amsterdam',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      })
    }

    console.log('Sending email with params:', templateParams)

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    )

    console.log('Email sent successfully:', response)
    return { success: true, response }

  } catch (error) {
    console.error('Failed to send email:', error)
    return { success: false, error: error.message }
  }
}

// Validate EmailJS configuration
export const validateEmailJSConfig = () => {
  const isConfigured = 
    EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY' &&
    EMAILJS_CONFIG.SERVICE_ID !== 'YOUR_SERVICE_ID' &&
    EMAILJS_CONFIG.TEMPLATE_ID !== 'YOUR_TEMPLATE_ID'

  if (!isConfigured) {
    console.warn('EmailJS is not properly configured. Please set up your environment variables.')
  }

  return isConfigured
}