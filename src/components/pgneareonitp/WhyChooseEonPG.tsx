'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Clock, Users, Smartphone, Shield, DollarSign } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const benefits = [
  {
    icon: MapPin,
    title: 'Unbeatable Proximity',
    description: 'Just 5-10 minutes walk to Eon IT Park, home to over 50 firms like Synechron, Eaton, and Veritas Technologies, saving you hours on commutes.',
    highlight: 'Walk to work in 5 minutes'
  },
  {
    icon: Users,
    title: 'Tailored for Professionals',
    description: 'Designed for IT folks at companies in Kharadi, with flexible single room options for male or female residents, supporting hybrid work and night shifts.',
    highlight: 'Professional-focused environment'
  },
  {
    icon: Shield,
    title: 'Community and Wellness Focus',
    description: 'Beyond basic PG hostels, we foster connections through shared spaces, aligning with post-pandemic trends for balanced living.',
    highlight: 'Holistic well-being approach'
  },
  {
    icon: Smartphone,
    title: 'No-Hassle Setup',
    description: 'Zero brokerage, paperless onboarding, and all-inclusive packages make moving in effortless, outshining rigid setups from competitors.',
    highlight: 'Digital-first experience'
  },
  {
    icon: DollarSign,
    title: 'Value-Driven Pricing',
    description: 'Transparent rates that include utilities and amenities, providing better ROI than traditional listings with hidden charges.',
    highlight: 'All-inclusive transparent pricing'
  },
  {
    icon: Clock,
    title: 'Time-Saving Benefits',
    description: 'Eliminate long commutes and traffic stress. More time for career growth, fitness, networking, and exploring Kharadi\'s vibrant ecosystem.',
    highlight: 'More time for what matters'
  }
]

export default function WhyChooseEonPG() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null)

  return (
    <section 
      ref={containerRef}
      className="py-section bg-orange-50 relative overflow-hidden"
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-white border border-orange-200 rounded-full shadow-sm">
              <MapPin size={16} className="inline mr-2 text-orange-600" />
              WHY CHOOSE COHOUSY
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Why Choose Cohousy for PG
            <span className="text-orange-600"> near Eon IT Park?</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto"
          >
            Selecting the right PG near Eon IT Park Kharadi can transform your daily routine, 
            and Cohousy sets the standard with a blend of location perks, luxury features, 
            and tech-savvy management. Unlike aggregator platforms, our properties are 
            exclusively managed for quality and personalization.
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
                className="group bg-white border border-orange-100 rounded-2xl p-8 hover:border-orange-200 transition-all duration-500 hover:shadow-lg"
              >
                <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center transition-all duration-300 ${
                  hoveredBenefit === index ? 'bg-orange-600 text-white' : 'bg-orange-100 text-orange-600'
                }`}>
                  <IconComponent size={24} strokeWidth={1.5} />
                </div>

                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  hoveredBenefit === index ? 'text-orange-600' : 'text-black'
                }`}>
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {benefit.description}
                </p>

                <div className="text-sm font-semibold text-orange-600">
                  {benefit.highlight}
                </div>

                <div className={`mt-6 h-0.5 bg-orange-600 transition-all duration-500 ${
                  hoveredBenefit === index ? 'w-full' : 'w-0'
                }`} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Competitive Advantage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white rounded-2xl border border-orange-200 shadow-sm p-8"
        >
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            Cohousy vs Competitors
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-green-600 mb-4 flex items-center">
                <span className="mr-2">✓</span> Cohousy PG near Eon IT Park
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 5-minute walk to Eon IT Park & WTC</li>
                <li>• 100% digital experience with smart app</li>
                <li>• Zero brokerage & transparent pricing</li>
                <li>• Flexible single/shared room options</li>
                <li>• Community events & professional networking</li>
                <li>• 24/7 digital support & maintenance</li>
                <li>• All-inclusive amenities & utilities</li>
                <li>• Resident-focused continuous improvements</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-600 mb-4 flex items-center">
                <span className="mr-2">✗</span> Traditional PG/Competitors
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Often 20+ minutes from IT parks</li>
                <li>• Manual processes & paperwork hassles</li>
                <li>• Hidden charges & brokerage fees</li>
                <li>• Limited room flexibility & options</li>
                <li>• Isolated living with minimal community</li>
                <li>• Slow complaint resolution</li>
                <li>• Separate utility bills & extra costs</li>
                <li>• Generic, one-size-fits-all approach</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Our resident-centric approach ensures continual improvements—making Cohousy the top choice in 2025's competitive market
            </p>
            <button className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Experience the Cohousy Difference
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}