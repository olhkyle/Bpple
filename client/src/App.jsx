import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Global } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyle';
import AuthenticationGuard from './guard/AuthenticationGuard';
import { Layout, RootError } from './components';
import {
  communityCategoryLoader,
  communityMeLoader,
  communityPostLoader,
  communityProfileLoader,
  rankLoader,
  profileLoader,
} from './loader';
import {
  Home,
  Community,
  CommunityMain,
  CommunityPost,
  ProfileEdit,
  Question,
  RegisterProduct,
  SignIn,
  SignUp,
  Rank,
  CommunityMe,
  CommunityCategory,
  Profile,
  NotFound,
  CommunityProfile,
  CommunityFaq,
} from './pages';

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
    errorElement: <RootError />,
    children: [
      {
        index: true,
        element: <Home />,
      },
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
            index: true,
            element: <CommunityMain />,
          },
          {
            path: 'category/:category',
            loader: communityCategoryLoader(queryClient),
            element: <CommunityCategory />,
          },
          {
            path: 'post/:postId',
            loader: communityPostLoader(queryClient),
            element: <CommunityPost />,
          },
          {
            path: 'me',
            loader: communityMeLoader(queryClient),
            element: <CommunityMe />,
          },
          { path: 'faq', element: <CommunityFaq /> },
          { path: 'question', element: <AuthenticationGuard redirectTo={SIGNIN_PATH} element={<Question />} /> },
          { path: 'rank', loader: rankLoader(queryClient), element: <Rank /> },
          {
            path: 'profile/:nickName',
            loader: communityProfileLoader(queryClient),
            element: <CommunityProfile />,
          },
        ],
      },
      {
        path: '/profile',
        loader: profileLoader(queryClient),
        element: <Profile />,
      },
      {
        path: '/profile/edit',
        element: <AuthenticationGuard redirectTo={SIGNIN_PATH} element={<ProfileEdit />} />,
      },
      {
        path: '/profile/register',
        element: <AuthenticationGuard redirectTo={SIGNIN_PATH} element={<RegisterProduct />} />,
      },
      {
        path: '*',
        element: <NotFound />,
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
