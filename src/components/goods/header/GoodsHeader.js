import React from 'react';
import * as Styled from 'components/goods/header/GoodsHeader.style';
import filterIcon from 'assets/icons/filter.svg';
import downIcon from 'assets/icons/down.svg';

const GoodsHeader = () => {
  return (
    <Styled.SectionHeader>
      <Styled.CategoryInfo>
        <span>Men</span>
        <h2>Men's 신발 (100)</h2>
      </Styled.CategoryInfo>
      <Styled.FilterWrapper>
        <Styled.OptionFilter>
          <span>필터</span>
          <img src={filterIcon} alt="filter" />
        </Styled.OptionFilter>
        <Styled.SlidingFilter>
          <span>신상품순</span>
          <img src={downIcon} alt="down" />
        </Styled.SlidingFilter>
      </Styled.FilterWrapper>
    </Styled.SectionHeader>
  );
};

export default GoodsHeader;
