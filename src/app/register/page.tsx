'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import PreRegisterModal from '@/components/PreRegisterModal'

export default function RegisterPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsModalOpen(true)
  }, [])

  const handleClose = () => {
    setIsModalOpen(false)
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <PreRegisterModal 
        isOpen={isModalOpen} 
        onClose={handleClose} 
      />
      {/* Fallback content if modal is closed */}
      {!isModalOpen && (
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Registration</h1>
          <p className="text-gray-600 mb-6">The registration form is loading...</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Open Registration Form
          </button>
        </div>
      )}
    </div>
  )
}