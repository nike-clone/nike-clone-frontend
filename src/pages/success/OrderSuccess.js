import { NoneStyleButton } from 'components/common/Button/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const OrderSuccessWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 100px 10px;
  width: 100%;
  h2 {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 100px;
  }
`;
const OrderSuccess = () => {
  return (
    <OrderSuccessWrapper>
      <h2>결제가 성공하였습니다.</h2>
      <NoneStyleButton size="md">
        <Link to="/">홈으로 가기</Link>
      </NoneStyleButton>
    </OrderSuccessWrapper>
  );
};

export default OrderSuccess;
