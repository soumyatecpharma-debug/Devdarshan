import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Packages from './pages/Packages';
import PackageDetails from './pages/PackageDetails';
import CustomBuilder from './pages/CustomBuilder';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white font-inter">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/package/:id" element={<PackageDetails />} />
            <Route path="/custom-builder" element={<CustomBuilder />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
