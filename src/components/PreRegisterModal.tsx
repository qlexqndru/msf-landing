'use client'

import { useState } from 'react'
import Image from 'next/image'

interface PreRegisterModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PreRegisterModal({ isOpen, onClose }: PreRegisterModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    institution: '',
    email: '',
    phone: '',
    dietaryPreferences: '',
    accessibilityNeeds: '',
    dataConsent: false,
    termsConsent: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/submit-prereg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        alert('Thank you for registering! We will contact you soon.')
        setFormData({
          name: '',
          jobTitle: '',
          institution: '',
          email: '',
          phone: '',
          dietaryPreferences: '',
          accessibilityNeeds: '',
          dataConsent: false,
          termsConsent: false
        })
        onClose()
      } else {
        alert(`Error: ${result.message}`)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An error occurred while submitting the form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full mx-auto max-h-[95vh] flex flex-col shadow-2xl border border-gray-100">
        {/* Modal Header */}
        <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 px-8 py-6 rounded-t-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-300 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400 rounded-full filter blur-2xl"></div>
          </div>
          
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-lg shadow-md" style={{ backgroundColor: '#F2F2F2' }}>
                <Image
                  src="/logo.png"
                  alt="Moldova Security Forum"
                  width={80}
                  height={30}
                  className="h-8 w-auto"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Moldova Security Forum</h2>
                <p className="text-blue-100">Registration Form 2025</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-blue-100 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <p className="text-blue-100 mt-3 relative">
            Please fill out all required fields to secure your spot at this premier security forum
          </p>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="px-8 py-6">
            {/* Personal Information Section */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name and Surname *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Job Title Field */}
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-semibold text-gray-700 mb-2">
                    Job Title/Position *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      required
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Your job title or position"
                    />
                  </div>
                </div>

                {/* Institution Field */}
                <div className="md:col-span-2">
                  <label htmlFor="institution" className="block text-sm font-semibold text-gray-700 mb-2">
                    Institution/Organisation *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="institution"
                      name="institution"
                      required
                      value={formData.institution}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Your institution or organisation"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                    <span className="text-gray-500 font-normal text-xs ml-1">(optional)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Special Requirements Section */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Special Requirements</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Dietary Preferences */}
                <div>
                  <label htmlFor="dietaryPreferences" className="block text-sm font-semibold text-gray-700 mb-2">
                    Dietary Preferences
                    <span className="text-gray-500 font-normal text-xs ml-1">(if any)</span>
                  </label>
                  <textarea
                    id="dietaryPreferences"
                    name="dietaryPreferences"
                    value={formData.dietaryPreferences}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                    placeholder="Please specify any dietary requirements (vegetarian, allergies, etc.)"
                  />
                </div>

                {/* Accessibility Needs */}
                <div>
                  <label htmlFor="accessibilityNeeds" className="block text-sm font-semibold text-gray-700 mb-2">
                    Accessibility Needs
                    <span className="text-gray-500 font-normal text-xs ml-1">(if any)</span>
                  </label>
                  <textarea
                    id="accessibilityNeeds"
                    name="accessibilityNeeds"
                    value={formData.accessibilityNeeds}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                    placeholder="Please specify any accessibility requirements"
                  />
                </div>
              </div>
            </div>

            {/* Consent Section */}
            <div className="mb-6">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Consent & Agreement</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      id="dataConsent"
                      name="dataConsent"
                      required
                      checked={formData.dataConsent}
                      onChange={handleInputChange}
                      className="mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-colors"
                    />
                    <span className="ml-3 text-sm text-gray-700 leading-relaxed">
                      <strong>Data Processing Consent:</strong> I consent to the use of my personal data for registration and event communication purposes. *
                    </span>
                  </label>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      id="termsConsent"
                      name="termsConsent"
                      required
                      checked={formData.termsConsent}
                      onChange={handleInputChange}
                      className="mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-colors"
                    />
                    <span className="ml-3 text-sm text-gray-700 leading-relaxed">
                      <strong>Terms & Conditions:</strong> I agree to the event's terms & conditions and code of conduct. *
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="bg-gray-50 px-8 py-6 rounded-b-2xl border-t border-gray-200">
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-xl transition-all duration-200 shadow-sm hover:shadow"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !formData.dataConsent || !formData.termsConsent}
                className="flex-1 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl disabled:shadow-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting Registration...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Complete Registration
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}