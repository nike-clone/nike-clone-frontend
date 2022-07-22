import { userJoin, userLogin } from 'api/auth';
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

export const useLogin = () => {
  return useMutation(userLogin, {
    onSuccess: (data,varaiables) => {
    
      if(varaiables.rememberId) {
        localStorage.setItem('NIKE_USERNAME',varaiables.email)
      } else {
        localStorage.removeItem('NIKE_USERNAME')
      }
      localStorage.setItem('tokenId',data.data);

    },
    onError: (error) => {
      console.log('eer',error)
    }
  })
}