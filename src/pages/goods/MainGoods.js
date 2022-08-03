import GoodsHeader from 'components/goods/header/GoodsHeader';
import React from 'react';
import styled from 'styled-components';

import useInput from 'hooks/useInput';
import GoodsFilter from 'components/goods/filter/color/GoodsColorFilter';
import GoodsColorFilter from 'components/goods/filter/color/GoodsColorFilter';
import GoodsSizeFilter from 'components/goods/filter/size/GoodsSizeFilter';
import useModal from 'hooks/useModal';
import ProductInfo from 'components/product/info/ProductInfo';
import { Link } from 'react-router-dom';
import { useGoodsColors, useGoodsItems } from 'hooks/query/useGoods';
import ProductList from 'components/product/list/ProductList';
import { useQuery } from 'react-query';
import { getGoodsItems } from 'api/goods';

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
    display: ${(props) => (props.isModalOpen ? 'block' : 'none')};
  }

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

const MainGoods = () => {
  const [{ size, color }, onChange] = useInput({
    size: '',
    color: '',
  });
  console.log(color, size);
  const [isModalOpen, modalOpenHandler] = useModal(true);
  const { data } = useQuery('goods', getGoodsItems, {
    refetchOnWindowFocus: false,
  });
  const { data: colors } = useGoodsColors();
  return (
    <Page>
      <GoodsHeader modalOpenHandler={modalOpenHandler} />
      <Content>
        <Filter isModalOpen={isModalOpen}>
          <GoodsColorFilter onChange={onChange} color={color} colors={colors} />
          <GoodsSizeFilter onChange={onChange} size={size} />
        </Filter>
        <ProductList isModalOpen={isModalOpen} data={data} />
      </Content>
    </Page>
  );
};

export default MainGoods;
