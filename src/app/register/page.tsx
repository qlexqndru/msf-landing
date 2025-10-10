'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to homepage with a parameter to open the modal
    router.push('/?register=true')
  }, [router])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600">Redirecting to registration...</p>
      </div>
    </div>
  )
}