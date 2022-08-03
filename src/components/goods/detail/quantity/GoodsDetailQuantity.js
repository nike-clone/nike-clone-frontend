import { NoneStyleButton } from 'components/common/button/Button';
import React from 'react';
import styled from 'styled-components';
import plus from 'assets/icons/plus.svg';
import minus from 'assets/icons/minus.svg';
const Quantity = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  margin-bottom: 15px;
  .quantity {
    margin-right: 25px;
  }
  .quantity-num {
    padding-right: 5px;
    margin-right: 10px;
    font-size: 14px;
  }
`;
const GoodsDetailQuantity = () => {
  return (
    <Quantity>
      <span className="quantity">수량</span>
      <span className="quantity-num">1</span>
      <NoneStyleButton size="sm" backcolor="white">
        <img src={minus} alt="minus" />
      </NoneStyleButton>
      <NoneStyleButton size="sm" backcolor="white">
        <img src={plus} alt="plus" />
      </NoneStyleButton>
    </Quantity>
  );
};

export default GoodsDetailQuantity;
