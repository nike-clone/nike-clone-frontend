import React from 'react';
import styled from 'styled-components';
import PALETTE from 'constants/palette';
import { SubmitButton } from 'components/common/button/Button';
const ItemInfoContainer = styled.div`
  padding: 0px 15px 10px 15px;
`;
const CheckoutInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 10px 0 10px;
`;
const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 10px 20px 10px;
  span {
    font-size: 20px;
  }
  .orange {
    color: ${PALETTE.ORANGE[0]};
  }
`;

const CartCheckout = () => {
  return (
    <ItemInfoContainer>
      <CheckoutInfo>
        <span>상품 금액</span>
        <span>1000</span>
      </CheckoutInfo>
      <CheckoutInfo>
        <span>예상 배송비</span>
        <span>1000</span>
      </CheckoutInfo>
      <CheckoutInfo>
        <span>상품 할인 금액</span>
        <span>1000</span>
      </CheckoutInfo>
      <CheckoutInfo>
        <span>주문 할인 금액</span>
        <span>1000</span>
      </CheckoutInfo>
      <TotalPrice>
        <span>총 결재 예정 금액</span>
        <span className="orange">1000</span>
      </TotalPrice>
      <SubmitButton color="white" backcolor={PALETTE.ORANGE[0]} size="lg">
        주문하기
      </SubmitButton>
    </ItemInfoContainer>
  );
};

export default CartCheckout;
