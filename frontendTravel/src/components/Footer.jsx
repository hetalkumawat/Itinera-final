import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Importing social media icons
import { FaHeart } from 'react-icons/fa'; // Importing heart icon

const Footer = () => {
  return (
    <footer className="bg-indigo-500 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
          <a href="/about" className="hover:text-blue-200 transition duration-300">About</a>
          <a href="/contact" className="hover:text-blue-200 transition duration-300">Contact</a>
          <a href="/privacy" className="hover:text-blue-200 transition duration-300">Privacy Policy</a>
          <a href="/terms" className="hover:text-blue-200 transition duration-300">Terms of Service</a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition duration-300">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition duration-300">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition duration-300">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition duration-300">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Made with Heart Section */}
      <div className="text-center mt-4">
        <span className="text-sm">
          Made with <FaHeart className="inline text-red-500" /> by Hetal.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
