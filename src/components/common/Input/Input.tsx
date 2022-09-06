import React, { InputHTMLAttributes, ReactNode } from 'react';
import { Container } from 'react-dom';
import styled from 'styled-components';
import PALETTE from 'constants/palette';
const Input = styled.input`
  border-radius: 67px;
  border: none;
  outline: none;
  width: 180px;
  height: 40px;
  font-weight: 300;
  font-size: 16px;
  background-color: rgb(244, 244, 244);
  padding-left: 45px;
`;
const IconContainer = styled.div`
  background-color: rgb(244, 244, 244);
  position: absolute;
  left: 0;
  border-radius: 100px;
  height: 100%;
  padding-left: 10px;
  display: flex;
  align-items: center;
`;

const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const FormInput = styled.input`
  height: 40px;
  padding: 5px 10px;
  gap: 10px;
  border: 1px solid ${PALETTE.GRAY[1]};
  width: ${(props) => props.width || '100%'};
  ::placeholder {
    color: ${PALETTE.GRAY[2]};
  }
`;
const IconImg = styled.img`
  height: 25px;
  width: 25px;
  margin-left: 0px;
`;
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  icon?: string;
}

interface FormProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  name: string;
  type: string;
  value?: string;
  onChange?: () => void;
}

export const StyledInput = ({ placeholder, icon }: Props) => {
  return (
    <>
      <IconContainer>{icon && <IconImg src={icon} />}</IconContainer>
      <Input placeholder={placeholder} />
    </>
  );
};

export const StyledFormInput = ({ placeholder, name, type, value, width, onChange }: FormProps) => {
  return (
    <FormInput
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      width={width}
    />
  );
};
