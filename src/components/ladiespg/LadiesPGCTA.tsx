'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Calendar, Shield, MapPin, Star, Users } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const quickStats = [
  { icon: Shield, value: '100%', label: 'Female Only' },
  { icon: Star, value: '4.9★', label: 'Safety Rating' },
  { icon: Users, value: '250+', label: 'Happy Women' }
]

export default function LadiesPGCTA() {
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
          alt="Book safe ladies PG in Kharadi Pune"
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-pink-50 border border-pink-100 rounded-full shadow-sm mb-6">
              <span className="w-2 h-2 bg-pink-600 rounded-full inline-block mr-2 animate-pulse" />
              SECURE YOUR SAFE HAVEN TODAY
            </span>
            
            <h2 className="text-display-lg font-bold text-black mb-6">
              Ready to Experience Safe
              <span className="text-pink-600"> Women-Only Living?</span>
            </h2>

            <p className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto mb-8">
              Ready to elevate your living experience? Book a tour of our ladies PG in Kharadi Pune today 
              and discover why we're the best choice for female accommodation in Kharadi Pune. With limited 
              spots available near Eon IT Park for professional women, don't miss out – secure your safe haven now!
            </p>
          </motion.div>

          {/* Primary CTA Buttons */}
          <motion.div
            variants={withMotion(fadeInUp)}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <button className="group relative px-12 py-4 bg-pink-600 text-white font-bold text-lg rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Calendar size={20} className="inline mr-3" />
              Book Safe Accommodation Now
              <div className="absolute inset-0 bg-black/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="group relative px-12 py-4 border-3 border-pink-600 text-pink-600 font-bold text-lg rounded-lg hover:bg-pink-600 hover:text-white transition-all duration-300 transform hover:scale-105">
              <Phone size={20} className="inline mr-3" />
              Call for Women-Only Tour
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
                  <IconComponent size={24} className="text-pink-600" />
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
              🌸 Special for Women: Free safety orientation & welcome kit for first 50 bookings!
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
          {/* Call Option */}
          <div className="bg-pink-50 border border-pink-100 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Phone size={32} className="text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-black mb-2">Call Female Counselor</h3>
            <p className="text-sm text-gray-600 mb-4">Speak with women-focused support team</p>
            <button className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300">
              Call Now
            </button>
          </div>

          {/* WhatsApp Option */}
          <div className="bg-pink-50 border border-pink-100 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-lg font-bold text-black mb-2">WhatsApp</h3>
            <p className="text-sm text-gray-600 mb-4">Chat with female property manager</p>
            <button className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300">
              Message Us
            </button>
          </div>

          {/* Visit Option */}
          <div className="bg-pink-50 border border-pink-100 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MapPin size={32} className="text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-black mb-2">Ladies-Only Tour</h3>
            <p className="text-sm text-gray-600 mb-4">Experience women-safe environment</p>
            <button className="w-full py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300">
              Schedule Tour
            </button>
          </div>

          {/* Virtual Tour Option */}
          <div className="bg-pink-50 border border-pink-100 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏠</span>
            </div>
            <h3 className="text-lg font-bold text-black mb-2">Virtual Tour</h3>
            <p className="text-sm text-gray-600 mb-4">Explore rooms online safely</p>
            <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300">
              Start Tour
            </button>
          </div>
        </motion.div>

        {/* Safety Assurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-pink-50 rounded-2xl border border-pink-200 p-8"
        >
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            Join the Community of Empowered Women
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🛡️', title: 'Guaranteed Safety', subtitle: '24/7 female security & monitoring' },
              { icon: '👩‍💼', title: 'Professional Network', subtitle: 'Connect with 250+ women professionals' },
              { icon: '🏠', title: 'Home-like Comfort', subtitle: 'Privacy with community support' },
              { icon: '📱', title: 'Smart Features', subtitle: 'Women-centric app with safety tools' }
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white border border-pink-200 rounded-xl hover:border-pink-600 hover:bg-pink-50 transition-all duration-300"
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
              Join thousands of professional women who made Kharadi their thriving home
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <span>✓ Zero Security Incidents</span>
              <span>✓ 100% Women-Only</span>
              <span>✓ Family Approved</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}