import React from 'react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import { FaLocationArrow } from 'react-icons/fa';
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Container, Divider, Flex, List, Text, Title } from '@mantine/core';
import userState from '../../recoil/atoms/userState';
import { Comment, ShowMoreButton, TextEditor } from '.';
import { getComments } from '../../api/post';
import usePaginationQuery from '../../hooks/queries/usePaginationQuery';
import commentsQueryKey from '../../constants/commentsQueryKey';
import { useAddCommentMutation, useEditCommentMutation, useRemoveCommentMutation } from '../../hooks/mutations';
import useTextEditor from '../../hooks/useTextEditor';

const CommentsContainer = styled.section`
  margin-top: 2.5rem;
`;

const CommentsHeader = styled(Flex)`
  position: sticky;
  top: 56.5px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-top: 10px;
  background-color: var(--body-bg-color);
  border-bottom: 1px solid #e5e5e5;
  z-index: 10;
`;

const CommentList = styled(List)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 720px;
`;

const Comments = () => {
  const { email, nickName, avatarId } = useRecoilValue(userState);
  const [textEditorContent, setTextEditorContent] = React.useState('');

  const { postId } = useParams();

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage, refetch } = usePaginationQuery({
    queryFn: getComments,
    queryKeyword: commentsQueryKey,
    param: postId,
    select: data => ({
      comments: data.pages.map(({ comments }) => comments).flat(),
      totalLength: data.pages[0].totalLength,
    }),
  });

  const add = useAddCommentMutation(postId);
  const edit = useEditCommentMutation(postId);
  const remove = useRemoveCommentMutation(postId);

  const { scrollIntoView, targetRef } = useScrollIntoView({
    offset: 180,
  });

  const editor = useTextEditor({
    initContent: textEditorContent,
    placeholder: '의견을 알려주세요.',
    option: {
      onUpdate: ({ editor }) => setTextEditorContent(editor.getHTML()),
    },
  });

  return (
    <CommentsContainer>
      <CommentsHeader>
        <Flex gap="10px" mb="10px" align="center" fw="600">
          <Text fz="2rem" mt="1px">
            답글
          </Text>
          <Text c="blue" fz="2.5rem">
            {data?.totalLength}
          </Text>
        </Flex>
        <Button
          onClick={() => {
            scrollIntoView({ alignment: 'start' });
            editor.commands.focus();
          }}
          variant="subtle"
          radius="xl">
          <Text mr="8px" fz="1rem">
            답글 작성하기
          </Text>
          <FaLocationArrow size="16" />
        </Button>
      </CommentsHeader>
      <Container miw="990px" my="20px" ref={targetRef}>
        <Title m="3rem 0 2rem" ta="center" fz="2rem">
          💿 궁금한 점이 있다면 의견을 남겨주세요.
        </Title>
        <TextEditor editor={editor} />
        <Flex justify="center">
          <Button
            onClick={() => {
              add(
                {
                  commentInfo: {
                    postId,
                    author: email,
                    nickName,
                    avatarId,
                    content: textEditorContent,
                    createAt: new Date(),
                  },
                },
                {
                  onSuccess: () => refetch(),
                }
              );
              editor.commands.clearContent();
              editor.commands.focus();
            }}
            disabled={textEditorContent.replace(/<\/?p>/gi, '').trim() === ''}
            mt="1rem"
            ml="auto"
            fz="14px"
            w={90}
            radius="xl">
            글쓰기
          </Button>
        </Flex>
      </Container>
      <Divider mb="2rem" variant="dashed" />
      <CommentList>
        {data?.comments.map(comment => (
          <Comment
            key={`${comment.id}_${comment.content}`}
            comment={comment}
            isAuthor={email === comment.author}
            editMutate={edit}
            removeMutate={remove}
          />
        ))}
      </CommentList>
      {hasNextPage && <ShowMoreButton loading={isFetchingNextPage} onClick={fetchNextPage} />}
    </CommentsContainer>
  );
};

export default Comments;
