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
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      activeCategory === index
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

          {/* Location Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src="/skyline.avif"
              alt="Strategic location map showing male PG near Eon IT Park Kharadi"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Location Markers */}
            <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-blue-600 rounded-full shadow-lg animate-pulse">
              <div className="absolute -top-8 -left-8 bg-white/95 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
                Eon IT Park
              </div>
            </div>
            <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-blue-600 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}>
              <div className="absolute -top-8 -left-6 bg-white/95 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
                WTC
              </div>
            </div>
            <div className="absolute bottom-1/3 right-1/5 w-4 h-4 bg-blue-600 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1s' }}>
              <div className="absolute -top-8 -left-10 bg-white/95 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
                Male PG
              </div>
            </div>

            {/* Overlay Info */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <div className="text-sm font-semibold text-black mb-1">Professional Zone</div>
              <div className="text-xs text-gray-600">Walking distance to major IT companies</div>
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