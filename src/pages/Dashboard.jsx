import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Briefcase, Heart, LifeBuoy, LogOut, ChevronRight } from 'lucide-react';

const mockTrips = {
  ongoing: [
    { id: 'trip1', name: 'Kashi Vishwanath Darshan', date: '25 Dec 2025 - 27 Dec 2025', status: 'Confirmed', price: '₹24,000' }
  ],
  past: [
    { id: 'trip2', name: 'Jagannath Puri Sacred Journey', date: '10 Jun 2024 - 13 Jun 2024', status: 'Completed', price: '₹30,000' },
    { id: 'trip3', name: 'Dwarkadhish Divine Experience', date: '15 Feb 2023 - 17 Feb 2023', status: 'Completed', price: '₹28,000' }
  ]
};

const Dashboard = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('trips');

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  const renderContent = () => {
    switch(activeTab) {
      case 'trips':
        return <TripsContent />;
      case 'profile':
        return <ProfileContent user={user} />;
      case 'support':
        return <SupportContent />;
      default:
        return <TripsContent />;
    }
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800">
            Welcome, {user?.name || 'Pilgrim'}
          </h1>
          <p className="text-lg text-gray-600 mt-2">Manage your sacred journeys and profile details.</p>
        </motion.div>

        <div className="mt-8 lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 mb-8 lg:mb-0">
            <div className="bg-white rounded-xl shadow-lg p-4 sticky top-24">
              <ul>
                {[
                  { id: 'trips', name: 'My Trips', icon: Briefcase },
                  { id: 'profile', name: 'My Profile', icon: User },
                  { id: 'support', name: 'Support', icon: LifeBuoy }
                ].map(item => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-left font-medium transition-colors ${
                        activeTab === item.id ? 'bg-saffron-100 text-saffron-700' : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </button>
                  </li>
                ))}
                <li>
                  <button onClick={logout} className="w-full flex items-center gap-3 p-3 mt-2 rounded-lg text-left font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors">
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              {renderContent()}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TripsContent = () => (
    <div>
        <h2 className="font-playfair text-2xl font-bold text-gray-800 mb-6">My Trips</h2>
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-semibold text-saffron-600 mb-4">Ongoing / Upcoming Trips</h3>
                {mockTrips.ongoing.map(trip => <TripCard key={trip.id} trip={trip} />)}
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-500 mb-4">Past Trips</h3>
                {mockTrips.past.map(trip => <TripCard key={trip.id} trip={trip} />)}
            </div>
        </div>
    </div>
);

const TripCard = ({ trip }) => (
    <div className="border border-gray-200 rounded-lg p-4 mb-4 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-gray-50 transition-colors">
        <div>
            <p className="font-bold text-gray-800">{trip.name}</p>
            <p className="text-sm text-gray-600">{trip.date}</p>
            <p className="text-sm font-medium text-gray-700 mt-1">Total Price: {trip.price}</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-4">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${trip.status === 'Completed' ? 'bg-gray-200 text-gray-700' : 'bg-green-100 text-green-700'}`}>
                {trip.status}
            </span>
            <button className="text-saffron-600 hover:text-saffron-700">
                <ChevronRight className="h-5 w-5" />
            </button>
        </div>
    </div>
);

const ProfileContent = ({ user }) => (
    <div>
        <h2 className="font-playfair text-2xl font-bold text-gray-800 mb-6">My Profile</h2>
        <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" defaultValue={user?.name} className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50" readOnly />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" defaultValue={user?.email} className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50" readOnly />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" className="w-full p-3 border border-gray-300 rounded-lg" />
            </div>
            <div className="pt-4">
                <button type="submit" className="px-6 py-3 bg-saffron-600 text-white font-semibold rounded-lg hover:bg-saffron-700">
                    Save Changes
                </button>
            </div>
        </form>
    </div>
);

const SupportContent = () => (
    <div>
        <h2 className="font-playfair text-2xl font-bold text-gray-800 mb-6">Support Center</h2>
        <p className="text-gray-600 mb-6">Have questions or need help with your booking? Our team is here for you 24/7.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
                <p className="text-gray-600"><strong>Email:</strong> support@sacredjourneys.com</p>
                <p className="text-gray-600"><strong>Phone:</strong> +91 98765 43210</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Frequently Asked Questions</h3>
                <a href="#" className="text-saffron-600 hover:underline">Visit our FAQ page</a>
            </div>
        </div>
    </div>
);


export default Dashboard;
