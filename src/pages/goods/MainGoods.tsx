import GoodsHeader from 'components/goods/header/GoodsHeader';
import React, { useState } from 'react';
import GoodsColorFilter from 'components/goods/filter/color/GoodsColorFilter';
import GoodsSizeFilter from 'components/goods/filter/size/GoodsSizeFilter';
import useModal from 'hooks/useModal';
import { useGoodsColors, useGoodsItems } from 'hooks/query/useGoods';
import ProductList from 'components/product/list/ProductList';
import useQueryString from 'hooks/useQueryString';
import { filterGender } from 'util/gender';
import useFilter from 'hooks/useFilter';
import Loading from 'components/Loading/Loading';
import * as Styled from './MainGoods.styles';
interface FilterOption {
  size: string[];
  color: string[];
}
interface FilterData {
  filterName: string;
  filterData: string;
}
const MainGoods = () => {
  const queryString = useQueryString('gender');
  const gender: 'Male' | 'Female' | 'Unisex' = filterGender(queryString);

  const [optionFilter, setOptionFilter] = useState<FilterData>({
    filterName: '신상품순',
    filterData: '',
  });

  const [{ size, color }, onChange] = useFilter<FilterOption>({
    size: [],
    color: [],
  });

  const [isModalOpen, modalOpenHandler] = useModal(true);

  const { data, isLoading, refetch } = useGoodsItems(gender, color, size, optionFilter.filterData);

  const { data: colors } = useGoodsColors();

  return (
    <>
      <Styled.Page>
        <GoodsHeader
          modalOpenHandler={modalOpenHandler}
          optionFilter={optionFilter}
          setOptionFilter={setOptionFilter}
          gender={gender}
          refetch={refetch}
        />
        <Styled.Content>
          <Styled.Filter isModalOpen={isModalOpen}>
            <GoodsColorFilter onChange={onChange} colors={colors} refetch={refetch} />
            <GoodsSizeFilter onChange={onChange} refetch={refetch} />
          </Styled.Filter>
          <ProductList isModalOpen={isModalOpen} data={data} />
        </Styled.Content>
      </Styled.Page>
      {isLoading && (
        <>
          <Loading />
        </>
      )}
    </>
  );
};

export default MainGoods;
