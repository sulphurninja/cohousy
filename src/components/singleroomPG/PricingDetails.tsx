'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { DollarSign, CheckCircle, Home, Users } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const propertyDetails = [
  {
    name: 'Cohousy 1',
    type: '3 x 1BHK units',
    singlePrice: '₹18,000/Mo',
    doublePrice: '₹10,000/Mo',
    features: [
      'Balcony with city/garden views',
      'Attached washroom with geyser',
      'Furnished with bed, wardrobe, study table',
      'High-speed Wi-Fi included',
      'Daily housekeeping service',
      'All meals included (veg/non-veg)',
      'Access to gym and common areas',
      'Power backup and AC'
    ],
    highlight: 'Premium location near Eon IT Park'
  },
  {
    name: 'Cohousy 2',
    type: '3 x 1RK, 2 x 1BHK',
    singlePrice: '₹18,000/Mo',
    doublePrice: '₹10,000/Mo',
    features: [
      'Compact design near WTC Kharadi',
      'Attached washroom facilities',
      'Kitchenette for basic cooking',
      'Modern furnishing and storage',
      'High-speed internet connectivity',
      'Regular cleaning and maintenance',
      'Nutritious meal options',
      'Community access and amenities'
    ],
    highlight: 'Perfect for young professionals'
  },
  {
    name: 'Cohousy 3',
    type: '2 x 1BHK',
    singlePrice: '₹18,000/Mo',
    doublePrice: '₹10,000/Mo',
    features: [
      'Premium gym and power backup',
      'Spacious rooms with modern design',
      'Attached washroom with premium fittings',
      'Balcony access in select rooms',
      'High-end furnishing package',
      'Dedicated study/work area',
      'Premium meal options',
      'Enhanced security features'
    ],
    highlight: 'Luxury living experience'
  }
]

const competitorComparison = [
  { name: 'Cohousy Single Room', price: '₹18,000', features: 'All-inclusive with premium amenities' },
  { name: 'Stanza Living', price: '₹7,299+', features: 'Basic amenities, extras charged' },
  { name: 'CoFynd', price: '₹11,500-19,500', features: 'Variable pricing, hidden charges' },
  { name: 'Traditional PG', price: '₹8,000-15,000', features: 'Basic facilities, separate utility bills' }
]

const inclusiveFeatures = [
  'No hidden fees or brokerage charges',
  'All utilities included in rent',
  'High-speed Wi-Fi and power backup',
  'Daily meals with variety',
  'Housekeeping and laundry services',
  'Access to gym and recreational facilities',
  'Security and maintenance included',
  '24/7 app support and digital services'
]

export default function PricingDetails() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [activeProperty, setActiveProperty] = useState(0)

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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-white border border-purple-200 rounded-full shadow-sm">
              <DollarSign size={16} className="inline mr-2 text-purple-600" />
              TRANSPARENT PRICING
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Pricing Details for Single Room PG
            <span className="text-purple-600"> in Kharadi Pune</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto"
          >
            Transparency defines our pricing for single room PG in Kharadi Pune. Starting at Rs 18,000/month 
            for single occupancy, it includes all utilities. No hidden fees or brokerage—direct bookings save money. 
            This value makes Cohousy the best PG in Kharadi Pune.
          </motion.p>
        </motion.div>

        {/* Property Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {propertyDetails.map((property, index) => (
            <button
              key={index}
              onClick={() => setActiveProperty(index)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeProperty === index
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-purple-200'
              }`}
            >
              {property.name}
            </button>
          ))}
        </motion.div>

        {/* Active Property Details */}
        <motion.div
          key={activeProperty}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border border-purple-200 shadow-lg p-8 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-2">
                {propertyDetails[activeProperty].name}
              </h3>
              <p className="text-purple-600 font-medium mb-4">
                {propertyDetails[activeProperty].type}
              </p>
              
              <div className="bg-purple-50 rounded-xl p-6 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black mb-1">
                      {propertyDetails[activeProperty].singlePrice}
                    </div>
                    <div className="text-sm text-gray-600">Single Occupancy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black mb-1">
                      {propertyDetails[activeProperty].doublePrice}
                    </div>
                    <div className="text-sm text-gray-600">Double Occupancy</div>
                  </div>
                </div>
              </div>

              <div className="inline-block px-3 py-1 bg-purple-100 text-purple-600 text-sm font-semibold rounded-full">
                {propertyDetails[activeProperty].highlight}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-black mb-4">What's Included:</h4>
              <ul className="space-y-2">
                {propertyDetails[activeProperty].features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle size={16} className="text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Competitor Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white rounded-2xl border border-purple-200 shadow-sm p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            How Our Pricing Compares
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Provider</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Price Range</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900">Features</th>
                </tr>
              </thead>
              <tbody>
                {competitorComparison.map((item, index) => (
                  <tr key={index} className={`border-b border-gray-100 ${index === 0 ? 'bg-purple-50' : ''}`}>
                    <td className="py-3 px-4 font-medium">{item.name}</td>
                    <td className="text-center py-3 px-4 font-semibold">{item.price}</td>
                    <td className="text-right py-3 px-4 text-gray-600">{item.features}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-gray-600 mt-4">
            Short-term CohousyStay available for flexibility. Secure your rate—limited spots near Eon IT Park.
          </p>
        </motion.div>

        {/* What's Included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-white rounded-2xl border border-purple-200 p-8"
        >
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            All-Inclusive Package Benefits
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {inclusiveFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle size={16} className="text-purple-600 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Compare to competitors and see why we offer the best value for single room PG in Kharadi Pune
            </p>
            <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Book at Best Price - No Hidden Charges
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}