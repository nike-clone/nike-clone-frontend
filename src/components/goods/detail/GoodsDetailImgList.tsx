import React from 'react';
import styled from 'styled-components';
import { GoodsItemImages } from 'types/goods';
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
interface Props {
  detailImgList: GoodsItemImages;
  defaultImgs?: string;
}
const GoodsDetailImgList = ({ detailImgList, defaultImgs }: Props): JSX.Element => {
  return (
    <GoodsImgListWrapper>
      <DetailImgList>
        {(detailImgList || defaultImgs)?.goodsItemImages.map((img, index) => (
          <li key={index}>
            <img src={img} alt="list" />
          </li>
        ))}
      </DetailImgList>
    </GoodsImgListWrapper>
  );
};

export default GoodsDetailImgList;
