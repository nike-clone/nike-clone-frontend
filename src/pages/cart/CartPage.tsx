import styled from 'styled-components';
import Cart from 'components/cart/Cart';
import EmptyCart from 'components/cart/EmptyCart';
import useCart from 'hooks/query/useCart';
import Loading from 'components/Loading/Loading';
import { useMemo } from 'react';
import { GoodsItem } from 'types/goods';
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
interface Props {
  type: 'cart' | 'buy';
}
const CartPage = ({ type }: Props): JSX.Element => {
  const { data: cartInfo, isLoading } = useCart();

  const totalPrice = useMemo(() => {
    return cartInfo?.reduce((acc: number, cur: GoodsItem) => {
      console.log(cartInfo);
      return (acc += cur.goodsItem.goods.price * cur.quantity);
    }, 0);
  }, [cartInfo]);

  return (
    <Page>
      <CartHeader>{type === 'cart' ? '장바구니' : '구매하기'}</CartHeader>
      <CartCountWrapper>{cartInfo?.length}개 상품</CartCountWrapper>
      {cartInfo?.length! > 0 ? (
        <Cart info={cartInfo} totalPrice={totalPrice} type={type} />
      ) : (
        <EmptyCart />
      )}

      {isLoading && <Loading />}
    </Page>
  );
};

export default CartPage;
