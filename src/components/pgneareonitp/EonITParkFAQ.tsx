'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const faqs = [
  {
    question: 'Is food included in the PG near Eon IT Park?',
    answer: 'Yes, absolutely! Daily vegetarian and non-vegetarian meal options are included in your rent. You can check the daily menu through our app and even provide feedback on food quality. We accommodate dietary preferences and restrictions.'
  },
  {
    question: 'Are short-term stays available for internships or project assignments?',
    answer: 'Yes, we offer flexible short-term stays through CohousyStay for internships, training programs, or temporary assignments. This is perfect for students from Symbiosis International University or professionals on short-term projects at Eon IT Park companies.'
  },
  {
    question: 'Do you have gender-specific PG options near Eon IT Park?',
    answer: 'Absolutely! We offer specialized accommodations: Ladies PG in Kharadi for women professionals with enhanced safety features, and Male PG for men with brotherhood-focused community. Both are within walking distance of Eon IT Park.'
  },
  {
    question: 'What exactly is included in the rent amount?',
    answer: 'Everything! Your rent includes all amenities, utilities, Wi-Fi, housekeeping, meals, power backup, gym access, common area usage, and 24/7 app support. No hidden charges or brokerage fees—completely transparent pricing.'
  },
  {
    question: 'How close is the PG to Eon IT Park exactly?',
    answer: 'Our PG is just 5-10 minutes walking distance from Eon IT Park Kharadi. You can literally walk to companies like Barclays, Credit Suisse, Honeywell, and TCS without needing any transport, saving time and money daily.'
  },
  {
    question: 'What companies are near your PG location?',
    answer: 'We\'re strategically located near 50+ IT companies including Eon IT Park (Barclays, Credit Suisse, Eaton, Synechron), WTC Kharadi (UBS, Allstate, TCS), Gera Commerzone (Honeywell, Tata Technologies), and many startups in the Kharadi IT ecosystem.'
  },
  {
    question: 'How does the Cohousy app help with daily living?',
    answer: 'Our tenant smart app provides 100% digital experience: instant check-in, 24/7 property captain support, complaint tracking, digital payments with rewards, food menu access, amenity booking, and exclusive tenant membership benefits. Everything managed from your phone!'
  },
  {
    question: 'Can I move between different Cohousy properties?',
    answer: 'Yes! Our exclusive tenant membership allows flexible moves between Cohousy properties. This is ideal if your job location changes within Kharadi or Pune, or if you want to try different room types without losing your membership benefits.'
  },
  {
    question: 'What makes your location better than other PGs in Kharadi?',
    answer: 'Our strategic positioning offers unmatched proximity to major IT hubs, saving 2-3 hours daily on commutes. Plus, we provide all-inclusive transparent pricing, 24/7 digital support, modern amenities, and a thriving professional community—all within walking distance of your workplace.'
  }
]

export default function EonITParkFAQ() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section 
      ref={containerRef}
      className="py-section bg-orange-50 relative overflow-hidden"
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-white border border-orange-200 rounded-full shadow-sm">
              <HelpCircle size={16} className="inline mr-2 text-orange-600" />
              FREQUENTLY ASKED QUESTIONS
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            FAQs About PG near
            <span className="text-orange-600"> Eon IT Park Kharadi</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Get answers to the most important questions about our PG accommodation near Eon IT Park. 
            We understand the specific needs of IT professionals and address all concerns about 
            location, amenities, community, and convenience.
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
              className="bg-white border border-orange-100 rounded-2xl overflow-hidden hover:shadow-sm transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-orange-50 transition-colors duration-300"
              >
                <span className="font-semibold text-black pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {activeIndex === index ? (
                    <Minus size={20} className="text-orange-600" />
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
          className="text-center mt-16 p-8 bg-white rounded-2xl border border-orange-200"
        >
          <h3 className="text-2xl font-bold text-black mb-4">
            Still Have Questions About Our Location?
          </h3>
       <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our support team understands the specific location advantages and needs of 
            professionals working at Eon IT Park and nearby companies. We're available 
            24/7 to help with any queries about proximity, transport, and convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Chat with Current Residents
            </button>
            <button className="px-8 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-300">
              Schedule Location Visit
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}