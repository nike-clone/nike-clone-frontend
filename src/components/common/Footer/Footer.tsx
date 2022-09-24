import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  @media screen and (min-width: 480px) {
    position: fixed;
    bottom: 0;
    left: 0;
  }
  height: 250px;
  width: 100%;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    color: white;
  }
`;

const Footer = (): JSX.Element => {
  return (
    <FooterWrapper>
      <h2>Nike-Custom-Clone</h2>
    </FooterWrapper>
  );
};

export default Footer;
