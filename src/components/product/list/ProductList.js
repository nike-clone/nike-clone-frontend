import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProductInfo from '../info/ProductInfo';
import shoe1 from 'assets/images/shoe1.jpg';
const GoodsContainer = styled.div`
  margin-left: ${(props) => (props.isModalOpen ? '318px' : '0px')};
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 480px) and (max-width: 767px) {
    margin: 0;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin: 0px;
  }
  transition: 0.2s all ease;
`;
const GoodsItemWrapper = styled.div`
  width: 33%;
  margin-bottom: 10px;
  margin-right: 10px;

  img {
    width: 100%;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    width: calc(50% - 5px);
    &:nth-child(2n) {
      margin-right: 0px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: calc(50% - 5px);
    &:nth-child(2n) {
      margin-right: 0px;
    }
  }
  @media screen and (min-width: 1024px) {
    width: calc(33% - 5px);
    &:nth-child(3n) {
      margin-right: 0px;
    }
  }
`;

const ProductList = ({ isModalOpen, data }) => {
  return (
    <GoodsContainer isModalOpen={isModalOpen}>
      {data?.map((product) => (
        <GoodsItemWrapper key={product.id}>
          <Link to={`/goods/${product.id}`}>
            <img src={product.imagePath} alt="shoe" />
          </Link>
          <ProductInfo info={product} />
        </GoodsItemWrapper>
      ))}
    </GoodsContainer>
  );
};

export default ProductList;
