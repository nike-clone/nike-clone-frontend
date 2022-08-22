import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 80px 10px;
`;
const SideMenuLink = styled.div`
  margin-bottom: 20px;
  font-size: 24px;
`;
const SideMenu = ({ showModal }) => {
  return (
    <Container>
      <SideMenuLink onClick={showModal}>
        <Link to="/category?gender=Men">Men</Link>
      </SideMenuLink>
      <SideMenuLink onClick={showModal}>
        <Link to="/category?gender=Women">Women</Link>
      </SideMenuLink>
      <SideMenuLink onClick={showModal}>
        <Link to="/category?gender=Unisex">Unisex</Link>
      </SideMenuLink>
    </Container>
  );
};

export default SideMenu;
