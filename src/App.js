import { BaseLayout, GlobalStyle } from 'App.style';
import SlidingTextBanner from 'components/Header/Bottom/SlidingTextBanner';
import MainHeader from 'components/Header/MainHeader';
import SubHeader from 'components/Header/Sub/SubHeader';
import Home from 'pages/Home';
import Join from 'pages/join/Join';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { getCategories } from 'api/header';
import jwtDecode from 'jwt-decode';
import Cart from 'pages/cart/CartPage';
import PrivateRoute from 'components/common/PrivateRoute';
import MainGoods from 'pages/goods/MainGoods';
export const queryClient = new QueryClient();
const App = () => {
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
            <Route path="/cart" element={<Cart />} />
            <Route path="/goods/:category" element={<MainGoods />} />
          </Routes>
        </BaseLayout>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};

export default App;
