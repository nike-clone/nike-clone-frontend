import axios from 'axios';
import request from './requestMethods';

export const getGoodsItems = async () => {
  const res = await request('/goods');
  return res.data;
};

export const getGoodsColors = async () => {
  const res = await request('/goods/colors');
  return res.data;
};

//상품 상세
export const getGoodsDetail = async (goodsId) => {
  const res = await request(`/goods/${goodsId}`);
  return res.data;
};
