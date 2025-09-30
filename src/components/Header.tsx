'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PreRegisterModal from './PreRegisterModal'

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  return (
    <header className="navbar-bg shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24 md:h-32">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Moldova Security Forum"
              width={540}
              height={180}
              className="h-16 sm:h-20 md:h-28 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/#about" 
              className="text-gray-700 font-medium transition-opacity hover:opacity-70"
              style={{ color: '#2E5A8A' } as React.CSSProperties}
            >
              About MSF
            </Link>
            <Link 
              href="/agenda" 
              className="text-gray-700 hover:opacity-70 font-medium"
            >
              Agenda
            </Link>
            <Link 
              href="/#contact" 
              className="text-gray-700 hover:opacity-70 font-medium"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button & Register Button */}
          <div className="flex items-center gap-2">
            {/* Mobile Register Button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="md:hidden text-white px-3 py-2 rounded-md font-medium text-sm"
              style={{ backgroundColor: '#2E5A8A' }}
            >
              REGISTER
            </button>
            
            {/* Desktop Register Button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hidden md:flex text-white px-6 py-2 rounded-md font-medium transition-opacity duration-200 items-center gap-2 hover:opacity-90"
              style={{ backgroundColor: '#2E5A8A' }}
            >
              REGISTER NOW
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/#about" 
                className="block px-3 py-2 text-gray-700 font-medium hover:bg-gray-100 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About MSF
              </Link>
              <Link 
                href="/agenda" 
                className="block px-3 py-2 text-gray-700 font-medium hover:bg-gray-100 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agenda
              </Link>
              <Link 
                href="/#contact" 
                className="block px-3 py-2 text-gray-700 font-medium hover:bg-gray-100 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>

      <PreRegisterModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
      <script 
        async 
        id="toolbar-script" 
        data-toolbar-api-key="c23c3a00-02a6-4a61-b1f3-8b257da0184c" 
        src="https://get.usetool.bar/embedded-app.js"
      />
    </header>
  )
}