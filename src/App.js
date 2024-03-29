import { useEffect, Suspense, lazy } from 'react';
import { BaseLayout, GlobalStyle } from 'App.style';
import { Route, Routes } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import useCart from 'hooks/query/useCart';
import Header from 'components/Header/Header';
import Footer from 'components/common/Footer/Footer';

const Error = lazy(() => import('pages/fail/Error'));
const Join = lazy(() => import('pages/join/Join'));
const Home = lazy(() => import('pages/Home'));
const Cart = lazy(() => import('pages/cart/CartPage'));
const MainGoods = lazy(() => import('pages/goods/MainGoods'));
const DetailGoods = lazy(() => import('pages/goods/detail/DetailGoods'));
const OrderSuccess = lazy(() => import('pages/success/OrderSuccess'));
const App = () => {
  useEffect(() => {
    if (!localStorage.getItem('NC_GUEST_ID') && !sessionStorage.getItem('user'))
      localStorage.setItem('NC_GUEST_ID', `user-${uuid()}`);
  }, []);
  const { refetch } = useCart();
  return (
    <div className="App">
      <GlobalStyle />
      <Header refetch={refetch} />
      <BaseLayout>
        <Suspense fallback>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/join" element={<Join />} />
            <Route path="/cart" element={<Cart type={'cart'} />} />
            <Route path="/checkout" element={<Cart type={'buy'} />} />
            <Route path="/category" element={<MainGoods />} />
            <Route path="/goods/:goodsId" element={<DetailGoods />} />
            <Route path="/success/order" element={<OrderSuccess />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </BaseLayout>
      <Footer />
    </div>
  );
};

export default App;
