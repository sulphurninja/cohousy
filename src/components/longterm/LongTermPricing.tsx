'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Home, CheckCircle, Star, Calendar } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const pricingPlans = [
  {
    title: 'Essential Long-term',
    type: '1RK Private Room',
    duration: '3-6 months',
    price: '₹15,000',
    originalPrice: '₹18,000',
    savings: '₹3,000/month',
    popular: false,
    features: [
      'Private 1RK with attached washroom',
      'Fully furnished with modern amenities',
      'All utilities included (electricity, water)',
      'High-speed Wi-Fi',
      'Daily housekeeping',
      'Access to gym and common areas',
      'Power backup',
      '24/7 security'
    ]
  },
  {
    title: 'Premium Long-term',
    type: '1BHK Private Room',
    duration: '6-12 months',
    price: '₹16,000',
    originalPrice: '₹20,000',
    savings: '₹4,000/month',
    popular: true,
    features: [
      'Private 1BHK with balcony',
      'Premium furnishing and decor',
      'All utilities + premium Wi-Fi',
      'Dedicated workspace setup',
      'Priority housekeeping',
      'All amenities + co-working access',
      'Reserved parking',
      'Personal relationship manager'
    ]
  },
  {
    title: 'Executive Long-term',
    type: '1BHK Deluxe',
    duration: '12+ months',
    price: '₹17,500',
    originalPrice: '₹22,000',
    savings: '₹4,500/month',
    popular: false,
    features: [
      'Spacious 1BHK with premium location',
      'Executive-level furnishing',
      'All utilities + enterprise Wi-Fi',
      'Private workspace + meeting room access',
      'Concierge services',
      'All premium amenities',
      'Dedicated parking + storage',
      'Flexible lease terms'
    ]
  }
]

const additionalBenefits = [
  'No security deposit for stays 6+ months',
  'Free property transfers within Cohousy network',
  'Monthly community events and networking',
  'Professional laundry services',
  'Guest accommodation arrangements',
  '24/7 property captain support'
]

export default function LongTermPricing() {
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
              <Calendar size={16} className="inline mr-2 text-accent" />
              LONG-TERM PRICING
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Extended Stay
            <span className="text-accent"> Savings</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            The longer you stay, the more you save. Our long-term pricing offers significant 
            discounts with enhanced amenities and personalized services for extended residents.
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
                  ? 'border-accent shadow-lg scale-105' 
                  : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-accent text-black text-center py-2 text-sm font-bold">
                  MOST POPULAR
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black mb-2">{plan.title}</h3>
                  <p className="text-gray-600 mb-1">{plan.type}</p>
                  <p className="text-sm text-accent font-medium">{plan.duration}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
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
                      <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-3 font-semibold rounded-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-accent text-black hover:shadow-lg'
                    : 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                }`}>
                  Choose This Plan
                </button>
              </div>

              {/* Hover Accent */}
              <div className={`absolute bottom-0 left-0 h-1 bg-accent transition-all duration-500 ${
                hoveredPlan === index ? 'w-full' : 'w-0'
              }`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Long-term Resident Exclusive Benefits
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Extended stay residents enjoy special perks and savings that make long-term living 
              with Cohousy even more rewarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Star size={16} className="text-accent flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-accent text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Calculate Your Savings
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}