'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Smartphone, Users, Settings, CreditCard, MapPin, Shield, Utensils, MessageSquare } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const appFeatures = [
  {
    icon: Settings,
    title: '100% Paperless Onboarding',
    description: 'Digital check-in and KYC in under 30 seconds, with smart prompts for a smooth start.',
    color: 'from-blue-50 to-blue-100'
  },
  {
    icon: MessageSquare,
    title: '24/7 Property Captain',
    description: 'Real-time chat support via a human-AI hybrid for queries or emergencies, available round-the-clock.',
    color: 'from-green-50 to-green-100'
  },
  {
    icon: Settings,
    title: 'Complaint Tracking',
    description: 'Fast resolution with auto-assignment to staff, ensuring issues like plumbing are fixed promptly.',
    color: 'from-purple-50 to-purple-100'
  },
  {
    icon: CreditCard,
    title: 'Online Rent Payments',
    description: 'Secure digital payments with rewards on every transaction, plus exclusive tenant membership perks.',
    color: 'from-yellow-50 to-yellow-100'
  },
  {
    icon: Utensils,
    title: 'In-App Food Menu',
    description: 'View daily menus and plan meals conveniently, enhancing the community dining experience.',
    color: 'from-red-50 to-red-100'
  },
  {
    icon: Shield,
    title: 'Tenant Insurance',
    description: 'Complimentary coverage for added security during your stay.',
    color: 'from-teal-50 to-teal-100'
  },
  {
    icon: MapPin,
    title: 'Move into Different Properties',
    description: 'Flexibility to switch between Cohousy locations, ideal for job shifts within Kharadi.',
    color: 'from-orange-50 to-orange-100'
  },
  {
    icon: Users,
    title: 'Management Support',
    description: 'Direct escalation for community concerns, with documented history for transparency.',
    color: 'from-pink-50 to-pink-100'
  }
]

export default function DigitalExperience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

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
              <Smartphone size={16} className="inline mr-2 text-accent" />
              DIGITAL-FIRST EXPERIENCE
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            The Cohousy
            <span className="text-accent"> Smart App</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Cohousy's tenant smart app transforms co-living in Kharadi into a frictionless journey. 
            This 100% digital platform handles everything from onboarding to daily needs, making it 
            perfect for tech-savvy professionals near Eon IT Park.
          </motion.p>
        </motion.div>

        {/* App Features Grid */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {appFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                variants={withMotion(fadeInUp)}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 transition-all duration-500 hover:shadow-lg overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-all duration-300 ${
                    hoveredFeature === index ? 'bg-accent text-black' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <IconComponent size={24} strokeWidth={1.5} />
                  </div>

                  <h3 className={`text-lg font-bold mb-3 transition-colors duration-300 ${
                    hoveredFeature === index ? 'text-accent' : 'text-black'
                  }`}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-500 ${
                  hoveredFeature === index ? 'w-full' : 'w-0'
                }`} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* App Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center bg-white rounded-2xl border border-gray-200 shadow-sm p-8"
        >
          <h3 className="text-2xl font-bold text-black mb-4">
            Download the Cohousy App
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            This app elevates the living experience, aligning with the digital preferences 
            of residents in Kharadi's IT ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
              Download for iOS
            </button>
            <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300">
              Download for Android
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}