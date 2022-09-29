import { useSearchParams } from 'react-router-dom';

const useQueryString = (key: string): string | null => {
  const [searchParams] = useSearchParams();
  return searchParams.get(key);
};

export default useQueryString;
