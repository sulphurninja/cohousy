'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Software Engineer at Barclays',
    location: 'From Delhi, Living since 1 year',
    image: '/testimonial1.jpg',
    rating: 5,
    text: 'Moving to Pune for my job at Eon IT Park was stressful, but Cohousy made it incredibly smooth. The 5-minute walk to office saves me so much time and the community here is amazing. I\'ve made great friends who are also in IT, and we often collaborate on projects.',
    highlight: 'Perfect location for IT professionals'
  },
  {
    name: 'Amit Patel',
    role: 'Data Analyst at Credit Suisse',
    location: 'From Gujarat, Living since 8 months',
    image: '/testimonial2.jpg',
    rating: 5,
    text: 'The single room option gave me the privacy I needed while the common areas helped me network with other professionals. The app is incredibly convenient - from paying rent to booking gym slots, everything is digital. The pricing is transparent with no hidden costs.',
    highlight: 'Great value and transparency'
  },
  {
    name: 'Vikash Kumar',
    role: 'Project Manager at TCS',
    location: 'From Bihar, Living since 6 months',
    image: '/testimonial3.jpg',
    rating: 5,
    text: 'What I love most is the professional environment. Everyone here is career-focused and supportive. The amenities are top-notch - high-speed Wi-Fi is perfect for my work from home days, and the gym helps me stay fit despite long work hours.',
    highlight: 'Professional environment'
  },
  {
    name: 'Arjun Reddy',
    role: 'DevOps Engineer at Honeywell',
    location: 'From Hyderabad, Living since 10 months',
    image: '/testimonial4.jpg',
    rating: 5,
    text: 'The community aspect is fantastic. We have weekend badminton sessions and gaming tournaments that help us unwind. The location near WTC is perfect, and the food quality is consistently good. It truly feels like a home away from home.',
    highlight: 'Amazing community vibes'
  },
  {
    name: 'Karan Singh',
    role: 'Business Analyst at UBS',
    location: 'From Rajasthan, Living since 5 months',
    image: '/testimonial5.jpg',
    rating: 5,
    text: 'The digital experience through the app is brilliant. 24/7 property captain support has helped me multiple times, especially during my initial days. The shared spaces are well-maintained and the male-only environment creates a comfortable brotherhood.',
    highlight: 'Excellent digital support'
  },
  {
    name: 'Mayank Agarwal',
    role: 'Full Stack Developer at Synechron',
    location: 'From MP, Living since 9 months',
    image: '/testimonial6.jpg',
    rating: 5,
    text: 'Coming from a smaller city, I was worried about finding good accommodation in Pune. Cohousy exceeded my expectations with its modern facilities and prime location. The networking opportunities here have actually helped my career growth significantly.',
    highlight: 'Career growth support'
  }
]

export default function MalePGTestimonials() {
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
      className="py-section bg-blue-50 relative overflow-hidden"
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-white border border-blue-200 rounded-full shadow-sm">
              <Star size={16} className="inline mr-2 text-blue-600" />
              RESIDENT TESTIMONIALS
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            What IT Professionals
            <span className="text-blue-600"> Say About Us</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Listen to the experiences of IT professionals who chose Cohousy as their home in Kharadi. 
            Their stories reflect our commitment to providing the best male PG experience for working professionals.
          </motion.p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-white rounded-2xl border border-blue-200 shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Testimonial Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <Quote size={32} className="text-blue-600 mb-4" />
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    {activeTestimonial.text}
                  </p>
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                    {activeTestimonial.highlight}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-black text-lg">{activeTestimonial.name}</h3>
                    <p className="text-blue-600 font-medium mb-1">{activeTestimonial.role}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin size={14} className="mr-1" />
                      {activeTestimonial.location}
                    </div>
                  </div>

                  <div className="flex items-center space-x-1">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-blue-600 text-blue-600" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Profile Image */}
              <div className="relative aspect-[4/5] lg:aspect-auto">
                <Image
                  src={activeTestimonial.image || '/skyline.avif'}
                  alt={`${activeTestimonial.name} - IT professional at Cohousy male PG`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">4.8★</div>
                    <div className="text-xs text-gray-600">Professional Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white border border-blue-200 rounded-full hover:bg-blue-50 hover:border-blue-600 transition-all duration-300"
            >
              <ChevronLeft size={20} className="text-blue-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-blue-600 w-6' : 'bg-blue-200'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-white border border-blue-200 rounded-full hover:bg-blue-50 hover:border-blue-600 transition-all duration-300"
            >
              <ChevronRight size={20} className="text-blue-600" />
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
          <div className="text-center p-6 bg-white rounded-xl border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-sm font-semibold text-black">Male Professionals</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.8★</div>
            <div className="text-sm font-semibold text-black">Professional Rating</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
            <div className="text-sm font-semibold text-black">Renewal Rate</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-sm font-semibold text-black">Companies Nearby</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}