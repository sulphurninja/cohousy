'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Users, Home, Camera, Clock, Heart } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const safetyFeatures = [
  {
    icon: Shield,
    title: '24/7 Security & CCTV',
    description: 'Dedicated sections with round-the-clock security and comprehensive CCTV coverage for complete peace of mind.',
    benefit: 'Enhanced personal safety'
  },
  {
    icon: Home,
    title: 'Attached Washrooms & AC',
    description: 'Private attached bathrooms and AC rooms for ultimate comfort and hygiene. No sharing, complete privacy.',
    benefit: 'Personal comfort priority'
  },
  {
    icon: Clock,
    title: 'Reduced Travel Risks',
    description: 'Proximity to Eon IT Park reduces travel risks, especially beneficial for night shifts and late working hours.',
    benefit: 'Safe commute solutions'
  },
  {
    icon: Users,
    title: 'Female Housekeeping Staff',
    description: 'We incorporate feedback from ladies PG searches. Female housekeeping staff enhance trust and well-being.',
    benefit: 'Gender-sensitive service'
  },
  {
    icon: Camera,
    title: 'Well-Lit Premises',
    description: 'All common areas and pathways are well-lit with motion sensors for safe movement at any hour.',
    benefit: 'Visibility and safety'
  },
  {
    icon: Heart,
    title: 'Women-Centric Amenities',
    description: 'Special facilities including women-only common areas, fitness timings, and wellness programs.',
    benefit: 'Holistic well-being focus'
  }
]

export default function FemaleProfessionalsBenefits() {
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
              FOR FEMALE PROFESSIONALS
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Benefits of Single Room PG for
            <span className="text-pink-600"> Female Professionals</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto"
          >
            Safety tops the list for women in Kharadi's dynamic environment. Our single room PG in 
            Kharadi Pune for female includes dedicated sections with 24/7 security and CCTV. 
            Female residents appreciate attached washrooms and AC rooms for comfort.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
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
                  className="flex items-start space-x-4 p-6 bg-pink-50 rounded-xl border border-pink-100 hover:border-pink-200 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 p-3 bg-pink-100 rounded-xl">
                    <IconComponent size={24} className="text-pink-600" strokeWidth={1.5} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-black mb-2">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-2">
                      {feature.description}
                    </p>

                    <div className="text-sm font-semibold text-pink-600">
                      {feature.benefit}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src="/single/Single Room PG Female.jpg"
              alt="Safe single room PG for female professionals in Kharadi"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Safety Badges */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Shield size={20} className="text-pink-600" />
                <span className="font-semibold text-black">24/7 Security</span>
              </div>
              <div className="text-sm text-gray-600">Female-focused safety</div>
            </div>

            <div className="absolute bottom-6 right-6 bg-pink-600/95 backdrop-blur-sm text-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Users size={20} />
                <span className="font-semibold">Women-Only Areas</span>
              </div>
              <div className="text-sm text-pink-100">Dedicated spaces</div>
            </div>

            <div className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-green-600/95 backdrop-blur-sm text-white p-3 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="font-bold">100%</div>
                <div className="text-xs">Safety Record</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center p-8 bg-pink-50 rounded-2xl border border-pink-100"
        >
          <h3 className="text-2xl font-bold text-black mb-4">
            Ready to Experience Secure Living?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Book a virtual tour today and secure your spot in our premium single room PG 
            designed specifically for women professionals in Kharadi's IT corridor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Book Virtual Tour for Women
            </button>
            <button className="px-8 py-3 border-2 border-pink-600 text-pink-600 font-semibold rounded-lg hover:bg-pink-600 hover:text-white transition-all duration-300">
              Speak with Female Residents
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}