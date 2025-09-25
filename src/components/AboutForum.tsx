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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-blue-600">DEMOCRACY UNDER PRESSURE:</span><br />
            COUNTERING HYBRID THREATS IN A<br />
            FRACTURED SECURITY ORDER
          </h2>

          {/* Edition & Details */}
          <div className="mb-8">
            <p className="text-xl font-semibold text-gray-800 mb-2">Second Edition</p>
            <p className="text-lg text-gray-600 mb-4">18–19 November 2025 | MAIB Park, Chișinău</p>
            <p className="text-lg text-blue-600 font-medium">Expected 250+ Participants</p>
          </div>

          {/* Description */}
          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              The Moldova Security Forum 2025 will bring together government officials, diplomats, representatives of EU and NATO institutions, 
              leading think tanks, and civil society to address the growing complexity of hybrid threats targeting democratic resilience, 
              electoral processes, and the European integration path of the Republic of Moldova.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Over two days, the program will feature plenary sessions, thematic panels, and roundtable discussions held under the 
              Chatham House Rule, focusing on disinformation, algorithmic warfare, cyber threats, economic dependencies, 
              and coordinated regional response strategies.
            </p>
          </div>

          {/* Organizers */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Organized by</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Konrad Adenauer Stiftung</h4>
                <p className="text-sm text-gray-600">(KAS)</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">NATO Liaison Office</h4>
                <p className="text-sm text-gray-600">(NLO)</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Institute for European Policies and Reforms</h4>
                <p className="text-sm text-gray-600">(IPRE)</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-center text-gray-600 text-sm">
                In close cooperation with the Presidency of the Republic of Moldova and the Ministry of Foreign Affairs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}