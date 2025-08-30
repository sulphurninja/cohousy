'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PropertyGalleryProps {
  images: string[];
}

export default function PropertyGallery({ images }: PropertyGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative h-96 rounded-lg overflow-hidden">
        <Image
          src={images[currentImage]}
          alt={`Property image ${currentImage + 1}`}
          fill
          className="object-cover"
          priority={currentImage === 0}
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setCurrentImage(prev => prev > 0 ? prev - 1 : images.length - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              onClick={() => setCurrentImage(prev => prev < images.length - 1 ? prev + 1 : 0)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              aria-label="Next image"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                currentImage === index ? 'border-orange-500' : 'border-transparent'
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}