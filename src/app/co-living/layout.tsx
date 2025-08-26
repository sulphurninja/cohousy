import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Co-living Spaces in Kharadi Pune | Modern Shared Living near Eon IT Park',
  description: 'Book premium co-living spaces in Kharadi with modern amenities, vibrant community, and flexible stays. Walking distance to Eon IT Park & WTC Pune. Single & double rooms available.',
  keywords: 'co-living Kharadi, PG in Kharadi, shared living Pune, accommodation near Eon IT Park, WTC Kharadi PG, modern co-living spaces',
  openGraph: {
    title: 'Co-living Spaces in Kharadi Pune | Modern Shared Living near Eon IT Park',
    description: 'Book premium co-living spaces in Kharadi with modern amenities, vibrant community, and flexible stays. Walking distance to Eon IT Park & WTC Pune.',
    images: ['/skyline.avif'],
  },
}

export default function ColivingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}