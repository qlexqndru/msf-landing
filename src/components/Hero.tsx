'use client'

import { useState } from 'react'
import PreRegisterModal from './PreRegisterModal'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-400/5 rounded-full filter blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Main Title */}
          <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-widest">
            MOLDOVA<br />
            SECURITY<br />
            FORUM<br />
            <span className="text-blue-300">2025</span>
          </h1>

          {/* Date and Location */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 font-medium">
            18-19 November 2025 | MAIB Park, Chișinău
          </p>

          {/* Description */}
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Join us at one of the most significant security events in the region,
            bringing together leaders, experts, and practitioners from across the
            world to discuss Moldova&apos;s security challenges, regional stability,
            and evolving global threats.
          </p>

          {/* CTA Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors duration-200 flex items-center gap-3 mx-auto"
          >
            REGISTER HERE
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          className="w-full h-16 md:h-24" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,60 C400,120 800,0 1200,60 L1200,120 L0,120 Z" 
            fill="#f8fafc"
          />
        </svg>
      </div>

      <PreRegisterModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}