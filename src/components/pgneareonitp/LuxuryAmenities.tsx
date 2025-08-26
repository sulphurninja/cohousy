'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Wifi, Home, Utensils, Dumbbell, Shield, Car, Coffee, Zap } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const amenities = [
  {
    icon: Wifi,
    title: 'High-Speed Wi-Fi & Central Wi-Fi',
    description: 'Reliable connectivity for remote work at companies in Kharadi Pune, essential for hybrid roles and video conferences.',
    category: 'Connectivity',
    image: '/a.jpg'
  },
  {
    icon: Dumbbell,
    title: 'Common Gym & Badminton Courts',
    description: 'On-site fitness to unwind after long days, with modern equipment and recreational spaces for active lifestyle.',
    category: 'Fitness',
    image: '/b.jpg'
  },
  {
    icon: Home,
    title: 'Housekeeping & Room Cleaning',
    description: 'Daily services and common washing machines for hassle-free maintenance, perfect for busy IT professionals.',
    category: 'Maintenance',
    image: '/c.jpg'
  },
  {
    icon: Utensils,
    title: 'Kitchen & Dining Essentials',
    description: 'Fully equipped shared kitchen, common fridge, floor-wise water purifier, and in-app food menu for nutritious meals.',
    category: 'Dining',
    image: '/d.jpg'
  },
  {
    icon: Shield,
    title: 'Attached Washroom & Balcony',
    description: 'Private bathrooms and balconies in select rooms, plus common balconies for relaxation and fresh air.',
    category: 'Privacy',
    image: '/e.jpg'
  },
  {
    icon: Zap,
    title: 'Power Backup',
    description: 'Uninterrupted electricity crucial during Pune\'s monsoons and for continuous work productivity.',
    category: 'Utilities',
    image: '/z.jpg'
  },
  {
    icon: Coffee,
    title: 'Common TV, Lounge & Lobby',
    description: 'Shared entertainment areas to build community vibes and connect with fellow professionals.',
    category: 'Recreation',
    image: '/x.jpg'
  },
  {
    icon: Car,
    title: 'Common Parking & First Aid',
    description: 'Secure parking spots (rare in busy Kharadi) plus immediate health support for peace of mind.',
    category: 'Convenience',
    image: '/y.jpg'
  }
]

export default function LuxuryAmenities() {
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
      className="py-section bg-gray-50 relative overflow-hidden"
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-white border border-orange-200 rounded-full shadow-sm">
              <Home size={16} className="inline mr-2 text-orange-600" />
              LUXURY AMENITIES
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Luxury Amenities Tailored for
            <span className="text-orange-600"> PG Residents</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto"
          >
            Cohousy elevates PG near Eon IT Park Kharadi with a full suite of amenities 
            focusing on comfort, productivity, and health. These features exceed standard 
            PG hostels, with AC options and post-pandemic hygiene protocols.
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
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50 border border-orange-200'
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
                className="group bg-white border border-orange-100 rounded-2xl overflow-hidden hover:border-orange-200 transition-all duration-500 hover:shadow-lg"
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
                    <IconComponent size={20} className="text-orange-600" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2 text-xs uppercase tracking-wide text-orange-600 font-semibold">
                    {amenity.category}
                  </div>

                  <h3 className={`text-lg font-bold mb-3 transition-colors duration-300 ${
                    hoveredAmenity === index ? 'text-orange-600' : 'text-black'
                  }`}>
                    {amenity.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {amenity.description}
                  </p>
                </div>

                <div className={`h-0.5 bg-orange-600 transition-all duration-500 ${
                  hoveredAmenity === index ? 'w-full' : 'w-0'
                }`} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Amenity Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-white rounded-2xl border border-orange-200 p-8"
        >
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            How Our Amenities Compare
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-green-600 mb-4 flex items-center">
                <span className="mr-2">✓</span> Cohousy PG Amenities
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• High-speed Wi-Fi for remote work</li>
                <li>• Fully equipped gym with modern equipment</li>
                <li>• Daily housekeeping and laundry services</li>
                <li>• Shared kitchen with all essentials</li>
                <li>• Attached washrooms in select rooms</li>
                <li>• Power backup during outages</li>
                <li>• Common entertainment areas</li>
                <li>• Secure parking and first aid</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-600 mb-4 flex items-center">
                <span className="mr-2">✗</span> Traditional PG Hostels
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Basic Wi-Fi with connectivity issues</li>
                <li>• No gym or fitness facilities</li>
                <li>• Minimal cleaning, extra charges for laundry</li>
                <li>• Basic kitchen with limited supplies</li>
                <li>• Shared washrooms, no privacy</li>
                <li>• Frequent power cuts without backup</li>
                <li>• Limited or no common areas</li>
                <li>• No parking, basic safety measures</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Residents praise how our amenities support demanding schedules near WTC Kharadi
            </p>
            <button className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Book PG with Premium Amenities
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}