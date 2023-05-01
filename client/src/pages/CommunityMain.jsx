import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ImEarth } from 'react-icons/im';
import { IoFilterCircleOutline } from 'react-icons/io5';
import { HiOutlineTrophy } from 'react-icons/hi2';
import { Container, Divider, Flex, Group, Image, List, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { InfoCard } from '../components/common';
import { AutoComplete, RuleModal, QuestionModal, FilterContentModal } from '../components/community';
import { getSearchedPosts } from '../api/posts';
import categoryList from '../constants/categoryList';
import { COMMUNITY_PATH } from '../routes/routePaths';

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
    font-weight: 500;
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

const Tutorials = styled(Flex)`
  margin-top: 6rem;
  padding: 30px;
  gap: 30px;
  border-radius: 20px;
  border: 1px solid #e5e5e5;
  background-color: var(--opacity-bg-color);
`;

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
        <AutoComplete width={720} queryFn={getSearchedPosts} />
      </Description>

      <Image src="/community/community-main.png" alt="community" pt="6rem" pb="3rem" />

      <Text mt="4rem" mb="2rem" fz="21px" fw="600">
        제품을 선택하시면 관련 주제가 표시됩니다 ⭐️
      </Text>
      <CategoryList>
        {categoryList.map(({ imgPath, category }) => (
          <Category key={imgPath}>
            <Link to={`${COMMUNITY_PATH}/${category.toLowerCase()}`}>
              <Image src={imgPath} alt={`category-${category}`} />
              <CategoryDescription>{category}</CategoryDescription>
            </Link>
          </Category>
        ))}
      </CategoryList>

      <Tutorials>
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
      </Tutorials>
    </Wrapper>
  );
};

export default CommunityMain;
