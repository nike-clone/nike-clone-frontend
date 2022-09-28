import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
  @media screen and (max-width: 479px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const SizeContainer = styled.label`
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
  padding: 14px 0px;
  font-size: 12px;
  position: relative;
  width: 74px;
  @media screen and (max-width: 479px) {
    width: 100%;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    width: 100%;
  }
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
    @media screen and (max-width: 479px) {
      width: 100%;
    }
    @media screen and (min-width: 480px) and (max-width: 767px) {
      width: 100%;
    }
  }
`;

const DetailGoodsSizeFilter = ({
  handleGoodsOption,
  sizeInfo,
  selectedSize,
  quantity,
  handleQuantity,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    if (sizeInfo[selectedIndex]?.stock < quantity) {
      alert('재고가 부족합니다.');
      handleQuantity('m');
    }
  }, [quantity]);

  const identifySizeIndex = (index) => {
    setSelectedIndex(index);
  };

  return (
    <FilterUnit>
      <FilterLable></FilterLable>
      <SizeFilterWrapper>
        {sizeInfo.map((size, index) => (
          <SizeContainer stock={size.stock} key={size.id}>
            <input
              type="radio"
              name="size"
              value={size.size}
              onChange={handleGoodsOption}
              checked={size.size === selectedSize}
              onClick={() => identifySizeIndex(index)}
              disabled={size.stock < 1}
            />
            <span className="sizeChecked"></span>
            {size.stock > 0 ? size.size : '품절'}
          </SizeContainer>
        ))}
      </SizeFilterWrapper>
    </FilterUnit>
  );
};

export default DetailGoodsSizeFilter;
