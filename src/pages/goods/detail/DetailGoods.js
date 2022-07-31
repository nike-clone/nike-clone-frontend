import styled from 'styled-components';
import shoe1 from 'assets/images/shoe1.jpg';
import GoodsSizeFilter from 'components/goods/filter/size/GoodsSizeFilter';
import useInput from 'hooks/useInput';
import plus from 'assets/icons/plus.svg';
import minus from 'assets/icons/minus.svg';
import { NoneStyleButton, SubmitButton } from 'components/common/button/Button';
import Parser from 'html-react-parser';
const Page = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
const DetailContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
`;
const GoodsImgListWrapper = styled.div`
  width: calc(100% - 449px);
`;
const DetailInfoWrapper = styled.div`
  width: 449px;
  padding-left: 60px;
`;
const DetailImgList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  width: 100%;
  li {
  }
  li > img {
    width: 100%;
  }
`;
const InfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  .original-price {
    color: #fa5400;
  }
`;
const GoodsName = styled.span`
  font-size: 30px;
  padding-top: 5px;
`;
const DiscountPercentage = styled.span`
  color: #fa5400;
  font-size: 18px;
  display: block;
  padding: 15px 0 30px 0;
`;
const SizeLabel = styled.span`
  display: block;
`;
const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  span {
    font-size: 16px;
    font-weight: 600;
  }
  del {
    margin-left: auto;
    font-size: 14px;
  }
`;
const Quantity = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  margin-bottom: 15px;
  .quantity {
    margin-right: 25px;
  }
  .quantity-num {
    padding-right: 5px;
    margin-right: 10px;
    font-size: 14px;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
  padding-top: 8px;
  padding-bottom: 15px;
  border-bottom: 1px solid gray;
`;

const DetailContent = styled.div`
  border-bottom: 1px solid gray;
  padding: 15px 0;
  font-size: 14px;
  line-height: 18px;
`;
const DeliveryTxt = styled.div`
  border-bottom: 1px solid gray;
  padding: 20px 0;
`;
const RefundTxt = styled.div`
  border-bottom: 1px solid gray;
  padding: 20px 0;
`;
const exampleTxt =
  '<p><b>편안함의 전설이 재탄생하다.</b></p><br><p>나이키 빅토리 원은 해변에서 경기장 관람석까지 장소를 불문한 머스트해브 클래식 아이템입니다. 가볍고 편안하여 착용하기 쉬우며 더 부드럽고 반응성이 좋은 폼으로 업그레이드되었습니다. 입체적인 그립 패턴은 발을 감싸고 고정해주며 새롭게 패딩 처리된 스트랩은 멋진 룩과 착화감을 선사합니다.</p>';
const DetailGoods = () => {
  const [{ size }, onChange] = useInput({
    size: '',
  });
  return (
    <Page>
      <DetailContainer>
        <GoodsImgListWrapper>
          <DetailImgList>
            <li>
              <img src={shoe1} alt="list" />
            </li>
            <li>
              <img src={shoe1} alt="list" />
            </li>
            <li>
              <img src={shoe1} alt="list" />
            </li>
            <li>
              <img src={shoe1} alt="list" />
            </li>
          </DetailImgList>
        </GoodsImgListWrapper>
        <DetailInfoWrapper>
          <InfoTop>
            <span className="classification">남성 신발</span>
            <PriceWrapper>
              <span className="original-price">219000 원</span>
              <del>39000 원</del>
            </PriceWrapper>
          </InfoTop>
          <GoodsName>헤럴드 이라니마</GoodsName>
          <DiscountPercentage>10% off</DiscountPercentage>
          <GoodsSizeFilter size={size} onChange={onChange} detail />
          <Quantity>
            <span className="quantity">수량</span>
            <span className="quantity-num">1</span>
            <NoneStyleButton size="sm" backcolor="white">
              <img src={minus} alt="minus" />
            </NoneStyleButton>
            <NoneStyleButton size="sm" backcolor="white">
              <img src={plus} alt="plus" />
            </NoneStyleButton>
          </Quantity>
          <SubmitButton backcolor="black" color="white" size="lg" round>
            바로구매
          </SubmitButton>
          <ButtonWrapper>
            <SubmitButton backcolor="white" color="black" size="md" round border>
              장바구니
            </SubmitButton>
            <SubmitButton backcolor="white" color="black" size="md" round border>
              위시리스트
            </SubmitButton>
          </ButtonWrapper>
          <DetailContent>{Parser(exampleTxt)}</DetailContent>
          <DeliveryTxt>배송</DeliveryTxt>
          <RefundTxt>환불</RefundTxt>
        </DetailInfoWrapper>
      </DetailContainer>
    </Page>
  );
};

export default DetailGoods;
