'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Wifi, Bed, Coffee, Dumbbell, Car, Shield, Smartphone, Utensils } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const amenities = [
  {
    icon: Bed,
    title: 'Ready-to-Occupy Rooms',
    description: 'Fully furnished rooms with premium bedding, wardrobe, and study area. Just bring your clothes!',
    category: 'Living',
    image: '/a.jpg'
  },
  {
    icon: Wifi,
    title: 'High-Speed Internet',
    description: 'Reliable Wi-Fi for video calls, remote work, and streaming. Perfect for business travelers.',
    category: 'Connectivity',
    image: '/b.jpg'
  },
  {
    icon: Utensils,
    title: 'Meals Included',
    description: 'Daily breakfast, lunch, and dinner with vegetarian and non-vegetarian options.',
    category: 'Dining',
    image: '/c.jpg'
  },
  {
    icon: Coffee,
    title: '24/7 Common Areas',
    description: 'Access to lounges, co-working spaces, and recreational areas at any time.',
    category: 'Common Areas',
    image: '/d.jpg'
  },
  {
    icon: Dumbbell,
    title: 'Fitness Facilities',
    description: 'Gym and badminton court access to maintain your routine during short stays.',
    category: 'Fitness',
    image: '/e.jpg'
  },
  {
    icon: Shield,
    title: 'Secure Environment',
    description: '24/7 security with CCTV monitoring and secure access for peace of mind.',
    category: 'Security',
    image: '/z.jpg'
  },
  {
    icon: Car,
    title: 'Visitor Parking',
    description: 'Convenient parking for short-term guests with easy access to building.',
    category: 'Parking',
    image: '/x.jpg'
  },
  {
    icon: Smartphone,
    title: 'App Support',
    description: 'Digital services management through our app for seamless experience.',
    category: 'Technology',
    image: '/y.jpg'
  }
]

export default function ShortTermAmenities() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredAmenity, setHoveredAmenity] = useState<number | null>(null)

  const categories = ['All', ...Array.from(new Set(amenities.map(a => a.category)))]
  const filteredAmenities = activeCategory === 'All' 
    ? amenities 
    : amenities.filter(amenity => amenity.category === activeCategory)

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
              <Bed size={16} className="inline mr-2 text-accent" />
              INSTANT COMFORT AMENITIES
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Everything Ready
            <span className="text-accent"> From Day One</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Our short-term accommodations come with all essential amenities ready for immediate use. 
            No setup required - just check in and start your productive stay.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Amenities Grid */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {filteredAmenities.map((amenity, index) => {
            const IconComponent = amenity.icon
            return (
              <motion.div
                key={index}
                variants={withMotion(fadeInUp)}
                onMouseEnter={() => setHoveredAmenity(index)}
                onMouseLeave={() => setHoveredAmenity(null)}
                className="group bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-all duration-500 hover:shadow-lg"
              >
                {/* Amenity Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={amenity.image}
                    alt={amenity.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-sm">
                    <IconComponent size={20} className="text-gray-700" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2 text-xs uppercase tracking-wide text-accent font-semibold">
                    {amenity.category}
                  </div>

                  <h3 className={`text-lg font-bold mb-3 transition-colors duration-300 ${
                    hoveredAmenity === index ? 'text-accent' : 'text-black'
                  }`}>
                    {amenity.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {amenity.description}
                  </p>
                </div>

                <div className={`h-0.5 bg-accent transition-all duration-500 ${
                  hoveredAmenity === index ? 'w-full' : 'w-0'
                }`} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Quick Setup Promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-gray-50 rounded-2xl border border-gray-100 p-8"
        >
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            Move-in Ready Promise
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏃‍♂️</span>
              </div>
              <h4 className="font-semibold text-black mb-2">Instant Move-in</h4>
              <p className="text-sm text-gray-600">Check-in within 30 minutes of arrival</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛏️</span>
              </div>
              <h4 className="font-semibold text-black mb-2">Fresh Linens</h4>
              <p className="text-sm text-gray-600">Clean bedding and towels for every guest</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-semibold text-black mb-2">Digital Access</h4>
              <p className="text-sm text-gray-600">App-based room access and services</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}