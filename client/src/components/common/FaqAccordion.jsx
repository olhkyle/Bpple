import React from 'react';
import styled from '@emotion/styled';
import { Accordion, Container, Text } from '@mantine/core';
import Faq from './Faq';

const FaqContainer = styled(Container)`
  color: var(--font-color);
  border: 1px solid var(--font-color);
  border-radius: 10px;
  padding: 0;

  & > div > div.mantine-Accordion-item {
    border: none;
  }

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

const MainTitle = styled(Text)`
  color: var(--font-color);
  font-size: 1.8rem;
  font-weight: 500;
`;

const FaqAccordion = ({ faqList }) => (
  <FaqContainer>
    <Accordion multiple>
      <Accordion.Item value="faq">
        <Accordion.Control>
          <MainTitle>자주 묻는 질문</MainTitle>
        </Accordion.Control>
        <Accordion.Panel>
          <Faq faqList={faqList} />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  </FaqContainer>
);

export default FaqAccordion;
