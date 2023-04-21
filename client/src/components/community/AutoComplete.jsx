import React from 'react';
import styled from '@emotion/styled';
import { Autocomplete, Flex, Text } from '@mantine/core';
import { FiSearch } from 'react-icons/fi';
import ProfileAvatar from '../profile/avatar/ProfileAvatar';

const AutoCompleteItemContainer = styled.div`
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    border-bottom: 1px solid #e5e5e5;
    background-color: var(--opacity-bg-color);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`;

const CommunityAutoComplete = styled(Autocomplete)`
  .mantine-Autocomplete-wrapper {
    margin: 0 auto;
    width: ${({ wrapperwidth }) => `${wrapperwidth}px`};
  }

  .mantine-Autocomplete-input {
    padding-left: 3rem;
    height: 50px;
    font-size: 21px;
    border-radius: 10px;
  }

  .mantine-Autocomplete-icon {
    width: 50px;
    font-size: 21px;
  }

  .mantine-Autocomplete-dropdown {
    padding: 1rem;
    border-radius: 10px;
    border: 1px solid #e1e1e1;
    background-color: var(--body-bg-color);
  }
`;

const LIMIT_OF_POSTS = 10;

const AutoCompleteItem = React.forwardRef(({ title }, ref) => (
  <AutoCompleteItemContainer ref={ref} tabIndex={-1}>
    <Flex justify="flex-start" align="center" p="20px">
      <ProfileAvatar />
      <Text pl="20px" fz="20px" fw="400" sx={{ textAlign: 'start', wordBreak: 'keep-all' }}>
        {title}
      </Text>
    </Flex>
  </AutoCompleteItemContainer>
));

const AutoComplete = ({ communityPosts, width = 620 }) => {
  const [value, setValue] = React.useState('');

  return (
    <CommunityAutoComplete
      wrapperwidth={width}
      value={value}
      onChange={setValue}
      limit={LIMIT_OF_POSTS}
      itemComponent={AutoCompleteItem}
      data={communityPosts}
      icon={<FiSearch />}
      filter={(value, item) => new RegExp(value, 'i').test(item.title)}
      placeholder="검색 또는 질문하기"
      transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
    />
  );
};

export default AutoComplete;
