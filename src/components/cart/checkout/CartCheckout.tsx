import React from 'react';
import styled from 'styled-components';
import PALETTE from 'constants/palette';
import { SubmitButton } from 'components/common/Button/Button';
import { formatPrice } from 'util/format';
import { useNavigate } from 'react-router-dom';
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
  margin-top: 35px;
  span {
    font-size: 20px;
  }
  .orange {
    color: ${PALETTE.ORANGE[0]};
  }
`;
interface Props {
  type: 'cart' | 'buy';
  totalPrice: number;
}
const CartCheckout = ({ totalPrice, type }: Props): JSX.Element => {
  const navigate = useNavigate();
  const onClickRouteToCheckout = () => {
    navigate('/checkout');
  };
  return (
    <ItemInfoContainer>
      <CheckoutInfo>
        <span>상품 금액</span>
        <span>{formatPrice(totalPrice)}</span>
      </CheckoutInfo>
      <CheckoutInfo>
        <span>예상 배송비 </span>
        <span>{totalPrice > 30000 ? 0 : 3000} 원</span>
      </CheckoutInfo>
      <TotalPrice>
        <span>총 결재 예정 금액</span>
        <span className="orange">
          {totalPrice > 30000 ? formatPrice(totalPrice) : formatPrice(totalPrice + 3000)}
        </span>
      </TotalPrice>
      {type === 'cart' && (
        <SubmitButton
          color="white"
          backcolor={PALETTE.ORANGE[0]}
          size="lg"
          onClick={onClickRouteToCheckout}
        >
          주문하기
        </SubmitButton>
      )}
    </ItemInfoContainer>
  );
};

export default CartCheckout;
