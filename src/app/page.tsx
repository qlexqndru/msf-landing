'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutForum from '@/components/AboutForum'
import KeyTopics from '@/components/KeyTopics'
import LastYear from '@/components/LastYear'
import RegisterNow from '@/components/RegisterNow'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'
import PreRegisterModal from '@/components/PreRegisterModal'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    if (searchParams.get('register') === 'true') {
      setIsModalOpen(true)
      // Clean up URL without the parameter
      window.history.replaceState({}, '', '/')
    }
  }, [searchParams])

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutForum />
      <KeyTopics />
      <LastYear />
      <RegisterNow />
      <ContactUs />
      <Footer />
      
      <PreRegisterModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
}