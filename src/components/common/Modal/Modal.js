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
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 20vh;
  left: 50%;
  width: ${(props) => props.width};
  @media screen and (max-width: 479px) {
    width: 100%;
    padding: 0px;
    top: 0px;
    overflow-y: scroll;
    height: 100%;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    width: 100%;
    padding: 0px;
    top: 0px;
    overflow-y: scroll;
    height: 100%;
  }
  background-color: white;
  padding: 30px;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(-50%);
`;

const SideModalOverlay = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 70%;
  background-color: white;
  height: 100vh;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const portalElement = document.getElementById('modal');

const Modal = ({ children, showModal, width }) => {
  return (
    <>
      {createPortal(<Backdrop onClick={showModal} />, portalElement)}
      {createPortal(<ModalOverlay width={width}>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export const SideModal = ({ children, showModal }) => {
  return (
    <>
      {createPortal(<Backdrop onClick={showModal} />, portalElement)}
      {createPortal(<SideModalOverlay>{children}</SideModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
