'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'OUR SERVICES', href: '/ourservises' },
  { name: 'OUR WORK', href: '/ourwork' },
  { name: 'ABOUT', href: '/about' },
  { name: 'CONTACT US', href: '/contact-us' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-primary shadow-sm sticky top-0 z-50">
      <nav className="container-max section-padding py-4" aria-label="Global">
        <div className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-white text-2xl font-playfair font-bold">
                Naomi Nails
              </span>
            </Link>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium leading-6 text-white hover:text-cream-200 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button 
              size="sm" 
              variant="outline" 
              className="bg-white text-primary border-white hover:bg-cream-100"
              asChild
            >
              <Link href="https://book.squareup.com/appointments/wrihc8xsibqcv1/location/L08P34K5DVK71/services?buttonTextColor=ffffff&color=a2382f&locale=en&referrer=so">
                Book now
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="text-white text-xl font-playfair font-bold">
                    Naomi Nails
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-white/20">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-primary-800"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full bg-white text-primary border-white hover:bg-cream-100"
                      asChild
                    >
                      <Link href="https://book.squareup.com/appointments/wrihc8xsibqcv1/location/L08P34K5DVK71/services?buttonTextColor=ffffff&color=a2382f&locale=en&referrer=so">
                        Book now
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
