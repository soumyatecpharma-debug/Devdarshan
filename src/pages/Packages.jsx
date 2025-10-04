import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Grid, List, Search, MapPin, Clock, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const packagesData = [
  {
    id: 1,
    name: 'Kashi Vishwanath Darshan',
    location: 'Varanasi, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '3 Days / 2 Nights',
    rating: 4.9,
    price: '₹12,000',
    originalPrice: '₹15,000',
    category: 'spiritual',
    highlights: ['Ganga Aarti', 'Temple Darshan', 'Boat Ride', 'Guided Tours'],
    description: 'Experience the spiritual heart of India with evening Ganga Aarti and temple visits.',
    badge: 'Popular'
  },
  {
    id: 2,
    name: 'Jagannath Puri Sacred Journey',
    location: 'Puri, Odisha',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '4 Days / 3 Nights',
    rating: 4.8,
    price: '₹15,000',
    originalPrice: '₹18,000',
    category: 'spiritual',
    highlights: ['Jagannath Temple', 'Beach Visit', 'Prasadam', 'Cultural Programs'],
    description: 'Visit Lord Jagannath temple and experience the sacred beaches of Puri.',
    badge: 'Limited Offer'
  },
  {
    id: 3,
    name: 'Ram Janmabhoomi Ayodhya',
    location: 'Ayodhya, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '2 Days / 1 Night',
    rating: 4.9,
    price: '₹8,000',
    originalPrice: '₹10,000',
    category: 'spiritual',
    highlights: ['Ram Mandir', 'Hanuman Garhi', 'Saryu Aarti', 'Heritage Walk'],
    description: 'Explore the birthplace of Lord Rama and witness the grand new temple.',
    badge: 'New'
  },
  {
    id: 4,
    name: 'Dwarkadhish Divine Experience',
    location: 'Dwarka, Gujarat',
    image: 'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '3 Days / 2 Nights',
    rating: 4.7,
    price: '₹14,000',
    originalPrice: '₹17,000',
    category: 'spiritual',
    highlights: ['Dwarkadhish Temple', 'Bet Dwarka', 'Sunset View', 'Lighthouse'],
    description: 'Visit the kingdom of Lord Krishna and explore ancient temples by the sea.',
    badge: 'Trending'
  },
  {
    id: 5,
    name: 'Four Dham Complete Yatra',
    location: 'Multi-City',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '12 Days / 11 Nights',
    rating: 4.9,
    price: '₹45,000',
    originalPrice: '₹55,000',
    category: 'premium',
    highlights: ['All 4 Dhams', 'Luxury Stay', 'Private Guide', 'Flight Included'],
    description: 'Complete spiritual journey covering all four sacred destinations.',
    badge: 'Premium'
  },
  {
    id: 6,
    name: 'Weekend Spiritual Retreat',
    location: 'Rishikesh, Uttarakhand',
    image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '2 Days / 1 Night',
    rating: 4.6,
    price: '₹6,000',
    originalPrice: '₹8,000',
    category: 'budget',
    highlights: ['Yoga Sessions', 'River Aarti', 'Meditation', 'Nature Walk'],
    description: 'Perfect weekend getaway for spiritual rejuvenation and inner peace.',
    badge: 'Weekend Special'
  }
];

const Packages = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    { value: 'all', label: 'All Packages' },
    { value: 'spiritual', label: 'Spiritual' },
    { value: 'premium', label: 'Premium' },
    { value: 'budget', label: 'Budget' }
  ];

  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'duration', label: 'Duration' }
  ];

  const filteredPackages = packagesData
    .filter(pkg => 
      (selectedCategory === 'all' || pkg.category === selectedCategory) &&
      (pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       pkg.location.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, ''));
        case 'price-high':
          return parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'duration':
          return parseInt(a.duration) - parseInt(b.duration);
        default:
          return 0;
      }
    });

  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sacred <span className="text-saffron-600">Packages</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated pilgrimage packages designed for spiritual transformation
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search packages or destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
              >
                <Grid className="h-5 w-5 text-gray-600" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
              >
                <List className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <p className="text-gray-600">
            Showing {filteredPackages.length} package{filteredPackages.length !== 1 ? 's' : ''}
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </motion.div>

        {/* Custom Package Builder Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-saffron-500 to-teal-500 rounded-2xl p-8 mb-8 text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-playfair text-2xl font-bold mb-2">
                Build Your Custom Package
              </h3>
              <p className="text-lg opacity-90">
                Create a personalized pilgrimage experience tailored to your needs
              </p>
            </div>
            <Link
              to="/custom-builder"
              className="bg-white text-saffron-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              Start Building
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>

        {/* Packages Grid/List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          {filteredPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-80' : ''}`}>
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className={`object-cover group-hover:scale-110 transition-transform duration-500 ${
                    viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'
                  }`}
                />
                {pkg.badge && (
                  <div className="absolute top-4 left-4 bg-saffron-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {pkg.badge}
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{pkg.rating}</span>
                </div>
                <div className="absolute bottom-4 right-4 text-right">
                  <div className="text-white text-lg font-bold">{pkg.price}</div>
                  {pkg.originalPrice && (
                    <div className="text-white/80 text-sm line-through">{pkg.originalPrice}</div>
                  )}
                </div>
              </div>

              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-center gap-2 text-teal-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{pkg.location}</span>
                </div>
                
                <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2">
                  {pkg.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {pkg.description}
                </p>

                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{pkg.duration}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-beige-100 text-beige-800 px-2 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                  {pkg.highlights.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{pkg.highlights.length - 3} more
                    </span>
                  )}
                </div>

                <Link
                  to={`/package/${pkg.id}`}
                  className="group/btn w-full bg-saffron-600 hover:bg-saffron-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  View Details
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredPackages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No packages found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Link
              to="/custom-builder"
              className="inline-flex items-center gap-2 bg-saffron-600 text-white px-6 py-3 rounded-lg hover:bg-saffron-700 transition-colors"
            >
              Create Custom Package
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Packages;
