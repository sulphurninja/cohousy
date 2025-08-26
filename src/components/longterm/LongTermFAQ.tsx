'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const faqs = [
  {
    question: 'What is the minimum stay duration for long-term rentals?',
    answer: 'Our long-term rentals require a minimum stay of 3 months. We offer increasing discounts for 6-month and 12-month commitments, with the best rates available for annual stays.'
  },
  {
    question: 'Is there a security deposit required?',
    answer: 'For stays of 6 months or longer, we waive the security deposit. For 3-6 month stays, a refundable deposit equivalent to one month\'s rent is required, which is fully refunded upon checkout.'
  },
  {
    question: 'Can I extend my stay or transfer to another property?',
    answer: 'Absolutely! Long-term residents have priority for extensions and can transfer to any other Cohousy property within the network without additional charges, subject to availability.'
  },
  {
    question: 'What happens if I need to terminate early?',
    answer: 'We understand plans change. Early termination is allowed with 30 days notice. A nominal processing fee may apply, but we prioritize flexibility for our long-term residents.'
  },
  {
    question: 'Are utilities and internet included in the rent?',
    answer: 'Yes, all utilities including electricity, water, high-speed Wi-Fi, and maintenance are included. Long-term residents also get access to premium internet plans and priority support.'
  },
  {
    question: 'Can I customize my room for long-term stays?',
    answer: 'Yes! Long-term residents can make reasonable customizations like rearranging furniture, adding personal decor, and requesting specific room features. Our team will work with you to make it feel like home.'
  },
  {
    question: 'What about guest accommodation?',
    answer: 'Long-term residents can host guests with prior approval. We also provide arrangements for visiting family/friends at discounted rates through our guest accommodation program.'
  },
  {
    question: 'Do you provide any storage solutions?',
    answer: 'Yes, long-term residents get additional storage space for personal belongings, seasonal items, and work equipment. This is included in premium and executive plans.'
  }
]

export default function LongTermFAQ() {
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
              LONG-TERM RENTAL FAQ
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Extended Stay
            <span className="text-accent"> Questions</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Everything you need to know about our long-term rental options, 
            policies, and exclusive benefits for extended stay residents.
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

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-black mb-4">
            Need More Information?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our long-term rental specialists are here to help you find the perfect 
            extended stay solution that meets your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-accent text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Talk to Specialist
            </button>
            <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
              Schedule Property Tour
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}