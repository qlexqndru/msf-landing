import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AgendaPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20" style={{
        background: 'linear-gradient(135deg, #034889 0%, #031226 100%)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AGENDA
          </h1>
          <p className="text-xl text-blue-200 mb-4">
            Moldova Security Forum 2025
          </p>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Two days of intensive discussions on hybrid threats, regional security, and democratic resilience
          </p>
        </div>
      </section>

      {/* Agenda Content */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Day 1 */}
          <div className="mb-16">
            <div className="text-white p-6 rounded-t-2xl" style={{ backgroundColor: '#034889' }}>
              <h2 className="text-3xl font-bold">Day 1 – 18 November 2025</h2>
            </div>
            
            <div className="bg-white rounded-b-2xl shadow-lg overflow-hidden">
              <div className="divide-y divide-gray-200">
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Opening Plenary | Moldova&apos;s vision for countering hybrid threats and enhancing national resilience</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The opening session will outline Moldova&apos;s strategic vision for strengthening national resilience against hybrid threats. It will highlight prevention measures, institutional adaptability, and the importance of international partnerships in safeguarding democracy and security.
                  </p>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Plenary Session I | Building Resilience in the Black Sea Region</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This session will explore how Black Sea countries can enhance regional cooperation to address shared vulnerabilities. Best practices, joint initiatives, and policy frameworks will be discussed as key tools for strengthening collective resilience.
                  </p>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Plenary Session II | Democracy under siege: foreign information manipulations and interference in Moldova&apos;s electoral process</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Participants will examine the growing threat of foreign disinformation and electoral interference targeting Moldova&apos;s democratic processes. The discussion will emphasize transparency, citizen awareness, and protective mechanisms to ensure free and fair elections.
                  </p>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Plenary Session III | From Risk to Resilience: Crisis Management in the New Age of Hybrid Threats</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The session will focus on how hybrid threats generate new forms of crises requiring innovative management strategies. Experts will share approaches for turning vulnerabilities into long-term resilience capabilities.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="mb-16">
            <div className="text-white p-6 rounded-t-2xl" style={{ backgroundColor: '#034889' }}>
              <h2 className="text-3xl font-bold">Day 2 – 19 November 2025</h2>
            </div>
            
            <div className="bg-white rounded-b-2xl shadow-lg overflow-hidden">
              <div className="divide-y divide-gray-200">
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Parallel Sessions A</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Parallel Session A1 | Fight against disinformation and strengthening of strategic communication</h4>
                      <p className="text-gray-700 text-sm">
                        This session will address effective strategies to counter disinformation and improve strategic communication. Participants will discuss ways to build credible narratives that resist hostile campaigns and strengthen public trust.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Parallel Session A2 | Strengthening energy security through strategic vision and cooperation</h4>
                      <p className="text-gray-700 text-sm">
                        The debate will highlight energy security as a cornerstone of national resilience. It will focus on opportunities for regional cooperation and the development of a long-term strategic vision to reduce vulnerabilities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Parallel Sessions B</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Parallel Session B1 | Electoral corruption and illegal financial streams</h4>
                      <p className="text-gray-700 text-sm">
                        This session will analyze how electoral corruption and illicit financial flows undermine democratic systems, especially looking at the experiences during electoral period of time in the Republic of Moldova. Discussions will emphasize monitoring tools, preventive mechanisms, and enforcement measures to protect electoral integrity.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Parallel Session B2 | Behind the Screens: Cyber Threats, Surveillance Tactics, and the Battle for Moldova&apos;s Democracy</h4>
                      <p className="text-gray-700 text-sm">
                        Participants will explore the rising risks posed by cyberattacks and surveillance tactics that threaten democratic institutions. The session will stress the need for a secure digital infrastructure and strong cyber defense capacities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Final Plenary | From Mapping to Response: A Shared Strategy for Countering Hybrid Threats in the Black Sea region</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The final plenary will consolidate the conference&apos;s findings into a regional strategy for countering hybrid threats. It will underline the shift from threat-mapping to coordinated, actionable responses at the Black Sea level.
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