'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import DualMarquee from '@/components/DualMarquee'
import { fadeInUp, staggerContainer, withMotion } from '@/lib/motion'

// Professional lifestyle images with proper context
const topMarqueeImages = [
  { src: '/a.jpg', alt: 'Modern professionals at Cohousy Kharadi', width: 400, height: 280 },
  { src: '/b.jpg', alt: 'Co-working spaces near Eon IT Park', width: 380, height: 280 },
  { src: '/c.jpg', alt: 'Community kitchen interactions', width: 420, height: 280 },
  { src: '/d.jpg', alt: 'Kharadi skyline from rooftop terrace', width: 360, height: 280 },
  { src: '/e.jpg', alt: 'Premium single room interiors', width: 400, height: 280 },
  { src: '/z.jpg', alt: 'Fitness facilities for residents', width: 380, height: 280 },
]

const bottomMarqueeImages = [
  { src: '/x.jpg', alt: 'Professional networking events', width: 390, height: 280 },
  { src: '/y.jpg', alt: 'Study areas for IT professionals', width: 410, height: 280 },
  { src: '/w.jpg', alt: 'Community living spaces', width: 370, height: 280 },
  { src: '/h.jpg', alt: 'Modern amenities at Cohousy', width: 400, height: 280 },
  { src: '/v.jpg', alt: 'Safe accommodation for women', width: 420, height: 280 },
  { src: '/i.jpg', alt: 'Digital-first living experience', width: 390, height: 280 },
]

export default function LifestyleMarquee() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-20%" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const headerY = useTransform(scrollYProgress, [0, 0.5], [100, -50])

  return (
    <section 
      ref={containerRef}
      className="py-section bg-white  relative overflow-hidden"
    >
      {/* Professional Section Header */}
      <motion.div
        style={{ y: headerY }}
        className="container mx-auto px-6 mb-16"
      >
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            variants={withMotion(fadeInUp)}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-black/60 bg-black/5 border border-black/10">
              LIFESTYLE GALLERY
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Life at Cohousy
            <motion.span 
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-accent"
            >
              {' '}Kharadi
            </motion.span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-xl text-black/70 leading-relaxed"
          >
            Experience the vibrant community of IT professionals thriving in our premium 
            co-living spaces near <span className="font-semibold text-black">Eon IT Park</span> and{' '}
            <span className="font-semibold text-black">WTC Kharadi</span>. From modern workspaces 
            to wellness amenities, discover where comfort meets productivity.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Enhanced Dual Marquee */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
      >
        <DualMarquee 
          topImages={topMarqueeImages}
          bottomImages={bottomMarqueeImages}
          topSpeed={30}
          bottomSpeed={25}
          rowHeight={280}
          gap={24}
          fadeWidth={120}
          className="relative"
        />
      </motion.div>

      {/* Floating Stats Over Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
      >
        {/* <div className="bg-white/95 backdrop-blur-lg border border-white/20 p-8 text-center shadow-2xl">
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-3xl font-bold text-black mb-2">2 Min</div>
            <div className="text-sm text-black/70 font-medium tracking-wide">Walk to Eon IT Park</div>
          </motion.div>
        </div> */}
      </motion.div>

      {/* Background Animation Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              rotate: [0, 360],
              opacity: [0.02, 0.05, 0.02]
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-96 h-96 border border-accent/10 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`
            }}
          />
        ))}
      </div>
    </section>
  )
}