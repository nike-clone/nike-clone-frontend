import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  height: 300px;
  width: 100%;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    color: white;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <h2>Nike-Custom-Clone</h2>
    </FooterWrapper>
  );
};

export default Footer;
