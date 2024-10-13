// src/components/Slider.jsx
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="flex justify-center">
          <img
            src={image}
            alt={`Travel ${index}`}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
            style={{ maxHeight: '450px' }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
