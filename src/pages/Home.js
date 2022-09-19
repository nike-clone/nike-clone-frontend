import GoodsBanner from 'components/Banner/goods/GoodsBanner';
import MainBanner from 'components/Banner/main/MainBanner';
import useCart from 'hooks/query/useCart';
import React, { useEffect } from 'react';

const htmlText = [
  '<h2 style="font-size:30px">RUNNERS HELPING RUNNERS</h2><br/><p>러닝이 더욱 즐거워 지는 이곳,<br/>마라톤 선수 안슬기의 팁과 잔나비 최정훈부터...</p>',
  '<h2 style="font-size:30px">FOR MEN</h2><br/><p>러닝이 더욱 즐거워 지는 이곳,<br/>무한한 가능성을 펼쳐보세요</p>',
];
const bannerImg = [
  'https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/65250/220913_hp_p6_bg.jpg',
  'https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/65250/220706_wlp_p1_bg.jpg',
];
const Home = () => {
  return (
    <>
      <MainBanner bnrText={htmlText[0]} bannerImg={bannerImg[0]} />
      <MainBanner bnrText={htmlText[1]} bannerImg={bannerImg[1]} />
      <GoodsBanner />
    </>
  );
};

export default Home;
