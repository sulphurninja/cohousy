'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Users, Heart, Smartphone, Home, Lock } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const benefits = [
  {
    icon: Shield,
    title: 'Exclusive Female-Only Environment',
    description: 'Our properties are designed exclusively for ladies, ensuring a secure and empowering space where you can thrive without any concerns.',
    highlight: 'Complete privacy & safety'
  },
  {
    icon: Lock,
    title: 'Advanced Security Measures',
    description: 'Biometric access, 24/7 CCTV surveillance, background-verified residents, and panic buttons for ultimate peace of mind.',
    highlight: 'Multi-layered protection'
  },
  {
    icon: Users,
    title: 'Supportive Community',
    description: 'Build lasting friendships with like-minded professional women. Regular events and wellness sessions help reduce isolation.',
    highlight: 'Empowering sisterhood'
  },
  {
    icon: Smartphone,
    title: 'Digital-First Experience',
    description: 'Manage everything through our app - from rent payments to service requests. Perfect for tech-savvy professional women.',
    highlight: 'Seamless technology integration'
  },
  {
    icon: Home,
    title: 'Private Single Rooms Available',
    description: 'Choose from shared or single room options with attached washrooms, balconies, and modern amenities for complete independence.',
    highlight: 'Personal space guarantee'
  },
  {
    icon: Heart,
    title: 'Wellness-Focused Living',
    description: 'On-site gym, healthy meal options, mental wellness support, and spaces designed for work-life balance.',
    highlight: 'Holistic well-being approach'
  }
]

export default function WhyChooseLadiesPG() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null)

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
              <Users size={16} className="inline mr-2 text-pink-600" />
              WHY CHOOSE COHOUSY
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Setting the Benchmark for
            <span className="text-pink-600"> Women's Safety</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto"
          >
            When it comes to selecting the best ladies PG in Kharadi Pune, Cohousy sets the benchmark 
            with its resident-centric approach. Unlike traditional PG hostels that often lack personalization, 
            we prioritize your comfort, safety, and well-being above all else.
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
                className="group bg-white border border-pink-100 rounded-2xl p-8 hover:border-pink-200 transition-all duration-500 hover:shadow-lg"
              >
                <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center transition-all duration-300 ${
                  hoveredBenefit === index ? 'bg-pink-600 text-white' : 'bg-pink-100 text-pink-600'
                }`}>
                  <IconComponent size={24} strokeWidth={1.5} />
                </div>

                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  hoveredBenefit === index ? 'text-pink-600' : 'text-black'
                }`}>
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {benefit.description}
                </p>

                <div className="text-sm font-semibold text-pink-600">
                  {benefit.highlight}
                </div>

                <div className={`mt-6 h-0.5 bg-pink-600 transition-all duration-500 ${
                  hoveredBenefit === index ? 'w-full' : 'w-0'
                }`} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white rounded-2xl border border-pink-200 shadow-sm p-8"
        >
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            Cohousy vs Traditional Ladies PG in Kharadi
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-green-600 mb-4 flex items-center">
                <span className="mr-2">✓</span> Cohousy Ladies PG
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• 100% female-only environment with verified residents</li>
                <li>• Advanced biometric security & panic buttons</li>
                <li>• Single rooms available with attached washrooms</li>
                <li>• Digital app for all services and payments</li>
                <li>• Regular community events & wellness programs</li>
                <li>• Flexible meal plans & dietary accommodations</li>
                <li>• Professional networking opportunities</li>
                <li>• Transparent pricing with no hidden charges</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-600 mb-4 flex items-center">
                <span className="mr-2">✗</span> Traditional PG Hostels
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Mixed accommodation with limited female-only areas</li>
                <li>• Basic security measures, often inadequate</li>
                <li>• Mostly shared rooms with common washrooms</li>
                <li>• Manual processes for complaints and payments</li>
                <li>• Limited social activities or community building</li>
                <li>• Fixed meal timings with no customization</li>
                <li>• Lack of professional networking opportunities</li>
                <li>• Hidden charges and unclear pricing structure</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Experience the Cohousy difference - where women's safety and comfort come first
            </p>
            <button className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Schedule Your Ladies-Only Tour
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}