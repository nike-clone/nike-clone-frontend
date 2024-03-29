import { userJoin, userLogin } from 'api/auth';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { setAuthenticatedUser } from 'features/user/userSlice';
import useCart from './query/useCart';

export const useJoin = () => {
  const navigate = useNavigate();
  return useMutation(userJoin, {
    onSuccess: () => {
      alert('회원가입이 완료되었습니다.');
      navigate('/');
    },
    onError: (error) => {
      console.log('err', error);
    },
  });
};

export const useLogin = () => {
  const { refetch } = useCart();
  const dispatch = useDispatch();
  return useMutation(userLogin, {
    onSuccess: (data, varaiables) => {
      if (varaiables.rememberId) {
        localStorage.setItem('NIKE_USERNAME', varaiables.email);
      } else {
        localStorage.removeItem('NIKE_USERNAME');
      }
      sessionStorage.setItem('tokenId', data.data);
      const decodedData = jwtDecode(data.data);
      dispatch(setAuthenticatedUser(decodedData));
      sessionStorage.setItem('user', JSON.stringify(decodedData));
      //임시 guset id를 삭제
      localStorage.removeItem('NC_GUEST_ID');
      refetch();
    },
    onError: (error) => {
      alert(error.response.data.message);
    },
  });
};
