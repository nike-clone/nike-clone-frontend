import React from 'react';
import * as Styled from 'components/goods/filter/color/GoodsColorFilter.style';
import { Color } from 'types/goods';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  colors: Color[];
  refetch: () => void;
}
const GoodsColorFilter = ({ onChange, colors, refetch }: Props) => {
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

export default React.memo(GoodsColorFilter);
