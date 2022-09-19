import ProductInfo from './info/ProductInfo';
import styled from 'styled-components';
import PALETTE from 'constants/palette';
import { Link } from 'react-router-dom';
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

const Product = ({ goodsInfo }) => {
  return (
    <>
      <Link to={`/goods/${goodsInfo.id}`}>
        <img src={goodsInfo.imgPath} alt="shoe" />
      </Link>
      <GoodsInfoWrapper>
        <DetailInfo>
          <ProductName>{goodsInfo.name}</ProductName>
          <Classification>{goodsInfo.classification?.type}</Classification>
        </DetailInfo>
        <PriceInfo>
          <PriceWrapper>
            <Price>{formatPrice(goodsInfo.price)}</Price>
            <SalePrice>{goodsInfo.salePrice ? formatPrice(goodsInfo.salePrice) : ''}</SalePrice>
          </PriceWrapper>
        </PriceInfo>
      </GoodsInfoWrapper>
    </>
  );
};

export default Product;
