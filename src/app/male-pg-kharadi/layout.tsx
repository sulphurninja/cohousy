import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Male PG in Kharadi Pune | Boys Accommodation near Eon IT Park',
  description: 'Affordable male PG in Kharadi with single/shared rooms, meals & amenities. Walking distance to Eon IT Park & WTC. Book boys PG in Kharadi now!',
  keywords: 'male PG Kharadi, boys accommodation Pune, men PG near Eon IT Park, single room PG for male, affordable PG Kharadi',
  openGraph: {
    title: 'Male PG in Kharadi Pune | Boys Accommodation near Eon IT Park',
    description: 'Affordable male PG in Kharadi with single/shared rooms, meals & amenities. Walking distance to Eon IT Park & WTC.',
    images: ['/skyline.avif'],
  },
  alternates: {
    canonical: 'https://www.cohousy.com/male-pg-kharadi',
  },
}

export default function MalePGLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}