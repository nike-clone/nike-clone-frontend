import * as Styled from 'components/goods/filter/color/GoodsColorFilter.style'

const GoodsColorFilter = ({onChange,color}) => {
    const colors = [
        { id: 1, color: 'black', name: '검정색' },
        { id: 2, color: 'green', name: '녹색' },
        { id: 3, color: 'orange', name: '주황색' },
        { id: 4, color: 'pink', name: '분홍색' },
      ];
    return (
        <Styled.FilterUnit>
            <Styled.FilterLable>
              <h3>색상</h3>
            </Styled.FilterLable>
            <Styled.ColorFilterWrapper>
              {colors.map((color) => (
                <Styled.ColorChipWrapper>
                  <Styled.ColorChip color={color.color} />
                  <input type="checkbox" name="color" value={color.color} onChange={onChange} />
                  <span className="colorChecked"></span>
                  <span>{color.name}</span>
                </Styled.ColorChipWrapper>
              ))}
            </Styled.ColorFilterWrapper>
          </Styled.FilterUnit>
    )
}

export default GoodsColorFilter;