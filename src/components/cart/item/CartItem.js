import PALETTE from 'constants/palette';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import closeIcon from 'assets/icons/closeX.svg';
import { formatPrice } from 'util/format';
import { useMutation, useQueryClient } from 'react-query';
import { changeItemOption, deleteCart } from 'api/cart';
import { useDispatch, useSelector } from 'react-redux';
import { modalStateChange } from 'features/modal/modalSlice';
import Modal from 'components/common/modal/Modal';
import DetailGoods from 'pages/goods/detail/DetailGoods';
import GoodsDetailImgList from 'components/goods/detail/GoodsDetailImgList';
import { useGoodsDetail } from 'hooks/query/useGoods';
import useModal from 'hooks/useModal';
import GoodsDetailInfo from 'components/goods/detail/info/GoodsDetailInfo';
import ColorChip from 'components/common/color/ColorChip';
import { setGoodsOption } from 'features/goods/optionSlice';
import DetailGoodsSizeFilter from 'components/goods/detail/size/DetailGoodsSizeFilter';
import GoodsDetailQuantity from 'components/goods/detail/quantity/GoodsDetailQuantity';
import { SubmitButton } from 'components/common/button/Button';
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
  display: flex;
  flex-direction: column;
  gap: 10px;
  del {
    color: #000;
  }
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
// 카트 아이템 모달 컨텐트

const OptionContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  @media screen and (min-width: 480px) and (max-width: 767px) {
    flex-direction: column;
  }
  padding: 20px 30px;
`;
const DetailInfoWrapper = styled.div`
  padding-left: 60px;
`;
const OptionChangeContent = ({ goodsId, quantity, size, color, itemId }) => {
  const queryClient = useQueryClient();
  const { data: goodsDetail } = useGoodsDetail(goodsId);
  const dispatch = useDispatch();
  const option = useSelector((state) => state.option);
  const [detailGoodsItem, setDetailGoodsItem] = useState([]);
  const handleGoodsOption = (e, colorId) => {
    dispatch(setGoodsOption({ ...option, [e.target.name]: e.target.value }));
    if (e.target.name === 'color') {
      let goodsItem = goodsDetail?.goodsItems.filter((item) => item.color.id === colorId);

      setDetailGoodsItem(goodsItem);
    }
  };
  const handleQuantity = useCallback(
    (e) => {
      dispatch(setGoodsOption({ ...option, type: e.target.dataset.option }));
    },
    [option.quantity, dispatch]
  );
  console.log('aaaa', option);
  const changeOption = useMutation(changeItemOption, {
    onSuccess: () => {
      alert('변경되었습니다.');
      queryClient.invalidateQueries('cart');
    },
    onError: (e) => {
      console.log(e);
    },
  });

  //cart item 옵션 변경
  const handleItemOption = (goodsId, quantity, size, colorId) => {
    console.log('g', colorId);

    changeOption.mutate({ goodsId, quantity, size, colorId });
  };

  useEffect(() => {
    dispatch(setGoodsOption({ size: size, color: String(color), quantity: quantity }));
  }, []);
  return (
    <OptionContainer>
      <GoodsDetailImgList detailImgList={goodsDetail?.goodsItems[0].goodsItemImages} />
      <DetailInfoWrapper>
        <GoodsDetailInfo goodsDetail={goodsDetail} />
        <ColorChip
          colors={goodsDetail?.colors}
          handleGoodsOption={handleGoodsOption}
          selectedColor={color}
        />
        <DetailGoodsSizeFilter
          handleGoodsOption={handleGoodsOption}
          sizeInfo={detailGoodsItem}
          selectedSize={size}
        />
        <GoodsDetailQuantity handleQuantity={handleQuantity} quantity={option.quantity} />
        <SubmitButton
          backcolor="white"
          color="black"
          size="lg"
          round
          border
          onClick={() =>
            handleItemOption(itemId, option.quantity, option.size, Number(option.color))
          }
        >
          옵션변경하기
        </SubmitButton>
      </DetailInfoWrapper>
    </OptionContainer>
  );
};

const CartItem = ({ color, goods, size, quantity, id }) => {
  const queryClient = useQueryClient();

  const [isModalOpen, modalOpenHandler] = useModal(false);
  const deleteCartItem = useMutation(() => deleteCart(id), {
    onSuccess: (data) => {
      queryClient.invalidateQueries('cart'); //refetch cart
    },
  });
  const onClickDeleteItem = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      deleteCartItem.mutate();
    }
  };

  return (
    <>
      <ItemWrapper>
        <ItemDetail>
          <ItemImg>
            <img src={goods?.productImagePrimary} alt="sd" />
            <ItemInfo>
              <h2>{goods?.name}</h2>
              <span>색상: {color.name}</span>
              <span>사이즈: {size}</span>
              <span className="quantity">수량: {quantity}</span>
            </ItemInfo>
          </ItemImg>
          <ItemOptionChange>
            <GrayTextBtn onClick={modalOpenHandler}>옵션 변경</GrayTextBtn>
          </ItemOptionChange>
          <ItemPriceDetail>
            <del>{formatPrice(goods?.price)}</del>
            <span>{formatPrice(goods?.salePrice)}</span>
          </ItemPriceDetail>
        </ItemDetail>
        <ButtonWrapper>
          <GrayTextBtn>위시리스트에 추가</GrayTextBtn>
        </ButtonWrapper>
        <CloseIcon onClick={() => onClickDeleteItem()}>
          <img src={closeIcon} alt="close" />
        </CloseIcon>
      </ItemWrapper>
      {isModalOpen && (
        <Modal width="955px" showModal={modalOpenHandler}>
          {
            <OptionChangeContent
              goodsId={goods?.id}
              itemId={id}
              size={size}
              color={color.id}
              quantity={quantity}
            />
          }
        </Modal>
      )}
    </>
  );
};

export default CartItem;
