import styled from 'styled-components';
import GoodsSizeFilter from 'components/goods/filter/size/GoodsSizeFilter';
import useInput from 'hooks/useInput';
import { useGoodsDetail } from 'hooks/query/useGoods';
import { NoneStyleButton, SubmitButton } from 'components/common/button/Button';
import Parser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import GoodsDetailImgList from 'components/goods/detail/GoodsDetailImgList';
import GoodsDetailInfo from 'components/goods/detail/info/GoodsDetailInfo';
import GoodsDetailQuantity from 'components/goods/detail/quantity/GoodsDetailQuantity';
const Page = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
const DetailContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
`;

const DetailInfoWrapper = styled.div`
  width: 449px;
  padding-left: 60px;
`;

const SizeLabel = styled.span`
  display: block;
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
  let { goodsId } = useParams();

  const { data: goodsDetail, isLoading, isSuccess } = useGoodsDetail(4);
  console.log('d', goodsDetail);
  return (
    <Page>
      <DetailContainer>
        <GoodsDetailImgList />
        <DetailInfoWrapper>
          <GoodsDetailInfo />
          <GoodsSizeFilter size={size} onChange={onChange} detail />
          <GoodsDetailQuantity />
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
