import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import routesConstants from '../constants/routes';
import { Footer } from './common';
import { Nav } from './common/nav';

const Root = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Nav />
      <main>{pathname === routesConstants.MAIN ? <div>Main</div> : <Outlet />}</main>
      <Footer />
    </>
  );
};

export default Root;
