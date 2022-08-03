import React from 'react';
import styled from 'styled-components';
import shoe1 from 'assets/images/shoe1.jpg';
const GoodsImgListWrapper = styled.div`
  width: calc(100% - 449px);
`;
const DetailImgList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  width: 100%;
  li {
  }
  li > img {
    width: 100%;
  }
`;
const GoodsDetailImgList = () => {
  return (
    <GoodsImgListWrapper>
      <DetailImgList>
        <li>
          <img src={shoe1} alt="list" />
        </li>
        <li>
          <img src={shoe1} alt="list" />
        </li>
        <li>
          <img src={shoe1} alt="list" />
        </li>
        <li>
          <img src={shoe1} alt="list" />
        </li>
      </DetailImgList>
    </GoodsImgListWrapper>
  );
};

export default GoodsDetailImgList;
