import { useState } from 'react';

const useModal = (initialValue) => {
  const [isModalOpen, setIsModalOpen] = useState(initialValue);
  const modalOpenHandler = (e) => {
    e.preventDefault();
    setIsModalOpen(!isModalOpen);
  };
  return [isModalOpen, modalOpenHandler, setIsModalOpen];
};

export default useModal;
