import { createPortal } from 'react-dom';
import * as Styled from './Modal.styles';

const portalElement = document.getElementById('modal')!;
interface Props {
  children: JSX.Element;
  showModal: () => void;
  width?: string;
}
const Modal = ({ children, showModal, width }: Props) => {
  return (
    <>
      {createPortal(<Styled.Backdrop onClick={showModal} />, portalElement)}
      {createPortal(
        <Styled.ModalOverlay width={width}>{children}</Styled.ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export const SideModal = ({ children, showModal }: Props) => {
  return (
    <>
      {createPortal(<Styled.Backdrop onClick={showModal} />, portalElement)}
      {createPortal(<Styled.SideModalOverlay>{children}</Styled.SideModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
