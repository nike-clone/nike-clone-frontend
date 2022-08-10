import React from 'react';
import styled from 'styled-components';
import PALETTE from 'constants/palette';
import { formatPrice } from 'util/format';
const GoodsInfoWrapper = styled.div`
  display: flex;
  padding: 15px 5px;
  gap: 8px;
  justify-content: space-between;
`;
const ProductName = styled.h2`
  font-size: 16px;
`;
const Classification = styled.span`
  font-size: 14px;
  color: ${PALETTE.GRAY[0]};
`;
const Price = styled.span`
  font-size: 14px;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 5px;
`;
const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const PriceInfo = styled.div`
  display: flex;
`;
const SalePrice = styled.del`
  color: ${PALETTE.GRAY[0]};
  font-size: 14px;
`;
const SalePercentage = styled.span`
  padding-right: 10px;
  color: ${PALETTE.ORANGE[0]};
`;
const ColorQuantity = styled.span`
  color: ${PALETTE.GRAY[0]};
`;
const ProductInfo = ({ info }) => {
  return (
    <GoodsInfoWrapper>
      <DetailInfo>
        <ProductName>{info.name}</ProductName>
        <Classification>{info.classification?.type}</Classification>
        <ColorQuantity>3 컬러</ColorQuantity>
      </DetailInfo>
      <PriceInfo>
        <SalePercentage>{info.salePercentage > 0 ? `${info.salePercentage} %` : ''}</SalePercentage>
        <PriceWrapper>
          <Price>{formatPrice(info.price)}</Price>
          <SalePrice>{info.salePrice ? formatPrice(info.salePrice) : ''}</SalePrice>
        </PriceWrapper>
      </PriceInfo>
    </GoodsInfoWrapper>
  );
};

export default ProductInfo;
