import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Short-Term Rentals in Kharadi Pune | Flexible PG near Eon IT Park',
  description: 'Flexible short-term accommodation in Kharadi. Zero lock-in period, fully furnished rooms with premium amenities. Perfect for project stays, internships & business trips.',
  keywords: 'short-term rentals Kharadi, flexible PG accommodation, zero lock-in Pune, project stays Kharadi, business accommodation near IT park',
  openGraph: {
    title: 'Short-Term Rentals in Kharadi Pune | Flexible PG near Eon IT Park',
    description: 'Flexible short-term accommodation in Kharadi. Zero lock-in period, fully furnished rooms with premium amenities.',
    images: ['/skyline.avif'],
  },
  alternates: {
    canonical: 'https://www.cohousy.com/short-term-rentals',
  },
}

export default function ShortTermRentalsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}