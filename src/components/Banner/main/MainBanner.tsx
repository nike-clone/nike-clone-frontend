import React from 'react';
import styled from 'styled-components';
import Parser from 'html-react-parser';
import StyledLink from 'components/common/Link/StyledLink';
import * as Styled from './MainBanner.styles';
interface Props {
  bnrText: string;
  bannerImg: string;
}
const MainBanner = ({ bnrText, bannerImg }: Props): JSX.Element => {
  return (
    <>
      <Styled.MainBnrContainer>
        <img src={bannerImg} alt="bnr" />
      </Styled.MainBnrContainer>
      <Styled.MainBnrTextWrapper>{Parser(bnrText)}</Styled.MainBnrTextWrapper>
      <Styled.LinkContainer>
        <StyledLink target={'/category?gender=Men'} size="md">
          자세히 보기
        </StyledLink>
        <StyledLink target={'/category?gender=Men'} size="md">
          구매하기
        </StyledLink>
      </Styled.LinkContainer>
    </>
  );
};
export default MainBanner;
