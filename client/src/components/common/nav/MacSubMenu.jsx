import React from 'react';
import routesConstants from '../../../constants/routes';
import SubMenu from './SubMenu';

const MacSubMenu = () => {
  const leftMenuItems = [
    { size: 'lg', content: 'Mac', path: routesConstants.MAC },
    { size: 'lg', content: 'MacBook Air', path: routesConstants.MACBOOK_AIR_INTRO },
    { size: 'lg', content: 'MacBook Pro', path: routesConstants.MACBOOK_PRO_INTRO },
    { size: 'sm', content: 'Mac 비교하기', path: routesConstants.MAC_COMPARE },
  ];

  const rightMenuItems = [
    { size: 'sm', content: 'MacBook Air 쇼핑하기', path: '/shop/macbook-air' },
    { size: 'sm', content: 'MacBook Pro 13 쇼핑하기', path: '/shop/macbook-pro-13' },
    { size: 'sm', content: 'MacBook Pro 14 쇼핑하기', path: '/shop/macbook-pro-14' },
    { size: 'sm', content: 'MacBook Pro 16 쇼핑하기', path: '/shop/macbook-pro-16' },
  ];

  return (
    <SubMenu
      leftLabel="Mac 살펴보기"
      leftMenuItems={leftMenuItems}
      rightLabel="Mac 쇼핑하기"
      rightMenuItems={rightMenuItems}
    />
  );
};

export default MacSubMenu;
