import React from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';
import { Accordion, Container, Radio, Title } from '@mantine/core';
import { profileQuery } from '../../pages/Profile';
import MyProductListPanel from './MyProductListPanel';
import { SelectProductAccordion } from '../common';

const PanelContainer = styled(Container)`
  margin-top: 30px;
  padding: 10px;
  width: 100%;
  color: var(--font-color);

  .mantine-Accordion-item,
  .mantine-Accordion-itemTitle,
  .mantine-Accordion-control {
    background: none;
    border-color: var(--font-color);
  }

  .mantine-Accordion-chevron {
    color: var(--font-color);
  }
`;

const SelectProductRadio = ({ value, onChange, onSelectProduct }) => {
  const { data: userInfo } = useQuery({ ...profileQuery(), suspense: false });

  return (
    <PanelContainer>
      <Radio.Group value={value} onChange={onChange}>
        <Accordion variant="default">
          {userInfo?.products.length > 0 && (
            <Accordion.Item value="나의 기기 목록">
              <Accordion.Control>
                <Title size="lg" c={'var(--font-color)'}>
                  나의 기기 목록
                </Title>
              </Accordion.Control>
              <MyProductListPanel
                products={userInfo.products}
                selectedProductType={value}
                onSelectProduct={onSelectProduct}
              />
            </Accordion.Item>
          )}

          <Accordion.Item value="제품 목록">
            <Accordion.Control>
              <Title size="lg" c={'var(--font-color)'}>
                제품 목록
              </Title>
            </Accordion.Control>
            <Accordion.Panel>
              <SelectProductAccordion selectedProductType={value} onSelectProduct={onSelectProduct} />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Radio.Group>
    </PanelContainer>
  );
};

export default SelectProductRadio;
