import { getGoodsColors, getGoodsItems } from 'api/goods';
import { useQuery } from 'react-query';

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
