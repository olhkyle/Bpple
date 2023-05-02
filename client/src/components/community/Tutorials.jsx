import React from 'react';
import styled from '@emotion/styled';
import { useDisclosure } from '@mantine/hooks';
import { Divider, Flex, Group } from '@mantine/core';
import { IoFilterCircleOutline } from 'react-icons/io5';
import { ImEarth } from 'react-icons/im';
import { HiOutlineTrophy } from 'react-icons/hi2';
import { InfoCard } from '../common';
import QuestionModal from './QuestionModal';
import FilterContentModal from './FilterContentModal';
import RuleModal from './RuleModal';

const Container = styled(Flex)`
  margin-top: 6rem;
  padding: 30px;
  gap: 30px;
  border-radius: 20px;
  border: 1px solid #e5e5e5;
  background-color: var(--opacity-bg-color);
`;

const Tutorials = () => {
  const [questionModalOpened, { close: onQuestionModalClose, open: onQuestionModalOpen }] = useDisclosure(false);
  const [filterContentModalOpened, { close: onFilterContentModalClose, open: onFilterContentModalOpen }] =
    useDisclosure(false);
  const [ruleModalOpened, { close: onRuleModalClose, open: onRuleModalOpen }] = useDisclosure(false);

  return (
    <Container>
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
    </Container>
  );
};

export default Tutorials;
