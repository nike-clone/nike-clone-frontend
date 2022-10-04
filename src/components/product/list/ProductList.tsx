import ProductInfo from '../info/ProductInfo';
import { Product } from 'types/goods';
import * as Styled from './ProductList.styles';
interface Props {
  isModalOpen?: boolean;
  data: Product[];
}
const ProductList = ({ isModalOpen, data }: Props): JSX.Element => {
  return (
    <Styled.GoodsContainer isModalOpen={isModalOpen}>
      {data?.map((product) => (
        <Styled.GoodsItemWrapper key={product.id}>
          <ProductInfo info={product} />
        </Styled.GoodsItemWrapper>
      ))}
    </Styled.GoodsContainer>
  );
};

export default ProductList;
