'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Smartphone, Zap, Users, CreditCard, Settings, Shield } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const appFeatures = [
  {
    icon: Zap,
    title: 'Digital KYC & Fast Onboarding',
    description: 'Fast onboarding in under 30 seconds, no paperwork. Track status with smart prompts for seamless move-in experience.',
    highlight: '100% paperless experience'
  },
  {
    icon: Users,
    title: '24/7 Property Captain',
    description: 'Real-time support via human-AI hybrid system. Chat for queries or emergencies with instant response and resolution.',
    highlight: 'Always available support'
  },
  {
    icon: Settings,
    title: 'Swift Complaint Resolution',
    description: 'Log issues like electrical problems with auto-assignment to staff and timeline tracking for quick resolution.',
    highlight: 'Efficient issue management'
  },
  {
    icon: CreditCard,
    title: 'Digital Payments & Rewards',
    description: 'Secure rent payments with reward points and complimentary tenant insurance for complete financial protection.',
    highlight: 'Earn while you pay'
  },
  {
    icon: Smartphone,
    title: 'In-App Food Menu & Amenities',
    description: 'Plan meals or book gym slots effortlessly. Everything managed from your smartphone with real-time availability.',
    highlight: 'Total lifestyle management'
  },
  {
    icon: Shield,
    title: 'Exclusive Tenant Membership',
    description: 'Move between properties easily with exclusive membership benefits. Flexible transfers without losing perks.',
    highlight: 'Premium membership perks'
  }
]

export default function AppFeatures() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })

  return (
    <section 
      ref={containerRef}
      className="py-section bg-purple-50 relative overflow-hidden"
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-white border border-purple-200 rounded-full shadow-sm">
              <Smartphone size={16} className="inline mr-2 text-purple-600" />
              APP FEATURES
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            App Features Enhancing Your
            <span className="text-purple-600"> Single Room PG Stay</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto"
          >
            Cohousy's app transforms single room PG in Kharadi Pune into a digital haven. Enjoy 100% 
            paperless experience from check-in to payments. This app ensures frictionless living near 
            Eon IT Park Kharadi with comprehensive digital features.
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
                className="group bg-white border border-purple-100 rounded-2xl p-8 hover:border-purple-200 transition-all duration-500 hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  <IconComponent size={28} className="text-purple-600 group-hover:text-white" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                <div className="text-sm font-semibold text-purple-600">
                  {feature.highlight}
                </div>

                <div className="mt-6 h-0.5 bg-purple-600 w-0 group-hover:w-full transition-all duration-500" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* App Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white rounded-2xl border border-purple-200 shadow-sm p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Why Our App Makes the Difference
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              This app streamlines life for busy professionals at Eon IT Park Kharadi, 
              reducing friction with comprehensive features that traditional PGs simply can't offer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-green-600 mb-4">📱 Cohousy Digital Haven</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 30-second digital check-in process</li>
                <li>• 24/7 AI-human hybrid support system</li>
                <li>• Automated complaint tracking with timelines</li>
                <li>• Digital payments with rewards & insurance</li>
                <li>• Real-time food menu and amenity booking</li>
                <li>• Seamless property transfers within network</li>
                <li>• Comprehensive tenant membership benefits</li>
                <li>• Smart notifications and status updates</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-600 mb-4">📄 Traditional PG Management</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Lengthy paperwork and manual processes</li>
                <li>• Limited support hours with delays</li>
                <li>• Manual complaint logging, slow resolution</li>
                <li>• Cash payments, no rewards or protection</li>
                <li>• No digital access to services or menus</li>
                <li>• Rigid contracts, difficult relocations</li>
                <li>• Basic services, no membership perks</li>
                <li>• Minimal communication and updates</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Perfect for IT professionals who value efficiency and digital convenience
            </p>
            <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Download Cohousy App Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}