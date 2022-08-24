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
  console.log('r', res);
  return res;
};

export const getCart = async () => {
  const res = await request.get('/cart-items');

  return res.data;
};
