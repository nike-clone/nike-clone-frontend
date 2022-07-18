import { StyledFormInput } from 'components/common/Input/Input';
import PALETTE from 'constants/palette';
import useInput from 'hooks/useInput';
import React, { useState } from 'react';
import styled from 'styled-components';
import checkIcon from 'assets/icons/check.svg';
import { SubmitButton } from 'components/common/button/Button';
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
  padding: 30px 10px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
  .gender {
    border: 1px solid ${PALETTE.GRAY[1]};
    flex: 1;
    padding: 10px 5px;
    font-size: 14px;
    &:hover {
      cursor: pointer;
    }
  }
  .men {
    border: 1px solid black;
  }
  .women {
    border: 1px solid black;
  }
`;
const GenderSelect = styled.div``;
const JoinForm = () => {
  const [{ email, password, passwordConfirm, name, phone, birthDate }, onChange] = useInput({
    email: '',
  });
  const [gender, setGender] = useState('');
  const selectGender = (gen) => {
    setGender(gen === 'm' ? 'm' : 'w');
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledFormInput
        placeholder="사용하실 ID를 입력해주세요. (수신가능 E-mail)"
        name="email"
        type="email"
        value={email}
        onChange={onChange}
      />
      <StyledFormInput
        placeholder="영문 대 소문+숫자+특수문자 8~16자리(괄호(),<> 사용 불가)"
        name="password"
        type="password"
        value={password}
        onChange={onChange}
      />
      <StyledFormInput
        placeholder="패스워드를 다시 입력해 주세요."
        name="passwordConfirm"
        type="password"
        value={passwordConfirm}
        onChange={onChange}
      />
      <StyledFormInput
        placeholder="이름을 입력해 주세요."
        name="name"
        type="text"
        value={name}
        onChange={onChange}
      />
      <StyledFormInput
        placeholder="휴대폰 번호을 '-'표 없이 입력해 주세요."
        name="phone"
        type="text"
        value={phone}
        onChange={onChange}
      />
      <StyledFormInput
        placeholder="생년월일 예)2020.03.01"
        name="birthDate"
        type="text"
        value={birthDate}
        onChange={onChange}
      />
      <ButtonWrapper>
        <div
          className={['gender', gender === 'm' ? 'men' : ''].join(' ')}
          onClick={() => selectGender('m')}
        >
          {gender === 'm' && <img src={checkIcon} alt="check" />} 남성
        </div>
        <div
          className={['gender', gender === 'w' ? 'women' : ''].join(' ')}
          onClick={() => selectGender('w')}
        >
          {gender === 'w' && <img src={checkIcon} alt="check" />} 여성
        </div>
      </ButtonWrapper>
      <SubmitButton size="lg" backcolor="black" color="white">
        회원가입하기
      </SubmitButton>
    </StyledForm>
  );
};

export default JoinForm;
