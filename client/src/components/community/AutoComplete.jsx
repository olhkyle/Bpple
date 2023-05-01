import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { Autocomplete, Button, Flex, Text } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { ProfileAvatar } from '../common';
import useAutoCompleteQuery from '../../hooks/queries/useAutoCompleteQuery';
import { COMMUNITY_POST_PATH, COMMUNITY_QUESTION_PATH } from '../../routes/routePaths';

const CommunityAutoComplete = styled(Autocomplete)`
  & .mantine-Autocomplete-wrapper {
    margin: 0 auto;
    width: ${({ wrapperwidth }) => `${wrapperwidth}px`};
  }

  & .mantine-Autocomplete-input {
    padding-left: 3rem;
    height: 50px;
    font-size: 21px;
    border-radius: 10px;
    color: var(--font-color);
    background-color: var(--secondary-bg-color);
  }

  & .mantine-Autocomplete-icon {
    width: 50px;
    font-size: 21px;
  }

  & .mantine-Autocomplete-dropdown {
    padding: 1rem;
    border-radius: 10px;
    border: 1px solid #e1e1e1;
    background-color: var(--secondary-bg-color);
    div {
      gap: 10px;
    }
  }
`;

const AutoCompleteItemContainer = styled.div`
  border: 1px solid transparent;
  border-radius: 10px;
  color: var(--font-color);
  cursor: pointer;

  &[data-hovered='true'],
  &:hover {
    div {
      font-weight: 600;
    }
    border-bottom: 1px solid #e1e1e1;
    background-color: var(--opacity-bg-color);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`;

const AutoCompleteItemContent = styled(Text)`
  padding-left: 20px;
  font-size: 20px;
  font-weight: 400;
  text-align: start;
  word-break: keep-all;
`;

const NothingFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Text fz="xl" fw="600" c={`var(--font-color)`}>
        커뮤니티에서 비슷한 질문을 찾지 못했습니다 ❗️
      </Text>
      <Button radius="10px" mt="10px" onClick={() => navigate(COMMUNITY_QUESTION_PATH)}>
        질문하기
      </Button>
    </>
  );
};

const AutoCompleteItem = React.forwardRef(({ title, id, avatarId, ...rest }, ref) => {
  const navigate = useNavigate();

  return (
    <AutoCompleteItemContainer ref={ref} onClick={() => navigate(`${COMMUNITY_POST_PATH}/${id}`)} {...rest}>
      <Flex justify="flex-start" align="center" p="20px">
        <ProfileAvatar avatarId={avatarId} />
        <AutoCompleteItemContent>{title}</AutoCompleteItemContent>
      </Flex>
    </AutoCompleteItemContainer>
  );
});

const LIMIT_OF_POSTS = 10;

const AutoComplete = ({ width = 620, queryFn, category = '' }) => {
  const [value, setValue] = React.useState('');
  const [debounced] = useDebouncedValue(value, 500);

  const navigate = useNavigate();

  const posts = useAutoCompleteQuery({ inputValue: debounced, queryFn, category });

  return (
    <CommunityAutoComplete
      value={value}
      onChange={setValue}
      placeholder="검색 또는 질문하기"
      limit={LIMIT_OF_POSTS}
      itemComponent={AutoCompleteItem}
      data={posts ?? []}
      onItemSubmit={item => {
        navigate(`${COMMUNITY_POST_PATH}/${item.id}`);
        setValue('');
      }}
      nothingFound={<NothingFound />}
      filter={() => true}
      icon={<FiSearch />}
      wrapperwidth={width}
      dropdownPosition="bottom"
      transitionProps={{
        transition: 'pop-top-left',
        duration: 80,
        timingFunction: 'ease',
      }}
      zIndex={10}
    />
  );
};

export default AutoComplete;
