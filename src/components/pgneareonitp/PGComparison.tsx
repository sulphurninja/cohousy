'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Clock, DollarSign, Shield, Users, Home } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const comparisonData = [
  {
    feature: 'Location',
    cohousy: '5-10 mins walk to Eon IT Park',
    traditional: 'Often 20+ mins, increasing costs',
    icon: Clock
  },
  {
    feature: 'Amenities',
    cohousy: 'Gym, Wi-Fi, laundry, app menu',
    traditional: 'Basic; extras charged separately',
    icon: Home
  },
  {
    feature: 'Management',
    cohousy: '24/7 app support & digital services',
    traditional: 'In-person only, slower response',
    icon: Zap
  },
  {
    feature: 'Flexibility',
    cohousy: 'Short/long-term, easy property moves',
    traditional: 'Rigid contracts, difficult changes',
    icon: Users
  },
  {
    feature: 'Pricing',
    cohousy: 'All-inclusive ₹10,000-18,000',
    traditional: 'Separate utilities, hidden fees',
    icon: DollarSign
  },
  {
    feature: 'Safety',
    cohousy: 'CCTV, guards, insurance coverage',
    traditional: 'Minimal security, varies by owner',
    icon: Shield
  }
]

export default function PGComparison() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })

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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-orange-50 border border-orange-100 rounded-full shadow-sm">
              <Zap size={16} className="inline mr-2 text-orange-600" />
              COMPETITIVE COMPARISON
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            PG near Eon IT Park vs
            <span className="text-orange-600"> Traditional Hostels</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            To showcase our edge, here's how Cohousy stacks up against traditional PG hostels 
            in Kharadi Pune. See why modern professionals choose our digitally-enhanced 
            accommodation over conventional options.
          </motion.p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-orange-200 rounded-2xl shadow-lg overflow-hidden mb-12"
        >
          <div className="grid grid-cols-4 bg-orange-50 border-b border-orange-200">
            <div className="p-4 text-center font-semibold text-gray-700">Feature</div>
            <div className="p-4 text-center font-semibold text-orange-600 border-l border-orange-200">Cohousy PG</div>
            <div className="p-4 text-center font-semibold text-red-600 border-l border-orange-200">Traditional Hostel</div>
            <div className="p-4 text-center font-semibold text-gray-700 border-l border-orange-200">Advantage</div>
          </div>

          {comparisonData.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="grid grid-cols-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="p-4 flex items-center space-x-2">
                  <IconComponent size={16} className="text-orange-600" />
                  <span className="font-medium text-gray-700">{item.feature}</span>
                </div>
                <div className="p-4 border-l border-gray-100 text-sm text-gray-600">
                  {item.cohousy}
                </div>
                <div className="p-4 border-l border-gray-100 text-sm text-gray-600">
                  {item.traditional}
                </div>
                <div className="p-4 border-l border-gray-100 text-center">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Cohousy
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Key Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
            <Clock size={32} className="text-orange-600 mb-4" />
            <h3 className="text-xl font-bold text-black mb-3">Time Savings</h3>
            <p className="text-gray-600 text-sm">
              Save 2-3 hours daily on commute. More time for career growth, 
              fitness, and exploring Kharadi's vibrant ecosystem.
            </p>
          </div>

          <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
            <DollarSign size={32} className="text-orange-600 mb-4" />
            <h3 className="text-xl font-bold text-black mb-3">Cost Efficiency</h3>
            <p className="text-gray-600 text-sm">
              All-inclusive pricing eliminates hidden costs. Better value 
              than separate rent, utilities, and amenity charges.
            </p>
          </div>

          <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
            <Zap size={32} className="text-orange-600 mb-4" />
            <h3 className="text-xl font-bold text-black mb-3">Digital Advantage</h3>
            <p className="text-gray-600 text-sm">
              24/7 app support, digital payments, and seamless management 
              designed for tech-savvy professionals.
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16 p-8 bg-orange-50 rounded-2xl border border-orange-100"
        >
          <h3 className="text-2xl font-bold text-black mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            This positions Cohousy as superior for modern needs near Kharadi IT Park. 
            Join hundreds of professionals who made the smart choice.
          </p>
          <button className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 mr-4">
            Book Your Modern PG
          </button>
          <button className="px-8 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-300">
            Schedule Comparison Visit
          </button>
        </motion.div>
      </div>
    </section>
  )
}