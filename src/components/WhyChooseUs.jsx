import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Zap, Users, Award, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const pillars = [
    {
      icon: Shield,
      title: 'Safety & Security',
      description: 'Your safety is our priority. Verified accommodations, reliable transport, and 24/7 support ensure worry-free journeys.',
      color: 'from-blue-500 to-teal-500'
    },
    {
      icon: Heart,
      title: 'Authentic Experiences',
      description: 'Deep spiritual connections through certified local guides, traditional rituals, and access to sacred ceremonies.',
      color: 'from-saffron-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Complete Flexibility',
      description: 'Customize every aspect of your journey. From budget options to luxury experiences, we adapt to your needs.',
      color: 'from-teal-500 to-green-500'
    }
  ];

  const features = [
    { icon: Users, title: 'Expert Local Guides', desc: 'Certified spiritual guides with deep knowledge' },
    { icon: Award, title: 'Premium Quality', desc: 'Hand-picked accommodations and services' },
    { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock assistance during your journey' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-saffron-600">Sacred Journeys</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver values through sacred journeys, ensuring every pilgrimage becomes 
            a transformative experience of faith, safety, and spiritual growth.
          </p>
        </motion.div>

        {/* Main Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group text-center"
            >
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${pillar.color} p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <pillar.icon className="w-full h-full text-white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-beige-50 to-saffron-50 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-saffron-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: '10,000+', label: 'Happy Pilgrims' },
            { number: '500+', label: 'Sacred Journeys' },
            { number: '4.9/5', label: 'Average Rating' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-saffron-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
