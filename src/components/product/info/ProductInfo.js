import React from 'react';
import styled from 'styled-components';
import PALETTE from 'constants/palette';
const GoodsInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 5px;
  gap: 8px;
`;
const ProductName = styled.h2`
  font-size: 18px;
`;
const Classification = styled.span`
  font-size: 14px;
  color: ${PALETTE.GRAY[0]};
`;
const Price = styled.span`
  font-size: 14px;
  color: ${PALETTE.GRAY[0]};
`;

const ProductInfo = ({ info }) => {
  return (
    <GoodsInfoWrapper>
      <ProductName>{info.name}</ProductName>
      <Classification>{info.classification?.type}</Classification>
      <Price>{info.price}원</Price>
    </GoodsInfoWrapper>
  );
};

export default ProductInfo;
