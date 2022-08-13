import * as Styled from 'components/goods/filter/size/GoodsSizeFilter.style';
import { MEN_SIZE } from 'constants/size';
import { setGoodsOption } from 'features/goods/optionSlice';
const GoodsSizeFilter = ({ detail, handleGoodsOption }) => {
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
                <input type="radio" name="size" value={size} onClick={handleGoodsOption} />
              ) : (
                <input type="checkbox" name="size" value={size} />
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
