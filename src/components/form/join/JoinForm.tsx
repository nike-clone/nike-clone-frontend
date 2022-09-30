import { StyledFormInput } from 'components/common/Input/Input';
import PALETTE from 'constants/palette';
import useInput from 'hooks/useInput';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SubmitButton } from 'components/common/Button/Button';
import {
  validateBithDate,
  validateEmail,
  validateName,
  validatePassword,
  validatePasswordCheck,
  validatePhoneNumber,
} from 'util/validation';
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
const ErrMsg = styled.div`
  font-size: 12px;
  color: red;
  display: flex;
  justify-content: flex-start;
`;
interface Props {
  mutate: (arg: Form) => void;
}
interface Form {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
  phone: string;
  birthOfDate: string;
  gender: string;
}
const JoinForm = ({ mutate }: Props) => {
  console.log('d', mutate);
  const [{ email, password, passwordCheck, name, phone, birthOfDate, gender }, onChange] =
    useInput<Form>({
      email: '',
      password: '',
      passwordCheck: '',
      name: '',
      phone: '',
      birthOfDate: '',
      gender: '',
    });
  const [emailErrMsg, setEmailErrMsg] = useState<string>('');
  const [birthErrMsg, setBirthErrMsg] = useState<string>('');
  const [passwordErrMsg, setPasswordErrMsg] = useState<string>('');
  const [passwordCheckErrMsg, setPasswordCheckErrMsg] = useState<string>('');
  const [nameErrMsg, setNameErrMsg] = useState<string>('');
  const [phoneErrMsg, setPhoneErrMsg] = useState<string>('');
  useEffect(() => {
    const emailMsg = validateEmail(email);
    const birthMsg = validateBithDate(birthOfDate);
    const passwordMsg = validatePassword(password);
    const passwordCheckMsg = validatePasswordCheck(password, passwordCheck);
    const nameMsg = validateName(name);
    const phoneMsg = validatePhoneNumber(phone);
    if (emailMsg) {
      setEmailErrMsg(emailMsg);
    } else {
      setEmailErrMsg('');
    }
    birthMsg ? setBirthErrMsg(birthMsg) : setBirthErrMsg('');
    nameMsg ? setNameErrMsg(nameMsg) : setNameErrMsg('');
    passwordMsg ? setPasswordErrMsg(passwordMsg) : setPasswordErrMsg('');
    passwordCheckMsg ? setPasswordCheckErrMsg(passwordCheckMsg) : setPasswordCheckErrMsg('');
    phoneMsg ? setPhoneErrMsg(phoneMsg) : setPhoneErrMsg('');
  }, [email, birthOfDate, password, passwordCheck, name, phone]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return;
    }
    mutate({ email, password, passwordCheck, name, phone, birthOfDate, gender });
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
      {<ErrMsg>{emailErrMsg}</ErrMsg>}
      <StyledFormInput
        placeholder="영문 대 소문+숫자+특수문자 8~16자리(괄호(),<> 사용 불가)"
        name="password"
        type="password"
        value={password}
        onChange={onChange}
      />
      {<ErrMsg>{passwordErrMsg}</ErrMsg>}
      <StyledFormInput
        placeholder="패스워드를 다시 입력해 주세요."
        name="passwordCheck"
        type="password"
        value={passwordCheck}
        onChange={onChange}
      />
      {<ErrMsg>{passwordCheckErrMsg}</ErrMsg>}
      <StyledFormInput
        placeholder="이름을 입력해 주세요."
        name="name"
        type="text"
        value={name}
        onChange={onChange}
      />
      {<ErrMsg>{nameErrMsg}</ErrMsg>}
      <StyledFormInput
        placeholder="휴대폰 번호을 '-'표 없이 입력해 주세요."
        name="phone"
        type="text"
        value={phone}
        onChange={onChange}
      />
      {<ErrMsg>{phoneErrMsg}</ErrMsg>}
      <StyledFormInput
        placeholder="생년월일 예)2020.03.01"
        name="birthOfDate"
        type="text"
        value={birthOfDate}
        onChange={onChange}
      />
      {<ErrMsg>{birthErrMsg}</ErrMsg>}
      <ButtonWrapper>
        <div className="form_radio_btn">
          <input id="male" type="radio" name="gender" value="Male" onChange={onChange} />
          <label htmlFor="male">남자</label>
        </div>

        <div className="form_radio_btn">
          <input id="female" type="radio" name="gender" value="Female" onChange={onChange} />
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
