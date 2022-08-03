import React from 'react';
import styled from 'styled-components';
const InfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  .original-price {
    color: #fa5400;
  }
`;
const GoodsName = styled.span`
  font-size: 30px;
  padding-top: 5px;
`;
const DiscountPercentage = styled.span`
  color: #fa5400;
  font-size: 18px;
  display: block;
  padding: 15px 0 30px 0;
`;
const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  span {
    font-size: 16px;
    font-weight: 600;
  }
  del {
    margin-left: auto;
    font-size: 14px;
  }
`;
const GoodsDetailInfo = () => {
  return (
    <>
      <InfoTop>
        <span className="classification">남성 신발</span>
        <PriceWrapper>
          <span className="original-price">219000 원</span>
          <del>39000 원</del>
        </PriceWrapper>
      </InfoTop>
      <GoodsName>헤럴드 이라니마</GoodsName>
      <DiscountPercentage>10% off</DiscountPercentage>
    </>
  );
};

export default GoodsDetailInfo;
