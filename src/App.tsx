import { GlobalStyle } from 'App.style';
import SlidingTextBanner from 'components/Header/Bottom/SlidingTextBanner';
import MainHeader from 'components/Header/MainHeader';
import SubHeader from 'components/Header/Sub/SubHeader';
import Home from 'pages/Home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <GlobalStyle />
      <SubHeader />
      <MainHeader />
      <SlidingTextBanner />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
