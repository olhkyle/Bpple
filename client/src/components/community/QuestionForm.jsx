import React from 'react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Flex, Input, Title, Button, Group } from '@mantine/core';
import { InputWrapper } from '../common';
import { TextEditor, CategoryRadio } from '.';
import { createNewPost } from '../../api/post';
import useTextEditor from '../../hooks/useTextEditor';

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

const QuestionForm = () => {
  const { handleSubmit, register, setValue, control } = useForm({
    resolver: zodResolver(questionScheme),
    defaultValues: { category: 'iPhone' },
  });

  const editor = useTextEditor({
    initContent: '',
    placeholder: '질문이 무엇입니까?',
    option: {
      onUpdate: () => setValue('content', editor.getHTML()),
    },
  });

  const onSubmit = data => {
    try {
      createNewPost(data);
      // TODO : 카테고리 게시물 목록으로 이동
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, e => console.log(e))}>
      <Flex direction="column" gap="xl">
        <InputWrapper>
          <TitleInput {...register('title')} placeholder="게시글 제목" />
        </InputWrapper>
        <TextEditor editor={editor} />
        <Group>
          <Title order={4}>어떤 주제에 대한 것입니까?</Title>
          <CategoryRadio control={control} />
        </Group>
        <Button type="submit">글쓰기</Button>
      </Flex>
    </form>
  );
};

export default QuestionForm;
