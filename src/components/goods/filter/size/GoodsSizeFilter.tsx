import * as Styled from 'components/goods/filter/size/GoodsSizeFilter.style';
import { MEN_SIZE } from 'constants/size';

interface Props {
  onChange: () => void;
  detail?: string;
  refetch: () => void;
}
const GoodsSizeFilter = ({ detail, refetch, onChange }: Props) => {
  return (
    <Styled.FilterUnit detail={detail}>
      <Styled.FilterLable>
        <h3>신발 사이즈</h3>
      </Styled.FilterLable>

      <Styled.SizeFilterWrapper detail={detail}>
        {MEN_SIZE.map((size) => (
          <>
            <Styled.SizeContainer detail={detail}>
              <input
                type="checkbox"
                name="size"
                value={size}
                onChange={onChange}
                onClick={refetch}
              />
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
