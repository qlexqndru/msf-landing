'use client'

import { useState } from 'react'
import PreRegisterModal from './PreRegisterModal'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <section className="relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          poster="/video-poster.jpg"
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* WebM for better compression and browser support */}
          <source 
            src="/msf-bg-desktop.webm" 
            type="video/webm"
            media="(min-width: 768px)"
          />
          {/* Optimized MP4 for desktop */}
          <source 
            src="/msf-bg-desktop.mp4" 
            type="video/mp4"
            media="(min-width: 768px)"
          />
          {/* Mobile-optimized version */}
          <source 
            src="/msf-bg-mobile.mp4" 
            type="video/mp4"
            media="(max-width: 767px)"
          />
          {/* Fallback for older browsers */}
          <source src="/msf-bg-desktop.mp4" type="video/mp4" />
        </video>
        
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-transparent to-blue-900/50"></div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/8 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-300/8 rounded-full filter blur-2xl"></div>
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-blue-500/6 rounded-full filter blur-2xl"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 min-h-screen flex items-center">
        <div className="text-center w-full">
          {/* Main Title */}
          <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-widest drop-shadow-2xl">
            MOLDOVA<br />
            SECURITY<br />
            FORUM<br />
            <span className="text-blue-300">2025</span>
          </h1>

          {/* Date and Location */}
          <p className="text-xl md:text-2xl text-white mb-8 font-medium drop-shadow-lg">
            18-19 November 2025 | MAIB Park, Chișinău
          </p>

          {/* Description */}
          <p className="text-lg text-white/95 max-w-4xl mx-auto mb-12 leading-relaxed drop-shadow-md">
            Join us at one of the most significant security events in the region,
            bringing together leaders, experts, and practitioners from across the
            world to discuss Moldova&apos;s security challenges, regional stability,
            and evolving global threats.
          </p>

          {/* CTA Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center gap-3 mx-auto shadow-2xl hover:shadow-xl hover:scale-105 transform"
            style={{ 
              backgroundColor: '#034889',
              borderWidth: '2px',
              borderColor: 'rgba(255, 255, 255, 0.3)',
              backgroundImage: 'linear-gradient(135deg, #2E9CA8 0%, #034889 100%)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundImage = 'linear-gradient(135deg, #034889 0%, #031226 100%)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundImage = 'linear-gradient(135deg, #2E9CA8 0%, #034889 100%)'
            }}
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
            fill="#E8EDF5"
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