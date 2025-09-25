import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AgendaPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AGENDA
          </h1>
          <p className="text-xl text-blue-100 mb-4">
            Moldova Security Forum 2025
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Two days of intensive discussions on hybrid threats, regional security, and democratic resilience
          </p>
        </div>
      </section>

      {/* Agenda Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Day 1 */}
          <div className="mb-16">
            <div className="bg-blue-900 text-white p-6 rounded-t-2xl">
              <h2 className="text-3xl font-bold">Day 1 – 18 November 2025</h2>
            </div>
            
            <div className="bg-white rounded-b-2xl shadow-lg overflow-hidden">
              <div className="divide-y divide-gray-200">
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Opening Plenary</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Moldova&apos;s vision for countering hybrid threats and enhancing national resilience
                  </p>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Plenary Session I</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Building Resilience in the Black Sea Region
                  </p>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Plenary Session II</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Democracy under siege: foreign information manipulations and interference in Moldova&apos;s electoral process
                  </p>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Plenary Session III</h3>
                  <p className="text-gray-700 leading-relaxed">
                    From Risk to Resilience: Crisis Management in the New Age of Hybrid Threats
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="mb-16">
            <div className="bg-blue-900 text-white p-6 rounded-t-2xl">
              <h2 className="text-3xl font-bold">Day 2 – 19 November 2025</h2>
            </div>
            
            <div className="bg-white rounded-b-2xl shadow-lg overflow-hidden">
              <div className="divide-y divide-gray-200">
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Parallel Sessions A</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Session A1</h4>
                      <p className="text-gray-700 text-sm">
                        Fight against disinformation and strengthening of strategic communication
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Session A2</h4>
                      <p className="text-gray-700 text-sm">
                        Strengthening energy security through strategic vision and cooperation
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Parallel Sessions B</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Session B1</h4>
                      <p className="text-gray-700 text-sm">
                        Electoral corruption and illegal financial streams
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Session B2</h4>
                      <p className="text-gray-700 text-sm">
                        Behind the Screens: Cyber Threats, Surveillance Tactics, and the Battle for Moldova&apos;s Democracy
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Final Plenary</h3>
                  <p className="text-gray-700 leading-relaxed">
                    From Mapping to Response: A Shared Strategy for Countering Hybrid Threats in the Black Sea region
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Key Information */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Session Format</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Plenary Sessions</h4>
                <p className="text-sm text-gray-600">High-level discussions with distinguished speakers</p>
              </div>
              <div>
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Roundtable Discussions</h4>
                <p className="text-sm text-gray-600">Interactive dialogue under Chatham House Rule</p>
              </div>
              <div>
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Thematic Panels</h4>
                <p className="text-sm text-gray-600">Focused discussions on specific security challenges</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      
      <Footer />
    </div>
  )
}