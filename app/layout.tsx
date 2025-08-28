import type { Metadata } from 'next'
import './globals.css'
import FontLoader from '@/components/FontLoader'
import StructuredData from '@/components/StructuredData'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { Analytics } from '@/components/Analytics'

export const metadata: Metadata = {
  metadataBase: new URL('https://naominailsnyc.com'),
  title: {
    default: 'Naomi Nails NYC: Russian Manicures & Premium Nail Services in New York',
    template: '%s | Naomi Nails NYC'
  },
  description: 'Discover Naomi Nails in NYC for expert Russian manicures and artistic designs. Book today for flawless, long-lasting results!',
  keywords: [
    'Russian manicure',
    'nail salon NYC', 
    'gel manicure',
    'nail extensions',
    'pedicure',
    'nail art',
    'manicure NYC',
    'nail salon New York',
    'Russian manicure technique',
    'nail health',
    'cuticle care',
    'precision manicure'
  ],
  authors: [{ name: 'Naomi Nails NYC' }],
  creator: 'Naomi Nails NYC',
  publisher: 'Naomi Nails NYC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Naomi Nails NYC: Russian Manicures & Premium Nail Services',
    description: 'Expert Russian manicures and artistic nail designs in New York City',
    url: 'https://naominailsnyc.com',
    siteName: 'Naomi Nails NYC',
    images: [
      {
        url: '/images/IMG_0736.webp',
        width: 1200,
        height: 630,
        alt: 'Naomi Nails NYC - Expert Russian Manicures',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naomi Nails NYC: Russian Manicures & Premium Nail Services',
    description: 'Expert Russian manicures and artistic nail designs in New York City',
    images: ['/images/IMG_0736.webp'],
    creator: '@naominailsnyc',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.webmanifest',
  other: {
    'google-site-verification': 'your-google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Performance Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://book.squareup.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://book.squareup.com" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.webmanifest" />
        
        {/* Theme and Visual */}
        <meta name="theme-color" content="#a2382f" />
        <meta name="msapplication-TileColor" content="#a2382f" />
        <meta name="color-scheme" content="light" />
        
        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Naomi Nails NYC" />
        
        {/* Security */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Structured Data */}
        <StructuredData />
        
        {/* Analytics */}
        <GoogleAnalytics />
      </head>
      <body className="font-inter antialiased">
        <FontLoader />
        <Analytics />
        {children}
      </body>
    </html>
  )
}
