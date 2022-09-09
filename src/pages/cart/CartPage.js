import styled from 'styled-components';
import Cart from 'components/cart/Cart';
import EmptyCart from 'components/cart/EmptyCart';
import useCart from 'hooks/query/useCart';
import Loading from 'components/Loading/Loading';
import { useMemo } from 'react';

const CartHeader = styled.h2`
  font-weight: 600;
  font-size: 30px;
  padding-top: 40px;
`;

const CartCountWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 20px;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartPage = ({ type }) => {
  const { data: cartInfo, isLoading, refetch } = useCart();

  const totalPrice = useMemo(() => {
    return cartInfo?.reduce((acc, cur) => {
      return (acc += cur.goodsItem.goods.salePrice);
    }, 0);
  }, [cartInfo]);

  return (
    <Page>
      <CartHeader>{type === 'cart' ? '장바구니' : '구매하기'}</CartHeader>
      <CartCountWrapper>{cartInfo?.length}개 상품</CartCountWrapper>
      {cartInfo?.length > 0 ? (
        <Cart info={cartInfo} totalPrice={totalPrice} type={type} />
      ) : (
        <EmptyCart />
      )}

      {isLoading && <Loading />}
    </Page>
  );
};

export default CartPage;
