import React from 'react';
import styled from '@emotion/styled';
import { Avatar, Button, Flex, SimpleGrid, Text } from '@mantine/core';
import { PopupModal } from '../../common';
import avatars from '../../../constants/avatars';

const Container = styled.div`
  min-height: 480px;
`;

const List = styled(SimpleGrid)`
  margin-top: 30px;
  justify-items: center;
  height: 300px;
  overflow-y: scroll;
`;

const AvatarWrapper = styled(Avatar)`
  border: ${({ selected }) => (selected ? '5px solid var(--hover-font-color)' : '5px solid #d1d1d1')};
  background-color: ${({ selected }) => (selected ? 'var(--hover-font-color)' : '#d1d1d1')};
  border-radius: 100%;

  :hover {
    cursor: pointer;
    border: 5px solid var(--hover-font-color);
    background-color: var(--hover-font-color);
  }
`;

const ButtonWrapper = styled(Flex)`
  position: absolute;
  bottom: 40px;
  right: 60px;
`;

/**
 * PopupModal - AvatarEditModal
 * @param {{
 * opened: boolean
 * onClose: () => void
 * handleSelect: (avatarId) => void
 * avatarId?: string
 * }} props
 */
const AvatarEditModal = ({ opened, onClose, onSelect, avatarId }) => {
  const [selectedId, setSelectedId] = React.useState(avatarId);

  return (
    <PopupModal opened={opened} onClose={onClose} title="아바타 편집">
      <Container>
        <Text>아바타는 사용자의 활동을 맞춤화하여 목록 및 댓글을 통해 표시됩니다.</Text>

        <List cols={4} verticalSpacing="xl">
          {Object.keys(avatars).map(avatarId => (
            <AvatarWrapper
              key={avatarId}
              size="lg"
              selected={avatarId === selectedId}
              src={avatars[avatarId]}
              onClick={() => setSelectedId(avatarId)}
            />
          ))}
        </List>

        <ButtonWrapper>
          <Button color="gray" onClick={onClose}>
            취소
          </Button>
          <Button
            ml="sm"
            onClick={() => {
              onSelect(selectedId);
              onClose();
            }}>
            변경
          </Button>
        </ButtonWrapper>
      </Container>
    </PopupModal>
  );
};

export default AvatarEditModal;
