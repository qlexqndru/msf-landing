export default function MassMedia() {
  const mediaHighlights = [
    {
      title: "Special Addresses:",
      description: "Keynote speeches by NATO officials, EU representatives;",
      bgColor: "from-blue-900 to-slate-900"
    },
    {
      title: "High-Level Panels:",
      description: "Featuring discussions led by international experts on the future of Moldova's security, regional cooperation, and resilience;",
      bgColor: "from-purple-900 to-blue-900"
    },
    {
      title: "Networking Opportunities:",
      description: "Engage with policymakers, experts, and fellow participants during coffee breaks, receptions, and side events.",
      bgColor: "from-indigo-900 to-purple-900"
    }
  ]

  return (
    <section className="py-20" style={{ backgroundColor: '#F0EFF1' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-4xl font-bold text-blue-600 mb-12">
          MASS-MEDIA AND PRESS
        </h2>

        {/* Media Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaHighlights.map((highlight, index) => (
            <div key={index} className="group">
              {/* Background Card */}
              <div className={`bg-gradient-to-br ${highlight.bgColor} rounded-lg h-48 mb-6 relative overflow-hidden`}>
                {/* Decorative geometric shapes */}
                <div className="absolute inset-0">
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 transform rotate-45"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-400/20 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-white/5 transform -translate-x-1/2 -translate-y-1/2 rotate-12"></div>
                  
                  {/* Media/Press icons */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/20">
                      {index === 0 && (
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9V7h9v14z"/>
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Additional decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-blue-600 font-bold text-lg mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}