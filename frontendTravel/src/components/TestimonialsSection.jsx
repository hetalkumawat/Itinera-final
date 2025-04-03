import React from "react";
import "./TestimonialsSection.css";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";

const testimonials = [
  {
    id: 1,
    image: user1,
    name: "Alice Johnson",
    feedback: "Itinera made planning my trip so easy! The AI suggestions were spot on.",
  },
  {
    id: 2,
    image: user2,
    name: "Mark Smith",
    feedback: "I love the personalized itineraries. It really feels like my trips are tailored for me!",
  },
  {
    id: 3,
    image: user3,
    name: "Sarah Lee",
    feedback: "The collaborative planning feature helped me coordinate with my friends effortlessly!",
  },
];

const TestimonialsSection = () => {
  return (
    <div className="testimonials-section">
      <h2 className="section-heading">What Our Users Say</h2>
      <div className="slider-wrapper">
        <div className="testimonial-slider">
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <div className="testimonial-content">
                <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                <h4 className="testimonial-name">- {testimonial.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
