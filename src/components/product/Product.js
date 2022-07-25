
import ProductInfo from './info/ProductInfo';



const Product = ({ goodsInfo }) => {
  
  return (
        <>
          <img src={goodsInfo.imgPath} alt="product"/>

          <ProductInfo info={goodsInfo} />
        </>
  );
};

export default Product;
