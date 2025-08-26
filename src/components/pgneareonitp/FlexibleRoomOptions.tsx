'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Home, CheckCircle, Users, DollarSign } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'
import Link from 'next/link'

const roomOptions = [
    {
        type: '1BHK Units',
        properties: 'Cohousy 1 & 3',
        singlePrice: '₹18,000',
        doublePrice: '₹10,000',
        features: [
            'Private 1BHK apartment setup',
            'Attached washroom with geyser',
            'Balcony with city/garden views',
            'Furnished with bed, wardrobe, study table',
            'High-speed Wi-Fi included',
            'Daily housekeeping service',
            'All meals included (veg/non-veg)',
            'Access to all common amenities'
        ]
    },
    {
        type: '1RK Units',
        properties: 'Cohousy 2',
        singlePrice: '₹18,000',
        doublePrice: '₹10,000',
        features: [
            'Compact 1RK with efficient layout',
            'Attached washroom facilities',
            'Kitchenette for basic cooking',
            'Modern furnishing and storage',
            'High-speed internet connectivity',
            'Regular cleaning and maintenance',
            'Nutritious meal options',
            'Community access and amenities'
        ]
    },
    {
        type: 'Common Rooms',
        properties: 'Common 1 (33 rooms available)',
        singlePrice: 'Contact for rates',
        doublePrice: 'Budget-friendly options',
        features: [
            'Variety of room sizes available',
            'Shared washroom facilities',
            'Common area access',
            'Budget-friendly pricing',
            'Flexible lease terms',
            'Basic furnishing included',
            'Meal plans available',
            'Community living experience'
        ]
    }
]

const inclusiveFeatures = [
    'No hidden charges or brokerage fees',
    'All utilities included in rent',
    'Wi-Fi and power backup covered',
    'Daily meals with variety',
    'Housekeeping and laundry services',
    'Access to gym and common areas',
    'Security and maintenance included',
    '24/7 app support and assistance'
]

export default function FlexibleRoomOptions() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: "-10%" })
    const [hoveredOption, setHoveredOption] = useState<number | null>(null)

    return (
        <section
            ref={containerRef}
            className="py-section bg-orange-50 relative overflow-hidden"
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
                            FLEXIBLE ROOM OPTIONS
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={withMotion(fadeInUp)}
                        className="text-display-lg font-bold text-black mb-6"
                    >
                        Flexible Room Options and Pricing
                        <span className="text-orange-600"> for PG near Eon IT Park</span>
                    </motion.h2>

                    <motion.p
                        variants={withMotion(fadeInUp)}
                        className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto"
                    >
                        Transparency defines our PG in Kharadi Pune, with options to fit every budget and preference.
                        Better value than traditional listings with clear pricing and no hidden charges—designed
                        for professionals working near Eon IT Park and WTC.
                    </motion.p>
                </motion.div>

                {/* Room Options Grid */}
                <motion.div
                    variants={withMotion(staggerContainer)}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
                >
                    {roomOptions.map((option, index) => (
                        <motion.div
                            key={index}
                            variants={withMotion(fadeInUp)}
                            onMouseEnter={() => setHoveredOption(index)}
                            onMouseLeave={() => setHoveredOption(null)}
                            className="bg-white border border-orange-100 rounded-2xl overflow-hidden hover:border-orange-200 transition-all duration-500 hover:shadow-lg"
                        >
                            {/* Header */}
                            <div className="p-6 pb-4">
                                <h3 className="text-2xl font-bold text-black mb-2">{option.type}</h3>
                                <p className="text-orange-600 font-medium text-sm mb-4">{option.properties}</p>

                                {/* Pricing */}
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Single Occupancy</span>
                                        <span className="font-bold text-black">{option.singlePrice}/month</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Double Occupancy</span>
                                        <span className="font-bold text-black">{option.doublePrice}/month</span>
                                    </div>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="px-6 pb-6">
                                <ul className="space-y-2">
                                    {option.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start space-x-2">
                                            <CheckCircle size={14} className="text-orange-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA */}
                            <div className="px-6 pb-6">
                                <button className={`w-full py-3 font-semibold rounded-lg transition-all duration-300 ${index === 1 ? 'bg-orange-600 text-white hover:shadow-lg' : 'border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                                    }`}>
                                    Book {option.type}
                                </button>
                            </div>

                            {/* Hover Accent */}
                            <div className={`h-1 bg-orange-600 transition-all duration-500 ${hoveredOption === index ? 'w-full' : 'w-0'
                                }`} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Pricing Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="bg-white rounded-2xl border border-orange-200 shadow-sm p-8 mb-12"
                >
                    <h3 className="text-2xl font-bold text-black mb-6 text-center">
                        Complete Pricing Breakdown
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Property Type</th>
                                    <th className="text-center py-3 px-4 font-semibold text-gray-900">Occupancy</th>
                                    <th className="text-right py-3 px-4 font-semibold text-gray-900">Price (per month)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-100">
                                    <td className="py-3 px-4">1BHK (Cohousy 1 & 3)</td>
                                    <td className="text-center py-3 px-4">Single</td>
                                    <td className="text-right py-3 px-4 font-semibold">₹18,000</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-3 px-4">1BHK (Cohousy 1 & 3)</td>
                                    <td className="text-center py-3 px-4">Double</td>
                                    <td className="text-right py-3 px-4 font-semibold">₹10,000</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-3 px-4">1RK (Cohousy 2)</td>
                                    <td className="text-center py-3 px-4">Single</td>
                                    <td className="text-right py-3 px-4 font-semibold">₹18,000</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-3 px-4">1RK (Cohousy 2)</td>
                                    <td className="text-center py-3 px-4">Double</td>
                                    <td className="text-right py-3 px-4 font-semibold">₹10,000</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4">Common Rooms (33 rooms)</td>
                                    <td className="text-center py-3 px-4">Single/Double</td>
                                    <td className="text-right py-3 px-4 font-semibold text-orange-600">Contact for rates</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-center text-gray-600 mt-4">
                        Short-term CohousyStay options also available for flexible stays
                    </p>
                </motion.div>

                {/* What's Included */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="bg-white rounded-2xl border border-orange-200 p-8"
                >
                    <h3 className="text-2xl font-bold text-black mb-6 text-center">
                        What's Included in Every Package
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {inclusiveFeatures.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <CheckCircle size={16} className="text-orange-600 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <p className="text-gray-600 mb-4">
                            Includes meals, Wi-Fi, housekeeping—no hidden fees. Better value than competitors!
                        </p>

                        {/* Single Room CTA */}
                        <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 mb-4">
                            <h4 className="font-semibold text-purple-600 mb-2">
                                🏠 Want Complete Privacy? Check Our Single Rooms!
                            </h4>
                            <p className="text-sm text-gray-600 mb-3">
                                Discover our luxury single room PG options with 100% privacy, AC, and attached bathrooms
                            </p>
                            <Link
                                href="/single-room-pg-kharadi"
                                className="inline-block px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300"
                            >
                                Explore Single Room PG →
                            </Link>
                        </div>

                        <button className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                            Check Room Availability
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}