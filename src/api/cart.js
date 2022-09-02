import request from './requestMethods';

export const addCart = async ({ quantity, goodsId, size, colorId }) => {
  goodsId = Number(goodsId);
  size = Number(size);
  colorId = Number(colorId);
  const res = await request.post('/cart-items', {
    quantity: quantity,
    goodsId: goodsId,
    size: size,
    colorId: colorId,
  });

  return res;
};

export const getCart = async () => {
  const res = await request.get('/cart-items');

  return res.data;
};

export const deleteCart = async (id) => {
  const res = await request.delete(`/cart-items/${id}`);

  return res.data;
};

export const changeItemOption = async ({ goodsId, quantity, size, colorId }) => {
  console.log(goodsId, quantity, size, colorId);
  const res = await request.patch(`/cart-items/${goodsId}`, {
    quantity: quantity,
    size: size,
    colorId: colorId,
  });

  return res.data;
};
