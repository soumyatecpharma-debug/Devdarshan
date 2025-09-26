import React from 'react';
import { motion } from 'framer-motion';
import { Settings, MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomBuilderTeaser = () => {
  const features = [
    { icon: MapPin, title: 'Choose Destinations', desc: 'Select from 4 sacred sites' },
    { icon: Calendar, title: 'Pick Duration', desc: 'Flexible trip lengths' },
    { icon: Users, title: 'Group Size', desc: 'Solo to family groups' },
    { icon: Settings, title: 'Customize', desc: 'Hotels, meals, transport' }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-saffron-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Build Your Own <span className="text-saffron-600">Sacred Journey</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Create a personalized pilgrimage experience tailored to your spiritual needs, 
                preferences, and schedule with our intelligent package builder.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-saffron-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/custom-builder"
                className="group inline-flex items-center gap-3 bg-saffron-600 hover:bg-saffron-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Building
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Interactive Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-2">
                    Mini Configurator Preview
                  </h3>
                  <p className="text-gray-600">See how easy it is to customize</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Destinations</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Kashi', 'Puri', 'Ayodhya', 'Dwarka'].map((dest, index) => (
                        <motion.button
                          key={dest}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`p-2 rounded-lg text-sm font-medium transition-colors ${
                            index < 2 
                              ? 'bg-saffron-100 text-saffron-700 border-2 border-saffron-300' 
                              : 'bg-gray-100 text-gray-600 border-2 border-gray-200'
                          }`}
                        >
                          {dest}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                    <div className="bg-gray-100 rounded-lg p-1 flex">
                      <button className="flex-1 bg-saffron-600 text-white py-2 rounded-md text-sm font-medium">
                        5 Days
                      </button>
                      <button className="flex-1 text-gray-600 py-2 text-sm">7 Days</button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-saffron-50 to-teal-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Estimated Cost</span>
                      <span className="text-2xl font-bold text-saffron-600">₹18,500</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Per person</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-saffron-400 to-teal-400 rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-teal-400 to-saffron-400 rounded-full opacity-20 blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomBuilderTeaser;
