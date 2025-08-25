'use client'

import { useState, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const faqs = [
  {
    question: "What amenities are included in the accommodation?",
    answer: "All packages include high-speed Wi-Fi, daily housekeeping, gym access, common kitchen facilities, 24/7 security with CCTV, laundry services, and power backup. Premium locations also offer concierge services and rooftop lounges."
  },
  {
    question: "How close are the properties to Eon IT Park?",
    answer: "Our properties are strategically located within 2-5 minutes walking distance from Eon IT Park, home to major companies like TCS, Infosys, Cognizant, and Credit Suisse. This ensures minimal commute time for IT professionals."
  },
  {
    question: "Do you offer separate accommodations for men and women?",
    answer: "Yes, we provide dedicated floors and properties for male, female, and co-ed accommodations. All female sections have enhanced security measures including biometric access and dedicated staff."
  },
  {
    question: "How does the booking process work?",
    answer: "Simply download the Cohousy app, complete your digital KYC verification, browse available rooms with virtual tours, and book instantly. The entire process is paperless and takes under 5 minutes with immediate confirmation."
  },
  {
    question: "What are the minimum stay requirements?",
    answer: "We offer flexible stay options: daily stays from 1 night for business travelers, monthly packages for professionals, and long-term rentals with 3-month minimum stays. All options include flexible exit policies."
  },
  {
    question: "Are meal plans available?",
    answer: "Yes, we offer flexible meal plans through our in-app ordering system. Choose from daily meal plans, à la carte options, or use our fully equipped common kitchens. All meals are prepared fresh with dietary preferences accommodated."
  },
  {
    question: "What makes Cohousy different from other PG providers?",
    answer: "Our unique combination of strategic IT park locations, comprehensive mobile app, transparent pricing with zero brokerage, premium amenities, and strong community focus sets us apart from traditional PG providers."
  },
  {
    question: "Is there parking available?",
    answer: "Yes, all our properties offer dedicated parking spaces for residents. We also provide electric vehicle charging stations at select locations and secure bike parking areas."
  }
]

export default function FAQSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const headerY = useTransform(scrollYProgress, [0, 0.3], [50, -50])

  const handleClick = (index: number) => {
    console.log('FAQ clicked:', index, 'Current open:', openIndex)
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section 
      ref={containerRef}
      className="py-section bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div
          style={{ y: headerY }}
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
              <HelpCircle size={16} className="inline mr-2" />
              FREQUENTLY ASKED QUESTIONS
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Questions &
            <span className="text-accent"> Answers</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Find answers to common questions about our co-living spaces and accommodation 
            options in Kharadi's tech hub.
          </motion.p>
        </motion.div>

        {/* FAQ Items - Completely Basic */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'border-accent bg-accent/5' : 'border-gray-200 bg-white'
              }`}
            >
              {/* Question Button */}
              <div
                onClick={() => handleClick(index)}
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleClick(index)
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`text-lg font-semibold pr-4 ${
                    openIndex === index ? 'text-accent' : 'text-black'
                  }`}>
                    {faq.question}
                  </h3>
                  
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                    openIndex === index ? 'bg-accent text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {openIndex === index ? (
                      <Minus size={18} strokeWidth={2} />
                    ) : (
                      <Plus size={18} strokeWidth={2} />
                    )}
                  </div>
                </div>
              </div>

              {/* Answer - Simple conditional rendering */}
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Debug Info */}
        {/* <div className="max-w-4xl mx-auto mt-8 p-4 bg-gray-100 rounded-lg text-sm">
          <strong>Debug Info:</strong> Currently open FAQ: {openIndex !== null ? openIndex : 'None'}
        </div> */}

        {/* Contact Support Section */}
        <div className="mt-16 text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
          <h3 className="text-2xl font-bold text-black mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our dedicated support team is available 24/7 to assist you with any queries 
            about our co-living spaces and booking process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-accent text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Contact Support
            </button>
            <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
              Schedule Call
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}