'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface CinematicLoaderProps {
  onComplete: () => void
}

export default function CinematicLoader({ onComplete }: CinematicLoaderProps) {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 800)
    const timer2 = setTimeout(() => setStage(2), 1600)
    const timer3 = setTimeout(() => setStage(3), 2200)
    const timer4 = setTimeout(() => onComplete(), 2800)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(135deg, #0B1220 0%, #1e293b 50%, #0f172a 100%)',
              'linear-gradient(135deg, #0B1220 0%, #0d9488 50%, #0f172a 100%)',
              'linear-gradient(135deg, #0B1220 0%, #f59e0b 50%, #0f172a 100%)',
            ]
          }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />

        {/* Cohousy "C" Mark Animation */}
        <div className="relative">
          {/* Main C letter */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2 
            }}
            className="text-8xl font-bold text-white relative z-10"
          >
            C
          </motion.div>

          {/* Glowing trail effect */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 0.6, 0] }}
            transition={{ 
              duration: 1.8, 
              ease: "easeOut",
              delay: 0.4,
              repeat: stage < 2 ? Infinity : 0,
              repeatDelay: 0.8
            }}
            className="absolute inset-0 text-8xl font-bold text-teal-400 blur-lg"
          >
            C
          </motion.div>

          {/* Particle system */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-amber-400 to-teal-400 rounded-full"
              initial={{ 
                x: 0, 
                y: 0, 
                opacity: 0,
                scale: 0 
              }}
              animate={stage >= 1 ? {
                x: Math.cos(i * 30 * Math.PI / 180) * 100,
                y: Math.sin(i * 30 * Math.PI / 180) * 100,
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              } : {}}
              transition={{ 
                duration: 2, 
                ease: "easeOut",
                delay: i * 0.1 
              }}
              style={{
                left: '50%',
                top: '50%',
              }}
            />
          ))}
        </div>

        {/* Brand name reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={stage >= 2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-2xl font-light tracking-[0.3em] text-white/80">
            COHOUSY
          </div>
        </motion.div>

        {/* Loading progress */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-48 h-0.5 bg-gradient-to-r from-teal-400 to-amber-400 origin-left"
        />
      </motion.div>
    </AnimatePresence>
  )
}