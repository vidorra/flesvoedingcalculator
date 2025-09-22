'use client'
import { useEffect, useState } from 'react'

// Hook for managing Google reCAPTCHA v3
export const useRecaptcha = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
    
    if (!siteKey || siteKey === 'your_recaptcha_site_key_here') {
      console.warn('reCAPTCHA site key not configured')
      setIsReady(false)
      return
    }

    // Check if reCAPTCHA is already loaded
    if (window.grecaptcha && window.grecaptcha.ready) {
      setIsLoaded(true)
      window.grecaptcha.ready(() => {
        setIsReady(true)
      })
      return
    }

    // Load reCAPTCHA script
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
    script.async = true
    script.defer = true
    
    script.onload = () => {
      setIsLoaded(true)
      window.grecaptcha.ready(() => {
        setIsReady(true)
      })
    }

    script.onerror = () => {
      console.error('Failed to load reCAPTCHA script')
    }

    document.head.appendChild(script)

    return () => {
      // Cleanup script if component unmounts
      const existingScript = document.querySelector(`script[src*="recaptcha"]`)
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  // Execute reCAPTCHA and get token
  const executeRecaptcha = async (action = 'submit') => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
    
    if (!isReady || !window.grecaptcha || !siteKey) {
      console.warn('reCAPTCHA not ready or not configured')
      return null
    }

    try {
      const token = await window.grecaptcha.execute(siteKey, { action })
      return token
    } catch (error) {
      console.error('reCAPTCHA execution failed:', error)
      return null
    }
  }

  return {
    isLoaded,
    isReady,
    executeRecaptcha
  }
}