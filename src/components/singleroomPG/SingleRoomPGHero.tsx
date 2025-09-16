'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Home, Users, Shield, Wifi } from 'lucide-react'
import { staggerContainer, fadeInUp, splitLineReveal, withMotion } from '@/lib/motion'
import ContactFormDialog from '../ContactFormDialog'

const stats = [
  { value: '100%', label: 'Private Rooms', icon: Home },
  { value: '₹18K', label: 'Starting Price', icon: Users },
  { value: '24/7', label: 'Security', icon: Shield },
  { value: 'AC+WiFi', label: 'Included', icon: Wifi }
]

export default function SingleRoomPGHero() {
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
          alt="Single room PG in Kharadi Pune private accommodation near Eon IT Park"
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
              className="inline-flex items-center gap-3 px-6 py-2 text-sm font-medium tracking-wider text-gray-700 bg-purple-50 border border-purple-100 rounded-full shadow-sm mb-6"
            >
              <Home size={16} className="text-purple-600" />
              PRIVATE SANCTUARY
            </motion.span>

            {/* Headline */}
            <div className="mb-6">
              <motion.h1 className="text-display-xl font-bold text-black leading-[0.9]">
                <div className="overflow-hidden">
                  <motion.span variants={withMotion(splitLineReveal)} className="block">
                    Single Room PG
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span variants={withMotion(splitLineReveal)} className="block">
                    in <span className="text-purple-600">Kharadi Pune</span>
                  </motion.span>
                </div>
              </motion.h1>
            </div>

            {/* Subhead */}
            <motion.p
              variants={withMotion(fadeInUp)}
              className="text-2xl text-gray-600 font-light tracking-wide mb-8"
            >
              Private Accommodation
            </motion.p>

            {/* Description */}
            <motion.div
              variants={withMotion(fadeInUp)}
              className="space-y-6"
            >
              <p className="text-xl leading-relaxed text-gray-700">
                Searching for a private sanctuary in Pune's thriving IT corridor? Cohousy's{' '}
                <span className="text-purple-600 font-semibold">single room PG in Kharadi Pune</span> offers{' '}
                <span className="text-black font-medium">unmatched privacy and luxury</span> for working professionals.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Strategically located near Eon IT Park and WTC Kharadi, our accommodations blend comfort
                with convenience. Ideal for those seeking single room accommodation for male or female
                professionals, we prioritize safety, modern amenities, and seamless living.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={withMotion(fadeInUp)}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <ContactFormDialog
                title="Schedule a Visit"
                description="Book a visit to see the property in person."
                serviceType="Schedule Visit"
                trigger={
                  <div className='flex justify-center'>
                    <button className="flex-1 bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 w-fit transition-colors text-sm">
                      Schedule Visit
                    </button>
                  </div>
                }
              />
              <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
                Virtual Room Tour
              </button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            style={{ y: imageY }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src="/single/Hero.jpg"
              alt="Luxury single room PG accommodation in Kharadi Pune"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Floating Stats */}
            <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-sm text-gray-600 font-medium">Private</div>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 bg-purple-600/95 backdrop-blur-sm text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">₹18K</div>
                <div className="text-sm text-white/80 font-medium">All Inclusive</div>
              </div>
            </div>

            {/* Privacy Badge */}
            {/* <div className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-green-600/95 backdrop-blur-sm text-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <Shield size={20} />
                <span className="font-semibold">Secure & Private</span>
              </div>
            </div> */}
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
              <div key={index} className="text-center p-6 bg-purple-50 rounded-xl border border-purple-100">
                <IconComponent size={32} className="text-purple-600 mx-auto mb-3" />
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
