import { orderItems } from 'api/order';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const useOrder = () => {
  const navigate = useNavigate();
  return useMutation(orderItems, {
    onSuccess: (data) => {
      console.log('d', data);
      navigate('/success/order');
    },
    onError: (error) => {
      console.log(error);
      navigate('/error');
    },
  });
};

export default useOrder;
