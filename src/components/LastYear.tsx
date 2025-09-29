'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function LastYear() {
  const [currentImage, setCurrentImage] = useState(0)
  const [currentQuote, setCurrentQuote] = useState(0)
  
  const images = [
    {
      src: "/54153926367_754aea7cee_b.jpg",
      alt: "MSF 2024 Panel Discussion"
    },
    {
      src: "/54155103799_037a84a81d_b.jpg",
      alt: "MSF 2024 Networking Session"
    },
    {
      src: "/54155239265_600002a4d6_b.jpg",
      alt: "MSF 2024 Opening Ceremony"
    },
    {
      src: "/54155236200_dde2532358_b.jpg",
      alt: "MSF 2024 High-Level Meeting"
    },
    {
      src: "/54155237850_886fc7c6ef_b.jpg",
      alt: "MSF 2024 Expert Discussion"
    },
    {
      src: "/54154776326_03caed621d_b.jpg",
      alt: "MSF 2024 Participants"
    },
    {
      src: "/54155243290_160551cd6f_b.jpg",
      alt: "MSF 2024 Security Forum"
    },
    {
      src: "/54155072768_6fa115dee0_b.jpg",
      alt: "MSF 2024 Conference Hall"
    },
    {
      src: "/54155109834_774f58394c_b.jpg",
      alt: "MSF 2024 International Delegates"
    },
    {
      src: "/54155241770_58a29fd9b9_b.jpg",
      alt: "MSF 2024 Closing Session"
    }
  ]

  const quotes = [
    {
      text: "NATO and its allies deeply value our long-standing partnership with them. This decades-long partnership has fully supported Moldova&apos;s territorial integrity and respected its constitutional neutrality. With Moldova in the driver&apos;s seat, NATO will continue to respond to the priorities set out by our partner.",
      author: "Justin Suni",
      title: "Acting Head of the NATO Liaison Office in Moldova"
    },
    {
      text: "Despite all the destruction, killings, and war crimes we have seen, we are also showing that Ukraine&apos;s security is the region&apos;s security; it&apos;s Europe&apos;s security. The war in Ukraine shows that imperialistic ambitions are on the rise and that there are also new threats to democracy.",
      author: "Jānis Mažeiks",
      title: "Ambassador of the European Union to Moldova"
    },
    {
      text: "Democracy and freedom need security and social resilience against authoritarian development, disinformation, and propaganda. With our projects, we support a democratic and self-determined Republic of Moldova integrated into the European Union.",
      author: "Brigitta Triebel",
      title: "Director, Konrad Adenauer Foundation Republic of Moldova"
    },
    {
      text: "This forum offers a unique opportunity to address these challenges head-on. Over the next two days, we&apos;ll discuss NATO&apos;s evolving partnerships, the role of the EU as a security actor and the multidimensional nature of hybrid threats.",
      author: "Iulian Groza",
      title: "Executive Director of IPRE"
    },
    {
      text: "From 2021 to 2024, the European Peace Facility&apos;s support to the modern Armed Forces has reached 137 million euros, making Moldova the second largest recipient of bilateral support under this instrument.",
      author: "Jānis Mažeiks",
      title: "Ambassador of the European Union to Moldova"
    },
    {
      text: "In recent years, Moldova has been the target of unprecedented hybrid attacks, which have intensified this autumn in the context of the presidential elections and the referendum on European Integration. Criminal groups wanted to come to power at all costs. However, Moldova resisted. Our citizens have demonstrated an exemplary mobilization, protecting democracy and the European path.",
      author: "Igor Grosu",
      title: "Speaker of the Parliament of the Republic of Moldova"
    }
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length)
  }

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length)
  }

  // Auto-rotate quotes every 5 seconds
  useEffect(() => {
    const quotesInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 5000)

    return () => clearInterval(quotesInterval)
  }, [quotes.length])

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const imagesInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(imagesInterval)
  }, [images.length])
  return (
    <section className="py-20" style={{ backgroundColor: 'rgba(3, 72, 137, 0.05)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            MSF 2024: A Successful First Edition
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            The first edition of the Moldova Security Forum was attended by more than 500 participants from 28 countries. The Konrad Adenauer Foundation Office in the Republic of Moldova, Institute for European Policies and Reforms and NATO Liaison Office in Moldova organized on 19 - 20 November 2024 the first edition of the Moldova Security Forum.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Moldova Security Forum is a premier regional event that addresses crucial national and regional security challenges, focusing on resilience, disinformation, cyber threats, artificial intelligence, and hybrid threats. The forum brought together high-level officials, distinguished policymakers, academics, representatives of international organizations, and experts to foster meaningful dialogue and collaboration.
          </p>
        </div>

        {/* Photo Carousel */}
        <div className="relative mb-16">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              width={800}
              height={400}
              className={`w-full h-full transition-opacity duration-500 ${
                currentImage === 8 ? 'object-top object-cover' : 'object-cover'
              }`}
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImage + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-6 space-x-2 overflow-x-auto pb-4 pt-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 ${
                  index === currentImage 
                    ? 'ring-4 shadow-lg' 
                    : 'opacity-70 hover:opacity-100'
                }`}
                style={index === currentImage ? { '--tw-ring-color': '#034889' } as React.CSSProperties : {}}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={80}
                  height={60}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: '#034889' }}>500+</div>
            <div className="text-gray-700">Participants</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: '#034889' }}>28</div>
            <div className="text-gray-700">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: '#034889' }}>2</div>
            <div className="text-gray-700">Days</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: '#034889' }}>1st</div>
            <div className="text-gray-700">Edition</div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Focus Areas</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#034889' }}></div>
                <span className="text-gray-700">Resilience against hybrid attacks and disinformation</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#034889' }}></div>
                <span className="text-gray-700">Cybersecurity and artificial intelligence threats</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#034889' }}></div>
                <span className="text-gray-700">NATO&apos;s evolving partnerships and cooperation</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#034889' }}></div>
                <span className="text-gray-700">EU as a security actor in the region</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#034889' }}></div>
                <span className="text-gray-700">Democratic protection and electoral integrity</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Distinguished Speakers</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#034889' }}></div>
                <span className="text-gray-700">Igor Grosu, Speaker of Parliament of Moldova</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#034889' }}></div>
                <span className="text-gray-700">Justin Suni, Acting Head of NATO Liaison Office</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#034889' }}></div>
                <span className="text-gray-700">Jānis Mažeiks, EU Ambassador to Moldova</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#034889' }}></div>
                <span className="text-gray-700">International security experts and policymakers</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#034889' }}></div>
                <span className="text-gray-700">Representatives from 28 countries</span>
              </li>
            </ul>
          </div>
        </div>


        {/* Rotating Quotes Gallery */}
        <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 text-center relative overflow-hidden min-h-[200px]">
          <div className="absolute top-4 right-4 text-sm text-gray-500">
            {currentQuote + 1} / {quotes.length}
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevQuote}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-600 hover:text-gray-800 p-2 rounded-full shadow-md transition-all duration-200"
            aria-label="Previous quote"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextQuote}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-600 hover:text-gray-800 p-2 rounded-full shadow-md transition-all duration-200"
            aria-label="Next quote"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="transition-all duration-1000 ease-in-out px-12">
            <blockquote className="text-xl text-gray-800 italic mb-6 leading-relaxed">
              &ldquo;{quotes[currentQuote].text}&rdquo;
            </blockquote>
            <cite className="text-gray-600 font-semibold block mb-1">
              {quotes[currentQuote].author}
            </cite>
            <p className="text-gray-500 text-sm">
              {quotes[currentQuote].title}
            </p>
          </div>
          
          {/* Quote indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentQuote 
                    ? 'w-8' 
                    : 'hover:opacity-70'
                }`}
                style={{ 
                  backgroundColor: index === currentQuote ? '#034889' : '#cbd5e1' 
                }}
                aria-label={`View quote ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Organizers</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#034889' }}></div>
                  <span>Konrad Adenauer Foundation Office in the Republic of Moldova</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#034889' }}></div>
                  <span>Institute for European Policies and Reforms (IPRE)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#034889' }}></div>
                  <span>NATO Liaison Office in Moldova</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Partners</h3>
              <div className="text-gray-700 text-sm leading-relaxed">
                <p className="mb-3">The event benefited from partnerships and support of:</p>
                <p>International Republican Institute (IRI), Soros Foundation Moldova, European Union Partnership Mission (EUPM), Tony Blair Institute (TBI), Platform for Security and Defense Initiatives (PISA), Geneva Security Sector Governance Center (DCAF), Geneva Center for Security Policy (GCSP), New Strategy Center (Bucharest), New Europe Center (Kyiv), Aspen Institute, and other national and international organizations.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              More details, including the video recording of the Forum, are available on the official website 
              <a href="https://www.securityforum.md" className="text-blue-600 hover:text-blue-800 font-medium ml-1" target="_blank" rel="noopener noreferrer">
                www.securityforum.md
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}