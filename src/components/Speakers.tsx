'use client'

import { useState } from 'react'

export default function Speakers() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const speakers = [
    {
      name: "Peter Weber",
      title: "Head of Department EIC",
      subtitle: "@European Innovation Council and SMEs Executive Agency",
      image: "placeholder-speaker.jpg"
    },
    {
      name: "Peter Weber",
      title: "Head of Department EIC", 
      subtitle: "@European Innovation Council and SMEs Executive Agency",
      image: "placeholder-speaker.jpg"
    },
    {
      name: "Peter Weber",
      title: "Head of Department EIC",
      subtitle: "@European Innovation Council and SMEs Executive Agency", 
      image: "placeholder-speaker.jpg"
    },
    {
      name: "Peter Weber",
      title: "Head of Department EIC",
      subtitle: "@European Innovation Council and SMEs Executive Agency",
      image: "placeholder-speaker.jpg"
    },
    {
      name: "Peter Weber",
      title: "Head of Department EIC",
      subtitle: "@European Innovation Council and SMEs Executive Agency",
      image: "placeholder-speaker.jpg"
    }
  ]

  const speakersPerSlide = 5
  const totalSlides = Math.ceil(speakers.length / speakersPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-4xl font-bold text-blue-800 mb-12">
          SPEAKERS
        </h2>

        {/* Speakers Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {speakers
                      .slice(slideIndex * speakersPerSlide, (slideIndex + 1) * speakersPerSlide)
                      .map((speaker, index) => (
                        <div key={index} className="text-center group">
                          {/* Speaker Image */}
                          <div className="relative mb-4 overflow-hidden rounded-lg">
                            <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
                              {/* Placeholder professional headshot */}
                              <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                                <svg className="w-16 h-16 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                </svg>
                              </div>
                              
                              {/* Overlay with speaker info */}
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                <h3 className="text-white font-bold text-lg">
                                  {speaker.name}
                                </h3>
                                <p className="text-blue-200 text-sm font-medium">
                                  {speaker.title}
                                </p>
                                <p className="text-gray-300 text-xs">
                                  {speaker.subtitle}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dots Navigation */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}