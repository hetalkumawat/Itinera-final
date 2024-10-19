// src/components/Slider.jsx
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = ({ images }) => {
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
        <div key={index} className="flex justify-center px-4"> {/* Add px-4 for spacing */}
          <div className="w-64 h-64 overflow-hidden rounded-lg shadow-lg"> {/* Set fixed width and height */}
            <img
              src={image}
              alt={`Travel ${index}`}
              className="object-cover w-full h-full" // object-cover ensures the image covers the div while maintaining aspect ratio
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
