import React from 'react';
  

const features = [
  {
    title: 'AI Trip Planning',
    description: 'Leverage AI to generate optimized itineraries tailored to your preferences.',
    icon: '🧠', // You can replace this with an actual icon component
  },
  {
    title: 'Personalization Options',
    description: 'Customize your trips with personal notes, favorite locations, and more.',
    icon: '✈️',
  },
  {
    title: 'Collaborative Planning',
    description: 'Invite friends and family to co-plan trips and share ideas seamlessly.',
    icon: '🤝',
  },
  {
    title: 'Integrated Maps',
    description: 'Access maps and local attractions directly within your itinerary.',
    icon: '🗺️',
  },
];

const FeaturesOverview = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;
