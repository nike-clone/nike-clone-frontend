import axios from 'axios';
import request from './requestMethods';

export const getGoodsItems = async () => {
  const res = await request('/goods');
  return res;
};
