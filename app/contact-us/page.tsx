'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ fullName: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Map Section */}
      <section className="relative h-64 sm:h-80 lg:h-96 bg-gray-200">
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
          <div className="text-center space-y-2">
            <MapPin className="w-12 h-12 text-primary mx-auto" />
            <p className="text-gray-600 font-medium">Interactive Map</p>
            <p className="text-sm text-gray-500">17-39 West 45th Street Floor 10</p>
          </div>
        </div>
        {/* You can replace this with actual Google Maps embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193647.2851463513!2d-74.14308561797989!3d40.679723129076194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2596c07ea5d25%3A0xf2cd0e6c3387ee41!2sRussian%20Manicure%20%7C%20Naomi%20Nails!5e0!3m2!1sen!2sin!4v1756357412110!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
      </section>

      {/* Location & Contact Info */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Location & Hours */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-playfair font-bold text-accent">
                Location & Hours
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-accent">Address</p>
                    <p className="text-gray-600">17-39 West 45th Street Floor 10</p>
                    <p className="text-gray-600">New York City, New York 10036</p>
                    <p className="text-primary text-sm mt-1">(347) 721 0921</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-accent">Opening Hours</p>
                    <p className="text-gray-600">Mon-Sun: 9:00 am-8:00 pm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-accent">Phone</p>
                    <a href="tel:+13477210921" className="text-primary hover:text-primary-800">
                      (347) 721 0921
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-accent">Email</p>
                    <a href="mailto:hello@naominails.com" className="text-primary hover:text-primary-800">
                      hello@naominails.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button size="lg" asChild>
                  <a href="https://maps.google.com/?q=17-39+West+45th+Street+Floor+10+New+York+NY+10036" 
                     target="_blank" 
                     rel="noopener noreferrer">
                    Get Directions
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-playfair font-bold text-accent">
                Contact us
              </h2>
              <p className="text-gray-600">
                Reach out to us and let us know if there is anything we can do for you
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                  />
                </div>

                <div className="text-sm text-gray-500 space-y-2">
                  <p>
                    You may receive marketing and promotional materials. Contact the merchant for their 
                    privacy practices.
                  </p>
                  <p>
                    This form is protected by reCAPTCHA and the Google{' '}
                    <a href="#" className="text-primary hover:underline">Privacy Policy</a> and{' '}
                    <a href="#" className="text-primary hover:underline">Terms of Service</a> apply.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full sm:w-auto px-8"
                >
                  Submit
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
