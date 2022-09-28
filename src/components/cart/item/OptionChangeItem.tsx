import PALETTE from 'constants/palette';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import closeIcon from 'assets/icons/closeX.svg';
import { useMutation, useQueryClient } from 'react-query';
import { changeItemOption, deleteCart } from 'api/cart';
import { useDispatch, useSelector } from 'react-redux';
import GoodsDetailImgList from 'components/goods/detail/GoodsDetailImgList';
import { useGoodsDetail } from 'hooks/query/useGoods';
import GoodsDetailInfo from 'components/goods/detail/info/GoodsDetailInfo';
import ColorChip from 'components/common/ColorChip/ColorChip';
import { setGoodsOption } from 'features/goods/optionSlice';
import DetailGoodsSizeFilter from 'components/goods/detail/size/DetailGoodsSizeFilter';
import GoodsDetailQuantity from 'components/goods/detail/quantity/GoodsDetailQuantity';
import { SubmitButton } from 'components/common/Button/Button';
import { Options, Color, GoodsItemImages } from 'types/goods';
const OptionContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  @media screen and (min-width: 480px) and (max-width: 767px) {
    flex-direction: column;
  }
  @media screen and (max-width: 479px) {
    flex-direction: column;
    padding: 0px 5px;
    margin-top: 5px;
    padding-top: 5px;
  }
  padding: 20px 30px;
  span {
    text-align: right;
    padding-bottom: 10px;
    margin-right: 5px;
    img {
      @media screen and (min-width: 768px) {
        display: none;
      }
    }
  }
`;
const DetailInfoWrapper = styled.div`
  padding-left: 60px;
  width: 100%;
  @media screen and (max-width: 479px) {
    padding: 10px 5px;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    padding: 10px 5px;
  }
`;
interface Props {
  goodsId: number;
  quantity: number;
  size: number;
  color: number;
  itemId: number;
  setIsModalOpen: (status: boolean) => void;
}
interface Item {
  color: Color;
  goodsItemImages: GoodsItemImages;
  id: number;
  size: number;
  stock: number;
}
const OptionChangeItem = ({
  goodsId,
  quantity,
  size,
  color,
  itemId,
  setIsModalOpen,
}: Props): JSX.Element => {
  const queryClient = useQueryClient();
  const { data: goodsDetail } = useGoodsDetail(goodsId);
  const dispatch = useDispatch();
  const option = useSelector((state: Options) => state.option);

  const [detailGoodsItem, setDetailGoodsItem] = useState([]);
  const handleGoodsOption = (e: React.MouseEvent<HTMLInputElement>, colorId: number) => {
    dispatch(
      setGoodsOption({
        ...option,
        [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value,
      })
    );
    if ((e.target as HTMLInputElement).name === 'color') {
      let goodsItem = goodsDetail?.goodsItems.filter((item: Item) => item.color.id === colorId);

      setDetailGoodsItem(goodsItem);
    }
  };
  const handleQuantity = (type: 'm' | 'p') => {
    if (type === 'm') {
      dispatch(setGoodsOption({ ...option, type: 'm' }));
    } else {
      dispatch(setGoodsOption({ ...option, type: 'p' }));
    }
  };

  const changeOption = useMutation(changeItemOption, {
    onSuccess: () => {
      alert('변경되었습니다.');
      queryClient.invalidateQueries('cart');
      setIsModalOpen(false);
    },
    onError: (e) => {
      console.log(e);
    },
  });

  //cart item 옵션 변경
  const handleItemOption = (goodsId: number, quantity: number, size: number, colorId: number) => {
    changeOption.mutate({ goodsId, quantity, size, colorId });
  };

  useEffect(() => {
    dispatch(setGoodsOption({ size: size, color: String(color), quantity: quantity }));
  }, []);
  return (
    <OptionContainer>
      <span onClick={() => setIsModalOpen(false)}>
        <img src={closeIcon} alt="close" />
      </span>
      <GoodsDetailImgList detailImgList={goodsDetail?.goodsItems[0].goodsItemImages} />
      <DetailInfoWrapper>
        <GoodsDetailInfo goodsDetail={goodsDetail} />
        <ColorChip
          colors={goodsDetail?.colors}
          handleGoodsOption={handleGoodsOption}
          selectedColor={Number(option.color)}
        />
        <DetailGoodsSizeFilter
          handleGoodsOption={handleGoodsOption}
          sizeInfo={detailGoodsItem}
          selectedSize={Number(option.size)}
          quantity={option.quantity}
          handleQuantity={handleQuantity}
        />
        <GoodsDetailQuantity handleQuantity={handleQuantity} quantity={option.quantity} />
        <SubmitButton
          backcolor="white"
          color="black"
          size="lg"
          round
          border
          onClick={() =>
            handleItemOption(itemId, option.quantity, Number(option.size), Number(option.color))
          }
        >
          옵션변경하기
        </SubmitButton>
      </DetailInfoWrapper>
    </OptionContainer>
  );
};

export default OptionChangeItem;
