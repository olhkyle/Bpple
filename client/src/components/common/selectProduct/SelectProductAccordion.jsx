import React from 'react';
import { Accordion, Title } from '@mantine/core';
import SelectProductAccordionPanel from './SelectProductAccordionPanel';

/**
 * @param {{
 * selectedProductType: string,
 * productCategoryList: Array<{
 *  categoryType: string, productTypes: Record<string, string>
 * }>
 * multiple?: boolean
 * }} props
 */
const SelectProductAccordion = ({ selectedProductType, productCategoryList, multiple = false }) => (
  <Accordion variant="contained" multiple={multiple}>
    {productCategoryList.map(({ categoryType, productTypes }) => (
      <Accordion.Item value={categoryType} key={categoryType}>
        <Accordion.Control>
          <Title size="lg" c={'var(--font-color)'}>
            {categoryType}
          </Title>
        </Accordion.Control>
        <SelectProductAccordionPanel productTypes={productTypes} selectedProductType={selectedProductType} />
      </Accordion.Item>
    ))}
  </Accordion>
);

export default SelectProductAccordion;
