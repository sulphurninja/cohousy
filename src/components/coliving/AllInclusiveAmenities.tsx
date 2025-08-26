'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Wifi, Shield, Home, Utensils, Dumbbell, Car, Wrench, Heart } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const amenities = [
    {
        icon: Wifi,
        title: 'High-Speed Central Wi-Fi',
        description: 'Seamless connectivity for remote work or online classes, crucial in a hub like Kharadi where hybrid schedules are the norm.',
        category: 'Connectivity',
        image: '/a.jpg',
        alt: 'High-speed Wi-Fi connectivity at Cohousy'
    },
    {
        icon: Shield,
        title: 'CCTV Surveillance + 24/7 Security',
        description: 'Round-the-clock monitoring for safety, giving peace of mind in urban settings.',
        category: 'Security',
        image: '/b.jpg',
        alt: '24/7 security monitoring system'
    },
    {
        icon: Home,
        title: 'Housekeeping & Laundry',
        description: 'Daily room cleaning and common washing machine access to keep your space spotless without added effort.',
        category: 'Maintenance',
        image: '/c.jpg',
        alt: 'Daily housekeeping and laundry services'
    },
    {
        icon: Utensils,
        title: 'Fully Equipped Kitchen',
        description: 'Shared facilities with a common fridge and floor-wise water purifier for easy meal prep.',
        category: 'Kitchen',
        image: '/d.jpg',
        alt: 'Fully equipped shared kitchen facilities'
    },
    {
        icon: Dumbbell,
        title: 'Gym & Badminton Court(s)',
        description: 'On-site fitness options, including modern machines and recreational courts, to maintain wellness amid busy routines.',
        category: 'Fitness',
        image: '/e.jpg',
        alt: 'Modern gym and badminton courts'
    },
    {
        icon: Car,
        title: 'Common Parking',
        description: 'Secure spots for vehicles, a rare convenience in crowded Kharadi.',
        category: 'Parking',
        image: '/z.jpg',
        alt: 'Secure parking facilities'
    },
    {
        icon: Wrench,
        title: 'Power Backup',
        description: 'Uninterrupted electricity to avoid disruptions during Pune\'s monsoon season.',
        category: 'Utilities',
        image: '/x.jpg',
        alt: 'Reliable power backup system'
    },
    {
        icon: Heart,
        title: 'First Aid Box',
        description: 'On-site medical essentials for immediate care.',
        category: 'Healthcare',
        image: '/y.jpg',
        alt: 'First aid and medical facilities'
    }
]


const categories = ['All', 'Connectivity', 'Security', 'Maintenance', 'Kitchen', 'Fitness', 'Parking', 'Utilities', 'Healthcare']

export default function AllInclusiveAmenities() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: "-10%" })
    const [activeCategory, setActiveCategory] = useState('All')
    const [hoveredAmenity, setHoveredAmenity] = useState<number | null>(null)

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
                            ALL-INCLUSIVE AMENITIES
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={withMotion(fadeInUp)}
                        className="text-display-lg font-bold text-black mb-6"
                    >
                        Stress-Free Living
                        <span className="text-accent"> Made Simple</span>
                    </motion.h2>

                    <motion.p
                        variants={withMotion(fadeInUp)}
                        className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
                    >
                        Our co-living spaces in Kharadi come equipped with a comprehensive suite of amenities,
                        ensuring every aspect of daily life is covered for comfort, health, and productivity.
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
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeCategory === category
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
                >
                    {filteredAmenities.map((amenity, index) => {
                        const IconComponent = amenity.icon
                        return (
                            <motion.div
                                key={index}
                                variants={withMotion(fadeInUp)}
                                onMouseEnter={() => setHoveredAmenity(index)}
                                onMouseLeave={() => setHoveredAmenity(null)}
                                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 transition-all duration-500 hover:shadow-lg"
                            >
                                <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-all duration-300 ${hoveredAmenity === index ? 'bg-accent text-black' : 'bg-gray-100 text-gray-600'
                                    }`}>
                                    <IconComponent size={24} strokeWidth={1.5} />
                                </div>

                                <div className="mb-2 text-xs uppercase tracking-wide text-accent font-semibold">
                                    {amenity.category}
                                </div>

                                <h3 className={`text-lg font-bold mb-3 transition-colors duration-300 ${hoveredAmenity === index ? 'text-accent' : 'text-black'
                                    }`}>
                                    {amenity.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {amenity.description}
                                </p>

                                <div className={`mt-4 h-0.5 bg-accent transition-all duration-500 ${hoveredAmenity === index ? 'w-full' : 'w-0'
                                    }`} />
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* Amenities Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="relative aspect-[2/1] bg-gray-50 rounded-2xl overflow-hidden border border-gray-100"
                >
                    <Image
                        src="/skyline.avif"
                        alt="Comprehensive amenities at Cohousy co-living spaces"
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent flex items-center">
                        <div className="max-w-2xl p-12 text-white">
                            <h3 className="text-3xl font-bold mb-4">
                                Everything Included
                            </h3>

                            <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                These amenities go beyond basics, incorporating hygiene standards with regular
                                sanitization. Compared to other PGs near WTC Kharadi, our luxury amenities
                                make Cohousy feel premium yet accessible.
                            </p>

                            <button className="bg-accent text-black px-8 py-3 font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                                View All Amenities
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}