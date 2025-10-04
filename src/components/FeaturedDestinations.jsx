import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    id: 1,
    name: 'Kashi Vishwanath',
    location: 'Varanasi, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '3 Days / 2 Nights',
    rating: 4.9,
    description: 'Experience the spiritual heart of India with evening Ganga Aarti and temple visits.',
    highlights: ['Ganga Aarti', 'Temple Darshan', 'Boat Ride'],
    price: '₹12,000'
  },
  {
    id: 2,
    name: 'Jagannath Puri',
    location: 'Puri, Odisha',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '4 Days / 3 Nights',
    rating: 4.8,
    description: 'Visit Lord Jagannath temple and experience the sacred beaches of Puri.',
    highlights: ['Jagannath Temple', 'Beach Visit', 'Prasadam'],
    price: '₹15,000'
  },
  {
    id: 3,
    name: 'Ram Janmabhoomi',
    location: 'Ayodhya, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '2 Days / 1 Night',
    rating: 4.9,
    description: 'Explore the birthplace of Lord Rama and witness the grand new temple.',
    highlights: ['Ram Mandir', 'Hanuman Garhi', 'Saryu Aarti'],
    price: '₹8,000'
  },
  {
    id: 4,
    name: 'Dwarkadhish',
    location: 'Dwarka, Gujarat',
    image: 'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '3 Days / 2 Nights',
    rating: 4.7,
    description: 'Visit the kingdom of Lord Krishna and explore ancient temples by the sea.',
    highlights: ['Dwarkadhish Temple', 'Bet Dwarka', 'Sunset View'],
    price: '₹14,000'
  }
];

const FeaturedDestinations = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sacred <span className="text-saffron-600">Destinations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Embark on transformative journeys to India's most revered pilgrimage sites
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-saffron-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {destination.price}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-teal-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{destination.location}</span>
                </div>
                
                <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2">
                  {destination.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>

                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{destination.duration}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-beige-100 text-beige-800 px-2 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/package/${destination.id}`}
                  className="group/btn w-full bg-saffron-600 hover:bg-saffron-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  Explore Package
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 text-saffron-600 hover:text-saffron-700 font-semibold text-lg"
          >
            View All Packages
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
