'use client'

import { useState, useEffect } from 'react'
import ShortTermHero from '@/components/shortterm/ShortTermHero'
import WhyChooseShortTerm from '@/components/shortterm/WhyChooseShortTerm'
import ShortTermAmenities from '@/components/shortterm/ShortTermAmenities'
import ShortTermPricing from '@/components/shortterm/ShortTermPricing'
import ShortTermFAQ from '@/components/shortterm/ShortTermFAQ'

import ResidentTestimonials from '@/components/coliving/ResidentTestimonials'
import LocationAdvantage from '@/components/coliving/LocationAdvantage'
import ShortTermCTA from '@/components/shortterm/ShortTermCTA'

export default function ShortTermRentalsPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <ShortTermHero />
      <WhyChooseShortTerm />
      <ShortTermAmenities />
      <ShortTermPricing />
      <LocationAdvantage />
      <ResidentTestimonials />
      <ShortTermFAQ />
      <ShortTermCTA />

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