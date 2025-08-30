'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { MapPin, Shield, Users, Home, Smartphone, Train } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const benefits = [
  {
    title: 'Strategic Location',
    description: 'Minutes from Eon IT Park Kharadi and WTC, home to 50+ leading firms. Reduce commute time and enhance work-life balance.',
    icon: MapPin,
    delay: 0
  },
  {
    title: 'Safety First',
    description: '24/7 security, CCTV surveillance, and biometric access ensure complete peace of mind for all residents.',
    icon: Shield,
    delay: 0.1
  },
  {
    title: 'Community Living', 
    description: 'Thoughtfully designed shared spaces and community events foster meaningful connections and professional networking.',
    icon: Users,
    delay: 0.2
  },
  {
    title: 'Flexible Accommodation',
    description: 'Choose from single rooms for privacy or shared spaces for collaboration. Options available for all preferences.',
    icon: Home,
    delay: 0.3
  },
  {
    title: 'Digital-First Experience',
    description: 'Zero brokerage, transparent pricing, and smart app integration for seamless onboarding to payments.',
    icon: Smartphone,
    delay: 0.4
  },
  {
    title: 'Premium Connectivity',
    description: 'Easy access to metro stations, Pune-Mumbai Highway, and Phoenix Marketcity for all your lifestyle needs.',
    icon: Train,
    delay: 0.5
  }
]

export default function WhyChooseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-20%" })
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section 
      ref={containerRef}
      className="py- bg-white relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Clean Image Section */}
          <motion.div
            style={{ y: imageY }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src="/Home/The Future of Professional Living.jpg"
              alt="Professional lifestyle at Cohousy co-living spaces near Eon IT Park"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            
            {/* Clean Stats Overlay */}
            <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-gray-600 font-medium">IT Companies Nearby</div>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 bg-gray-900/95 backdrop-blur-sm text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2 Min</div>
                <div className="text-sm text-white/80 font-medium">Walk to Eon IT Park</div>
              </div>
            </div>
          </motion.div>

          {/* Clean Content Section */}
          <motion.div
            variants={withMotion(staggerContainer)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={withMotion(fadeInUp)}>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-gray-50 border border-gray-100 rounded-full shadow-sm">
                  <span className="w-2 h-2 bg-accent rounded-full inline-block mr-2" />
                  WHY CHOOSE COHOUSY
                </span>
              </div>

              <h2 className="text-display-lg font-bold text-black mb-6">
                The Future of
                <span className="text-accent"> Professional Living</span>
              </h2>

              <p className="text-xl text-gray-600 font-light tracking-wide leading-relaxed">
                Experience premium co-living in Kharadi's tech hub, where modern amenities 
                meet professional community living, all designed around your lifestyle needs.
              </p>
            </motion.div>

            {/* Clean Benefits List */}
            <motion.div 
              variants={withMotion(staggerContainer)}
              className="space-y-6"
            >
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <motion.div
                    key={index}
                    variants={withMotion(fadeInUp)}
                    onMouseEnter={() => setHoveredBenefit(index)}
                    onMouseLeave={() => setHoveredBenefit(null)}
                    className="group flex items-start space-x-6 cursor-pointer p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
                  >
                    {/* Professional Icon */}
                    <div className={`flex-shrink-0 p-3 rounded-xl transition-all duration-300 ${
                      hoveredBenefit === index 
                        ? 'bg-accent text-black shadow-lg' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      <IconComponent size={24} strokeWidth={1.5} />
                    </div>

                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                        hoveredBenefit === index ? 'text-accent' : 'text-black'
                      }`}>
                        {benefit.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Clean Arrow Indicator */}
                    <div className={`transition-all duration-300 ${
                      hoveredBenefit === index ? 'opacity-100 translate-x-1' : 'opacity-0'
                    }`}>
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Clean CTA Section */}
            <motion.div variants={withMotion(fadeInUp)} className="pt-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-accent text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                  Schedule a Visit
                </button>
                <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Clean Statistics Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-20 p-8 bg-gray-50 rounded-2xl border border-gray-100"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-accent mb-2">500+</div>
            <div className="text-sm text-gray-600 font-medium">Happy Residents</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">4.8★</div>
            <div className="text-sm text-gray-600 font-medium">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-gray-600 font-medium">Security & Support</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <div className="text-sm text-gray-600 font-medium">Transparency</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}