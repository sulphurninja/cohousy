'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Home, CheckCircle, Users, MapPin } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const roomTypes = [
  {
    title: 'Double Sharing Rooms',
    type: 'Shared Accommodation',
    price: '₹10,000',
    originalPrice: '₹12,000',
    savings: '₹2,000/month',
    popular: true,
    features: [
      'Shared room with male roommate',
      'All meals included',
      'High-speed Wi-Fi',
      'Daily housekeeping',
      'Access to all amenities',
      '24/7 security',
      'Power backup',
      'Common washroom access'
    ],
    properties: 'Available across all Cohousy locations'
  },
  {
    title: 'Single Sharing Rooms',
    type: 'Private Room',
    price: '₹18,000',
    originalPrice: '₹22,000',
    savings: '₹4,000/month',
    popular: false,
    features: [
      'Complete privacy with attached washroom',
      'Modern furnishings & balcony',
      'All meals + premium options',
      'High-speed Wi-Fi',
      'Daily housekeeping',
      'Access to all premium amenities',
      'Priority support',
      'Personal storage space'
    ],
    properties: 'Common 1: 33 rooms, Cohousy 1-3: Multiple 1BHK units'
  }
]

const properties = [
  { name: 'Common 1', rooms: '33 rooms', type: 'Single sharing available' },
  { name: 'Cohousy 1', rooms: '3 x 1BHK', type: 'Premium units' },
  { name: 'Cohousy 2', rooms: '3 x 1RK, 2 x 1BHK', type: 'Mixed options' },
  { name: 'Cohousy 3', rooms: '2 x 1BHK', type: 'Executive units' }
]

export default function RoomTypesAndPricing() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null)

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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-white border border-blue-200 rounded-full shadow-sm">
              <Home size={16} className="inline mr-2 text-blue-600" />
              FLEXIBLE ROOM OPTIONS
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Room Types and Pricing for
            <span className="text-blue-600"> Male PG in Kharadi</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto"
          >
            Cohousy provides flexible room options in our male PG accommodations. We cater to single 
            occupancy for privacy or double sharing for affordability, all within walking distance of 
            Eon IT Park Kharadi and WTC, designed exclusively for male residents.
          </motion.p>
        </motion.div>

        {/* Room Type Cards */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {roomTypes.map((room, index) => (
            <motion.div
              key={index}
              variants={withMotion(fadeInUp)}
              onMouseEnter={() => setHoveredRoom(index)}
              onMouseLeave={() => setHoveredRoom(null)}
              className={`relative bg-white border-2 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl ${
                room.popular 
                  ? 'border-blue-600 shadow-lg scale-105' 
                  : 'border-blue-100 hover:border-blue-200'
              }`}
            >
              {/* Popular Badge */}
              {room.popular && (
                <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 text-sm font-bold">
                  MOST POPULAR FOR PROFESSIONALS
                </div>
              )}

              <div className={`p-8 ${room.popular ? 'pt-12' : ''}`}>
                {/* Room Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-black mb-2">{room.title}</h3>
                  <p className="text-gray-600 mb-4">{room.type}</p>
                  
                  {/* Pricing */}
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-4xl font-bold text-black">{room.price}</span>
                    <span className="text-gray-500">/month per person</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm text-gray-400 line-through">{room.originalPrice}</span>
                    <span className="text-sm text-green-600 font-semibold">Save {room.savings}</span>
                  </div>
                  
                  <p className="text-sm text-blue-600 font-medium">{room.properties}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {room.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-3 font-semibold rounded-lg transition-all duration-300 ${
                  room.popular
                    ? 'bg-blue-600 text-white hover:shadow-lg'
                    : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}>
                  Book This Room Type
                </button>
              </div>

              {/* Hover Accent */}
              <div className={`absolute bottom-0 left-0 h-1 bg-blue-600 transition-all duration-500 ${
                hoveredRoom === index ? 'w-full' : 'w-0'
              }`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Properties Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white rounded-2xl border border-blue-200 shadow-sm p-8 mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Our Male-Only Properties in Kharadi
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All Cohousy properties are designed exclusively for male residents, 
              ensuring a focused and comfortable environment for working professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((property, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6 border border-blue-100 hover:border-blue-200 transition-colors duration-300">
                <div className="flex items-center mb-3">
                  <Home size={20} className="text-blue-600 mr-2" />
                  <h4 className="font-semibold text-black">{property.name}</h4>
                </div>
                <p className="text-sm text-gray-600 mb-2">{property.rooms}</p>
                <p className="text-xs text-blue-600 font-medium">{property.type}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-blue-50 rounded-2xl border border-blue-200 p-8"
        >
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            Why Our Pricing Beats the Competition
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">₹0</div>
              <div className="font-semibold text-black mb-2">Brokerage Fees</div>
              <p className="text-sm text-gray-600">No hidden charges or broker commissions</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">All-In</div>
              <div className="font-semibold text-black mb-2">Inclusive Pricing</div>
              <p className="text-sm text-gray-600">Wi-Fi, meals, housekeeping, power backup included</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">30%</div>
              <div className="font-semibold text-black mb-2">Cost Savings</div>
              <p className="text-sm text-gray-600">Compared to independent rentals + amenities</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Better value than Zolo Stays or Stanza Living with app-integrated services
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Calculate Your Monthly Savings
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}