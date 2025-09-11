export default function AboutForum() {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#F0EFF1' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Section Header */}
          <p className="text-blue-600 font-semibold text-lg mb-4 tracking-wide">
            ABOUT THE FORUM
          </p>
          
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            JOIN US AT ONE OF THE{' '}
            <span className="text-blue-600">MOST SIGNIFICANT SECURITY EVENTS</span>{' '}
            IN THE REGION.
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We will bring together leaders, experts, and practitioners from across the world to discuss Moldova's 
            security challenges, regional stability, and emerging threats. The forum offers a unique platform 
            for high-level debates on security policies, EU and NATO partnerships, and the future of resilience in 
            Moldova and beyond.
          </p>
        </div>
      </div>
    </section>
  )
}