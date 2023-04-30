import React from 'react';
import { Outlet } from 'react-router-dom';
import { CommunityHeader } from '../components/community';

const Community = () => (
  <>
    <CommunityHeader />
    <Outlet />
  </>
);

export default Community;
