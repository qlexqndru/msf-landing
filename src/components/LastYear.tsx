'use client'

import { useState } from 'react'

export default function LastYear() {
  const [currentImage, setCurrentImage] = useState(0)
  
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

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            MSF 2024: A Successful First Edition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The inaugural Moldova Security Forum addressed crucial national and regional security challenges, bringing together high-level officials, policymakers, and experts to foster meaningful dialogue and collaboration.
          </p>
        </div>

        {/* Photo Carousel */}
        <div className="relative mb-16">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
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
                    ? 'ring-4 ring-blue-500 shadow-lg' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-700">Participants</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">28</div>
            <div className="text-gray-700">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">2</div>
            <div className="text-gray-700">Days</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">1st</div>
            <div className="text-gray-700">Edition</div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Focus Areas</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Resilience against hybrid attacks and disinformation</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Cybersecurity and artificial intelligence threats</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">NATO&apos;s evolving partnerships and cooperation</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">EU as a security actor in the region</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Democratic protection and electoral integrity</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Distinguished Speakers</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Igor Grosu, Speaker of Parliament of Moldova</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Justin Suni, Acting Head of NATO Liaison Office</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Jānis Mažeiks, EU Ambassador to Moldova</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">International security experts and policymakers</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Representatives from 28 countries</span>
              </li>
            </ul>
          </div>
        </div>


        {/* Impact Statement */}
        <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 text-center">
          <blockquote className="text-xl text-gray-800 italic mb-4">
            &ldquo;Moldova Security Forum offers a unique opportunity to address security challenges head-on and identify solutions to increase security, resilience and alignment of Moldova with the European community.&rdquo;
          </blockquote>
          <cite className="text-gray-600 font-medium">Iulian Groza, Executive Director IPRE</cite>
        </div>
      </div>
    </section>
  )
}