import styled from 'styled-components';
import { useGoodsDetail } from 'hooks/query/useGoods';
import { SubmitButton } from 'components/common/Button/Button';
import Parser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import GoodsDetailImgList from 'components/goods/detail/GoodsDetailImgList';
import GoodsDetailInfo from 'components/goods/detail/info/GoodsDetailInfo';
import GoodsDetailQuantity from 'components/goods/detail/quantity/GoodsDetailQuantity';
import { useState } from 'react';
import ColorChip from 'components/common/ColorChip/ColorChip';
import Loading from 'components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { setGoodsOption } from 'features/goods/optionSlice';
import DetailGoodsSizeFilter from 'components/goods/detail/size/DetailGoodsSizeFilter';
import { useMutation } from 'react-query';
import { addCart } from 'api/cart';
import useCart from 'hooks/query/useCart';
const Page = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
const DetailContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  @media screen and (min-width: 480px) and (max-width: 767px) {
    flex-direction: column;
  }
  @media screen and (max-width: 479px) {
    flex-direction: column;
  }
`;

const DetailInfoWrapper = styled.div`
  width: 449px;
  padding-left: 60px;
  @media screen and (min-width: 480px) and (max-width: 767px) {
    padding-left: 0px;
    width: 100%;
    margin-top: 30px;
  }
  @media screen and (max-width: 479px) {
    padding-left: 0px;
    margin: auto;
    margin-top: 30px;
    width: 100%;
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
const filterStock = (size, goodsItems) => {
  goodsItems.find();
};
const DetailGoods = () => {
  const { goodsId } = useParams();
  const { data: goodsDetail, isLoading, isSuccess } = useGoodsDetail(goodsId);
  const option = useSelector((state) => state.option);
  const { data: cartItems, refetch } = useCart();
  const dispatch = useDispatch();
  // const [{ size }, onChange] = useInput({
  //   size: '',
  // });

  //const [selectedOption, setSelectedOption] = useState({ selectedSize: '', selectedColor: '' });
  const [detailGoodsItem, setDetailGoodsItem] = useState([]);
  const handleGoodsOption = (e, colorId) => {
    dispatch(setGoodsOption({ ...option, [e.target.name]: e.target.value }));
    if (e.target.name === 'color') {
      let goodsItem = goodsDetail?.goodsItems.filter((item) => item.color.id === colorId);

      setDetailGoodsItem(goodsItem);
    }
  };
  const handleQuantity = (type) => {
    if (type === 'm') {
      dispatch(setGoodsOption({ ...option, type: 'm' }));
    } else {
      dispatch(setGoodsOption({ ...option, type: 'p' }));
    }
  };

  const addToCart = useMutation(addCart, {
    onSuccess: () => {
      alert('성공');
      refetch();
    },
    onError: (e) => {
      if (e.response.status === 406) {
        alert('이미 장바구니에 존재하는 상품입니다.');
      }
    },
  });

  const handleAddCart = (quantity, colorId, size, goodsId) => {
    if (!colorId) {
      alert('색상을 선택해 주세요!');
      return;
    }
    if (!size) {
      alert('사이즈를 선택해 주세요!');
      return;
    }
    const anonoymous_id = localStorage.getItem('NC_GUEST_ID');
    addToCart.mutate({ quantity, goodsId, size, colorId, anonoymous_id });
  };
  return (
    <Page>
      <DetailContainer>
        <GoodsDetailImgList
          detailImgList={detailGoodsItem[0]?.goodsItemImages}
          defaultImgs={goodsDetail?.goodsItems[0].goodsItemImages}
        />
        <DetailInfoWrapper>
          <GoodsDetailInfo goodsDetail={goodsDetail} />
          <ColorChip colors={goodsDetail?.colors} handleGoodsOption={handleGoodsOption} />
          <DetailGoodsSizeFilter
            handleGoodsOption={handleGoodsOption}
            sizeInfo={detailGoodsItem}
            selectedSize={Number(option.size)}
            quantity={option.quantity}
            handleQuantity={handleQuantity}
          />
          <GoodsDetailQuantity handleQuantity={handleQuantity} quantity={option.quantity} />
          <SubmitButton backcolor="black" color="white" size="lg" round>
            바로구매
          </SubmitButton>
          <ButtonWrapper>
            <SubmitButton
              backcolor="white"
              color="black"
              size="md"
              round
              border
              onClick={() => handleAddCart(option.quantity, option.color, option.size, goodsId)}
            >
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
      {isLoading && (
        <>
          <Loading />
        </>
      )}
    </Page>
  );
};

export default DetailGoods;
