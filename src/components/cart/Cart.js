import { NoneStyleButton, SubmitButton } from 'components/common/button/Button';
import PALETTE from 'constants/palette';
import styled from 'styled-components';
import CartCheckout from './checkout/CartCheckout';
import CartItem from './item/CartItem';

const CartContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;
const CartItemContainer = styled.div`
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

const Cart = ({ info }) => {
  console.log('i', info);
  return (
    <CartContainer>
      <CartItemContainer>
        {info?.map((x) => (
          <CartItem {...x} key={x.id} />
        ))}
      </CartItemContainer>
      <CheckoutWrapper>
        <CheckoutHeader>주문예정금액</CheckoutHeader>
        <CartCheckout />
      </CheckoutWrapper>
    </CartContainer>
  );
};

export default Cart;
