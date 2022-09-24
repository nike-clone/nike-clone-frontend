import jorden from 'assets/icons/jorden.png';
import { Link, useNavigate } from 'react-router-dom';
import * as Styled from './SubHeader.style';
import Login from 'components/form/Login/Login';
import Modal from 'components/common/Modal/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { modalStateChange } from 'features/modal/modalSlice';
import { logoutUser } from 'features/user/userSlice';
import { v4 as uuid } from 'uuid';
import { useQuery } from 'react-query';
import React from 'react';
interface Props {
  refetch: () => void;
}
interface ModalState {
  modal: {
    isModalOpen: boolean;
  };
}
interface UserState {
  user: {
    user: {
      aud: string;
      email: string;
      exp: number;
      iat: number;
      id: string;
      isAdmin: boolean;
      iss: string;
      name: string;
    };
    isLoggedIn: boolean;
  };
}
const SubHeader = ({ refetch }: Props): JSX.Element => {
  const user: string | null = JSON.parse(sessionStorage.getItem('user')!);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isModalOpen } = useSelector((state: ModalState) => state.modal);
  const { isLoggedIn } = useSelector((state: UserState) => state.user);
  const modalOpenHandler = () => {
    dispatch(modalStateChange());
  };
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
  return (
    <>
      <Styled.Container>
        <Styled.Brand>
          <img src={jorden} alt="jordan" />
        </Styled.Brand>
        <Styled.UserNav>
          {user ? (
            <Link to="/" onClick={logout}>
              로그아웃
            </Link>
          ) : (
            <>
              <Link to="/">고객센터</Link>|<Link to="/join">멤버 가입</Link>|
              <Link to="/" onClick={modalOpenHandler}>
                로그인
              </Link>
            </>
          )}
        </Styled.UserNav>
      </Styled.Container>
      {isModalOpen && (
        <Modal showModal={modalOpenHandler}>{<Login modalClose={modalOpenHandler} />}</Modal>
      )}
    </>
  );
};

export default SubHeader;
