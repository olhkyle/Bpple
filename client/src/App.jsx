import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Global } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyle';
import Root from './components/Root';
import { SignIn, SignUp } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
]);

const queryClient = new QueryClient();

const App = () => (
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <Global styles={GlobalStyle} />
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </RecoilRoot>
);

export default App;
