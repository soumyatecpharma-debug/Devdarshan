import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Hotel, Utensils, Car, Star, ArrowLeft, ArrowRight, Check } from 'lucide-react';

const steps = [
  { id: 'destination', name: 'Destination', icon: MapPin },
  { id: 'duration', name: 'Duration & Stay', icon: Calendar },
  { id: 'preferences', name: 'Preferences', icon: Utensils },
  { id: 'summary', name: 'Summary', icon: Check }
];

const destinations = [
  { name: 'Kashi', price: 5000, img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc' },
  { name: 'Puri', price: 6000, img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220' },
  { name: 'Ayodhya', price: 4000, img: 'https://images.unsplash.com/photo-1590736969955-71cc94901144' },
  { name: 'Dwarka', price: 5500, img: 'https://images.unsplash.com/photo-1598439210625-5067c578f3f6' }
];

const accommodations = [
  { name: 'Budget', price: 1000, icon: Star, rating: 1 },
  { name: 'Comfort', price: 2500, icon: Star, rating: 2 },
  { name: 'Premium', price: 5000, icon: Star, rating: 3 }
];

const foodOptions = [
  { name: 'Veg', price: 800 },
  { name: 'Jain', price: 1000 },
  { name: 'Satvik', price: 1200 },
  { name: 'Regional', price: 900 }
];

const transportOptions = [
  { name: 'Shared', price: 1500 },
  { name: 'Private Cab', price: 4000 },
  { name: 'AC', price: 500 },
  { name: 'Non-AC', price: 0 }
];

const CustomBuilder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState({
    destinations: [],
    duration: 3,
    accommodation: 'Comfort',
    food: 'Satvik',
    transport: 'Private Cab',
    transportType: 'AC'
  });

  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  const handlePrev = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  const handleSelection = (key, value) => {
    setSelections(prev => ({ ...prev, [key]: value }));
  };

  const toggleDestination = (destName) => {
    const currentDests = selections.destinations;
    if (currentDests.includes(destName)) {
      handleSelection('destinations', currentDests.filter(d => d !== destName));
    } else {
      handleSelection('destinations', [...currentDests, destName]);
    }
  };

  const calculatePrice = () => {
    let price = 0;
    selections.destinations.forEach(destName => {
      price += destinations.find(d => d.name === destName)?.price || 0;
    });
    price += (selections.duration - 1) * (accommodations.find(a => a.name === selections.accommodation)?.price || 0);
    price += selections.duration * (foodOptions.find(f => f.name === selections.food)?.price || 0);
    price += transportOptions.find(t => t.name === selections.transport)?.price || 0;
    price += transportOptions.find(t => t.name === selections.transportType)?.price || 0;
    return price * (selections.destinations.length || 1);
  };

  const totalPrice = calculatePrice();

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Destination
        return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {destinations.map(dest => (
              <motion.div
                key={dest.name}
                onClick={() => toggleDestination(dest.name)}
                className={`relative rounded-xl overflow-hidden cursor-pointer border-4 ${selections.destinations.includes(dest.name) ? 'border-saffron-500' : 'border-transparent'}`}
                whileHover={{ scale: 1.05 }}
              >
                <img src={dest.img} alt={dest.name} className="h-40 w-full object-cover" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg">{dest.name}</div>
                {selections.destinations.includes(dest.name) && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-saffron-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        );
      case 1: // Duration & Stay
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Select Duration (Days)</h3>
              <input
                type="range"
                min="1"
                max="15"
                value={selections.duration}
                onChange={(e) => handleSelection('duration', parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-center text-2xl font-bold text-saffron-600 mt-2">{selections.duration} Days</div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Pick Accommodation</h3>
              <div className="grid grid-cols-3 gap-4">
                {accommodations.map(acc => (
                  <div
                    key={acc.name}
                    onClick={() => handleSelection('accommodation', acc.name)}
                    className={`p-4 rounded-lg cursor-pointer text-center border-2 ${selections.accommodation === acc.name ? 'border-saffron-500 bg-saffron-50' : 'border-gray-200 bg-white'}`}
                  >
                    <div className="flex justify-center mb-2">
                        {[...Array(acc.rating)].map((_,i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                    </div>
                    <p className="font-medium">{acc.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 2: // Preferences
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Food Preferences</h3>
              <div className="grid grid-cols-2 gap-4">
                {foodOptions.map(food => (
                  <button key={food.name} onClick={() => handleSelection('food', food.name)} className={`p-3 rounded-lg border-2 ${selections.food === food.name ? 'border-saffron-500 bg-saffron-50' : 'border-gray-200 bg-white'}`}>{food.name}</button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Transport</h3>
              <div className="grid grid-cols-2 gap-4">
                {transportOptions.slice(0, 2).map(t => (
                  <button key={t.name} onClick={() => handleSelection('transport', t.name)} className={`p-3 rounded-lg border-2 ${selections.transport === t.name ? 'border-saffron-500 bg-saffron-50' : 'border-gray-200 bg-white'}`}>{t.name}</button>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {transportOptions.slice(2, 4).map(t => (
                  <button key={t.name} onClick={() => handleSelection('transportType', t.name)} className={`p-3 rounded-lg border-2 ${selections.transportType === t.name ? 'border-saffron-500 bg-saffron-50' : 'border-gray-200 bg-white'}`}>{t.name}</button>
                ))}
              </div>
            </div>
          </div>
        );
      case 3: // Summary
        return (
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-6">Your Custom Package</h3>
            <div className="space-y-4 text-lg">
              <p><strong>Destinations:</strong> {selections.destinations.join(', ') || 'None'}</p>
              <p><strong>Duration:</strong> {selections.duration} Days</p>
              <p><strong>Accommodation:</strong> {selections.accommodation}</p>
              <p><strong>Food:</strong> {selections.food}</p>
              <p><strong>Transport:</strong> {selections.transport} ({selections.transportType})</p>
            </div>
            <div className="mt-8 text-center">
                <p className="text-gray-600">Estimated Price</p>
                <p className="text-4xl font-bold text-saffron-600">₹{totalPrice.toLocaleString()}</p>
                <p className="text-sm text-gray-500">per person</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          Build Your <span className="text-saffron-600">Sacred Journey</span>
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Create a personalized pilgrimage in just a few steps.
        </p>

        {/* Stepper */}
        <div className="flex justify-between items-center mb-12">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${index <= currentStep ? 'bg-saffron-600 border-saffron-600 text-white' : 'bg-white border-gray-300 text-gray-400'}`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <p className={`mt-2 font-medium ${index <= currentStep ? 'text-saffron-600' : 'text-gray-500'}`}>{step.name}</p>
              </div>
              {index < steps.length - 1 && <div className={`flex-1 h-1 mx-4 ${index < currentStep ? 'bg-saffron-500' : 'bg-gray-300'}`} />}
            </React.Fragment>
          ))}
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {renderStepContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-gray-700 font-semibold shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-5 h-5" /> Previous
          </button>
          
          <div className="text-center">
            <p className="text-gray-600">Estimated Price</p>
            <p className="text-2xl font-bold text-saffron-600">₹{totalPrice.toLocaleString()}</p>
          </div>

          {currentStep < steps.length - 1 ? (
            <button
              onClick={handleNext}
              disabled={currentStep === 0 && selections.destinations.length === 0}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-saffron-600 text-white font-semibold shadow-lg hover:bg-saffron-700 disabled:opacity-50 disabled:bg-saffron-300"
            >
              Next <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-600 text-white font-semibold shadow-lg hover:bg-teal-700">
              Book Custom Package
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomBuilder;
