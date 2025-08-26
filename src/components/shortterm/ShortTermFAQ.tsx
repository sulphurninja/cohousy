'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const faqs = [
  {
    question: 'What is the minimum stay duration for short-term rentals?',
    answer: 'There is no minimum stay requirement! You can book for as little as one night. However, we offer better rates for weekly and monthly stays to help you save more on extended visits.'
  },
  {
    question: 'Can I book same-day accommodation?',
    answer: 'Yes! Subject to availability, we offer same-day bookings. You can check availability and book through our app or by calling our 24/7 support team. We recommend booking in advance during peak seasons.'
  },
  {
    question: 'What is included in the short-term rental price?',
    answer: 'Everything! Your stay includes fully furnished accommodation, all meals (breakfast, lunch, dinner), high-speed Wi-Fi, housekeeping, power backup, security, and access to all amenities like gym and common areas.'
  },
  {
    question: 'Is there a cancellation policy?',
    answer: 'Yes, we have a flexible cancellation policy. Free cancellation up to 24 hours before check-in for stays under 7 days, and 48 hours for longer stays. Emergency cancellations are handled on a case-by-case basis.'
  },
  {
    question: 'Can I extend my stay if needed?',
    answer: 'Absolutely! You can extend your stay through our app or by contacting support, subject to room availability. Extended stays automatically qualify for better weekly or monthly rates.'
  },
  {
    question: 'Do you provide transportation from airport/railway station?',
    answer: 'We can arrange transportation on request for an additional fee. We also provide detailed directions and nearby public transport options to help you reach our properties easily.'
  },
  {
    question: 'Can I have guests visit during my short-term stay?',
    answer: 'Yes, guests are allowed with prior notification to security. Overnight guests may require approval and could incur additional charges depending on the duration of their stay.'
  },
  {
    question: 'What happens if I need to check out early?',
    answer: 'Early check-out is allowed with 24 hours notice. Refunds for unused nights are processed according to our cancellation policy. We try to be as flexible as possible for genuine emergencies.'
  }
]

export default function ShortTermFAQ() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
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
              <HelpCircle size={16} className="inline mr-2 text-accent" />
              SHORT-TERM RENTAL FAQ
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Flexible Stay
            <span className="text-accent"> Questions</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Get answers to common questions about our flexible short-term accommodation options, 
            booking process, and policies designed for maximum convenience.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={withMotion(fadeInUp)}
              className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-sm transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
              >
                <span className="font-semibold text-black pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {activeIndex === index ? (
                    <Minus size={20} className="text-accent" />
                  ) : (
                    <Plus size={20} className="text-gray-600" />
                  )}
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Booking Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-black mb-4">
            Need Immediate Accommodation?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team is available 24/7 to help with urgent bookings, same-day check-ins, 
            and any special requirements for your short-term stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-accent text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Book Now - 24/7
            </button>
            <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
              Call for Same-day
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}