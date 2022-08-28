import axios from 'axios';
import request from './requestMethods';

export const getGoodsItems = async (gender, colorCode, size) => {
  const filterKeyArr = ['gender', 'colorCode', 'size']; //constant로 분리
  const filterParams = {
    gender,
    colorCode,
    size,
  };
  let params = {};
  for (let key of filterKeyArr) {
    if (filterParams[key]) {
      params[key] = filterParams[key];
    }
  }
  const res = await request.get(`/goods`, {
    params: params,
  });
  return res.data;
};

export const getGoodsColors = async () => {
  const res = await request.get('/goods/colors');
  return res.data;
};

//상품 상세
export const getGoodsDetail = async (goodsId) => {
  const res = await request(`/goods/${goodsId}`);
  return res.data;
};
