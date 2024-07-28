import React from 'react';
import PricingCard from './PricingCard'; 

const Service = () => {
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
    <div className="container mx-auto px-4 mt-8">
      <h2 className="text-3xl font-extrabold text-center mb-4">Premium Plans</h2>
      <p className="text-center mb-8 text-gray-600">
        Sample text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc justo, sagittis suscipit ultrices.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default Service;
