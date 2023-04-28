import { Button } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { REGISTER_PRODUCT_PATH } from '../../routes/routePaths';

const RegisterProductButton = () => {
  const navigate = useNavigate();

  return (
    <Button radius="sm" size="md" w="fit-content" onClick={() => navigate(REGISTER_PRODUCT_PATH)}>
      기기 등록
    </Button>
  );
};

export default RegisterProductButton;
