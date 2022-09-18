import { logoutUser } from 'features/user/userSlice';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { modalStateChange } from 'features/modal/modalSlice';

const Container = styled.div`
  padding: 80px 10px;
`;
const SideMenuLink = styled.div`
  margin-bottom: 20px;
  font-size: 24px;
`;
const SideMenu = ({ showModal, refetch }) => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSucess } = useSelector((state) => state.user);
  const logout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('tokenId');
    localStorage.setItem('NC_GUEST_ID', `user-${uuid()}`);
    dispatch(logoutUser());
    if (!isSucess) {
      navigate('/');
    }
    refetch();
  };
  const modalOpenHandler = () => {
    dispatch(modalStateChange());
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
            <Link to="/join" onClick={showModal}>
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
