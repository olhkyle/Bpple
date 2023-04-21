import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ImEarth } from 'react-icons/im';
import { IoFilterCircleOutline } from 'react-icons/io5';
import { HiOutlineTrophy } from 'react-icons/hi2';
import { Container, Divider, Flex, Group, List, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import InfoCard from '../common/InfoCard';
import AutoComplete from './AutoComplete';
import RuleModal from './RuleModal';
import QuestionModal from './QuestionModal';
import FilterContentModal from './FilterContentModal';

const Wrapper = styled(Container)`
  min-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 5rem;
  font-size: 0.75rem;
  text-align: center;
  color: var(--font-color);
`;

const Description = styled.section`
  width: 730px;
  word-break: keep-all;
`;

const CommunityImageWrapper = styled.div`
  padding-top: 6rem;
  padding-bottom: 3rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CategoryList = styled(List)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const Category = styled(List.Item)`
  display: flex;
  flex-direciton: column;
  align-items: center;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  cursor: pointer;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    padding: 30px 45px;
  }

  &:hover {
    color: var(--hover-font-color);
    border: 1px solid var(--hover-font-color);
    background-color: var(--opacity-bg-color);
  }
`;

const CategoryDescription = styled.p`
  margin-top: 30px;
  font-size: 18px;
  color: var(--font-color);
  text-decoration: none;
`;

const categoryList = [
  { imgPath: '/community/iphone-family.png', category: 'iPhone' },
  { imgPath: '/community/mbp-notebooks.png', category: 'Mac' },
  { imgPath: '/community/ipad-family.png', category: 'iPad' },
];

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
    title: '아이폰 너무해?',
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
      '아이폰 13 미니에서 찍은 영상 에어드롭으로 아이폰7+로 보냈을때 영상에 빛노출이 너무 심한데 어떻게 해야 하나요?',
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

const filteredPosts = posts.map(({ id, title }) => ({ title, value: id }));

// Todo []
// 1. 게시글 목록 get요청 필요
// 2. input dropdown 서버 요청에 따른 loading spinner 처리
// 3. Link 요소 활용하여 해당 게시글 링크로 라우팅 처리
// 4. 카테고리별 페이지로 이동 필요
// sub - 5. autocomplete dropdown tab 이동 구현

const CommunityMain = () => {
  const [questionModalOpened, { close: onQuestionModalClose, open: onQuestionModalOpen }] = useDisclosure(false);
  const [filterContentModalOpened, { close: onFilterContentModalClose, open: onFilterContentModalOpen }] =
    useDisclosure(false);
  const [ruleModalOpened, { close: onRuleModalClose, open: onRuleModalOpen }] = useDisclosure(false);

  return (
    <Wrapper>
      <Description>
        <Title size="52px" mt="24px" mb="40px">
          FineApple이 지원하는 커뮤니티
        </Title>
        <Text fz="26px" mb="40px">
          전 세계 FineApple 고객들과 소통해 보세요 🚀
        </Text>
        <AutoComplete communityPosts={filteredPosts} width={720} />
      </Description>

      <CommunityImageWrapper>
        <img src="/community/community-main.png" alt="community" />
      </CommunityImageWrapper>

      <Text fz="21px" mt="4rem" mb="2rem" fw="600">
        제품을 선택하시면 관련 주제가 표시됩니다 ⭐️
      </Text>

      <CategoryList>
        {categoryList.map(({ imgPath, category }) => (
          <Category key={imgPath}>
            <Link to={''}>
              <img src={imgPath} alt="iphone-category" />
              <CategoryDescription>{category}</CategoryDescription>
            </Link>
          </Category>
        ))}
      </CategoryList>

      <Flex
        bg="var(--opacity)"
        mt="6rem"
        p="30px"
        gap="20px"
        sx={{ borderRadius: '20px', border: '1px solid #e5e5e5' }}>
        <Group>
          <InfoCard icon={<ImEarth />} title={'답변을 찾고 질문하기'} onClick={onQuestionModalOpen} />
          <QuestionModal opened={questionModalOpened} onClose={onQuestionModalClose} />
        </Group>
        <Divider orientation="vertical" />
        <Group>
          <InfoCard
            icon={<IoFilterCircleOutline />}
            title={'콘텐츠 한 눈에 살펴보기'}
            onClick={onFilterContentModalOpen}
          />
          <FilterContentModal opened={filterContentModalOpened} onClose={onFilterContentModalClose} />
        </Group>
        <Divider orientation="vertical" />
        <Group>
          <InfoCard icon={<HiOutlineTrophy />} title={'포인트 획득, 레벨 올리기'} onClick={onRuleModalOpen} />
          <RuleModal opened={ruleModalOpened} onClose={onRuleModalClose} />
        </Group>
      </Flex>
    </Wrapper>
  );
};

export default CommunityMain;
