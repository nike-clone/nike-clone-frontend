import PALETTE from 'constants/palette';
import styled, { css } from 'styled-components';
interface Props {
  active: boolean;
}
export const Container = styled.header<Props>`
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
  ${(props) => {
    if (props.active) {
      return css`
        position: fixed;
        top: 0px;
      `;
    }
  }}
  .main-logo {
    width: 70px;
    margin-left: 34px;
  }
`;
export const MenuWrapper = styled.ul`
  display: flex;
  height: 100%;
  padding-right: 30px;
  & {
    @media screen and (max-width: 1023px) {
      display: none;
    }
  }
`;
export const Menu = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
  padding-right: 18px;
  &:hover {
    border-bottom: 2px solid black;
  }
`;

export const GatherWrapper = styled.div`
  width: 165px;
  position: relative;
  display: flex;
  align-items: center;
  padding-right: 10px;
  margin-right: 130px;
`;

export const IconWrapper = styled.div`
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
  .heart {
    @media screen and (max-width: 1023px) {
      display: none;
    }
  }
  .menu {
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
`;
export const CartBag = styled.div`
  position: relative;
`;
export const CartCounter = styled.div`
  border-radius: 50%;
  width: 16px;
  height: 16px;
  background-color: ${PALETTE.ORANGE[0]};
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  font-size: 14px;
  color: #fff;
`;
