import PALETTE from 'constants/palette';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import closeIcon from 'assets/icons/closeX.svg';
import { formatPrice } from 'util/format';
import { useMutation, useQueryClient } from 'react-query';
import { changeItemOption, deleteCart } from 'api/cart';
import { useDispatch, useSelector } from 'react-redux';
import { modalStateChange } from 'features/modal/modalSlice';
import Modal from 'components/common/Modal/Modal';
import DetailGoods from 'pages/goods/detail/DetailGoods';
import GoodsDetailImgList from 'components/goods/detail/GoodsDetailImgList';
import { useGoodsDetail } from 'hooks/query/useGoods';
import useModal from 'hooks/useModal';
import GoodsDetailInfo from 'components/goods/detail/info/GoodsDetailInfo';
import ColorChip from 'components/common/ColorChip/ColorChip';
import { setGoodsOption } from 'features/goods/optionSlice';
import DetailGoodsSizeFilter from 'components/goods/detail/size/DetailGoodsSizeFilter';
import GoodsDetailQuantity from 'components/goods/detail/quantity/GoodsDetailQuantity';
import { SubmitButton } from 'components/common/Button/Button';

const OptionChangeItem = React.lazy(() => import('./OptionChangeItem'));
const ItemWrapper = styled.div`
  border-top: 2px solid ${PALETTE.GRAY[1]};
  padding: 25px 0;
  position: relative;
`;
const ItemDetail = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 479px) {
    flex-direction: column;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    flex-direction: column;
  }
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
  display: flex;
  justify-content: space-between;
  padding: 0px 40px;
  flex: 1;
  h2 {
    padding-bottom: 10px;
    font-weight: 600;
  }
  span {
    display: block;
    color: gray;
  }
  @media screen and (max-width: 479px) {
    flex-direction: column;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    flex-direction: column;
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
  padding-right: 20px;
  text-align: center;
  @media screen and (max-width: 479px) {
    text-align: left;
    padding-top: 10px;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    text-align: left;
    padding-top: 10px;
  }
  &:hover {
    cursor: pointer;
  }
`;
const ItemPriceDetail = styled.div`
  span {
    color: ${PALETTE.ORANGE[0]};
  }
  display: flex;
  flex-direction: column;
  gap: 5px;
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
const OptionPriceWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 479px) {
    flex-direction: column;
    gap: 10px;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    flex-direction: column;
    gap: 10px;
  }
`;
const ItemCartDetail = styled.div`
  span {
    color: black;
  }
`;
// 카트 아이템 모달 컨텐트

//코드 스플리팅 적용 필요

const CartItem = ({ color, goods, size, quantity, id }) => {
  const queryClient = useQueryClient();

  const [isModalOpen, modalOpenHandler, setIsModalOpen] = useModal(false);
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
              <ItemCartDetail>
                <h2>{goods?.name}</h2>
                <span>색상: {color.name}</span>
                <span>사이즈: {size}</span>
                <span className="quantity">수량: {quantity}</span>
              </ItemCartDetail>
              <OptionPriceWrapper>
                <ItemOptionChange>
                  <GrayTextBtn onClick={modalOpenHandler}>옵션 변경</GrayTextBtn>
                </ItemOptionChange>
                <ItemPriceDetail>
                  {goods?.price ? (
                    <del>{formatPrice(goods?.salePrice)}</del>
                  ) : (
                    <h4>{formatPrice(goods.salePrice)}</h4>
                  )}
                  <span>{formatPrice(goods?.price)}</span>
                </ItemPriceDetail>
              </OptionPriceWrapper>
            </ItemInfo>
          </ItemImg>
        </ItemDetail>
        {/* <ButtonWrapper>
          <GrayTextBtn>위시리스트에 추가</GrayTextBtn>
        </ButtonWrapper> */}
        <CloseIcon onClick={() => onClickDeleteItem()}>
          <img src={closeIcon} alt="close" />
        </CloseIcon>
      </ItemWrapper>
      {isModalOpen && (
        <Modal width="955px" showModal={modalOpenHandler}>
          {
            <OptionChangeItem
              goodsId={goods?.id}
              itemId={id}
              size={size}
              color={color.id}
              quantity={quantity}
              setIsModalOpen={setIsModalOpen}
            />
          }
        </Modal>
      )}
    </>
  );
};

export default CartItem;
