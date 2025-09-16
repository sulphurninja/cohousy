'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Calendar, Home, Clock, Star, MapPin } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const quickStats = [
  { icon: Home, value: '3-12+', label: 'Months Flexible' },
  { icon: Clock, value: '₹3K+', label: 'Monthly Savings' },
  { icon: Star, value: '4.9★', label: 'Long-term Rating' }
]

export default function LongTermCTA() {
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
          alt="Book long-term rentals in Kharadi"
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
              SECURE YOUR LONG-TERM HOME
            </span>

            <h2 className="text-display-lg font-bold text-black mb-6">
              Ready for Extended Stay
              <span className="text-accent"> Comfort?</span>
            </h2>

            <p className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto mb-8">
              Join professionals who've chosen stability and savings with our long-term rentals.
              Secure your private space in Kharadi's premier IT hub with exclusive extended stay benefits.
            </p>
          </motion.div>

          {/* Primary CTA Buttons */}
          <motion.div
            variants={withMotion(fadeInUp)}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <button className="group relative px-12 py-4 bg-accent text-black font-bold text-lg rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Calendar size={20} className="inline mr-3" />
              Book Long-term Stay
              <div className="absolute inset-0 bg-black/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button className="group relative px-12 py-4 border-3 border-gray-900 text-gray-900 font-bold text-lg rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105">
              <Phone size={20} className="inline mr-3" />
              Talk to Specialist
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

          {/* Special Offer */}
          <motion.div
            variants={withMotion(fadeInUp)}
            className="inline-block p-4 bg-green-50 border border-green-100 rounded-xl"
          >
            <p className="text-green-700 font-semibold">
              🎉 Limited Time: No security deposit for 6+ month bookings!
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {/* Call Option */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Phone size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Call Now</h3>
            <p className="text-gray-600 mb-4">Speak with long-term rental experts</p>
            <button className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300">
              Call +91 8908903900
            </button>
          </div>

          {/* Visit Option */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MapPin size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Property Tour</h3>
            <p className="text-gray-600 mb-4">See your future home in person</p>
            <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300">
              Schedule Visit
            </button>
          </div>

          {/* Online Option */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Home size={32} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Virtual Tour</h3>
            <p className="text-gray-600 mb-4">Explore rooms from anywhere</p>
            <button className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300">
              Start Virtual Tour
            </button>
          </div>
        </motion.div>

        {/* Benefits Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-gray-50 rounded-2xl border border-gray-100 p-8"
        >
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            Why Choose Long-term with Cohousy?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Significant Savings', subtitle: '₹3,000+ monthly discount' },
              { title: 'No Security Deposit', subtitle: 'For 6+ month stays' },
              { title: 'Priority Support', subtitle: 'Dedicated relationship manager' },
              { title: 'Flexible Terms', subtitle: 'Easy extensions & transfers' }
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white border border-gray-200 rounded-xl hover:border-accent hover:bg-accent/5 transition-all duration-300"
              >
                <div className="font-semibold text-black mb-1">
                  {benefit.title}
                </div>
                <div className="text-sm text-gray-600">
                  {benefit.subtitle}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
