import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PricingCard from './PricingCard';

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const plans = [
    {
      title: 'STANDARD',
      price: 29,
      features: ['5 Users', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
      title: 'BUSINESS',
      price: 59,
      features: ['15 Users', 'Feature 2', 'Feature 3', 'Feature 4'],
      isHighlighted: true,
    },
    {
      title: 'PROFESSIONAL',
      price: 239,
      features: ['Unlimited Users', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
  ];

  return (
    <div className="container mx-auto px-4 mt-32 mb-32">
      <h2 className="text-3xl font-extrabold text-center mb-4" data-aos="zoom-in">Premium Plans</h2>
      <p className="text-center mb-8 text-gray-600" data-aos="zoom-in" data-aos-delay="100">
        Sample text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc justo, sagittis suscipit ultrices.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div data-aos="zoom-in" data-aos-delay="400">
          <PricingCard {...plans[0]} />
        </div>
        <div data-aos="zoom-in" data-aos-delay="0">
          <PricingCard {...plans[1]} />
        </div>
        <div data-aos="zoom-in" data-aos-delay="200">
          <PricingCard {...plans[2]} />
        </div>
      </div>
    </div>
  );
};

export default Service;
