'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Wifi, Home, Utensils, Dumbbell, Car, Shield, Wrench, Heart, Laptop, Coffee } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const amenities = [
  {
    icon: Home,
    title: 'Fully Furnished Rooms',
    description: '1BHK/1RK with bed, wardrobe, study table, chair, and premium furnishing for immediate move-in comfort.',
    category: 'Living Space',
    image: '/a.jpg'
  },
  {
    icon: Wifi,
    title: 'High-Speed Internet',
    description: 'Dedicated high-speed Wi-Fi with backup connections, perfect for remote work and video calls.',
    category: 'Connectivity',
    image: '/b.jpg'
  },
  {
    icon: Utensils,
    title: 'Private Kitchen Access',
    description: 'Fully equipped kitchen with refrigerator, cooking essentials, and 24/7 access for meal preparation.',
    category: 'Kitchen',
    image: '/c.jpg'
  },
  {
    icon: Dumbbell,
    title: 'Fitness & Recreation',
    description: 'Modern gym equipment, badminton court, and recreational areas for maintaining active lifestyle.',
    category: 'Fitness',
    image: '/d.jpg'
  },
  {
    icon: Car,
    title: 'Dedicated Parking',
    description: 'Reserved parking spaces for long-term residents with 24/7 security monitoring.',
    category: 'Parking',
    image: '/e.jpg'
  },
  {
    icon: Shield,
    title: 'Premium Security',
    description: 'Biometric access, CCTV surveillance, and 24/7 security staff ensuring complete safety.',
    category: 'Security',
    image: '/z.jpg'
  },
  {
    icon: Laptop,
    title: 'Co-working Spaces',
    description: 'Dedicated work areas with ergonomic furniture and quiet environment for productivity.',
    category: 'Work',
    image: '/x.jpg'
  },
  {
    icon: Coffee,
    title: 'Common Areas',
    description: 'Lounges, terrace gardens, and social spaces for relaxation and community interaction.',
    category: 'Community',
    image: '/y.jpg'
  }
]

export default function LongTermAmenities() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredAmenity, setHoveredAmenity] = useState<number | null>(null)

  const categories = ['All', ...Array.from(new Set(amenities.map(a => a.category)))]
  const filteredAmenities = activeCategory === 'All' 
    ? amenities 
    : amenities.filter(amenity => amenity.category === activeCategory)

  return (
    <section 
      ref={containerRef}
      className="py-section bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
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
              <Home size={16} className="inline mr-2 text-accent" />
              PREMIUM AMENITIES
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Everything You Need for
            <span className="text-accent"> Extended Stays</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Our long-term rentals come with premium amenities designed for comfort, productivity, 
            and community living. Every detail is crafted for professionals who value quality.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Amenities Grid */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredAmenities.map((amenity, index) => {
            const IconComponent = amenity.icon
            return (
              <motion.div
                key={index}
                variants={withMotion(fadeInUp)}
                onMouseEnter={() => setHoveredAmenity(index)}
                onMouseLeave={() => setHoveredAmenity(null)}
                className="group bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-all duration-500 hover:shadow-lg"
              >
                {/* Amenity Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={amenity.image}
                    alt={amenity.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-sm">
                    <IconComponent size={20} className="text-gray-700" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2 text-xs uppercase tracking-wide text-accent font-semibold">
                    {amenity.category}
                  </div>

                  <h3 className={`text-lg font-bold mb-3 transition-colors duration-300 ${
                    hoveredAmenity === index ? 'text-accent' : 'text-black'
                  }`}>
                    {amenity.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {amenity.description}
                  </p>
                </div>

                <div className={`h-0.5 bg-accent transition-all duration-500 ${
                  hoveredAmenity === index ? 'w-full' : 'w-0'
                }`} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 bg-gray-50 rounded-2xl border border-gray-100 p-8"
        >
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            Long-term Resident Exclusive Benefits
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Wrench size={32} className="text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-black mb-2">Priority Maintenance</h4>
              <p className="text-sm text-gray-600">24/7 priority support for all maintenance requests</p>
            </div>
            <div className="text-center">
              <Heart size={32} className="text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-black mb-2">Personalized Service</h4>
              <p className="text-sm text-gray-600">Dedicated relationship manager for long-term residents</p>
            </div>
            <div className="text-center">
              <Home size={32} className="text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-black mb-2">Room Customization</h4>
              <p className="text-sm text-gray-600">Flexible furniture arrangements and decor options</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}