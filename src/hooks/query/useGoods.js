import { getGoodsColors, getGoodsDetail, getGoodsItems } from 'api/goods';
import { useQueries, useQuery } from 'react-query';

export const useGoodsItems = (gender, color) => {
  return useQuery(['goodsItems', gender, color], () => getGoodsItems(gender, color), {
    enabled: true,
    refetchOnWindowFocus: false,
    retry: false,
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
  return useQuery(['goods-detail', goodsId], () => getGoodsDetail(goodsId), {
    retry: false,
    enabled: true,
    refetchOnWindowFocus: false,
  });
};
