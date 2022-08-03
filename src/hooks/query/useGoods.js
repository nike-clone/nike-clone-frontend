import { getGoodsColors, getGoodsDetail, getGoodsItems } from 'api/goods';
import { useQueries, useQuery } from 'react-query';

export const useGoodsItems = () => {
  return useQuery(['goodsItems'], getGoodsItems, {
    enabled: true,
    refetchOnWindowFocus: false,
  });
};

export const useGoodsColors = () => {
  return useQuery(['goodscolors'], getGoodsColors, {
    enabled: true,
    refetchOnWindowFocus: false,
  });
};
//상품 상세
export const useGoodsDetail = (goodsId) => {
  return useQuery(['goods-detail', goodsId], () => getGoodsDetail(goodsId));
};
