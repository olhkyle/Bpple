import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { CommunityHeader } from '../components/community';
import CommunityMain from '../components/community/CommunityMain';
import routerConstants from '../constants/routes';
import Loader from '../components/common/Loader';

const Community = () => {
  const { pathname } = useLocation();

  return (
    <React.Suspense fallback={<Loader />}>
      <CommunityHeader />
      {pathname === routerConstants.COMMUNITY ? <CommunityMain /> : <Outlet />}
    </React.Suspense>
  );
};

export default Community;
