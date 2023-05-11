import React from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { Flex, Title, Image } from '@mantine/core';
import { getSearchedPosts } from '../../api/posts';
import { CATEGORY } from '../../constants/category';
import { AutoComplete, PostSection } from '.';
import { postsByCategoryQuery } from '../../queries';

const CategoryImage = styled(Image)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;

  figure.mantine-Image-figure {
    width: ${({ category }) => (category === CATEGORY.mac ? '90%' : category === CATEGORY.ipad ? '65%' : '70%')};
  }
`;

const CommunityCategorySection = () => {
  const { category } = useParams();

  return (
    <>
      <Flex gap="0.5rem" mt="4rem">
        <CategoryImage
          src={`/community/${category}/${category}-category.png`}
          alt={`${category}-category-img`}
          category={category}
        />
        <Flex direction="column" justify="center">
          <Title mb="3rem">{CATEGORY[category]}</Title>
          <AutoComplete width={720} queryFn={getSearchedPosts} category={category} />
        </Flex>
      </Flex>
      <PostSection queryFn={postsByCategoryQuery(category)} />
    </>
  );
};

export default CommunityCategorySection;
