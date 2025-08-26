import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ladies PG in Kharadi Pune | Safe & Secure Accommodation for Women',
  description: 'Premium ladies PG in Kharadi with single rooms, food, WiFi & 24/7 security. Near Eon IT Park. Book female accommodation in Kharadi, Pune.',
  keywords: 'ladies PG Kharadi, female accommodation Pune, women PG near Eon IT Park, safe PG for girls Kharadi, single room PG for female',
  openGraph: {
    title: 'Ladies PG in Kharadi Pune | Safe & Secure Accommodation for Women',
    description: 'Premium ladies PG in Kharadi with single rooms, food, WiFi & 24/7 security. Near Eon IT Park.',
    images: ['/skyline.avif'],
  },
  alternates: {
    canonical: 'https://www.cohousy.com/ladies-pg-kharadi',
  },
}

export default function LadiesPGLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}