import styled, { css } from 'styled-components';
export const FilterLable = styled.label``;
export const FilterUnit = styled.div`
  border-top: 1px solid #ccc;
  margin-bottom: 10px;
  ${(props) => {
    if (props.detail) {
      return css`
        border: none;
      `;
    }
  }}
`;
export const SizeFilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2px;
  grid-row-gap: 5px;
  ${(props) => {
    if (props.detail) {
      return css`
        grid-template-columns: repeat(5, 1fr);
      `;
    }
  }}
`;
export const SizeContainer = styled.label`
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
  padding: 10px 11px;
  font-size: 12px;
  position: relative;
  ${(props) => {
    if (props.stock < 1) {
      return css`
        background-color: gray;
      `;
    }
  }}
  ${(props) => {
    if (props.detail) {
      return css`
        padding: 14px 0px;
        width: 74px;
      `;
    }
  }}
  &:hover {
    cursor: pointer;
  }
  input {
    position: absolute;
    top: 0;
    width: 100%;
    display: none;
  }
  input[type='checkbox']:checked + .sizeChecked::before {
    content: '';
    position: absolute;
    left: 0px;
    top: -1px;
    border-radius: 5px;
    width: 51.5px;
    height: 32px;
    border: 1px solid black;
    ${(props) => {
      if (props.detail) {
        return css`
          width: 72px;
          height: 40px;
        `;
      }
    }}
  }
  input[type='radio']:checked + .sizeChecked::before {
    content: '';
    position: absolute;
    left: 0px;
    top: -1px;
    border-radius: 5px;
    width: 51.5px;
    height: 32px;
    border: 1px solid black;
    ${(props) => {
      if (props.detail) {
        return css`
          width: 72px;
          height: 40px;
        `;
      }
    }}
  }
`;
