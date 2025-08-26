'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Software Engineer at Credit Suisse',
    location: 'From Delhi, Living since 8 months',
    image: '/testimonial1.jpg',
    rating: 5,
    text: 'Moving to Pune as a single woman was scary, but Cohousy made it feel like home from day one. The 24/7 female security and women-only environment gave my parents complete peace of mind. The location is perfect - just 5 minutes walk to my office at Eon IT Park!',
    highlight: 'Perfect for professional women'
  },
  {
    name: 'Sneha Patel',
    role: 'Business Analyst at Barclays',
    location: 'From Gujarat, Living since 1 year',
    image: '/testimonial2.jpg',
    rating: 5,
    text: 'What I love most is the supportive community of women here. We have regular networking sessions, and I\'ve made lifelong friendships. The single room with attached washroom gives me the privacy I need, while common areas help me socialize when I want to.',
    highlight: 'Amazing female community'
  },
  {
    name: 'Ananya Reddy',
    role: 'Project Manager at TCS',
    location: 'From Hyderabad, Living since 6 months',
    image: '/testimonial3.jpg',
    rating: 5,
    text: 'The safety features are incredible - panic buttons, family location sharing, and the app makes everything so convenient. My parents get regular safety updates, which keeps them happy. The hygiene standards are exceptional, especially important for women.',
    highlight: 'Outstanding safety measures'
  },
  {
    name: 'Kavya Nair',
    role: 'Data Scientist at Honeywell',
    location: 'From Kerala, Living since 4 months',
    image: '/testimonial4.jpg',
    rating: 5,
    text: 'As someone who values health and fitness, the ladies-only gym hours are fantastic! The healthy meal options and wellness sessions help maintain work-life balance. The location near WTC makes my commute stress-free.',
    highlight: 'Perfect wellness facilities'
  },
  {
    name: 'Ritika Gupta',
    role: 'Marketing Executive at UBS',
    location: 'From Rajasthan, Living since 10 months',
    image: '/testimonial5.jpg',
    rating: 5,
    text: 'The digital experience is seamless - from booking to daily services, everything is on the app. The female property captain is always available for any women-specific concerns. It\'s like having a supportive sister managing everything!',
    highlight: 'Tech-savvy and supportive'
  },
  {
    name: 'Meera Singh',
    role: 'Consultant at Allstate',
    location: 'From Punjab, Living since 7 months',
    image: '/testimonial6.jpg',
    rating: 5,
    text: 'The transparency in pricing and no hidden charges was refreshing. The family connect program where my parents receive safety updates and can video call the property gave them huge confidence in my choice to move here.',
    highlight: 'Transparent and family-friendly'
  }
]

export default function LadiesPGTestimonials() {
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
      className="py-section bg-pink-50 relative overflow-hidden"
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-white border border-pink-200 rounded-full shadow-sm">
              <Star size={16} className="inline mr-2 text-pink-600" />
              WOMEN'S TESTIMONIALS
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            What Professional Women
            <span className="text-pink-600"> Say About Us</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Listen to the experiences of professional women who chose Cohousy as their 
            safe haven in Kharadi. Their stories reflect our commitment to women's safety, 
            comfort, and empowerment.
          </motion.p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-white rounded-2xl border border-pink-200 shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Testimonial Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <Quote size={32} className="text-pink-600 mb-4" />
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    {activeTestimonial.text}
                  </p>
                  <div className="inline-block px-3 py-1 bg-pink-100 text-pink-600 text-sm font-semibold rounded-full">
                    {activeTestimonial.highlight}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-black text-lg">{activeTestimonial.name}</h3>
                    <p className="text-pink-600 font-medium mb-1">{activeTestimonial.role}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin size={14} className="mr-1" />
                      {activeTestimonial.location}
                    </div>
                  </div>

                  <div className="flex items-center space-x-1">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-pink-600 text-pink-600" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Profile Image */}
              <div className="relative aspect-[4/5] lg:aspect-auto">
                <Image
                  src={activeTestimonial.image || '/skyline.avif'}
                  alt={`${activeTestimonial.name} - Professional woman at Cohousy ladies PG`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">4.9★</div>
                    <div className="text-xs text-gray-600">Safety Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white border border-pink-200 rounded-full hover:bg-pink-50 hover:border-pink-600 transition-all duration-300"
            >
              <ChevronLeft size={20} className="text-pink-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-pink-600 w-6' : 'bg-pink-200'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-white border border-pink-200 rounded-full hover:bg-pink-50 hover:border-pink-600 transition-all duration-300"
            >
              <ChevronRight size={20} className="text-pink-600" />
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
          <div className="text-center p-6 bg-white rounded-xl border border-pink-100">
            <div className="text-3xl font-bold text-pink-600 mb-2">250+</div>
            <div className="text-sm font-semibold text-black">Happy Women Residents</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-pink-100">
            <div className="text-3xl font-bold text-pink-600 mb-2">4.9★</div>
            <div className="text-sm font-semibold text-black">Women Safety Rating</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-pink-100">
            <div className="text-3xl font-bold text-pink-600 mb-2">100%</div>
            <div className="text-sm font-semibold text-black">Family Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-pink-100">
            <div className="text-3xl font-bold text-pink-600 mb-2">95%</div>
            <div className="text-sm font-semibold text-black">Renewal Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}