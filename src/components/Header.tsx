'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PreRegisterModal from './PreRegisterModal'

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <header className="navbar-bg shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Moldova Security Forum"
              width={540}
              height={180}
              className="h-28 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/#about" 
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              About MSF
            </Link>
            <Link 
              href="/agenda" 
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Agenda
            </Link>
            <Link 
              href="/#contact" 
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Contact Us
            </Link>
          </nav>

          {/* Register Button */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200 flex items-center gap-2"
            >
              REGISTER NOW
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
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