// src/components/ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = ({ images, settings }) => {
  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="flex justify-center">
          <LazyLoadImage
            src={image}
            alt={`Travel ${index}`}
            className="rounded-lg shadow-lg object-cover"
            style={{ maxHeight: '300px', maxWidth: '300px' }} // You can adjust the dimensions
            effect="blur" // Blur effect while the image is loading
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
