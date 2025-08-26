'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Eye, Lock, Users, AlertTriangle, Phone } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const safetyFeatures = [
  {
    icon: Eye,
    title: 'CCTV Coverage',
    description: 'Comprehensive surveillance across all premises with 24/7 monitoring and recording capabilities.',
    highlight: 'Complete premise coverage'
  },
  {
    icon: Shield,
    title: '24/7 Security Guards',
    description: 'Trained security personnel on-site round the clock for immediate response to any situation.',
    highlight: 'Round-the-clock protection'
  },
  {
    icon: Lock,
    title: 'Secure Access Systems',
    description: 'Biometric access controls and secure entry systems ensuring only authorized personnel can enter.',
    highlight: 'Biometric access control'
  },
  {
    icon: Users,
    title: 'Background Verification',
    description: 'Thorough tenant background verification during onboarding process for community safety.',
    highlight: 'Verified community members'
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Protocols',
    description: 'Well-defined emergency procedures with panic buttons linked to the app and local authorities.',
    highlight: 'Quick emergency response'
  },
  {
    icon: Phone,
    title: 'Local Authority Partnership',
    description: 'Regular coordination with local police and emergency services for enhanced security preparedness.',
    highlight: 'Authority partnerships'
  }
]

const safetyStats = [
  { value: '0', label: 'Security Incidents', period: 'This Year' },
  { value: '24/7', label: 'Security Coverage', period: 'Every Day' },
  { value: '100%', label: 'Verified Residents', period: 'Background Checked' },
  { value: '<30s', label: 'Emergency Response', period: 'Average Time' }
]

export default function SafetySecurity() {
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm">
              <Shield size={16} className="inline mr-2 text-accent" />
              SAFETY & SECURITY
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Peace of Mind
            <span className="text-accent"> Guaranteed</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            We understand safety is a top priority in co-living spaces. That's why Cohousy implements 
            advanced security measures with round-the-clock monitoring, ensuring complete peace of mind 
            for all residents.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          
          {/* Safety Features */}
          <motion.div
            variants={withMotion(staggerContainer)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {safetyFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={withMotion(fadeInUp)}
                  className="group flex items-start space-x-4 p-6 bg-white rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="flex-shrink-0 p-3 bg-accent/10 rounded-xl group-hover:bg-accent group-hover:text-black transition-all duration-300">
                    <IconComponent size={24} className="text-accent group-hover:text-black" strokeWidth={1.5} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-black mb-2">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-2">
                      {feature.description}
                    </p>

                    <div className="text-sm font-semibold text-accent">
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
              alt="Security and safety at Cohousy co-living spaces"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Security Badges */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Shield size={20} className="text-green-600" />
                <span className="font-semibold text-black">Secure</span>
              </div>
              <div className="text-sm text-gray-600">24/7 Monitoring Active</div>
            </div>

            <div className="absolute bottom-6 right-6 bg-green-600/95 backdrop-blur-sm text-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Eye size={20} />
                <span className="font-semibold">Live Monitoring</span>
              </div>
              <div className="text-sm text-white/80">All areas covered</div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
            <div key={index} className="text-center p-6 bg-white rounded-xl border border-gray-100">
              <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-black mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.period}</div>
            </div>
          ))}
        </motion.div>

        {/* Female Safety Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-black mb-4">
              Special Focus on Women's Safety
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              For female residents, our security features align with ladies PG standards, including 
              restricted visitor policies and emergency panic buttons linked to the app.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-pink-600" />
              </div>
              <h4 className="font-semibold text-black mb-2">Restricted Visitor Policy</h4>
              <p className="text-sm text-gray-600">Controlled access with proper verification</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <AlertTriangle size={32} className="text-red-600" />
              </div>
              <h4 className="font-semibold text-black mb-2">Emergency Panic Buttons</h4>
              <p className="text-sm text-gray-600">App-linked instant alert system</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-purple-600" />
              </div>
              <h4 className="font-semibold text-black mb-2">Safe Work Hours</h4>
              <p className="text-sm text-gray-600">Special support for night shift workers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}