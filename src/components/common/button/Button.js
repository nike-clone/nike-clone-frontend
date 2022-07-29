import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  background-color: ${(props) => props.backcolor};
  color: ${(props) => props.color};
  //width를 다르게
  ${(props) => {
    if (props.size === 'lg') {
      return css`
        padding: 16px 50px;
        width: 100%;
        height: 48px;
      `;
    } else if (props.size === 'md') {
      return css`
        padding: 15px 20px;
        width: 154px;
        height: 50px;
      `;
    } else {
      return css`
        padding: 5px 10px;
        width: 95px;
        height: 36px;
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
  text-decoration:underline;
`;
export const EditButton = styled(StyledButton)`
  border: 1px solid black;
  display: flex;
  gap: 7px;
  img {
    margin-right: 5px;
  }
  span {
    margin-top: 3px;
    font-size: 15px;
    font-weight: 600;
  }
`;
export const SocialButton = styled(StyledButton)`
  color: #120d26;
`;
