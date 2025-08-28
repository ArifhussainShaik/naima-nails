import type { Metadata } from 'next'
import './globals.css'
import FontLoader from '@/components/FontLoader'

export const metadata: Metadata = {
  metadataBase: new URL('https://naominailsnyc.com'),
  title: 'Naomi Nails NYC: Russian Manicures & Premium Nail Services in New York',
  description: 'Discover Naomi Nails in NYC for expert Russian manicures and artistic designs. Book today for flawless, long-lasting results!',
  keywords: 'Russian manicure, nail salon NYC, gel manicure, nail extensions, pedicure, nail art',
  openGraph: {
    title: 'Naomi Nails NYC: Russian Manicures & Premium Nail Services',
    description: 'Expert Russian manicures and artistic nail designs in New York City',
    type: 'website',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://book.squareup.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://book.squareup.com" />
        <meta name="theme-color" content="#a2382f" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className="font-inter antialiased">
        <FontLoader />
        {children}
      </body>
    </html>
  )
}
