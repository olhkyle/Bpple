import React from 'react';
import styled from '@emotion/styled';
import { Container, Flex, Group, Title, Chip } from '@mantine/core';
import CommunityPosts from './CommunityPosts';

const Wrapper = styled(Container)`
  min-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 5rem;
  font-size: 0.75rem;
  color: var(--font-color);
`;

const posts = [
  {
    id: 1,
    title: '새로운 icloud 이용 약관이 설정창에 떠서 동의를 눌렀음에도 안 없어지고 계속 떠있습니다. 해결 방법 있을까요?',
    author: 'jp',
    createdAt: '2023-02-23',
    updatedAt: '2023-03-01',
    comments: [1, 2, 3, 4, 5, 6],
    category: 'iphone',
    completed: false,
  },
  {
    id: 2,
    title: '집중모드 위치설정 기기변경을 하려하는데 예전 폰으로 위치 설정이 잡히는데 어떻게 하는게 좋을까요?',
    author: 'jp',
    createdAt: '2023-02-20',
    updatedAt: '2023-02-24',
    comments: [1, 2, 3, 4, 5, 6],
    category: 'iphone',
    completed: true,
  },
  {
    id: 3,
    title: '특정 어플을 들어갈때마다 `java.lang.String` 관련 오류가 뜨는데 해결책이 있을까요?',
    author: 'jp',
    createdAt: '2023-02-10',
    updatedAt: '2023-02-26',
    comments: [1, 2, 3, 4, 5, 6],
    category: 'mac',
    completed: false,
  },
  {
    id: 4,
    title:
      '아이폰13미니에서 찍은 영상 에어드롭으로 아이폰7+로 보냈을때 영상에 빛노출이 너무 심한데 어떻게 해야 하나요?',
    author: 'jp',
    createdAt: '2023-02-05',
    updatedAt: '2023-02-26',
    comments: [1, 2, 3, 4, 5, 6],
    category: 'iphone',
    completed: true,
  },
  {
    id: 5,
    title:
      '아이폰13미니에서 찍은 영상 에어드롭으로 아이폰7+로 보냈을때 영상에 빛노출이 너무 심한데 어떻게 해야 하나요?',
    author: 'jp',
    createdAt: '2023-01-15',
    updatedAt: '2023-02-26',
    comments: [1, 2, 3, 4, 5, 6],
    category: 'mac',
    completed: false,
  },
  {
    id: 6,
    title: '아이폰 13 미니 에서 블루투스 인지를 못하는 이유?',
    author: 'jp',
    createdAt: '2023-02-20',
    updatedAt: '2023-02-26',
    comments: [1, 2, 3, 4, 5, 6],
    category: 'ipad',
    completed: true,
  },
];

const CommunityMyPosts = () => {
  const [value, setValue] = React.useState('recent');

  // Todo[] : 최신 순 또는 오래된 순에 따른 posts 정렬 => 비동기 요청 필요
  const filteredPosts = posts.sort((a, b) =>
    value === 'recent' ? new Date(b.createdAt) - new Date(a.createdAt) : new Date(a.createdAt) - new Date(b.createdAt)
  );

  return (
    <Wrapper>
      <Title size="64px" mt="40px">
        내가 작성한 글 목록
      </Title>
      <Flex justify="flex-end">
        <Chip.Group value={value} onChange={setValue}>
          <Group position="center">
            <Chip value="recent">최신 순</Chip>
            <Chip value="old">오래된 순</Chip>
          </Group>
        </Chip.Group>
      </Flex>
      <CommunityPosts posts={filteredPosts} />
    </Wrapper>
  );
};

export default CommunityMyPosts;
