// Navbar.jsx
import React from 'react';
import { FaHome, FaMapSigns, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="bg-transparent absolute w-full z-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden shadow-md">
            <img src="src/assets/logo1.png" alt="Itinera Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-white font-extrabold text-2xl tracking-wide font-roboto">Itinera</span>
        </div>

        <div className="flex space-x-8 text-white font-medium">
          <Link to="/" className="flex items-center space-x-2 hover:text-blue-200 transition duration-300">
            <FaHome className="text-white" />
            <span>Home</span>
          </Link>
          <Link to="/plans" className="flex items-center space-x-2 hover:text-blue-200 transition duration-300">
            <FaMapSigns className="text-white" />
            <span>Plans</span>
          </Link>
          <Link to="/signup" className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-full shadow-md hover:bg-blue-500 transition duration-300">
            <FaSignInAlt className="text-white" />
            <span>Sign Up</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
