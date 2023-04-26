import React from 'react';
import { Card } from '@mantine/core';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const CardContent = styled(Card)`
  cursor: pointer;
  &:hover {
    transform: scale3d(1.02, 1.02, 1.02);
    transition: transform 0.2s;
  }
`;

const sizes = {
  xs: { w: '280px', h: '200px' },
  sm: { w: '380px', h: '200px' },
  md: { w: '280px', h: '400px' },
  lg: { w: '320px', h: '400px' },
  xl: { w: '380px', h: '400px' },
};

/**
 * to : Link태그의 to 프로퍼티, 클릭 시 이동할 경로 선택 / string
 * size : 카드 사이즈 / xs | sm | md | lg | xl
 * bg : 카드 배경 컬러
 * children : 카드 내용
 * @param {to, size, bg, children} param0
 * @returns
 */
const CardComponent = ({ to, size = 'md', bg, children }) => (
  <Link to={to}>
    <CardContent bg={bg} {...sizes[size]} shadow="xl" radius="md">
      {children}
    </CardContent>
  </Link>
);

export default CardComponent;
