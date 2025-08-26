'use client'

import AllInclusiveAmenities from '@/components/coliving/AllInclusiveAmenities'
import ColivingCTA from '@/components/coliving/ColivingCTA'
import ColivingFAQ from '@/components/coliving/ColivingFAQ'
import ColivingHero from '@/components/coliving/ColivingHero'
import CommunityBuilding from '@/components/coliving/CommunityBuilding'
import DigitalExperience from '@/components/coliving/DigitalExperience'
import LocationAdvantage from '@/components/coliving/LocationAdvantage'
import ResidentTestimonials from '@/components/coliving/ResidentTestimonials'
import RoomPricing from '@/components/coliving/RoomPricing'
import SafetySecurity from '@/components/coliving/SafetySecurity'
import WhyChooseCohousy from '@/components/coliving/WhyChooseCohousy'
import { useState, useEffect } from 'react'


export default function ColivingPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <ColivingHero />
      <WhyChooseCohousy />
      <AllInclusiveAmenities />
      <DigitalExperience />
      <CommunityBuilding />
      <RoomPricing />
      <LocationAdvantage />
      <SafetySecurity />
      <ResidentTestimonials />
      <ColivingFAQ />
      <ColivingCTA />

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