import { BaseLayout, GlobalStyle } from 'App.style';
import SlidingTextBanner from 'components/Header/Bottom/SlidingTextBanner';
import MainHeader from 'components/Header/MainHeader';
import SubHeader from 'components/Header/Sub/SubHeader';
import Home from 'pages/Home';
import Join from 'pages/join/Join';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Cart from 'pages/cart/CartPage';
import PrivateRoute from 'components/common/PrivateRoute';
import MainGoods from 'pages/goods/MainGoods';
import DetailGoods from 'pages/goods/detail/DetailGoods';
import { v4 as uuid } from 'uuid';
export const queryClient = new QueryClient();
const App = () => {
  useEffect(() => {
    if (!localStorage.getItem('NC_GUEST_ID') && !sessionStorage.getItem('user'))
      localStorage.setItem('NC_GUEST_ID', `user-${uuid()}`);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <GlobalStyle />
        <SubHeader />
        <MainHeader />
        <SlidingTextBanner />
        <BaseLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/join" element={<Join />} />
            <Route path="/cart" element={<Cart type={'cart'} />} />
            <Route path="/checkout" element={<Cart type={'buy'} />} />
            <Route path="/category" element={<MainGoods />} />
            <Route path="/goods/:goodsId" element={<DetailGoods />} />
          </Routes>
        </BaseLayout>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};

export default App;
