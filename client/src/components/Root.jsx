import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import routesConstants from '../constants/routes';
import Footer from './common/Footer';

const Root = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div>{pathname === routesConstants.MAIN ? <div>Main</div> : <Outlet />}</div>
      <Footer />
    </>
  );
};

export default Root;
