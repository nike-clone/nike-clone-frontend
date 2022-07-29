import React, { useState, useCallback } from 'react';

const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(
    (e) => {
      const newValue = { ...value, [e.target.name]: e.target.value };
      setValue(newValue);
    },
    [value]
  );

  return [value, onChange,setValue];
};

export default useInput;
