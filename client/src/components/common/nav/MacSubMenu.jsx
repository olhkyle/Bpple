import React from 'react';
import { MACBOOK_AIR_INTRO_PATH, MACBOOK_PRO_INTRO_PATH, MAC_COMPARE_PATH, MAC_PATH } from '../../../routes/routePaths';
import SubMenu from './SubMenu';

const MacSubMenu = () => {
  const leftMenuItems = [
    { size: 'lg', content: 'Mac', path: MAC_PATH },
    { size: 'lg', content: 'MacBook Air', path: MACBOOK_AIR_INTRO_PATH },
    { size: 'lg', content: 'MacBook Pro', path: MACBOOK_PRO_INTRO_PATH },
    { size: 'sm', content: 'Mac 비교하기', path: MAC_COMPARE_PATH },
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
