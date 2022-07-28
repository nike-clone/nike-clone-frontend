import GoodsHeader from 'components/goods/header/GoodsHeader';
import React from 'react';
import styled from 'styled-components';
import shoe1 from 'assets/images/shoe1.jpg';
import { MEN_SIZE } from 'constants/size';
import useInput from 'hooks/useInput';
const Page = styled.section``;
const Content = styled.div`
  display: flex;
  position: relative;
`;
const Filter = styled.div`
  height: 100%;
  width: 230px;
  position: absolute;
  left: 0;
  padding: 0px 5px;
  h3 {
    padding: 15px 10px;
  }
`;
const GoodsContainer = styled.div`
  margin-left: 318px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 480px) and (max-width: 767px) {
    margin: 0;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin: 0px;
  }
`;
const GoodsItemWrapper = styled.div`
  width: 33%;
  margin-bottom: 10px;
  margin-right: 10px;

  img {
    width: 100%;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    width: calc(50% - 5px);
    &:nth-child(2n) {
      margin-right: 0px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: calc(50% - 5px);
    &:nth-child(2n) {
      margin-right: 0px;
    }
  }
  @media screen and (min-width: 1024px) {
    width: calc(33% - 5px);
    &:nth-child(3n) {
      margin-right: 0px;
    }
  }
`;
const ColorFilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const ColorChipWrapper = styled.label`
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
    width: 30px;
    height: 30px;
    position: absolute;
    border-radius: 50%;
    border: 1px solid black;
    left: 50%;
    top: -1px;
    transform: translateX(-50%);
  }
`;
const ColorChip = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: ${(props) => props.color};
  font-size: 10px;
  margin-bottom: 5px;
`;
const FilterLable = styled.label``;
const FilterUnit = styled.div`
  border-top: 1px solid #ccc;
  margin-bottom: 10px;
`;
const SizeFilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2px;
  grid-row-gap: 5px;
`;
const SizeContainer = styled.label`
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
  padding: 10px 11px;
  font-size: 12px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  input {
    position: absolute;
    top: 0;
    width: 100%;
    display: none;
  }
  input[type='checkbox']:checked + .sizeChecked::before {
    content: '';
    position: absolute;
    left: 0px;
    top: -1px;
    border-radius: 5px;
    width: 51.5px;
    height: 32px;
    border: 1px solid black;
  }
`;
const MainGoods = () => {
  const colors = [
    { id: 1, color: 'black', name: '검정색' },
    { id: 2, color: 'green', name: '녹색' },
    { id: 3, color: 'orange', name: '주황색' },
    { id: 4, color: 'pink', name: '분홍색' },
  ];
  const [{ size, color }, onChange] = useInput({
    size: '',
    color: '',
  });
  console.log(size, color);
  return (
    <Page>
      <GoodsHeader />
      <Content>
        <Filter>
          <FilterUnit>
            <FilterLable>
              <h3>색상</h3>
            </FilterLable>
            <ColorFilterWrapper>
              {colors.map((color) => (
                <ColorChipWrapper>
                  <ColorChip color={color.color} />
                  <input type="checkbox" name="color" value={color.color} onChange={onChange} />
                  <span className="colorChecked"></span>
                  <span>{color.name}</span>
                </ColorChipWrapper>
              ))}
            </ColorFilterWrapper>
          </FilterUnit>
          <FilterUnit>
            <FilterLable>
              <h3>신발 사이즈</h3>
            </FilterLable>
            <SizeFilterWrapper>
              {MEN_SIZE.map((size) => (
                <>
                  <SizeContainer>
                    <input type="checkbox" name="size" value={size} onChange={onChange} />
                    <span className="sizeChecked"></span>
                    {size}
                  </SizeContainer>
                </>
              ))}
            </SizeFilterWrapper>
          </FilterUnit>
        </Filter>
        <GoodsContainer>
          <GoodsItemWrapper>
            <img src={shoe1} alt="shoe" />
          </GoodsItemWrapper>
          <GoodsItemWrapper>
            <img src={shoe1} alt="shoe" />
          </GoodsItemWrapper>
          <GoodsItemWrapper>
            <img src={shoe1} alt="shoe" />
          </GoodsItemWrapper>
          <GoodsItemWrapper>
            <img src={shoe1} alt="shoe" />
          </GoodsItemWrapper>
        </GoodsContainer>
      </Content>
    </Page>
  );
};

export default MainGoods;
