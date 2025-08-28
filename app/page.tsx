import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HomepageClient from '@/components/HomepageClient'

export const metadata: Metadata = {
  title: 'Expert Russian Manicures & Artistic Nail Designs in NYC',
  description: 'Book the best Russian manicure in NYC at Naomi Nails. Experience precision techniques, artistic designs, and long-lasting results. Specializing in nail health and premium gel manicures.',
  openGraph: {
    title: 'Naomi Nails NYC - Expert Russian Manicures & Artistic Nail Designs',
    description: 'Book the best Russian manicure in NYC at Naomi Nails. Experience precision techniques, artistic designs, and long-lasting results.',
    images: [
      {
        url: '/images/IMG_0736.webp',
        width: 1200,
        height: 630,
        alt: 'Expert Russian Manicure at Naomi Nails NYC',
      },
    ],
  },
  alternates: {
    canonical: 'https://naominailsnyc.com',
  },
}

const featuredWork = [
  {
    id: 1,
    image: '/images/IMG_0522.webp',
    alt: 'Elegant white geometric nail art design with intricate patterns on natural nails'
  },
  {
    id: 2,
    image: '/images/manicure_01.webp',
    alt: 'Professional Russian manicure with nude pink polish and perfect cuticle work'
  },
  {
    id: 3,
    image: '/images/IMG_0735.webp',
    alt: 'Sophisticated nail art featuring delicate floral patterns and gold accents'
  },
  {
    id: 4,
    image: '/images/manicure_03.webp',
    alt: 'Classic French manicure with precision tips and glossy finish'
  },
  {
    id: 5,
    image: '/images/IMG_0750.webp',
    alt: 'Minimalist nail art with clean lines and modern aesthetic'
  },
  {
    id: 6,
    image: '/images/IMG_0721.webp',
    alt: 'Bold nail design with intricate detailing and vibrant colors'
  },
  {
    id: 7,
    image: '/images/IMG_7776.webp',
    alt: 'Elegant ombre nail design with smooth color transition'
  },
  {
    id: 8,
    image: '/images/IMG_0749.webp',
    alt: 'Professional manicure with classic polish and flawless finish'
  }
]

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'The best Russian manicure in NYC! Naomi is incredibly skilled and my nails have never looked better. The attention to detail is unmatched.',
    rating: 5
  },
  {
    id: 2,
    name: 'Jessica L.',
    text: 'Amazing attention to detail and the most relaxing experience. I won\'t go anywhere else! My gel manicure lasted over 3 weeks.',
    rating: 5
  },
  {
    id: 3,
    name: 'Maria K.',
    text: 'Perfect gel manicure that lasts for weeks. Naomi is a true artist and her Russian technique is flawless.',
    rating: 5
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HomepageClient featuredWork={featuredWork} testimonials={testimonials} />
      <Footer />
    </div>
  )
}
