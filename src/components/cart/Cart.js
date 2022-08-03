import { NoneStyleButton, SubmitButton } from 'components/common/button/Button';
import PALETTE from 'constants/palette';
import styled from 'styled-components';
import closeIcon from 'assets/icons/closeX.svg';
const CartContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;
const CartItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;
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

const Cart = ({ info }) => {
  return (
    <CartContainer>
      <CartItem>
        <ItemWrapper>
          <ItemDetail>
            <ItemImg>
              <img src={info[0].imgPath} alt="sd" />
              <ItemInfo>
                <h2>나이키 스포츠웨어 헤리티지86 퓨추라</h2>
                <span>스타일: 913011-073</span>
                <span>사이즈: FREE</span>
                <span className="quantity">수량: 1</span>
              </ItemInfo>
            </ItemImg>
            <ItemOptionChange>
              <GrayTextBtn>옵션 변경</GrayTextBtn>
            </ItemOptionChange>
            <ItemPriceDetail>29,000원</ItemPriceDetail>
          </ItemDetail>
          <ButtonWrapper>
            <GrayTextBtn>위시리스트에 추가</GrayTextBtn>
          </ButtonWrapper>
          <CloseIcon>
            <img src={closeIcon} alt="close" />
          </CloseIcon>
        </ItemWrapper>
        <ItemWrapper>
          <ItemDetail>
            <ItemImg>
              <img src={info[0].imgPath} alt="sd" />
              <ItemInfo>
                <h2>나이키 스포츠웨어 헤리티지86 퓨추라</h2>
                <span>스타일: 913011-073</span>
                <span>사이즈: FREE</span>
                <span className="quantity">수량: 1</span>
              </ItemInfo>
            </ItemImg>
            <ItemOptionChange>
              <GrayTextBtn>옵션 변경</GrayTextBtn>
            </ItemOptionChange>
            <ItemPriceDetail>29,000원</ItemPriceDetail>
          </ItemDetail>
          <ButtonWrapper>
            <GrayTextBtn>위시리스트에 추가</GrayTextBtn>
          </ButtonWrapper>
          <CloseIcon>
            <img src={closeIcon} alt="close" />
          </CloseIcon>
        </ItemWrapper>
      </CartItem>
      <CheckoutWrapper>
        <CheckoutHeader>주문예정금액</CheckoutHeader>
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
      </CheckoutWrapper>
    </CartContainer>
  );
};

export default Cart;
