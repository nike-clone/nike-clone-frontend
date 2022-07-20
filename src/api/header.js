import request from './requestMethods';

export const getCategories = async () => {
  const res = await request.get('/admin/category');
  return res.data;
};
