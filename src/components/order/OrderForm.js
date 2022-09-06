import { SubmitButton } from 'components/common/button/Button';
import { StyledFormInput } from 'components/common/Input/Input';
import PALETTE from 'constants/palette';
import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
const fadeUp = keyframes`
from {
  height: 100%;
}
to {
  height: 0px;
}
`;
const StyledForm = styled.form``;
const NameAndPhone = styled.div`
  display: flex;
  gap: 10px;
`;
const InputName = styled.span`
  font-size: 14px;
  color: ${PALETTE.GRAY[0]};
  flex: 1;
`;
const GrayBorderOutline = styled.div`
  border-top: 2px solid ${PALETTE.GRAY[1]};
  margin-bottom: 15px;
  margin-top: 15px;
  background-color: white;
`;
const GrayBorderOutlineTop = styled.div`
  border-top: 2px solid ${PALETTE.GRAY[1]};
  margin-bottom: 15px;
  margin-top: 15px;
  background-color: white;
  display: ${(props) => (props.isFormOpen ? 'block' : 'none')};
`;
const Wrapper = styled.div`
  ${(props) => {
    if (!props.isFormOpen) {
      return css`
        animation: ${fadeUp} 1s ease forwards;
      `;
    }
  }}
  //animation: ${fadeUp} 1s ease forwards;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15px 0;
  overflow: hidden;
`;

const PayWrapper = styled.div`
  display: ${(props) => (props.isFormOpen ? 'none' : 'hidden')};
`;
const OrderForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const onClickNextStep = (e) => {
    e.preventDefault();
    setIsFormOpen(false);
  };
  return (
    <>
      <StyledForm>
        주문 고객
        <GrayBorderOutline></GrayBorderOutline>
        <Wrapper isFormOpen={isFormOpen}>
          <InputName>받으시는 분</InputName>
          <NameAndPhone>
            <StyledFormInput placeholder="이름" name="name" type="text" width="50%" />
            <StyledFormInput placeholder="-없이 입력" name="name" type="text" width="50%" />
          </NameAndPhone>
          <StyledFormInput placeholder="받으시는 분" name="name" type="text" />
          <SubmitButton size="lg" backcolor="black" color="white" onClick={onClickNextStep}>
            다음 단계
          </SubmitButton>
        </Wrapper>
        <GrayBorderOutlineTop isFormOpen={isFormOpen}></GrayBorderOutlineTop>
        결제 수단
        <GrayBorderOutline></GrayBorderOutline>
        <PayWrapper isFormOpen={isFormOpen}>ss</PayWrapper>
      </StyledForm>
    </>
  );
};

export default OrderForm;
