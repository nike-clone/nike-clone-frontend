import React, { useState } from 'react';
import * as Styled from 'components/goods/header/GoodsHeader.style';
import filterIcon from 'assets/icons/filter.svg';
import downIcon from 'assets/icons/down.svg';
import useModal from 'hooks/useModal';

const GoodsHeader = ({
  modalOpenHandler,
  setOptionFilter,
  optionFilter,
  isFilterOpen,
  filterOpenHandler,
}) => {
  const onClickfilter = (e) => {
    setOptionFilter({
      ...GoodsHeader,
      filterName: e.target.textContent,
      filterData: e.target.dataset.sort,
    });
  };

  return (
    <Styled.SectionHeader>
      <Styled.CategoryInfo>
        <span>Men</span>
        <h2>Men's 신발 (100)</h2>
      </Styled.CategoryInfo>
      <Styled.FilterWrapper>
        <Styled.OptionFilter onClick={modalOpenHandler}>
          <span>필터</span>
          <img src={filterIcon} alt="filter" />
        </Styled.OptionFilter>
        <Styled.SlidingFilter isFilterOpen={isFilterOpen}>
          <div className="select" onClick={filterOpenHandler}>
            <div className="selected">
              <div className="selected-value">{optionFilter.filterName}</div>
              <img src={downIcon} alt="down" />
            </div>
            <ul>
              <li className="option" data-sort="new" onClick={onClickfilter}>
                신상품순
              </li>
              <li className="option" data-sort="high" onClick={onClickfilter}>
                높은 가격순
              </li>
              <li className="option" data-sort="low" onClick={onClickfilter}>
                낮은 가격순
              </li>
              <li className="option" data-sort="sale" onClick={onClickfilter}>
                할인순
              </li>
            </ul>
          </div>
        </Styled.SlidingFilter>
      </Styled.FilterWrapper>
    </Styled.SectionHeader>
  );
};

export default GoodsHeader;
