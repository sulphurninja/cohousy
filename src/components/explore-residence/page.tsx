'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import PropertyCard from '@/components/PropertyCard'
import MapView from '@/components/MapView'

const properties = [
  {
    id: 1,
    name: "Common 01",
    location: "Kharadi",
    type: "Unisex",
    image: "https://cohousy.frutigerindia.com/wp-content/uploads/2025/03/1-min.jpg",
    description: "Single Private Room with Attached Balcony",
    price: "18,000",
    mapCoords: { lat: 18.54780768255096, lng: 73.94594957519239 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3782.5814339568874!2d73.94594957519239!3d18.54780768255096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDMyJzUyLjEiTiA3M8KwNTYnNTQuNyJF!5e0!3m2!1sen!2sin!4v1742375207901!5m2!1sen!2sin",
    amenities: ["AC", "Wi-Fi", "Laundry", "Security", "Balcony"],
    roomTypes: ["Private Room"],
    details: {
      description: "Experience luxury co-living with our premium single private rooms featuring attached balconies. Perfect for professionals seeking comfort and privacy.",
      features: ["Fully Furnished", "24/7 Security", "Power Backup", "Housekeeping"],
      nearbyPlaces: ["EON IT Park - 2km", "Seasons Mall - 1.5km", "Kharadi Metro - 1km"],
      images: [
        "https://cohousy.frutigerindia.com/wp-content/uploads/2025/03/1-min.jpg",
        "https://cohousy.frutigerindia.com/wp-content/uploads/2025/03/2-min.jpg"
      ]
    }
  },
  {
    id: 2,
    name: "Cohome 1",
    location: "Kharadi",
    type: "Unisex",
    image: "https://cohousy.frutigerindia.com/wp-content/uploads/2025/03/3-min.jpg",
    description: "Fully furnished with all facilities",
    price: "13,000",
    mapCoords: { lat: 18.553232182546683, lng: 73.93313217519245 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3782.461260254128!2d73.93313217519245!3d18.553232182546683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDMzJzExLjYiTiA3M8KwNTYnMDguNiJF!5e0!3m2!1sen!2sin!4v1742375238143!5m2!1sen!2sin",
    amenities: ["AC", "Wi-Fi", "Kitchen", "Gym", "Parking"],
    roomTypes: ["1 BHK", "1 RK"],
    details: {
      description: "Modern co-living spaces with flexible room options. Choose between 1BHK and 1RK configurations based on your needs.",
      features: ["Shared Kitchen", "Common Areas", "24/7 Support", "Flexible Lease"],
      nearbyPlaces: ["World Trade Center - 3km", "Phoenix Mall - 2km", "Bus Stop - 500m"],
      images: [
        "https://cohousy.frutigerindia.com/wp-content/uploads/2025/03/3-min.jpg",
        "https://cohousy.frutigerindia.com/wp-content/uploads/2025/03/4-min.jpg"
      ]
    }
  },
  // Add more properties...
]

const heroSlides = [
  {
    title: "Your Home Away from Home!",
    description: "Looking for a comfortable and affordable Co-Living? We offer private and shared spaces with top-notch amenities like air-conditioned rooms, personal storage, CCTV security, and a dedicated support team. Live comfortably without breaking the bank!",
    image: "https://cohousy.frutigerindia.com/wp-content/uploads/2025/03/Welcome-to-Cohousy-a-place-you-will-never-forget-min.jpg"
  },
  {
    title: "Modern Amenities & Vibrant Communities",
    description: "Say goodbye to the stress of house hunting! Our co-living spaces come with fully furnished rooms, power backup, laundry services, a fully equipped kitchen, and a welcoming community. Enjoy a hassle-free lifestyle with everything you need under one roof.",
    image: "https://cohousy.frutigerindia.com/wp-content/uploads/2025/03/Hero-Section-1-min.jpg"
  }
]

export default function ExploreResidence() {
  const [hoveredProperty, setHoveredProperty] = useState<number>(0)
  const [selectedProperty, setSelectedProperty] = useState<any>(null)
  const router = useRouter()

  const handlePropertyClick = (property: any) => {
    // Store property data in sessionStorage for dynamic page
    sessionStorage.setItem('selectedProperty', JSON.stringify(property))
    router.push(`/property-details/${property.id}`)
  }

  const handlePropertyHover = (index: number) => {
    setHoveredProperty(index)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection slides={heroSlides} />

      {/* Properties Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Properties List */}
            <div className="lg:col-span-2 space-y-6">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Available Properties
                </h2>
                <p className="text-gray-600">
                  Discover your perfect co-living space in Kharadi
                </p>
              </div>
              
              {properties.map((property, index) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onHover={() => handlePropertyHover(index)}
                  onClick={() => handlePropertyClick(property)}
                />
              ))}
            </div>

            {/* Map View */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <MapView 
                  property={properties[hoveredProperty]} 
                  mapUrl={properties[hoveredProperty]?.mapUrl}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}