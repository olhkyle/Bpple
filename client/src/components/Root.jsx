import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import routesConstants from '../constants/routes';
import { Footer } from './common';

const Root = () => {
  const { pathname } = useLocation();

  return (
    <>
      <main>{pathname === routesConstants.MAIN ? <div>Main</div> : <Outlet />}</main>
      <Footer />
    </>
  );
};

export default Root;
