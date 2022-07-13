import React from 'react';
import styled from 'styled-components';
import jorden from 'assets/icons/jorden.png';
import { Link } from 'react-router-dom';
import * as Styled from './SubHeader.style';
const SubHeader = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.Brand>
        <img src={jorden} alt="jordan" />
      </Styled.Brand>
      <Styled.UserNav>
        <Link to="/">고객센터</Link>|<Link to="/">멤버 가입</Link>|<Link to="/">로그인</Link>
      </Styled.UserNav>
    </Styled.Container>
  );
};

export default SubHeader;
