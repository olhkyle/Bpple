import React from 'react';
import styled from '@emotion/styled';
import { Radio, Flex, Text, Group, Image } from '@mantine/core';
import { useController } from 'react-hook-form';
import categoryList from '../../constants/categoryList';

const RadioInput = styled(Radio)`
  input,
  svg {
    display: none;
  }

  label {
    padding: 0;
  }
`;

const RadioLabel = styled(Group)`
  --color: ${({ checked }) => `var(${checked ? '--hover-font-color' : '--font-color'})`};
  display: flex;
  width: 280px;
  gap: 12px;
  padding: 8px;
  font-size: 20px;
  align-items: center;
  color: var(--color);
  border: 2px solid var(--color);
  border-radius: 10px;

  img {
    height: 75px;
  }
`;

const CategoryRadio = ({ control }) => {
  const {
    field: { value, onChange },
  } = useController({ control, name: 'category' });

  return (
    <Radio.Group value={value} onChange={onChange}>
      <Flex gap="20px">
        {categoryList.map(({ imgPath, category }) => (
          <RadioInput
            key={category}
            value={category}
            label={
              <RadioLabel checked={value === category}>
                <Image src={imgPath} alt="" />
                <Text>{category}</Text>
              </RadioLabel>
            }
          />
        ))}
      </Flex>
    </Radio.Group>
  );
};

export default CategoryRadio;
