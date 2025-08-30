'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const offers = [
  {
    id: 1,
    title: 'Co-Living for Professionals',
    image: '/Home/Co-Living for Professionals.jpg',
    price: '₹10,000',
    period: '/Month',
    description: 'Premium community-style living designed for working professionals. Fully maintained 1BHK and 1RK accommodations with flexible stay options.',
    features: [
      'Flexible stay options',
      'Near Eon IT Park & WTC',
      'Community networking spaces',
      'Wellness amenities included'
    ],
    cta: 'Explore Co-living',
    href: '/co-living',
    popular: false,
    alt: 'Co-living spaces for professionals in Kharadi near Eon IT Park'
  },
  {
    id: 2,
    title: 'Long-Term Rentals',
    image: '/Home/Long-Term Rental.jpg',
    price: '₹10,000',
    period: '/Month',
    description: 'Your private space with all comforts included. Choose our premium 1RK or 1BHK accommodations for extended stays in Kharadi.',
    features: [
      'Private 1RK or 1BHK rooms',
      'All utilities included',
      'Power backup & WiFi',
      'Community amenities access'
    ],
    cta: 'View Rentals',
    href: '/long-term-rentals',
    popular: true,
    alt: 'Single room PG accommodation for long-term stays in Kharadi'
  },
  {
    id: 3,
    title: 'Short-Term Rentals',
    image: '/Home/Short-Term Rental.jpg',
    price: '₹1,300',
    period: '/Night',
    description: 'Hassle-free accommodations for short stays. Fully furnished spaces with zero lock-in and premium amenities included.',
    features: [
      'Zero lock-in period',
      'Fully furnished spaces',
      'Premium amenities',
      'Perfect for project stays'
    ],
    cta: 'Book Now',
    href: '/short-term-rentals',
    popular: false,
    alt: 'Short-term accommodation near Eon IT Park for project stays'
  }
]

export default function OffersSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [hoveredOffer, setHoveredOffer] = useState<number | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const headerY = useTransform(scrollYProgress, [0, 0.3], [50, -50])

  return (
    <section 
      ref={containerRef}
      id="offers"
      className="py-section bg-white relative overflow-hidden"
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-gray-50 border border-gray-100 rounded-full shadow-sm">
              <span className="w-2 h-2 bg-accent rounded-full inline-block mr-2" />
              ACCOMMODATION OPTIONS
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Tailored Living
            <span className="text-accent"> Solutions</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Choose from our premium accommodation options in Kharadi's tech hub, 
            each designed to meet different lifestyle and duration needs.
          </motion.p>
        </motion.div>

        {/* Clean Offers Grid */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              variants={withMotion(fadeInUp)}
              onMouseEnter={() => setHoveredOffer(offer.id)}
              onMouseLeave={() => setHoveredOffer(null)}
              className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-all duration-500 hover:shadow-xl"
            >
              {/* Popular Badge - Clean Design */}
              {offer.popular && (
                <div className="absolute top-6 right-6 z-20 bg-accent text-black text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  POPULAR
                </div>
              )}

              {/* Clean Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Simple Price Badge */}
                <div className="absolute top-6 left-6 z-10 bg-white/95 backdrop-blur-sm text-black px-4 py-2 rounded-lg shadow-sm border border-white/20">
                  <span className="font-bold text-lg">{offer.price}</span>
                  <span className="text-gray-600 text-sm">{offer.period}</span>
                </div>

                {/* Clean overlay on hover */}
                <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${
                  hoveredOffer === offer.id ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>

              {/* Clean Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-accent transition-colors duration-300">
                  {offer.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {offer.description}
                </p>

                {/* Clean Features List */}
                <ul className="space-y-3 mb-8">
                  {offer.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-sm text-gray-600 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Clean CTA Button */}
                <Link href={offer.href}>
                  <button className="w-full py-3 cursor-pointer border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 group/btn">
                    <span className="relative z-10">{offer.cta}</span>
                  </button>
                </Link>
              </div>

              {/* Subtle hover accent */}
              <div className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-500 ${
                hoveredOffer === offer.id ? 'w-full' : 'w-0'
              }`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Clean CTA Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-100"
        >
          <p className="text-gray-600 mb-4">
            Ready to experience premium living in Kharadi's tech hub?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-3 bg-accent cursor-pointer text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                Schedule a Visit
              </button>
            </Link>
            <Link href="/brochure">
              <button className="px-8 py-3 border-2 cursor-pointer border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
                Download Brochure
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}