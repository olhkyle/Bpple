import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import routesConstants from '../constants/routes';
import { Footer, ScrollToTopButton, Toasts } from './common';
import { Nav } from './common/nav';

const Layout = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <>
      <Nav />
      <main>{pathname === routesConstants.MAIN ? <div>Main</div> : <Outlet />}</main>
      <Footer />
      <Toasts />
      <ScrollToTopButton />
    </>
  );
};

export default Layout;
