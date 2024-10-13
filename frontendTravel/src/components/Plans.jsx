import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Plans = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get('http://localhost:7000/api/trips/all'); // Ensure this URL is correct
        setTrips(response.data);
      } catch (error) {
        console.error('Failed to fetch trips:', error);
      }
    };
    fetchTrips();
  }, []);

  // Function to delete a trip
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:7000/api/trips/delete/${id}`);
      setTrips(trips.filter((trip) => trip._id !== id)); // Remove trip from state
      alert('Trip deleted successfully!');
    } catch (error) {
      console.error('Failed to delete trip:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 mt-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-600">My Trips</h1>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((trip) => (
            <div
              key={trip._id}
              className="bg-white rounded-lg shadow-lg p-6"
              style={{ transition: 'transform 0.3s ease' }}
            >
              <h2 className="text-xl font-bold mb-2 text-indigo-600">
                {trip.tripName}
              </h2>
              <p className="text-gray-600">
                <strong>Destination:</strong> {trip.destination}
              </p>
              <p className="text-gray-600">
                <strong>Dates:</strong> {trip.startDate} to {trip.endDate}
              </p>
              <p className="text-gray-600">
                <strong>Budget:</strong> ₹{trip.budget}
              </p>
              <button
                onClick={() => handleDelete(trip._id)}
                className="mt-4 bg-red-600 text-white rounded py-2 px-4 hover:bg-red-500 transition duration-300"
              >
                Delete Trip
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
