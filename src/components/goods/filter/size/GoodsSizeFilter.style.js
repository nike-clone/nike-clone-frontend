import styled from "styled-components";
export const FilterLable = styled.label``;
export const FilterUnit = styled.div`
  border-top: 1px solid #ccc;
  margin-bottom: 10px;
`;
export const SizeFilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2px;
  grid-row-gap: 5px;
`;
export const SizeContainer = styled.label`
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
  padding: 10px 11px;
  font-size: 12px;
  position: relative;
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
  }
`;