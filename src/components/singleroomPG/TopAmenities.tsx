'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Wifi, Home, Utensils, Dumbbell, Shield, Car, Coffee, Zap } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const amenities = [
  {
    icon: Home,
    title: 'Private Attached Washroom',
    description: 'Hygiene and convenience in your single room PG. No sharing, complete privacy with modern fittings and 24/7 hot water.',
    category: 'Privacy',
    image: '/a.jpg'
  },
  {
    icon: Zap,
    title: 'AC Rooms with Power Backup',
    description: 'Year-round comfort with AC and uninterrupted electricity. Addressing "AC PG in Kharadi Pune" demands with premium cooling.',
    category: 'Comfort',
    image: '/b.jpg'
  },
  {
    icon: Wifi,
    title: 'High-Speed WiFi & Central Wi-Fi',
    description: 'High-speed WiFi and central Wi-Fi keep you connected. Perfect for remote work and video calls without interruptions.',
    category: 'Connectivity',
    image: '/c.jpg'
  },
  {
    icon: Home,
    title: 'Housekeeping & Room Cleaning',
    description: 'Weekly services to keep spaces spotless. Professional cleaning maintaining hotel-like standards in your private room.',
    category: 'Maintenance',
    image: '/d.jpg'
  },
  {
    icon: Utensils,
    title: 'Kitchen Essentials & Dining',
    description: 'Shared fridge and floor-wise water purifier. Access to common kitchen facilities for occasional cooking needs.',
    category: 'Dining',
    image: '/e.jpg'
  },
  {
    icon: Dumbbell,
    title: 'Common Gym & Badminton Courts',
    description: 'On-site fitness to unwind after long days. Modern equipment and recreational spaces for active lifestyles.',
    category: 'Fitness',
    image: '/z.jpg'
  },
  {
    icon: Coffee,
    title: 'Recreation & Common Areas',
    description: 'Common TV, balcony, and lobby for downtime. Social spaces to connect with fellow professionals when desired.',
    category: 'Recreation',
    image: '/x.jpg'
  },
  {
    icon: Car,
    title: 'Parking & Security',
    description: 'Common parking and first aid boxes add extra peace of mind. 24/7 guards and CCTV surveillance for complete safety.',
    category: 'Security',
    image: '/y.jpg'
  }
]

export default function TopAmenities() {
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-purple-50 border border-purple-100 rounded-full shadow-sm">
              <Home size={16} className="inline mr-2 text-purple-600" />
              TOP AMENITIES
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Top Amenities in AC PG in
            <span className="text-purple-600"> Kharadi Pune at Cohousy</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto"
          >
            Cohousy elevates single room PG in Kharadi Pune with premium features. Every room includes 
            AC for year-round comfort, addressing "AC PG in Kharadi Pune" demands. These amenities 
            draw from our comprehensive offerings, catering to IT professionals near Eon IT Park.
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
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-purple-200'
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
                className="group bg-purple-50 border border-purple-100 rounded-2xl overflow-hidden hover:border-purple-200 transition-all duration-500 hover:shadow-lg"
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
                    <IconComponent size={20} className="text-purple-600" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2 text-xs uppercase tracking-wide text-purple-600 font-semibold">
                    {amenity.category}
                  </div>

                  <h3 className={`text-lg font-bold mb-3 transition-colors duration-300 ${
                    hoveredAmenity === index ? 'text-purple-600' : 'text-black'
                  }`}>
                    {amenity.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {amenity.description}
                  </p>
                </div>

                <div className={`h-0.5 bg-purple-600 transition-all duration-500 ${
                  hoveredAmenity === index ? 'w-full' : 'w-0'
                }`} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Amenity Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-purple-50 rounded-2xl border border-purple-200 p-8"
        >
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            What Sets Our Single Room Amenities Apart
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Home size={32} className="text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-black mb-2">100% Privacy</h4>
              <p className="text-sm text-gray-600">Your own space with attached washroom</p>
            </div>
            <div className="text-center">
              <Zap size={32} className="text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-black mb-2">Always Comfortable</h4>
              <p className="text-sm text-gray-600">AC rooms with power backup</p>
            </div>
            <div className="text-center">
              <Wifi size={32} className="text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-black mb-2">Stay Connected</h4>
              <p className="text-sm text-gray-600">High-speed WiFi for work and entertainment</p>
            </div>
            <div className="text-center">
              <Shield size={32} className="text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-black mb-2">Secure Living</h4>
              <p className="text-sm text-gray-600">24/7 security and CCTV coverage</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              These amenities exceed standard PG hostels, with AC options and post-pandemic hygiene protocols
            </p>
            <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Book Single Room with Premium Amenities
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}