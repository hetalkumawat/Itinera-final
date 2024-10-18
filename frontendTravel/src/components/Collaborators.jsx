import React, { useState } from 'react';

const Collaborators = ({ tripId, onCollaboratorAdded }) => {
  const [email, setEmail] = useState('');

  const handleAddCollaborator = () => {
    if (email) {
      onCollaboratorAdded(email);
      setEmail('');
    }
  };

  return (
    <div className="mt-8 p-4 bg-blue-300 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-xl font-bold mb-2">Invite Collaborators</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded w-full mb-2 py-2 px-3 focus:outline-none"
        placeholder="Enter collaborator email"
      />
      <button
        onClick={handleAddCollaborator}
        className="bg-blue-950 text-white rounded py-2 px-4 w-full hover:bg-indigo-500 transition duration-300"
      >
        Add Collaborator
      </button>
    </div>
  );
};

export default Collaborators;
