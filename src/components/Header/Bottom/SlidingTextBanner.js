import React from 'react';
import styled from 'styled-components';
import closeIcon from 'assets/icons/closeX.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useModal from 'hooks/useModal';
const BannerContainer = styled.div`
  width: 100%;
  height: 64px;
  background-color: rgb(245, 245, 245);
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
const IconBox = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
`;

const SlidingTextBanner = () => {
  const [isModalOpen, modalOpenHandler] = useModal(true);
  const exTxt = '슬라이딩 배너 텍스트 입니다.';
  return (
    <>
      {isModalOpen && (
        <BannerContainer>
          <IconBox onClick={modalOpenHandler}>
            <img src={closeIcon} alt="close" />
          </IconBox>
          {exTxt}
        </BannerContainer>
      )}
    </>
  );
};

export default SlidingTextBanner;
