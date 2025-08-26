'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Smartphone, Zap, Users, CreditCard, Settings, Shield } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const appFeatures = [
  {
    icon: Zap,
    title: 'Digital Check-In & KYC',
    description: 'Fast onboarding in under 30 seconds with no paperwork needed. Perfect for busy professionals transitioning jobs.',
    highlight: 'Instant setup, zero paperwork'
  },
  {
    icon: Users,
    title: '24/7 Property Captain',
    description: 'Instant chat support for emergencies or queries via human-AI hybrid system, available round the clock.',
    highlight: 'Always available support'
  },
  {
    icon: Settings,
    title: 'Fast Complaint Resolution',
    description: 'Log issues with auto-assignment and tracking system. No more waiting for manual processes or delayed responses.',
    highlight: 'Quick issue resolution'
  },
  {
    icon: CreditCard,
    title: 'Digital Payments & Rewards',
    description: 'Secure rent payments with reward points, plus complimentary tenant insurance for complete peace of mind.',
    highlight: 'Earn rewards while paying'
  },
  {
    icon: Settings,
    title: 'In-App Food Menu & Amenities Access',
    description: 'Plan meals, check daily menus, or book gym slots effortlessly. Everything managed from your smartphone.',
    highlight: 'Total lifestyle management'
  },
  {
    icon: Shield,
    title: 'Exclusive Tenant Membership',
    description: 'Benefits like flexible property moves, priority support, and management escalations for seamless living.',
    highlight: 'Premium membership perks'
  }
]

export default function DigitalExperience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })

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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-orange-50 border border-orange-100 rounded-full shadow-sm">
              <Smartphone size={16} className="inline mr-2 text-orange-600" />
              DIGITAL LIVING EXPERIENCE
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Seamless Digital Experience with
            <span className="text-orange-600"> Cohousy's App</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto"
          >
            What differentiates Cohousy's PG near Eon IT Park Kharadi is our tenant smart app—offering 
            a 100% digital journey that competitors simply can't match. This streamlines life for 
            busy professionals, reducing friction with comprehensive digital features.
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
                className="group bg-orange-50 border border-orange-100 rounded-2xl p-8 hover:border-orange-200 transition-all duration-500 hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                  <IconComponent size={28} className="text-orange-600 group-hover:text-white" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                <div className="text-sm font-semibold text-orange-600">
                  {feature.highlight}
                </div>

                <div className="mt-6 h-0.5 bg-orange-600 w-0 group-hover:w-full transition-all duration-500" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Digital vs Traditional Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-gray-50 rounded-2xl border border-gray-200 shadow-sm p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Digital-First vs Traditional PG Management
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              This app streamlines life for busy professionals at Eon IT Park Kharadi, 
              reducing friction with comprehensive features that traditional PGs can't offer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-green-600 mb-4">📱 Cohousy Digital Experience</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 30-second digital onboarding process</li>
                <li>• 24/7 AI-human hybrid support system</li>
                <li>• Automated complaint tracking & resolution</li>
                <li>• Digital payments with rewards & insurance</li>
                <li>• In-app food menu & amenity booking</li>
                <li>• Flexible property transfers within network</li>
                <li>• Management escalation features</li>
                <li>• Real-time updates & notifications</li>
              </ul>
            </div>
           <div>
              <h4 className="font-semibold text-red-600 mb-4">📄 Traditional PG Management</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Lengthy paperwork and manual processes</li>
                <li>• Limited support hours with delays</li>
                <li>• Manual complaint logging, slow resolution</li>
                <li>• Cash payments, no rewards or protection</li>
                <li>• No digital menu access or booking system</li>
                <li>• Rigid contracts, difficult transfers</li>
                <li>• No direct management communication</li>
                <li>• Minimal updates, poor communication</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Perfect for IT professionals who value efficiency and digital convenience
            </p>
            <button className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Download Cohousy App
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}