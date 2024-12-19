import React from 'react';
import Slider from 'react-slick';
import costco from '../../../../assets/Images/Carousel_Images/costco.svg';
import gorillas from '../../../../assets/Images/Carousel_Images/gorillas.svg';
import group1 from '../../../../assets/Images/Carousel_Images/group1.webp';
import hilton from '../../../../assets/Images/Carousel_Images/hilton.svg';
import lowes from '../../../../assets/Images/Carousel_Images/lowes.svg';
import marriott from '../../../../assets/Images/Carousel_Images/marriott.svg';
import polaris from '../../../../assets/Images/Carousel_Images/polaris.svg';
import saic from '../../../../assets/Images/Carousel_Images/saic.svg';
import wolt from '../../../../assets/Images/Carousel_Images/wolt.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const logos = [
  costco,
  gorillas,
  group1,
  hilton,
  lowes,
  marriott,
  polaris,
  saic,
  wolt,
];

const CarouselLogoSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    cssEase: 'ease-in-out',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div style={{ padding: '20px' }}>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div
            key={index}
            style={{
              textAlign: 'center',
              opacity: index === logos.length - 1 ? 0.5 : 1, // Set opacity to 0.5 for the last item
              transition: 'opacity 0.3s ease', // Smooth opacity transition
            }}
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              style={{ maxWidth: '180px', margin: '0 auto' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselLogoSection;
