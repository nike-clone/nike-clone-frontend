import React from 'react';
import styled from 'styled-components';
import spinner from 'assets/icons/833.gif';
export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoadingContents = styled.div``;
const Loading = (): JSX.Element => {
  return (
    <Background>
      <LoadingContents>
        <img src={spinner} alt="spinner" />
      </LoadingContents>
    </Background>
  );
};

export default Loading;
