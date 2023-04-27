import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { COMMUNITY_PATH } from '../routes/routePaths';
import { CommunityHeader } from '../components/community';
import CommunityMain from '../components/community/CommunityMain';

const Community = () => {
  const { pathname } = useLocation();

  return (
    <>
      <CommunityHeader />
      {pathname === COMMUNITY_PATH ? <CommunityMain /> : <Outlet />}
    </>
  );
};

export default Community;
