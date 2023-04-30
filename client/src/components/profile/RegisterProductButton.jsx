import { Button } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { REGISTER_PRODUCT_PATH } from '../../routes/routePaths';

const RegisterProductButton = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(REGISTER_PRODUCT_PATH)} radius="xl" size="md" w="fit-content">
      기기 등록
    </Button>
  );
};

export default RegisterProductButton;
