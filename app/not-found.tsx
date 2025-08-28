import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-cream-100 to-cream-200">
        <div className="container-max section-padding text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-8xl font-playfair font-bold text-accent">404</h1>
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-primary">
                Page Not Found
              </h2>
              <p className="text-lg text-gray-600 max-w-lg mx-auto">
                Sorry, we couldn't find the page you're looking for. 
                Let's get you back to discovering beautiful nail art and services.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild>
                <Link href="/">
                  Back to Home
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/ourservises">
                  View Our Services
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/ourwork">
                  See Our Work
                </Link>
              </Button>
            </div>
            
            <div className="pt-8">
              <p className="text-gray-500 mb-4">
                Ready to book an appointment?
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                <Link href="https://book.squareup.com/appointments/wrihc8xsibqcv1/location/L08P34K5DVK71/services?buttonTextColor=ffffff&color=a2382f&locale=en&referrer=so">
                  Book Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
