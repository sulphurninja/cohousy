'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Building2, Clock, Users } from 'lucide-react'
import { staggerContainer, fadeInUp, splitLineReveal, withMotion } from '@/lib/motion'

const stats = [
  { value: '5 Min', label: 'Walk to Eon IT Park', icon: Clock },
  { value: '50+', label: 'Companies Nearby', icon: Building2 },
  { value: '1000+', label: 'IT Professionals', icon: Users },
  { value: '#1', label: 'Location in Kharadi', icon: MapPin }
]

export default function PGNearEonHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section 
      ref={containerRef}
      className="relative pt-36 pb-16 lg:pb-24 bg-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/skyline.avif"
          alt="PG accommodation near Eon IT Park Kharadi walking distance"
          fill
          className="object-cover opacity-5"
          priority
          sizes="100vw"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Section */}
          <motion.div
            variants={withMotion(staggerContainer)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.span
              variants={withMotion(fadeInUp)}
              className="inline-flex items-center gap-3 px-6 py-2 text-sm font-medium tracking-wider text-gray-700 bg-orange-50 border border-orange-100 rounded-full shadow-sm mb-6"
            >
              <MapPin size={16} className="text-orange-600" />
              WALKING DISTANCE TO WORK
            </motion.span>

            {/* Headline */}
            <div className="mb-6">
              <motion.h1 className="text-display-xl font-bold text-black leading-[0.9]">
                <div className="overflow-hidden">
                  <motion.span variants={withMotion(splitLineReveal)} className="block">
                    PG near
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span variants={withMotion(splitLineReveal)} className="block">
                    <span className="text-orange-600">Eon IT Park</span>
                  </motion.span>
                </div>
              </motion.h1>
            </div>

            {/* Subhead */}
            <motion.p
              variants={withMotion(fadeInUp)}
              className="text-2xl text-gray-600 font-light tracking-wide mb-8"
            >
              Convenient Location
            </motion.p>

            {/* Description */}
            <motion.div
              variants={withMotion(fadeInUp)}
              className="space-y-6"
            >
              <p className="text-xl leading-relaxed text-gray-700">
                With Kharadi's IT sector thriving—hosting dozens of leading companies at{' '}
                <span className="text-orange-600 font-semibold">Eon IT Park Kharadi</span>, including{' '}
                <span className="text-black font-medium">Infosys, TCS, Cognizant, Zensar, Credit Suisse, Barclays, and Honeywell</span>—the demand for convenient PG accommodations has skyrocketed.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                If you're searching for premium accommodation that prioritizes comfort, security, 
                and modern conveniences, Cohousy delivers exactly that. Our fully furnished single 
                and shared rooms offer hotel-like amenities, just minutes from Eon IT Park and WTC Kharadi.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={withMotion(fadeInUp)}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <button className="px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                Book Walking Distance PG
              </button>
              <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
                Virtual Property Tour
              </button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            style={{ y: imageY }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src="/skyline.avif"
              alt="PG accommodation walking distance from Eon IT Park Kharadi"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Floating Stats */}
            <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">5 Min</div>
                <div className="text-sm text-gray-600 font-medium">Walk to Work</div>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 bg-orange-600/95 backdrop-blur-sm text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm text-white/80 font-medium">Companies</div>
              </div>
            </div>

            {/* Location Badge */}
            <div className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-green-600/95 backdrop-blur-sm text-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <Building2 size={20} />
                <span className="font-semibold">Prime Location</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center p-6 bg-orange-50 rounded-xl border border-orange-100">
                <IconComponent size={32} className="text-orange-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-black mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}