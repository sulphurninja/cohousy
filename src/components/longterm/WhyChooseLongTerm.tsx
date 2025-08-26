'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Home, DollarSign, Shield, Wifi, Users, Calendar } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const benefits = [
  {
    icon: Home,
    title: 'Private 1BHK/1RK Rooms',
    description: 'Enjoy complete privacy in your own furnished space with attached washroom, balcony, and modern amenities.',
    highlight: 'Complete privacy & comfort'
  },
  {
    icon: DollarSign,
    title: 'All-Inclusive Pricing',
    description: 'No hidden costs - electricity, water, Wi-Fi, maintenance, and housekeeping all included in one monthly payment.',
    highlight: 'Transparent, predictable costs'
  },
  {
    icon: Shield,
    title: 'Flexible Stay Duration',
    description: 'Minimum 3-month stays with easy extensions. Perfect for project assignments, job relocations, or settling in Pune.',
    highlight: '3+ months flexibility'
  },
  {
    icon: Wifi,
    title: 'Premium Amenities Access',
    description: 'Enjoy gym, community spaces, power backup, parking, and all premium facilities without extra charges.',
    highlight: 'Full amenities included'
  },
  {
    icon: Users,
    title: 'Professional Community',
    description: 'Connect with like-minded long-term residents who understand the value of stability and professional networking.',
    highlight: 'Quality professional network'
  },
  {
    icon: Calendar,
    title: 'Hassle-Free Maintenance',
    description: 'Regular housekeeping, prompt repairs, and proactive maintenance ensure you focus on work, not upkeep.',
    highlight: 'Maintenance-free living'
  }
]

export default function WhyChooseLongTerm() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null)

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
              WHY CHOOSE LONG-TERM
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Stability Meets
            <span className="text-accent"> Modern Living</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Our long-term rentals offer the perfect balance of privacy, community, and convenience 
            for professionals who value stability without compromising on modern amenities.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={index}
                variants={withMotion(fadeInUp)}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
                className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-gray-200 transition-all duration-500 hover:shadow-lg"
              >
                <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center transition-all duration-300 ${
                  hoveredBenefit === index ? 'bg-accent text-black' : 'bg-gray-100 text-gray-600'
                }`}>
                  <IconComponent size={24} strokeWidth={1.5} />
                </div>

                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  hoveredBenefit === index ? 'text-accent' : 'text-black'
                }`}>
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {benefit.description}
                </p>

                <div className="text-sm font-semibold text-accent">
                  {benefit.highlight}
                </div>

                <div className={`mt-6 h-0.5 bg-accent transition-all duration-500 ${
                  hoveredBenefit === index ? 'w-full' : 'w-0'
                }`} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Long-term vs Short-term Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8"
        >
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            Long-term vs Short-term Benefits
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-green-600 mb-4">✓ Long-term Advantages</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Lower monthly rates with extended stay discounts</li>
                <li>• Priority room selection and upgrade options</li>
                <li>• Dedicated community manager support</li>
                <li>• Storage solutions for personal belongings</li>
                <li>• Flexible furniture arrangements</li>
                <li>• Established social connections</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-orange-600 mb-4">⚡ Perfect for:</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• IT professionals on long-term projects</li>
                <li>• New employees settling in Pune</li>
                <li>• Professionals seeking work-life balance</li>
                <li>• Those avoiding broker hassles</li>
                <li>• Couples looking for privacy with community benefits</li>
                <li>• Remote workers needing stable workspace</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}