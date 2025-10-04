import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Clock, Users, CheckCircle, Star } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: 'Verified Hotels',
      description: 'All accommodations are personally verified for safety and comfort',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      title: 'Certified Guides',
      description: 'Local spiritual guides with official certification and deep knowledge',
      color: 'from-saffron-500 to-saffron-600'
    },
    {
      icon: CheckCircle,
      title: 'Safe Payments',
      description: 'SSL encrypted transactions with multiple secure payment options',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance during your entire spiritual journey',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Users,
      title: '10,000+ Pilgrims',
      description: 'Trusted by thousands of devotees for their sacred journeys',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Star,
      title: '4.9/5 Rating',
      description: 'Consistently high ratings from satisfied pilgrims across India',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Your Trust is Our <span className="text-saffron-600">Foundation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built our reputation on delivering safe, authentic, and transformative 
            pilgrimage experiences that exceed expectations every time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${badge.color} p-2.5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <badge.icon className="w-full h-full text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 group-hover:text-saffron-600 transition-colors">
                    {badge.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-saffron-50 to-teal-50 rounded-2xl p-8"
        >
          <div className="text-center">
            <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">
              Licensed & Insured Travel Partner
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>IATA Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Government Licensed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Travel Insurance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Emergency Response</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;
