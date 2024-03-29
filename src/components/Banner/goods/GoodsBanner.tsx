import ImgSlider from 'components/common/Slider/ImgSlider';
import Product from 'components/product/Product';
import * as Styled from './GoodsBanner.styles';
interface GoodsInfoData {
  id: number;
  name: string;
  classification: string;
  price: number;
  imgPath: string;
}
const GoodsInfo: GoodsInfoData[] = [
  {
    id: 84,
    name: '나이키 줌X 인빈서블 런 플라이니트2',
    classification: '남성',
    price: 180000,
    imgPath:
      'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DH5425-103/1fca4b7d-1562-49fe-94c3-ab701319dd1c_primary.jpg',
  },
  {
    id: 94,
    name: '나이키 에어맥스 플라이니트 레이서',
    classification: '남성 신발',
    price: 80000,
    imgPath:
      'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/b17f099a-b928-437e-8f76-c6368df846e4_primary.jpg?gallery',
  },
  {
    id: 104,
    name: '나이키 에어맥스',
    classification: '여성 신발',
    price: 1000,
    imgPath:
      'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DX2954-001/3c108bc4-c05e-4e43-9031-79f81220c031_primary.jpg?browse',
  },
  {
    id: 114,
    name: 'KD15 EP',
    classification: '신발',
    price: 189000,
    imgPath:
      'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DO9827-901/8dd5c3c3-9c3a-46db-91ab-61978cfb5fc3_primary.jpg?browse',
  },
];

const GoodsBanner = (): JSX.Element => {
  return (
    <Styled.GoodsBannerContainer>
      <Styled.BannerLabel>Featured Shoes</Styled.BannerLabel>
      <ImgSlider>
        {GoodsInfo.map((goods) => (
          <Product goodsInfo={goods} />
        ))}
      </ImgSlider>
    </Styled.GoodsBannerContainer>
  );
};

export default GoodsBanner;
