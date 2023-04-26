import { createBrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Global } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyle';
import AuthenticationGuard from './guard/AuthenticationGuard';
import { Community, CommunityPost, ProfileEdit, Question, SignIn, SignUp } from './pages';
import CommunityMe, { communityMeLoader } from './pages/CommunityMe';
import Profile, { profileLoader } from './pages/Profile';
import { Layout } from './components';
import { SIGNIN_PATH } from './routes/routePaths';

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
            element: <AuthenticationGuard redirectTo={SIGNIN_PATH} element={<CommunityMe />} />,
          },
          { path: 'question', element: <Question /> },
        ],
      },
      {
        path: '/profile',
        loader: profileLoader,
        element: <AuthenticationGuard redirectTo={SIGNIN_PATH} element={<Profile />} />,
      },
      {
        path: '/profile/edit',
        element: <AuthenticationGuard redirectTo={SIGNIN_PATH} element={<ProfileEdit />} />,
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
