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
  .form_radio_btn {
    flex: 1;
    height: 45px;
    border: 1px solid ${PALETTE.GRAY[1]};
  }
  .form_radio_btn input[type='radio'] {
    display: none;
  }
  .form_radio_btn label {
    font-size: 14px;
    display: block;
    margin: 0 auto;
    text-align: center;
    height: -webkit-fill-available;
    line-height: 45px;
    &:hover {
      cursor: pointer;
    }
  }

  .form_radio_btn input[type='radio']:checked + label {
    border: 1px solid black;
  }

  .form_radio_btn label:hover {
    color: #666;
  }
`;

const JoinForm = () => {
  const [{ email, password, passwordConfirm, name, phone, birthDate, gender }, onChange] = useInput(
    {
      email: '',
      password: '',
      passwordConfirm: '',
      name: '',
      phone: '',
      birthDate: '',
      gender: '',
    }
  );
  console.log(gender);
  // const [gender, setGender] = useState('');
  // const handleSelectGeneder = (e) => {

  // };
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
        <div className="form_radio_btn">
          <input id="male" type="radio" name="gender" value="male" onChange={onChange} />
          <label htmlFor="male">남자</label>
        </div>

        <div className="form_radio_btn">
          <input id="female" type="radio" name="gender" value="female" onChange={onChange} />
          <label htmlFor="female">여자</label>
        </div>
      </ButtonWrapper>
      <SubmitButton size="lg" backcolor="black" color="white">
        회원가입하기
      </SubmitButton>
    </StyledForm>
  );
};

export default JoinForm;
