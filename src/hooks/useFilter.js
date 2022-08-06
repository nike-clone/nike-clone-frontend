import React, { useCallback, useState } from 'react';

const useFilter = (initialValue = '') => {
  // {color:[],size:[]}
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(
    (e) => {
      if (value.color.includes(e.target.value)) {
        const index = value.color.indexOf(e.target.value);
        value.color.splice(index, 1);
        setValue(value);
      } else {
        value[e.target.name].push(e.target.value.replace('#', ''));
        const newValue = { ...value };
        setValue(newValue);
      }
    },
    [value]
  );

  return [value, onChange];
};

export default useFilter;
