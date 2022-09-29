import React, { useCallback, useState } from 'react';

interface Options {
  color: string[];
  size: string[];
}
//extends 제약 조건
const useFilter = <T extends Options>(
  initialValue: T
): [T, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  // {color:[],size:[]}
  const [value, setValue] = useState<T>(initialValue);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedColor = e.target.value.replace('#', '');
      const index = value.color.indexOf(selectedColor);
      if (index >= 0) {
        value.color.splice(index, 1); //컬러 해제시 필터링 제외
        setValue(value);
      } else {
        value[e.target.name as keyof Options].push(selectedColor);
        const newValue = { ...value };
        setValue(newValue);
      }
    },
    [value]
  );

  return [value, onChange];
};

export default useFilter;
