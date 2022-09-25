import React, { useState } from 'react';
import * as Styled from 'components/goods/header/GoodsHeader.style';
import filterIcon from 'assets/icons/filter.svg';
import downIcon from 'assets/icons/down.svg';
import useModal from 'hooks/useModal';
interface OptionType {
  filterName: string;
  filterData: string;
}
interface Props {
  modalOpenHandler: () => void;
  setOptionFilter: React.Dispatch<React.SetStateAction<{ filterName: string; filterData: string }>>;
  optionFilter: OptionType;
  gender: String;
  refetch: () => void;
}
const GoodsHeader = ({
  modalOpenHandler,
  setOptionFilter,
  optionFilter,
  gender,
  refetch,
}: Props): JSX.Element => {
  const onClickfilter = (e: React.MouseEvent<HTMLLIElement>) => {
    setOptionFilter({
      ...optionFilter,
      filterName: (e.target as HTMLElement).textContent!,
      filterData: (e.target as HTMLElement).dataset.sort!,
    });
    refetch();
  };
  const [isFilterOpen, filterOpenHandler] = useModal(false);
  return (
    <Styled.SectionHeader>
      <Styled.CategoryInfo>
        <span>{gender}</span>
        <h2>{gender}'s 신발 </h2>
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
