'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Home, Users, DollarSign, CheckCircle } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const pricingData = [
  {
    property: 'Cohousy 1 & 3',
    type: '1BHK',
    rooms: [
      { occupancy: 'Single', price: '₹18,000', period: '/month', popular: true },
      { occupancy: 'Double', price: '₹10,000', period: '/month', popular: false }
    ],
    features: ['Attached washroom', 'Balcony', 'Modern furnishing', 'AC available']
  },
  {
    property: 'Cohousy 2',
    type: '1RK',
    rooms: [
      { occupancy: 'Single', price: '₹18,000', period: '/month', popular: false },
      { occupancy: 'Double', price: '₹10,000', period: '/month', popular: true }
    ],
    features: ['Compact design', 'Attached washroom', 'Modern amenities', 'Efficient layout']
  },
  {
    property: 'Common 1',
    type: 'Common Rooms',
    rooms: [
      { occupancy: 'Single/Double', price: 'Contact for rates', period: '', popular: false }
    ],
    features: ['33 rooms available', 'Budget-friendly', 'Shared amenities', 'Community living']
  }
]

const includedFeatures = [
  'All utilities (electricity, water, maintenance)',
  'High-speed Wi-Fi',
  'Daily housekeeping',
  'Vegetarian/Non-vegetarian meals',
  'Gym and recreational facilities',
  'Power backup',
  '24/7 security',
  'Tenant insurance'
]

export default function RoomPricing() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null)

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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm">
              <DollarSign size={16} className="inline mr-2 text-accent" />
              TRANSPARENT PRICING
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Room Options &
            <span className="text-accent"> Pricing</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Flexibility is key in our co-living spaces, with options to suit various needs. 
            Whether you're seeking privacy or affordability, our properties offer competitive 
            rates near WTC Kharadi with no hidden fees.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
        >
          {pricingData.map((plan, index) => (
            <motion.div
              key={index}
              variants={withMotion(fadeInUp)}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-all duration-500 hover:shadow-xl"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-black">{plan.property}</h3>
                  <span className="text-sm text-accent font-medium">{plan.type}</span>
                </div>
              </div>

              {/* Room Options */}
              <div className="p-6 space-y-4">
                {plan.rooms.map((room, roomIndex) => (
                  <div 
                    key={roomIndex}
                    className={`relative p-4 rounded-xl border transition-all duration-300 ${
                      room.popular 
                        ? 'border-accent bg-accent/5' 
                        : 'border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    {room.popular && (
                      <div className="absolute -top-2 left-4 bg-accent text-black text-xs font-bold px-2 py-1 rounded">
                        POPULAR
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-black">{room.occupancy}</div>
                        <div className="text-sm text-gray-500">Occupancy</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-black">
                          {room.price}
                          <span className="text-sm text-gray-500 font-normal">{room.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Features */}
                <div className="mt-6">
                  <h4 className="font-semibold text-black mb-3">Included Features:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle size={16} className="text-accent mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
                  View Details
                </button>
              </div>

              {/* Hover Accent */}
              <div className={`h-0.5 bg-accent transition-all duration-500 ${
                hoveredPlan === index ? 'w-full' : 'w-0'
              }`} />
            </motion.div>
          ))}
        </motion.div>

        {/* What's Included Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Everything Included in Your Rent
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pricing includes all amenities, meals, and utilities—no hidden fees. 
              This transparency beats competitors, making Cohousy the best value for co-living in Kharadi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {includedFeatures.map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle size={20} className="text-accent mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-accent text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Get Detailed Pricing
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}