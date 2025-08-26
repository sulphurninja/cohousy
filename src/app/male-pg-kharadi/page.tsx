'use client'

import CohousyAppFeatures from '@/components/malepg/CohousyAppFeatures'
import CommunityLifestyle from '@/components/malepg/CommunityLifestyle'
import LocationAdvantages from '@/components/malepg/LocationAdvantages'
import MalePGAmenities from '@/components/malepg/MalePGAmenities'
import MalePGCTA from '@/components/malepg/MalePGCTA'
import MalePGFAQ from '@/components/malepg/MalePGFAQ'
import MalePGHero from '@/components/malepg/MalePGHero'
import MalePGTestimonials from '@/components/malepg/MalePGTestimonials'
import RoomTypesAndPricing from '@/components/malepg/RoomTypesAndPricing'
import WhyChooseMalePG from '@/components/malepg/WhyChooseMalePG'
import { useState, useEffect } from 'react'

export default function MalePGPage() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <main className="min-h-screen overflow-x-hidden bg-white">
            <MalePGHero />
            <WhyChooseMalePG />
            <MalePGAmenities />
            <RoomTypesAndPricing />
            <CohousyAppFeatures />
            <LocationAdvantages />
            <CommunityLifestyle />
            <MalePGTestimonials />
            <MalePGFAQ />
            <MalePGCTA />

            {/* Scroll Progress Indicator */}
            {/* <div className="fixed top-0 left-0 w-full h-1 bg-black/10 z-50 pointer-events-none">
                <div
                    className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ease-out"
                    style={{
                        width: `${Math.min(100, (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
                    }}
                />
            </div> */}
        </main>
    )
}