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
interface Props {
  info: {
    name: string;
    classification: string;
    price: string | number;
    imgPath: string;
  };
}
const ProductInfo = ({ info }: Props) => {
  return (
    <GoodsInfoWrapper>
      <ProductName>{info.name}</ProductName>
      <Classification>{info.classification}</Classification>
      <Price>{info.price}원</Price>
    </GoodsInfoWrapper>
  );
};

export default ProductInfo;
