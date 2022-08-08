import EmptyCart from 'components/Cart/EmptyCart';
import styled from 'styled-components';
import shoe1 from 'assets/images/shoe1.jpg';
import shoe2 from 'assets/images/shoe2.jpg';
import shoe3 from 'assets/images/shoe3.jpg';
import shoe4 from 'assets/images/shoe4.jpg';
import Cart from 'components/Cart/Cart';

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

const GoodsInfo = [
  { name: '나이키 에어맥스 코코', classification: '여성 샌들', price: 107100, imgPath: shoe1 },
  { name: '나이키 에어맥스 97', classification: '남성 신발', price: 179100, imgPath: shoe2 },
  {
    name: '나이키 에어맥스 리프트 브리드',
    classification: '여성 신발',
    price: 116100,
    imgPath: shoe3,
  },
  {
    name: '나이키 에어맥스 리프트 브리드',
    classification: '여성 신발',
    price: 116100,
    imgPath: shoe4,
  },
];

const CartPage = () => {
  return (
    <Page>
      <CartHeader>장바구니</CartHeader>
      <CartCountWrapper>0개 상품</CartCountWrapper>
      {GoodsInfo ? <Cart info={GoodsInfo} /> : <EmptyCart />}
    </Page>
  );
};

export default CartPage;
