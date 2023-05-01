import React from 'react';
import { useNavigate } from 'react-router-dom';

const useGoBack = () => {
  const navigate = useNavigate();
  const goBack = React.useCallback(() => {
    navigate(-1);
  }, [navigate]);
  return goBack;
};

export default useGoBack;
