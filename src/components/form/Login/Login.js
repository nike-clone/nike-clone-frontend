import { StyledFormInput } from 'components/common/Input/Input';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from 'assets/images/logo.png';
import { SubmitButton } from 'components/common/Button/Button';
import PALETTE from 'constants/palette';
import closeIcon from 'assets/icons/closeX.svg';
import { useDispatch } from 'react-redux';
import { modalStateChange } from 'features/modal/modalSlice';
import useInput from 'hooks/useInput';
import { useLogin } from 'hooks/useJoin';
import useCart from 'hooks/query/useCart';

const LoginContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  .closeIcon {
    position: absolute;
    right: -20px;
    top: -20px;
    &:hover {
      cursor: pointer;
    }
    @media screen and (max-width: 479px) {
      right: 0;
      top: 0;
    }
  }
`;

const LoginHeader = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  img {
    width: 50px;
    height: 30px;
  }
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
  padding: 10px 0 20px 0;
  align-items: center;
`;
const CheckboxWrapper = styled.div`
  font-size: 12px;
  color: ${PALETTE.GRAY[0]};
`;
const LinkWrapper = styled.div``;
const NotAMember = styled.div`
  font-size: 12px;
  color: ${PALETTE.GRAY[0]};
`;
const JoinLink = styled(Link)`
  text-decoration: underline;
  font-size: 12px;
`;
const FindLink = styled(Link)`
  font-size: 12px;
  color: ${PALETTE.GRAY[0]} !important;
`;

const Login = ({ modalClose }) => {
  const rememberdEmail = localStorage.getItem('NIKE_USERNAME');
  const checkboxRef = useRef();
  const data = useLogin();
  const [rememberId, setRemeberId] = useState(false);
  let [{ email, password }, onChange, setValue] = useInput({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const remeberIdCheckHandler = (e) => {
    setRemeberId(e.target.checked);
  };
  const linkToJoin = () => {
    dispatch(modalStateChange());
  };
  const onSubmitLogin = (e) => {
    e.preventDefault();
    data.mutate({ email, password, rememberId });
  };
  useEffect(() => {
    setValue({
      password: '',
      email: rememberdEmail,
    });
    if (rememberdEmail) {
      checkboxRef.current.checked = true;
      setRemeberId(true);
    }
  }, [rememberdEmail]);
  useEffect(() => {
    if (data.isSuccess) {
      dispatch(modalStateChange());
    }
  }, [data, dispatch]);
  return (
    <LoginContainer>
      <div className="closeIcon" onClick={modalClose}>
        <img src={closeIcon} alt="close" />
      </div>

      <LoginHeader>
        <img src={logo} alt="logo" />
        <h2>나이키 로그인</h2>
      </LoginHeader>
      <LoginForm onSubmit={onSubmitLogin}>
        <StyledFormInput
          placeholder="아이디"
          name="email"
          type="email"
          value={email}
          onChange={onChange}
          required
        />
        <StyledFormInput
          placeholder="비밀번호"
          name="password"
          type="password"
          value={password}
          onChange={onChange}
          required
        />
        <FormBottomWrapper>
          <CheckboxWrapper>
            <input
              type="checkbox"
              name="rememberId"
              onChange={remeberIdCheckHandler}
              ref={checkboxRef}
            />
            <span>로그인 유지하기</span>
          </CheckboxWrapper>

          <FindLink to="/">아이디/비밀번호 찾기</FindLink>
        </FormBottomWrapper>
        <SubmitButton size="lg" color="white" backcolor="black">
          로그인
        </SubmitButton>
      </LoginForm>
      <NotAMember>
        회원이 아니신가요?
        <JoinLink to="/join" onClick={linkToJoin}>
          회원가입
        </JoinLink>
      </NotAMember>
      <JoinLink to="/">비회원 주문 조회</JoinLink>
    </LoginContainer>
  );
};

export default Login;
