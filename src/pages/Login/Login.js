import React from 'react';
import styled from 'styled-components';
import * as Styled from 'pages/goods/MainGoods.styles';
import GoodsColorFilter from 'components/goods/filter/color/GoodsColorFilter';
import GoodsSizeFilter from 'components/goods/filter/size/GoodsSizeFilter';
import { SubmitButton } from 'components/common/Button/Button';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Login = ({ isModalOpen, onChange, refetch, colors }) => {
  return (
    <>
      <Styled.Filter isModalOpen={isModalOpen}>
        <GoodsColorFilter onChange={onChange} colors={colors} refetch={refetch} />
        <GoodsSizeFilter onChange={onChange} refetch={refetch} />
        <ButtonWrapper>
          <SubmitButton size="lg" color="white" backcolor="black">
            확인
          </SubmitButton>
        </ButtonWrapper>
      </Styled.Filter>
    </>
  );
};

export default Login;
