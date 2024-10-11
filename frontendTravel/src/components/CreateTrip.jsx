import React, { useState } from 'react';
import Slider from 'react-slick';
/* src/index.css or the appropriate CSS file */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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

  // Image URLs for the carousel
  const images = [
    'src/assets/h.jpg',
    'src/assets/h2.jpg',
    'src/assets/h3.jpg',
    'src/assets/h4.jpg',
    // Add more image paths here
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-indigo-400 py-16">
      {/* Background Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

      {/* Main Content Section */}
      <div className="relative z-10 flex items-center justify-between w-11/12 max-w-6xl bg-transparent flex-col md:flex-row">
        {/* Combined Container for Form and Slider */}
        <div
          className="flex flex-col md:flex-row items-center justify-between w-full bg-white bg-opacity-20 p-8 rounded-lg shadow-lg"
          style={{
            backdropFilter: 'blur(10px)', // Apply blur effect for transparency
          }}
        >
          {/* Left Side: Form Section */}
          <div
            className="flex-1 p-8 text-white md:w-1/2"
            style={{
              maxWidth: '400px',  // Restrict form width
            }}
          >
            <h1 className="text-3xl font-bold mb-6 mt-5 text-center text-white">
              Plan a New Trip
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-white font-medium mb-2">
                  Trip Name:
                </label>
                <input
                  type="text"
                  value={tripName}
                  onChange={(e) => setTripName(e.target.value)}
                  className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white font-medium mb-2">
                  Where To:
                </label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white font-medium mb-2">
                  Start Date:
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white font-medium mb-2">
                  End Date:
                </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white font-medium mb-2">
                  Budget:
                </label>
                <input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white rounded py-2 px-4 w-full hover:bg-indigo-500 transition duration-300"
              >
                Create Trip
              </button>
            </form>
          </div>

          {/* Right Side: Image Slider Section */}
          <div className="flex-1 md:w-1/2">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={image}
                    alt={`Travel ${index}`}
                    className="rounded-lg shadow-lg object-cover w-full h-auto"
                    style={{ maxHeight: '500px' }}  // Restrict image height for balance
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
