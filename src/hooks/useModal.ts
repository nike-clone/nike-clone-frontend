import React, { SetStateAction, useCallback, useState } from 'react';

const useModal = (
  initialValue: boolean
): [
  boolean,
  (e: React.MouseEvent<HTMLElement>) => void,
  React.Dispatch<SetStateAction<boolean>>
] => {
  const [isModalOpen, setIsModalOpen] = useState(initialValue);
  const modalOpenHandler = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      setIsModalOpen(!isModalOpen);
    },
    [isModalOpen]
  );
  return [isModalOpen, modalOpenHandler, setIsModalOpen];
};

export default useModal;
