// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesOverview from './components/FeaturesOverview';
import UserTestimonial from './components/UserTestimonial';
import SampleItineraries from './components/SampleItineraries';
import Footer from './components/Footer';
import Plans from './components/Plans'
import SignUp from './components/SignUp'; 
import CreateTrip from './components/CreateTrip'; // Import CreateTrip

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <FeaturesOverview />
              <SampleItineraries />
              <UserTestimonial />
            </>
          } />
          <Route path="/signup" element={<SignUp />} /> 
         
          <Route path="/create-trip" element={<CreateTrip />} /> 
          <Route path="/plans" element={<Plans />} />{/* CreateTrip route */}
        </Routes>
          <Footer />
      </div>
    </Router>
  );
};

export default App;
