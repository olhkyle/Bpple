import React from 'react';
import SubMenu from './SubMenu';
import routesConstants from '../../../constants/routes';

const IphoneSubMenu = () => {
  const leftMenuItems = [
    { size: 'lg', content: 'iPhone', path: routesConstants.IPHONE },
    { size: 'lg', content: 'iPhone 14 Pro', path: routesConstants.IPHONE_PRO_INTRO },
    { size: 'lg', content: 'iPhone 14', path: routesConstants.IPHONE_INTRO },
    { size: 'sm', content: 'iPhone 비교하기', path: routesConstants.IPHONE_COMPARE },
  ];
  const rightMenuItems = [
    { size: 'sm', content: 'iPhone 14 Pro 쇼핑하기', path: routesConstants.IPHONE_PRO_BUY },
    { size: 'sm', content: 'iPhone 14 쇼핑하기', path: routesConstants.IPHONE_BUY },
  ];

  return (
    <SubMenu
      leftLabel="iPhone 살펴보기"
      leftMenuItems={leftMenuItems}
      rightLabel="iPhone 쇼핑하기"
      rightMenuItems={rightMenuItems}
    />
  );
};

export default IphoneSubMenu;
