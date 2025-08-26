'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Smartphone, Shield, Heart, Users, Zap, Bell } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const appFeatures = [
  {
    icon: Shield,
    title: 'Women Safety Features',
    description: 'Panic button, family location sharing, emergency contacts, and direct connection to women\'s helpline.',
    highlight: 'One-touch emergency'
  },
  {
    icon: Heart,
    title: 'Health & Wellness Tracking',
    description: 'Period tracker, health reminders, wellness session bookings, and access to women health professionals.',
    highlight: 'Women health focused'
  },
  {
    icon: Users,
    title: 'Female Community Hub',
    description: 'Connect with other professional women, join networking events, and participate in women-focused discussions.',
    highlight: 'Professional sisterhood'
  },
  {
    icon: Zap,
    title: 'Digital Check-in & KYC',
    description: 'Fast onboarding with women-friendly verification process, ensuring comfort and privacy throughout.',
    highlight: 'Female-friendly verification'
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Safety alerts, visitor notifications, meal reminders, and wellness session alerts customized for women.',
    highlight: 'Personalized for women'
  },
  {
    icon: Smartphone,
    title: '24/7 Property Captain',
    description: 'Female property captain available for women-specific queries and support through dedicated chat.',
    highlight: 'Women-centric support'
  }
]

export default function DigitalLiving() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })

  return (
    <section 
      ref={containerRef}
      className="py-section bg-pink-50 relative overflow-hidden"
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-white border border-pink-200 rounded-full shadow-sm">
              <Smartphone size={16} className="inline mr-2 text-pink-600" />
              SEAMLESS DIGITAL LIVING
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Experience Future Living with
            <span className="text-pink-600"> Women-Centric App</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto"
          >
            Experience the future of ladies PG living with Cohousy's innovative app, transforming your 
            stay into a 100% digital journey designed specifically for women's needs. From safety features 
            to wellness tracking, every aspect is tailored for the modern professional woman.
          </motion.p>
        </motion.div>

        {/* App Features Grid */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {appFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                variants={withMotion(fadeInUp)}
                className="group bg-white border border-pink-100 rounded-2xl p-8 hover:border-pink-200 transition-all duration-500 hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300">
                  <IconComponent size={28} className="text-pink-600 group-hover:text-white" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-pink-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                <div className="text-sm font-semibold text-pink-600">
                  {feature.highlight}
                </div>

                <div className="mt-6 h-0.5 bg-pink-600 w-0 group-hover:w-full transition-all duration-500" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* App Interface Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white rounded-2xl border border-pink-200 shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              App Features Designed for Women's Needs
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every feature in our app considers women's unique requirements, from safety to wellness, 
              creating a supportive digital ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-pink-600 mb-4">🔒 Safety & Security</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Panic button with GPS location sharing</li>
                <li>• Family safety check-in notifications</li>
                <li>• Visitor management with photo verification</li>
                <li>• Emergency contact quick dial</li>
                <li>• Safety tips and alerts for women</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-600 mb-4">💝 Wellness & Community</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Women's health reminders and tracking</li>
                <li>• Wellness session bookings</li>
                <li>• Female networking events</li>
                <li>• Career mentorship programs</li>
                <li>• Mental health support resources</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Download Women-Centric App
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}