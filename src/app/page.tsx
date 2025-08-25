'use client'

import { useState, useEffect } from 'react'
import Preloader from '@/components/Preloader'
import HeroSection from '@/components/HeroSection'
import LifestyleMarquee from '@/components/LifestyleMarquee'
import OffersSection from '@/components/OffersSection'
import PropertyListingsSection from '@/components/PropertyListingsSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import LocationAmenitiesSection from '@/components/LocationAmenitiesSection'
import AppExperienceSection from '@/components/AppExperienceSection'
import PricingSection from '@/components/PricingSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import FinalCTASection from '@/components/FinalCTASection'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [scrollY, setScrollY] = useState(0)

  const handlePreloaderComplete = () => {
    setIsLoading(false)
  }

  // Smooth scroll tracking for additional effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)

    if (!isLoading) {
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [isLoading])

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      <div
        className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000 ease-out'}
        style={{
          filter: `blur(${isLoading ? '5px' : '0px'})`,
          transform: `translateY(${isLoading ? '20px' : '0px'})`,
          transition: 'all 1s ease-out'
        }}
      >
        <HeroSection />
        <OffersSection />
        <LifestyleMarquee />
        <PropertyListingsSection />
        <WhyChooseSection />
        <LocationAmenitiesSection />
        <AppExperienceSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </div>

      {/* Scroll Progress Indicator */}
      {/* <div className="fixed top-0 left-0 w-full h-1 bg-black/10 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-accent to-orange-400 transition-all duration-300 ease-out"
          style={{
            width: `${Math.min(100, (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
          }}
        />
      </div> */}
    </main>
  )
}