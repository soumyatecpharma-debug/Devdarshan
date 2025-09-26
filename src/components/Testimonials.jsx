import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
    image: 'https://images.unsplash.com/photo-1494790108755-2616c2d9b3e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'Sacred Journeys made my Kashi pilgrimage absolutely divine. The arrangements were perfect, and our guide was incredibly knowledgeable about the spiritual significance of each temple. A truly transformative experience!',
    journey: 'Kashi Vishwanath Package'
  },
  {
    id: 2,
    name: 'Rajesh Patel',
    location: 'Ahmedabad, Gujarat',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'The Dwarka tour exceeded all expectations. From comfortable accommodation to the breathtaking sunset views at Bet Dwarka, every moment was magical. The team handled everything with such care and devotion.',
    journey: 'Dwarkadhish Package'
  },
  {
    id: 3,
    name: 'Meera Iyer',
    location: 'Chennai, Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'Built a custom package for my family covering Ayodhya and Puri. The flexibility and attention to our specific needs was remarkable. Our children learned so much about our culture and traditions.',
    journey: 'Custom Package Builder'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    location: 'Jaipur, Rajasthan',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'The Jagannath Puri experience was life-changing. The coordination was seamless, and the spiritual atmosphere was preserved throughout the journey. Highly recommend for anyone seeking inner peace.',
    journey: 'Jagannath Puri Package'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % testimonials.length;
      } else {
        return prev === 0 ? testimonials.length - 1 : prev - 1;
      }
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-beige-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Pilgrim <span className="text-saffron-600">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from fellow devotees who found peace, purpose, and spiritual fulfillment on their sacred journeys
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center group"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-saffron-600 transition-colors" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center group"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-saffron-600 transition-colors" />
          </button>

          {/* Testimonial Cards */}
          <div className="relative h-80 md:h-64 overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col justify-center">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-600">{testimonials[currentIndex].location}</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <Quote className="h-8 w-8 text-saffron-200 ml-auto" />
                  </div>

                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-4 italic">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  <div className="text-sm text-saffron-600 font-medium">
                    — {testimonials[currentIndex].journey}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-saffron-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
