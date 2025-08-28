'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'

const services = [
  {
    id: 1,
    title: 'Manicure Without Polish',
    description: 'Clean, strong, natural. A perfect base manicure focused on nail health, shaping, and cuticle care. Let your natural nails shine.',
    image: '/images/manicure_05.webp',
    alt: 'Clean natural manicure without polish showing healthy nail beds and perfect cuticle work'
  },
  {
    id: 2,
    title: 'Gel Manicure',
    description: 'Flawless wear. Precision finish. Long-lasting, chip-resistant gel that stays perfect for 3+ weeks. Includes cuticle care and shaping.',
    image: '/images/manicure_02.webp',
    alt: 'Professional gel manicure with glossy finish and perfect application technique'
  },
  {
    id: 3,
    title: 'Nail Extensions',
    description: 'Length meets artistry. Custom-shaped extensions with a natural look - no one will know they\'re not your own. Built to last.',
    image: '/images/IMG_0735.webp',
    alt: 'Elegant nail extensions with sophisticated design and natural-looking length'
  },
  {
    id: 4,
    title: 'Pedicure With Polish',
    description: 'Clean. Calm. Beautiful color. Professional pedicure service with precision polish application and relaxing foot care treatment.',
    image: '/images/other_01.webp',
    alt: 'Professional pedicure service with polish application and foot care treatment'
  },
  {
    id: 5,
    title: 'Gel Pedicure',
    description: 'Beautiful color, lasting results. Our signature gel pedicure combines precise cuticle work with rich, long-lasting shine. Designed to stay flawless.',
    image: '/images/manicure_09.webp',
    alt: 'Gel pedicure with long-lasting shine and professional finish'
  },
  {
    id: 6,
    title: 'Gel Pedicure (Toes Only)',
    description: 'Just the toes, all the impact. Quick gel polish application for toes only—ideal for in-between visits or when you want a refresh.',
    image: '/images/IMG_0747.webp',
    alt: 'Gel pedicure focusing on toes with precise application and beautiful color'
  }
]

// Image component with fallback
function ServiceImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [imageError, setImageError] = useState(false)
  const [useNextImage, setUseNextImage] = useState(true)

  if (imageError || !useNextImage) {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        onError={() => {
          console.error('Fallback img also failed:', src)
          setImageError(true)
        }}
        onLoad={() => console.log('Fallback img loaded:', src)}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`object-cover ${className}`}
      loading="lazy"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
      onError={(e) => {
        console.error('Next.js Image failed, switching to fallback:', src)
        setUseNextImage(false)
      }}
      onLoad={() => console.log('Next.js Image loaded:', src)}
    />
  )
}

export default function OurServices() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="section-padding bg-cream">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-accent">
              Our Services
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of nail services, each designed with precision and artistry using authentic Russian manicure techniques
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-lg shadow-lg overflow-hidden card-hover"
              >
                <div className="relative h-64 overflow-hidden">
                  <ServiceImage
                    src={service.image}
                    alt={service.alt}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-playfair font-semibold text-accent">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent-50">
        <div className="container-max text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-accent">
              Let Your Nails Speak for You
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Custom looks, signature Russian techniques, NYC precision.
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
              className="text-lg px-8 py-4"
              asChild
            >
              <Link href="https://book.squareup.com/appointments/wrihc8xsibqcv1/location/L08P34K5DVK71/services?buttonTextColor=ffffff&color=a2382f&locale=en&referrer=so">
                Book Appointment
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
