import styled from 'styled-components';
const ColorChipContainer = styled.div`
  display: flex;
`;
const ColorChipWrapper = styled.label`
  margin-bottom: 15px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  input[type='radio'] {
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
    top: -2px;
    transform: translateX(-50%);
  }
`;
const ColorChipUnit = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: ${(props) => props.color};
  margin-bottom: 5px;
`;
const ColorChip = ({ colors }) => {
  return (
    <>
      <ColorChipContainer>
        {colors.map((detail) => (
          <ColorChipWrapper>
            <ColorChipUnit color={detail.color.colorCode}>
              <input type="radio" name="color" />
              <span className="colorChecked"></span>
            </ColorChipUnit>
          </ColorChipWrapper>
        ))}
      </ColorChipContainer>
    </>
  );
};

export default ColorChip;
