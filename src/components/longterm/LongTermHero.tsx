'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Home, Calendar, Shield, Star } from 'lucide-react'
import { staggerContainer, fadeInUp, splitLineReveal, withMotion } from '@/lib/motion'

const stats = [
  { value: '6+', label: 'Months Average Stay', icon: Calendar },
  { value: '1BHK/1RK', label: 'Private Rooms', icon: Home },
  { value: '100%', label: 'Utilities Included', icon: Shield },
  { value: '4.8★', label: 'Resident Rating', icon: Star }
]

export default function LongTermHero() {
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
          alt="Long-term rentals in Kharadi Pune near Eon IT Park"
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
              className="inline-flex items-center gap-3 px-6 py-2 text-sm font-medium tracking-wider text-gray-700 bg-gray-50 border border-gray-100 rounded-full shadow-sm mb-6"
            >
              <Home size={16} className="text-accent" />
              EXTENDED STAY SOLUTIONS
            </motion.span>

            {/* Headline */}
            <div className="mb-6">
              <motion.h1 className="text-display-xl font-bold text-black leading-[0.9]">
                <div className="overflow-hidden">
                  <motion.span variants={withMotion(splitLineReveal)} className="block">
                    Long-Term Rentals
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span variants={withMotion(splitLineReveal)} className="block">
                    in <span className="text-accent">Kharadi</span>
                  </motion.span>
                </div>
              </motion.h1>
            </div>

            {/* Subhead */}
            <motion.p
              variants={withMotion(fadeInUp)}
              className="text-2xl text-gray-600 font-light tracking-wide mb-8"
            >
              Your Private Space with All Comforts Included
            </motion.p>

            {/* Description */}
            <motion.div
              variants={withMotion(fadeInUp)}
              className="space-y-6"
            >
              <p className="text-xl leading-relaxed text-gray-700">
                Choose our premium{' '}
                <span className="text-accent font-semibold">1RK or 1BHK accommodations</span>{' '}
                for extended stays in Kharadi. Perfect for IT professionals seeking stability 
                with the flexibility of modern living near{' '}
                <span className="text-black font-medium">Eon IT Park and WTC</span>.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                All utilities, premium amenities, and community access included—no hidden costs, 
                no security deposits hassles. Just move in and focus on what matters most.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={withMotion(fadeInUp)}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <button className="px-8 py-4 bg-accent text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                View Available Rooms
              </button>
              <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
                Schedule Visit
              </button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            style={{ y: imageY }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src="/long/Hero.jpg"
              alt="Premium long-term rental rooms at Cohousy Kharadi"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Floating Stats */}
            <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">6+</div>
                <div className="text-sm text-gray-600 font-medium">Months Avg Stay</div>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 bg-gray-900/95 backdrop-blur-sm text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm text-white/80 font-medium">Utilities Included</div>
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
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100">
                <IconComponent size={32} className="text-accent mx-auto mb-3" />
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