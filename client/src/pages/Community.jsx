import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { CommunityHeader } from '../components/community';
import CommunityMain from '../components/community/CommunityMain';
import routerConstants from '../constants/routes';

const Community = () => {
  const { pathname } = useLocation();

  return (
    <>
      <CommunityHeader />
      {pathname === routerConstants.COMMUNITY ? <CommunityMain /> : <Outlet />}
    </>
  );
};

export default Community;
