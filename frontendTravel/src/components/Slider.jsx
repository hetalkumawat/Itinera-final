import  { useState, useEffect, memo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from "prop-types";

const ImageSlider = memo(({ images }) => {
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    images.forEach((image, index) => {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        setLoadedImages((prev) => ({ ...prev, [index]: true }));
      };
    });
  }, [images]);
  ImageSlider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired, // Ensure images is an array of strings
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="flex justify-center px-4">
          <div className="w-64 h-64 overflow-hidden rounded-lg shadow-lg">
            {loadedImages[index] ? (
              <img
                src={image}
                alt={`Travel ${index}`}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 animate-pulse" />
            )}
          </div>
        </div>
      ))}
    </Slider>
  );
});
ImageSlider.displayName = "ImageSlider";
export default ImageSlider;
