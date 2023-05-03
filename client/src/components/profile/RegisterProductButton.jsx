import React from 'react';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { REGISTER_PRODUCT_PATH } from '../../routes/routePaths';

const RegisterProductButton = () => {
  const navigate = useNavigate();

  return (
    <Button radius="xl" size="md" w="fit-content" onClick={() => navigate(REGISTER_PRODUCT_PATH)}>
      기기 등록
    </Button>
  );
};

export default RegisterProductButton;
