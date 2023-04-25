import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Global } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './components/Layout';
import { SignIn, SignUp, Community, CommunityMe, ProfileEdit, CommunityPost,Question } from './pages';
import Profile, { profileLoader } from './pages/Profile';
import { communityMeLoader } from './pages/CommunityMe';
import AuthenticationGuard from './guard/AuthenticationGuard';
import routesConstants from './constants/routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/community',
        element: <Community />,
        children: [
          {
            path: 'post/:id',
            element: <CommunityPost />,
          },
          {
            path: 'me',
            loader: communityMeLoader,
            element: <AuthenticationGuard redirectTo={routesConstants.SIGNIN} element={<CommunityMe />} />,
          },
          { path: 'question', element: <Question /> },
        ],
      },
      {
        path: '/profile',
        loader: profileLoader,
        element: <AuthenticationGuard redirectTo={routesConstants.SIGNIN} element={<Profile />} />,
      },
      {
        path: '/profile/edit',
        element: <AuthenticationGuard redirectTo={routesConstants.SIGNIN} element={<ProfileEdit />} />,
      },
    ],
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
