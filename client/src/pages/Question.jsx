import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Container, Flex, Input, Title } from '@mantine/core';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { CategoryRadio, TextEditor } from '../components/community';
import { InputWrapper } from '../components/common/Form';
import userState from '../recoil/atoms/userState';
import { createNewPost } from '../api/post';

const TitleInput = styled(Input)`
  input {
    font-size: 20px;
    font-weight: bold;
  }
`;

const questionScheme = z.object({
  title: z.string(),
  content: z.string(),
  category: z.string(),
});

const Question = () => {
  const user = useRecoilValue(userState);
  const { handleSubmit, register, setValue, getValues } = useForm({ resolver: zodResolver(questionScheme) });

  const onSubmit = data => {
    try {
      createNewPost({ ...data, author: user.email });
      // TODO : 카테고리 게시물 목록으로 이동
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit, e => console.log(e))}>
        <Flex direction="column" my="xl" py="xl" c="var(--font-color)" gap="24px">
          <Title order={2}>새 게시물 작성하기</Title>
          <InputWrapper>
            <TitleInput {...register('title')} placeholder="게시글 제목" />
          </InputWrapper>
          <TextEditor {...register('content')} setValue={setValue} />
          <Title order={4}>어떤 주제에 대한 것입니까?</Title>
          <CategoryRadio {...register('category')} getValues={getValues} setValue={setValue} />
          <Button type="submit">글쓰기</Button>
        </Flex>
      </form>
    </Container>
  );
};

export default Question;
