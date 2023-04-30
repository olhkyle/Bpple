import React from 'react';
import styled from '@emotion/styled';
import { useController } from 'react-hook-form';
import { Container, Title } from '@mantine/core';
import { CategoryRadio, SelectProductRadio, SelectedCategoryAndProductType } from '.';
import { ipadProductTypes, iphoneProductTypes, macbookProductTypes } from '../../constants/productList';

const Wrapper = styled(Container)`
  background-color: var(--opacity-bg-color);
  border: 1px solid var(--opacity-border-color);
  padding: 30px 20px;
  border-radius: 10px;
`;

const DEFAULT_VALUE = {
  category: '',
  productType: '',
};

const SubjectSelect = ({ control }) => {
  const {
    field: { value, onChange },
  } = useController({
    control,
    name: 'subject',
    defaultValue: DEFAULT_VALUE,
  });

  const onChangeProduct = productType => {
    const category = Object.keys(iphoneProductTypes).includes(productType)
      ? 'iPhone'
      : Object.keys(ipadProductTypes).includes(productType)
      ? 'iPad'
      : Object.keys(macbookProductTypes).includes(productType)
      ? 'Mac'
      : '';

    onChange({ category, productType });
  };

  return (
    <>
      <Container w="100%" p="0">
        <Title order={4} mt="40px" mb="20px">
          어떤 주제에 대한 것입니까?
        </Title>
        <Wrapper>
          <CategoryRadio
            value={value.category}
            onChange={category => onChange({ category, productType: '' })}
            onResetProduct={() => onChange(DEFAULT_VALUE)}
          />
          <SelectProductRadio value={value.productType} onChange={onChangeProduct} />
        </Wrapper>
      </Container>
      <SelectedCategoryAndProductType categoryType={value.category} selectedProductType={value.productType} />
    </>
  );
};

export default SubjectSelect;
