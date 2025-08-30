interface Amenity {
  name: string;
  icon: string;
}

interface PropertyAmenitiesProps {
  amenities: {
    room: Amenity[];
    services: Amenity[];
  };
}

export default function PropertyAmenities({ amenities }: PropertyAmenitiesProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Room Amenities */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {amenities.room.map((amenity, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 border rounded-lg">
                <span className="text-2xl">{amenity.icon}</span>
                <span className="text-gray-700">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {amenities.services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-orange-300 transition-colors">
                <span className="text-2xl">{service.icon}</span>
                <span className="text-gray-700 font-medium">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}