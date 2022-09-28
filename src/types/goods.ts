export interface Goods {
  createdAt: string;
  id: number;
  name: string;
  price: number;
  productImageExtra: string[];
  productImagePrimary: string;
  salePercentage?: number;
  salePrice?: number;
}

export interface Color {
  id: number;
  name: string;
  colorCode: string;
}

export interface Options {
  option: {
    size: number;
    color: string;
    quantity: number;
    type: 'm' | 'p';
  };
}

export interface GoodsItemImages {
  id: number;
  goodsName: string;
  color: string;
  goodsItemImages: string[];
}
export interface GoodsBasic {
  id: number;
  quantity: number;
  stock: number;
  size: number;
  color: string;
}
export interface GoodsItem extends Omit<GoodsBasic, 'stock' | 'size' | 'color'> {
  goodsItem: Items;
}

export interface Items {
  color: Color;
  goods: Goods;
  id: number;
  size: number;
  stock: number;
}
