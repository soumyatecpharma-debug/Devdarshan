import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, CheckCircle, XCircle, PlusCircle, ArrowRight, Shield, Utensils, Hotel, Car, Calendar, Sun, Moon } from 'lucide-react';

// Mock data - in a real app, this would come from an API
const packagesData = [
    { id: '1', name: 'Kashi Vishwanath Darshan', location: 'Varanasi', image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc', duration: '3 Days / 2 Nights', basePrice: 12000, rating: 4.9, description: 'Experience the spiritual heart of India with evening Ganga Aarti and temple visits.' },
    { id: '2', name: 'Jagannath Puri Sacred Journey', location: 'Puri', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220', duration: '4 Days / 3 Nights', basePrice: 15000, rating: 4.8, description: 'Visit Lord Jagannath temple and experience the sacred beaches of Puri.' },
    { id: '3', name: 'Ram Janmabhoomi Ayodhya', location: 'Ayodhya', image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144', duration: '2 Days / 1 Night', basePrice: 8000, rating: 4.9, description: 'Explore the birthplace of Lord Rama and witness the grand new temple.' },
    { id: '4', name: 'Dwarkadhish Divine Experience', location: 'Dwarka', image: 'https://images.unsplash.com/photo-1598439210625-5067c578f3f6', duration: '3 Days / 2 Nights', basePrice: 14000, rating: 4.7, description: 'Visit the kingdom of Lord Krishna and explore ancient temples by the sea.' },
    { id: '5', name: 'Four Dham Complete Yatra', location: 'Multi-City', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4', duration: '12 Days / 11 Nights', basePrice: 45000, rating: 4.9, description: 'Complete spiritual journey covering all four sacred destinations.' },
    { id: '6', name: 'Weekend Spiritual Retreat', location: 'Rishikesh', image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579', duration: '2 Days / 1 Night', basePrice: 6000, rating: 4.6, description: 'Perfect weekend getaway for spiritual rejuvenation and inner peace.' }
];

const packageDetailsContent = {
  itinerary: [
    { day: 1, title: 'Arrival & Evening Ganga Aarti', description: 'Arrive in Varanasi, check-in to your hotel. In the evening, witness the spectacular Ganga Aarti ceremony at Dashashwamedh Ghat. Overnight stay in Varanasi.' },
    { day: 2, title: 'Temple Darshan & Sarnath', description: 'Morning visit to Kashi Vishwanath Temple, Annapurna Temple. Afternoon excursion to Sarnath, where Lord Buddha gave his first sermon. Return to hotel for overnight stay.' },
    { day: 3, title: 'Departure', description: 'After breakfast, you can explore local markets for some souvenir shopping. Later, you will be transferred to the airport/railway station for your onward journey.' }
  ],
  includes: ['Accommodation in verified hotels', 'Daily Satvik breakfast', 'AC vehicle for all transfers & sightseeing', 'Certified local guide', 'All applicable taxes'],
  excludes: ['Airfare/Train fare', 'Lunch and Dinner', 'Any personal expenses', 'Entry fees to monuments', 'Optional puja costs'],
  addOns: [
    { name: 'Private Ganga Boat Ride', price: 1500, description: 'A serene boat ride at sunrise.' },
    { name: 'Special Puja Booking', price: 2500, description: 'Pre-booked special access puja.' },
    { name: 'Sarnath Museum Visit', price: 500, description: 'Explore ancient Buddhist artifacts.' }
  ],
  whyChoose: [
    { icon: Car, title: 'Transportation', description: 'Safe, comfortable, and verified vehicles for all your travel needs.' },
    { icon: Calendar, title: 'Planning', description: 'Stress-free scheduling, with all permits and bookings handled by us.' },
    { icon: Hotel, title: 'Accommodation', description: 'Stay in handpicked, verified hotels offering comfort and safety.' },
    { icon: Utensils, title: 'Food', description: 'Enjoy delicious Satvik meals and regional cuisines, customizable to your preference.' },
    { icon: Shield, title: 'Guided Visits', description: 'Certified local guides providing deep spiritual and historical context.' },
    { icon: Sun, title: 'Best Time to Visit', description: 'Guidance on the best months for pleasant weather and significant rituals.' }
  ]
};

const PackageDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('itinerary');
  const pkg = packagesData.find(p => p.id === id);

  if (!pkg) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-bold">Package not found.</h1>
        <Link to="/packages" className="text-saffron-600 hover:underline mt-4 inline-block">
          Back to Packages
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-16 bg-beige-50">
      {/* Header Section */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[50vh] min-h-[400px]"
      >
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${pkg.image})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 text-white">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold">{pkg.name}</h1>
          <div className="flex items-center gap-6 mt-4 text-lg">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{pkg.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span>{pkg.rating} / 5.0</span>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {['itinerary', 'includes/excludes', 'add-ons'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`${
                      activeTab === tab
                        ? 'border-saffron-500 text-saffron-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
            >
              {activeTab === 'itinerary' && (
                <div className="space-y-6">
                  {packageDetailsContent.itinerary.map(item => (
                    <div key={item.day} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-saffron-100 text-saffron-600 rounded-full flex items-center justify-center font-bold">{item.day}</div>
                        {item.day < packageDetailsContent.itinerary.length && <div className="w-px h-full bg-gray-200" />}
                      </div>
                      <div>
                        <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'includes/excludes' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-gray-800 mb-4">What's Included</h3>
                    <ul className="space-y-3">
                      {packageDetailsContent.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-gray-800 mb-4">What's Excluded</h3>
                    <ul className="space-y-3">
                      {packageDetailsContent.excludes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              {activeTab === 'add-ons' && (
                 <div className="space-y-4">
                    {packageDetailsContent.addOns.map((item, i) => (
                        <div key={i} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                            <div>
                                <h4 className="font-semibold text-gray-800">{item.name}</h4>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-saffron-600">₹{item.price.toLocaleString()}</p>
                                <button className="mt-1 text-sm text-teal-600 hover:text-teal-700 flex items-center gap-1">
                                    <PlusCircle className="h-4 w-4" /> Add
                                </button>
                            </div>
                        </div>
                    ))}
                 </div>
              )}
            </motion.div>

            {/* Why Choose Us Section */}
            <div className="mt-12">
                <h2 className="font-playfair text-3xl font-bold text-gray-800 mb-8">Why Choose This Package</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {packageDetailsContent.whyChoose.map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <item.icon className="h-10 w-10 text-saffron-600 mb-4" />
                            <h4 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
          </div>

          {/* Right Column (Booking Card) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-8 rounded-2xl shadow-2xl"
                >
                    <div className="mb-6">
                        <span className="text-gray-600">Starting from</span>
                        <p className="text-4xl font-bold text-saffron-600">₹{pkg.basePrice.toLocaleString()}</p>
                        <p className="text-sm text-gray-500">per person</p>
                    </div>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Travel Date</label>
                            <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Number of Pilgrims</label>
                            <input type="number" min="1" defaultValue="2" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500" />
                        </div>
                        <button className="w-full bg-saffron-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-saffron-700 transition-colors flex items-center justify-center gap-2">
                            Book Now <ArrowRight className="h-5 w-5" />
                        </button>
                    </form>
                    <p className="text-xs text-center text-gray-500 mt-4">Safe & Secure Payments. 100% Refund on Cancellation*</p>
                </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
