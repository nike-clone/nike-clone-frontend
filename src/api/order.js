import request from './requestMethods';
let params = { anonymous_id: localStorage.getItem('NC_GUEST_ID') };
export const orderItems = async (payData) => {
  const resp = await request.post('/orders', { ...payData }, params ? { params } : '');

  return resp.data;
};
