'use client'

import { useState } from 'react'
import PreRegisterModal from './PreRegisterModal'

export default function RegisterNow() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <section className="py-20" style={{ backgroundColor: '#E8EDF5' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #034889 0%, #031226 100%)' }}>
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full" style={{ background: 'linear-gradient(to left, rgba(255,255,255,0.1), transparent)' }}></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full filter blur-3xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full filter blur-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}></div>
          </div>

          <div className="relative z-10 p-12 text-center">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              REGISTER NOW
            </h2>

            {/* Description */}
            <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
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
              className="text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 flex items-center gap-3 mx-auto shadow-lg hover:scale-105"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.2)', 
                border: '1px solid rgba(255,255,255,0.3)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.3)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'}
            >
              REGISTER HERE
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