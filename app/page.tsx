'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'

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
  const [currentSlide, setCurrentSlide] = useState(0)
  const itemsPerSlide = 3
  const totalSlides = Math.ceil(featuredWork.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cream-100 to-cream-200 overflow-hidden">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-accent leading-tight">
                  Russian Manicure
                  <br />
                  <span className="text-primary">Perfected in</span>
                  <br />
                  New York
                </h1>
                <p className="text-lg text-gray-600 max-w-lg">
                  Experience the precision and artistry of authentic Russian manicure techniques. 
                  Expert care for flawless, long-lasting results that prioritize nail health.
                </p>
              </div>
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <Link href="https://book.squareup.com/appointments/wrihc8xsibqcv1/location/L08P34K5DVK71/services?buttonTextColor=ffffff&color=a2382f&locale=en&referrer=so">
                  Book Appointment
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/IMG_0736.webp"
                  alt="Stunning nail art design showcasing precision Russian manicure technique and artistic excellence"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work Section - Beautiful Carousel */}
      <section className="section-padding bg-accent-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-accent">
              Featured Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the artistry and precision of our Russian manicure techniques through our latest work
            </p>
          </motion.div>

          <div className="relative">
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-accent group-hover:text-primary transition-colors" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-accent group-hover:text-primary transition-colors" />
            </button>

            {/* Carousel Container */}
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4">
                      {featuredWork
                        .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                        .map((work, index) => (
                          <motion.div
                            key={work.id}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ 
                              duration: 0.6, 
                              delay: index * 0.1,
                              ease: "easeOut"
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative aspect-square overflow-hidden rounded-xl shadow-lg transition-all duration-500"
                          >
                            <Image
                              src={work.image}
                              alt={work.alt}
                              fill
                              className="object-cover transition-all duration-700"
                              loading="lazy"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          </motion.div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-accent scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/ourwork">View All Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Story Section - Vertical Image */}
      <section className="section-padding bg-cream">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-accent">
                The Art of Russian Manicure
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  At Naomi Nails, we specialize in authentic Russian manicure techniques that prioritize nail health and longevity. Our precision approach ensures your manicure lasts 3-4 weeks while maintaining the natural beauty of your nails.
                </p>
                <p>
                  Every service is personalized to your unique style and nail needs. We use only premium products and maintain the highest standards of hygiene and safety.
                </p>
              </div>
              <Button size="lg" asChild>
                <Link href="/about">
                  Learn More About Us
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/Naima_03.webp"
                  alt="Naomi providing expert Russian manicure service with precision and care in her NYC salon"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-accent">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference that authentic Russian manicure techniques make
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-cream p-6 rounded-lg shadow-md card-hover"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-accent">— {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent text-white">
        <div className="container-max text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold">
              Ready for Perfect Nails?
            </h2>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto opacity-90">
              Book your appointment today and experience the precision of authentic Russian manicure techniques
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-4 bg-white text-accent hover:bg-cream"
              asChild
            >
              <Link href="https://book.squareup.com/appointments/wrihc8xsibqcv1/location/L08P34K5DVK71/services?buttonTextColor=ffffff&color=a2382f&locale=en&referrer=so">
                Book Now
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
