'use client'

import { useState } from 'react'
import PreRegisterModal from './PreRegisterModal'

export default function RegisterNow() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <section className="py-20" style={{ backgroundColor: '#F0EFF1' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 rounded-2xl overflow-hidden relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-400/5 rounded-full filter blur-2xl"></div>
          </div>

          <div className="relative z-10 p-12 text-center">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              PRE-REGISTER NOW
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join us at one of the most significant security events in the region, 
              bringing together leaders, experts, and practitioners from across the 
              world to discuss Moldova&apos;s security challenges, regional stability, 
              and evolving global threats. The forum offers a unique platform for 
              high-level debates on security policies, EU and NATO partnerships, 
              and the future of resilience in Moldova and beyond.
            </p>

            {/* CTA Button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors duration-200 flex items-center gap-3 mx-auto"
            >
              PRE-REGISTER HERE
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <PreRegisterModal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)} 
            />
          </div>
        </div>
      </div>
    </section>
  )
}