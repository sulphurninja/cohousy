'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Wifi, Home, Utensils, Dumbbell, Shield, Car, Smartphone, Coffee } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const amenities = [
  {
    icon: Wifi,
    title: 'High-Speed Wi-Fi & Central Wi-Fi',
    description: 'Stay connected with uninterrupted internet for remote work or streaming, essential for IT pros near Eon IT Park Kharadi.',
    category: 'Connectivity',
    image: '/male/High-speed.jpg'
  },
  {
    icon: Shield,
    title: '24/7 Security & CCTV Surveillance',
    description: 'Safety is paramount in our boys PG with round-the-clock monitoring and security guard to give you complete peace of mind.',
    category: 'Security',
    image: '/male/CCTV.jpg'
  },
  {
    icon: Dumbbell,
    title: 'Common Gym & Fitness Facilities',
    description: 'Maintain your health with access to well-equipped gym and badminton courts, perfect for unwinding after work at WTC Kharadi.',
    category: 'Fitness',
    image: '/male/Common Gym.jpg'
  },
  {
    icon: Home,
    title: 'Housekeeping & Room Cleaning',
    description: 'Enjoy hassle-free living with regular cleaning, common laundry, and washing machines—no more weekend chores for busy professionals.',
    category: 'Maintenance',
    image: '/male/Housekeeping.jpg'
  },
  {
    icon: Utensils,
    title: 'Kitchen & Dining Essentials',
    description: 'Shared kitchen, common fridge, floor-wise water purifier, and in-app food menu access ensure nutritious meals without stepping out.',
    category: 'Dining',
    image: '/male/Kitchen & Dining.jpg'
  },
  {
    icon: Coffee,
    title: 'Common Areas for Relaxation',
    description: 'Lounge in common balcony, lobby, or with common TV—ideal for building connections in our co-living PG environment.',
    category: 'Recreation',
    image: '/male/Common Area.jpg'
  },
  {
    icon: Car,
    title: 'Parking & Additional Perks',
    description: 'Secure common parking, first aid box, and balcony options add to everyday convenience for working professionals.',
    category: 'Convenience',
    image: '/male/Parking & Additional.jpeg'
  },
  {
    icon: Smartphone,
    title: 'Power Backup & Modern Tech',
    description: 'Reliable electricity backup and attached washrooms in rooms prevent disruptions in your routine and work schedule.',
    category: 'Technology',
    image: '/male/Power Backup.jpg'
  }
]

export default function MalePGAmenities() {
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-blue-50 border border-blue-100 rounded-full shadow-sm">
              <Home size={16} className="inline mr-2 text-blue-600" />
              COMFORT & CONVENIENCE REDEFINED
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Amenities in Our Boys PG
            <span className="text-blue-600"> in Kharadi</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto"
          >
            At Cohousy, we believe that a great male PG in Kharadi Pune should feel like home. 
            Our amenities are curated to enhance daily living for boys accommodation, from high-speed 
            connectivity to fitness options, everything designed for the modern professional.
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
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 border border-blue-200'
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {filteredAmenities.map((amenity, index) => {
            const IconComponent = amenity.icon
            return (
              <motion.div
                key={index}
                variants={withMotion(fadeInUp)}
                onMouseEnter={() => setHoveredAmenity(index)}
                onMouseLeave={() => setHoveredAmenity(null)}
                className="group bg-blue-50 border border-blue-100 rounded-2xl overflow-hidden hover:border-blue-200 transition-all duration-500 hover:shadow-lg"
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
                    <IconComponent size={20} className="text-blue-600" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2 text-xs uppercase tracking-wide text-blue-600 font-semibold">
                    {amenity.category}
                  </div>

                  <h3 className={`text-lg font-bold mb-3 transition-colors duration-300 ${
                    hoveredAmenity === index ? 'text-blue-600' : 'text-black'
                  }`}>
                    {amenity.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {amenity.description}
                  </p>
                </div>

                <div className={`h-0.5 bg-blue-600 transition-all duration-500 ${
                  hoveredAmenity === index ? 'w-full' : 'w-0'
                }`} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Professional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-blue-50 rounded-2xl border border-blue-200 p-8"
        >
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            Perfect Setup for IT Professionals
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Wifi size={32} className="text-green-600" />
              </div>
              <h4 className="font-semibold text-black mb-2">Work From Home Ready</h4>
              <p className="text-sm text-gray-600">High-speed internet and quiet spaces for remote work</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Coffee size={32} className="text-purple-600" />
              </div>
              <h4 className="font-semibold text-black mb-2">Social & Professional</h4>
              <p className="text-sm text-gray-600">Network with fellow IT professionals in common areas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-orange-600" />
              </div>
              <h4 className="font-semibold text-black mb-2">Hassle-Free Living</h4>
              <p className="text-sm text-gray-600">All maintenance handled, focus on your career growth</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}