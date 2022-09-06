import React, { useState } from 'react';
import styled from 'styled-components';
import { formatPrice } from 'util/format';
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
const GoodsDetailInfo = ({ goodsDetail }) => {
  return (
    <>
      <InfoTop>
        <span className="classification">{goodsDetail?.classification?.type}</span>
        <PriceWrapper>
          <span className="original-price">{formatPrice(goodsDetail?.price)}</span>
          <del>{goodsDetail?.salePrice ? formatPrice(goodsDetail?.salePrice) : ''}</del>
        </PriceWrapper>
      </InfoTop>
      <GoodsName>{goodsDetail?.name}</GoodsName>
      <DiscountPercentage>
        {goodsDetail?.salePercentage ? goodsDetail.salePercentage + ' %' : ''}
      </DiscountPercentage>
    </>
  );
};

export default React.memo(GoodsDetailInfo);
