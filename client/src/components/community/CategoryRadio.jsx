import React from 'react';
import styled from '@emotion/styled';
import { Radio, Flex, Text, Image, Container } from '@mantine/core';
import categoryList from '../../constants/categoryList';

const RadioInput = styled(Radio)`
  input,
  svg {
    display: none;
  }

  label {
    padding: 0;
  }

  .mantine-Radio-labelWrapper {
    width: 100%;
  }
`;

const RadioLabel = styled(Container)`
  --color: ${({ checked }) => `var(${checked ? '--hover-font-color' : '--font-color'})`};
  display: flex;
  width: 100%;
  padding: 8px;
  font-size: 20px;
  align-items: center;
  color: var(--color);
  border: 1px solid var(--color);
  border-radius: 10px;

  img {
    max-width: 40px;
    max-height: 40px;
    width: content-fit;
    object-fit: scale-down !important;
  }

  .mantine-Image-root {
    width: fit-content !important;
  }
`;

const CategoryRadio = ({ value, onChange, onResetProduct }) => (
  <Radio.Group value={value} onChange={onChange} px="10px">
    <Flex gap="2%">
      {categoryList.map(({ imgPath, category }) => (
        <RadioInput
          key={category}
          w="32%"
          value={category}
          onClick={onResetProduct}
          label={
            <RadioLabel checked={value === category}>
              <Image src={imgPath} alt="" />
              <Text ml="lg">{category}</Text>
            </RadioLabel>
          }
        />
      ))}
    </Flex>
  </Radio.Group>
);

export default CategoryRadio;
