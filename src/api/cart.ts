import { AddCartResp, DeleteCartResp, GetCartResp, PatchCartResp } from 'types/resp';
import request from './requestMethods';
let params = { anonymous_id: localStorage.getItem('NC_GUEST_ID') };
interface Cart {
  quantity: number;
  goodsId: number;
  size: number;
  colorId: number;
}
export const addCart = async ({ quantity, goodsId, size, colorId }: Cart) => {
  goodsId = Number(goodsId);
  size = Number(size);
  colorId = Number(colorId);
  const res = await request.post<AddCartResp>(
    '/cart-items',
    {
      quantity: quantity,
      goodsId: goodsId,
      size: size,
      colorId: colorId,
    },
    { params: { anonymous_id: localStorage.getItem('NC_GUEST_ID') } }
  );

  return res;
};

export const getCart = async () => {
  const res = await request.get<GetCartResp[]>('/cart-items', {
    params: { anonymous_id: localStorage.getItem('NC_GUEST_ID') },
  });

  return res.data;
};

export const deleteCart = async (id: number) => {
  // console.log(params);
  const res = await request.delete<DeleteCartResp>(`/cart-items/${id}`, { params });

  return res.data;
};

export const changeItemOption = async ({ goodsId, quantity, size, colorId }: Cart) => {
  const res = await request.patch<PatchCartResp>(
    `/cart-items/${goodsId}`,
    {
      quantity: quantity,
      size: size,
      colorId: colorId,
    },
    { params: { anonymous_id: localStorage.getItem('NC_GUEST_ID') } }
  );

  return res.data;
};
