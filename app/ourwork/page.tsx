'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const workImages = [
  {
    id: 1,
    src: '/images/IMG_0522.webp',
    alt: 'Elegant French manicure with subtle gold accents and perfect cuticle work'
  },
  {
    id: 2,
    src: '/images/IMG_0535.webp',
    alt: 'Sophisticated nude nail design with delicate floral art and gel finish'
  },
  {
    id: 3,
    src: '/images/IMG_0541.webp',
    alt: 'Classic red manicure with glossy gel polish and precise application'
  },
  {
    id: 4,
    src: '/images/IMG_0735.webp',
    alt: 'Natural nail extensions with subtle pink tone and perfect shaping'
  },
  {
    id: 5,
    src: '/images/IMG_0747.webp',
    alt: 'Artistic nail design with geometric patterns and metallic accents'
  },
  {
    id: 6,
    src: '/images/IMG_0750.webp',
    alt: 'Minimalist nail art with clean lines and modern aesthetic'
  },
  {
    id: 7,
    src: '/images/IMG_0736.webp',
    alt: 'Stunning nail art design showcasing precision and creativity'
  },
  {
    id: 8,
    src: '/images/IMG_0737.webp',
    alt: 'Elegant ombre nail design with smooth color transition'
  },
  {
    id: 9,
    src: '/images/IMG_0749.webp',
    alt: 'Professional manicure with classic polish and flawless finish'
  },
  {
    id: 10,
    src: '/images/IMG_7776.webp',
    alt: 'Creative nail art featuring unique patterns and expert craftsmanship'
  },
  {
    id: 11,
    src: '/images/IMG_8928.webp',
    alt: 'Sophisticated nail design with subtle shimmer and perfect shape'
  },
  {
    id: 12,
    src: '/images/IMG_9274.webp',
    alt: 'Luxurious nail treatment showcasing Russian manicure technique precision'
  },
  {
    id: 13,
    src: '/images/manicure_01.webp',
    alt: 'Professional Russian manicure with nude polish and perfect cuticle work'
  },
  {
    id: 14,
    src: '/images/manicure_02.webp',
    alt: 'Gel manicure with glossy finish and professional application technique'
  },
  {
    id: 15,
    src: '/images/manicure_03.webp',
    alt: 'Classic French manicure with precision tips and flawless execution'
  },
  {
    id: 16,
    src: '/images/manicure_05.webp',
    alt: 'Natural manicure without polish showing healthy nail beds'
  },
  {
    id: 17,
    src: '/images/manicure_09.webp',
    alt: 'Gel pedicure with long-lasting shine and professional finish'
  },
  {
    id: 18,
    src: '/images/other_01.webp',
    alt: 'Professional pedicure service with polish application'
  },
  {
    id: 19,
    src: '/images/IMG_0721.webp',
    alt: 'Artistic nail design with detailed work and flawless execution'
  },
  {
    id: 20,
    src: '/images/manicure_04.webp',
    alt: 'Bold nail design with intricate detailing and vibrant colors'
  },
  {
    id: 21,
    src: '/images/manicure_06.webp',
    alt: 'Professional manicure service with attention to detail'
  },
  {
    id: 22,
    src: '/images/manicure_07.webp',
    alt: 'Expert nail care with precision Russian technique'
  },
  {
    id: 23,
    src: '/images/manicure_08.webp',
    alt: 'Beautiful nail design with artistic flair and professional finish'
  },
  {
    id: 24,
    src: '/images/manicure_10.webp',
    alt: 'Sophisticated nail art with elegant design and perfect execution'
  }
]

export default function OurWork() {
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-accent">
              Our Work
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of precision nail artistry, featuring authentic Russian manicure techniques and custom designs crafted in the heart of NYC
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid - 3x8 Layout */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {workImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative aspect-square overflow-hidden rounded-xl shadow-lg transition-all duration-500"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-700"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-accent-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h3 className="text-4xl md:text-5xl font-playfair font-bold text-accent">500+</h3>
              <p className="text-lg text-gray-600">Happy Clients</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h3 className="text-4xl md:text-5xl font-playfair font-bold text-accent">3+</h3>
              <p className="text-lg text-gray-600">Years of Excellence</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h3 className="text-4xl md:text-5xl font-playfair font-bold text-accent">100%</h3>
              <p className="text-lg text-gray-600">Russian Technique</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-max text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-accent">
              Ready for Your Perfect Manicure?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the precision and artistry of authentic Russian manicure techniques. Book your appointment today and discover why our clients trust us with their nail care.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://book.squareup.com/appointments/wrihc8xsibqcv1/location/L08P34K5DVK71/services?buttonTextColor=ffffff&color=a2382f&locale=en&referrer=so"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-md hover:bg-accent/90 transition-colors duration-200 text-lg w-full sm:w-auto"
            >
              Book Appointment
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent text-accent font-semibold rounded-md hover:bg-accent hover:text-white transition-colors duration-200 text-lg w-full sm:w-auto"
            >
              Call Now
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
