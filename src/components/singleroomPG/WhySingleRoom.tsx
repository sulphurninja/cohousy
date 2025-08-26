'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Home, Clock, Users, Wifi, Shield, Coffee } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const benefits = [
    {
        icon: Home,
        title: 'True Independence & Privacy',
        description: 'Unlike shared setups, single occupancy provides complete independence. Your own space for work, relaxation, and personal time without interruptions.',
        highlight: 'Complete personal sanctuary'
    },
    {
        icon: Clock,
        title: 'Easy Commutes & Time Savings',
        description: 'Strategic location near Eon IT Park means easy commutes and more time for yourself. Walk to work and save on transport costs.',
        highlight: 'Save hours daily on travel'
    },
    {
        icon: Users,
        title: 'Perfect for Hybrid Workers',
        description: 'Our single room PG near Eon IT Park Kharadi caters to hybrid workers. Enjoy privacy while accessing community perks like gyms and events.',
        highlight: 'Work-from-home friendly'
    },
    {
        icon: Wifi,
        title: 'Quiet Space for Productivity',
        description: 'Professionals who need quiet space for work or relaxation find single rooms ideal. Uninterrupted environment for maximum focus.',
        highlight: 'Distraction-free workspace'
    },
    {
        icon: Shield,
        title: 'Enhanced Safety & Security',
        description: 'Single rooms offer better security with private access and controlled entry. Perfect for professionals working late hours.',
        highlight: 'Personal security priority'
    },
    {
        icon: Coffee,
        title: 'Premium Lifestyle Experience',
        description: 'Enjoy hotel-like amenities with the comfort of home. AC rooms, attached bathrooms, and housekeeping for luxury living.',
        highlight: 'Luxury meets convenience'
    }
]

export default function WhySingleRoom() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: "-10%" })
    const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null)

    return (
        <section
            ref={containerRef}
            className="py-section bg-purple-50 relative overflow-hidden"
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
                        <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-white border border-purple-200 rounded-full shadow-sm">
                            <Home size={16} className="inline mr-2 text-purple-600" />
                            WHY CHOOSE SINGLE ROOM
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={withMotion(fadeInUp)}
                        className="text-display-lg font-bold text-black mb-6"
                    >
                        Why Opt for Single Room PG in
                        <span className="text-purple-600"> Kharadi Near Eon IT Park</span>
                    </motion.h2>

                    <motion.p
                        variants={withMotion(fadeInUp)}
                        className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto"
                    >
                        Kharadi stands out as Pune's premier IT hub, home to Eon IT Park and numerous tech companies.
                        Choosing a single room PG in Kharadi Pune means easy commutes and more time for yourself.
                        This option suits professionals who need quiet space for work or relaxation.
                    </motion.p>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                    variants={withMotion(staggerContainer)}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                >
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon
                        return (
                            <motion.div
                                key={index}
                                variants={withMotion(fadeInUp)}
                                onMouseEnter={() => setHoveredBenefit(index)}
                                onMouseLeave={() => setHoveredBenefit(null)}
                                className="group bg-white border border-purple-100 rounded-2xl p-8 hover:border-purple-200 transition-all duration-500 hover:shadow-lg"
                            >
                                <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center transition-all duration-300 ${hoveredBenefit === index ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-600'
                                    }`}>
                                    <IconComponent size={24} strokeWidth={1.5} />
                                </div>

                                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${hoveredBenefit === index ? 'text-purple-600' : 'text-black'
                                    }`}>
                                    {benefit.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-4">
                                    {benefit.description}
                                </p>

                                <div className="text-sm font-semibold text-purple-600">
                                    {benefit.highlight}
                                </div>

                                <div className={`mt-6 h-0.5 bg-purple-600 transition-all duration-500 ${hoveredBenefit === index ? 'w-full' : 'w-0'
                                    }`} />
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* IT Hub Context */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="bg-white rounded-2xl border border-purple-200 shadow-sm p-8"
                >
                    <h3 className="text-2xl font-bold text-black mb-6 text-center">
                        Perfect for Kharadi's IT Professionals
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-semibold text-green-600 mb-4 flex items-center">
                                <span className="mr-2">🏢</span> Major IT Companies Nearby
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• Eon IT Park - Walking distance to your workplace</li>
                                <li>• WTC Kharadi - Premium business district access</li>
                                <li>• Multiple tech startups and MNCs in vicinity</li>
                                <li>• Easy connectivity to all major IT hubs</li>
                                <li>• Phoenix Marketcity for shopping and dining</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-purple-600 mb-4 flex items-center">
                                <span className="mr-2">🏠</span> Single Room Advantages
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• Complete privacy for work and personal time</li>
                                <li>• No roommate conflicts or schedule adjustments</li>
                                <li>• Quiet environment for video calls and focus</li>
                                <li>• Personal space to unwind after work</li>
                                <li>• Secure storage for valuable items</li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-gray-600 mb-4">
                            Experience the perfect blend of privacy and community in Kharadi's premier location
                        </p>
                        <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                            Book Your Private Room
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}