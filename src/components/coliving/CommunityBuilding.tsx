'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Calendar, Coffee, Dumbbell, BookOpen, Music, Camera, Heart } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const communityFeatures = [
  {
    icon: Calendar,
    title: 'Wellness Sessions',
    description: 'Join yoga classes in the common gym or meditation sessions to maintain work-life balance.',
    image: '/a.jpg'
  },
  {
    icon: Coffee,
    title: 'Weekend Workshops',
    description: 'Professional development and skill-sharing sessions with fellow residents.',
    image: '/b.jpg'
  },
  {
    icon: Dumbbell,
    title: 'Badminton Tournaments',
    description: 'Regular sports tournaments encouraging teamwork among peers from IT companies.',
    image: '/c.jpg'
  },
  {
    icon: Music,
    title: 'Social Gatherings',
    description: 'Evening meetups and cultural events to foster connections and combat urban isolation.',
    image: '/d.jpg'
  }
]

export default function CommunityBuilding() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-gray-50 border border-gray-100 rounded-full shadow-sm">
              <Heart size={16} className="inline mr-2 text-accent" />
              BUILDING COMMUNITY
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            More Than
            <span className="text-accent"> Roommates</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            One of the standout aspects of Cohousy's co-living spaces in Kharadi is our focus on 
            building a supportive community. In a fast-paced area like Kharadi, where professionals 
            often feel disconnected, we foster meaningful connections through curated activities.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          
          {/* Community Features */}
          <motion.div
            variants={withMotion(staggerContainer)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {communityFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={withMotion(fadeInUp)}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className="group flex items-start space-x-6 cursor-pointer p-6 rounded-xl hover:bg-gray-50 transition-all duration-300"
                >
                  <div className={`flex-shrink-0 p-3 rounded-xl transition-all duration-300 ${
                    hoveredFeature === index 
                      ? 'bg-accent text-black shadow-lg' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    <IconComponent size={24} strokeWidth={1.5} />
                  </div>

                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                      hoveredFeature === index ? 'text-accent' : 'text-black'
                    }`}>
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Community Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {communityFeatures.map((feature, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={feature.image}
                  alt={`${feature.title} at Cohousy community`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-semibold">{feature.title}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Community Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-gray-50 rounded-2xl border border-gray-100 p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Professional Network</h3>
              <p className="text-gray-600">Connect with like-minded professionals from top IT companies in Kharadi</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Skill Development</h3>
              <p className="text-gray-600">Learn new skills through workshops and knowledge sharing sessions</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Camera size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Memorable Experiences</h3>
              <p className="text-gray-600">Create lasting memories through organized events and celebrations</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}