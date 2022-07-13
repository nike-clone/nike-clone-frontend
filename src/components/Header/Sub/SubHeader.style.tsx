import React from 'react';
import styled from 'styled-components';
export const Container = styled.div`
  height: 36px;
  position: relative;
  background-color: rgb(245, 245, 245);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
`;

export const Brand = styled.div`
  img {
    width: 20px;
    height: 20px;
  }
  padding: 3px 8px;
`;
export const UserNav = styled.div`
  margin-right: 30px;
  a {
    padding: 0px 10px;
  }
`;
