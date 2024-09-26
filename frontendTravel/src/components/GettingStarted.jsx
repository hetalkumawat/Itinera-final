import React from 'react';
import { FaMapMarkerAlt, FaClipboardList, FaShareAlt } from 'react-icons/fa';

const GettingStarted = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-50 to-indigo-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Getting Started</h2>
        <p className="text-lg text-gray-600 mb-12">Plan Your Dream Trip in 3 Simple Steps</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300">
            <div className="text-indigo-500 text-5xl mb-4">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-2xl font-semibold">1. Choose Your Destination</h3>
            <p className="mt-2 text-gray-500">Select your destination and set your budget to begin planning.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300">
            <div className="text-indigo-500 text-5xl mb-4">
              <FaClipboardList />
            </div>
            <h3 className="text-2xl font-semibold">2. Customize Your Itinerary</h3>
            <p className="mt-2 text-gray-500">Add activities, accommodations, and transportation to your plan.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300">
            <div className="text-indigo-500 text-5xl mb-4">
              <FaShareAlt />
            </div>
            <h3 className="text-2xl font-semibold">3. Save & Share</h3>
            <p className="mt-2 text-gray-500">Save your plan and easily share it with your friends and family.</p>
          </div>
        </div>

        <button className="mt-10 bg-indigo-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-110 shadow-lg">
          Start Planning Now
        </button>
      </div>
    </section>
  );
};

export default GettingStarted;
