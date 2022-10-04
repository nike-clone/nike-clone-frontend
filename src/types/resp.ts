import { Color, Goods, GoodsItem, GoodsItemImages, Items, Product } from './goods';
export interface JoinResp {
  message: string;
  data: {
    email: string;
  };
}

export interface AddCartResp {
  id: number;
  quantity: number;
  cart: {
    id: number;
  };
  goodsItem: {
    id: number;
    stock: number;
    color: Color;
    size: number;
    goods: Goods;
  };
  goodsItemImages: GoodsItemImages;
}

export type GetCartResp = Omit<AddCartResp, 'cart' | 'goodsItemImages'>;

export interface DeleteCartResp {
  message: string;
  deletedCartItem: {
    quantity: number;
    cart?: {
      id: number;
    };
    anonymousCart?: {
      id: string;
      createdAt: string;
    };
  };
}

export interface PatchCartResp {
  message: string;
  updatedCartItem: {
    id: number;
    quantity: number;
    cart: {
      id: number;
      user: {
        id: string;
        email: string;
        password: string;
        name: string;
        phone: string;
        birthOfDate: string;
        gender: string;
        isAdmin: boolean;
      };
    };
    goodsItem: {
      id: number;
      stock: number;
      size: number;
      color: Color;
      goodsItemImages: GoodsItemImages;
    };
  };
}
type MainGoodsItem = Omit<Items, 'goods'>;
export interface MainGoods extends Goods {
  gender: {
    id: number;
    gender: string;
    name: string;
  };
  classification: {
    id: number;
    type: string;
    alias: string;
  };
  goodsItems: MainGoodsItem[];
}

export interface GetGoodsResp {
  data: Product[];
  meta: {
    requestedCount: number;
    count: number;
    responseCount: number;
  };
}
