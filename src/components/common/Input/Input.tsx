import React, { InputHTMLAttributes, ReactNode } from 'react';
import { Container } from 'react-dom';
import styled from 'styled-components';

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
const IconImg = styled.img`
  height: 25px;
  width: 25px;
  margin-left: 0px;
`;
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  icon: string;
}

export const StyledInput = ({ placeholder, icon }: Props) => {
  return (
    <>
      <IconContainer>
        <IconImg src={icon} />
      </IconContainer>
      <Input placeholder={placeholder} />
    </>
  );
};
