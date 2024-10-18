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
    autoplay : true,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="flex justify-center">
          <div className="w-72 h-72 overflow-hidden rounded-lg shadow-lg"> {/* Set fixed width and height */}
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
