import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Single Room PG in Kharadi Pune | Private Accommodation Near Eon IT Park',
  description: 'Discover private single room PG in Kharadi Pune with attached bathroom, AC, WiFi for male & female professionals. Near Eon IT Park & WTC. Book luxury single occupancy PG now!',
  keywords: 'single room PG Kharadi, private accommodation Pune, single occupancy PG, AC PG Kharadi, female male single room',
  openGraph: {
    title: 'Single Room PG in Kharadi Pune | Private Accommodation Near Eon IT Park',
    description: 'Discover private single room PG in Kharadi Pune with attached bathroom, AC, WiFi for male & female professionals.',
    images: ['/skyline.avif'],
  },
  alternates: {
    canonical: 'https://www.cohousy.com/single-room-pg-kharadi',
  },
}

export default function SingleRoomPGLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}