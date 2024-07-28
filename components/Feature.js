import React from 'react';
import { Clock, Users, Shield, Smartphone, Award, HeartPulse } from 'lucide-react';

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      {icon}
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

const Feature = () => {
  const features = [
    {
      icon: <Clock className="w-12 h-12 text-blue-500" />,
      title: "24/7 Availability",
      description: "Access healthcare services anytime, day or night, ensuring continuous care."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Expert Team",
      description: "Our network of qualified healthcare professionals provides top-notch care."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Data Security",
      description: "Your medical information is protected with state-of-the-art security measures."
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-500" />,
      title: "Mobile Access",
      description: "Manage your health on-the-go with our user-friendly mobile application."
    },
    {
      icon: <Award className="w-12 h-12 text-blue-500" />,
      title: "Quality Assurance",
      description: "We maintain high standards of care, consistently exceeding industry benchmarks."
    },
    {
      icon: <HeartPulse className="w-12 h-12 text-blue-500" />,
      title: "Personalized Care",
      description: "Tailored healthcare plans that adapt to your unique needs and preferences."
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Our Healthcare System?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience the difference with our innovative and patient-centered approach.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
