'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Calendar, MapPin, Download, Star, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'
import ContactFormDialog from '../ContactFormDialog'

const quickStats = [
    { icon: Clock, value: '5 Min', label: 'Walk to Eon IT Park' },
    { icon: Star, value: '4.8★', label: 'Resident Rating' },
    { icon: MapPin, value: '#1', label: 'Location in Kharadi' }
]

const relatedPages = [
    {
        title: 'Ladies PG in Kharadi Pune',
        subtitle: 'Safe Accommodation for Women',
        href: '/ladies-pg-kharadi',
        color: 'pink'
    },
    {
        title: 'Male PG in Kharadi Pune',
        subtitle: 'Comfortable Boys Accommodation',
        href: '/male-pg-kharadi',
        color: 'blue'
    },
    {
        title: 'Co-living Spaces in Kharadi',
        subtitle: 'Modern Shared Living',
        href: '/co-living',
        color: 'purple'
    }
]

export default function BookNowCTA() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: "-10%" })

    return (
        <section
            ref={containerRef}
            className="py-section bg-white relative overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/skyline.avif"
                    alt="Book PG near Eon IT Park Kharadi walking distance accommodation"
                    fill
                    className="object-cover opacity-5"
                    sizes="100vw"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Main CTA Section */}
                <motion.div
                    variants={withMotion(staggerContainer)}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-16"
                >
                    <motion.div
                        variants={withMotion(fadeInUp)}
                        className="mb-8"
                    >
                        <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-orange-50 border border-orange-100 rounded-full shadow-sm mb-6">
                            <span className="w-2 h-2 bg-orange-600 rounded-full inline-block mr-2 animate-pulse" />
                            BOOK YOUR WALKING DISTANCE PG TODAY
                        </span>

                        <h2 className="text-display-lg font-bold text-black mb-6">
                            Book Your PG near
                            <span className="text-orange-600"> Eon IT Park Kharadi Today</span>
                        </h2>

                        <p className="text-xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto mb-8">
                            Don't settle for less—experience convenient, secure PG near Eon IT Park Kharadi with Cohousy.
                            Limited spots available for professionals seeking the ultimate work-life balance.
                            Save on your commute time and costs while living just minutes from your workplace!
                        </p>
                    </motion.div>

                    {/* Primary CTA Buttons */}
                    <motion.div
                        variants={withMotion(fadeInUp)}
                        className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
                    >
                        <ContactFormDialog
                            title="Schedule a Visit"
                            description="Book a visit to see the property in person."
                            serviceType="Schedule Visit"
                            trigger={
                                <div className='flex justify-center'>
                                    <button className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 w-fit transition-colors text-sm">
                                        Schedule Visit
                                    </button>
                                </div>
                            }
                        />

                        <button className="group relative px-12 py-4 border-3 border-orange-600 text-orange-600 font-bold text-lg rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                            <Phone size={20} className="inline mr-3" />
                            Call for Location Tour
                        </button>
                    </motion.div>

                    {/* Quick Stats */}
                    <motion.div
                        variants={withMotion(fadeInUp)}
                        className="flex flex-col sm:flex-row gap-8 justify-center mb-12"
                    >
                        {quickStats.map((stat, index) => {
                            const IconComponent = stat.icon
                            return (
                                <div key={index} className="flex items-center justify-center gap-3">
                                    <IconComponent size={24} className="text-orange-600" />
                                    <div>
                                        <div className="font-bold text-black">{stat.value}</div>
                                        <div className="text-sm text-gray-600">{stat.label}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </motion.div>

                    {/* Special Offer */}
                    <motion.div
                        variants={withMotion(fadeInUp)}
                        className="inline-block p-4 bg-green-50 border border-green-100 rounded-xl"
                    >
                        <p className="text-green-700 font-semibold">
                            🚀 Location Special: Zero brokerage + First month discount for Eon IT Park professionals!
                        </p>
                    </motion.div>
                </motion.div>

                {/* Contact Options */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
                >
                    {/* Call Option */}
                    <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Phone size={32} className="text-green-600" />
                        </div>
                        <h3 className="text-lg font-bold text-black mb-2">Call & Book</h3>
                        <p className="text-sm text-gray-600 mb-4">Direct booking assistance</p>
                        <button className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300">
                            📞 Call Now
                        </button>
                    </div>

                    {/* WhatsApp Option */}
                    <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">💬</span>
                        </div>
                        <h3 className="text-lg font-bold text-black mb-2">WhatsApp</h3>
                        <p className="text-sm text-gray-600 mb-4">Quick queries & booking</p>
                        <button className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300">
                            Message Us
                        </button>
                    </div>

                    {/* Virtual Tour Option */}
                    <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">🏠</span>
                        </div>
                        <h3 className="text-lg font-bold text-black mb-2">Virtual Tour</h3>
                        <p className="text-sm text-gray-600 mb-4">Explore rooms online</p>
                        <button className="w-full py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300">
                            Start Tour
                        </button>
                    </div>

                    {/* App Download Option */}
                    <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 text-center">
                        <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Download size={32} className="text-orange-600" />
                        </div>
                        <h3 className="text-lg font-bold text-black mb-2">Download App</h3>
                        <p className="text-sm text-gray-600 mb-4">Book & manage digitally</p>
                        <button className="w-full py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-all duration-300">
                            Get App
                        </button>
                    </div>
                </motion.div>

                {/* Related Pages */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mb-16"
                >
                    <h3 className="text-2xl font-bold text-black mb-8 text-center">
                        Also Check Our Specialized Options
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Add Single Room Option */}
                        <Link
                            href="/single-room-pg-kharadi"
                            className="block p-6 bg-purple-50 border border-purple-100 rounded-xl hover:border-purple-200 transition-all duration-300 hover:shadow-sm"
                        >
                            <h4 className="text-lg font-bold text-purple-600 mb-2">
                                Single Room PG in Kharadi
                            </h4>
                            <p className="text-gray-600 text-sm mb-3">
                                Complete privacy with luxury amenities
                            </p>
                            <div className="text-purple-600 text-sm font-semibold">
                                100% Private Rooms →
                            </div>
                        </Link>

                        {relatedPages.map((page, index) => (
                            <Link
                                key={index}
                                href={page.href}
                                className={`block p-6 bg-${page.color}-50 border border-${page.color}-100 rounded-xl hover:border-${page.color}-200 transition-all duration-300 hover:shadow-sm`}
                            >
                                <h4 className={`text-lg font-bold text-${page.color}-600 mb-2`}>
                                    {page.title}
                                </h4>
                                <p className="text-gray-600 text-sm mb-3">
                                    {page.subtitle}
                                </p>
                                <div className={`text-${page.color}-600 text-sm font-semibold`}>
                                    Explore Options →
                                </div>
                            </Link>
                        ))}
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1.0, duration: 0.8 }}
                    className="text-center p-8 bg-orange-50 rounded-2xl border border-orange-200"
                >
                    <h3 className="text-2xl font-bold text-black mb-4">
                        Save Hours Daily with Perfect Location
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Join hundreds of professionals who chose convenience over compromise.
                        Limited spots available - secure your walking distance PG today!
                    </p>
                    <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-6">
                        <span>✓ 5-Minute Walk to Work</span>
                        <span>✓ All-Inclusive Pricing</span>
                        <span>✓ Zero Brokerage</span>
                        <span>✓ Digital Experience</span>
                    </div>
                    <button className="px-12 py-4 bg-orange-600 text-white font-bold text-lg rounded-lg hover:shadow-xl transition-all duration-300">
                        🚀 Book Your Spot Now - Save on First Month!
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
