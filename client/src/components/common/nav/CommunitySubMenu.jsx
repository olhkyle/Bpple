import React from 'react';
import routesConstants from '../../../constants/routes';
import SubMenu from './SubMenu';

const CommunitySubMenu = () => {
  const leftMenuItems = [
    { size: 'lg', content: '커뮤니티', path: routesConstants.COMMUNITY },
    { size: 'lg', content: 'Mac', path: routesConstants.COMMUNITY_CATEGORY_MAC },
    { size: 'lg', content: 'iPhone', path: routesConstants.COMMUNITY_CATEGORY_IPHONE },
    { size: 'lg', content: 'iPad', path: '#' },
  ];

  const rightMenuItems = [
    { size: 'sm', content: '질문하기', path: routesConstants.COMMUNITY_QUESTION },
    { size: 'sm', content: '내가 작성한 글 목록', path: routesConstants.COMMUNITY_ME },
    { size: 'sm', content: '랭킹', path: routesConstants.COMMUNITY_RANK },
  ];

  return <SubMenu leftMenuItems={leftMenuItems} rightMenuItems={rightMenuItems} />;
};

export default CommunitySubMenu;
