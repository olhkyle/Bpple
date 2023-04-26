import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { Footer, ScrollToTopButton, Toasts } from './common';
import { Nav } from './common/nav';
import { MAIN_PATH } from '../routes/routePaths';

const Layout = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <>
      <Nav />
      <main>{pathname === MAIN_PATH ? <div>Main</div> : <Outlet />}</main>
      <Footer />
      <Toasts />
      <ScrollToTopButton />
    </>
  );
};

export default Layout;
