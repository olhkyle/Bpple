import React from 'react';
import styled from '@emotion/styled';
import { Accordion, Flex, Text, Image, Radio } from '@mantine/core';
import productThumbnail from '../../../constants/productThumbnail';

const RadioInput = styled(Radio)`
  --color: ${({ checked }) => `var(${checked ? '--hover-font-color' : '--opacity-border-color'})`};

  flex-basis: calc(25% - 10px);
  width: 100%;
  height: 100%;
  background: var(--opacity-bg-color);
  color: var(--color);
  border: 2px solid var(--color);
  border-radius: 10px;
  /* cursor: pointer; */

  :hover {
    border: 2px solid #0071e285;
  }

  input,
  svg {
    display: none;
  }
  label {
    padding: 0;
    cursor: pointer;
  }

  .mantine-Radio-labelWrapper {
    width: 100%;
  }

  .mantine-Accordion-item:last-child {
    border: none;
  }
`;

const ItemCard = styled(Flex)`
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 5px 12px;
`;

const ItemImage = styled(Image)`
  max-width: 40px;
  max-height: 40px;

  img {
    max-width: 40px;
    max-height: 40px;
    object-fit: scale-down !important;
  }
`;

const SelectProductAccordionPanel = ({ productTypes, selectedProductType, onSelectProduct }) => (
  <Accordion.Panel>
    <Flex ml="10px" gap="10px" wrap="wrap">
      {Object.entries(productTypes).map(([productType, productName]) => (
        <React.Fragment key={productType}>
          <RadioInput
            checked={selectedProductType === productType}
            value={productType}
            onClick={() => {
              if (onSelectProduct) onSelectProduct(productType);
            }}
            label={
              <ItemCard>
                <ItemImage src={productThumbnail[productType]} alt={`product-${productType}`} />
                <Text size="md" c={'var(--font-color)'} w="100%">
                  {productName}
                </Text>
              </ItemCard>
            }
          />
        </React.Fragment>
      ))}
    </Flex>
  </Accordion.Panel>
);

export default SelectProductAccordionPanel;
