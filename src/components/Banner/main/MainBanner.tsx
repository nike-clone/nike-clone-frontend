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
export interface Props {
  bnrText: string;
}

const MainBanner = ({ bnrText }: Props) => {
  return (
    <>
      <MainBnrContainer>
        <img
          src="https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/65250/220706_wlp_p1_bg.jpg"
          alt="bnr"
        />
      </MainBnrContainer>
      <MainBnrTextWrapper>{Parser(bnrText)}</MainBnrTextWrapper>
      <LinkContainer>
        <StyledLink target={'/goods'} size="md">
          자세히 보기
        </StyledLink>
        <StyledLink target={'/buy'} size="md">
          구매하기
        </StyledLink>
      </LinkContainer>
    </>
  );
};
export default MainBanner;
