'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Home, Users, Smartphone, DollarSign, Shield } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const benefits = [
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'Just 5 mins to Eon IT Park, WTC Kharadi, and Gera Commerzone, reducing your daily commute and freeing up time for what matters.',
    highlight: '5 mins to Eon IT Park'
  },
  {
    icon: Home,
    title: 'Hotel-like Comfort',
    description: 'Fully furnished rooms with attached washrooms, modern interiors, and AC options ensure you feel pampered without the high costs.',
    highlight: 'Fully furnished rooms'
  },
  {
    icon: Users,
    title: 'Community Living',
    description: 'Networking events, workshops, and social evenings foster connections, helping newcomers combat urban isolation.',
    highlight: 'Active community events'
  },
  {
    icon: Smartphone,
    title: 'Hassle-free Move-in',
    description: 'No brokerage, no paperwork—just book and move in via our app, aligning with the flexible preferences of today\'s workforce.',
    highlight: '100% digital onboarding'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'Utilities, high-speed Wi-Fi, and maintenance are all included, providing unmatched value in the competitive co-living market.',
    highlight: 'All-inclusive pricing'
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: '24/7 security, CCTV surveillance, and biometric access ensure complete peace of mind for all residents.',
    highlight: '24/7 security'
  }
]

export default function WhyChooseCohousy() {
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
              <Users size={16} className="inline mr-2 text-accent" />
              WHY CHOOSE COHOUSY
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            More Than Just a
            <span className="text-accent"> Place to Sleep</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            When you choose Cohousy for co-living spaces in Kharadi, you get more than just a room—you get 
            a lifestyle tailored to the needs of modern professionals in Pune's premier IT corridor.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Benefits List */}
          <motion.div
            variants={withMotion(staggerContainer)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <motion.div
                  key={index}
                  variants={withMotion(fadeInUp)}
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                  className="group flex items-start space-x-6 cursor-pointer p-6 rounded-xl hover:bg-white transition-all duration-300 border border-transparent hover:border-gray-200"
                >
                  <div className={`flex-shrink-0 p-3 rounded-xl transition-all duration-300 ${
                    hoveredBenefit === index 
                      ? 'bg-accent text-black shadow-lg' 
                      : 'bg-white text-gray-600'
                  }`}>
                    <IconComponent size={24} strokeWidth={1.5} />
                  </div>

                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                      hoveredBenefit === index ? 'text-accent' : 'text-black'
                    }`}>
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-3">
                      {benefit.description}
                    </p>

                    <div className="text-sm font-semibold text-accent">
                      {benefit.highlight}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-black mb-6">
                Co-living vs Traditional PG
              </h3>

              <div className="space-y-6">
                {[
                  {
                    feature: 'Amenities',
                    cohousing: 'Fully furnished with Wi-Fi, gym, laundry, kitchen, power backup',
                    traditional: 'Basic furniture; Wi-Fi and extras often charged separately'
                  },
                  {
                    feature: 'Community',
                    cohousing: 'App-managed networking events, workshops, and social evenings',
                    traditional: 'Limited interaction; mostly solitary living'
                  },
                  {
                    feature: 'Management',
                    cohousing: '24/7 Property Captain via app for instant support',
                    traditional: 'In-person complaints only; slower resolution'
                  },
                  {
                    feature: 'Billing',
                    cohousing: 'All-inclusive (utilities, housekeeping, insurance)',
                    traditional: 'Separate bills for electricity, water, and maintenance'
                  }
                ].map((comparison, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <div className="font-semibold text-black mb-2">{comparison.feature}</div>
                    <div className="grid grid-cols-1 gap-3 text-sm">
                      <div className="text-green-600">
                        <span className="font-medium">Cohousy:</span> {comparison.cohousing}
                      </div>
                      <div className="text-gray-500">
                        <span className="font-medium">Traditional:</span> {comparison.traditional}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}