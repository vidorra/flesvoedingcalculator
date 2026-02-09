// Type augmentation for window object
declare global {
  interface Window {
    gtag?: (command: string, target: string, config?: Record<string, unknown>) => void
    clarity?: (command: string, id: string) => void
  }
}

interface WebVitalsMetric {
  name: string
  delta: number
  value: number
  id: string
}

interface AnalyticsEventParams {
  [key: string]: string | number | boolean
}

// Send Web Vitals to Google Analytics
function sendToGoogleAnalytics(metric: WebVitalsMetric): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.delta * 1000 : metric.delta),
      non_interaction: true,
    })
  }
}

// Send Web Vitals to console (development)
function sendToConsole(metric: WebVitalsMetric): void {
  if (process.env.NODE_ENV === 'development') {
    const getRating = (name: string, value: number): string => {
      if (name === 'LCP') {
        return value > 4000 ? 'poor' : value > 2500 ? 'needs-improvement' : 'good'
      }
      if (name === 'FID') {
        return value > 300 ? 'poor' : value > 100 ? 'needs-improvement' : 'good'
      }
      if (name === 'CLS') {
        return value > 0.25 ? 'poor' : value > 0.1 ? 'needs-improvement' : 'good'
      }
      if (name === 'FCP') {
        return value > 3000 ? 'poor' : value > 1800 ? 'needs-improvement' : 'good'
      }
      if (name === 'TTFB') {
        return value > 1800 ? 'poor' : value > 800 ? 'needs-improvement' : 'good'
      }
      return 'unknown'
    }

    console.log(`[Web Vitals] ${metric.name}:`, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      delta: Math.round(metric.name === 'CLS' ? metric.delta * 1000 : metric.delta),
      id: metric.id,
      rating: metric.value > 0 ? getRating(metric.name, metric.value) : 'unknown',
    })
  }
}

// Send Web Vitals to a custom endpoint (for future monitoring)
function sendToAnalytics(metric: WebVitalsMetric): void {
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

// Initialize Microsoft Clarity
export function initClarity(): void {
  if (typeof window === 'undefined') return

  try {
    // Microsoft Clarity script initialization
    if (typeof window.clarity === 'function') {
      window.clarity('init', 'swtgjl0ozf')
      console.log('Clarity initialized successfully')
    } else {
      // Load Clarity script dynamically
      const script = document.createElement('script')
      script.innerHTML = `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "swtgjl0ozf");
      `
      document.head.appendChild(script)
      console.log('Clarity script loaded dynamically')
    }
  } catch (error) {
    console.error('Failed to initialize Clarity:', error)
  }
}

// Initialize Web Vitals monitoring
export async function initWebVitals(): Promise<void> {
  if (typeof window === 'undefined') return

  try {
    // Temporarily disabled due to import issues
    console.log('Web Vitals monitoring temporarily disabled')
    // TODO: Re-enable when import issues are resolved
    // const { onCLS, onFCP, onLCP, onTTFB } = await import('web-vitals')
    // onCLS(sendToAnalytics)
    // onFCP(sendToAnalytics)
    // onLCP(sendToAnalytics)
    // onTTFB(sendToAnalytics)
  } catch (error) {
    console.warn('Failed to load web vitals:', error)
  }
}

// Track custom events
export function trackEvent(eventName: string, eventParams: AnalyticsEventParams = {}): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'User Interaction',
      ...eventParams,
    })
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Event:', eventName, eventParams)
  }
}

// Track page views
export function trackPageView(url: string, title: string): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-3NZ90KFHQ6', {
      page_title: title,
      page_location: url,
    })
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Page view:', { url, title })
  }
}

// Track form submissions
export function trackFormSubmission(formName: string, success: boolean = true): void {
  trackEvent('form_submission', {
    form_name: formName,
    success: success,
    event_category: 'Form',
  })
}

// Track calculator usage
export function trackCalculatorUsage(calculationType: string, params: AnalyticsEventParams = {}): void {
  trackEvent('calculator_usage', {
    calculator_type: calculationType,
    event_category: 'Calculator',
    ...params,
  })
}

// Track link clicks
export function trackLinkClick(linkText: string, destination: string, category: string = 'Navigation'): void {
  trackEvent('link_click', {
    link_text: linkText,
    link_destination: destination,
    event_category: category,
  })
}
