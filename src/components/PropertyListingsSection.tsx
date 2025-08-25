'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const properties = [
  {
    id: 1,
    image: '/skyline.avif',
    title: 'Cohousy Eon',
    subtitle: 'Near Eon IT Park',
    location: '2 min walk to Eon IT Park',
    pricing: 'Single ₹18,000/mo | Double ₹10,000/mo',
    reviews: '4.8/5 (45 reviews)',
    rooms: '3 × 1BHK available',
    type: 'Premium Co-living',
    amenities: ['Attached washroom', 'Balcony', 'Gym', 'Wi-Fi'],
    alt: 'Cohousy premium co-living building near Eon IT Park Kharadi'
  },
  {
    id: 2,
    image: '/skyline.avif',
    title: 'Cohousy WTC',
    subtitle: 'Walking Distance to WTC',
    location: '5 min walk to WTC Kharadi',
    pricing: 'Single ₹18,000/mo | Double ₹10,000/mo',
    reviews: '4.7/5 (32 reviews)',
    rooms: '3 × 1RK, 2 × 1BHK available',
    type: 'Modern Co-living',
    amenities: ['Power backup', 'Laundry', 'Kitchen', 'CCTV'],
    alt: 'Cohousy modern co-living near WTC Kharadi'
  },
  {
    id: 3,
    image: '/skyline.avif',
    title: 'Cohousy Metro',
    subtitle: 'Premium Location',
    location: '3 min walk to Metro Station',
    pricing: 'Contact for rates',
    reviews: '4.9/5 (28 reviews)',
    rooms: '2 × 1BHK available',
    type: 'Luxury PG',
    amenities: ['Premium furnishing', 'Concierge', 'Rooftop', 'Parking'],
    alt: 'Cohousy luxury accommodation with metro connectivity'
  },
  {
    id: 4,
    image: '/skyline.avif',
    title: 'Cohousy Essential',
    subtitle: 'Budget-Friendly',
    location: '1 min walk to IT Companies',
    pricing: 'Contact for best rates',
    reviews: '4.9/5 (50 reviews)',
    rooms: '33 rooms available',
    type: 'Essential Co-living',
    amenities: ['24/7 security', 'Parking', 'First aid', 'Common areas'],
    alt: 'Budget-friendly accommodation near IT companies'
  }
]

const filters = ['All Properties', 'Premium', 'Budget-Friendly', 'Near IT Parks', 'Metro Access']

export default function PropertyListingsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [hoveredProperty, setHoveredProperty] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState('All Properties')
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const headerY = useTransform(scrollYProgress, [0, 0.3], [50, -50])

  return (
    <section 
      ref={containerRef}
      id="properties"
      className="py-section bg-white relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative">
        
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-gray-50 border border-gray-100 rounded-full shadow-sm">
              <span className="w-2 h-2 bg-accent rounded-full inline-block mr-2" />
              FEATURED PROPERTIES
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Premium Locations in
            <span className="text-accent"> Kharadi</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Strategically located near Pune's leading IT parks and metro connectivity, 
            each property offers modern amenities and professional community living.
          </motion.p>
        </motion.div>

        {/* Clean Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 text-sm font-medium cursor-pointer rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Clean Properties Grid */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              variants={withMotion(fadeInUp)}
              onMouseEnter={() => setHoveredProperty(property.id)}
              onMouseLeave={() => setHoveredProperty(null)}
              className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-all duration-500 hover:shadow-xl"
            >
              {/* Clean Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Property Type Badge */}
                <div className="absolute top-6 left-6 z-10 bg-white/95 backdrop-blur-sm text-black px-3 py-1 rounded-lg text-sm font-medium shadow-sm border border-white/20">
                  {property.type}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-6 right-6 z-10 bg-white/95 backdrop-blur-sm text-black px-3 py-1 rounded-lg text-sm font-medium shadow-sm border border-white/20 flex items-center gap-1">
                  <span className="text-amber-400">★</span>
                  {property.reviews.split(' ')[0]}
                </div>

                {/* Clean hover overlay */}
                <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 flex items-center justify-center ${
                  hoveredProperty === property.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button className="bg-white cursor-pointer text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>

              {/* Clean Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-1 group-hover:text-accent transition-colors duration-300">
                      {property.title}
                    </h3>
                    <p className="text-gray-600 font-medium">{property.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{property.rooms}</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center text-gray-600 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {property.location}
                </div>
                
                {/* Pricing */}
                <div className="text-lg font-semibold text-black mb-6">
                  {property.pricing}
                </div>

                {/* Clean Amenities */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Key Amenities</h4>
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.slice(0, 4).map((amenity, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded-lg border border-gray-100"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Clean CTA Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 cursor-pointer py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                    Book Tour
                  </button>
                  <button className="flex-1 cursor-pointer py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Subtle hover accent */}
              <div className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-500 ${
                hoveredProperty === property.id ? 'w-full' : 'w-0'
              }`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Clean Location Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative aspect-[2/1] bg-gray-50 rounded-2xl overflow-hidden border border-gray-100"
        >
          <Image
            src="/skyline.avif"
            alt="Strategic locations across Kharadi's tech hub"
            fill
            className="object-cover"
            sizes="100vw"
          />
          
          {/* Clean Location Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent flex items-center">
            <div className="max-w-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Strategic Kharadi Locations
              </h3>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                All properties strategically positioned within walking distance of major IT parks, 
                metro stations, and essential amenities in Pune's fastest-growing tech hub.
              </p>
              
              <div className="flex gap-4">
                <button className="bg-accent cursor-pointer text-black px-8 py-3 font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                  View All Locations
                </button>
                <button className="border-2 cursor-pointer border-white text-white px-8 py-3 font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300">
                  Download Map
                </button>
              </div>
            </div>
          </div>

          {/* Location Markers */}
          <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-accent rounded-full shadow-lg animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-accent rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/3 right-1/5 w-4 h-4 bg-accent rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1s' }} />
        </motion.div>
      </div>
    </section>
  )
}