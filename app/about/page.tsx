'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'It was extremely disappointing to have my nails done by Naomi. She was very professional and did a great job with my nails. I was very happy with the results and will definitely be back.',
    rating: 5
  },
  {
    id: 2,
    name: 'Jessica L.',
    text: 'First time came to Russian manicure and I just loved it! Naomi is very professional and did a great job with my nails. I was very happy with the results and will definitely be back.',
    rating: 5
  },
  {
    id: 3,
    name: 'Maria K.',
    text: 'I found the space that I was in for the nail service was very clean and Naomi was very professional. I would recommend this place to anyone looking for quality nail service.',
    rating: 5
  },
  {
    id: 4,
    name: 'Lisa R.',
    text: 'Naomi did such a beautiful job on my nails. She is very talented and professional. The salon is clean and comfortable. I will definitely be returning!',
    rating: 5
  },
  {
    id: 5,
    name: 'Amanda T.',
    text: 'Amazing work! Naomi is incredibly skilled and my Russian manicure lasted over 3 weeks without chipping. The attention to detail is unmatched.',
    rating: 5
  },
  {
    id: 6,
    name: 'Rachel S.',
    text: 'Best nail experience I\'ve had in NYC. Naomi\'s technique is flawless and she really takes her time to ensure perfection. Highly recommend!',
    rating: 5
  }
]

export default function About() {
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
              About
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the story behind Naomi Nails and our commitment to excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-accent">
                The Story Behind Naomi Nails
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Welcome to Naomi Nails, and I am the founder of this boutique. With over 12 
                  years of experience in the beauty industry, I have dedicated my career to 
                  mastering the art of Russian manicure techniques and creating beautiful, 
                  healthy nails for my clients.
                </p>
                <p>
                  At Naomi Nails, we believe that your nails are an extension of your personality. 
                  Every service is personalized to reflect your unique style while maintaining 
                  the highest standards of nail health and hygiene. I use only premium products 
                  and the latest techniques to ensure long-lasting, flawless results.
                </p>
                <p>
                  Thank you for choosing Naomi Nails. Together, we will create nail art that 
                  speaks for you and makes you feel confident and beautiful every day. Your 
                  satisfaction is my priority, and I look forward to welcoming you to our salon.
                </p>
              </div>
              <Button size="lg" asChild>
                <Link href="https://book.squareup.com/appointments/wrihc8xsibqcv1/location/L08P34K5DVK71/services?buttonTextColor=ffffff&color=a2382f&locale=en&referrer=so">
                  Book Appointment
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
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/Naima_02.webp"
                  alt="Naomi, founder of Naomi Nails, working on a client's manicure with professional Russian technique"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Rated By You
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what our clients say about their experience at Naomi Nails
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
                className="bg-white p-6 rounded-lg shadow-md card-hover"
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

      {/* Values Section */}
      <section className="section-padding bg-cream">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-accent">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl text-white">✨</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-accent">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  We strive for perfection in every service, using only the finest techniques and products.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl text-white">💎</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-accent">
                  Precision
                </h3>
                <p className="text-gray-600">
                  Our Russian manicure techniques ensure precise, detailed work that lasts.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-accent">
                  Care
                </h3>
                <p className="text-gray-600">
                  Your nail health and satisfaction are our top priorities in every appointment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
