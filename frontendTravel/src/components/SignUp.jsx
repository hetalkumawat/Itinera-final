import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate from React Router
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; // Importing Font Awesome icons

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate(); // For navigation (redirection)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`, {
        name,
        email,
        password,
      });

      // Show alert for successful sign-up
      window.alert('User created successfully!');

      // Redirect to home page after successful sign-up
      navigate('/');

    } catch (err) {
      // Check if error response contains a specific message
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error); // Set specific error message from the server
      } else {
        setError('Something went wrong. Please try again.');
      }
      console.error(err); // Log error for debugging
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-indigo-300">
      <h1 className="text-4xl font-bold text-white mb-6">Create Your Account</h1>

      {error && <p className="text-red-300 mb-4">{error}</p>} {/* Display error message */}

      <form className="bg-white p-8 rounded-lg shadow-lg w-96" onSubmit={handleSubmit}>
        <div className="mb-4 flex items-center border-b-2 border-gray-300 focus-within:border-indigo-500">
          <FaUser className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Full Name"
            className="flex-1 py-2 px-3 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4 flex items-center border-b-2 border-gray-300 focus-within:border-indigo-500">
          <FaEnvelope className="text-gray-400 mr-2" />
          <input
            type="email"
            placeholder="Email"
            className="flex-1 py-2 px-3 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4 flex items-center border-b-2 border-gray-300 focus-within:border-indigo-500">
          <FaLock className="text-gray-400 mr-2" />
          <input
            type="password"
            placeholder="Password"
            className="flex-1 py-2 px-3 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white rounded py-2 px-4 w-full hover:bg-indigo-500 transition duration-300"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-4 text-white">
        Already have an account? <a href="/signin" className="text-indigo-200 hover:underline">Sign In</a>
      </p>
    </div>
  );
};

export default SignUp;
