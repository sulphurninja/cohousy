'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import ContactFormDialog from '@/components/ContactFormDialog'

export default function PropertyDetails({ params }: { params: { id: string } }) {
    const [property, setProperty] = useState<any>(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const router = useRouter()

    useEffect(() => {
        const storedProperty = sessionStorage.getItem('selectedProperty')
        if (storedProperty) {
            setProperty(JSON.parse(storedProperty))
        }
    }, [])

    if (!property) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading property details...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white mt-24 shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center cursor-pointer gap-2 text-orange-500 hover:text-orange-600 mb-4"
                    >
                        <ArrowLeft />
                        Back to Properties
                    </button>
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">{property.name}</h1>
                            <p className="text-orange-500 text-lg">{property.location}</p>
                        </div>
                        <div className="text-right">
                            <span className="text-3xl font-bold text-orange-500">
                                ₹ {property.price}/mo*
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Image Gallery */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                            <div className="relative h-96">
                                <Image
                                    src={property.details.images[currentImageIndex]}
                                    alt={property.name}
                                    fill
                                    className="object-cover"
                                />
                                {property.details.images.length > 1 && (
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                        {property.details.images.map((_: any, index: number) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Property</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {property.details.description}
                            </p>

                            {/* Features */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Features</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {property.details.features.map((feature: string, index: number) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <i className="fa fa-check text-green-500"></i>
                                            <span className="text-gray-600">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Amenities */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Amenities</h3>
                                <div className="flex flex-wrap gap-2">
                                    {property.amenities.map((amenity: string, index: number) => (
                                        <span
                                            key={index}
                                            className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm"
                                        >
                                            {amenity}
                                        </span>
                                    ))}
                                </div>
                                {/* Map */}
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                    <div className="p-4 border-b">
                                        <h3 className="font-bold text-gray-800">Location</h3>
                                    </div>
                                    <div className="relative h-64">
                                        <iframe
                                            src={property.mapUrl}
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        {/* Contact Form */}
                        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 sticky top-24">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Get in Touch</h3>

                            <ContactFormDialog
                                title={`Inquire About ${property.name}`}
                                description="Fill out the form below and we'll get back to you within 24 hours with availability and pricing details."
                                serviceType="Property Inquiry"
                                propertyName={property.name}
                                trigger={
                                    <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                                        Send Inquiry
                                    </button>
                                }
                            />

                            <div className="mt-6 pt-6 border-t">
                                <div className="flex gap-3">
                                    <ContactFormDialog
                                        title="Schedule a Visit"
                                        description="Book a visit to see the property in person."
                                        serviceType="Schedule Visit"
                                        propertyName={property.name}
                                        trigger={
                                            <button className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors text-sm">
                                                Schedule Visit
                                            </button>
                                        }
                                    />
                                    <ContactFormDialog
                                        title="Request Callback"
                                        description="Request a callback and our team will call you at your preferred time."
                                        serviceType="Request Callback"
                                        propertyName={property.name}
                                        trigger={
                                            <button className="flex-1 border-2 border-orange-500 text-orange-500 py-2 px-4 rounded-lg hover:bg-orange-50 transition-colors text-sm">
                                                Request Callback
                                            </button>
                                        }
                                    />
                                </div>
                            </div>
                        </div>



                        {/* Nearby Places */}
                        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Nearby Places</h3>
                            <div className="space-y-3">
                                {property.details.nearbyPlaces.map((place: string, index: number) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <i className="fa fa-map-marker text-orange-500"></i>
                                        <span className="text-gray-600">{place}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
