import styled, { css } from 'styled-components';
import logo from 'assets/images/logo.png';
import searchIcon from 'assets/icons/search.png';
import heartIcon from 'assets/icons/heart.svg';
import hamburgerIcon from 'assets/icons/hamburger.svg';
import bagIcon from 'assets/icons/cart.svg';
import { Link } from 'react-router-dom';
import { StyledInput } from 'components/common/Input/Input';
import { getCategories } from 'api/header';
import { useQuery } from 'react-query';
import { useScroll } from 'hooks/useScroll';
import Modal, { SideModal } from 'components/common/modal/Modal';
import SideMenu from './Side/SideMenu';
import useModal from 'hooks/useModal';
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
  ${(props) => {
    if (props.active) {
      return css`
        position: sticky;
        top: 0px;
      `;
    }
  }}
  .main-logo {
    width: 70px;
    margin-left: 34px;
  }
`;
const MenuWrapper = styled.ul`
  display: flex;
  height: 100%;
  padding-right: 30px;
  & {
    @media screen and (max-width: 1023px) {
      display: none;
    }
  }
`;
const Menu = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
  padding-right: 18px;
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

const MainHeader = () => {
  // const { data: categoryList } = useQuery('categories', getCategories, {
  //   enabled: true,
  //   refetchOnWindowFocus: false,
  // });

  const active = useScroll();

  const [isModalOpen, modalOpenHandler] = useModal(false);

  return (
    <>
      <Container active={active}>
        <Link to="/">
          <img className="main-logo" src={logo} alt="logo" />
        </Link>
        <MenuWrapper>
          <Menu>
            <Link to="/category?gender=Men">Men</Link>
          </Menu>
          <Menu>
            <Link to="/category?gender=Women">Women</Link>
          </Menu>
          <Menu>
            <Link to="/category?gender=Unisex">Unisex</Link>
          </Menu>
        </MenuWrapper>
        <GatherWrapper>
          <StyledInput icon={searchIcon} placeholder="검색" />
          <IconWrapper>
            <img className="heart" src={heartIcon} alt="heart" />
            <img src={bagIcon} alt="bag" />
            <img className="menu" src={hamburgerIcon} alt="menu" onClick={modalOpenHandler} />
          </IconWrapper>
        </GatherWrapper>
      </Container>
      {isModalOpen && <SideModal showModal={modalOpenHandler}>{<SideMenu />}</SideModal>}
    </>
  );
};

export default MainHeader;
