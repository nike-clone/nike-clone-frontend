import { getCart } from 'api/cart';
import { useQuery } from 'react-query';

const useCart = () => {
  return useQuery(['cart'], getCart, {
    retry: false,
    enabled: true,
    refetchOnWindowFocus: false,
  });
};

export default useCart;
