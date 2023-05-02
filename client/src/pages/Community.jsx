import React from 'react';
import { Outlet } from 'react-router-dom';
import { CommunityHeader } from '../components';

const Community = () => (
  <>
    <CommunityHeader />
    <Outlet />
  </>
);

export default Community;
