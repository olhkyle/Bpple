import React from 'react';
import styled from '@emotion/styled';
import { useController, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Flex, Input, Title, Button, Container } from '@mantine/core';
import { InputWrapper } from '../common';
import { TextEditor, CategoryRadio, SelectProductRadio } from '.';
import { createNewPost } from '../../api/post';
import useTextEditor from '../../hooks/useTextEditor';
import { ipadProductTypes, iphoneProductTypes, macbookProductTypes } from '../../constants/productList';
import SelectedCategoryAndProductType from './SelectedCategoryAndProductType';

const TitleInput = styled(Input)`
  input {
    font-size: 20px;
    font-weight: bold;
  }
`;

const Wrapper = styled(Container)`
  background-color: var(--opacity-bg-color);
  border: 1px solid var(--opacity-border-color);
  padding: 30px 20px;
  border-radius: 10px;
`;

const questionScheme = z.object({
  title: z.string(),
  content: z.string(),
  category: z.string(),
  productType: z.string(),
});

const QuestionForm = () => {
  const { handleSubmit, register, setValue, control } = useForm({
    resolver: zodResolver(questionScheme),
    defaultValues: { category: '', productType: '' },
  });

  const {
    field: { value: selectedCategory, onChange: onChangeCategory },
  } = useController({ control, name: 'category' });

  const {
    field: { value: selectedProductType, onChange: onChangeProductType },
  } = useController({ control, name: 'productType' });

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

  const onResetProduct = () => {
    onChangeProductType('');
  };

  const onSelectProduct = productType => {
    onChangeCategory(
      Object.keys(iphoneProductTypes).includes(productType)
        ? 'iPhone'
        : Object.keys(ipadProductTypes).includes(productType)
        ? 'iPad'
        : Object.keys(macbookProductTypes).includes(productType)
        ? 'Mac'
        : ''
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, e => console.log(e))}>
      <Flex direction="column" gap="xl">
        <InputWrapper>
          <TitleInput {...register('title')} placeholder="게시글 제목" />
        </InputWrapper>
        <TextEditor editor={editor} />

        <Container w="100%" p="0">
          <Title order={4} mt="40px" mb="20px">
            어떤 주제에 대한 것입니까?
          </Title>
          <Wrapper>
            <CategoryRadio value={selectedCategory} onChange={onChangeCategory} onResetProduct={onResetProduct} />

            <SelectProductRadio
              value={selectedProductType}
              onChange={onChangeProductType}
              onSelectProduct={onSelectProduct}
            />
          </Wrapper>
        </Container>

        <SelectedCategoryAndProductType categoryType={selectedCategory} selectedProductType={selectedProductType} />

        <Button type="submit" size="lg" mt="20px" radius="10px">
          글쓰기
        </Button>
      </Flex>
    </form>
  );
};

export default QuestionForm;
