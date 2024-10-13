import React, { useState, useEffect } from 'react';
import { FaHome, FaMapSigns, FaSignInAlt } from 'react-icons/fa'; // Importing Font Awesome icons

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll handler
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false); // Hide the navbar when scrolling down
    } else {
      setIsVisible(true); // Show the navbar when scrolling up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-10/12 z-20 transition-transform duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } backdrop-blur-lg bg-white bg-opacity-10 border border-gray-200 border-opacity-20 rounded-xl shadow-lg py-2`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center space-x-6">
        
        {/* Left Side: Logo and App Name */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full overflow-hidden shadow-md">
            <img src="src/assets/logo1.png" alt="Itinera Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-black font-semibold text-2xl tracking-wide font-[Poppins]">ITINERA</span>
        </div>

        {/* Right Side: Links */}
        <div className="flex space-x-6 text-black font-medium">
          <a href="/" className="flex items-center space-x-1 hover:text-blue-300 transition duration-300">
            <FaHome className="text-black" />
            <span>Home</span>
          </a>
          <a href="/plans" className="flex items-center space-x-1 hover:text-blue-300 transition duration-300">
            <FaMapSigns className="text-black" />
            <span>Plans</span>
          </a>
          <a href="/signup" className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-500 transition duration-300">
            <FaSignInAlt className="text-white" />
            <span>Sign In</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
