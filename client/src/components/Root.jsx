import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import routesConstants from '../constants/routes';

const Root = () => {
  const { pathname } = useLocation();

  return <div>{pathname === routesConstants.MAIN ? <div>Main</div> : <Outlet />}</div>;
};

export default Root;
