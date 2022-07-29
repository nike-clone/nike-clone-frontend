import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const LinkWrapper = styled(Link)`
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: black;
  color: white !important;
  border-radius: 20px;

  ${(props: styleProp) => {
    if (props.size === 'sm') {
      return css`
        padding: 5px 20px;
      `;
    } else if (props.size === 'md') {
      return css`
        padding: 12px 30px;
      `;
    } else {
      return css`
        padding: 20px 40px;
      `;
    }
  }}
`;
interface styleProp {
  size: 'sm' | 'md' | 'lg';
}

interface Props {
  children: string;
  target: string;
  size: 'sm' | 'md' | 'lg';
}

const StyledLink = ({ children, target, size }: Props): JSX.Element => {
  return (
    <LinkWrapper to={target} size={size}>
      {children}
    </LinkWrapper>
  );
};

export default StyledLink;
