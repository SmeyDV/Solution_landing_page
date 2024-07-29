import React from 'react';

const PricingCard = ({ title, price, features, isHighlighted }) => (
  <div
    className={`p-6 rounded-lg shadow-lg transition-colors duration-300 transform hover:scale-105 ${
      title === 'BUSINESS'
        ? 'bg-black text-white hover:bg-gray-900'
        : isHighlighted
        ? 'bg-blue-500 text-white hover:bg-blue-600'
        : 'bg-gray-100 hover:bg-gray-200'
    }`}
  >
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <div className="text-3xl font-bold mb-4">${price}</div>
    <p className="text-sm mb-4">per month</p>
    <ul className="mb-6">
      {features.map((feature, index) => (
        <li key={index} className="mb-2">
          {feature}
        </li>
      ))}
    </ul>
    <button
      className={`w-full py-2 rounded transition-colors duration-300 ${
        title === 'BUSINESS'
          ? 'bg-white text-black hover:bg-gray-300'
          : isHighlighted
          ? 'bg-white text-blue-500 hover:bg-blue-100'
          : 'bg-black text-white hover:bg-gray-900'
      }`}
    >
      GET PLAN
    </button>
  </div>
);

export default PricingCard;
