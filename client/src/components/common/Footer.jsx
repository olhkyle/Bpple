import React from 'react';
import styled from '@emotion/styled';
import { Container, Flex, Text, Divider } from '@mantine/core';

const FooterContainer = styled.footer`
  background-color: var(--footer-bg-color);
  color: #6e6e73;
`;

const Wrapper = styled(Container)`
  min-width: 1024px;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  font-size: 0.75rem;
`;

const LogoContainer = styled.div`
  width: 28px;
  height: 28px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const footerContents = {
  regulations: ['개인정보 처리방침', '웹 사이트 이용약관', '판매 및 환불', '법적 고지', '사이트 맵'],
  businessInfo: [
    '사업자등록번호 : 120-00-12345 | 통신판매업신고번호 : 제 2023-서울강남-00013호',
    '대표이사 : Cool JP | 주소 : 서울특별시 강남구 역삼동 826-21, 미왕빌딩',
    '대표전화 : 080-330-8877 | 팩스 : 02-6928-0000',
  ],
};

const Footer = () => {
  const { regulations, businessInfo } = footerContents;

  return (
    <FooterContainer>
      <Wrapper>
        <LogoContainer>
          <img src="logo-dark.svg" alt="logo" />
        </LogoContainer>
      </Wrapper>
      <Divider my="sm" sx={{ maxWidth: '1024px', margin: '0 auto' }} />
      <Wrapper>
        <Flex justify="flex-start" align="align-items" direction="column">
          {businessInfo.map((info, idx) => (
            <li key={idx}>{info}</li>
          ))}
        </Flex>
      </Wrapper>
      <Wrapper>
        <Text>Copyright © 2023 Apple Inc. 모든 권리 보유.</Text>
        <Flex sx={{ gap: '10px' }}>
          {regulations.map((regulation, idx) => (
            <li key={idx}>{regulation}</li>
          ))}
        </Flex>
        <Text sx={{ fontWeight: '500' }}>대한민국</Text>
      </Wrapper>
    </FooterContainer>
  );
};

export default Footer;
