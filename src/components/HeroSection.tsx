'use client'

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { staggerContainer, splitLineReveal, fadeInUp, withMotion } from '@/lib/motion'

const services = [
  {
    id: 'professionals',
    title: 'Co-Living for Professionals',
    subtitle: 'Premium spaces for IT professionals',
    image: '/1.jpg',
    href: '/co-living',
    color: 'from-blue-50 to-purple-50'
  },
  {
    id: 'long-term',
    title: 'Long-Term Rentals',
    subtitle: 'Extended stay solutions',
    image: '/2.jpg',
    href: '/long-term-rentals',
    color: 'from-green-50 to-teal-50'
  },
  {
    id: 'short-term',
    title: 'Short-Term Rentals',
    subtitle: 'Flexible accommodation options',
    image: '/3.jpg',
    href: '/short-term-rentals',
    color: 'from-orange-50 to-red-50'
  }
]

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <section
      ref={containerRef}
      className="relative pt-12 bg-white"
    >
      {/* Background (very subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/skyline.avif"
          alt="Premium co-living spaces in Kharadi Pune skyline near Eon IT Park"
          fill
          className="object-cover opacity-5"
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
                REDEFINING URBAN LIVING
              </motion.span>

              {/* Headline */}
              <div className="mb-6">
                <motion.h1 className="text-display-xl font-bold text-black leading-[0.9]">
                  <div className="overflow-hidden">
                    <motion.span variants={withMotion(splitLineReveal)} className="block">
                      Next-Generation
                    </motion.span>
                  </div>
                  <div className="overflow-hidden">
                    <motion.span variants={withMotion(splitLineReveal)} className="block text-accent">
                      Living Experience
                    </motion.span>
                  </div>
                </motion.h1>
              </div>

              {/* Subhead (small line under headline like in screenshot) */}
              <motion.p
                variants={withMotion(fadeInUp)}
                className="text-2xl text-gray-600 font-light tracking-wide mb-8"
              >
                in Kharadi&apos;s Tech Hub
              </motion.p>

              {/* Description paragraph */}
              <motion.p
                variants={withMotion(fadeInUp)}
                className="text-xl leading-relaxed text-gray-700"
              >
                Strategically positioned at the epicenter of{' '}
                <span className="text-accent font-semibold">Eon IT Park Kharadi</span>, serving{' '}
                <span className="text-black font-medium">50+ leading tech companies</span>{' '}
                including Infosys, TCS, Cognizant, and Zensar—transforming how professionals live, work, and thrive.
              </motion.p>
            </motion.div>
          </div>

          {/* RIGHT: Vertical service cards */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="flex flex-col gap-6">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  onClick={() => (window.location.href = service.href)}
                  className="group text-left cursor-pointer w-full"
                >
                  <div className="relative flex items-center gap-5 bg-orange-50/50 hover:bg-orange-50 transition-colors border border-orange-100 rounded-2xl p-5">
                    {/* Circular image */}
                    <div className="relative shrink-0 w-16 h-16 rounded-full overflow-hidden ring-1 ring-orange-100">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>

                    {/* Texts */}
                    <div className="min-w-0">
                      <div className="text-sm uppercase tracking-wide text-gray-700">
                        {service.title.split(' ')[0].toUpperCase()}
                      </div>
                      <div className="font-semibold text-gray-900 leading-tight">
                        {service.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {service.subtitle}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="ml-auto text-gray-400 group-hover:text-gray-900 transition-colors">
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M13 5l7 7-7 7" />
                      </svg>
                    </div>

                    {/* Soft gradient hint like screenshot */}
                    <div
                      className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-20`}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
