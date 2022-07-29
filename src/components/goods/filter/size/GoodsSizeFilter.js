import * as Styled from 'components/goods/filter/size/GoodsSizeFilter.style'
import { MEN_SIZE } from 'constants/size';
const GoodsSizeFilter= ({onChange,size}) => {

    return (
        <Styled.FilterUnit>
            <Styled.FilterLable>
              <h3>신발 사이즈</h3>
            </Styled.FilterLable>
            <Styled.SizeFilterWrapper>
              {MEN_SIZE.map((size) => (
                <>
                  <Styled.SizeContainer>
                    <input type="checkbox" name="size" value={size} onChange={onChange} />
                    <span className="sizeChecked"></span>
                    {size}
                  </Styled.SizeContainer>
                </>
              ))}
            </Styled.SizeFilterWrapper>
          </Styled.FilterUnit>
    )
}

export default GoodsSizeFilter;