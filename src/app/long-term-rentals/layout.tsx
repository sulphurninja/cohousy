import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Long-Term Rentals in Kharadi Pune | Extended Stay PG near Eon IT Park',
  description: 'Premium long-term rental accommodation in Kharadi. Fully furnished 1BHK & 1RK rooms with all utilities included. Perfect for IT professionals working near Eon IT Park & WTC.',
  keywords: 'long-term rentals Kharadi, extended stay PG Pune, monthly rental Kharadi, furnished rooms long term, IT professional accommodation',
  openGraph: {
    title: 'Long-Term Rentals in Kharadi Pune | Extended Stay PG near Eon IT Park',
    description: 'Premium long-term rental accommodation in Kharadi. Fully furnished 1BHK & 1RK rooms with all utilities included.',
    images: ['/skyline.avif'],
  },
  alternates: {
    canonical: 'https://www.cohousy.com/long-term-rentals',
  },
}

export default function LongTermRentalsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}