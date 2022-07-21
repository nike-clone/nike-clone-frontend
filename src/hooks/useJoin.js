import { userJoin } from 'api/join';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

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
