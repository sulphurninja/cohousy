'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Smartphone, Zap, Users, Shield, CreditCard, Settings } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const appFeatures = [
  {
    icon: Zap,
    title: '100% Digital Experience & Fast Onboarding',
    description: 'Sign up, complete KYC, and check-in digitally in under 30 seconds—no paperwork needed for busy IT professionals.',
    highlight: 'Paperless & instant'
  },
  {
    icon: Users,
    title: '24/7 Property Captain & Fast Complaint Resolution',
    description: 'Get instant support via chat for any issue, with auto-assignment to staff for quick fixes—perfect for professionals.',
    highlight: 'Instant support anytime'
  },
  {
    icon: CreditCard,
    title: 'Digital Payment & Rewards',
    description: 'Pay rent seamlessly and earn rewards, plus complimentary tenant insurance for added security and peace of mind.',
    highlight: 'Earn while you pay'
  },
  {
    icon: Settings,
    title: 'In-App Food Menu & Amenities Access',
    description: 'View daily menus, book gym slots, or request laundry directly from your phone—manage everything digitally.',
    highlight: 'Everything in one app'
  },
  {
    icon: Smartphone,
    title: 'Exclusive Tenant Membership & Property Mobility',
    description: 'Enjoy perks like flexible moves between Cohousy properties—ideal if your job shifts within Kharadi.',
    highlight: 'Flexible property transfers'
  },
  {
    icon: Shield,
    title: 'Management Support & Smart KYC',
    description: 'Escalate concerns to management or renew KYC effortlessly for a hassle-free stay experience.',
    highlight: 'Smart management integration'
  }
]

export default function CohousyAppFeatures() {
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-blue-50 border border-blue-100 rounded-full shadow-sm">
              <Smartphone size={16} className="inline mr-2 text-blue-600" />
              ELEVATING YOUR EXPERIENCE
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Cohousy App Features –
            <span className="text-blue-600"> Digital Living Experience</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto"
          >
            What sets Cohousy apart as the best PG in Kharadi Pune for males is our innovative mobile app. 
            This tenant smart app transforms your stay into a frictionless, digital experience, 
            especially useful for busy professionals near Eon IT Park Kharadi.
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
                className="group bg-blue-50 border border-blue-100 rounded-2xl p-8 hover:border-blue-200 transition-all duration-500 hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <IconComponent size={28} className="text-blue-600 group-hover:text-white" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                <div className="text-sm font-semibold text-blue-600">
                  {feature.highlight}
                </div>

                <div className="mt-6 h-0.5 bg-blue-600 w-0 group-hover:w-full transition-all duration-500" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* App Integration Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-gray-50 rounded-2xl border border-gray-200 shadow-sm p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Perfect for IT Professionals
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The app's hybrid AI-human support ensures you're never alone in our male PG. 
              For example, if you're facing a maintenance issue after hours at WTC Kharadi, 
              the Property Captain resolves it promptly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-green-600 mb-4">📱 Daily Use Cases</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Quick maintenance requests during work hours</li>
                <li>• Digital rent payment with reward points</li>
                <li>• Gym slot booking for early morning workouts</li>
                <li>• Food menu checking for healthy meal planning</li>
                <li>• Instant property captain chat support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-4">⚡ Professional Benefits</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Zero paperwork for busy work schedules</li>
                <li>• 24/7 support for shift workers</li>
                <li>• Property mobility for job changes</li>
                <li>• Digital KYC for quick onboarding</li>
                <li>• Tenant insurance for professional peace of mind</li>
              </ul>
            </div>
          </div>

       <div className="text-center mt-8">
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Download Cohousy App
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}