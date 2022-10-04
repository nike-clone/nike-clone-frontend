import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PALETTE from 'constants/palette';
import { formatPrice } from 'util/format';
import { Link } from 'react-router-dom';
import { Product } from 'types/goods';
const GoodsInfoWrapper = styled.div`
  display: flex;
  padding: 15px 5px;
  gap: 8px;
  justify-content: space-between;
  @media screen and (max-width: 479px) {
    display: block;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    display: block;
  }
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
  @media screen and (max-width: 479px) {
    justify-content: space-between;
    padding-top: 10px;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    justify-content: space-between;
    padding-top: 10px;
  }
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
const MiniImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
const MiniImageLists = styled.div`
  width: 30px;
  height: 40px;
  img {
    width: 100%;
    height: 100%;
  }
`;
interface Props {
  info: Product;
}
const ProductInfo = ({ info }: Props): JSX.Element => {
  const [isShowColorExtra, setIsShowColorExtra] = useState<boolean>(false);
  const showExtra = useCallback(() => {
    setIsShowColorExtra((prev) => !prev);
  }, []);
  return (
    <>
      <Link to={`/goods/${info.id}`} onMouseEnter={showExtra} onMouseLeave={showExtra}>
        <img src={info.productImagePrimary} alt="shoe" />
      </Link>
      <GoodsInfoWrapper onMouseEnter={showExtra} onMouseLeave={showExtra}>
        <DetailInfo>
          <ProductName>{info.name}</ProductName>
          <Classification>{info.classification?.type}</Classification>
          {isShowColorExtra ? (
            <MiniImageWrapper>
              {info.productImageExtra?.map((extra) => (
                <MiniImageLists>
                  <img src={extra} alt="product-mini" />
                </MiniImageLists>
              ))}
            </MiniImageWrapper>
          ) : (
            <ColorQuantity>
              {info.productImageExtra?.length > 0
                ? `${info.productImageExtra.length} 컬러`
                : '0 컬러'}
            </ColorQuantity>
          )}
        </DetailInfo>
        <PriceInfo>
          <SalePercentage>
            {info.salePercentage! > 0 ? `${info.salePercentage} %` : ''}
          </SalePercentage>
          <PriceWrapper>
            <Price>{formatPrice(info.price)}</Price>
            <SalePrice>{info.salePrice ? formatPrice(info.salePrice) : ''}</SalePrice>
          </PriceWrapper>
        </PriceInfo>
      </GoodsInfoWrapper>
    </>
  );
};

export default ProductInfo;
