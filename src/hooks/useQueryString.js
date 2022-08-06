import { useSearchParams } from 'react-router-dom';

const useQueryString = (key) => {
  const [searchParams] = useSearchParams();
  return searchParams.get(key);
};

export default useQueryString;
