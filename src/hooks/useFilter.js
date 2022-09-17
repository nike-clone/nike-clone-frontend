import React, { useCallback, useState } from 'react';

const useFilter = (initialValue = '') => {
  // {color:[],size:[]}
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(
    (e) => {
      const selectedColor = e.target.value.replace('#', '');
      const index = value.color.indexOf(selectedColor);
      if (index >= 0) {
        value.color.splice(index, 1); //컬러 해제시 필터링 제외
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
