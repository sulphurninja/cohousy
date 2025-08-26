'use client'

import { useState, useEffect } from 'react'
import LongTermHero from '@/components/longterm/LongTermHero'
import WhyChooseLongTerm from '@/components/longterm/WhyChooseLongTerm'
import LongTermAmenities from '@/components/longterm/LongTermAmenities'
import LongTermPricing from '@/components/longterm/LongTermPricing'
import LongTermFAQ from '@/components/longterm/LongTermFAQ'
import LongTermCTA from '@/components/longterm/LongTermCTA'
import ResidentTestimonials from '@/components/coliving/ResidentTestimonials'
import LocationAdvantage from '@/components/coliving/LocationAdvantage'
import SafetySecurity from '@/components/coliving/SafetySecurity'

export default function LongTermRentalsPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <LongTermHero />
      <WhyChooseLongTerm />
      <LongTermAmenities />
      <LongTermPricing />
      <LocationAdvantage />
      <SafetySecurity />
      <ResidentTestimonials />
      <LongTermFAQ />
      <LongTermCTA />

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/10 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-accent to-orange-400 transition-all duration-300 ease-out"
          style={{
            width: `${Math.min(100, (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
          }}
        />
      </div>
    </main>
  )
}