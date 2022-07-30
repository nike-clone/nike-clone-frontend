import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = styled(Slider)`
  .slick-slide > div {
    margin-right: 10px;
  }
  .slick-list {
  }
  .slick-slide > div > img {
    width: 100%;
  }
`;
const ImgSlider = ({children}) => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Carousel {...settings}>
      {children}
         </Carousel>
  )
};

export default ImgSlider;
