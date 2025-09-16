'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Download, MapPin, Users, Home, Shield, Building2 } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'
import ContactFormDialog from './ContactFormDialog'

const ctaLinks = [
  {
    title: 'Ladies PG in Kharadi',
    subtitle: 'Safe accommodation for women professionals',
    icon: Shield,
    href: '/ladies-pg'
  },
  {
    title: 'Male PG in Kharadi',
    subtitle: 'Comfortable accommodation for men',
    icon: Users,
    href: '/male-pg'
  },
  {
    title: 'Single Room PG',
    subtitle: 'Private spaces for ultimate comfort',
    icon: Home,
    href: '/single-rooms'
  },
  {
    title: 'Co-living Spaces',
    subtitle: 'Modern shared living experience',
    icon: Building2,
    href: '/co-living'
  },
  {
    title: 'Near Eon IT Park',
    subtitle: 'Walking distance to your workplace',
    icon: MapPin,
    href: '/eon-it-park'
  }
]

const stats = [
  { value: '500+', label: 'Happy Residents' },
  { value: '4.8★', label: 'Average Rating' },
  { value: '24/7', label: 'Support Available' },
  { value: '0%', label: 'Brokerage Fee' }
]

export default function FinalCTASection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const headerY = useTransform(scrollYProgress, [0, 0.3], [50, -50])

  return (
    <section
      ref={containerRef}
      className="py-section bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Clean CTA Header */}
        <motion.div
          style={{ y: headerY }}
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={withMotion(fadeInUp)}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-accent bg-accent/10 border border-accent/20 rounded-full">
              <span className="w-2 h-2 bg-accent rounded-full inline-block mr-2" />
              READY TO GET STARTED?
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-white mb-8"
          >
            Your Premium Living
            <span className="text-accent"> Experience Awaits</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto mb-12"
          >
            Join hundreds of professionals who've made Cohousy their home in
            Kharadi's tech hub. Experience the perfect blend of comfort, community, and convenience.
          </motion.p>

          {/* Clean Primary CTAs */}
          <motion.div
            variants={withMotion(fadeInUp)}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <ContactFormDialog
              title="Schedule a Visit"
              description="Book a visit to see the property in person."
              serviceType="Schedule Visit"
              trigger={
                <button className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors text-sm">
                  Schedule Visit
                </button>
              }
            />
            <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300">
              <Download size={20} />
              Download App
            </button>
          </motion.div>

          {/* Promo Code */}
          <motion.div
            variants={withMotion(fadeInUp)}
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold mb-16"
          >
            💰 Save ₹2,000 on your first month with code <span className="font-bold">WELCOME2025</span>
          </motion.div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Explore More Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Explore Our Accommodation Options
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ctaLinks.map((link, index) => {
              const IconComponent = link.icon
              return (
                <a
                  key={index}
                  href={link.href}
                  className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-accent hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/80 rounded-lg group-hover:bg-accent group-hover:text-black transition-all duration-300">
                      <IconComponent size={24} strokeWidth={1.5} />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                        {link.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {link.subtitle}
                      </p>
                    </div>

                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our dedicated support team is available 24/7 to help you find the perfect
            accommodation in Kharadi's premier locations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+918908903900"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:text-white transition-colors duration-300"
            >
              <Phone size={18} />
             +91 8908903900
            </a>
            <div className="hidden sm:block w-px h-6 bg-white/20" />
            <a
              href="mailto:support@cohousy.com"
              className="text-gray-300 hover:text-accent transition-colors duration-300"
            >
              support@cohousy.com
            </a>
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl font-semibold text-accent mb-2">
            Welcome Home to Cohousy
          </p>
          <p className="text-gray-400">
            Your premium co-living experience in the heart of Kharadi's IT district
          </p>
        </motion.div>
      </div>
    </section>
  )
}
