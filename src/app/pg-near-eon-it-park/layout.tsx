import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PG near Eon IT Park Kharadi | Walking Distance Accommodation',
  description: 'PG accommodation within walking distance of Eon IT Park Kharadi. Single & shared rooms for male/female professionals. Book convenient PG now with amenities, security & app features!',
  keywords: 'PG near Eon IT Park, Kharadi accommodation, walking distance PG, IT professionals accommodation, Eon IT Park PG',
  openGraph: {
    title: 'PG near Eon IT Park Kharadi | Walking Distance Accommodation',
    description: 'PG accommodation within walking distance of Eon IT Park Kharadi. Single & shared rooms for male/female professionals.',
    images: ['/skyline.avif'],
  },
  alternates: {
    canonical: 'https://www.cohousy.com/pg-near-eon-it-park',
  },
}

export default function PGNearEonITParkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}