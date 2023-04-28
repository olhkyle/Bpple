import styled from '@emotion/styled';
import { Badge, Container, Flex, Text } from '@mantine/core';
import React from 'react';
import { productTypes } from '../../constants/productList';

const SelectedGroup = styled(Flex)`
  background-color: var(--opacity-bg-color);
  border: 1px solid var(--opacity-border-color);
  padding: 30px 40px;
  border-radius: 10px;
  justify-content: center;
`;

const SelectedCategoryAndProductType = ({ categoryType, selectedProductType }) => (
  <SelectedGroup>
    {categoryType ? (
      <Container w="100%">
        <Flex align="flex-end" w="100%">
          <Text size="lg" mr="sm" c="var(--font-color)">
            {'선택 카테고리 : '}
          </Text>
          <Badge variant="outline" size="lg">
            {categoryType}
          </Badge>
        </Flex>
        {selectedProductType && (
          <Flex align="flex-end" w="100%" mt="10px">
            <Text size="lg" mr="sm" c="var(--font-color)">
              {'선택 제품 타입 : '}
            </Text>
            <Badge variant="outline" size="lg">
              {productTypes[selectedProductType]}
            </Badge>
          </Flex>
        )}
      </Container>
    ) : (
      <Text size="lg" mr="sm" c="var(--font-color)">
        {'질문에 해당하는 카테고리 또는 상품을 선택해주세요.'}
      </Text>
    )}
  </SelectedGroup>
);

export default SelectedCategoryAndProductType;
