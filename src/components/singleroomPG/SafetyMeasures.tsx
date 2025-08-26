'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Camera, Users, MapPin, Clock, Heart } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const safetyFeatures = [
    {
        icon: Camera,
        title: '24/7 CCTV & Guards',
        description: '24/7 guards and CCTV cover all areas for comprehensive security monitoring and immediate response to any incidents.',
        category: 'Surveillance'
    },
    {
        icon: Shield,
        title: 'Restricted Access Control',
        description: 'For single room PG for female, restricted access and well-lit paths prioritize safety, aligning with ladies PG trends.',
        category: 'Access Control'
    },
    {
        icon: Users,
        title: 'Male Resident Security',
        description: 'Male residents benefit from the same high security standards with features like secure parking for added convenience.',
        category: 'General Security'
    },
    {
        icon: MapPin,
        title: 'Strategic Location Safety',
        description: 'Location near Eon IT Park minimizes commute risks. Nearby amenities include Phoenix Marketcity for safe shopping.',
        category: 'Location Benefits'
    },
    {
        icon: Clock,
        title: 'App-Managed Safety Events',
        description: 'Build community safely with app-managed events and emergency response features for peace of mind.',
        category: 'Community Safety'
    },
    {
        icon: Heart,
        title: 'Trust & Well-being Focus',
        description: 'Comprehensive approach ensuring both physical safety and mental well-being in Pune\'s IT hub environment.',
        category: 'Holistic Safety'
    }
]

const genderSpecificSafety = {
    female: {
        title: 'Enhanced Safety for Women',
        color: 'pink',
        features: [
            'Women-only floors and sections',
            'Female security personnel during night shifts',
            'Well-lit parking and common areas',
            'Emergency panic buttons in rooms',
            'Ladies-only gym timings',
            'Female housekeeping staff preferences'
        ]
    },
    male: {
        title: 'Security for Male Professionals',
        color: 'blue',
        features: [
            'Secure parking for bikes and cars',
            'Male-focused security protocols',
            '24/7 entry/exit flexibility',
            'Professional networking safety',
            'Gym access with security monitoring',
            'Late-night work support systems'
        ]
    }
}

export default function SafetyMeasures() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: "-10%" })

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
                        <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-red-50 border border-red-100 rounded-full shadow-sm">
                            <Shield size={16} className="inline mr-2 text-red-600" />
                            SAFETY MEASURES
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={withMotion(fadeInUp)}
                        className="text-display-lg font-bold text-black mb-6"
                    >
                        Safety Measures for Ladies PG and
                        <span className="text-red-600"> Male PG in Kharadi</span>
                    </motion.h2>

                    <motion.p
                        variants={withMotion(fadeInUp)}
                        className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto"
                    >
                        Security is non-negotiable in our single room PG in Kharadi Pune. 24/7 guards and CCTV
                        cover all areas. Trust Cohousy for peace in Pune's IT hub with comprehensive safety measures
                        tailored for both male and female professionals.
                    </motion.p>
                </motion.div>

                {/* Safety Features Grid */}
                <motion.div
                    variants={withMotion(staggerContainer)}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                >
                    {safetyFeatures.map((feature, index) => {
                        const IconComponent = feature.icon
                        return (
                            <motion.div
                                key={index}
                                variants={withMotion(fadeInUp)}
                                className="bg-red-50 border border-red-100 rounded-2xl p-6 hover:border-red-200 transition-colors duration-300"
                            >
                                <div className="w-12 h-12 bg-red-100 rounded-xl mb-4 flex items-center justify-center">
                                    <IconComponent size={24} className="text-red-600" strokeWidth={1.5} />
                                </div>

                                <div className="mb-2 text-xs uppercase tracking-wide text-red-600 font-semibold">
                                    {feature.category}
                                </div>

                                <h3 className="text-lg font-bold text-black mb-3">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* Gender-Specific Safety */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
                >
                    {/* Female Safety */}
                    <div className="bg-pink-50 rounded-2xl border border-pink-200 p-8">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-pink-100 rounded-xl mr-4 flex items-center justify-center">
                                <Users size={24} className="text-pink-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black">
                                {genderSpecificSafety.female.title}
                            </h3>
                        </div>

                        <ul className="space-y-3">
                            {genderSpecificSafety.female.features.map((feature, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <Shield size={16} className="text-pink-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="mt-6 px-6 py-2 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors duration-300">
                            Learn About Ladies PG Safety
                        </button>
                    </div>

                    {/* Male Safety */}
                    <div className="bg-blue-50 rounded-2xl border border-blue-200 p-8">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl mr-4 flex items-center justify-center">
                                <Shield size={24} className="text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black">
                                {genderSpecificSafety.male.title}
                            </h3>
                        </div>

                        <ul className="space-y-3">
                            {genderSpecificSafety.male.features.map((feature, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <Shield size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                            Explore Male PG Security
                        </button>
                    </div>
                </motion.div>

                {/* Safety Visual & Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="bg-gray-50 rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-black mb-6">
                                Comprehensive Safety Approach
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Our location near Eon IT Park minimizes commutes and reduces safety risks.
                                App-managed events help build community safely while maintaining individual security.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-white rounded-xl">
                                    <div className="text-2xl font-bold text-red-600 mb-1">100%</div>
                                    <div className="text-sm text-gray-600">Safety Record</div>
                                </div>
                                <div className="text-center p-4 bg-white rounded-xl">
                                    <div className="text-2xl font-bold text-red-600 mb-1">24/7</div>
                                    <div className="text-sm text-gray-600">Security Coverage</div>
                                </div>
                                <div className="text-center p-4 bg-white rounded-xl">
                                    <div className="text-2xl font-bold text-red-600 mb-1">50+</div>
                                    <div className="text-sm text-gray-600">CCTV Cameras</div>
                                </div>
                                <div className="text-center p-4 bg-white rounded-xl">
                                    <div className="text-2xl font-bold text-red-600 mb-1">0</div>
                                    <div className="text-sm text-gray-600">Security Incidents</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative aspect-video overflow-hidden rounded-xl">
                            <Image
                                src="/skyline.avif"
                                alt="Safe and secure single room PG environment in Kharadi"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />

                            <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-transparent flex items-center">
                                <div className="p-6 text-white">
                                    <h4 className="text-lg font-bold mb-2">Your Safety, Our Priority</h4>
                                    <p className="text-red-100 text-sm">Advanced security systems for peace of mind</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section >
    )
}