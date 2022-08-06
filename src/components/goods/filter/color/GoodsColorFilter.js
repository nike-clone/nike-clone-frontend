import * as Styled from 'components/goods/filter/color/GoodsColorFilter.style';

const GoodsColorFilter = ({ onChange, color, colors, refetch }) => {
  return (
    <Styled.FilterUnit>
      <Styled.FilterLable>
        <h3>색상</h3>
      </Styled.FilterLable>
      <Styled.ColorFilterWrapper>
        {colors?.map((color) => (
          <Styled.ColorChipWrapper>
            <Styled.ColorChip color={color.colorCode} />
            <input
              type="checkbox"
              name="color"
              value={color.colorCode}
              onChange={onChange}
              onClick={refetch}
            />
            <span className="colorChecked"></span>
            <span>{color.name}</span>
          </Styled.ColorChipWrapper>
        ))}
      </Styled.ColorFilterWrapper>
    </Styled.FilterUnit>
  );
};

export default GoodsColorFilter;
