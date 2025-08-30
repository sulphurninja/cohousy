export interface Property {
  id: number
  name: string
  location: string
  type: string
  image: string
  description: string
  price: string
  mapCoords: {
    lat: number
    lng: number
  }
  mapUrl: string
  amenities: string[]
  roomTypes: string[]
  details: {
    description: string
    features: string[]
    nearbyPlaces: string[]
    images: string[]
  }
}