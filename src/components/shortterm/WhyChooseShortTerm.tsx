'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Clock, Shield, Smartphone, Home, Users } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const benefits = [
  {
    icon: Zap,
    title: 'Zero Lock-in Period',
    description: 'Complete flexibility with no minimum stay requirements. Book for days, weeks, or months as per your project needs.',
    highlight: 'Ultimate flexibility'
  },
  {
    icon: Clock,
    title: 'Instant Availability',
    description: 'Same-day check-in available. Perfect for urgent project assignments or last-minute business trips to Kharadi.',
    highlight: 'Same-day check-in'
  },
  {
    icon: Shield,
    title: 'All-Inclusive Rates',
    description: 'No hidden charges. Electricity, Wi-Fi, housekeeping, meals, and all amenities included in transparent pricing.',
    highlight: 'No hidden costs'
  },
  {
    icon: Smartphone,
    title: 'Digital Check-in',
    description: 'Seamless app-based check-in process. Skip paperwork and move in within minutes of arrival.',
    highlight: 'Paperless process'
  },
  {
    icon: Home,
    title: 'Fully Furnished Spaces',
    description: 'Ready-to-occupy rooms with premium furnishing, linens, and everything needed for immediate comfort.',
    highlight: 'Move-in ready'
  },
  {
    icon: Users,
    title: 'Professional Network',
    description: 'Connect with fellow short-term guests and professionals working on projects in Kharadi\'s IT ecosystem.',
    highlight: 'Business networking'
  }
]

export default function WhyChooseShortTerm() {
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
              <Zap size={16} className="inline mr-2 text-accent" />
              WHY CHOOSE SHORT-TERM
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Flexibility Meets
            <span className="text-accent"> Convenience</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Our short-term rentals are designed for modern professionals who need 
            quality accommodation without the constraints of long-term commitments.
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

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8"
        >
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            Perfect for Short-term Needs
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-blue-600 mb-4">🎯 Ideal Use Cases</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Project assignments (1 week to 3 months)</li>
                <li>• Corporate training programs</li>
                <li>• Internships at IT companies</li>
                <li>• Business trips and client visits</li>
                <li>• Job interviews and onboarding</li>
                <li>• Temporary relocation during home renovation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-600 mb-4">✨ Instant Benefits</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• No broker fees or advance payments</li>
                <li>• Flexible check-in/check-out times</li>
                <li>• Weekly housekeeping included</li>
                <li>• Access to all long-term resident amenities</li>
                <li>• Option to extend stay seamlessly</li>
                <li>• Easy cancellation policies</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}