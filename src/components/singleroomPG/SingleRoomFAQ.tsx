'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const faqs = [
  {
    question: 'What makes Cohousy the best PG in Kharadi Pune?',
    answer: 'Our luxury amenities, app features, strategic location near Eon IT Park, and perfect blend of privacy with community set us apart. We offer single rooms with hotel-like amenities, transparent pricing, and 24/7 digital support that traditional PGs simply cannot match.'
  },
  {
    question: 'Is AC included in single room PG pricing?',
    answer: 'Yes, absolutely! All single rooms come with AC for year-round comfort. This addresses the high demand for "AC PG in Kharadi Pune" with premium cooling systems and power backup to ensure uninterrupted comfort.'
  },
  {
    question: 'How close is the PG to Eon IT Park exactly?',
    answer: 'Our properties are within walking distance of Eon IT Park Kharadi. You can literally walk to companies like Barclays, Credit Suisse, Honeywell, and TCS without needing transport, saving time and money daily while reducing commute stress.'
  },
  {
    question: 'Are short-term stays available for professionals?',
    answer: 'Yes, we offer flexible short-term stays through CohousyStay for project assignments, training programs, or job transitions. Perfect for professionals needing temporary accommodation while settling into Kharadi\'s IT ecosystem.'
  },
  {
    question: 'Can I book single room PG for female professionals?',
    answer: 'Absolutely! We have dedicated safe spaces for women with enhanced security features, female housekeeping staff, well-lit areas, and women-only sections. Safety and comfort are our top priorities for female professionals.'
  },
  {
    question: 'What companies are easily accessible from your location?',
    answer: 'We\'re strategically located near 50+ IT companies including Eon IT Park (Vodafone, FISGlobal), WTC Kharadi (UBS, Allstate), and various startups. Major companies like Infosys, TCS, Cognizant, and Honeywell are all within easy reach.'
  },
  {
    question: 'How does the Cohousy app enhance single room living?',
    answer: 'Our app provides complete digital experience: 30-second check-in, 24/7 support, digital payments with rewards, complaint tracking, food menu access, and amenity booking. Everything managed from your smartphone for ultimate convenience.'
  },
  {
    question: 'Can I move between different Cohousy properties?',
    answer: 'Yes! Our exclusive tenant membership allows flexible moves between properties. If your job location changes or you want to try different room types, you can transfer easily without losing membership benefits or going through lengthy processes.'
  },
  {
    question: 'What\'s included in the ₹18,000 monthly rent?',
    answer: 'Everything! Your rent includes AC room, attached washroom, high-speed WiFi, daily meals, housekeeping, power backup, gym access, all utilities, security, and 24/7 app support. No hidden charges or surprise bills - completely transparent pricing.'
  }
]

export default function SingleRoomFAQ() {
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-purple-50 border border-purple-100 rounded-full shadow-sm">
              <HelpCircle size={16} className="inline mr-2 text-purple-600" />
              FREQUENTLY ASKED QUESTIONS
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Frequently Asked Questions About
            <span className="text-purple-600"> Single Room PG in Kharadi</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Get answers to the most important questions about our single room PG accommodation in Kharadi Pune. 
            We address concerns about privacy, amenities, location, safety, and all aspects of luxury single room living.
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
              className="bg-purple-50 border border-purple-100 rounded-2xl overflow-hidden hover:shadow-sm transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-purple-100 transition-colors duration-300"
              >
                <span className="font-semibold text-black pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {activeIndex === index ? (
                    <Minus size={20} className="text-purple-600" />
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

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16 p-8 bg-purple-50 rounded-2xl border border-purple-200"
        >
          <h3 className="text-2xl font-bold text-black mb-4">
            Still Have Questions About Single Room Living?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our support team understands the specific needs of professionals seeking private accommodation 
            in Kharadi's IT corridor. We're available 24/7 to help with any queries about our single room 
            PG options, amenities, and booking process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Chat with Single Room Residents
            </button>
            <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300">
              Schedule Private Room Tour
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}