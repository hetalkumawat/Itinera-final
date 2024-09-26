import React, { useState } from 'react';

const CreateTrip = () => {
  const [tripName, setTripName] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ tripName, destination, startDate, endDate, budget });
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        style={{ opacity: '1' }}  // Inline style for video opacity
      >
        <source src="src/assets/my7.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to reduce video opacity */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Form Section */}
      <div
        className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-96"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.4)',  // Force background transparency
          backdropFilter: 'blur(10px)',  // Apply a blur effect
          paddingTop: '10px',  // Add padding on top
          paddingBottom: '20px',
          marginTop : '100px'  // Add padding on bottom
        }}
      >
        <h1 className="text-4xl font-bold mb-6 text-center">Plan a New Trip</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Trip Name:</label>
            <input
              type="text"
              value={tripName}
              onChange={(e) => setTripName(e.target.value)}
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Where To:</label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Start Date:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">End Date:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Budget:</label>
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <button type="submit" className="bg-indigo-600 text-white rounded py-2 px-4 w-full hover:bg-indigo-500 transition duration-300">
            Create Trip
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTrip;
