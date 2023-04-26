import React from 'react';
import {
  IPHONE_BUY_PATH,
  IPHONE_COMPARE_PATH,
  IPHONE_INTRO_PATH,
  IPHONE_PATH,
  IPHONE_PRO_BUY_PATH,
  IPHONE_PRO_INTRO_PATH,
} from '../../../routes/routePaths';
import SubMenu from './SubMenu';

const IphoneSubMenu = () => {
  const leftMenuItems = [
    { size: 'lg', content: 'iPhone', path: IPHONE_PATH },
    { size: 'lg', content: 'iPhone 14 Pro', path: IPHONE_PRO_INTRO_PATH },
    { size: 'lg', content: 'iPhone 14', path: IPHONE_INTRO_PATH },
    { size: 'sm', content: 'iPhone 비교하기', path: IPHONE_COMPARE_PATH },
  ];
  const rightMenuItems = [
    { size: 'sm', content: 'iPhone 14 Pro 쇼핑하기', path: IPHONE_PRO_BUY_PATH },
    { size: 'sm', content: 'iPhone 14 쇼핑하기', path: IPHONE_BUY_PATH },
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
