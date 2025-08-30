'use client'

import Image from 'next/image'
import { Property } from '@/types/property'

interface PropertyCardProps {
  property: Property
  onHover: () => void
  onClick: () => void
}

export default function PropertyCard({ property, onHover, onClick }: PropertyCardProps) {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
      onMouseEnter={onHover}
      onClick={onClick}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="lg:w-2/5 relative">
          <div className="relative h-64 lg:h-full">
            <Image
              src={property.image}
              alt={property.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-3/5 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">
                {property.name}
              </h3>
              <p className="text-orange-500 font-medium">{property.location}</p>
            </div>
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
              {property.type}
              <Image 
                src="https://cohousy.frutigerindia.com/wp-content/uploads/2025/03/unisex.png" 
                alt="unisex" 
                width={16} 
                height={16} 
              />
            </span>
          </div>

          <div className="flex items-center gap-2 mb-4 text-orange-500">
            <i className="fa fa-map-marker"></i>
            <span className="text-sm">View Direction</span>
          </div>

          <div className="mb-4">
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-sm">
              {property.description}
            </span>
          </div>

          {property.roomTypes.length > 0 && (
            <div className="flex gap-2 mb-4">
              {property.roomTypes.map((type, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm"
                >
                  {type}
                </span>
              ))}
            </div>
          )}

          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <span className="text-2xl font-bold text-orange-500">
                ₹ {property.price}/mo*
              </span>
            </div>
            <div className="flex gap-3">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Schedule Visit
              </button>
              <button className="border-2 border-orange-500 text-orange-500 px-6 py-2 rounded-lg hover:bg-orange-50 transition-colors">
                Request Callback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}