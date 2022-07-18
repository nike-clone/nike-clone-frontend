import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 20vh;
  left: 50%;
  width: 30%;
  height: 40vh;
  background-color: white;
  padding: 1rem;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(-50%);
`;
const portalElement = document.getElementById('modal') as HTMLElement;

interface Props {
  children: React.ReactNode;
  showModal: (e: React.MouseEvent<any>) => void;
}

const Modal = ({ children, showModal }: Props): JSX.Element => {
  return (
    <>
      {createPortal(<Backdrop onClick={showModal} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
