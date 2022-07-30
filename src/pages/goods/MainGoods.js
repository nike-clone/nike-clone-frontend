import GoodsHeader from 'components/goods/header/GoodsHeader';
import React from 'react';
import styled from 'styled-components';
import shoe1 from 'assets/images/shoe1.jpg';
import { MEN_SIZE } from 'constants/size';
import useInput from 'hooks/useInput';
import GoodsFilter from 'components/goods/filter/color/GoodsColorFilter';
import GoodsColorFilter from 'components/goods/filter/color/GoodsColorFilter';
import GoodsSizeFilter from 'components/goods/filter/size/GoodsSizeFilter';

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

const MainGoods = () => {
  const [{ size, color }, onChange] = useInput({
    size: '',
    color: '',
  });

  return (
    <Page>
      <GoodsHeader />
      <Content>
        <Filter>
         <GoodsColorFilter onChange={onChange} color={color}/>
          <GoodsSizeFilter onChange={onChange} size={size}/>
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
