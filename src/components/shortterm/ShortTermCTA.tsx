'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Calendar, Zap, Clock, Star, MapPin } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const quickStats = [
  { icon: Zap, value: '0', label: 'Lock-in Period' },
  { icon: Clock, value: '30 Min', label: 'Check-in Time' },
  { icon: Star, value: '4.9★', label: 'Guest Rating' }
]

export default function ShortTermCTA() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })

  return (
    <section 
      ref={containerRef}
      className="py-section bg-white relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/skyline.avif"
          alt="Book short-term rentals in Kharadi"
          fill
          className="object-cover opacity-5"
          sizes="100vw"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main CTA Section */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={withMotion(fadeInUp)}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-gray-50 border border-gray-100 rounded-full shadow-sm mb-6">
              <span className="w-2 h-2 bg-accent rounded-full inline-block mr-2 animate-pulse" />
              BOOK INSTANTLY - NO WAITING
            </span>
            
            <h2 className="text-display-lg font-bold text-black mb-6">
              Need Flexible Stay
              <span className="text-accent"> Right Now?</span>
            </h2>

            <p className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto mb-8">
              Don't let accommodation hunt slow you down. Book our flexible short-term rentals 
              in Kharadi and focus on what truly matters - your work, projects, and goals.
            </p>
          </motion.div>

          {/* Primary CTA Buttons */}
          <motion.div
            variants={withMotion(fadeInUp)}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <button className="group relative px-12 py-4 bg-accent text-black font-bold text-lg rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Calendar size={20} className="inline mr-3" />
              Check Availability Now
              <div className="absolute inset-0 bg-black/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="group relative px-12 py-4 border-3 border-gray-900 text-gray-900 font-bold text-lg rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105">
              <Phone size={20} className="inline mr-3" />
              Call for Same-day
            </button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={withMotion(fadeInUp)}
            className="flex flex-col sm:flex-row gap-8 justify-center mb-12"
          >
            {quickStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="flex items-center justify-center gap-3">
                  <IconComponent size={24} className="text-accent" />
                  <div>
                    <div className="font-bold text-black">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </motion.div>

          {/* Urgency Message */}
          <motion.div
            variants={withMotion(fadeInUp)}
            className="inline-block p-4 bg-orange-50 border border-orange-100 rounded-xl"
          >
            <p className="text-orange-700 font-semibold">
              ⚡ Same-day bookings available - Perfect for urgent accommodation needs!
            </p>
          </motion.div>
        </motion.div>

        {/* Booking Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {/* Instant Booking */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap size={32} className="text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-black mb-2">Instant Book</h3>
            <p className="text-sm text-gray-600 mb-4">Available rooms, immediate confirmation</p>
            <button className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300">
              Book Online
            </button>
          </div>

          {/* Call Option */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Phone size={32} className="text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-black mb-2">Call & Book</h3>
            <p className="text-sm text-gray-600 mb-4">24/7 support for urgent needs</p>
            <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300">
              Call Now
            </button>
          </div>

          {/* WhatsApp Option */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MapPin size={32} className="text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-black mb-2">WhatsApp</h3>
            <p className="text-sm text-gray-600 mb-4">Quick booking via message</p>
            <button className="w-full py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300">
              Message Us
            </button>
          </div>

          {/* Visit Option */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Calendar size={32} className="text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-black mb-2">Walk-in</h3>
            <p className="text-sm text-gray-600 mb-4">Direct visit, subject to availability</p>
            <button className="w-full py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-all duration-300">
              Get Directions
            </button>
          </div>
        </motion.div>

        {/* Flexibility Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-gray-50 rounded-2xl border border-gray-100 p-8"
        >
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            Why Choose Short-term with Cohousy?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '⚡', title: 'Zero Lock-in', subtitle: 'Book for days, weeks, months' },
              { icon: '💰', title: 'All-Inclusive', subtitle: 'No hidden charges ever' },
              { icon: '🏃', title: 'Same-day Ready', subtitle: 'Check-in within 30 minutes' },
              { icon: '🎯', title: 'Perfect Location', subtitle: '5 min walk to Eon IT Park' }
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white border border-gray-200 rounded-xl hover:border-accent hover:bg-accent/5 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{benefit.icon}</div>
                <div className="font-semibold text-black mb-1">
                  {benefit.title}
                </div>
                <div className="text-sm text-gray-600">
                  {benefit.subtitle}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Join thousands of professionals who chose flexibility over hassle
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <span>✓ 4.9★ Guest Rating</span>
              <span>✓ 24/7 Support</span>
              <span>✓ Instant Confirmation</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}