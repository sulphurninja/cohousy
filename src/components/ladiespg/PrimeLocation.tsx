'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Building2, Coffee, ShoppingBag, Briefcase, Car } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const locationCategories = [
  {
    title: 'Major IT Companies',
    icon: Building2,
    places: [
      { name: 'Eon IT Park Kharadi', distance: '5 mins walk', companies: 'Credit Suisse, Eaton, Synechron - Perfect for female IT professionals' },
      { name: 'World Trade Center (WTC)', distance: '7 mins', companies: 'UBS, Allstate - Premier business hub for women executives' },
      { name: 'Gera Commerzone', distance: '8 mins', companies: 'Barclays, Honeywell - Leading employers of women professionals' }
    ]
  },
  {
    title: 'Safety & Convenience',
    icon: Coffee,
    places: [
      { name: 'Phoenix Marketcity', distance: '15 mins', companies: 'Safe shopping & dining destination for women' },
      { name: 'Kharadi Police Station', distance: '5 mins', companies: 'Quick emergency response and women safety support' },
      { name: 'Manipal Hospital', distance: '10 mins', companies: 'Premium healthcare facility with women-specialized services' }
    ]
  },
  {
    title: 'Professional Networks',
    icon: Briefcase,
    places: [
      { name: 'TCS Kharadi', distance: '12 mins', companies: 'Largest employer of women in IT sector' },
      { name: 'Wipro Kharadi', distance: '15 mins', companies: 'Leading technology company with diverse workforce' },
      { name: 'Symbiosis University', distance: '20 mins', companies: 'Educational hub for continuing professional development' }
    ]
  }
]

export default function PrimeLocation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section
      ref={containerRef}
      className="py-section bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={withMotion(fadeInUp)}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-pink-50 border border-pink-100 rounded-full shadow-sm">
              <MapPin size={16} className="inline mr-2 text-pink-600" />
              PRIME LOCATION ADVANTAGES
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Strategic Location for
            <span className="text-pink-600"> Professional Women</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto"
          >
            Location is everything when choosing a ladies PG in Kharadi Pune. Our strategic placement
            puts you at the center of convenience, safety, and professional opportunities. Just a short
            walk from Eon IT Park Kharadi, home to over 50 major companies employing thousands of women.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Category Tabs and Places */}
          <motion.div
            variants={withMotion(staggerContainer)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {locationCategories.map((category, index) => {
                const IconComponent = category.icon
                return (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeCategory === index
                        ? 'bg-pink-600 text-white shadow-sm'
                        : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50 border border-pink-200'
                      }`}
                  >
                    <IconComponent size={16} />
                    {category.title}
                  </button>
                )
              })}
            </div>

            {/* Places List */}
            <div className="space-y-6">
              {locationCategories[activeCategory].places.map((place, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors duration-300"
                >
                  <div className="w-2 h-2 bg-pink-600 rounded-full mt-3 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-black">{place.name}</h3>
                      <span className="text-sm font-medium text-pink-600">{place.distance}</span>
                    </div>
                    <p className="text-sm text-gray-600">{place.companies}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Location Map */}
          <motion.div
            variants={withMotion(fadeInUp)}
            className="relative md:aspect-[2/1] aspect-[1/2]  bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg"
          >
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1878899882404!2d73.9100897!3d18.565566099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3bb9f17daa1%3A0x1a664f6f722abb15!2sShinde%20Sarkar%20%2301%20Complex!5e0!3m2!1sen!2sin!4v1742375299996!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cohousy Location - Kharadi, Pune"
              className="absolute inset-0"
            />

            {/* Overlay Information Panel */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent pointer-events-none">
              <div className="max-w-lg p-8 lg:p-12 text-white h-full flex flex-col justify-center">
                <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    Strategic Kharadi Location
                  </h3>
                  {/* <div className="space-y-2 mb-4">
                      <p className="text-sm lg:text-base text-white/90 flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                        <strong>Coordinates:</strong> {18.565566099999998}°N, {73.9100897}°E
                      </p>
                      <p className="text-sm lg:text-base text-white/90 flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        <strong>Address:</strong> Shinde Sarkar #01 Complex, Kharadi
                      </p>
                    </div> */}
                  <p className="text-lg lg:text-xl text-white/90 mb-6 leading-relaxed">
                    Positioned at the epicenter of Pune's IT corridor with unmatched
                    connectivity to major business hubs.
                  </p>
                  <button
                    onClick={() => window.open(`https://www.google.com/maps/place/${18.565566099999998},${73.9100897}`, '_blank')}
                    className="bg-accent text-black px-6 py-3 font-semibold rounded-lg hover:shadow-lg hover:bg-accent/90 transition-all duration-300 pointer-events-auto inline-flex items-center space-x-2"
                  >
                    <span>Open in Google Maps</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Location Markers/Pins for nearby places */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg pointer-events-none">
              <div className="text-xs font-semibold text-gray-800 mb-1">Nearby IT Parks</div>
              <div className="space-y-1">
                <div className="flex items-center text-xs text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  EON IT Park - 2km
                </div>
                <div className="flex items-center text-xs text-gray-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  World Trade Center - 3km
                </div>
                <div className="flex items-center text-xs text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Magarpatta City - 3km
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Safety Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 bg-pink-50 rounded-2xl border border-pink-100 p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Why This Location is Perfect for Women
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our prime positioning not only enhances daily convenience but also boosts safety with
              well-lit streets, proximity to emergency services, and a thriving community of professional women.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Car size={32} className="text-pink-600 mx-auto mb-3" />
              <h4 className="font-semibold text-black mb-2">Safe Commute</h4>
              <p className="text-sm text-gray-600">Well-connected routes with women-safe transport options</p>
            </div>
            <div className="text-center">
              <Building2 size={32} className="text-pink-600 mx-auto mb-3" />
              <h4 className="font-semibold text-black mb-2">Professional Hub</h4>
              <p className="text-sm text-gray-600">Surrounded by companies with 40%+ female workforce</p>
            </div>
            <div className="text-center">
              <MapPin size={32} className="text-pink-600 mx-auto mb-3" />
              <h4 className="font-semibold text-black mb-2">24/7 Safety</h4>
              <p className="text-sm text-gray-600">Police station & emergency services within 5 minutes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}