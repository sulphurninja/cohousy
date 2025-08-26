'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface MarqueeImage {
  src: string
  alt?: string
  width?: number
  height?: number
}

interface DualMarqueeProps {
  topImages: MarqueeImage[]
  bottomImages: MarqueeImage[]
  topSpeed?: number
  bottomSpeed?: number
  rowHeight?: number
  gap?: number
  fadeWidth?: number
  topDirection?: 'left' | 'right'
  bottomDirection?: 'left' | 'right'
  className?: string
}

export default function DualMarquee({
  topImages,
  bottomImages,
  topSpeed = 30,
  bottomSpeed = 36,
  rowHeight = 120,
  gap = 24,
  fadeWidth = 64,
  topDirection = 'left',
  bottomDirection = 'right',
  className = ''
}: DualMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [topRowHovered, setTopRowHovered] = useState(false)
  const [bottomRowHovered, setBottomRowHovered] = useState(false)

  const renderMarqueeRow = (
    images: MarqueeImage[], 
    direction: 'left' | 'right', 
    speed: number, 
    isHovered: boolean,
    onHover: (hovered: boolean) => void,
    rowId: string
  ) => {
    // Create enough duplicates to ensure seamless loop
    const duplicatedImages = [...images, ...images, ...images]

    return (
      <div 
        className="relative overflow-hidden group " // Added background for debugging
        style={{ height: rowHeight }}
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
      >
        {/* Debug info - remove in production */}
        {/* <div className="absolute top-2 left-2 z-30 bg-black/80 text-white text-xs px-2 py-1 rounded">
          {rowId} - {direction} - {images.length} images
        </div> */}

      
        {/* Scrolling track */}
        <div 
          className={`flex items-center h-full animate-marquee-${direction}`}
          style={{
            animationDuration: `${speed}s`,
            animationPlayState: isHovered ? 'paused' : 'running',
            gap: `${gap}px`,
            width: 'max-content',
            willChange: 'transform',
            // Ensure the animation starts immediately
            animationDelay: '0s',
            animationFillMode: 'both'
          }}
        >
          {duplicatedImages.map((image, index) => {
            const aspectRatio = image.width && image.height ? image.width / image.height : 3/2
            const imageWidth = Math.round(rowHeight * aspectRatio)

            return (
              <div
                key={`${rowId}-${index}`}
                className="flex-shrink-0 relative hover:grayscale-0 transition-all duration-700 cursor-pointer rounded-lg overflow-hidden border border-gray-200"
                style={{ 
                  width: imageWidth,
                  height: rowHeight - 4, // Slightly smaller to ensure visibility
                  backgroundColor: '#f3f4f6' // Fallback background
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt || `${rowId} image ${index}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes={`${imageWidth}px`}
                  loading="lazy"
                  onError={(e) => {
                    console.log(`Failed to load marquee image: ${image.src}`)
                    // Don't hide on error, show placeholder instead
                    const target = e.target as HTMLImageElement
                    target.style.display = 'block'
                    target.alt = 'Image not found'
                  }}
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-xs font-medium bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                    View Details
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Pause indicator */}
        {/* {isHovered && (
          <div className="absolute top-2 right-2 z-20 bg-accent text-black text-xs px-2 py-1 rounded">
            Paused
          </div>
        )} */}
      </div>
    )
  }

  return (
    <motion.section 
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className={`relative bg-white overflow-hidden border-2 border-red-200 ${className}`} // Added debug border
      style={{ 
        minHeight: (rowHeight * 2) + gap + 40, // Extra padding for debugging
        padding: '20px' // Add padding to see the container clearly
      }}
    >
      {/* Container debug info */}
      {/* <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-40 bg-blue-600 text-white text-sm px-3 py-1 rounded">
        DualMarquee Container - Top: {topImages.length} | Bottom: {bottomImages.length}
      </div> */}

      {/* Top row */}
      <div className="mb-4"> {/* Added margin for clear separation */}
        {renderMarqueeRow(
          topImages, 
          topDirection, 
          topSpeed, 
          topRowHovered, 
          setTopRowHovered,
          'TOP'
        )}
      </div>
      
      {/* Gap between rows - make it more visible */}
      {/* <div 
        className="w-full bg-yellow-200" // Debug background
        style={{ height: gap }}
      >
        <div className="text-center text-xs text-gray-600 py-1">
          Gap: {gap}px
        </div>
      </div> */}
      
      {/* Bottom row */}
      <div className="mt-4"> {/* Added margin for clear separation */}
        {renderMarqueeRow(
          bottomImages, 
          bottomDirection, 
          bottomSpeed, 
          bottomRowHovered, 
          setBottomRowHovered,
          'BOTTOM'
        )}
      </div>
      
      {/* Grain overlay */}
      <div className="absolute inset-0 grain pointer-events-none opacity-30" />
    </motion.section>
  )
}