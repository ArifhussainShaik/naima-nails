import type { Metadata } from 'next'
import './globals.css'

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
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  )
}
