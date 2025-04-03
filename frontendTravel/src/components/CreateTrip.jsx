import  { useState } from 'react';
import ImageSlider from './Slider';
import axios from 'axios';

const CreateTrip = () => {
  const [tripName, setTripName] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState('');
  const [notes, setNotes] = useState('');
  const [placesToVisit, setPlacesToVisit] = useState('');
  const [placesList, setPlacesList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTrip = {
        tripName,
        destination,
        startDate,
        endDate,
        budget,
        notes,
        places: placesList,
      };
      await axios.post('http://localhost:7000/api/trip/create', newTrip);
      alert('Trip created successfully!');
      setTripName('');
      setDestination('');
      setStartDate('');
      setEndDate('');
      setBudget('');
      setNotes('');
      setPlacesList([]);
    } catch (error) {
      console.error('Failed to create trip:', error);
    }
  };

  const handleAddPlace = () => {
    if (placesToVisit) {
      setPlacesList([...placesList, placesToVisit]);
      setPlacesToVisit('');
    }
  };

  const handleAddNote = () => {
    if (notes) {
      setNotes(''); 
    }
  };

  const images = [
    '/h.jpg',
    '/h1.jpg',
    '/h2.jpg',
    '/h3.jpg',
    '/h4.jpg',
    '/h5.jpg',
  ];
  

  return (
    <section className="relative">
    {/* Hero Section */}
    <div className="relative w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: "url('/createtrip.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
    {/* <video className="absolute top-0 left-0 w-full h-full object-cover z-0" loop muted>
        <source src="src/assets/vdo.mp4" type="video/mp4" />
        Your browser does not support the video tag.t
      </video> */}
      
      {/* Hero Text Section */}
      <div className="relative z-10 flex flex-col items-center bg-black bg-opacity-10 justify-center h-full text-center px-10">
        <h1 className="text-7xl font-bold  text-white">Plan Your Dream Adventure</h1>
        <p className="mt-4 text-xl text-white">
          Create the perfect itinerary for your next journey, from destinations to budgets, all in one place.
        </p>
        <button
          className="mt-6 bg-blue-950 text-white py-3 px-6 rounded-lg hover:bg-gray-500 transition duration-300"
          onClick={() => document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' })}
        >
          Let&apos;s Plan
        </button>
      </div>
    </div>
  
    {/* Form Section Below Hero */}
    <div id="form-section" className="relative z-10 flex items-center bg-lilac justify-center mt-10">
      <div className="w-full max-w-4xl  p-6 rounded-lg  flex">
        {/* Left Side: Form */}
        <div className="w-1/2 pr-6">
          <h1 className="text-4xl font-bold mb-6 mt-5 text-center text-black font-serif">Let&apos;s Plan!</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex items-center">
              <i className="fas fa-suitcase mr-2"></i>
              <label className="block text-black font-medium mb-2">Trip Name:</label>
              <input
                type="text"
                value={tripName}
                onChange={(e) => setTripName(e.target.value)}
                className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <i className="fas fa-map-marker-alt mr-2"></i>
              <label className="block text-black font-medium mb-2">Where To:</label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <i className="fas fa-calendar-alt mr-2"></i>
              <label className="block text-black font-medium mb-2">Start Date:</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <i className="fas fa-calendar-check mr-2"></i>
              <label className="block text-black font-medium mb-2">End Date:</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <i className="fas fa-dollar-sign mr-2"></i>
              <label className="block text-black font-medium mb-2">Budget:</label>
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
              className="bg-blue-950 text-white rounded py-2 px-4 w-full hover:bg-gray-500 transition duration-300"
            >
              Create Trip
            </button>
          </form>
        </div>
  
        {/* Right Side: Image */}
        <div className="w-1/2 pl-6">
          <img
            src="/bg7.jpg"
            alt="Trip visual"
            className="w-full h-full object-cover rounded-lg "
          />
        </div>
      </div>
    </div>
  



  <div className="bg-gray-100 p-4 rounded-lg mt-4 w-full  mx-auto">
          {/* Image Slider Section */}
          <div className="flex-1 w-full mt-4">
            <h2 className="text-3xl font-bold mb-4 text-center font-roboto text-blue-700">Popular Places</h2>
            <ImageSlider images={images} /> 
          </div>
            </div>

      {/* Other sections like Notes, Places to Visit, Image Slider, and Map */}
      <div className="relative z-10 bg-white">
        {/* Notes and Image Strip Section */}
        <div className="flex flex-row w-full h-96 mt-7 pr-28 pl-14 justify-between bg-white rounded-lg p-6 mb-8">
  {/* Image Section */}
  <div className="w-1/2 p-4">
    <img
      src="/bg08.png"
      alt="Trip visual"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
  
  {/* Text Section */}
  <div className="w-1/2 p-4 flex flex-col justify-center">
    <h2 className="text-2xl font-semibold mb-4">Explore the World with Us</h2>
    <p className="text-lg text-gray-700">
      Discover new destinations, create unforgettable memories, and plan your perfect trip. 
      Whether you&apos;re traveling solo or with friends, our platform helps you explore, organize, 
      and enjoy your travel experiences like never before.
    </p>
    <p className="text-lg text-gray-700 mt-4">
      From breathtaking landscapes to vibrant cities, your next adventure awaits. Let us guide 
      you through every step of the journey.
    </p>
  </div>
</div>

 {/* Notes Section */}
 

  {/* Image on the Right */}
 
</div>
{/* Places to Visit and Map Section */}
<div className="flex flex-row justify-around items-start bg-olive w-full h-80 space-x-8 p-4 mb-8">
  {/* Places to Visit Section */}
  <div className="rounded-lg bg-pink-200 shadow-lg w-1/4 h-64 mt-7 p-4">
    <h2 className="text-xl font-bold mb-2">
      <span role="img" aria-label="places">🌍</span> Places to Visit
    </h2>
    <input
      type="text"
      value={placesToVisit}
      onChange={(e) => setPlacesToVisit(e.target.value)}
      className="border border-gray-300 rounded w-full mb-2 py-2 px-3 focus:outline-none focus:border-indigo-500"
      placeholder="Add a place..."
    />
    <button
      onClick={handleAddPlace}
      className="bg-blue-950 text-white rounded py-2 px-4 w-full hover:bg-indigo-500 transition duration-300"
    >
      <span role="img" aria-label="add">➕</span> Add Place
    </button>
    <ul className="mt-2">
      {placesList.map((place, index) => (
        <li key={index} className="border-b py-1">{place}</li>
      ))}
    </ul>
  </div>

  {/* Notes Section */}
  <div className="rounded-lg bg-yellow-200 shadow-lg w-1/4 h-64 mt-7 p-4">
    <h2 className="text-xl font-bold mb-2">
      <span role="img" aria-label="note">📝</span> Notes
    </h2>
    <textarea
      value={notes}
      onChange={(e) => setNotes(e.target.value)}
      className="border border-gray-300 rounded w-full h-32 p-2 focus:outline-none focus:border-indigo-500"
      placeholder="Write your notes here..."
    />
    <button
      onClick={handleAddNote}
      className="bg-blue-950 text-white rounded py-2 px-4 w-full mt-2 hover:bg-indigo-500 transition duration-300"
    >
      <span role="img" aria-label="add">➕</span> Add Note
    </button>
  </div>

  {/* Map Section */}
  <div className="flex-1 w-1/4  p-4">
    <h2 className="text-xl text-center font-roboto font-bold ">View on Map</h2>
    <img
      src="/map.jpg"
      alt="Map placeholder"
      className="h-64 w-full rounded-lg shadow-lg"
    />
  </div>
</div>


        {/* Footer */}
        <footer className="w-full bg-blue-950 text-white py-4 text-center">
          <p>© 2024 Trip Planner App. All Rights Reserved.</p>

<a href='www.freepik.com'> Freepik</a>        </footer>
    
    </section>
  );
};

export default CreateTrip;
