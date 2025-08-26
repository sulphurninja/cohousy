'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Building2, Coffee, ShoppingBag, Dumbbell, Car } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const locationCategories = [
  {
    title: 'IT Hubs',
    icon: Building2,
    places: [
      { name: 'Eon IT Park Kharadi', distance: '5 mins walk', companies: 'Synechron, Tata Communications, Veritas Technologies' },
      { name: 'World Trade Center (WTC)', distance: '7 mins', companies: 'UBS and Allstate' },
      { name: 'Gera Commerzone', distance: '8 mins', companies: 'Another key business spot' }
    ]
  },
  {
    title: 'Cafes & Dining',
    icon: Coffee,
    places: [
      { name: 'The Flour Works', distance: '5 mins', companies: 'Popular brunch spot for quick meetings' },
      { name: 'Café Peter', distance: '6 mins', companies: 'Cozy workspace with great coffee, ideal for remote days' },
      { name: 'Barbeque Nation', distance: '10 mins', companies: 'Weekend dining for group outings with fellow residents' }
    ]
  },
  {
    title: 'Shopping & Essentials',
    icon: ShoppingBag,
    places: [
      { name: 'Reliance Mart', distance: '6 mins', companies: 'Groceries and daily needs' },
      { name: 'Phoenix Marketcity', distance: '15 mins drive', companies: 'Shopping and entertainment' }
    ]
  },
  {
    title: 'Fitness & Wellness',
    icon: Dumbbell,
    places: [
      { name: 'MultiFit Gym', distance: '5 mins', companies: 'External workouts if needed' },
      { name: 'Cult.Fit Studio', distance: '8 mins', companies: 'Classes complementing our on-site gym' }
    ]
  }
]

export default function LocationAdvantage() {
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-gray-50 border border-gray-100 rounded-full shadow-sm">
              <MapPin size={16} className="inline mr-2 text-accent" />
              LOCATION ADVANTAGE
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Walk to Work
            <span className="text-accent"> & Play</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Living in Cohousy's co-living Kharadi means everything is close by, enhancing your 
            daily routine in Pune's IT heart. Our properties are ideally positioned for minimal 
            travel, with Eon IT Park just 5 mins away.
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
                        ? 'bg-gray-900 text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-gray-200'
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
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-black">{place.name}</h3>
                      <span className="text-sm font-medium text-accent">{place.distance}</span>
                    </div>
                    <p className="text-sm text-gray-600">{place.companies}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map/Location Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src="/skyline.avif"
              alt="Strategic location map of Cohousy in Kharadi"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Location Markers */}
            <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-accent rounded-full shadow-lg animate-pulse">
              <div className="absolute -top-8 -left-8 bg-white/95 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
                Eon IT Park
              </div>
            </div>
            <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-accent rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}>
              <div className="absolute -top-8 -left-6 bg-white/95 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
                WTC
              </div>
            </div>
            <div className="absolute bottom-1/3 right-1/5 w-4 h-4 bg-accent rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1s' }}>
              <div className="absolute -top-8 -left-10 bg-white/95 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
                Cohousy
              </div>
            </div>

            {/* Overlay Info */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <div className="text-sm font-semibold text-black mb-1">Prime Location</div>
              <div className="text-xs text-gray-600">Walking distance to 50+ IT companies</div>
            </div>
          </motion.div>
        </div>

        {/* Connectivity Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 bg-gray-50 rounded-2xl border border-gray-100 p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Excellent Connectivity
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              This location not only saves time but boosts safety with well-lit streets near 
              emergency services, making Cohousy perfect for solo or group living in Kharadi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Car size={32} className="text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-black mb-2">Pune-Mumbai Highway</h4>
              <p className="text-sm text-gray-600">Easy access for outstation travel</p>
            </div>
            <div className="text-center">
              <Building2 size={32} className="text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-black mb-2">Metro Connectivity</h4>
              <p className="text-sm text-gray-600">Direct routes to central Pune</p>
            </div>
            <div className="text-center">
              <MapPin size={32} className="text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-black mb-2">Tech Hub Center</h4>
              <p className="text-sm text-gray-600">Heart of Kharadi's business district</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}