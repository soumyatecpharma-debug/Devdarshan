import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20 bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-beige-50 to-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In <span className="text-saffron-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are here to help you plan your next spiritual journey. Reach out to us with your questions.
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl p-8"
          >
            <h2 className="font-playfair text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" placeholder="you@example.com" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows="4" placeholder="How can we help you?" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-saffron-600 text-white py-3 rounded-lg font-semibold hover:bg-saffron-700 transition-colors">
                  <Send className="h-5 w-5" /> Send Message
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="font-playfair text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-saffron-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-saffron-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+919876543210" className="text-gray-600 hover:text-saffron-600">+91 98765 43210</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-saffron-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-saffron-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@sacredjourneys.com" className="text-gray-600 hover:text-saffron-600">info@sacredjourneys.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-saffron-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-saffron-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Office Address</p>
                    <p className="text-gray-600">123 Spiritual Street, New Delhi, India - 110001</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl shadow-lg h-64 flex items-center justify-center text-gray-500">
              <p>Google Map Embed Placeholder</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
