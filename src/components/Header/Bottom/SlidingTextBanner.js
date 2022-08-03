import React from 'react';
import styled from 'styled-components';
import closeIcon from 'assets/icons/closeX.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useModal from 'hooks/useModal';
import BannerSlider from './content/BannerSlider';
import PALETTE from 'constants/palette';
const BannerContainer = styled.div`
  width: 100%;
  height: 64px;
  background-color: ${PALETTE.GRAY[1]};
  text-align: center;
  padding: 24px 0;
  font-size: 16px;
  position: relative;
`;
const IconBox = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
`;
const Carousel = styled(Slider)`
  .slick-prev {
    left: 50px;
    z-index: 10;
  }
  .slick-next {
    right: 50px;
  }
`;
const SlidingTextBanner = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
  };

  const [isModalOpen, modalOpenHandler] = useModal(true);
  const exTxt = ['슬라이딩 배너 텍스트 입니다.', 'adasd', 'dfdfd', 's'];
  return (
    <>
      {isModalOpen && (
        <BannerContainer>
          <IconBox onClick={modalOpenHandler}>
            <img src={closeIcon} alt="close" />
          </IconBox>
          <Carousel {...settings}>
            {exTxt.map((text) => (
              <BannerSlider text={text} />
            ))}
          </Carousel>
        </BannerContainer>
      )}
    </>
  );
};

export default SlidingTextBanner;
