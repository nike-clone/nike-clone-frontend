import * as Styled from 'components/goods/filter/size/GoodsSizeFilter.style';
import { MEN_SIZE } from 'constants/size';
const GoodsSizeFilter = ({ onChange, size, detail, setSelectedOption, selectedOption }) => {
const handleGoodsOption = (e) => {
  setSelectedOption({...selectedOption,selectedSize:e.target.value})
}
  return (
    <Styled.FilterUnit detail={detail}>
      {!detail && (
        <Styled.FilterLable>
          <h3>신발 사이즈</h3>
        </Styled.FilterLable>
      )}

      <Styled.SizeFilterWrapper detail={detail}>
        {MEN_SIZE.map((size) => (
          <>
            <Styled.SizeContainer detail={detail}>
              {detail ? (
                <input type="radio" name="size" value={size} onChange={onChange} onClick={handleGoodsOption}/>
              ) : (
                <input type="checkbox" name="size" value={size} onChange={onChange} />
              )}

              <span className="sizeChecked"></span>
              {size}
            </Styled.SizeContainer>
          </>
        ))}
      </Styled.SizeFilterWrapper>
    </Styled.FilterUnit>
  );
};

export default GoodsSizeFilter;
