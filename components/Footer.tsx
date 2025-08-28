import Link from 'next/link'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'Our Services', href: '/ourservises' },
  { name: 'Our Work', href: '/ourwork' },
  { name: 'About', href: '/about' },
  { name: 'Contact Us', href: '/contact-us' },
]

export default function Footer() {
  return (
    <footer className="bg-cream-200 border-t border-cream-300">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-playfair font-bold text-primary">
              Naomi Nails
            </h3>
            <p className="text-sm text-gray-600">
              Expert Russian manicures and premium nail services in the heart of NYC.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Stay Updated
            </h4>
            <p className="text-sm text-gray-600">
              Subscribe to our newsletter for the latest nail trends and offers.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button size="sm" className="px-4">
                Sign Up
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-cream-300 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Naomi Nails. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <Link href="#" className="text-sm text-gray-500 hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
