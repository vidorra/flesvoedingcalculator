'use client'
import { useState, useEffect } from 'react'
import { X, Mail, User, MessageSquare, Send, CheckCircle, AlertCircle, MessageCircle, Phone } from 'lucide-react'
import { sendContactEmail, initEmailJS, validateEmailJSConfig } from '../services/emailService.js'

// Contact modal component for feedback and contact forms
const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'feedback' // feedback or contact
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null
  const [emailJSReady, setEmailJSReady] = useState(false)

  // Initialize EmailJS when component mounts
  useEffect(() => {
    initEmailJS()
    setEmailJSReady(validateEmailJSConfig())
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      if (!emailJSReady) {
        throw new Error('Email service is not properly configured')
      }

      const result = await sendContactEmail(formData)
      
      if (result.success) {
        setSubmitStatus('success')
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
            type: 'feedback'
          })
          setSubmitStatus(null)
          onClose()
        }, 2500)
      } else {
        throw new Error(result.error || 'Failed to send message')
      }
      
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name && formData.email && formData.message

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-primary rounded-t-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Mail className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Contact & Feedback</h2>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-white/90 text-sm mt-2">
            We horen graag van je! Stel je vraag of deel je feedback met ons.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Message Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type bericht
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, type: 'feedback' }))}
                className={`p-3 rounded-xl border transition-all text-sm font-medium flex items-center justify-center space-x-2 ${
                  formData.type === 'feedback'
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-primary'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Feedback</span>
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, type: 'contact' }))}
                className={`p-3 rounded-xl border transition-all text-sm font-medium flex items-center justify-center space-x-2 ${
                  formData.type === 'contact'
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-primary'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>Contact</span>
              </button>
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Naam *
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Uw naam"
                required
                className="w-full px-4 py-3 pl-11 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-gray-800 placeholder:text-gray-500"
              />
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="uw.email@voorbeeld.nl"
                required
                className="w-full px-4 py-3 pl-11 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-gray-800 placeholder:text-gray-500"
              />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Onderwerp
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder={formData.type === 'feedback' ? 'Feedback over...' : 'Contact over...'}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-gray-800 placeholder:text-gray-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bericht *
            </label>
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={formData.type === 'feedback' 
                  ? 'Deel uw feedback, suggesties of ervaringen met ons...' 
                  : 'Beschrijf uw bericht zo duidelijk mogelijk...'
                }
                required
                rows={4}
                className="w-full px-4 py-3 pl-11 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none text-gray-800 placeholder:text-gray-500"
              />
              <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Submit Status */}
          {submitStatus === 'success' && (
            <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-xl">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">
                Bericht succesvol verzonden! We nemen zo snel mogelijk contact op.
              </span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-xl">
              <AlertCircle className="w-5 h-5" />
              <span className="text-sm font-medium">
                Er ging iets mis. Probeer het opnieuw of mail naar info@vidorra.nl
              </span>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              Annuleren
            </button>
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="flex-1 bg-primary hover:bg-primary/90 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-xl transition-all flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                  <span>Verzenden...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Versturen</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="bg-gray-50 rounded-b-2xl px-6 py-4">
          <p className="text-xs text-gray-500 text-center">
            Uw gegevens worden alleen gebruikt om contact met u op te nemen en worden niet gedeeld met derden.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactModal