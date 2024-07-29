import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-300 shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold text-gray-800 hover:text-gray-600 transition duration-300">
              Solution Group
            </Link>
          </div>
          <div className="hidden md:flex md:space-x-2 ml-auto">
            <Link href="/" className="text-black text-lg hover:text-white hover:bg-blue-400 px-3 py-2 rounded-md ">
              Home
            </Link>
            <Link href="/about" className="text-black text-lg hover:text-white hover:bg-blue-400 px-3 py-2 rounded-md ">
              About
            </Link>
            <Link href="/services" className="text-black text-lg hover:text-white hover:bg-blue-400 px-3 py-2 rounded-md ">
              Services
            </Link>
            <Link href="/contact" className="text-black text-lg hover:text-white hover:bg-blue-400 px-3 py-2 rounded-md ">
              Contact
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white shadow-md`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600 hover:bg-blue-200 transition duration-300" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600 hover:bg-blue-200 transition duration-300" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600 hover:bg-blue-200 transition duration-300" onClick={toggleMenu}>
            Services
          </Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600 hover:bg-blue-200 transition duration-300" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;