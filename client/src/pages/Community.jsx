import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { COMMUNITY_PATH } from '../routes/routePaths';
import { CommunityHeader } from '../components/community';
import CommunityMain from '../components/community/CommunityMain';
import Loader from '../components/common/Loader';

const Community = () => {
  const { pathname } = useLocation();

  return (
    <>
      <CommunityHeader />
      <React.Suspense fallback={<Loader />}>
        {pathname === COMMUNITY_PATH ? <CommunityMain /> : <Outlet />}
      </React.Suspense>
    </>
  );
};

export default Community;
