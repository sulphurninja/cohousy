'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Smartphone, Calendar, Users, Wrench, CreditCard, Download, Play } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const appFeatures = [
  {
    id: 'booking',
    title: 'Instant Booking',
    description: 'Browse available rooms, view 360° tours, and book instantly with digital contracts and zero paperwork.',
    icon: Calendar,
    benefits: ['Real-time availability', 'Virtual tours', 'Digital contracts']
  },
  {
    id: 'community',
    title: 'Community Connect',
    description: 'Connect with like-minded residents, join professional networking events, and build meaningful relationships.',
    icon: Users,
    benefits: ['Resident directory', 'Event calendar', 'Group chats']
  },
  {
    id: 'services',
    title: 'On-Demand Services',
    description: 'Request housekeeping, maintenance, or concierge services with one tap and track service status in real-time.',
    icon: Wrench,
    benefits: ['24/7 service requests', 'Real-time tracking', 'Service history']
  },
  {
    id: 'payments',
    title: 'Smart Payments',
    description: 'Manage rent, deposits, and service payments seamlessly with automated reminders and digital receipts.',
    icon: CreditCard,
    benefits: ['Auto-pay options', 'Payment history', 'Digital receipts']
  }
]

export default function AppExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [activeFeature, setActiveFeature] = useState(0)
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const headerY = useTransform(scrollYProgress, [0, 0.3], [50, -50])
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section 
      ref={containerRef}
      className="py-section bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative">
        
        {/* Clean Section Header */}
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm">
              <Smartphone size={16} className="inline mr-2" />
              DIGITAL EXPERIENCE
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            App-Powered
            <span className="text-accent"> Living</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Experience the future of co-living with our comprehensive mobile platform. 
            From booking to community building, everything you need at your fingertips.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Clean Phone Mockup */}
          <motion.div
            style={{ y: phoneY }}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-[320px] h-[640px] bg-gray-900 rounded-[32px] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[24px] overflow-hidden relative">
                  
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-12 bg-gray-900 z-20 rounded-t-[24px] flex items-center justify-between px-6">
                    <div className="flex items-center space-x-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <div className="text-white text-xs font-medium">9:41</div>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 border border-white rounded-sm"></div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="pt-12 p-6 h-full">
                    {/* App Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Good morning!</h3>
                        <p className="text-sm text-gray-600">Welcome to Cohousy</p>
                      </div>
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                        <Smartphone size={20} className="text-black" />
                      </div>
                    </div>

                    {/* Feature Cards */}
                    <div className="space-y-4">
                      {appFeatures.slice(0, 3).map((feature, index) => {
                        const IconComponent = feature.icon
                        return (
                          <div
                            key={feature.id}
                            className={`p-4 rounded-xl transition-all duration-300 ${
                              activeFeature === index
                                ? 'bg-accent/10 border-2 border-accent'
                                : 'bg-gray-50 border border-gray-200'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`p-2 rounded-lg ${
                                activeFeature === index ? 'bg-accent text-black' : 'bg-gray-200 text-gray-600'
                              }`}>
                                <IconComponent size={16} />
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-gray-900 text-sm">{feature.title}</div>
                                <div className="text-xs text-gray-600">Available now</div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* Bottom Navigation */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-gray-900 rounded-2xl p-4">
                        <div className="grid grid-cols-4 gap-4">
                          {[Calendar, Users, Wrench, CreditCard].map((Icon, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                              <Icon size={20} className={idx === activeFeature ? 'text-accent' : 'text-gray-400'} />
                              <div className={`w-1 h-1 rounded-full mt-2 ${
                                idx === activeFeature ? 'bg-accent' : 'bg-transparent'
                              }`} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-green-500 text-white p-2 rounded-lg text-xs font-bold shadow-lg"
              >
                Online
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-accent text-black p-2 rounded-lg text-xs font-bold shadow-lg"
              >
                24/7 Support
              </motion.div>
            </div>
          </motion.div>

          {/* Clean Feature List */}
          <motion.div
            variants={withMotion(staggerContainer)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {appFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={feature.id}
                  variants={withMotion(fadeInUp)}
                  onMouseEnter={() => {
                    setHoveredFeature(index)
                    setActiveFeature(index)
                  }}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className={`group p-6 rounded-xl cursor-pointer transition-all duration-300 border ${
                    activeFeature === index 
                      ? 'bg-gray-900 text-white border-gray-900' 
                      : 'bg-white text-black border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className={`p-3 rounded-xl transition-all duration-300 ${
                      activeFeature === index 
                        ? 'bg-accent text-black' 
                        : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                    }`}>
                      <IconComponent size={24} strokeWidth={1.5} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">
                        {feature.title}
                      </h3>
                      <p className={`leading-relaxed mb-4 transition-colors duration-300 ${
                        activeFeature === index ? 'text-white/80' : 'text-gray-600'
                      }`}>
                        {feature.description}
                      </p>
                      
                      {/* Benefits */}
                      <div className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className={`flex items-center text-sm transition-colors duration-300 ${
                            activeFeature === index ? 'text-white/70' : 'text-gray-500'
                          }`}>
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}

            {/* Clean App Store CTAs */}
            <motion.div
              variants={withMotion(fadeInUp)}
              className="pt-8"
            >
              <h4 className="text-lg font-semibold text-black mb-4">
                Download the Cohousy App
              </h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
                  <Download size={20} />
                  App Store
                </button>
                <button className="flex items-center justify-center gap-3 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300">
                  <Play size={20} />
                  Google Play
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* App Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: '10K+', label: 'App Downloads' },
            { value: '4.8★', label: 'App Store Rating' },
            { value: '24/7', label: 'Digital Support' },
            { value: '100%', label: 'Digital Payments' }
          ].map((stat, index) => (
            <div key={index} className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}