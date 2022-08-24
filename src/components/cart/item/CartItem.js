import PALETTE from 'constants/palette';
import React from 'react';
import styled from 'styled-components';
import closeIcon from 'assets/icons/closeX.svg';
import { formatPrice } from 'util/format';
const ItemWrapper = styled.div`
  border-top: 2px solid ${PALETTE.GRAY[1]};
  padding: 25px 0;
  position: relative;
`;
const ItemDetail = styled.div`
  width: 100%;
  display: flex;
`;
const ItemImg = styled.div`
  display: flex;
  flex: 5;

  img {
    width: 150px;
    height: 100%;
  }
`;
const ItemInfo = styled.div`
  padding: 0px 40px;
  h2 {
    padding-bottom: 10px;
    font-weight: 600;
  }
  span {
    padding: 5px 0;
    display: block;
    color: gray;
  }
`;
const ButtonWrapper = styled.div`
  padding-left: 190px;
`;
const GrayTextBtn = styled.span`
  color: gray;
  font-size: 14px;
`;
const ItemOptionChange = styled.div`
  flex: 1;
  padding-right: 20px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
const ItemPriceDetail = styled.div`
  flex: 1;
  padding: 0px 30px;
  color: ${PALETTE.ORANGE[0]};
  display: flex;
  flex-direction: column;
  gap: 10px;
  del {
    color: #000;
  }
`;
const CloseIcon = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  padding: 25px 10px;
  &:hover {
    cursor: pointer;
  }
`;
const CartItem = ({ color, goods, size, quantity }) => {
  return (
    <ItemWrapper>
      <ItemDetail>
        <ItemImg>
          <img src={goods?.productImagePrimary} alt="sd" />
          <ItemInfo>
            <h2>{goods?.name}</h2>
            <span>사이즈: {size}</span>
            <span className="quantity">수량: {quantity}</span>
          </ItemInfo>
        </ItemImg>
        <ItemOptionChange>
          <GrayTextBtn>옵션 변경</GrayTextBtn>
        </ItemOptionChange>
        <ItemPriceDetail>
          <del>{formatPrice(goods?.price)}</del>
          <span>{formatPrice(goods?.salePrice)}</span>
        </ItemPriceDetail>
      </ItemDetail>
      <ButtonWrapper>
        <GrayTextBtn>위시리스트에 추가</GrayTextBtn>
      </ButtonWrapper>
      <CloseIcon>
        <img src={closeIcon} alt="close" />
      </CloseIcon>
    </ItemWrapper>
  );
};

export default CartItem;
