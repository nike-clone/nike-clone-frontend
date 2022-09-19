import React from 'react';
import styled from 'styled-components';
import Parser from 'html-react-parser';
import StyledLink from 'components/common/Link/StyledLink';
const MainBnrContainer = styled.div`
  width: 100%;

  aspect-ratio: 17/7;
  img {
    width: 100%;
    height: 100%;
  }
`;
const MainBnrTextWrapper = styled.div`
  padding: 30px 5px 10px 5px;
  text-align: center;
`;
const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const MainBanner = ({ bnrText, bannerImg }) => {
  return (
    <>
      <MainBnrContainer>
        <img src={bannerImg} alt="bnr" />
      </MainBnrContainer>
      <MainBnrTextWrapper>{Parser(bnrText)}</MainBnrTextWrapper>
      <LinkContainer>
        <StyledLink target={'/category?gender=Men'} size="md">
          자세히 보기
        </StyledLink>
        <StyledLink target={'/category?gender=Men'} size="md">
          구매하기
        </StyledLink>
      </LinkContainer>
    </>
  );
};
export default MainBanner;
