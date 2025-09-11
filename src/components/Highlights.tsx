export default function Highlights() {
  const highlights = [
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-4xl font-bold text-blue-800 mb-12">
          HIGHLIGHTS
        </h2>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="group">
              {/* Background Card */}
              <div className={`bg-gradient-to-br ${highlight.bgColor} rounded-lg h-48 mb-6 relative overflow-hidden`}>
                {/* Decorative geometric shapes */}
                <div className="absolute inset-0">
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 transform rotate-45"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-400/20 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-white/5 transform -translate-x-1/2 -translate-y-1/2 rotate-12"></div>
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