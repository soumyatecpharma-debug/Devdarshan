import React from 'react';
import Hero from '../components/Hero';
import FeaturedDestinations from '../components/FeaturedDestinations';
import CustomBuilderTeaser from '../components/CustomBuilderTeaser';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import TrustBadges from '../components/TrustBadges';

const Homepage = () => {
  return (
    <div className="pt-16">
      <Hero />
      <FeaturedDestinations />
      <CustomBuilderTeaser />
      <WhyChooseUs />
      <Testimonials />
      <TrustBadges />
    </div>
  );
};

export default Homepage;
