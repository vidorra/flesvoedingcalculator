import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

// Send Web Vitals to Google Analytics
function sendToGoogleAnalytics({ name, delta, value, id }) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, {
      event_category: 'Web Vitals',
      event_label: id,
      value: Math.round(name === 'CLS' ? delta * 1000 : delta),
      non_interaction: true,
    })
  }
}

// Send Web Vitals to console (development)
function sendToConsole({ name, delta, value, id }) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${name}:`, {
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      delta: Math.round(name === 'CLS' ? delta * 1000 : delta),
      id,
      rating: value > 0 ? (
        name === 'LCP' ? (value > 4000 ? 'poor' : value > 2500 ? 'needs-improvement' : 'good') :
        name === 'FID' ? (value > 300 ? 'poor' : value > 100 ? 'needs-improvement' : 'good') :
        name === 'CLS' ? (value > 0.25 ? 'poor' : value > 0.1 ? 'needs-improvement' : 'good') :
        name === 'FCP' ? (value > 3000 ? 'poor' : value > 1800 ? 'needs-improvement' : 'good') :
        name === 'TTFB' ? (value > 1800 ? 'poor' : value > 800 ? 'needs-improvement' : 'good') :
        'unknown'
      ) : 'unknown'
    })
  }
}

// Send Web Vitals to a custom endpoint (for future monitoring)
function sendToAnalytics(metric) {
  // Send to Google Analytics
  sendToGoogleAnalytics(metric)
  
  // Send to console in development
  sendToConsole(metric)
  
  // Future: Send to custom analytics endpoint
  // if (process.env.NODE_ENV === 'production') {
  //   fetch('/api/analytics', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(metric),
  //   }).catch(console.error)
  // }
}

// Initialize Web Vitals monitoring
export function initWebVitals() {
  if (typeof window === 'undefined') return
  
  getCLS(sendToAnalytics)
  getFID(sendToAnalytics)
  getFCP(sendToAnalytics)
  getLCP(sendToAnalytics)
  getTTFB(sendToAnalytics)
}

// Track custom events
export function trackEvent(eventName, eventParams = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'User Interaction',
      ...eventParams
    })
  }
  
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Event:', eventName, eventParams)
  }
}

// Track page views
export function trackPageView(url, title) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_title: title,
      page_location: url,
    })
  }
  
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Page view:', { url, title })
  }
}

// Track form submissions
export function trackFormSubmission(formName, success = true) {
  trackEvent('form_submission', {
    form_name: formName,
    success: success,
    event_category: 'Form'
  })
}

// Track calculator usage
export function trackCalculatorUsage(calculationType, params = {}) {
  trackEvent('calculator_usage', {
    calculator_type: calculationType,
    event_category: 'Calculator',
    ...params
  })
}

// Track link clicks
export function trackLinkClick(linkText, destination, category = 'Navigation') {
  trackEvent('link_click', {
    link_text: linkText,
    link_destination: destination,
    event_category: category
  })
}