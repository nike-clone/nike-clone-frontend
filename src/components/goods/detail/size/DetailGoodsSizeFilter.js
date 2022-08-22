import React from 'react';
import styled, { css } from 'styled-components';
const FilterLable = styled.label``;
const FilterUnit = styled.div`
  border-top: 1px solid #ccc;
  margin-bottom: 10px;
  border: none;
`;
const SizeFilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 2px;
  grid-row-gap: 5px;
`;
const SizeContainer = styled.label`
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
  padding: 14px 0px;
  font-size: 12px;
  position: relative;
  width: 74px;
  ${(props) => {
    if (props.stock < 1) {
      return css`
        background-color: gray;
      `;
    }
  }}

  &:hover {
    cursor: pointer;
  }
  input {
    position: absolute;
    top: 0;
    width: 100%;
    display: none;
  }
  input[type='checkbox']:checked + .sizeChecked::before {
    content: '';
    position: absolute;
    left: 0px;
    top: -1px;
    border-radius: 5px;
    width: 72px;
    height: 40px;
    border: 1px solid black;
  }
  input[type='radio']:checked + .sizeChecked::before {
    content: '';
    position: absolute;
    left: 0px;
    top: -1px;
    border-radius: 5px;
    width: 72px;
    height: 40px;
    border: 1px solid black;
  }
`;

const DetailGoodsSizeFilter = ({ handleGoodsOption, sizeInfo }) => {
  return (
    <FilterUnit>
      <FilterLable></FilterLable>
      <SizeFilterWrapper>
        {sizeInfo.map((size) => (
          <SizeContainer stock={size.stock} key={size.id}>
            <input type="radio" name="size" value={size.size} onClick={handleGoodsOption} />
            <span className="sizeChecked"></span>
            {size.size}
          </SizeContainer>
        ))}
      </SizeFilterWrapper>
    </FilterUnit>
  );
};

export default DetailGoodsSizeFilter;
