'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { staggerContainer, splitLineReveal, fadeInUp, withMotion } from '@/lib/motion'

const heroSlides = [
  {
    title: "Your Home Away from Home!",
    description: "Looking for a comfortable and affordable Co-Living? We offer private and shared spaces with top-notch amenities like air-conditioned rooms, personal storage, CCTV security, and a dedicated support team. Live comfortably without breaking the bank!",
    image: "https://cohousy.frutigerindia.com/wp-content/uploads/2025/03/Welcome-to-Cohousy-a-place-you-will-never-forget-min.jpg"
  },
  {
    title: "Modern Amenities & Vibrant Communities",
    description: "Say goodbye to the stress of house hunting! Our co-living spaces come with fully furnished rooms, power backup, laundry services, a fully equipped kitchen, and a welcoming community. Enjoy a hassle-free lifestyle with everything you need under one roof.",
    image: "https://cohousy.frutigerindia.com/wp-content/uploads/2025/03/Hero-Section-1-min.jpg"
  }
]

const features = [
  {
    id: 'amenities',
    title: 'Premium Amenities',
    subtitle: 'AC rooms, Wi-Fi, security & more',
    image: '/1.jpg',
    color: 'from-blue-50 to-purple-50'
  },
  {
    id: 'community',
    title: 'Vibrant Community',
    subtitle: 'Connect with like-minded professionals',
    image: '/2.jpg',
    color: 'from-green-50 to-teal-50'
  },
  {
    id: 'location',
    title: 'Prime Location',
    subtitle: 'Near IT parks & tech hubs',
    image: '/3.jpg',
    color: 'from-orange-50 to-red-50'
  }
]

export default function ExploreHeroSection() {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={containerRef}
      className="relative pt-12 bg-white"
    >
      {/* Background (very subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={heroSlides[0].image}
          alt="Cohousy co-living spaces in Kharadi"
          fill
          className="object-cover opacity-10"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content area */}
      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: Headline / copy */}
          <div className="lg:col-span-7 xl:col-span-8">
            <motion.div
              variants={withMotion(staggerContainer)}
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >
              {/* Badge */}
              <motion.span
                variants={withMotion(fadeInUp)}
                className="inline-flex items-center gap-3 px-6 py-2 text-sm font-medium tracking-wider text-gray-700 bg-gray-50 border border-gray-100 rounded-full shadow-sm mb-6"
              >
                <span className="w-2 h-2 bg-accent rounded-full" />
                EXPLORE OUR PROPERTIES
              </motion.span>

              {/* Headline */}
              <div className="mb-6">
                <motion.h1 className="text-display-xl font-bold text-black leading-[0.9]">
                  <div className="overflow-hidden">
                    <motion.span variants={withMotion(splitLineReveal)} className="block">
                      Your Home
                    </motion.span>
                  </div>
                  <div className="overflow-hidden">
                    <motion.span variants={withMotion(splitLineReveal)} className="block text-accent">
                      Away from Home!
                    </motion.span>
                  </div>
                </motion.h1>
              </div>

              {/* Description paragraph */}
              <motion.p
                variants={withMotion(fadeInUp)}
                className="text-xl leading-relaxed text-gray-700 mb-6"
              >
                Looking for a comfortable and affordable Co-Living? We offer{' '}
                <span className="text-accent font-semibold">private and shared spaces</span> with{' '}
                <span className="text-black font-medium">top-notch amenities</span> like air-conditioned rooms, 
                personal storage, CCTV security, and a dedicated support team.
              </motion.p>

              <motion.p
                variants={withMotion(fadeInUp)}
                className="text-lg text-gray-600 font-medium"
              >
                Live comfortably without breaking the bank!
              </motion.p>
            </motion.div>
          </div>

          {/* RIGHT: Vertical feature cards */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="flex flex-col gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className="group w-full"
                >
                  <div className="relative flex items-center gap-5 bg-orange-50/50 hover:bg-orange-50 transition-colors border border-orange-100 rounded-2xl p-5">
                    {/* Circular image */}
                    <div className="relative shrink-0 w-16 h-16 rounded-full overflow-hidden ring-1 ring-orange-100">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>

                    {/* Texts */}
                    <div className="min-w-0">
                      <div className="text-sm uppercase tracking-wide text-gray-700">
                        {feature.title.split(' ')[0].toUpperCase()}
                      </div>
                      <div className="font-semibold text-gray-900 leading-tight">
                        {feature.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {feature.subtitle}
                      </div>
                    </div>

                    {/* Soft gradient hint */}
                    <div
                      className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-20`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}