import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#1F2F59' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Navigation Links */}
          <div>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm">About MSF 2025</a></li>
              <li><a href="#agenda" className="text-gray-300 hover:text-white transition-colors text-sm">Key Topics</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 2 - Legal */}
          <div>
            <ul className="space-y-2">
              <li><a href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">Terms & Privacy</a></li>
            </ul>
          </div>

          {/* Column 3 - Social Media */}
          <div>
            <span className="text-gray-300 text-sm">Follow us:</span>
            <div className="flex space-x-2 mt-2">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 4 - Logo */}
          <div className="flex flex-col items-end justify-start">
            <Image
              src="/logo2.png"
              alt="Moldova Security Forum"
              width={450}
              height={150}
              className="h-36 w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}