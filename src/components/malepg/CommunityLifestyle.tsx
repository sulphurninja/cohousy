'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Coffee, Dumbbell, Gamepad2, Wifi, Heart } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const communityFeatures = [
  {
    icon: Users,
    title: 'Professional Networking',
    description: 'Connect with like-minded professionals from Eon IT Park Kharadi and WTC. Build lasting friendships and career connections.',
    benefit: 'Career growth opportunities'
  },
  {
    icon: Coffee,
    title: 'Shared Spaces & Bonding',
    description: 'Common lounges, TV areas, and balconies designed for casual interactions and meaningful conversations with fellow residents.',
    benefit: 'Brotherhood & support system'
  },
  {
    icon: Dumbbell,
    title: 'Weekend Fitness Sessions',
    description: 'Enjoy weekend badminton sessions, gym workouts together, and fitness challenges that build team spirit.',
    benefit: 'Health & wellness focus'
  },
  {
    icon: Gamepad2,
    title: 'Gaming & Entertainment',
    description: 'Gaming tournaments, movie nights, and entertainment sessions in common areas for stress relief after work.',
    benefit: 'Work-life balance'
  },
  {
    icon: Wifi,
    title: 'Study & Work Groups',
    description: 'Collaborative spaces for skill development, certification prep, and knowledge sharing among IT professionals.',
    benefit: 'Continuous learning environment'
  },
  {
    icon: Heart,
    title: 'Mental Health & Wellness',
    description: 'Supportive environment with wellness initiatives, helping residents cope with work stress and city life challenges.',
    benefit: 'Holistic well-being approach'
  }
]

export default function CommunityLifestyle() {
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
              <Users size={16} className="inline mr-2 text-blue-600" />
              COMMUNITY & LIFESTYLE
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Community and Lifestyle in
            <span className="text-blue-600"> Cohousy's Boys PG</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto"
          >
            Living in a co-living PG in Kharadi at Cohousy means more than just a room—it's about 
            building connections. Our male PG encourages community through shared spaces and events, 
            helping you network with like-minded professionals from Eon IT Park Kharadi.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          
          {/* Community Features */}
          <motion.div
            variants={withMotion(staggerContainer)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {communityFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={withMotion(fadeInUp)}
                  className="group flex items-start space-x-4 p-6 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="flex-shrink-0 p-3 bg-blue-100 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <IconComponent size={24} className="text-blue-600 group-hover:text-white" strokeWidth={1.5} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-black mb-2">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-2">
                      {feature.description}
                    </p>

                    <div className="text-sm font-semibold text-blue-600">
                      {feature.benefit}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Community Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src="/skyline.avif"
              alt="Community lifestyle at male PG in Kharadi for boys"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Community Badges */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Users size={20} className="text-blue-600" />
                <span className="font-semibold text-black">500+ Professionals</span>
              </div>
              <div className="text-sm text-gray-600">IT & Corporate Network</div>
            </div>

            <div className="absolute bottom-6 right-6 bg-blue-600/95 backdrop-blur-sm text-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Coffee size={20} />
                <span className="font-semibold">Active Community</span>
              </div>
              <div className="text-sm text-white/80">Daily networking events</div>
            </div>

            <div className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-green-600/95 backdrop-blur-sm text-white p-3 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="font-bold">95%</div>
                <div className="text-xs">Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lifestyle Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-blue-50 rounded-2xl border border-blue-200 p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Real Community Experiences
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Residents often share tips on local spots, from street food near WTC Kharadi to trekking at nearby hills. 
              This community-driven approach makes Cohousy the preferred male PG for those who value both independence and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏏', title: 'Weekend Sports', subtitle: 'Badminton tournaments & cricket matches' },
              { icon: '🍕', title: 'Food Adventures', subtitle: 'Group outings to local favorites' },
              { icon: '🚗', title: 'Travel Groups', subtitle: 'Weekend trips to nearby hill stations' },
              { icon: '💼', title: 'Career Support', subtitle: 'Interview prep & skill sharing sessions' }
            ].map((activity, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white border border-blue-200 rounded-xl hover:border-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{activity.icon}</div>
                <div className="font-semibold text-black mb-1">
                  {activity.title}
                </div>
                <div className="text-sm text-gray-600">
                  {activity.subtitle}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Unlike couple PG or mixed accommodations, our exclusive boys PG ensures a focused, brotherly atmosphere
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Join Our Community Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}