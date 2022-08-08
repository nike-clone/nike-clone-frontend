import GoodsHeader from 'components/goods/header/GoodsHeader';
import React, { useState } from 'react';
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
import useQueryString from 'hooks/useQueryString';
import { filterGender } from 'util/gender';
import spinner from 'assets/icons/833.gif';
import useFilter from 'hooks/useFilter';

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
  const queryString = useQueryString('gender');
  const gender = filterGender(queryString);
  const [optionFilter, setOptionFilter] = useState({ filterName: '신상품순', filterData: '' });

  const [{ size, color }, onChange] = useFilter({
    size: [],
    color: [],
  });

  const [isModalOpen, modalOpenHandler] = useModal(true);
  const [isFilterOpen, filterOpenHandler] = useModal(false);
  const { data, isLoading, refetch } = useGoodsItems(gender, color, optionFilter.filterData);

  const { data: colors } = useGoodsColors();
  return (
    <Page>
      <GoodsHeader
        modalOpenHandler={modalOpenHandler}
        optionFilter={optionFilter}
        setOptionFilter={setOptionFilter}
        isFilterOpen={isFilterOpen}
        filterOpenHandler={filterOpenHandler}
      />
      <Content>
        <Filter isModalOpen={isModalOpen}>
          <GoodsColorFilter onChange={onChange} color={color} colors={colors} refetch={refetch} />
          <GoodsSizeFilter onChange={onChange} size={size} />
        </Filter>
        <ProductList isModalOpen={isModalOpen} data={data} />
      </Content>
      {isLoading && (
        <>
          <img src={spinner} alt="spinner" />
        </>
      )}
    </Page>
  );
};

export default MainGoods;
