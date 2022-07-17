import { useState } from 'react';

const useModal = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);

  return { value, setValue };
};

export default useModal;
