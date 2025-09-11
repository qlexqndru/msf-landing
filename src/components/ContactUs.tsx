export default function ContactUs() {
  return (
    <section id="contact" className="text-white py-20" style={{ backgroundColor: '#2B5CE6' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">CONTACT US</h2>
          <p className="text-blue-100 mb-12 text-lg leading-relaxed">
            The Moldova Security Forum 2025 is made possible through the 
            support and collaboration of our esteemed partners:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* General Inquiries */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                General Inquiries:
              </h3>
              <p className="text-blue-100 text-lg">
                Email: <a href="mailto:info@securityforum.md" className="underline hover:text-white transition-colors">
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
                Email: <a href="mailto:media@securityforum.md" className="underline hover:text-white transition-colors">
                  media@securityforum.md
                </a>
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <p className="text-lg mb-4">Stay updated by following our social media channels:</p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
            <p className="text-blue-200">
              #MoldovaSecurityForum #MSF25
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}