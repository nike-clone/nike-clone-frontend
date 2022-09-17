import React, { useCallback, useState } from 'react';

const useFilter = (initialValue = '') => {
  // {color:[],size:[]}
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(
    (e) => {
      const selectedColor = e.target.value.replace('#', '');
      if (value.color.includes(selectedColor)) {
        const index = value.color.indexOf(selectedColor);
        value.color.splice(index, 1);
        setValue(value);
      } else {
        value[e.target.name].push(selectedColor);
        const newValue = { ...value };
        setValue(newValue);
      }
    },
    [value]
  );

  return [value, onChange];
};

export default useFilter;
