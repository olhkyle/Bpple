import React from 'react';
import styled from '@emotion/styled';
import { Radio, Flex, Text, Group, Image } from '@mantine/core';
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

const CategoryRadio = ({ setValue }) => {
  const [currentCategory, setCategory] = React.useState('iPhone');

  return (
    <Radio.Group
      value={currentCategory}
      onChange={category => {
        setCategory(category);
        setValue(category);
      }}>
      <Flex gap="20px">
        {categoryList.map(({ imgPath, category }) => (
          <RadioInput
            key={category}
            value={category}
            label={
              <RadioLabel checked={currentCategory === category}>
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
