'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Shield, Heart, Wifi, Coffee, Calendar } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const communityFeatures = [
  {
    icon: Users,
    title: 'Vibrant Professional Community',
    description: 'Connect with IT professionals from 50+ companies at Eon IT Park. Build networks that enhance your career growth.',
    benefit: 'Career networking opportunities'
  },
  {
    icon: Calendar,
    title: 'App-Managed Community Events',
    description: 'Wellness sessions, networking events, and skill-sharing workshops organized through our smart app.',
    benefit: 'Structured social engagement'
  },
  {
    icon: Coffee,
    title: 'Combating Urban Isolation',
    description: 'Common spaces designed to foster meaningful connections while respecting individual privacy needs.',
    benefit: 'Work-life balance support'
  }
]

const safetyFeatures = [
  {
    icon: Shield,
    title: '24/7 CCTV Surveillance',
    description: 'Comprehensive monitoring system covering all common areas and entry points for complete security.'
  },
  {
    icon: Shield,
    title: 'Professional Security Guards',
    description: 'Trained security personnel available round-the-clock for immediate response to any concerns.'
  },
  {
    icon: Shield,
    title: 'Biometric Access Control',
    description: 'Advanced access systems ensuring only authorized residents and verified guests can enter.'
  },
  {
    icon: Shield,
    title: 'Background Verification',
    description: 'Thorough screening of all residents for a safe and trustworthy living environment.'
  },
  {
    icon: Shield,
    title: 'Emergency Response System',
    description: 'App-connected emergency features with direct links to local authorities and medical services.'
  },
  {
    icon: Shield,
    title: 'Insurance Coverage',
    description: 'Complimentary tenant insurance providing additional protection and peace of mind.'
  }
]

export default function CommunityAndSafety() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })

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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-white border border-orange-200 rounded-full shadow-sm">
              <Users size={16} className="inline mr-2 text-orange-600" />
              COMMUNITY & SAFETY
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Building Community and Safety in Our
            <span className="text-orange-600"> PG near Eon IT Park</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto"
          >
            Community thrives in Cohousy's PG near Eon IT Park through app-managed events like 
            wellness sessions and networking—combating isolation while maintaining safety as our 
            paramount concern with comprehensive security measures.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* Community Section */}
          <motion.div
            variants={withMotion(staggerContainer)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold text-black mb-8 flex items-center">
              <Users size={28} className="text-orange-600 mr-3" />
              Thriving Professional Community
            </h3>

            <div className="space-y-6">
              {communityFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    variants={withMotion(fadeInUp)}
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-orange-100 hover:border-orange-200 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 p-3 bg-orange-100 rounded-xl">
                      <IconComponent size={24} className="text-orange-600" strokeWidth={1.5} />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-black mb-2">
                        {feature.title}
                      </h4>
                      
                      <p className="text-gray-600 leading-relaxed mb-2">
                        {feature.description}
                      </p>

                      <div className="text-sm font-semibold text-orange-600">
                        {feature.benefit}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Community Visual */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 relative aspect-video overflow-hidden rounded-xl"
            >
              <Image
                src="/PG/500+ IT Professionals.jpg"
                alt="Community spaces at PG near Eon IT Park Kharadi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-transparent flex items-center">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">500+ IT Professionals</h4>
                  <p className="text-orange-100">Active community network</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Safety Section */}
          <motion.div
            variants={withMotion(staggerContainer)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold text-black mb-8 flex items-center">
              <Shield size={28} className="text-green-600 mr-3" />
              Comprehensive Safety Measures
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {safetyFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    variants={withMotion(fadeInUp)}
                    className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-green-100 hover:border-green-200 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0">
                      <IconComponent size={20} className="text-green-600" strokeWidth={1.5} />
                    </div>

                    <div className="flex-1">
                      <h4 className="font-semibold text-black mb-1">
                        {feature.title}
                      </h4>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Safety Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              <div className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
                <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Safety Record</div>
              </div>
              <div className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
                <div className="text-2xl font-bold text-green-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Security Coverage</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Gender-Specific Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-white rounded-2xl border border-orange-200 p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Specialized Accommodation Options
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              For enhanced comfort and community, we offer specialized accommodations 
              designed specifically for different needs and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
              <h4 className="text-xl font-bold text-pink-600 mb-3">For Women Professionals</h4>
              <p className="text-gray-600 mb-4">
                Enhanced safety features, women-only environments, and female-focused amenities. 
                Perfect for professional women working at companies in Kharadi.
              </p>
              <button className="px-6 py-2 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors duration-300">
                Explore Ladies PG
              </button>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h4 className="text-xl font-bold text-blue-600 mb-3">For Male Professionals</h4>
              <p className="text-gray-600 mb-4">
                Brotherhood-focused environment, professional networking, and male-centric 
                community activities near Eon IT Park and WTC Kharadi.
              </p>
              <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Explore Male PG
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Emergency systems link to the app, ensuring peace of mind near busy IT hubs
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <span>✓ App-Connected Emergency Features</span>
              <span>✓ Local Authority Links</span>
              <span>✓ 24/7 Response System</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}