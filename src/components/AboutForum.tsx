import Image from 'next/image'

export default function AboutForum() {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#E8EDF5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Section Header */}
          <p className="font-semibold text-lg mb-4 tracking-wide" style={{ color: '#034889' }}>
            ABOUT THE FORUM
          </p>
          
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            <span style={{ color: '#034889' }}>DEMOCRACY UNDER PRESSURE:</span><br />
            COUNTERING HYBRID THREATS IN A<br />
            FRACTURED SECURITY ORDER
          </h2>

          {/* Edition & Details */}
          <div className="mb-8">
            <p className="text-xl font-semibold text-gray-800 mb-2">Second Edition</p>
            <p className="text-lg text-gray-600 mb-4">18–19 November 2025 | MAIB Park, Chișinău</p>
            <p className="text-lg font-medium" style={{ color: '#034889' }}>Expected 250+ Participants</p>
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
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Organized by</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <div className="flex items-center justify-center p-4">
                <Image
                  src="/logo-kas.png"
                  alt="Konrad Adenauer Stiftung (KAS)"
                  width={180}
                  height={90}
                  className="max-w-full max-h-24 object-contain"
                  unoptimized={true}
                />
              </div>
              <div className="flex items-center justify-center p-4">
                <Image
                  src="/maeie.png"
                  alt="Ministry of Foreign Affairs of Moldova"
                  width={180}
                  height={90}
                  className="max-w-full max-h-24 object-contain"
                  unoptimized={true}
                />
              </div>
              <div className="flex items-center justify-center p-4">
                <Image
                  src="/IPRE.png"
                  alt="Institute for European Policies and Reforms (IPRE)"
                  width={180}
                  height={90}
                  className="max-w-full max-h-24 object-contain"
                  unoptimized={true}
                />
              </div>
              <div className="flex items-center justify-center p-4">
                <Image
                  src="/logo-nato.jpg"
                  alt="NATO"
                  width={300}
                  height={180}
                  className="max-w-full max-h-48 object-contain"
                  unoptimized={true}
                />
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-gray-600 text-sm">
                In partnership with regional and international security organizations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}