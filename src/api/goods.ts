import axios from 'axios';
import { Color } from 'types/goods';
import { GetGoodsResp } from 'types/resp';
import request from './requestMethods';
interface FilterGoods {
  gender: string;
  colorCode: string[];
  size: string[];
}
export const getGoodsItems = async (gender: string, colorCode: string[], size: string[]) => {
  const filterKeyArr = ['gender', 'colorCode', 'size']; //constant로 분리
  const filterParams: FilterGoods = {
    gender,
    colorCode,
    size,
  };
  let params: Record<string, unknown> = {};
  for (let key of filterKeyArr) {
    if (filterParams[key as keyof FilterGoods]) {
      params[key as keyof FilterGoods] = filterParams[key as keyof FilterGoods];
    }
  }

  const res = await request.get<GetGoodsResp>(`/goods`, {
    params: params,
  });
  return res.data;
};

export const getGoodsColors = async () => {
  const res = await request.get<Color[]>('/goods/colors');
  return res.data;
};

//상품 상세
export const getGoodsDetail = async (goodsId: number) => {
  const res = await request.get(`/goods/${goodsId}`);
  return res.data;
};
