import React from 'react';

const ShareableLink = ({ shareableLink }) => {
  return (
    <div className="mt-8 p-4 bg-white rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Share this trip with your friends:</h2>
      <input
        type="text"
        value={shareableLink}
        readOnly
        className="border border-gray-300 rounded w-full py-2 px-3 mb-4 focus:outline-none"
      />
      <button
        className="bg-blue-950 text-white rounded py-2 px-4 w-full hover:bg-gray-500 transition duration-300"
        onClick={() => navigator.clipboard.writeText(shareableLink)}
      >
        Copy Link
      </button>
    </div>
  );
};

export default ShareableLink;
