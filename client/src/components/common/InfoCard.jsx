import React from 'react';
import styled from '@emotion/styled';
import { Stack, Center, Text, Button } from '@mantine/core';
import { RiArrowRightSLine } from 'react-icons/ri';

const Icon = styled.div`
  color: var(--font-color);
  font-size: 48px;
`;

const RightArrowIcon = styled(RiArrowRightSLine)`
  padding-top: 1px;
  font-size: 21px;
`;

/**
 * icon : 랜더링할 아이콘
 * title : bold체로 표현되는 Text
 * desc : Info 설명
 * onClick : 더 알아보기 클릭 시 Modal 띄우기
 * @param {{icon, title, desc, href}} param0
 * @returns JSX
 */

const InfoCard = ({ icon, title, desc, onClick }) => (
  <Center ta="center" sx={{ wordBreak: 'keep-all' }}>
    <Stack align="center">
      <Icon>{icon}</Icon>
      <Text fz="28px" fw="600">
        {title}
      </Text>
      <Text w={'60%'}>{desc}</Text>
      <Button
        radius="lg"
        pr="12px"
        onClick={onClick}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Text>더 알아보기</Text>
        <RightArrowIcon />
      </Button>
    </Stack>
  </Center>
);

export default InfoCard;
