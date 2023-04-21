import React from 'react';
import { Stack, Center, Text } from '@mantine/core';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Icon = styled.div`
  font-size: 48px;
`;

const TextMore = styled(Text)`
  ::after {
    content: '>';
    display: inline-block;
    transform: translate3d(15%, 0, 0);
  }
`;

/**
 * icon : 랜더링할 아이콘
 * title : bold체로 표현되는 Text
 * desc : Info 설명
 * href : 더 알아보기 클릭 시, 이동할 링크
 * @param {{icon, title, desc, href}} param0
 * @returns JSX
 */

const InfoCard = ({ icon, title, desc, href }) => (
  <Center sx={{ textAlign: 'center' }}>
    <Stack align="center">
      <Icon>{icon}</Icon>
      <Text fz="28px" fw="600">
        {title}
      </Text>
      <Text w={'60%'} sx={{ wordBreak: 'keep-all' }}>
        {desc}
      </Text>
      <Link to={href}>
        <TextMore>더 알아보기</TextMore>
      </Link>
    </Stack>
  </Center>
);

export default InfoCard;
