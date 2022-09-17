import request from './requestMethods';
let params = { anonymous_id: localStorage.getItem('NC_GUEST_ID') };

export const addCart = async ({ quantity, goodsId, size, colorId }) => {
  goodsId = Number(goodsId);
  size = Number(size);
  colorId = Number(colorId);
  const res = await request.post(
    '/cart-items',
    {
      quantity: quantity,
      goodsId: goodsId,
      size: size,
      colorId: colorId,
    },
    params ? { params } : ''
  );

  return res;
};

export const getCart = async () => {
  const res = await request.get('/cart-items', {
    params: { anonymous_id: localStorage.getItem('NC_GUEST_ID') },
  });

  return res.data;
};

export const deleteCart = async (id) => {
  console.log(params);
  const res = await request.delete(`/cart-items/${id}`, { params });

  return res.data;
};

export const changeItemOption = async ({ goodsId, quantity, size, colorId }) => {
  const res = await request.patch(
    `/cart-items/${goodsId}`,
    {
      quantity: quantity,
      size: size,
      colorId: colorId,
    },
    { params }
  );

  return res.data;
};
