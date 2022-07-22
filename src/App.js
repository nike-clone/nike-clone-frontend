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
          </Routes>
        </BaseLayout>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};

export default App;
