'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Building2, ShoppingBag, Coffee, Car, Utensils } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const locationCategories = [
  {
    title: 'Work Locations',
    icon: Building2,
    places: [
      { name: 'Eon IT Park Kharadi', distance: '5 mins walk', description: 'Global players like Vodafone Shared Services India and FISglobal—ideal for quick commutes' },
      { name: 'World Trade Center (WTC) Kharadi', distance: '7 mins walk', description: 'Firms like UBS and Allstate, plus shopping and dining options' },
      { name: 'Gera Commerzone', distance: '8 mins walk', description: 'More opportunities in Kharadi IT Park connecting to various companies' }
    ]
  },
  {
    title: 'Shopping & Essentials',
    icon: ShoppingBag,
    places: [
      { name: 'Reliance Mart', distance: '6 mins', description: 'Groceries and daily essentials for convenient living' },
      { name: 'Phoenix Marketcity', distance: '15 mins', description: 'Major retail destination for shopping therapy and entertainment' },
      { name: 'Local Markets', distance: '5 mins', description: 'Fresh produce, stationery, and everyday necessities' }
    ]
  },
  {
    title: 'Dining & Cafes',
    icon: Utensils,
    places: [
      { name: 'The Flour Works', distance: '8 mins', description: 'Perfect brunch spot for weekend relaxation' },
      { name: 'Café Peter', distance: '10 mins', description: 'Ideal for work sessions and coffee meetings' },
      { name: 'Barbeque Nation', distance: '12 mins', description: 'Evening dining with colleagues and friends' }
    ]
  },
  {
    title: 'Transport & Connectivity',
    icon: Car,
    places: [
      { name: 'Pune Airport', distance: '10 km', description: 'Direct connectivity for business travel and trips home' },
      { name: 'Metro Stations', distance: '12 mins', description: 'Easy access to central Pune via metro connectivity' },
      { name: 'Bus Stops', distance: '3 mins', description: 'Regular PMPML and private buses for city travel' }
    ]
  }
]

export default function PrimeLocationBenefits() {
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-orange-50 border border-orange-100 rounded-full shadow-sm">
              <MapPin size={16} className="inline mr-2 text-orange-600" />
              PRIME LOCATION BENEFITS
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Prime Location Benefits of PG
            <span className="text-orange-600"> Near Eon IT Park</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto"
          >
            The key to a great PG near Eon IT Park Kharadi is its location, and Cohousy's properties 
            place you at the heart of convenience. Our strategic positioning minimizes travel while 
            maximizing access to Pune's amenities, work opportunities, and lifestyle destinations.
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
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      activeCategory === index
                        ? 'bg-orange-600 text-white shadow-sm'
                        : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50 border border-orange-200'
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
                  className="flex items-start space-x-4 p-6 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors duration-300"
                >
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-black">{place.name}</h3>
                      <span className="text-sm font-medium text-orange-600">{place.distance}</span>
                    </div>
                    <p className="text-sm text-gray-600">{place.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Location Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src="/skyline.avif"
              alt="Prime location map showing PG near Eon IT Park Kharadi"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Location Markers */}
            <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-orange-600 rounded-full shadow-lg animate-pulse">
              <div className="absolute -top-8 -left-8 bg-white/95 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
                Eon IT Park
              </div>
            </div>
            <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-orange-600 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}>
              <div className="absolute -top-8 -left-6 bg-white/95 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
                WTC
              </div>
            </div>
            <div className="absolute bottom-1/3 right-1/5 w-4 h-4 bg-orange-600 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1s' }}>
              <div className="absolute -top-8 -left-10 bg-white/95 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
                Cohousy PG
              </div>
            </div>

            {/* Overlay Info */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <div className="text-sm font-semibold text-black mb-1">Perfect Location</div>
              <div className="text-xs text-gray-600">Everything within walking distance</div>
            </div>
          </motion.div>
        </div>

        {/* Location Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 bg-orange-50 rounded-2xl border border-orange-200 p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Beyond Work: Complete Lifestyle Ecosystem
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              This positioning not only enhances convenience but also supports work-life balance. 
              Well-lit streets and vibrant community make it perfect for professionals in Kharadi's ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Coffee size={32} className="text-orange-600 mx-auto mb-3" />
              <h4 className="font-semibold text-black mb-2">Vibrant Food Scene</h4>
              <p className="text-sm text-gray-600">Diverse dining options from street food to fine dining</p>
            </div>
            <div className="text-center">
              <ShoppingBag size={32} className="text-orange-600 mx-auto mb-3" />
              <h4 className="font-semibold text-black mb-2">Shopping & Entertainment</h4>
              <p className="text-sm text-gray-600">Phoenix Marketcity and local markets for all needs</p>
            </div>
            <div className="text-center">
              <Car size={32} className="text-orange-600 mx-auto mb-3" />
              <h4 className="font-semibold text-black mb-2">Excellent Connectivity</h4>
              <p className="text-sm text-gray-600">Airport, metro, and highway access for travel</p>
            </div>
            <div className="text-center">
              <Building2 size={32} className="text-orange-600 mx-auto mb-3" />
              <h4 className="font-semibold text-black mb-2">Career Opportunities</h4>
              <p className="text-sm text-gray-600">50+ companies for networking and growth</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}