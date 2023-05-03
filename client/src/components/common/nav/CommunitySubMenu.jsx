import React from 'react';
import {
  COMMUNITY_CATEGORY_IPAD_PATH,
  COMMUNITY_CATEGORY_IPHONE_PATH,
  COMMUNITY_CATEGORY_MAC_PATH,
  COMMUNITY_FAQ_PATH,
  COMMUNITY_ME_PATH,
  COMMUNITY_PATH,
  COMMUNITY_QUESTION_PATH,
  COMMUNITY_RANK_PATH,
} from '../../../routes/routePaths';
import SubMenu from './SubMenu';

const CommunitySubMenu = () => {
  const leftMenuItems = [
    { size: 'lg', content: '커뮤니티', path: COMMUNITY_PATH },
    { size: 'lg', content: 'Mac', path: COMMUNITY_CATEGORY_MAC_PATH },
    { size: 'lg', content: 'iPhone', path: COMMUNITY_CATEGORY_IPHONE_PATH },
    { size: 'lg', content: 'iPad', path: COMMUNITY_CATEGORY_IPAD_PATH },
  ];

  const rightMenuItems = [
    { size: 'sm', content: '질문하기', path: COMMUNITY_QUESTION_PATH },
    { size: 'sm', content: '자주 묻는 질문', path: COMMUNITY_FAQ_PATH },
    { size: 'sm', content: '내가 작성한 글 목록', path: COMMUNITY_ME_PATH },
    { size: 'sm', content: '랭킹', path: COMMUNITY_RANK_PATH },
  ];

  return <SubMenu leftMenuItems={leftMenuItems} rightMenuItems={rightMenuItems} />;
};

export default CommunitySubMenu;
