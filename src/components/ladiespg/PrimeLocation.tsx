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
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      activeCategory === index
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

          {/* Location Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src="/skyline.avif"
              alt="Strategic location map showing ladies PG near Eon IT Park Kharadi"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Location Markers */}
            <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-pink-600 rounded-full shadow-lg animate-pulse">
              <div className="absolute -top-8 -left-8 bg-white/95 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
                Eon IT Park
              </div>
            </div>
            <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-pink-600 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}>
              <div className="absolute -top-8 -left-6 bg-white/95 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
                WTC
              </div>
            </div>
            <div className="absolute bottom-1/3 right-1/5 w-4 h-4 bg-pink-600 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1s' }}>
              <div className="absolute -top-8 -left-10 bg-white/95 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
                Ladies PG
              </div>
            </div>

            {/* Overlay Info */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <div className="text-sm font-semibold text-black mb-1">Women-Safe Zone</div>
              <div className="text-xs text-gray-600">Well-lit streets & emergency services nearby</div>
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