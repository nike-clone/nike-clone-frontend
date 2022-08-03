import styled from 'styled-components';
export const ColorFilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
export const ColorChipWrapper = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  position: relative;
  span {
    font-size: 12px;
  }
  input {
    position: absolute;
    top: 0;
    width: 100%;
  }
  &:hover {
    cursor: pointer;
  }
  input[type='checkbox'] {
    display: none;
  }
  input[type='checkbox']:checked + .colorChecked::before {
    content: '';
    width: 32px;
    height: 32px;
    position: absolute;
    border-radius: 50%;
    border: 1px solid black;
    left: 50%;
    top: -2px;
    transform: translateX(-50%);
  }
`;
export const ColorChip = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: ${(props) => props.color};
  font-size: 10px;
  margin-bottom: 5px;
`;
export const FilterLable = styled.label``;
export const FilterUnit = styled.div`
  border-top: 1px solid #ccc;
  margin-bottom: 10px;
`;
