// UserTestimonial.jsx
import React from 'react';

const testimonials = [
  {
    name: 'Alice Johnson',
    feedback: 'Itinera made planning my trip so easy! The AI suggestions were spot on.',
  },
  {
    name: 'Mark Smith',
    feedback: 'I love the personalized itineraries. It really feels like my trips are tailored for me!',
  },
  {
    name: 'Sarah Lee',
    feedback: 'The collaborative planning feature helped me coordinate with my friends effortlessly!',
  },
];

const UserTestimonial = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-2xl font-bold mb-8 text-center">What Our Users Say</h2>
      <div className="flex flex-wrap justify-center space-x-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md flex-1 m-2 max-w-xs">
            <p className="italic">"{testimonial.feedback}"</p>
            <p className="font-semibold mt-2">— {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTestimonial;
