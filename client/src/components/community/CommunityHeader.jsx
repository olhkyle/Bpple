import React from 'react';
import routesConstants from '../../constants/routes';
import { Header } from '../common';

const CommunityHeader = () => (
  <Header
    title={{
      path: routesConstants.COMMUNITY,
      content: '커뮤니티',
    }}
    menuList={[
      { path: routesConstants.COMMUNITY_QUESTION, content: '질문하기' },
      { path: routesConstants.COMMUNITY_RANK, content: '랭킹' },
      { path: routesConstants.COMMUNITY_ME, content: '내가 작성한 글 목록' },
    ]}
  />
);

export default CommunityHeader;
