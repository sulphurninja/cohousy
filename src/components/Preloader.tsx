'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { prefersReducedMotion } from '@/lib/motion'

const photoSequence = [
  '/skyline.avif',
  '/skyline2.avif',
  '/living.jpg',
  '/living2.jpg'
]

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isComplete, setIsComplete] = useState(false)
  const [currentPhoto, setCurrentPhoto] = useState(0)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion()) {
      onComplete()
      return
    }

    // Photo montage sequence
    const photoInterval = setInterval(() => {
      setCurrentPhoto(prev => (prev + 1) % photoSequence.length)
    }, 500)

    // Logo reveal after first photo cycle
    const logoTimer = setTimeout(() => {
      setShowLogo(true)
    }, 800)

    // Complete sequence
    const completeTimer = setTimeout(() => {
      setIsComplete(true)
      setTimeout(onComplete, 600)
    }, 2200)

    return () => {
      clearInterval(photoInterval)
      clearTimeout(logoTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  if (prefersReducedMotion()) return null

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-50 bg-white"
        >
          {/* Photo montage background */}
          <div className="absolute inset-0">
            {photoSequence.map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: currentPhoto === index ? 0.08 : 0 
                }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover grayscale"
                  priority={index === 0}
                />
              </motion.div>
            ))}
          </div>

          {/* Logo reveal */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <motion.div
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              animate={{ 
                opacity: showLogo ? 1 : 0,
                filter: showLogo ? 'blur(0px)' : 'blur(4px)'
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="/logo.png"
                alt="Cohousy"
                width={200}
                height={60}
                className="object-contain"
                priority
              />
              
              {/* Light sweep effect */}
              <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ 
                  x: showLogo ? '100%' : '-100%',
                  opacity: showLogo ? [0, 1, 0] : 0
                }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.6,
                  ease: [0.76, 0, 0.24, 1]
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent mix-blend-overlay"
              />
            </motion.div>
          </div>

          {/* Subtle grain overlay */}
          <div className="absolute inset-0 grain pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}