import ImgSlider from 'components/common/Slider/ImgSlider';
import React from 'react';
import styled from 'styled-components';
import ProductInfo from './info/ProductInfo';
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

interface Props {
  goodsInfo: {
    name: string;
    classification: string;
    price: string | number;
    imgPath: string;
  }[];
}

const Product = ({ goodsInfo }: Props): JSX.Element => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <Carousel {...settings}>
      {goodsInfo.map((info) => (
        <>
          <ImgSlider imgPath={info.imgPath} />

          <ProductInfo info={info} />
        </>
      ))}
    </Carousel>
  );
};

export default Product;
