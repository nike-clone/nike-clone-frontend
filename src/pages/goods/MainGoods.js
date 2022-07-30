import GoodsHeader from 'components/goods/header/GoodsHeader';
import React from 'react';
import styled from 'styled-components';
import shoe1 from 'assets/images/shoe1.jpg';
import useInput from 'hooks/useInput';
import GoodsFilter from 'components/goods/filter/color/GoodsColorFilter';
import GoodsColorFilter from 'components/goods/filter/color/GoodsColorFilter';
import GoodsSizeFilter from 'components/goods/filter/size/GoodsSizeFilter';
import useModal from 'hooks/useModal';
import ProductInfo from 'components/product/info/ProductInfo';
import { Link } from 'react-router-dom';
import { useGoodsItems } from 'hooks/query/useGoods';

const Page = styled.section``;
const Content = styled.div`
  display: flex;
  position: relative;
`;
const Filter = styled.div`
  height: 100%;
  width: 230px;
  position: absolute;
  left: 0;
  padding: 0px 5px;
  h3 {
    padding: 15px 10px;
  }
  @media screen and (min-width: 1024px) {
    display: ${props => props.isModalOpen ? 'block' : 'none'}
  }
 
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;
const GoodsContainer = styled.div`
  margin-left: ${props=>props.isModalOpen ? '381px' : '0px'};
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

const MainGoods = () => {
  const [{ size, color }, onChange] = useInput({
    size: '',
    color: '',
  });
  const GoodsInfo = [
    { name: '나이키 에어맥스 코코', classification: '여성 샌들', price: 107100, imgPath: shoe1 },
    { name: '나이키 에어맥스 97', classification: '남성 신발', price: 179100, imgPath: shoe1 },
    {
      name: '나이키 에어맥스 리프트 브리드',
      classification: '여성 신발',
      price: 116100,
      imgPath: shoe1,
    },
    {
      name: '나이키 에어맥스 리프트 브리드',
      classification: '여성 신발',
      price: 116100,
      imgPath: shoe1,
    },
  ];
const [isModalOpen,modalOpenHandler] = useModal(true);
const {data:goods,isError,isFetching,isLoading,isSuccess} = useGoodsItems();

  return (
    <Page>
      <GoodsHeader modalOpenHandler={modalOpenHandler}/>
      <Content>
        <Filter isModalOpen={isModalOpen}>
         <GoodsColorFilter onChange={onChange} color={color}/>
          <GoodsSizeFilter onChange={onChange} size={size}/>
        </Filter>
        <GoodsContainer isModalOpen={isModalOpen}>
          {goods.data.map(product => (
         
  <GoodsItemWrapper>
       <Link to={{
              pathname: '/goods',
              search: `?goodsId=${product.id}`
            }}>
  <img src={product.imagePath} alt="shoe" />
  </Link>
  <ProductInfo info={product}/>
</GoodsItemWrapper>
          ))}
        </GoodsContainer>
      </Content>
    </Page>
  );
};

export default MainGoods;
