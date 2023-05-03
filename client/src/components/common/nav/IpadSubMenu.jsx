import React from 'react';
import {
  IPAD_PATH,
  IPAD_COMPARE_PATH,
  IPAD_PRO_INTRO_PATH,
  IPAD_AIR_INTRO_PATH,
  IPAD_BUY_PATH,
  IPAD_PRO_BUY_PATH,
  IPAD_AIR_BUY_PATH,
} from '../../../routes/routePaths';
import SubMenu from './SubMenu';

const IpadSubMenu = () => {
  const leftMenuItems = [
    { size: 'lg', content: 'iPad', path: IPAD_PATH },
    { size: 'lg', content: 'iPad Pro', path: IPAD_PRO_INTRO_PATH },
    { size: 'lg', content: 'iPad Air', path: IPAD_AIR_INTRO_PATH },
    { size: 'sm', content: 'iPad 비교하기', path: IPAD_COMPARE_PATH },
  ];

  const rightMenuItems = [
    { size: 'sm', content: 'iPad 쇼핑하기', path: IPAD_BUY_PATH },
    { size: 'sm', content: 'iPad Pro 쇼핑하기', path: IPAD_PRO_BUY_PATH },
    { size: 'sm', content: 'iPad Air 쇼핑하기', path: IPAD_AIR_BUY_PATH },
  ];

  return (
    <SubMenu
      leftLabel="iPad 살펴보기"
      leftMenuItems={leftMenuItems}
      rightLabel="iPad 쇼핑하기"
      rightMenuItems={rightMenuItems}
    />
  );
};

export default IpadSubMenu;
