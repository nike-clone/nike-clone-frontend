import React, { useState, useCallback, SetStateAction } from 'react';

const useInput = <T = Record<string, string | number | boolean>>(
  initialValue: T
): [T, (e: React.ChangeEvent<HTMLInputElement>) => void, React.Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = { ...value, [e.target.name]: e.target.value };

      setValue(newValue);
    },
    [value]
  );

  return [value, onChange, setValue];
};

export default useInput;
