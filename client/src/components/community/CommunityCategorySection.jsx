import React from 'react';
import styled from '@emotion/styled';
import { Link, useParams } from 'react-router-dom';
import { Flex, Text, Title, Image } from '@mantine/core';
import { FiArrowRight } from 'react-icons/fi';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import { COMMUNITY_PATH } from '../../routes/routePaths';
import { getSearchedPosts } from '../../api/posts';
import { category as CATEGORY } from '../../constants/category';
import { AutoComplete, Posts } from '.';
import { categoryQuery } from '../../query';

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
      <Flex>
        <Link to={`${COMMUNITY_PATH}`}>
          <Flex gap="5px" align="center" mr="5px" fz="15px" fw="600" td="none" c="var(--font-color)">
            <Text>Community</Text>
            <FiArrowRight />
          </Flex>
        </Link>
        <Link to={`${COMMUNITY_PATH}/${category}`}>
          <Flex gap="5px" align="center" fz="15px" fw="600" td="none" c="var(--font-color)">
            <Text>{CATEGORY[category]}</Text>
            <BsArrowUpRightSquare />
          </Flex>
        </Link>
      </Flex>

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
      <Posts queryFn={categoryQuery(category)} />
    </>
  );
};

export default CommunityCategorySection;
