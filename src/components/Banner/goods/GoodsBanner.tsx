import ImgSlider from 'components/common/Slider/ImgSlider';
import React from 'react';
import styled from 'styled-components';
import shoe1 from 'assets/images/shoe1.jpg';
import shoe2 from 'assets/images/shoe2.jpg';
import shoe3 from 'assets/images/shoe3.jpg';
import shoe4 from 'assets/images/shoe4.jpg';
import ProductInfo from 'components/product/info/ProductInfo';
import Product from 'components/product/Product';
const GoodsBannerContainer = styled.div``;
const BannerLabel = styled.h2`
  font-size: 24px;
  font-weight: 500;
  padding: 15px 5px;
`;

const GoodsInfo = [
  { name: '나이키 에어맥스 코코', classification: '여성 샌들', price: 107100, imgPath: shoe1 },
  { name: '나이키 에어맥스 97', classification: '남성 신발', price: 179100, imgPath: shoe2 },
  {
    name: '나이키 에어맥스 리프트 브리드',
    classification: '여성 신발',
    price: 116100,
    imgPath: shoe3,
  },
  {
    name: '나이키 에어맥스 리프트 브리드',
    classification: '여성 신발',
    price: 116100,
    imgPath: shoe4,
  },
];

const GoodsBanner = (): JSX.Element => {
  return (
    <GoodsBannerContainer>
      <BannerLabel>Featured Shoes</BannerLabel>
      <Product goodsInfo={GoodsInfo} />
    </GoodsBannerContainer>
  );
};

export default GoodsBanner;
