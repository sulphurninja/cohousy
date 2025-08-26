'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Eye, Lock, Users, AlertTriangle, Phone } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const securityFeatures = [
  {
    icon: Eye,
    title: 'Comprehensive CCTV Coverage',
    description: '24/7 surveillance across all common areas, entrances, and corridors with dedicated monitoring for women\'s safety.',
    highlight: 'Female-monitored security room'
  },
  {
    icon: Shield,
    title: 'Female Security Personnel',
    description: 'Trained female security guards during night shifts, ensuring comfortable interaction and immediate response.',
    highlight: 'Women-only night security'
  },
  {
    icon: Lock,
    title: 'Advanced Access Control',
    description: 'Biometric entry system with restricted visitor access and mandatory guest registration for enhanced security.',
    highlight: 'Visitor verification mandatory'
  },
  {
    icon: Users,
    title: 'Verified Women-Only Community',
    description: 'Thorough background verification of all female residents with professional references and identity checks.',
    highlight: '100% verified female residents'
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Response System',
    description: 'Panic buttons in rooms connected to app, immediate alerts to security, and direct line to local women helpline.',
    highlight: 'Women helpline integration'
  },
  {
    icon: Phone,
    title: 'Family Connect Program',
    description: 'Regular safety updates to families, emergency contact system, and 24/7 family communication support.',
    highlight: 'Family safety assurance'
  }
]

const safetyStats = [
  { value: '0', label: 'Security Incidents', period: 'Since Inception' },
  { value: '24/7', label: 'Female Security', period: 'Available Always' },
  { value: '100%', label: 'Background Verified', period: 'All Residents' },
  { value: '<60s', label: 'Emergency Response', period: 'Average Time' }
]

export default function SecurityFeatures() {
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-pink-50 border border-pink-100 rounded-full shadow-sm">
              <Shield size={16} className="inline mr-2 text-pink-600" />
              UNMATCHED SECURITY
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Advanced Security Features
            <span className="text-pink-600"> for Women's Safety</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto"
          >
            Safety is non-negotiable in a ladies PG in Kharadi Pune. At Cohousy, we implement 
            advanced security measures specifically designed for women's safety, ensuring complete 
            peace of mind for residents and their families. Our multi-layered approach addresses 
            every aspect of women's security concerns.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          
          {/* Security Features */}
          <motion.div
            variants={withMotion(staggerContainer)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {securityFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={withMotion(fadeInUp)}
                  className="group flex items-start space-x-4 p-6 bg-pink-50 rounded-xl border border-pink-100 hover:border-pink-200 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="flex-shrink-0 p-3 bg-pink-100 rounded-xl group-hover:bg-pink-600 group-hover:text-white transition-all duration-300">
                    <IconComponent size={24} className="text-pink-600 group-hover:text-white" strokeWidth={1.5} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-black mb-2">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-2">
                      {feature.description}
                    </p>

                    <div className="text-sm font-semibold text-pink-600">
                      {feature.highlight}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Security Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src="/skyline.avif"
              alt="Advanced security features at ladies PG in Kharadi"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Security Badges */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Shield size={20} className="text-green-600" />
                <span className="font-semibold text-black">Women-Safe Zone</span>
              </div>
              <div className="text-sm text-gray-600">24/7 Female Security</div>
            </div>

            <div className="absolute bottom-6 right-6 bg-pink-600/95 backdrop-blur-sm text-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Eye size={20} />
                <span className="font-semibold">Live Monitoring</span>
              </div>
              <div className="text-sm text-white/80">Female-supervised security</div>
            </div>

            <div className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-green-600/95 backdrop-blur-sm text-white p-3 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="font-bold">0</div>
                <div className="text-xs">Incidents</div>
              </div>
            </div>
          </motion.div>
        </div>

       {/* Safety Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {safetyStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-pink-50 rounded-xl border border-pink-100">
              <div className="text-3xl font-bold text-pink-600 mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-black mb-1">{stat.label}</div>
              <div className="text-xs text-gray-600">{stat.period}</div>
            </div>
          ))}
        </motion.div>

        {/* Emergency Procedures */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl border border-pink-200 p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              What Makes Our Security Women-Centric?
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our security protocols are specifically designed understanding women's unique safety concerns. 
              Every measure is implemented with female comfort and dignity in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-pink-100">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <Users size={24} className="text-pink-600" />
              </div>
              <h4 className="font-semibold text-black mb-2">Female Staff Priority</h4>
              <p className="text-sm text-gray-600">Female security, housekeeping, and management staff for comfortable interaction</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-pink-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Phone size={24} className="text-purple-600" />
              </div>
              <h4 className="font-semibold text-black mb-2">Direct Helpline Access</h4>
              <p className="text-sm text-gray-600">One-touch access to women's helpline and emergency services</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-pink-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <AlertTriangle size={24} className="text-green-600" />
              </div>
              <h4 className="font-semibold text-black mb-2">Family Alert System</h4>
              <p className="text-sm text-gray-600">Automatic family notifications during emergencies with real-time updates</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}