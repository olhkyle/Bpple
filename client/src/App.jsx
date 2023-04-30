import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Global } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyle';
import AuthenticationGuard from './guard/AuthenticationGuard';
import {
  Community,
  CommunityFaq,
  CommunityPost,
  ProfileEdit,
  Question,
  RegisterProduct,
  SignIn,
  SignUp,
} from './pages';
import CommunityMe, { communityMeLoader } from './pages/CommunityMe';
import Profile, { profileLoader } from './pages/Profile';
import { communityPostLoader } from './pages/CommunityPost';
import Rank, { rankLoader } from './pages/Rank';
import { Layout } from './components';
import { SIGNIN_PATH } from './routes/routePaths';
import CommunityCategory, { communityCategoryLoader } from './pages/CommunityCategory';
import { CommunityMain } from './components/community';

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
            index: true,
            element: <CommunityMain />,
          },
          {
            path: ':category',
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
            element: <AuthenticationGuard redirectTo={SIGNIN_PATH} element={<CommunityMe />} />,
          },
          { path: 'question', element: <AuthenticationGuard redirectTo={SIGNIN_PATH} element={<Question />} /> },
          { path: 'rank', loader: rankLoader(queryClient), element: <Rank /> },
          { path: 'faq', element: <CommunityFaq /> },
        ],
      },
      {
        path: '/profile',
        loader: profileLoader(queryClient),
        element: <AuthenticationGuard redirectTo={SIGNIN_PATH} element={<Profile />} />,
      },
      {
        path: '/profile/edit',
        element: <AuthenticationGuard redirectTo={SIGNIN_PATH} element={<ProfileEdit />} />,
      },
      {
        path: '/profile/register',
        element: <AuthenticationGuard redirectTo={SIGNIN_PATH} element={<RegisterProduct />} />,
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
