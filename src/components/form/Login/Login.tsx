import { StyledFormInput, StyledInput } from 'components/common/Input/Input';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const LoginContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

const LoginHeader = styled.div`
  font-size: 24px;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
const FormBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CheckboxWrapper = styled.div``;
const LinkWrapper = styled.div``;
const Login = () => {
  return (
    <LoginContainer>
      <LoginHeader>
        <h2>나이키 로그인</h2>
      </LoginHeader>
      <LoginForm>
        <StyledFormInput placeholder="아이디" name="userId" type="email" required />
        <StyledFormInput placeholder="비밀번호" name="password" type="password" required />
        <FormBottomWrapper>
          <CheckboxWrapper>
            <input type="checkbox" />
            <span>저장</span>
          </CheckboxWrapper>

          <Link to="/">아이디/비밀번호 찾기</Link>
        </FormBottomWrapper>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
