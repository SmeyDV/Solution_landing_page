import React, { useState } from 'react';
import { Users, X } from 'lucide-react';

const MemberCard = ({ name, role, bio }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          <img 
            src={`https://via.placeholder.com/200?text=${name}`} 
            alt={name} 
            className="object-cover w-full h-full" 
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="mt-2 text-gray-600">{role}</p>
          <button 
            onClick={() => setShowModal(true)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
          >
            View More
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{name}</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-600 mb-2"><strong>Role:</strong> {role}</p>
            <p className="text-gray-700">{bio}</p>
          </div>
        </div>
      )}
    </>
  );
};

const About = () => {
  const members = [
    { 
      name: 'Vichea', 
      role: 'Project Manager',
      bio: 'Vichea brings 5 years of experience in healthcare project management, specializing in integrating innovative technologies into traditional healthcare systems.'
    },
    { 
      name: 'Rindy', 
      role: 'Lead Developer',
      bio: 'With a strong background in full-stack development, Keteyos leads our technical team in creating robust and scalable healthcare solutions.'
    },
    { 
      name: 'Smey', 
      role: 'UX/UI Designer',
      bio: 'Rindy\'s expertise in user-centered design ensures our solutions are not only functional but also intuitive and accessible to all users.'
    },
    { 
      name: 'Reach', 
      role: 'Data Scientist',
      bio: 'Reach specializes in healthcare analytics, using machine learning to derive actionable insights from complex medical data.'
    },
    { 
      name: 'Chungpat', 
      role: 'Security Specialist',
      bio: 'With a focus on healthcare data protection, Chungpat ensures our systems meet the highest standards of security and compliance.'
    },
    { 
      name: 'Keteyos', 
      role: 'Healthcare Consultant',
      bio: 'Reaksmey\'s background in healthcare administration provides valuable insights, ensuring our solutions address real-world healthcare challenges.'
    }
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Users className="mx-auto h-12 w-12 text-blue-600" />
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Meet the brilliant minds behind Solution Group, driving innovation in healthcare technology.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Solution Group</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600">
            Together, we're committed to revolutionizing healthcare through innovative solutions and dedication to excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
