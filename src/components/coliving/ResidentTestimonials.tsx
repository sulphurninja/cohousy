'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const testimonials = [
  {
    name: 'Priya S.',
    role: 'IT Professional',
    company: 'Eon IT Park Kharadi',
    rating: 5,
    text: 'Cohousy gave me the perfect blend of privacy and community. The location is unbeatable, and the amenities are top-notch. The app makes everything so easy—I\'ve made great friends through the events!',
    image: '/Co-living/Testimonial 1.jpg'
  },
  {
    name: 'Rahul K.',
    role: 'Software Engineer',
    company: 'Synechron',
    rating: 5,
    text: 'As a newcomer to Pune, Cohousy\'s co-living in Kharadi helped me settle quickly. The security and proximity to WTC made it a no-brainer. The community events helped me network professionally too.',
    image: '/Co-living/Testimonial 2.jpg'
  },
  {
    name: 'Sneha M.',
    role: 'Product Manager',
    company: 'Tata Communications',
    rating: 5,
    text: 'The digital-first approach is exactly what I needed. From booking to payments, everything is seamless. The housekeeping and meal services save me so much time to focus on my career.',
    image: '/Co-living/Testimonial 3.jpg'
  },
  {
    name: 'Arjun P.',
    role: 'Data Analyst',
    company: 'UBS',
    rating: 5,
    text: 'Moving from another city was stressful, but Cohousy made it smooth. The 5-minute walk to office is amazing, and the community here feels like family. Best co-living experience in Pune!',
        image: '/Co-living/Testimonial 4.jpg'
  }
]

export default function ResidentTestimonials() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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
              <Star size={16} className="inline mr-2 text-accent" />
              RESIDENT TESTIMONIALS
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Hear from Our
            <span className="text-accent"> Residents</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Real stories from professionals who've found their perfect living experience 
            at Cohousy's co-living spaces in Kharadi near Eon IT Park.
          </motion.p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* Testimonial Content */}
            <div className="p-12 flex flex-col justify-center">
              <Quote size={40} className="text-accent mb-6" />
              
              <blockquote className="text-xl leading-relaxed text-gray-700 mb-6">
                "{testimonials[activeTestimonial].text}"
              </blockquote>

              <div className="flex items-center mb-4">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>

              <div>
                <div className="font-bold text-black text-lg">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[activeTestimonial].role} at {testimonials[activeTestimonial].company}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        activeTestimonial === index ? 'bg-accent' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-lg bg-white border border-gray-200 hover:border-gray-300 transition-colors duration-300"
                  >
                    <ChevronLeft size={20} className="text-gray-600" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-lg bg-white border border-gray-200 hover:border-gray-300 transition-colors duration-300"
                  >
                    <ChevronRight size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Testimonial Image */}
            <div className="relative aspect-[4/5] lg:aspect-auto">
              <Image
                src={testimonials[activeTestimonial].image}
                alt={`${testimonials[activeTestimonial].name} - Cohousy resident`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.div>

        {/* All Testimonials Grid */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={withMotion(fadeInUp)}
              onClick={() => setActiveTestimonial(index)}
              className={`cursor-pointer p-6 rounded-xl border transition-all duration-300 ${
                activeTestimonial === index
                  ? 'border-accent bg-accent/5'
                  : 'border-gray-100 bg-white hover:border-gray-200'
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative w-12 h-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="font-semibold text-black">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.role}</div>
                </div>
              </div>

   <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-sm text-gray-600 line-clamp-3">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Review Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center bg-gray-50 rounded-2xl border border-gray-100 p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">4.9★</div>
              <div className="text-sm text-gray-600 font-medium">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm text-gray-600 font-medium">Happy Residents</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-sm text-gray-600 font-medium">Recommend Cohousy</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}