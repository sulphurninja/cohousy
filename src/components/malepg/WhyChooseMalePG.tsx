'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, MapPin, Home, Wifi, Shield, Coffee } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const benefits = [
  {
    icon: MapPin,
    title: 'Strategic Location Benefits',
    description: 'Walking distance to Eon IT Park and WTC Kharadi. Reduce commute time and transport costs while living at the heart of Pune\'s IT hub.',
    highlight: 'Save time & money on commute'
  },
  {
    icon: Home,
    title: 'Flexible Room Options',
    description: 'Choose from single room PG or shared setups based on your privacy needs and budget. All rooms come with modern amenities and comfort.',
    highlight: 'Privacy when you want it'
  },
  {
    icon: Users,
    title: 'Professional Community',
    description: 'Connect with like-minded male professionals from top IT companies. Build networks that boost your career growth in Kharadi\'s ecosystem.',
    highlight: 'Career networking opportunities'
  },
  {
    icon: Shield,
    title: 'Safety & Security',
    description: '24/7 security, CCTV surveillance, and secure environment designed specifically for working professionals and IT employees.',
    highlight: 'Complete peace of mind'
  },
  {
    icon: Wifi,
    title: 'Modern Amenities',
    description: 'High-speed Wi-Fi, gym access, housekeeping, laundry services, and all essentials covered. Focus on your career, we handle the rest.',
    highlight: 'Hassle-free living experience'
  },
  {
    icon: Coffee,
    title: 'Community & Lifestyle',
    description: 'Shared spaces for socializing, gaming areas, and common lounges that foster friendships and work-life balance for male residents.',
    highlight: 'Brotherhood & support system'
  }
]

export default function WhyChooseMalePG() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null)

  return (
    <section 
      ref={containerRef}
      className="py-section bg-blue-50 relative overflow-hidden"
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-white border border-blue-200 rounded-full shadow-sm">
              <Users size={16} className="inline mr-2 text-blue-600" />
              WHY CHOOSE COHOUSY
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Why Choose Male PG in Kharadi Pune
            <span className="text-blue-600"> for Professionals</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto"
          >
            Kharadi has emerged as Pune's premier IT hub, home to major companies like Barclays, Credit Suisse, 
            and Honeywell at Eon IT Park Kharadi. For male professionals relocating here, finding the right 
            accommodation can make all the difference in work-life balance.
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
                className="group bg-white border border-blue-100 rounded-2xl p-8 hover:border-blue-200 transition-all duration-500 hover:shadow-lg"
              >
                <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center transition-all duration-300 ${
                  hoveredBenefit === index ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
                }`}>
                  <IconComponent size={24} strokeWidth={1.5} />
                </div>

                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  hoveredBenefit === index ? 'text-blue-600' : 'text-black'
                }`}>
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {benefit.description}
                </p>

                <div className="text-sm font-semibold text-blue-600">
                  {benefit.highlight}
                </div>

                <div className={`mt-6 h-0.5 bg-blue-600 transition-all duration-500 ${
                  hoveredBenefit === index ? 'w-full' : 'w-0'
                }`} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Location Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white rounded-2xl border border-blue-200 shadow-sm p-8"
        >
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            Perfect Location for IT Professionals
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-green-600 mb-4 flex items-center">
                <span className="mr-2">🏢</span> Major Companies Nearby
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Eon IT Park - Barclays, Credit Suisse, Eaton</li>
                <li>• WTC Kharadi - UBS, Allstate, TCS</li>
                <li>• Gera Commerzone - Honeywell, Vodafone</li>
                <li>• Numerous startups and MNCs in vicinity</li>
                <li>• Easy access to Phoenix Marketcity</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-4 flex items-center">
                <span className="mr-2">🚀</span> Professional Advantages
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 5-minute walk to major IT offices</li>
                <li>• Networking with 500+ IT professionals</li>
                <li>• Reduced transport costs and time</li>
                <li>• Access to career growth opportunities</li>
                <li>• Work-life balance in vibrant tech ecosystem</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Join professionals who chose convenience and community over compromise
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Explore Our Male PG Options
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}