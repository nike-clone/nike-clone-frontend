import styled from 'styled-components';

interface Props {
  width?: string;
}
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalOverlay = styled.div<Props>`
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

export const SideModalOverlay = styled.div`
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
