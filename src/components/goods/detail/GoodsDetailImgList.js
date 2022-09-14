import React from 'react';
import styled from 'styled-components';
const GoodsImgListWrapper = styled.div`
  width: calc(100% - 449px);
  @media screen and (min-width: 480px) and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (max-width: 479px) {
    width: 100%;
  }
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
const GoodsDetailImgList = ({ detailImgList, defaultImgs }) => {
  return (
    <GoodsImgListWrapper>
      <DetailImgList>
        {(detailImgList || defaultImgs)?.goodsItemImages.map((img) => (
          <li key={img.id}>
            <img src={img} alt="list" />
          </li>
        ))}
      </DetailImgList>
    </GoodsImgListWrapper>
  );
};

export default GoodsDetailImgList;
