import GoodsBanner from 'components/Banner/goods/GoodsBanner';
import MainBanner from 'components/Banner/main/MainBanner';
import useCart from 'hooks/query/useCart';
import React, { useEffect } from 'react';

const HtmlText =
  '<h2 style="font-size:30px">RUNNERS HELPING RUNNERS</h2><br/><p>러닝이 더욱 즐거워 지는 이곳,<br/>마라톤 선수 안슬기의 팁과 잔나비 최정훈부터...</p>';
const Home = () => {
  return (
    <>
      <MainBanner bnrText={HtmlText} />
      <MainBanner bnrText={HtmlText} />
      <GoodsBanner />
    </>
  );
};

export default Home;
