import React from 'react';
import styled from '@emotion/styled';
import { Badge, Flex, Text } from '@mantine/core';
import { productTypes } from '../../../constants/productList';

const SelectedGroup = styled(Flex)`
  background-color: var(--opacity-bg-color);
  border: 1px solid var(--opacity-border-color);
  padding: 30px 40px;
  margin: 50px 16px;
  border-radius: 6px;
  justify-content: center;
`;

const SelectedProduct = ({ selectedProductType }) => (
  <SelectedGroup>
    {selectedProductType ? (
      <Flex align="flex-end" w="100%">
        <Text size="lg" mr="sm" c="var(--font-color)">
          {'선택한 제품 타입 : '}
        </Text>
        <Badge variant="outline" size="lg">
          {productTypes[selectedProductType]}
        </Badge>
      </Flex>
    ) : (
      <Text size="lg" mr="sm" c="var(--font-color)">
        {'제품 타입을 선택해주세요.'}
      </Text>
    )}
  </SelectedGroup>
);

export default SelectedProduct;
