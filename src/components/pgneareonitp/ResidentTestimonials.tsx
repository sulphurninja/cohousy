'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const testimonials = [
  {
    name: 'Amit R.',
    role: 'Engineer at TCS',
    location: 'From Rajasthan, Living since 8 months',
    rating: 5,
    text: 'Cohousy\'s PG near Eon IT Park Kharadi saved me hours on commutes—the app and amenities are game-changers! The 5-minute walk to work gives me so much more time for fitness and personal projects. The community here is amazing.',
    highlight: 'Time-saving location benefits'
  },
  {
    name: 'Sneha P.',
    role: 'Project Manager at Credit Suisse',
    location: 'From Maharashtra, Living since 1 year',
    rating: 5,
    text: 'Safe, convenient, and community-focused—perfect for women working at Credit Suisse. The digital app makes everything so easy, from paying rent to booking amenities. I feel secure and supported here.',
    highlight: 'Safe & convenient for professionals'
  },
  {
    name: 'Rajesh K.',
    role: 'Software Developer at Honeywell',
    location: 'From Karnataka, Living since 6 months',
    rating: 5,
    text: 'The proximity to Eon IT Park is unbeatable. I can literally walk to work in 5 minutes, which saves me money and stress. The amenities are top-notch, especially the gym and high-speed Wi-Fi for my side projects.',
    highlight: 'Unbeatable proximity to workplace'
  },
  {
    name: 'Priya M.',
    role: 'Business Analyst at Barclays',
    location: 'From Gujarat, Living since 10 months',
    rating: 5,
    text: 'Moving to Kharadi was daunting, but Cohousy made it seamless. The all-inclusive pricing with no hidden charges is refreshing. The community events help me network with other professionals in the area.',
    highlight: 'Seamless transition experience'
  },
  {
    name: 'Vikram S.',
    role: 'DevOps Engineer at Synechron',
    location: 'From UP, Living since 4 months',
    rating: 5,
    text: 'The digital experience is fantastic - everything from check-in to maintenance requests is handled through the app. The location near WTC means I have great dining and shopping options within walking distance.',
    highlight: 'Outstanding digital experience'
  },
  {
    name: 'Kavitha R.',
    role: 'Data Scientist at FISGlobal',
    location: 'From Tamil Nadu, Living since 7 months',
    rating: 5,
    text: 'As someone who values both community and privacy, Cohousy strikes the perfect balance. The single room gives me space to work, while common areas let me connect with fellow IT professionals when I want to socialize.',
    highlight: 'Perfect work-life balance'
  }
]

export default function ResidentTestimonials() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const activeTestimonial = testimonials[activeIndex]

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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-orange-50 border border-orange-100 rounded-full shadow-sm">
              <Star size={16} className="inline mr-2 text-orange-600" />
              HEAR FROM OUR RESIDENTS
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            What IT Professionals Say About
            <span className="text-orange-600"> Our Location</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Real experiences from professionals who chose our PG near Eon IT Park Kharadi. 
            Their stories highlight the convenience, community, and quality that make 
            Cohousy the preferred choice for IT professionals.
          </motion.p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-orange-50 rounded-2xl border border-orange-200 shadow-lg p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              
              {/* Quote Content */}
              <div className="flex-1">
                <Quote size={32} className="text-orange-600 mb-4" />
                <p className="text-xl leading-relaxed text-gray-700 mb-6">
                  {activeTestimonial.text}
                </p>
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-6">
                  {activeTestimonial.highlight}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-bold text-black text-lg">{activeTestimonial.name}</h3>
                    <p className="text-orange-600 font-medium mb-1">{activeTestimonial.role}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin size={14} className="mr-1" />
                      {activeTestimonial.location}
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 mt-3 sm:mt-0">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-orange-600 text-orange-600" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white border border-orange-200 rounded-full hover:bg-orange-50 hover:border-orange-600 transition-all duration-300"
            >
              <ChevronLeft size={20} className="text-orange-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-orange-600 w-6' : 'bg-orange-200'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-white border border-orange-200 rounded-full hover:bg-orange-50 hover:border-orange-600 transition-all duration-300"
            >
              <ChevronRight size={20} className="text-orange-600" />
            </button>
          </div>
        </motion.div>

        {/* Testimonial Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-orange-50 rounded-xl border border-orange-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">4.8★</div>
            <div className="text-sm font-semibold text-black">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-xl border border-orange-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-sm font-semibold text-black">Happy Residents</div>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-xl border border-orange-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
            <div className="text-sm font-semibold text-black">Recommend Us</div>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-xl border border-orange-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-sm font-semibold text-black">Partner Companies</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}