import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  border: ${(props) => (props.border ? '1px solid black' : 'none')};
  background-color: ${(props) => props.backcolor};
  color: ${(props) => props.color};

  //width를 다르게
  ${(props) => {
    if (props.size === 'lg') {
      return css`
        padding: 28px 50px;
        width: 100%;
        height: 48px;
        border-radius: ${(props) => (props.round ? '48px' : '0px')};
        @media screen and (max-width: 479px) {
          width: 100%;
        }
        @media screen and (min-width: 480px) and (max-width: 767px) {
          width: 100%;
        }
      `;
    } else if (props.size === 'md') {
      return css`
        padding: 28px 20px;
        width: 50%;
        height: 48px;
        border-radius: ${(props) => (props.round ? '48px' : '0px')};
      `;
    } else {
      return css`
        padding: 5px 10px;
        width: 46px;
        height: 46px;
      `;
    }
  }}

  text-align: center;
  text-decoration: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s all ease-out;
`;

export const SubmitButton = styled(StyledButton)`
  //color: #ffffff;
  //text-decoration: underline;
`;

export const NoneStyleButton = styled(StyledButton)``;
