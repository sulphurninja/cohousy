'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Home, CheckCircle, Star, Users } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const pricingPlans = [
  {
    title: 'Shared Room',
    type: 'Twin Sharing',
    price: '₹8,000',
    originalPrice: '₹10,000',
    savings: '₹2,000/month',
    popular: false,
    features: [
      'Shared room with female roommate',
      'All meals (veg/non-veg options)',
      'High-speed Wi-Fi',
      'Daily housekeeping',
      'Access to all women-only amenities',
      '24/7 female security',
      'Power backup',
      'Common washroom access'
    ]
  },
  {
    title: 'Single Room Standard',
    type: 'Private Room',
    price: '₹12,000',
    originalPrice: '₹15,000',
    savings: '₹3,000/month',
    popular: true,
    features: [
      'Private single room',
      'Attached washroom',
      'All meals + healthy options',
      'Premium Wi-Fi',
      'Daily housekeeping',
      'All women-centric amenities',
      'Priority support',
      'Balcony access'
    ]
  },
  {
    title: 'Single Room Premium',
    type: 'AC Private Room',
    price: '₹15,000',
    originalPrice: '₹18,000',
    savings: '₹3,000/month',
    popular: false,
    features: [
      'AC private room with premium furnishing',
      'Attached washroom with geyser',
      'Customized meal plans',
      'Dedicated workspace',
      'Priority housekeeping',
      'All luxury amenities',
      'Personal storage space',
      'Women-only floor preference'
    ]
  }
]

const inclusiveFeatures = [
  'No brokerage fees or hidden charges',
  'Flexible tenure options for women professionals',
  'Special discounts for long-term female residents',
  'Women-focused insurance coverage',
  'Emergency medical support for women',
  'Family visit accommodation'
]

export default function LadiesPGPricing() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null)

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
              <Home size={16} className="inline mr-2 text-pink-600" />
              TRANSPARENT PRICING
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Flexible Options for
            <span className="text-pink-600"> Every Woman</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Our pricing starts at ₹8,000 per month for shared rooms, up to ₹15,000 for single room 
            ladies PG with AC and premium amenities. All packages include meals, Wi-Fi, and housekeeping 
            with no brokerage fees - designed specifically for women's comfort and budget.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={withMotion(fadeInUp)}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`relative bg-white border-2 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl ${
                plan.popular 
                  ? 'border-pink-600 shadow-lg scale-105' 
                  : 'border-pink-100 hover:border-pink-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-pink-600 text-white text-center py-2 text-sm font-bold">
                  MOST POPULAR FOR WOMEN
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black mb-2">{plan.title}</h3>
                  <p className="text-gray-600 mb-4">{plan.type}</p>
                  
                  {/* Pricing */}
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-4xl font-bold text-black">{plan.price}</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-sm text-gray-400 line-through">{plan.originalPrice}</span>
                    <span className="text-sm text-green-600 font-semibold">Save {plan.savings}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle size={16} className="text-pink-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-3 font-semibold rounded-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-pink-600 text-white hover:shadow-lg'
                    : 'border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white'
                }`}>
                  Book Safe Accommodation
                </button>
              </div>

              {/* Hover Accent */}
              <div className={`absolute bottom-0 left-0 h-1 bg-pink-600 transition-all duration-500 ${
                hoveredPlan === index ? 'w-full' : 'w-0'
              }`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Inclusive Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-pink-50 rounded-2xl border border-pink-200 p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Women-Focused Benefits Included
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our pricing is designed with women's specific needs in mind, offering 
              comprehensive support and services that ensure comfort and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {inclusiveFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Star size={16} className="text-pink-600 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">
              Special offers available for women professionals and students
            </p>
            <button className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Get Customized Quote for Women
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}