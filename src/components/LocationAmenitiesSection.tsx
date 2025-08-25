'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { MapPin, Building2, Train, ShoppingBag, Wifi, Dumbbell, Coffee, Shield, Car, Utensils, Laptop, Users } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const locationHighlights = [
  {
    icon: Building2,
    title: 'Eon IT Park',
    distance: '2 min walk',
    description: 'Direct access to one of Pune\'s premier IT destinations with 50+ companies',
    companies: 'TCS, Infosys, Cognizant',
    alt: 'Eon IT Park proximity'
  },
  {
    icon: Building2,
    title: 'World Trade Center',
    distance: '5 min walk',
    description: 'Walking distance to WTC and Kharadi business district',
    companies: 'Microsoft, Accenture, IBM',
    alt: 'World Trade Center Kharadi'
  },
  {
    icon: Train,
    title: 'Metro Connectivity',
    distance: '3 min walk',
    description: 'Seamless connectivity to entire Pune metropolitan area',
    companies: 'Direct route to Airport',
    alt: 'Metro station connectivity'
  },
  {
    icon: ShoppingBag,
    title: 'Phoenix MarketCity',
    distance: '8 min drive',
    description: 'Premium shopping, dining, and entertainment complex',
    companies: 'Lifestyle & Recreation',
    alt: 'Phoenix MarketCity nearby'
  }
]

const amenities = [
  {
    icon: Laptop,
    title: 'Co-working Spaces',
    description: 'Professional work environments with high-speed internet and ergonomic furniture',
    features: ['24/7 Access', 'High-speed WiFi', 'Meeting rooms']
  },
  {
    icon: Dumbbell,
    title: 'Fitness Center',
    description: '24/7 access to fully equipped gym with modern equipment and wellness facilities',
    features: ['Modern equipment', 'Yoga studio', 'Personal training']
  },
  {
    icon: Coffee,
    title: 'Rooftop Lounge',
    description: 'Panoramic city views for relaxation, networking, and social events',
    features: ['City views', 'Event space', 'Outdoor seating']
  },
  {
    icon: Shield,
    title: 'Security & Safety',
    description: 'Comprehensive security with 24/7 monitoring and biometric access',
    features: ['24/7 Security', 'CCTV monitoring', 'Biometric access']
  },
  {
    icon: Car,
    title: 'Parking & Transport',
    description: 'Dedicated parking spaces and easy access to public transportation',
    features: ['Reserved parking', 'EV charging', 'Transport access']
  },
  {
    icon: Users,
    title: 'Community Spaces',
    description: 'Thoughtfully designed common areas for networking and relaxation',
    features: ['Lounge areas', 'Game room', 'Study zones']
  }
]

export default function LocationAmenitiesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [activeTab, setActiveTab] = useState<'location' | 'amenities'>('location')
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const headerY = useTransform(scrollYProgress, [0, 0.3], [50, -50])

  return (
    <section 
      ref={containerRef}
      id="amenities"
      className="py-section bg-gray-50 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto px-6">
        
        {/* Clean Section Header */}
        <motion.div
          style={{ y: headerY }}
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={withMotion(fadeInUp)}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm">
              <span className="w-2 h-2 bg-accent rounded-full inline-block mr-2" />
              LOCATION & AMENITIES
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Prime Location,
            <span className="text-accent"> Premium Living</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Experience the perfect blend of strategic location and world-class amenities 
            designed for modern professionals in Kharadi's tech hub.
          </motion.p>
        </motion.div>

        {/* Clean Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="flex bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <button
              onClick={() => setActiveTab('location')}
              className={`px-8 py-3 font-semibold transition-all duration-300 ${
                activeTab === 'location'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <MapPin size={18} className="inline mr-2" />
              Location Advantages
            </button>
            <button
              onClick={() => setActiveTab('amenities')}
              className={`px-8 py-3 font-semibold transition-all duration-300 ${
                activeTab === 'amenities'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Coffee size={18} className="inline mr-2" />
              Premium Amenities
            </button>
          </div>
        </motion.div>

        {/* Location Content */}
        {activeTab === 'location' && (
          <motion.div
            key="location"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {locationHighlights.map((location, index) => {
                const IconComponent = location.icon
                return (
                  <motion.div
                    key={index}
                    variants={withMotion(fadeInUp)}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 transition-all duration-500 hover:shadow-lg"
                  >
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-all duration-300 ${
                      hoveredItem === index ? 'bg-accent text-black' : 'bg-gray-100 text-gray-600'
                    }`}>
                      <IconComponent size={24} strokeWidth={1.5} />
                    </div>

                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                      hoveredItem === index ? 'text-accent' : 'text-black'
                    }`}>
                      {location.title}
                    </h3>
                    
                    <div className="text-accent font-semibold text-sm mb-3">
                      {location.distance}
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {location.description}
                    </p>

                    <div className="text-xs text-gray-500 font-medium">
                      {location.companies}
                    </div>

                    {/* Subtle hover accent */}
                    <div className={`mt-4 h-0.5 bg-accent transition-all duration-500 ${
                      hoveredItem === index ? 'w-full' : 'w-0'
                    }`} />
                  </motion.div>
                )
              })}
            </div>

            {/* Location Map */}
            <motion.div
              variants={withMotion(fadeInUp)}
              className="relative aspect-[2/1] bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg"
            >
              <Image
                src="/skyline.avif"
                alt="Strategic location map of Cohousy properties in Kharadi"
                fill
                className="object-cover"
                sizes="100vw"
              />
              
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent flex items-center">
                <div className="max-w-lg p-12 text-white">
                  <h3 className="text-3xl font-bold mb-4">
                    Strategic Kharadi Location
                  </h3>
                  <p className="text-xl text-white/90 mb-6 leading-relaxed">
                    Positioned at the epicenter of Pune's IT corridor with unmatched 
                    connectivity to major business hubs.
                  </p>
                  <button className="bg-accent text-black px-6 py-3 font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                    View Interactive Map
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Amenities Content */}
        {activeTab === 'amenities' && (
          <motion.div
            key="amenities"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {amenities.map((amenity, index) => {
              const IconComponent = amenity.icon
              return (
                <motion.div
                  key={index}
                  variants={withMotion(fadeInUp)}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-all duration-500 hover:shadow-lg"
                >
                  {/* Amenity Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={amenity.image}
                      alt={amenity.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-sm">
                      <IconComponent size={24} className="text-gray-700" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                      hoveredItem === index ? 'text-accent' : 'text-black'
                    }`}>
                      {amenity.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {amenity.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {amenity.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-500">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Subtle hover accent */}
                  <div className={`h-0.5 bg-accent transition-all duration-500 ${
                    hoveredItem === index ? 'w-full' : 'w-0'
                  }`} />
                </motion.div>
              )
            })}
          </motion.div>
        )}

        {/* Clean CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16 p-8 bg-white rounded-2xl border border-gray-200 shadow-sm"
        >
          <h3 className="text-2xl font-bold text-black mb-4">
            Ready to Experience Premium Living?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Schedule a visit to see how our strategic location and premium amenities 
            can transform your living experience in Kharadi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-accent text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Schedule Property Tour
            </button>
            <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
              Download Amenities Guide
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}