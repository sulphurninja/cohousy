'use client'

import { motion, useInView } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Quote, Star, ChevronLeft, ChevronRight, User } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'
import ContactFormDialog from './ContactFormDialog'

const testimonials = [
  {
    quote: "Cohousy's location near Eon IT Park is unbeatable. The app makes everything seamless—from booking to daily services. It's exactly what modern professionals need.",
    author: "Priya Sharma",
    role: "Senior Software Engineer",
    company: "TCS",
    rating: 5,
    location: "Cohousy Eon",
    duration: "Living here for 8 months"
  },
  {
    quote: "The community aspect is what sets Cohousy apart. I've made genuine connections with fellow professionals, and the safety standards are exceptional for women.",
    author: "Rahul Kumar",
    role: "Product Manager",
    company: "Infosys",
    rating: 5,
    location: "Cohousy WTC",
    duration: "Living here for 1 year"
  },
  {
    quote: "From the premium amenities to the strategic location, everything exceeds expectations. The digital-first approach makes daily life incredibly convenient.",
    author: "Anjali Mehta",
    role: "Business Analyst",
    company: "Cognizant",
    rating: 5,
    location: "Cohousy Metro",
    duration: "Living here for 6 months"
  },
  {
    quote: "The transparency in pricing and the quality of service is remarkable. No hidden costs, premium facilities, and excellent connectivity to IT parks.",
    author: "Arjun Patel",
    role: "DevOps Engineer",
    company: "Microsoft",
    rating: 5,
    location: "Cohousy Eon",
    duration: "Living here for 10 months"
  }
]

const stats = [
  { value: '500+', label: 'Happy Residents' },
  { value: '4.8/5', label: 'Average Rating' },
  { value: '95%', label: 'Renewal Rate' },
  { value: '24/7', label: 'Support Available' }
]

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      ref={containerRef}
      className="py-section bg-gray-50 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative">

        {/* Clean Section Header */}
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm">
              <Star size={16} className="inline mr-2 text-amber-500" />
              RESIDENT TESTIMONIALS
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Trusted by
            <span className="text-accent"> Professionals</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Discover why IT professionals choose Cohousy for their living experience
            in Kharadi's premier locations.
          </motion.p>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
          >
            <div className="p-8 md:p-12">
              <div className="flex items-start justify-between mb-8">
                <Quote size={48} className="text-accent/20 flex-shrink-0" />
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-amber-400 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 font-medium mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <User size={32} className="text-gray-400" />
                  </div>
                  <div>
                    <div className="font-bold text-black text-lg">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </div>
                    <div className="text-accent text-sm font-medium">
                      {testimonials[currentIndex].location}
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-0 text-right">
                  <div className="text-sm text-gray-500">
                    {testimonials[currentIndex].duration}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 gap-6">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white border border-gray-200 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>

            {/* Progress Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-accent' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-white border border-gray-200 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* All Testimonials Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.quote.substring(0, 120)}..."
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-black text-sm">{testimonial.author}</div>
                  <div className="text-xs text-gray-500">{testimonial.role}</div>
                </div>
                <div className="text-xs text-accent font-medium">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16 p-8 bg-white rounded-2xl border border-gray-200 shadow-sm"
        >
          <h3 className="text-2xl font-bold text-black mb-4">
            Ready to Join Our Community?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Experience what makes Cohousy the preferred choice for IT professionals
            in Kharadi's premium locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
              Read All Reviews
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
