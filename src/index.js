import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './features/store';
import { QueryClientProvider, QueryClient, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
export const queryClient = new QueryClient();
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
