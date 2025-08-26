'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, CheckCircle, Zap, Clock } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const pricingPlans = [
  {
    title: 'Daily Stay',
    duration: '1-6 days',
    price: '₹1,500',
    unit: '/night',
    originalPrice: '₹2,000',
    popular: false,
    features: [
      'Fully furnished single room',
      'All meals included',
      'High-speed Wi-Fi',
      'Daily housekeeping',
      'All amenities access',
      'Flexible check-out',
      '24/7 support',
      'Same-day booking available'
    ],
    bestFor: 'Quick business trips, interviews, urgent accommodation needs'
  },
  {
    title: 'Weekly Stay',
    duration: '7-29 days',
    price: '₹1,300',
    unit: '/night',
    originalPrice: '₹1,500',
    popular: true,
    features: [
      'Choice of single/shared rooms',
      'All meals + snacks',
      'Premium Wi-Fi',
      'Weekly deep cleaning',
      'All amenities + co-working',
      'Laundry services',
      'Priority support',
      'Weekly rate guarantee'
    ],
    bestFor: 'Project assignments, training programs, extended business visits'
  },
  {
    title: 'Monthly Stay',
    duration: '1-3 months',
    price: '₹1,200',
    unit: '/night',
    originalPrice: '₹1,300',
    popular: false,
    features: [
      'Premium room selection',
      'Customized meal plans',
      'Dedicated workspace',
      'Bi-weekly housekeeping',
      'All premium amenities',
      'Guest privileges',
      'Dedicated support manager',
      'Flexible extension options'
    ],
    bestFor: 'Long-term projects, internships, temporary relocations'
  }
]

const comparisonFeatures = [
  'No security deposit required',
  'No broker fees or commissions',
  'Flexible cancellation policy',
  'Instant confirmation',
  'All utilities included',
  'Professional networking opportunities'
]

export default function ShortTermPricing() {
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
              <Clock size={16} className="inline mr-2 text-accent" />
              FLEXIBLE PRICING
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Pay Only for
            <span className="text-accent"> What You Need</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Transparent pricing with better rates for longer stays. No hidden charges, 
            no lock-in periods - just flexible accommodation that adapts to your schedule.
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
                  <p className="text-gray-600 mb-4">{plan.duration}</p>
                  
                  {/* Pricing */}
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-4xl font-bold text-black">{plan.price}</span>
                    <span className="text-gray-500">{plan.unit}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="text-sm text-gray-400 line-through">{plan.originalPrice}</span>
                    <span className="text-sm text-green-600 font-semibold">
                      Save ₹{parseInt(plan.originalPrice.replace('₹', '')) - parseInt(plan.price.replace('₹', ''))}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 italic">{plan.bestFor}</p>
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
                  Book Now
                </button>
              </div>

              {/* Hover Accent */}
              <div className={`absolute bottom-0 left-0 h-1 bg-accent transition-all duration-500 ${
                hoveredPlan === index ? 'w-full' : 'w-0'
              }`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Why Choose Our Short-term Rates?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare our all-inclusive rates with traditional hotels and serviced apartments - 
              we offer better value with more amenities and flexibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {comparisonFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Zap size={16} className="text-accent flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Cost Comparison */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="font-semibold text-black mb-4 text-center">Sample 7-day Stay Cost Comparison</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-white rounded-lg">
                <div className="text-red-600 font-semibold mb-1">Hotel</div>
                <div className="text-2xl font-bold text-black">₹21,000</div>
                <div className="text-xs text-gray-500">Room only, meals extra</div>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <div className="text-orange-600 font-semibold mb-1">Serviced Apartment</div>
                <div className="text-2xl font-bold text-black">₹17,500</div>
                <div className="text-xs text-gray-500">Limited amenities</div>
              </div>
              <div className="p-4 bg-accent/10 rounded-lg border-2 border-accent">
                <div className="text-accent font-semibold mb-1">Cohousy</div>
                <div className="text-2xl font-bold text-black">₹9,100</div>
                <div className="text-xs text-gray-600">All inclusive + amenities</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-accent text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Calculate Your Stay Cost
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}