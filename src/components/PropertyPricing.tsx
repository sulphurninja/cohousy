interface PricingOption {
  price: number;
  label: string;
  description: string;
  features: string[];
}

interface PropertyPricingProps {
  pricing: Record<string, PricingOption>;
}

export default function PropertyPricing({ pricing }: PropertyPricingProps) {
  return (
    <div className="space-y-6">
      {Object.entries(pricing).map(([key, option]) => (
        <div key={key} className="bg-orange-50 rounded-lg p-6 border border-orange-200">
          <h3 className="text-xl font-semibold mb-2">{option.label}</h3>
          <p className="text-gray-600 mb-4">{option.description}</p>
          
          <ul className="space-y-2 mb-6">
            {option.features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="mb-6">
            <span className="text-3xl font-bold text-black">₹{option.price.toLocaleString()}</span>
            <span className="text-gray-600 ml-2">+ Taxes</span>
          </div>
          
          <div className="space-y-3">
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
              Schedule a Visit
            </button>
            <button className="w-full border border-orange-500 text-orange-500 hover:bg-orange-50 py-3 px-6 rounded-lg font-semibold transition-colors">
              Request a callback
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}