'use client'


import AppFeatures from '@/components/singleroomPG/Appfeatures'
import BookLuxuryCTA from '@/components/singleroomPG/BookLuxuryCTA'
import CoLivingBlend from '@/components/singleroomPG/CoLivingBlend'
import FemaleProfessionalsBenefits from '@/components/singleroomPG/FemaleProfessionalsBenefits'
import MaleProfessionalsComfort from '@/components/singleroomPG/MaleProfessionalsComfort'
import PricingDetails from '@/components/singleroomPG/PricingDetails'
import SafetyMeasures from '@/components/singleroomPG/SafetyMeasures'
import SingleRoomFAQ from '@/components/singleroomPG/SingleRoomFAQ'
import SingleRoomPGHero from '@/components/singleroomPG/SingleRoomPGHero'
import TopAmenities from '@/components/singleroomPG/TopAmenities'
import WhySingleRoom from '@/components/singleroomPG/WhySingleRoom'
import { useState, useEffect } from 'react'

export default function SingleRoomPGPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <SingleRoomPGHero />
      <WhySingleRoom />
      <FemaleProfessionalsBenefits />
      <MaleProfessionalsComfort />
      <TopAmenities />
      <PricingDetails />
      <AppFeatures />
      <SafetyMeasures />
      <CoLivingBlend />
      <SingleRoomFAQ />
      <BookLuxuryCTA />

      {/* Scroll Progress Indicator */}
      {/* <div className="fixed top-0 left-0 w-full h-1 bg-black/10 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-purple-400 to-indigo-400 transition-all duration-300 ease-out"
          style={{
            width: `${Math.min(100, (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
          }}
        />
      </div> */}
    </main>
  )
}