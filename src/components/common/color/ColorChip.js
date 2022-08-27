import useFilter from 'hooks/useFilter';
import useInput from 'hooks/useInput';
import { createRef, useEffect, useRef } from 'react';
import styled from 'styled-components';
const ColorChipContainer = styled.div`
  display: flex;
`;
const ColorChipWrapper = styled.label`
  margin-bottom: 15px;
  position: relative;
  width: 34px;
  height: 34px;
  &:hover {
    cursor: pointer;
  }
  input {
    position: absolute;
    top: 0;
    width: 100%;
  }
  input[type='radio'] {
    display: none;
  }
  input[type='radio']:checked + .colorChecked::before {
    content: '';
    width: 32px;
    height: 32px;
    position: absolute;
    border-radius: 50%;
    border: 1px solid black;
    left: 50%;
    top: -3px;
    transform: translateX(-50%);
  }
`;
const ColorChipUnit = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: ${(props) => props.color};
  margin-bottom: 5px;
  margin-right: 5px;
`;
const ColorChip = ({ colors, handleGoodsOption, selectedColor }) => {
  const colorInput = useRef([]);
  console.log(selectedColor, colors);
  useEffect(() => {
    //초기 옵션 세팅
    colorInput?.current.forEach((x, i) => {
      if (x.checked) colorInput?.current[i].click();
    });
  }, [colors]);
  return (
    <>
      <ColorChipContainer>
        {colors?.map((color, index) => (
          <ColorChipWrapper key={color.id}>
            <ColorChipUnit color={color.colorCode}>
              <input
                type="radio"
                name="color"
                value={color.id}
                onClick={(e) => handleGoodsOption(e, color.id)}
                ref={(el) => (colorInput.current[index] = el)}
                defaultChecked={color.id === selectedColor}
              />
              <span className="colorChecked"></span>
            </ColorChipUnit>
          </ColorChipWrapper>
        ))}
      </ColorChipContainer>
    </>
  );
};

export default ColorChip;
