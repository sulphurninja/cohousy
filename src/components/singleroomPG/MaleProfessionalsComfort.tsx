'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Wifi, Zap, Coffee, Dumbbell, Briefcase } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const comfortFeatures = [
  {
    icon: Users,
    title: 'Hassle-Free Living',
    description: 'Tailored amenities support busy schedules near WTC Kharadi. Everything designed for professional convenience and comfort.',
    benefit: 'Streamlined daily routine'
  },
  {
    icon: Zap,
    title: 'Power Backup & Connectivity',
    description: 'From power backup to high-speed WiFi, everything aids productivity. Never miss important calls or deadlines.',
    benefit: 'Uninterrupted work flow'
  },
  {
    icon: Coffee,
    title: 'Personal Space Without Distractions',
    description: 'Single occupancy ensures personal space without distractions. Perfect environment for focus and relaxation.',
    benefit: 'Enhanced productivity zone'
  },
  {
    icon: Dumbbell,
    title: 'Fitness & Recreation',
    description: 'Access to gym facilities and recreational areas. Maintain work-life balance with on-site fitness options.',
    benefit: 'Holistic lifestyle support'
  },
  {
    icon: Briefcase,
    title: 'Professional Networking',
    description: 'Our properties near Eon IT Park offer male-specific networking opportunities in Pune\'s IT scene.',
    benefit: 'Career growth connections'
  },
  {
    icon: Wifi,
    title: 'Tech-Enabled Living',
    description: 'High-speed internet, digital services, and app-managed amenities perfect for IT professionals.',
    benefit: 'Modern digital lifestyle'
  }
]

export default function MaleProfessionalsComfort() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })

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
              FOR MALE PROFESSIONALS
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Single Room PG for Male:
            <span className="text-blue-600"> Comfort and Convenience</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto"
          >
            Men seeking hassle-free stays find our single room PG in Kharadi Pune for male ideal. 
            Tailored amenities support busy schedules near WTC Kharadi. This setup promotes focus 
            and networking in Pune's IT scene.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src="/skyline.avif"
              alt="Comfortable single room PG for male professionals in Kharadi"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Comfort Badges */}
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Briefcase size={20} className="text-blue-600" />
                <span className="font-semibold text-black">Professional Focus</span>
              </div>
              <div className="text-sm text-gray-600">Career-oriented living</div>
            </div>

            <div className="absolute bottom-6 left-6 bg-blue-600/95 backdrop-blur-sm text-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Wifi size={20} />
                <span className="font-semibold">High-Speed WiFi</span>
              </div>
              <div className="text-sm text-blue-100">Always connected</div>
            </div>

            <div className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-green-600/95 backdrop-blur-sm text-white p-3 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="font-bold">24/7</div>
                <div className="text-xs">Power Backup</div>
              </div>
            </div>
          </motion.div>

          {/* Comfort Features */}
          <motion.div
            variants={withMotion(staggerContainer)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {comfortFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={withMotion(fadeInUp)}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-blue-100 hover:border-blue-200 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 p-3 bg-blue-100 rounded-xl">
                    <IconComponent size={24} className="text-blue-600" strokeWidth={1.5} />
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
        </div>

        {/* Professional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 bg-white rounded-2xl border border-blue-200 p-8"
        >
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            Why IT Professionals Choose Single Rooms
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-blue-600" />
              </div>
              <h4 className="font-semibold text-black mb-2">Professional Environment</h4>
              <p className="text-sm text-gray-600">Like-minded IT professionals fostering career growth</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap size={32} className="text-blue-600" />
              </div>
              <h4 className="font-semibold text-black mb-2">Productivity Focused</h4>
              <p className="text-sm text-gray-600">Quiet spaces for work calls and project focus</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Coffee size={32} className="text-blue-600" />
              </div>
              <h4 className="font-semibold text-black mb-2">Work-Life Balance</h4>
              <p className="text-sm text-gray-600">Recreation facilities and networking opportunities</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Interested in upgrading your stay? Contact us via WhatsApp for quick details on availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                WhatsApp for Male PG Details
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                Schedule Visit
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}