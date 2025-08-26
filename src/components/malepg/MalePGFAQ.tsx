'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const faqs = [
  {
    question: 'Is this a completely male-only PG accommodation?',
    answer: 'Yes, absolutely! All Cohousy properties for male PG in Kharadi are exclusively designed for men. All residents are male professionals, ensuring a comfortable and focused environment for working and studying.'
  },
  {
    question: 'What are the room options and pricing for male PG?',
    answer: 'We offer flexible options: Double sharing at ₹10,000/month per person and Single rooms at ₹18,000/month. All prices include meals, Wi-Fi, housekeeping, power backup, and access to all amenities with no hidden charges or brokerage fees.'
  },
  {
    question: 'How close is the PG to major IT companies in Kharadi?',
    answer: 'Our male PG is strategically located just 5 minutes walk from Eon IT Park (Barclays, Credit Suisse, Eaton) and 7 minutes from WTC Kharadi (UBS, Allstate, TCS). This saves significant commute time and transport costs for IT professionals.'
  },
  {
    question: 'What amenities are included in the male PG?',
    answer: 'All amenities are included: High-speed Wi-Fi, 24/7 security, common gym, housekeeping, laundry services, shared kitchen, common fridge, power backup, attached washrooms, parking, and recreational facilities. Perfect for busy professionals.'
  },
  {
    question: 'Can I move between different Cohousy properties?',
    answer: 'Yes! Our exclusive tenant membership allows flexible moves between Cohousy properties. This is ideal if your job location changes within Kharadi or if you want to try different room types without losing your membership benefits.'
  },
  {
    question: 'How does the Cohousy app help with daily living?',
    answer: 'The app provides 100% digital experience: instant onboarding, 24/7 property captain support, digital payments with rewards, complaint resolution tracking, food menu access, amenity bookings, and tenant insurance. Everything managed from your phone.'
  },
  {
    question: 'What is the community like in your male PG?',
    answer: 'Our community consists of 500+ professional men from IT and corporate sectors. We organize networking events, weekend sports, gaming sessions, and skill-sharing workshops. It\'s a supportive brotherhood that helps with both personal and career growth.'
  },
  {
    question: 'Are there any restrictions on visitors or timings?',
    answer: 'Visitors are allowed in common areas during reasonable hours with proper registration. We maintain a professional environment while being flexible for genuine needs. No restrictions on entry/exit timings for residents as we understand the demands of IT work schedules.'
  },
  {
    question: 'How do you ensure quality of food and hygiene?',
    answer: 'We maintain strict hygiene standards with regular kitchen inspections, quality ingredients, and varied menu options. The in-app food menu lets you check daily meals and provide feedback. We accommodate dietary preferences and offer healthy options for fitness-conscious residents.'
  }
]

export default function MalePGFAQ() {
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-blue-50 border border-blue-100 rounded-full shadow-sm">
              <HelpCircle size={16} className="inline mr-2 text-blue-600" />
              MALE PG FAQ
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Common Questions About
            <span className="text-blue-600"> Male PG in Kharadi</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Get answers to the most important questions about our boys PG in Kharadi Pune. 
            We understand the specific needs of male professionals and are here to address 
            all your concerns about accommodation, amenities, and community living.
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
              className="bg-blue-50 border border-blue-100 rounded-2xl overflow-hidden hover:shadow-sm transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-blue-100 transition-colors duration-300"
              >
                <span className="font-semibold text-black pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {activeIndex === index ? (
                    <Minus size={20} className="text-blue-600" />
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
          className="text-center mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100"
        >
          <h3 className="text-2xl font-bold text-black mb-4">
            Still Have Questions About Boys Accommodation?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our support team understands the specific needs of male professionals in Kharadi. 
            We're available 24/7 to help with any queries about our PG facilities, 
            community, or booking process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Chat with Male Residents
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
              Schedule Property Visit
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}