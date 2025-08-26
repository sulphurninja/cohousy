'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Home, Heart, Coffee, Dumbbell, Wifi } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const blendFeatures = [
  {
    icon: Home,
    title: 'Private Rooms with Shared Spaces',
    description: 'Private rooms pair with shared gyms and balconies. Perfect balance between personal sanctuary and community engagement.',
    benefit: 'Best of both worlds'
  },
  {
    icon: Users,
    title: 'Foster Connections Without Compromise',
    description: 'This appeals to "co-living PG in Kharadi" searches. Build meaningful relationships while maintaining your personal space.',
    benefit: 'Selective social interaction'
  },
  {
    icon: Heart,
    title: 'Sustainability & Wellness Focus',
    description: 'Sustainability features like water purifiers promote wellness. Weekend activities enhance the overall living experience.',
    benefit: 'Holistic well-being approach'
  },
  {
    icon: Coffee,
    title: 'Community Events & Activities',
    description: 'App-managed community events create opportunities for networking and friendships among like-minded professionals.',
    benefit: 'Structured social opportunities'
  },
  {
    icon: Dumbbell,
    title: 'Shared Amenities Access',
    description: 'Access to gym, common areas, and recreational facilities while enjoying the privacy of your single room.',
    benefit: 'Premium amenities access'
  },
  {
    icon: Wifi,
    title: 'Professional Networking Hub',
    description: 'Ideal for professionals at Eon IT Park companies. Connect with industry peers living in the same community.',
    benefit: 'Career growth opportunities'
  }
]

export default function CoLivingBlend() {
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
              <Heart size={16} className="inline mr-2 text-purple-600" />
              CO-LIVING BLEND
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            How Cohousy Blends Co-Living with
            <span className="text-purple-600"> Single Room PG</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto"
          >
            Cohousy redefines single room PG in Kharadi Pune by infusing co-living elements. 
            Private rooms pair with shared gyms and balconies. This appeals to "co-living PG in Kharadi" 
            searches while fostering connections without sacrificing solitude.
          </motion.p>
        </motion.div>

        {/* Blend Features Grid */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {blendFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                variants={withMotion(fadeInUp)}
                className="group bg-white border border-purple-100 rounded-2xl p-8 hover:border-purple-200 transition-all duration-500 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl mb-6 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  <IconComponent size={24} className="text-purple-600 group-hover:text-white" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                <div className="text-sm font-semibold text-purple-600">
                  {feature.benefit}
                </div>

                <div className="mt-6 h-0.5 bg-purple-600 w-0 group-hover:w-full transition-all duration-500" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Comparison with Aggregators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white rounded-2xl border border-purple-200 shadow-sm p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            Cohousy vs Traditional Aggregators
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-green-600 mb-4 flex items-center">
                <span className="mr-2">✓</span> Cohousy Co-Living Blend
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Private rooms with community access</li>
                <li>• Personalized service and attention</li>
                <li>• App-managed events and networking</li>
                <li>• Sustainability and wellness focus</li>
                <li>• Professional community building</li>
                <li>• Flexible social interaction options</li>
                <li>• Quality-controlled living standards</li>
                <li>• Holistic lifestyle experience</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-600 mb-4 flex items-center">
                <span className="mr-2">✗</span> MagicBricks & Other Aggregators
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Generic listings without curation</li>
                <li>• No personal service or community</li>
                <li>• Limited social interaction opportunities</li>
                <li>• Basic facilities without wellness focus</li>
                <li>• Isolated living experiences</li>
                <li>• No structured networking opportunities</li>
                <li>• Variable quality standards</li>
                <li>• Transactional relationship only</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Outshine aggregators with personalized service ideal for professionals at Eon IT Park companies
            </p>
            <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Experience Co-Living Benefits
            </button>
          </div>
        </motion.div>

        {/* Lifestyle Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-white rounded-2xl border border-purple-100">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Home size={32} className="text-purple-600" />
            </div>
            <h4 className="text-xl font-bold text-black mb-3">Privacy When Needed</h4>
            <p className="text-gray-600">
              Your own private sanctuary for work, rest, and personal time without any compromises.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl border border-purple-100">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-purple-600" />
            </div>
            <h4 className="text-xl font-bold text-black mb-3">Community When Desired</h4>
            <p className="text-gray-600">
              Engage with like-minded professionals through shared spaces and organized activities.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl border border-purple-100">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Heart size={32} className="text-purple-600" />
            </div>
            <h4 className="text-xl font-bold text-black mb-3">Balanced Lifestyle</h4>
            <p className="text-gray-600">
              Perfect blend of independence and social connection for modern professional living.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}