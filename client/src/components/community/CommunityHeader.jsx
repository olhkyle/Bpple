import React from 'react';
import {
  COMMUNITY_FAQ_PATH,
  COMMUNITY_ME_PATH,
  COMMUNITY_PATH,
  COMMUNITY_QUESTION_PATH,
  COMMUNITY_RANK_PATH,
} from '../../routes/routePaths';
import { Header } from '../common';

const CommunityHeader = () => (
  <Header
    title={{
      path: COMMUNITY_PATH,
      content: '커뮤니티',
    }}
    menuList={[
      { path: COMMUNITY_QUESTION_PATH, content: '질문하기' },
      { path: COMMUNITY_FAQ_PATH, content: '자주 묻는 질문' },
      { path: COMMUNITY_RANK_PATH, content: '랭킹' },
      { path: COMMUNITY_ME_PATH, content: '내가 작성한 질문' },
    ]}
  />
);

export default CommunityHeader;
