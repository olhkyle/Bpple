import { Community, CommunityPost, ProfileEdit, Question, SignIn, SignUp } from '../pages';
import CommunityMe, { communityMeLoader } from '../pages/CommunityMe';
import AuthenticationGuard from '../guard/AuthenticationGuard';
import { SIGNIN_PATH } from './routePaths';
import Profile, { profileLoader } from '../pages/Profile';
import { Layout } from '../components';

const routes = [
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
];

export default routes;
