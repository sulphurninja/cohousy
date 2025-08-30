'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Building2, Car, Coffee, Briefcase, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const locationCategories = [
  {
    title: 'IT Companies & Offices',
    icon: Building2,
    places: [
      { name: 'Eon IT Park Kharadi', distance: '5 mins walk', companies: 'Barclays, Credit Suisse, Eaton, Synechron' },
      { name: 'WTC Kharadi', distance: '7 mins walk', companies: 'UBS, Allstate, TCS, Vodafone' },
      { name: 'Gera Commerzone', distance: '10 mins', companies: 'Honeywell, Tata Technologies' },
      { name: 'Various IT Parks', distance: '15 mins', companies: 'Multiple startups and MNCs in vicinity' }
    ]
  },
  {
    title: 'Dining & Entertainment',
    icon: Coffee,
    places: [
      { name: 'Phoenix Marketcity', distance: '15 mins', companies: 'Shopping, dining, and entertainment hub' },
      { name: 'Local Food Courts', distance: '5 mins', companies: 'Affordable meals near IT parks' },
      { name: 'World Trade Center Food Court', distance: '7 mins', companies: 'Premium dining options' },
      { name: 'Street Food Hubs', distance: '10 mins', companies: 'Local favorites and budget-friendly options' }
    ]
  },
  {
    title: 'Transport & Connectivity',
    icon: Car,
    places: [
      { name: 'Pune Airport', distance: '10 km', companies: 'Direct connectivity for business travel' },
      { name: 'Pune Metro Station', distance: '12 mins', companies: 'Easy access to central Pune' },
      { name: 'Bus Stops', distance: '3 mins', companies: 'Regular PMPML and private buses' },
      { name: 'Pune-Mumbai Highway', distance: '5 mins', companies: 'Quick access to Mumbai and other cities' }
    ]
  }
]

export default function LocationAdvantages() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section
      ref={containerRef}
      className="py-section bg-blue-50 relative overflow-hidden"
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-white border border-blue-200 rounded-full shadow-sm">
              <MapPin size={16} className="inline mr-2 text-blue-600" />
              LOCATION ADVANTAGES
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Location Advantages of Our Male PG
            <span className="text-blue-600"> Near Eon IT Park</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto"
          >
            Proximity is key for boys accommodation in Kharadi Pune. Cohousy's properties are ideally
            situated near major landmarks, making daily commutes effortless. Our male PG near Eon IT Park
            Kharadi puts you within walking distance of top companies, saving time and transport costs.
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
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-white border border-blue-200 bg-white'
                      }`}
                  >
                    <IconComponent size={16} />
                    {category.title}
                  </button>
                )
              })}
            </div>

            {/* Places List */}
            <div className="space-y-4">
              {locationCategories[activeCategory].places.map((place, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl hover:shadow-sm transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-black">{place.name}</h3>
                      <span className="text-sm font-medium text-blue-600">{place.distance}</span>
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

        {/* Commute Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 bg-white rounded-2xl border border-blue-200 p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Why Location Matters for IT Professionals
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The area boasts excellent connectivity and safety features. Well-lit streets and
              community vibe make it perfect for male professionals working in Kharadi's IT ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Car size={32} className="text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-black mb-2">Zero Commute Stress</h4>
              <p className="text-sm text-gray-600">Walk to work, save on transport, more time for yourself</p>
            </div>
            <div className="text-center">
              <Briefcase size={32} className="text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-black mb-2">Career Growth Hub</h4>
              <p className="text-sm text-gray-600">Network with professionals from 50+ top companies</p>
            </div>
            <div className="text-center">
              <ShoppingBag size={32} className="text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-black mb-2">Lifestyle Convenience</h4>
              <p className="text-sm text-gray-600">Everything within reach - food, entertainment, shopping</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}