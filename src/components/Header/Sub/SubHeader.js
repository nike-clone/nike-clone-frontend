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
const SubHeader = ({ refetch }) => {
  const user = JSON.parse(sessionStorage.getItem('user'));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isModalOpen } = useSelector((state) => state.modal);
  const { isSucess } = useSelector((state) => state.user);
  const modalOpenHandler = () => {
    dispatch(modalStateChange());
  };
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
