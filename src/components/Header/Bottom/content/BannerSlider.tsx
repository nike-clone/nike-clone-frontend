import React from 'react';
import styled from 'styled-components';
import PALETTE from 'constants/palette';
const Container = styled.div``;
interface Props {
  text: string;
}
const BannerSlider = ({ text }: Props): JSX.Element => {
  return <Container>{text}</Container>;
};

export default BannerSlider;
