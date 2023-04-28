import React from 'react';
import { useParams } from 'react-router-dom';
import { Chip } from '@mantine/core';
import { useToggleCommentUsefulMutation } from '../../hooks/mutations';

const UsefulCommentChip = ({ useful, commentId }) => {
  const [isUseful, setIsUseful] = React.useState(useful);

  const { postId } = useParams();
  const toggleUseful = useToggleCommentUsefulMutation(postId);

  return (
    <Chip
      checked={isUseful}
      onChange={() => {
        toggleUseful({ commentId, useful: !isUseful });
        setIsUseful(isUseful => !isUseful);
      }}
      mb="4px"
      ml="auto"
      size="md"
      fw="500"
      radius="xl"
      color="dark"
      variant={isUseful ? 'outline' : 'filled'}>
      유용한 답변으로 채택
    </Chip>
  );
};

export default UsefulCommentChip;
