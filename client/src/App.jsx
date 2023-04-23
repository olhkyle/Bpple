import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Global } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyle';
import Root from './components/Root';
import { SignIn, SignUp, Community, CommunityMe } from './pages';
import Profile, { profileLoader } from './pages/Profile';
import AuthenticationGuard from './guard/AuthenticationGuard';
import routesConstants from './constants/routes';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/community',
        element: <Community />,
        children: [{ path: 'me', element: <CommunityMe /> }],
      },
      {
        path: '/profile',
        loader: profileLoader,
        element: <AuthenticationGuard redirectTo={routesConstants.SIGNIN} element={<Profile />} />,
      },
    ],
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
