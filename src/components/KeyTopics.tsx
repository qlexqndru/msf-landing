'use client'

export default function KeyTopics() {
  const topics = [
    {
      title: "Moldova's Vision for Countering Hybrid Threats",
      description: "Strategic approaches for enhancing national resilience and institutional adaptability",
      bgImage: "/MSF-BG00-10.jpg"
    },
    {
      title: "Building Resilience in the Black Sea Region", 
      description: "Regional cooperation frameworks and joint initiatives for collective security",
      bgImage: "/MSF-BG00-20.jpg"
    },
    {
      title: "Democracy Under Siege: Electoral Interference",
      description: "Foreign information manipulations and threats to Moldova's democratic processes",
      bgImage: "/MSF-BG00-30.jpg"
    },
    {
      title: "Crisis Management & Hybrid Threats",
      description: "Innovative strategies for turning vulnerabilities into resilience capabilities",
      bgImage: "/MSF-BG00-40.jpg"
    },
    {
      title: "Fight Against Disinformation",
      description: "Strategic communication and building credible narratives against hostile campaigns",
      bgImage: "/MSF-BG00-50.jpg"
    },
    {
      title: "Energy Security & Strategic Cooperation",
      description: "Regional partnerships for reducing energy vulnerabilities and dependencies",
      bgImage: "/MSF-BG00-60.jpg"
    },
    {
      title: "Electoral Corruption & Financial Streams",
      description: "Monitoring tools and preventive mechanisms to protect electoral integrity",
      bgImage: "/MSF-BG010-0.jpg"
    },
    {
      title: "Cyber Threats & Surveillance Tactics",
      description: "Digital infrastructure security and cyber defense against democratic threats",
      bgImage: "/MSF-BG-.jpg"
    }
  ]

  return (
    <section id="agenda" className="py-20" style={{ backgroundColor: 'rgba(3, 72, 137, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold" style={{ color: '#034889' }}>
            KEY TOPICS
          </h2>
          <a href="/agenda" className="font-medium flex items-center gap-2 transition-colors duration-200" style={{ color: '#034889' }} onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = '#031226'} onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = '#034889'}>
            View the full agenda
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic, index) => (
            <div 
              key={index}
              className="relative rounded-lg overflow-hidden h-80 group hover:transform hover:scale-105 transition-all duration-300"
              style={{
                backgroundImage: `url(${topic.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'left center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              {/* Additional overlay for text area */}
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

              {/* Topic indicator icon */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h3 className="text-white font-bold text-lg leading-tight mb-2">
                  {topic.title}
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed opacity-95">
                  {topic.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}