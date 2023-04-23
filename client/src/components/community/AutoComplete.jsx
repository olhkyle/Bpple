import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiChevronDown } from 'react-icons/fi';
import { Autocomplete, Button, Flex, Text } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import ProfileAvatar from '../profile/avatar/ProfileAvatar';
import useAutoCompleteQuery from '../../hooks/useAutoCompleteQuery';

const CommunityAutoComplete = styled(Autocomplete)`
  & .mantine-Autocomplete-wrapper {
    margin: 0 auto;
    width: ${({ wrapperwidth }) => `${wrapperwidth}px`};
  }

  & .mantine-Autocomplete-input {
    color: var(--font-color);
    padding-left: 3rem;
    height: 50px;
    font-size: 21px;
    border-radius: 10px;
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

  &: [data-hovered= 'true'] {
    background-color: var(--secondary-bg-color);
  }

  &:hover {
    div {
      font-weight: 600;
    }
    border-bottom: 1px solid #e5e5e5;
    background-color: var(--opacity-bg-color);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`;

const NothingFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Text fz="xl" fw="600" c={`var(--font-color)`}>
        커뮤니티에서 비슷한 질문을 찾지 못했습니다 ❗️
      </Text>
      <Button radius="10px" mt="10px" onClick={() => navigate('/community/question')}>
        질문하기
      </Button>
    </>
  );
};

const AutoCompleteItem = React.forwardRef(({ title, id, avatarId, ...rest }, ref) => {
  const navigate = useNavigate();

  return (
    <AutoCompleteItemContainer ref={ref} tabIndex={-1} onClick={() => navigate(`/post/${id}`)} {...rest}>
      <Flex justify="flex-start" align="center" p="20px">
        <ProfileAvatar avatarId={avatarId} />
        <Text pl="20px" fz="20px" fw="400" ta="start" sx={{ wordBreak: 'keep-all' }}>
          {title}
        </Text>
      </Flex>
    </AutoCompleteItemContainer>
  );
});

const LIMIT_OF_POSTS = 10;

const AutoComplete = ({ width = 620, queryFn }) => {
  const [value, setValue] = React.useState('');
  const [debounced] = useDebouncedValue(value, 500);

  const navigate = useNavigate();

  const { posts } = useAutoCompleteQuery(debounced, queryFn);

  return (
    <CommunityAutoComplete
      limit={LIMIT_OF_POSTS}
      value={value}
      onChange={setValue}
      itemComponent={AutoCompleteItem}
      data={posts}
      onItemSubmit={item => navigate(`/community/${item.id}`)}
      nothingFound={<NothingFound />}
      filter={() => true}
      icon={<FiSearch />}
      placeholder="검색 또는 질문하기"
      wrapperwidth={width}
      rightSection={<FiChevronDown size="1.5rem" stroke="grey" />}
      rightSectionWidth={50}
      sx={{ rightSection: { pointerEvents: 'none' } }}
      dropdownPosition="bottom"
      transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
      zIndex={10}
    />
  );
};

export default AutoComplete;
