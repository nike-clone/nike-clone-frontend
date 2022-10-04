import { AxiosResponse } from 'axios';
import request from './requestMethods';

export const getCategories = async () => {
  const res = await request.get<{ id: number; name: string }>('/admin/category');
  return res.data;
};
