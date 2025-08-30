'use client'

interface MapViewProps {
  property: any
  mapUrl: string
}

export default function MapView({ property, mapUrl }: MapViewProps) {
  if (!property) return null

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-4 border-b">
        <h3 className="font-bold text-gray-800">{property.name}</h3>
        <p className="text-gray-600 text-sm">{property.location}</p>
      </div>
      
      <div className="relative h-96">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-b-xl"
        />
      </div>
      
      <div className="p-4 bg-gray-50">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <i className="fa fa-map-marker text-orange-500"></i>
          <span>Click property to view details</span>
        </div>
      </div>
    </div>
  )
}