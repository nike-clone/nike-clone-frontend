import GoodsHeader from 'components/goods/header/GoodsHeader';
import React, { useState } from 'react';
import styled from 'styled-components';
import GoodsColorFilter from 'components/goods/filter/color/GoodsColorFilter';
import GoodsSizeFilter from 'components/goods/filter/size/GoodsSizeFilter';
import useModal from 'hooks/useModal';
import { useGoodsColors, useGoodsItems } from 'hooks/query/useGoods';
import ProductList from 'components/product/list/ProductList';
import useQueryString from 'hooks/useQueryString';
import { filterGender } from 'util/gender';
import useFilter from 'hooks/useFilter';
import Loading from 'components/Loading/Loading';

const Page = styled.section`
  height: 100vh;
`;
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

  const { data, isLoading, refetch } = useGoodsItems(gender, color, size, optionFilter.filterData);

  const { data: colors } = useGoodsColors();

  return (
    <>
      <Page>
        <GoodsHeader
          modalOpenHandler={modalOpenHandler}
          optionFilter={optionFilter}
          setOptionFilter={setOptionFilter}
          gender={gender}
          refetch={refetch}
        />
        <Content>
          <Filter isModalOpen={isModalOpen}>
            <GoodsColorFilter onChange={onChange} colors={colors} refetch={refetch} />
            <GoodsSizeFilter onChange={onChange} size={size} refetch={refetch} />
          </Filter>
          <ProductList isModalOpen={isModalOpen} data={data} />
        </Content>
      </Page>
      {isLoading && (
        <>
          <Loading />
        </>
      )}
    </>
  );
};

export default MainGoods;
