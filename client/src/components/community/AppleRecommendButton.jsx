import React from 'react';
import { Button } from '@mantine/core';

const AppleRecommendButton = ({ onClick }) => (
  <Button onClick={onClick} radius="xl">
    애플 권장 답변
  </Button>
);

export default AppleRecommendButton;
