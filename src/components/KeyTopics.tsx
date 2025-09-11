export default function KeyTopics() {
  const topics = [
    {
      title: "Moldova's security vision",
      image: "military-silhouette"
    },
    {
      title: "EU Integration for security", 
      image: "military-silhouette"
    },
    {
      title: "NATO at 75",
      image: "military-silhouette"
    },
    {
      title: "Hybrid warfare",
      image: "military-silhouette"
    }
  ]

  return (
    <section id="agenda" className="py-20" style={{ backgroundColor: '#F0EFF1' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800">
            KEY TOPICS
          </h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
            View the full agenda
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic, index) => (
            <div 
              key={index}
              className="relative bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900 rounded-lg overflow-hidden h-64 group hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Background with military silhouette effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              
              {/* Decorative elements to simulate military silhouettes */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent">
                <div className="absolute bottom-0 left-4 w-8 h-16 bg-black/60 transform skew-x-12"></div>
                <div className="absolute bottom-0 left-12 w-6 h-12 bg-black/60"></div>
                <div className="absolute bottom-0 right-8 w-10 h-20 bg-black/60 transform -skew-x-6"></div>
                <div className="absolute bottom-0 right-20 w-4 h-8 bg-black/60"></div>
              </div>

              {/* EU Flag simulation for certain cards */}
              {(topic.title.includes('EU') || topic.title.includes('NATO')) && (
                <div className="absolute top-4 right-4 w-12 h-8 bg-blue-600 rounded-sm flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-0.5">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-yellow-300 rounded-full"></div>
                    ))}
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h3 className="text-white font-bold text-lg leading-tight">
                  {topic.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}