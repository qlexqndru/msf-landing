'use client'

export default function ContactUs() {
  return (
    <section id="contact" className="text-white py-20" style={{ backgroundColor: '#034889' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">CONTACT US</h2>
          <p className="text-blue-100 mb-12 text-lg leading-relaxed">
            For more information about the Moldova Security Forum 2025, 
            please reach out to our team using the contact details below:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* General Inquiries */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                General Inquiries:
              </h3>
              <p className="text-blue-100 text-lg">
                Email: <a href="mailto:info@securityforum.md" className="underline hover:opacity-80 transition-opacity">
                  info@securityforum.md
                </a>
              </p>
            </div>

            {/* Media Inquiries */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Media Inquiries:
              </h3>
              <p className="text-blue-100 text-lg">
                Email: <a href="mailto:media@securityforum.md" className="underline hover:opacity-80 transition-opacity">
                  media@securityforum.md
                </a>
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="border-t border-blue-400/30 pt-8">
            <h3 className="text-xl font-semibold mb-4">Stay Connected:</h3>
            <p className="text-blue-100 mb-6">Follow us for the latest updates and announcements:</p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="p-3 rounded-full transition-all duration-200 hover:scale-110" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.3)'} onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="bg-blue-600/30 hover:bg-blue-500/50 p-3 rounded-full transition-all duration-200 hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="bg-blue-600/30 hover:bg-blue-500/50 p-3 rounded-full transition-all duration-200 hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <p className="text-blue-200 font-medium">
              #MoldovaSecurityForum #MSF2025 #HybridThreats #RegionalSecurity
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}