import { NoneStyleButton, SubmitButton } from 'components/common/Button/Button';
import OrderForm from 'components/order/OrderForm';
import PALETTE from 'constants/palette';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CartCheckout from './checkout/CartCheckout';
import CartItem from './item/CartItem';

const CartContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  @media screen and (max-width: 479px) {
    flex-direction: column;
  }
`;
const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;
const OrderItemContainer = styled.form`
  display: flex;
  flex-direction: column;
  flex: 3;
`;
const CheckoutWrapper = styled.div`
  flex: 1;
  border: 1px solid ${PALETTE.GRAY[1]};
  height: 320px;
`;
const CheckoutHeader = styled.div`
  background-color: ${PALETTE.GRAY[1]};
  padding: 20px;
  font-size: 18px;
`;

const Cart = ({ info, totalPrice, type }) => {
  return (
    <CartContainer>
      {type === 'cart' ? (
        <CartItemContainer>
          {info?.map((x) => (
            <CartItem {...x.goodsItem} id={x.id} quantity={x.quantity} key={x.id} />
          ))}
        </CartItemContainer>
      ) : (
        <OrderItemContainer>
          <OrderForm totalPrice={totalPrice} info={info} />
        </OrderItemContainer>
      )}

      <CheckoutWrapper>
        <CheckoutHeader>주문예정금액</CheckoutHeader>
        <CartCheckout totalPrice={totalPrice} type={type} />
      </CheckoutWrapper>
    </CartContainer>
  );
};

export default Cart;
