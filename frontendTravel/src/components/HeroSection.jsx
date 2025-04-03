import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const videoRef = useRef(null); // Create a reference for the video element

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Adjust speed (1.0 = normal speed, 0.5 = half speed)
    }
  }, []);

  return (
    <section className="relative h-screen">
      <video
        ref={videoRef} // Attach the ref to the video element
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="src/assets/vdo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-5xl font-extrabold mt-40">Planning Your Journey, Simplified</h1>
        <p className="mt-4 text-lg font-semibold">
          Build, personalize, and optimize your itineraries with our free AI trip planner. Designed for vacations, workations, and everyday adventures.
        </p>
        <Link to="/create-trip">
          <button className="mt-4 bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-indigo-600 transition duration-300">
            Create a New Trip
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
