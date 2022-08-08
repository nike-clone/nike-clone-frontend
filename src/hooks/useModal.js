import { useCallback, useState } from 'react';

const useModal = (initialValue) => {
  const [isModalOpen, setIsModalOpen] = useState(initialValue);
  const modalOpenHandler = useCallback(
    (e) => {
      e.preventDefault();
      setIsModalOpen(!isModalOpen);
    },
    [isModalOpen]
  );
  return [isModalOpen, modalOpenHandler, setIsModalOpen];
};

export default useModal;
