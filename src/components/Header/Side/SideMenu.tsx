import { logoutUser } from 'features/user/userSlice';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { modalStateChange } from 'features/modal/modalSlice';
import { UserState } from 'types/user';
import React from 'react';
import { AppDispatch } from 'features/store';

const Container = styled.div`
  padding: 80px 10px;
`;
const SideMenuLink = styled.div`
  margin-bottom: 20px;
  font-size: 24px;
`;
interface Props {
  showModal: (e: React.MouseEvent<HTMLElement>) => void;
  refetch: () => void;
}
const SideMenu = ({ showModal, refetch }: Props): JSX.Element => {
  const user = JSON.parse(sessionStorage.getItem('user')!);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state: UserState) => state.user);
  const logout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('tokenId');
    localStorage.setItem('NC_GUEST_ID', `user-${uuid()}`);
    dispatch(logoutUser());
    if (!isLoggedIn) {
      navigate('/');
    }
    refetch();
  };
  const modalOpenHandler = (): void => {
    dispatch(modalStateChange());
  };
  const handleSideModal = (e: React.MouseEvent<HTMLElement>): void => {
    showModal(e);
    navigate('/join');
  };
  return (
    <Container>
      <SideMenuLink>
        {user ? (
          <Link to="/" onClick={logout}>
            로그아웃
          </Link>
        ) : (
          <>
            <Link to="/join" onClick={handleSideModal}>
              멤버 가입
            </Link>
            <br />
            <br />
            <Link to="/" onClick={modalOpenHandler}>
              로그인
            </Link>
          </>
        )}
      </SideMenuLink>
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
