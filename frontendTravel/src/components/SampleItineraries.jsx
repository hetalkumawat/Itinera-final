import { useEffect, useState, memo } from "react";
import PropTypes from "prop-types"; // ✅ Import at the top

// Memoized Itinerary Card to prevent re-renders
const ItineraryCard = memo(({ itinerary }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = itinerary.image;
    img.onload = () => setImageLoaded(true);
  }, [itinerary.image]);

  return (
    <div className="w-1/3 rounded overflow-hidden shadow-lg bg-gray-100">
      {imageLoaded ? (
        <img
          className="w-full h-48 object-cover"
          src={itinerary.image}
          alt={itinerary.title}
          loading="lazy"
        />
      ) : (
        <div className="w-full h-48 bg-gray-300 animate-pulse" />
      )}
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{itinerary.title}</h3>
        <p className="text-gray-700 text-base mb-4">{itinerary.description}</p>
        <p className="text-gray-500">Duration: {itinerary.days} days</p>
      </div>
    </div>
  );
});

// ✅ Move propTypes definition BELOW the component
ItineraryCard.displayName = "ItineraryCard";

ItineraryCard.propTypes = {
  itinerary: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    days: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

// Sample Itineraries List
const sampleItineraries = [
  {
    title: "Weekend Getaway to Paris",
    description:
      "Explore the romantic city of lights in 3 days with stops at the Eiffel Tower, Louvre, and local cafes.",
    days: 3,
    image: "/paris.jpg",
  },
  {
    title: "Business Trip to New York",
    description:
      "A 2-day itinerary perfect for meetings and quick visits to iconic spots like Central Park and Times Square.",
    days: 2,
    image: "/newyork.jpg",
  },
  {
    title: "Adventure in Tokyo",
    description:
      "5 days of exploring the futuristic streets of Tokyo, including visits to Shibuya, Harajuku, and Mount Fuji.",
    days: 5,
    image: "/tokyo.jpg",
  },
];

const SampleItineraries = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Sample Itineraries</h2>
        <div className="flex justify-center gap-6">
          {sampleItineraries.map((itinerary, index) => (
            <ItineraryCard key={index} itinerary={itinerary} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SampleItineraries;
