import { getGoodsColors, getGoodsDetail, getGoodsItems } from 'api/goods';
import { useQueries, useQuery } from 'react-query';

export const useGoodsItems = (gender, color, filterData) => {
  return useQuery(['goodsItems', gender, color], () => getGoodsItems(gender, color), {
    enabled: true,
    refetchOnWindowFocus: false,
    retry: false,
    select: (data) => {
      console.log(filterData);
      data.sort((a, b) => {
        if (filterData === 'new') {
          return b.createdAt - a.createdAt;
        } else if (filterData === 'high') {
          return b.price - a.price;
        } else if (filterData === 'low') {
          return a.price - b.price;
        } else {
          return a.salePercentage - b.salePercentage;
        }
      });
      console.log(data);
      return data;
    },
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
