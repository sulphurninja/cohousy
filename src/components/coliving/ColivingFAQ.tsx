'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const faqs = [
  {
    question: 'Is food included in the rent?',
    answer: 'Yes, we offer daily meals with vegetarian & non-vegetarian options, customizable via the in-app food menu. Our meals are prepared with hygiene standards and cater to diverse preferences of residents from different regions.'
  },
  {
    question: 'Can I book short-term stays?',
    answer: 'Absolutely—perfect for project-based assignments or internships near Kharadi IT Park. We offer flexible stay options ranging from a few days to several months, with competitive rates for short-term residents.'
  },
  {
    question: 'Do you have separate male & female accommodations?',
    answer: 'Yes, we offer gender-specific and mixed co-living options. You can choose from our dedicated Ladies PG sections or Male PG sections, as well as mixed community spaces for professional networking.'
  },
  {
    question: 'What\'s included in the rent?',
    answer: 'Rent covers Wi-Fi, housekeeping, maintenance, utilities, power backup, gym access, and all listed amenities—no surprises. We also include tenant insurance, meals, and access to community events.'
  },
  {
    question: 'How does the app enhance community building?',
    answer: 'Our app facilitates event bookings, chat support, and flexible moves, turning residents into a connected network. You can join wellness sessions, professional workshops, and social events directly through the app.'
  },
  {
    question: 'What is the booking process?',
    answer: 'Our booking process is 100% digital and paperless. Simply download the Cohousy app, complete KYC verification in under 30 seconds, choose your room, and move in hassle-free without any brokerage fees.'
  },
  {
    question: 'Are there any hidden charges?',
    answer: 'No hidden charges at all. Our transparent pricing includes all utilities, amenities, housekeeping, meals, security, and maintenance. What you see is what you pay—no surprise bills or additional costs.'
  },
  {
    question: 'How is the security at Cohousy properties?',
    answer: 'We have comprehensive security with 24/7 CCTV surveillance, trained security guards, biometric access systems, and emergency protocols. All residents undergo background verification for community safety.'
  }
]

export default function ColivingFAQ() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section 
      ref={containerRef}
      className="py-section bg-gray-50 relative overflow-hidden"
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm">
              <HelpCircle size={16} className="inline mr-2 text-accent" />
              FREQUENTLY ASKED QUESTIONS
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Got
            <span className="text-accent"> Questions?</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Find answers to common questions about co-living in Kharadi with Cohousy. 
            Still have questions? Our support team is here to help 24/7.
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
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-sm transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
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

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16 p-8 bg-white rounded-2xl border border-gray-200 shadow-sm"
        >
          <h3 className="text-2xl font-bold text-black mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our support team is available 24/7 via the Cohousy app or phone to help 
            you with any questions about co-living in Kharadi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-accent text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Chat with Support
            </button>
            <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
              Schedule a Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}