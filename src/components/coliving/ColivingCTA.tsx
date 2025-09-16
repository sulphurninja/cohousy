'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Download, MapPin, Clock, Star } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const quickStats = [
  { icon: MapPin, value: '5 min', label: 'Walk to Eon IT Park' },
  { icon: Clock, value: '24/7', label: 'Support & Security' },
  { icon: Star, value: '4.9★', label: 'Resident Rating' }
]

export default function ColivingCTA() {
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
          alt="Book your co-living space in Kharadi"
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
              LIMITED SPOTS AVAILABLE
            </span>

            <h2 className="text-display-lg font-bold text-black mb-6">
              Book Your Co-living Space
              <span className="text-accent"> Today</span>
            </h2>

            <p className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto mb-8">
              Experience modern living, prime location, and a thriving community with Cohousy—limited
              spots available near Eon IT Park Kharadi! Don't wait; secure your room and embrace
              the future of shared living in Kharadi Pune.
            </p>
          </motion.div>

          {/* Primary CTA Buttons */}
          <motion.div
            variants={withMotion(fadeInUp)}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <button className="group relative px-12 py-4 bg-accent text-black font-bold text-lg rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Phone size={20} className="inline mr-3" />
              Call Now to Book
              <div className="absolute inset-0 bg-black/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button className="group relative px-12 py-4 border-3 border-gray-900 text-gray-900 font-bold text-lg rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105">
              <Download size={20} className="inline mr-3" />
              Download Cohousy App
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
            className="inline-block p-4 bg-red-50 border border-red-100 rounded-xl"
          >
            <p className="text-red-700 font-semibold">
              ⚡ Special Offer: Save on your first month - Limited time only!
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {/* Call Option */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Phone size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Call Us Now</h3>
            <p className="text-gray-600 mb-4">Speak directly with our property experts</p>
            <button className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300">
              Call +91 8908903900
            </button>
          </div>

          {/* App Option */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Download size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Book via App</h3>
            <p className="text-gray-600 mb-4">100% digital booking process</p>
            <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300">
              Download Cohousy App
            </button>
          </div>
        </motion.div>

        {/* Related Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-gray-50 rounded-2xl border border-gray-100 p-8"
        >
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            Also Check Out
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Ladies PG in Kharadi', subtitle: 'Safe Accommodation for Women' },
              { title: 'PG near Eon IT Park', subtitle: 'Walking Distance Accommodation' },
              { title: 'Single Room PG', subtitle: 'Private Accommodation' },
              { title: 'Male PG in Kharadi', subtitle: 'Comfortable Boys Accommodation' }
            ].map((link, index) => (
              <button
                key={index}
                className="text-left p-4 bg-white border border-gray-200 rounded-xl hover:border-accent hover:bg-accent/5 transition-all duration-300 group"
              >
                <div className="font-semibold text-black group-hover:text-accent transition-colors duration-300">
                  {link.title}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {link.subtitle}
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
