import React from 'react';
import styled from 'styled-components';
import closeIcon from 'assets/icons/closeX.svg';
const BannerContainer = styled.div`
  width: 100%;
  height: 64px;
  background-color: rgb(245, 245, 245);
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IconBox = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;
const SlidingTextBanner = () => {
  const exTxt = '슬라이딩 배너 텍스트 입니다.';
  return (
    <BannerContainer>
      <IconBox>
        <img src={closeIcon} alt="close" />
      </IconBox>
      {exTxt}
    </BannerContainer>
  );
};

export default SlidingTextBanner;
