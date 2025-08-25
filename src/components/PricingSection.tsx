'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import { Check, Star, Wifi, Home, Clock, Shield } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const pricingData = [
  {
    option: 'Shared Rooms',
    occupancy: 'Double Sharing',
    price: '₹8,000',
    originalPrice: '₹10,000',
    period: 'per month',
    features: [
      'High-speed Wi-Fi included',
      'Daily housekeeping service',
      'Access to all common amenities',
      'Community events & networking',
      'Security & CCTV monitoring',
      'Flexible lease terms'
    ],
    popular: false,
    description: 'Perfect for professionals seeking community living',
    savings: 'Save ₹2,000'
  },
  {
    option: 'Single Rooms',
    occupancy: '1RK/1BHK Private',
    price: '₹18,000',
    originalPrice: null,
    period: 'per month',
    features: [
      'Fully private living space',
      'Premium amenities included',
      'Priority customer support',
      'Flexible lease options',
      'Dedicated parking space',
      'Premium furnishing'
    ],
    popular: true,
    description: 'Your private sanctuary with premium amenities',
    savings: null
  },
  {
    option: 'Short-Term Stay',
    occupancy: 'Flexible Duration',
    price: '₹1,300',
    originalPrice: null,
    period: 'per night',
    features: [
      'Zero lock-in period',
      'Daily/weekly rate options',
      'Fully furnished spaces',
      'Immediate move-in ready',
      'All utilities included',
      'Perfect for business trips'
    ],
    popular: false,
    description: 'Ideal for project stays and business travelers',
    savings: null
  }
]

const benefits = [
  {
    icon: Shield,
    title: 'Zero Brokerage',
    description: 'No hidden fees or broker charges'
  },
  {
    icon: Wifi,
    title: 'All-Inclusive',
    description: 'Utilities, Wi-Fi, and meals included'
  },
  {
    icon: Clock,
    title: 'Flexible Terms',
    description: 'Monthly, quarterly, or yearly options'
  },
  {
    icon: Home,
    title: 'Premium Locations',
    description: 'Walking distance to Eon IT Park'
  }
]

export default function PricingSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const headerY = useTransform(scrollYProgress, [0, 0.3], [50, -50])

  return (
    <section 
      ref={containerRef}
      id="pricing" 
      className="py-section bg-white relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto px-6">
        {/* Clean Header */}
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
              TRANSPARENT PRICING
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Simple, Transparent
            <span className="text-accent"> Pricing</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Choose the perfect accommodation plan that fits your lifestyle and budget. 
            All packages include premium amenities with no hidden costs.
          </motion.p>
        </motion.div>

        {/* Clean Pricing Cards */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {pricingData.map((plan, index) => (
            <motion.div
              key={index}
              variants={withMotion(fadeInUp)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative bg-white border rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl ${
                plan.popular 
                  ? 'border-accent shadow-lg scale-105 ring-2 ring-accent/20' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-accent text-black text-center py-2 text-sm font-bold">
                  <Star size={16} className="inline mr-1" />
                  MOST POPULAR
                </div>
              )}

              {/* Card Content */}
              <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                {/* Savings Badge */}
                {plan.savings && (
                  <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {plan.savings}
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black mb-2">
                    {plan.option}
                  </h3>
                  
                  <div className="text-sm text-gray-600 mb-4">
                    {plan.occupancy}
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Pricing Display */}
                  <div className="mb-6">
                    {plan.originalPrice && (
                      <div className="text-lg text-gray-400 line-through mb-1">
                        {plan.originalPrice}
                      </div>
                    )}
                    <div className="text-4xl font-bold text-accent mb-1">
                      {plan.price}
                    </div>
                    <div className="text-gray-600 text-sm">{plan.period}</div>
                  </div>
                </div>

                {/* Clean Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-green-600" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Clean CTA Button */}
                <button className={`w-full py-4 cursor-pointer font-semibold rounded-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-accent text-black hover:shadow-lg hover:scale-105'
                    : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg'
                }`}>
                  {plan.price === 'Contact for rates' ? 'Get Custom Quote' : 'Book Now'}
                </button>
              </div>

              {/* Subtle hover accent */}
              <div className={`absolute bottom-0 left-0 h-1 bg-accent transition-all duration-500 ${
                hoveredIndex === index ? 'w-full' : 'w-0'
              }`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Key Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-accent/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <IconComponent size={24} className="text-accent" strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-black mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            )
          })}
        </motion.div>

        {/* Clean Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-black mb-4">
              Why Choose Cohousy?
            </h3>
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
              Unlike competitors like Stanza Living or Zolo, we offer transparent pricing 
              with no hidden fees, premium locations near Eon IT Park, and a comprehensive 
              mobile app for seamless living experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 cursor-pointer bg-accent text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                Compare Plans
              </button>
              <button className="px-8 py-3 cursor-pointer border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
                Schedule Visit
              </button>
            </div>
          </div>
        </motion.div>

        {/* Pricing Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-12 p-6 bg-white rounded-xl border border-gray-200 shadow-sm"
        >
          <div className="flex items-center justify-center gap-2 text-green-600 mb-2">
            <Shield size={20} />
            <span className="font-semibold">Price Guarantee</span>
          </div>
          <p className="text-sm text-gray-600">
            We guarantee transparent pricing with no hidden costs. What you see is what you pay.
          </p>
        </motion.div>
      </div>
    </section>
  )
}