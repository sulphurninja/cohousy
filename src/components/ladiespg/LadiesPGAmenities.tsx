'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Wifi, Home, Utensils, Dumbbell, Shield, Heart, Smartphone, Coffee } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const amenities = [
  {
    icon: Wifi,
    title: 'High-Speed Central Wi-Fi',
    description: 'Reliable internet for remote work, online classes, and staying connected with family. Perfect for IT professionals.',
    category: 'Connectivity',
    image: '/a.jpg',
    femaleSpecific: true
  },
  {
    icon: Shield,
    title: 'CCTV + 24/7 Female Security',
    description: 'Round-the-clock monitoring with female security personnel during night shifts for added comfort and safety.',
    category: 'Security',
    image: '/b.jpg',
    femaleSpecific: true
  },
  {
    icon: Home,
    title: 'Single Room Options',
    description: 'Private single rooms with attached washrooms and balconies. Perfect for professionals who value independence.',
    category: 'Living Space',
    image: '/c.jpg',
    femaleSpecific: true
  },
  {
    icon: Utensils,
    title: 'Hygienic Kitchen & Healthy Meals',
    description: 'Clean, well-maintained kitchen with healthy meal options. Special dietary accommodations for women\'s health needs.',
    category: 'Dining',
    image: '/d.jpg',
    femaleSpecific: true
  },
  {
    icon: Dumbbell,
    title: 'Ladies-Only Gym Hours',
    description: 'Dedicated women-only gym timings with modern equipment. Perfect for maintaining fitness and wellness routines.',
    category: 'Fitness',
    image: '/e.jpg',
    femaleSpecific: true
  },
  {
    icon: Heart,
    title: 'Wellness & Mental Health Support',
    description: 'Regular wellness sessions, yoga classes, and mental health support designed specifically for working women.',
    category: 'Wellness',
    image: '/z.jpg',
    femaleSpecific: true
  },
  {
    icon: Smartphone,
    title: 'Women Safety App Features',
    description: 'Panic button, location sharing with family, and emergency contacts integration for ultimate peace of mind.',
    category: 'Technology',
    image: '/x.jpg',
    femaleSpecific: true
  },
  {
    icon: Coffee,
    title: 'Ladies Lounge & Study Areas',
    description: 'Comfortable common areas designed for socializing, studying, and professional networking among women residents.',
    category: 'Common Areas',
    image: '/y.jpg',
    femaleSpecific: true
  }
]

export default function LadiesPGAmenities() {
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
      className="py-section bg-gray-50 relative overflow-hidden"
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-white border border-pink-200 rounded-full shadow-sm">
              <Home size={16} className="inline mr-2 text-pink-600" />
              WOMEN-CENTRIC AMENITIES
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Luxury Amenities Tailored
            <span className="text-pink-600"> for Women's Comfort</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto"
          >
            At Cohousy, we believe that a ladies PG in Kharadi Pune should feel like an extension of home, 
            complete with top-tier amenities designed specifically for women's comfort, safety, and well-being. 
            Every feature is thoughtfully curated with the modern professional woman in mind.
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
                  ? 'bg-pink-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50 border border-pink-200'
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredAmenities.map((amenity, index) => {
            const IconComponent = amenity.icon
            return (
              <motion.div
                key={index}
                variants={withMotion(fadeInUp)}
                onMouseEnter={() => setHoveredAmenity(index)}
                onMouseLeave={() => setHoveredAmenity(null)}
                className="group bg-white border border-pink-100 rounded-2xl overflow-hidden hover:border-pink-200 transition-all duration-500 hover:shadow-lg"
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
                    <IconComponent size={20} className="text-pink-600" strokeWidth={1.5} />
                  </div>

                  {/* Female-Specific Badge */}
                  {amenity.femaleSpecific && (
                    <div className="absolute top-4 right-4 bg-pink-600/95 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Women-Focused
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2 text-xs uppercase tracking-wide text-pink-600 font-semibold">
                    {amenity.category}
                  </div>

                  <h3 className={`text-lg font-bold mb-3 transition-colors duration-300 ${
                    hoveredAmenity === index ? 'text-pink-600' : 'text-black'
                  }`}>
                    {amenity.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {amenity.description}
                  </p>
                </div>

                <div className={`h-0.5 bg-pink-600 transition-all duration-500 ${
                  hoveredAmenity === index ? 'w-full' : 'w-0'
                }`} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Women-Specific Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 bg-white rounded-2xl border border-pink-200 p-8"
        >
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            Special Features for Women Residents
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart size={32} className="text-pink-600" />
              </div>
              <h4 className="font-semibold text-black mb-2">Women's Health Support</h4>
              <p className="text-sm text-gray-600">First aid trained in women's health, emergency medical support</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Coffee size={32} className="text-purple-600" />
              </div>
              <h4 className="font-semibold text-black mb-2">Professional Networking</h4>
              <p className="text-sm text-gray-600">Regular meetups, career workshops, and mentorship programs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-green-600" />
              </div>
              <h4 className="font-semibold text-black mb-2">Family Peace of Mind</h4>
              <p className="text-sm text-gray-600">Regular safety updates to families, visitor management system</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}