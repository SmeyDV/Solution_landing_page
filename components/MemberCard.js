import React, { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

const MemberCard = ({ name, role, bio, isMain }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className={`bg-white shadow rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-custom-orange-2xl ${
          isMain ? 'col-span-3 row-span-2 shadow-xl' : 'shadow-lg'
        }`}
      >
        <div className={`bg-gray-200 flex items-center justify-center ${isMain ? 'h-64' : 'h-48'}`}>
          <Image
            src={'/profile.webp'}
            width={isMain ? 300 : 200}
            height={isMain ? 300 : 200}
            alt={name}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="p-4">
          <h3 className={`text-center font-semibold text-gray-800 ${isMain ? 'text-2xl' : 'text-xl'}`}>{name}</h3>
          <p className="text-center mt-2 text-gray-600">{role}</p>
          <div className="flex justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
            >
            View More
          </button>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold ">{name}</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-600 mb-2">
              <strong>Role:</strong> {role}
            </p>
            <p className="text-gray-700">{bio}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MemberCard;