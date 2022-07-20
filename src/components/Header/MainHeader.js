import React from 'react';
import styled from 'styled-components';
import logo from 'assets/images/logo.png';
import searchIcon from 'assets/icons/search.png';
import heartIcon from 'assets/icons/heart.svg';
import bagIcon from 'assets/icons/cart.svg';
import { Link } from 'react-router-dom';
import { StyledInput } from 'components/common/Input/Input';
import axios from 'axios';
import request from 'api/requestMethods';
import { getCategories } from 'api/header';
import { useQuery, useQueryClient } from 'react-query';
const Container = styled.header`
  position: static;
  height: 60px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  transform-origin: top;
  transition: 0.05s;

  .main-logo {
    width: 70px;
    margin-left: 34px;
  }
`;
const MenuWrapper = styled.ul`
  display: flex;
  gap: 18px;

  height: 100%;
  padding-right: 30px;
`;
const Menu = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
  &:hover {
    border-bottom: 2px solid black;
  }
`;

const GatherWrapper = styled.div`
  width: 165px;
  position: relative;
  display: flex;
  align-items: center;
  padding-right: 10px;
  margin-right: 130px;
`;

const IconWrapper = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: 20px;
  margin-right: 30px;
  img:hover {
    cursor: pointer;
  }
`;

const MainHeader = () => {
  const { data: categoryList } = useQuery('categories', getCategories, {
    enabled: true,
    refetchOnWindowFocus: false,
  });

  return (
    <Container>
      <img className="main-logo" src={logo} alt="logo" />
      <MenuWrapper>
        {categoryList &&
          categoryList.map((category) => (
            <Menu key={category.id}>
              <Link to="/">{category.name}</Link>
            </Menu>
          ))}
      </MenuWrapper>
      <GatherWrapper>
        <StyledInput icon={searchIcon} placeholder="검색" />
        <IconWrapper>
          <img src={heartIcon} alt="heart" />
          <img src={bagIcon} alt="bag" />
        </IconWrapper>
      </GatherWrapper>
    </Container>
  );
};

export default MainHeader;
