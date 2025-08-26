'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Calendar, MapPin, Download, Star, Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const quickStats = [
  { icon: Home, value: '100%', label: 'Private Rooms' },
  { icon: Star, value: '₹18K', label: 'All-Inclusive' },
  { icon: MapPin, value: '5 Min', label: 'Walk to Work' }
]

const relatedPages = [
  {
    title: 'PG near Eon IT Park',
    subtitle: 'Walking Distance Accommodation',
    href: '/pg-near-eon-it-park',
    color: 'orange'
  },
  {
    title: 'Ladies PG in Kharadi',
    subtitle: 'Safe Women Accommodation',
    href: '/ladies-pg-kharadi',
    color: 'pink'
  },
  {
    title: 'Male PG in Kharadi',
    subtitle: 'Boys Professional Living',
    href: '/male-pg-kharadi',
    color: 'blue'
  }
]

export default function BookLuxuryCTA() {
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
          alt="Book luxury single room PG in Kharadi Pune private accommodation"
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-purple-50 border border-purple-100 rounded-full shadow-sm mb-6">
              <span className="w-2 h-2 bg-purple-600 rounded-full inline-block mr-2 animate-pulse" />
              BOOK YOUR LUXURY SINGLE ROOM TODAY
            </span>
            
            <h2 className="text-display-lg font-bold text-black mb-6">
              Book Your Luxury Single Room PG
              <span className="text-purple-600"> in Kharadi Pune Now</span>
            </h2>

            <p className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto mb-8">
              Don't settle for less in Kharadi's competitive market. Cohousy's single room PG in Kharadi Pune 
              delivers privacy, amenities, and location perks near Eon IT Park. Limited availability—act fast! 
              Experience the ultimate in AC PG in Kharadi Pune.
            </p>
          </motion.div>

          {/* Primary CTA Buttons */}
          <motion.div
            variants={withMotion(fadeInUp)}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <button className="group relative px-12 py-4 bg-purple-600 text-white font-bold text-lg rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Calendar size={20} className="inline mr-3" />
              Book Luxury Single Room Now
              <div className="absolute inset-0 bg-black/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="group relative px-12 py-4 border-3 border-purple-600 text-purple-600 font-bold text-lg rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105">
              <Phone size={20} className="inline mr-3" />
              Call for Private Room Tour
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
                  <IconComponent size={24} className="text-purple-600" />
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
              🏠 Privacy Special: First month 20% off for single room bookings in Kharadi!
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {/* WhatsApp Option */}
          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-lg font-bold text-black mb-2">WhatsApp Quote</h3>
            <p className="text-sm text-gray-600 mb-4">Get personalized pricing</p>
            <button className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300">
              WhatsApp Now
            </button>
          </div>

          {/* App Download Option */}
          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Download size={32} className="text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-black mb-2">Download App</h3>
            <p className="text-sm text-gray-600 mb-4">Digital check-in & manage</p>
            <button className="w-full py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300">
              Get Cohousy App
            </button>
          </div>

          {/* Virtual Tour Option */}
          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏠</span>
            </div>
            <h3 className="text-lg font-bold text-black mb-2">Virtual Tour</h3>
            <p className="text-sm text-gray-600 mb-4">See single rooms online</p>
            <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300">
              Start Room Tour
            </button>
          </div>

          {/* Call Option */}
          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Phone size={32} className="text-red-600" />
            </div>
            <h3 className="text-lg font-bold text-black mb-2">Call & Book</h3>
            <p className="text-sm text-gray-600 mb-4">Instant booking support</p>
         <button className="w-full py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300">
              📞 Call Now
            </button>
          </div>
        </motion.div>

        {/* Related Pages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-black mb-8 text-center">
            Also Explore Our Other Accommodation Options
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPages.map((page, index) => (
              <Link
                key={index}
                href={page.href}
                className={`block p-6 bg-${page.color}-50 border border-${page.color}-100 rounded-xl hover:border-${page.color}-200 transition-all duration-300 hover:shadow-sm`}
              >
                <h4 className={`text-lg font-bold text-${page.color}-600 mb-2`}>
                  {page.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {page.subtitle}
                </p>
                <div className={`text-${page.color}-600 text-sm font-semibold`}>
                  Explore Options →
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-center p-8 bg-purple-50 rounded-2xl border border-purple-200"
        >
          <h3 className="text-2xl font-bold text-black mb-4">
            Elevate Your Professional Life in Pune
          </h3>
          <p className="text-gray-600 mb-6">
            Experience the ultimate in AC PG in Kharadi Pune. Book today and enjoy luxury single room 
            living with complete privacy, premium amenities, and unmatched convenience near Eon IT Park!
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-6">
            <span>✓ 100% Private Room</span>
            <span>✓ AC + WiFi Included</span>
            <span>✓ Zero Hidden Charges</span>
            <span>✓ Digital Experience</span>
          </div>
          <button className="px-12 py-4 bg-purple-600 text-white font-bold text-lg rounded-lg hover:shadow-xl transition-all duration-300">
            🏠 Book Luxury Single Room - 20% Off First Month!
          </button>
        </motion.div>
      </div>
    </section>
  )
}